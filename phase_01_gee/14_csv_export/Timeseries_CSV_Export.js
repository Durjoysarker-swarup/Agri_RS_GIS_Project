// Define AOI
var aoi = ee.Geometry.Polygon([
  [
    [89.220, 24.840],
    [89.220, 24.830],
    [89.235, 24.830],
    [89.235, 24.840]
  ]
]);

// Load Image
var s2 = ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED")
  .filterBounds(aoi)
  .filterDate('2024-01-01', '2024-05-31')
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10));


//Create mask condition
function maskSCL(image) {
 var scl = image.select('SCL');

 var mask = scl.neq(3)   // shadow
   .and(scl.neq(7))      // low cloud
   .and(scl.neq(8))      // medium cloud
   .and(scl.neq(9))      // high cloud
   .and(scl.neq(10));    // cirrus

 return image.updateMask(mask);
}


//Apply mask to collection
var maskedCollection = s2.map(maskSCL);


// NDVI TIME SERIES
var ndviCollection = maskedCollection.map(function(img){

  var ndvi = img.normalizedDifference(['B8', 'B4'])
                .rename('NDVI');

  var meanNdvi = ndvi.reduceRegion({
    reducer: ee.Reducer.mean(),
    geometry: aoi,
    scale: 10,
    maxPixels: 1e13
  });

  return ee.Feature(null, {
    'date': img.date().format('YYYY-MM-dd'),
    'NDVI': meanNdvi.get('NDVI')
  });

});

var ndviTable = ee.FeatureCollection(ndviCollection);


// EXPORT CSV
Export.table.toDrive({
  collection: ndviTable,
  description: 'NDVI_CSV_5_Month',
  folder: 'GEE_EXPORT',
  fileNamePrefix: 'ndvi_timeseries',
  fileFormat: 'CSV'
});
