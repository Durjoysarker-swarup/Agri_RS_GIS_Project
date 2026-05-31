// Define ROI
var roi = 
    ee.Geometry.Polygon(
        [[[91.8,24.8],
          [91.8,24.5],
          [92.2,24.5],
          [92.2,24.8]]]);
Map.centerObject(roi, 10);
Map.addLayer(roi, {color: 'red'}, 'ROI');
          
// Sentinel-2 Image
var collection = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')

          
// DEFINE CLOUD MASK FUNCTION
function maskS2clouds(image) {
  var scl = image.select('SCL');

  // Keep vegetation, bare soil, water etc.
  var mask = scl.neq(3) // cloud shadow
      .and(scl.neq(8))  // cloud medium probability
      .and(scl.neq(9))  // cloud high probability
      .and(scl.neq(10)) // cirrus
      .and(scl.neq(11)); // snow

  return image.updateMask(mask);
}
//DEFINE NDVI FUNCTION
function addNDVI(image) {
  var ndvi = image.normalizedDifference(['B8', 'B4'])
                  .rename('NDVI');

  return image.addBands(ndvi);
}
          
//DEFINE YEAR
var year = 2025;

//CREATE MONTH LIST
var months = ee.List.sequence(1, 4); // this give a list --> [1,2,3,4]. You can extend this.


//LOOP THROUGH MONTHS
months.getInfo().forEach(function(month) {

  var start = ee.Date.fromYMD(year, month, 1);
  var end = start.advance(1, 'month');

  var monthly = collection
      .filterBounds(roi)
      .filterDate(start, end)
      .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20))
      .map(maskS2clouds)
      .map(addNDVI);

  var composite = monthly.median();

  var ndvi = composite.select('NDVI');


  Export.image.toDrive({
    image: ndvi,
    description: 'NDVI_' + year + '_' + month,
    folder: 'GEE_NDVI',
    fileNamePrefix: 'NDVI_' + year + '_' + month,
    region: roi,
    scale: 10,
    maxPixels: 1e13
  });

});
