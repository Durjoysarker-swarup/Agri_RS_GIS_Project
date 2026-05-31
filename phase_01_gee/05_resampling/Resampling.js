//Load dataset
var roi = ee.Geometry.Rectangle([91.7, 24.7, 92.0, 25.0]);
Map.addLayer(roi, {color: 'red'}, 'ROI');


var collection = ee.ImageCollection('COPERNICUS/S2_SR')
  .filterBounds(roi)
  .filterDate('2023-01-01', '2023-12-31')
  .select(['B2','B3','B4','B8','B11'])

// Median apply
var image = collection
  .median()
  .clip(roi)
  .divide(10000);
  
//Conmupte NDVI
var ndvi = image.normalizedDifference(['B8', 'B4']);

Map.addLayer(ndvi, {
 min: 0,
 max: 1,
 palette: ['white', 'green']
}, 'NDVI');


// Compute NDWI (mixed resolution)
var ndwi = image.normalizedDifference(['B3', 'B11']).rename('NDWI');

Map.addLayer(ndwi, {min: -1, max: 1, palette: ['brown', 'blue']}, 'NDWI'); // Hare the GEE autometically resample the B11 band by nearest logic.
