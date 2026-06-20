// Sample_sylhet_field
var fields = ee.FeatureCollection(
  "projects/nifty-motif-494117-b5/assets/sample_fields"
);



// VISUALIZATION
Map.centerObject(fields, 9);
Map.addLayer(fields, {color: 'blue'}, 'Grid');


//Load data
var s2 = ee.ImageCollection("COPERNICUS/S2_SR")
  .filterBounds(fields)
  .filterDate('2024-07-01', '2024-11-30');
  
  
// Cloud Masking
function maskS2(image){

  var scl = image.select('SCL');

  var mask = scl.neq(3)
    .and(scl.neq(8))
    .and(scl.neq(9))
    .and(scl.neq(10));

  return image.updateMask(mask);
}

var clean = s2.map(maskS2);



// Compute NDVI
function addNDVI(img){

  var ndvi = img.normalizedDifference(
      ['B8','B4']
    )
    .rename('NDVI');

  return img.addBands(ndvi);
}

var ndviCollection = clean.map(addNDVI);


// Baseline NDVI image
var ndvi10 = ndviCollection
  .select('NDVI')
  .median()


//Core Geom only
var coreGeom = fields.map(function(f){
  var core = f.geometry().buffer(-2.5);
  return ee.Feature(core).copyProperties(f);
});

//Edge geom only
var edgeGeom = fields.map(function(f){
  var core = f.geometry().buffer(-2.5);
  var edge = f.geometry().difference(core);
  return ee.Feature(edge).copyProperties(f);
});

//Viusual Edge and Core
Map.addLayer(coreGeom,
            {color:'green'},
            'Core');


Map.addLayer(edgeGeom,
            {color:'red'},
            'Edge');


// AREA + RATIO TABLE
var fieldMetrics = fields.map(function(f){

  var core = f.geometry().buffer(-2.5);

  var core_area = core.area();
  var total_area = f.geometry().area();

  var edge_ratio = ee.Number(1)
    .subtract(core_area.divide(total_area));

  return f.set({
    core_area: core_area,
    total_area: total_area,
    edge_ratio: edge_ratio
  });
});

//NDVI CORE extraction
var ndvi_core = ndvi10.reduceRegions({
  collection: coreGeom,
  reducer: ee.Reducer.mean(),
  scale: 10
}).map(function(f){
  return f.set("NDVI_core", f.get("mean"));
});

//NDVI EDGE extraction
var ndvi_edge = ndvi10.reduceRegions({
  collection: edgeGeom,
  reducer: ee.Reducer.mean(),
  scale: 10
}).map(function(f){
  return f.set("NDVI_edge", f.get("mean"));
});

//TOTAL NDVI
var ndvi_total = ndvi10.reduceRegions({
  collection: fields,
  reducer: ee.Reducer.mean(),
  scale: 10
}).map(function(f){
  return f.set("NDVI_total", f.get("mean"));
});


//MERGE RESULTS
Export.table.toDrive({
  collection: ndvi_total,
  description: 'NDVI_total',
  fileFormat: 'CSV'
});

Export.table.toDrive({
  collection: ndvi_core,
  description: 'NDVI_core',
  fileFormat: 'CSV'
});

Export.table.toDrive({
  collection: ndvi_edge,
  description: 'NDVI_edge',
  fileFormat: 'CSV'
});

Export.table.toDrive({

collection:fieldMetrics,

description:'field_metrics',

fileFormat:'CSV'

});

