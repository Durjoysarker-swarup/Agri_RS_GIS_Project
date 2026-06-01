// REGION OF INTEREST
var roi = ee.Geometry.Rectangle([91.7, 24.7, 92.0, 25.0]);

Map.centerObject(roi, 10);
Map.addLayer(roi, {color: 'red'}, 'ROI');


// LOAD SENTINEL-2 DATA
var collection = ee.ImageCollection('COPERNICUS/S2_SR')
  .filterBounds(roi)
  .filterDate('2023-01-01', '2023-12-31')
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 80))
  .select(['B4', 'B8', 'SCL']);

// 3. CLOUD MASK FUNCTION
function maskS2(image) {
  var scl = image.select('SCL');

  var mask = scl.neq(3)   // cloud shadow
    .and(scl.neq(8))      // medium cloud
    .and(scl.neq(9))      // high cloud
    .and(scl.neq(10))     // cirrus
    .and(scl.neq(11));    // snow

  return image.updateMask(mask);
}


// RAW (CLOUDY) NDVI PIPELINE
var rawComposite = collection.median().clip(roi);

var ndvi_cloudy = rawComposite
  .normalizedDifference(['B8', 'B4'])
  .rename('NDVI_CLOUDY');


// MASKED NDVI PIPELINE
var cleanCollection = collection.map(maskS2);
var cleanComposite = cleanCollection.median().clip(roi);

var ndvi_masked = cleanComposite
  .normalizedDifference(['B8', 'B4'])
  .rename('NDVI_MASKED');


// VISUAL CHECK (optional)
var vis = {
  min: -1,
  max: 1,
  palette: ['blue', 'white', 'green']
};

Map.addLayer(ndvi_cloudy, vis, 'NDVI Cloudy');
Map.addLayer(ndvi_masked, vis, 'NDVI Masked');


//EXPORT SETTINGS
var exportRegion = roi;
var scale = 10;


// EXPORT 1 — CLOUDY NDVI
Export.image.toDrive({
  image: ndvi_cloudy,
  description: 'NDVI_Cloudy_2023',
  folder: 'GEE_exports',
  fileNamePrefix: 'NDVI_cloudy_2023',
  region: exportRegion,
  scale: scale,
  maxPixels: 1e13,
  fileFormat: 'GeoTIFF'
});


// EXPORT 2 — MASKED NDVI
Export.image.toDrive({
  image: ndvi_masked,
  description: 'NDVI_Masked_2023',
  folder: 'GEE_exports',
  fileNamePrefix: 'NDVI_masked_2023',
  region: exportRegion,
  scale: scale,
  maxPixels: 1e13,
  fileFormat: 'GeoTIFF'
});
