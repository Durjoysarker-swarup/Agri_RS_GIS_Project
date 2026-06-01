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

print(s2);

// Visualize RGB
Map.addLayer(
  s2,
  {
    bands: ['B4', 'B3', 'B2'],
    min: 0,
    max: 3000
  },
  'RGB'
);

// NDVI calculation
var ndvi = s2.normalizedDifference(['B8', 'B4']).rename('NDVI');
// Visualize
Map.centerObject(roi.buffer(5000), 10);
Map.addLayer(ndvi, {min: -1, max: 1, palette: ['blue','white','green']}, 'NDVI');


// Export NDVI to Google Drive
Export.image.toDrive({
  image: ndvi,
  description: 'NDVI_export',
  fileNamePrefix: 'NDVI_export',
  region: roi.buffer(5000),
  scale: 10,
  fileFormat: 'GeoTIFF'
});


//Export Bands to QGIS
Export.image.toDrive({
 image: s2.select(['B2', 'B3', 'B4', 'B8']),
 description: 'Sentinel2_Sylhet',
 scale: 10,
 region: roi.buffer(5000),
 fileFormat: 'GeoTIFF'
});
