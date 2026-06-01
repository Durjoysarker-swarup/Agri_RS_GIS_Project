// DEFINE ROI
var roi = ee.Geometry.Point([91.8687, 24.8949]);
Map.centerObject(roi, 10);
Map.addLayer(roi, {color: 'red'}, 'ROI');

// LOAD SENTINEL-2 SR
var s2 = ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED")
 .filterBounds(roi)
 .filterDate('2024-01-01', '2024-03-01')
 .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10)) //Keep only images where cloud coverage is less than 10%
 .median();



// NDVI calculation
var ndvi = s2.normalizedDifference(['B8', 'B4']).rename('NDVI');


// Export NDVI to Google Drive
Export.image.toDrive({
  image: ndvi,
  description: 'NDVI_export',
  fileNamePrefix: 'NDVI_export',
  region: roi.buffer(5000),
  scale: 10,
  fileFormat: 'GeoTIFF'
});
