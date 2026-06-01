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

// Different resolutions
var b2 = img.select('B2');   // 10m
var b11 = img.select('B11'); // 20m

Map.addLayer(b2, {min:0, max:3000}, 'B2 10m');
Map.addLayer(b11, {min:0, max:3000}, 'B11 20m');

// Export B2
Export.image.toDrive({
 image: b2,
 description: 'B2_10m',
 region: roi,
 scale: 10,
 maxPixels: 1e13
});

// Export B11
Export.image.toDrive({
 image: b11,
 description: 'B11_20m',
 region: roi,
 scale: 20,
 maxPixels: 1e13
});
