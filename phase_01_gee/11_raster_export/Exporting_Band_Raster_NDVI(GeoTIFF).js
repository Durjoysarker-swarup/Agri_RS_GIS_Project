// ROI
var roi = ee.Geometry.Rectangle([91.70, 24.80, 91.90, 24.95]);
Map.centerObject(roi, 11);

// Sentinel-2 Image
var img = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
 .filterBounds(roi)
 .filterDate('2024-01-01', '2024-03-01')
 .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))
 .median()
 .clip(roi);


// Exporting band
// Different resolutions
var b2 = img.select('B2');   // 10m
var b11 = img.select('B11'); // 20m

// Export B2
Export.image.toDrive({
 image: b2,
 description: 'B2_10m',
 region: roi,
 folder: 'GEE_NDVI',
 scale: 10,
 maxPixels: 1e13
});

// Export B11
Export.image.toDrive({
 image: b11,
 description: 'B11_20m',
 region: roi,
 folder: 'GEE_Export',
 scale: 20,
 maxPixels: 1e13
});


// NDVI calculation
var ndvi = img.normalizedDifference(['B8', 'B4']).rename('NDVI');



//Exporting NDVI
Export.image.toDrive({
  image: ndvi,
  description: 'NDVI_Export',
  scale: 10,
  region: roi,
  folder:'GEE_Export',
  fileFormat: 'GeoTIFF'
});


//Export Bands as Raster
Export.image.toDrive({
 image: img.select(['B2', 'B3', 'B4', 'B8']),
 description: 'Sentinel2_Sylhet',
 scale: 10,
 region: roi,
 folder: 'GEE_Export',
 fileFormat: 'GeoTIFF'
});

