// STEP 1 — CREATE MULTIPLE GEOMETRIES

// Field 1
var field1_geom = ee.Geometry.Polygon([
 [
   [91.820, 24.890],
   [91.825, 24.890],
   [91.825, 24.885],
   [91.820, 24.885],
   [91.820, 24.890]
 ]
]);
// Field 2
var field2_geom = ee.Geometry.Polygon([
 [
   [91.830, 24.892],
   [91.835, 24.892],
   [91.835, 24.887],
   [91.830, 24.887],
   [91.830, 24.892]
 ]
]);

// Field 3
var field3_geom = ee.Geometry.Polygon([
 [
   [91.840, 24.894],
   [91.845, 24.894],
   [91.845, 24.889],
   [91.840, 24.889],
   [91.840, 24.894]
 ]
]);


// STEP 2 — CONVERT TO FEATURES

// Feature 1
var field1 = ee.Feature(field1_geom, {
 field_id: 1,
 crop: 'Rice',
 district: 'Sylhet',
 year: 2026
});

// Feature 2
var field2 = ee.Feature(field2_geom, {
 field_id: 2,
 crop: 'Tea',
 district: 'Sylhet',
 year: 2026
});

// Feature 3
var field3 = ee.Feature(field3_geom, {
 field_id: 3,
 crop: 'Wheat',
 district: 'Sylhet',
 year: 2025
});

// STEP 3 — CREATE FEATURE COLLECTION
var fields = ee.FeatureCollection([
 field1,
 field2,
 field3
]);


// STEP 4 — DISPLAY ON MAP

Map.centerObject(fields, 13);

Map.addLayer(fields, {
 color: 'yellow'
}, 'Agricultural Fields');



// STEP 6 — EXPORT AS SHAPEFILE

Export.table.toDrive({
 collection: fields,
 description: 'Agricultural_Fields_SHP',
 folder: 'GEE_Exports',
 fileFormat: 'SHP'
});


// STEP 7 — EXPORT AS GEOJSON


Export.table.toDrive({
 collection: fields,
 description: 'Agricultural_Fields_GeoJSON',
 folder: 'GEE_Exports',
 fileFormat: 'GeoJSON'
});
