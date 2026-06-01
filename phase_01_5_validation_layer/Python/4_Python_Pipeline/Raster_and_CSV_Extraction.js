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
  .filterDate('2024-01-01', '2024-01-31')
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10));


var image = s2.median().clip(aoi);



// RED + NIR
var red = image.select('B4');
var nir = image.select('B8');


// NDVI
var ndvi = image.normalizedDifference(['B8', 'B4'])
                .rename('NDVI');


// EXPORT RED
Export.image.toDrive({
  image: red,
  description: 'RED_BAND',
  folder: 'GEE_EXPORT',
  fileNamePrefix: 'red_band',
  region: aoi,
  scale: 10,
  maxPixels: 1e13
});


// EXPORT NIR
Export.image.toDrive({
  image: nir,
  description: 'NIR_BAND',
  folder: 'GEE_EXPORT',
  fileNamePrefix: 'nir_band',
  region: aoi,
  scale: 10,
  maxPixels: 1e13
});


// EXPORT NDVI TIFF
Export.image.toDrive({
  image: ndvi,
  description: 'NDVI_GEE',
  folder: 'GEE_EXPORT',
  fileNamePrefix: 'ndvi_gee',
  region: aoi,
  scale: 10,
  maxPixels: 1e13
});


// NDVI TIME SERIES
var ndviCollection = s2.map(function(img){

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
  description: 'NDVI_CSV',
  folder: 'GEE_EXPORT',
  fileNamePrefix: 'ndvi_timeseries',
  fileFormat: 'CSV'
});
