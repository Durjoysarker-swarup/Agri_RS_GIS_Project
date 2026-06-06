// =======================
// GRID
// =======================
var grid = ee.FeatureCollection(
  "projects/nifty-motif-494117-b5/assets/grid_100m"
);

// =======================
// AOI (Sylhet)
// =======================
var bd = ee.FeatureCollection("FAO/GAUL/2015/level2");

var aoi_fc = bd.filter(
  ee.Filter.eq('ADM2_NAME', 'Sylhet')
);

var aoi = aoi_fc.geometry();

// =======================
// VISUALIZATION
// =======================
Map.centerObject(aoi, 9);

Map.addLayer(aoi_fc, {color: 'red'}, 'Sylhet Boundary');
Map.addLayer(grid, {color: 'blue'}, 'Grid');

// =======================
// SENTINEL-2
// =======================
var s2 = ee.ImageCollection(
  "COPERNICUS/S2_SR_HARMONIZED"
)
.filterBounds(aoi)
.filterDate('2025-06-01', '2025-11-30');

print("Sentinel Images:", s2.size());
print("Grid Cells:", grid.size());

// =======================
// RGB
// =======================
var rgb = s2.median();

Map.addLayer(
  rgb.clip(aoi),
  {
    bands: ['B4','B3','B2'],
    min: 0,
    max: 3000
  },
  'RGB Composite'
);



// PIPELINE A — STANDARD MASK
function maskA(image) {
  var scl = image.select('SCL');

  var mask = scl.neq(3)   // cloud shadow
    .and(scl.neq(8))      // cloud medium probability
    .and(scl.neq(9))      // cloud high probability
    .and(scl.neq(10))     // cirrus
    .and(scl.neq(11));    // snow

  return image.updateMask(mask);
}

//PIPELINE B — STRICT MASK
function maskB(image) {
  var scl = image.select('SCL');

  var mask = scl.eq(4)   // vegetation
    .or(scl.eq(5))       // bare soil
    .or(scl.eq(6));      // water

  return image.updateMask(mask);
}

// PIPELINE C — WEAK MASK
function maskC(image) {
  var qa = image.select('QA60');

  var cloudBitMask = 1 << 10;
  var cirrusBitMask = 1 << 11;

  var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
    .and(qa.bitwiseAnd(cirrusBitMask).eq(0));

  return image.updateMask(mask);
}

//NDVI Function
function addNDVI(image) {

  var ndvi = image.normalizedDifference(['B8', 'B4'])
    .rename('NDVI');

  return image.addBands(ndvi);
}


var pipelineA = s2
  .map(maskA)
  .map(addNDVI);
  
var pipelineB = s2
  .map(maskB)
  .map(addNDVI);
  
var pipelineC = s2
  .map(maskC)
  .map(addNDVI);


// Final composite
var NDVI_A = pipelineA.select('NDVI').median();
var NDVI_B = pipelineB.select('NDVI').median();
var NDVI_C = pipelineC.select('NDVI').median();

// Reducer function
var reducer = ee.Reducer.mean();

// Zonal stats for A
var tableA = NDVI_A.reduceRegions({
  collection: grid,
  reducer: reducer,
  scale: 10
}).map(function(f) {
  return f.set('NDVI_A', f.get('mean'));
});



// Zonal stats for B
var tableB = NDVI_B.reduceRegions({
  collection: grid,
  reducer: reducer,
  scale: 10
}).map(function(f) {
  return f.set('NDVI_B', f.get('mean'));
});

// Zonal stats for C
var tableC = NDVI_C.reduceRegions({
  collection: grid,
  reducer: reducer,
  scale: 10
}).map(function(f) {
  return f.set('NDVI_C', f.get('mean'));
});


// Marge all table into one
var merged = tableA
  .map(function(f) {
    var id = f.get('Grid_ID');

    var b = tableB.filter(ee.Filter.eq('Grid_ID', id)).first();
    var c = tableC.filter(ee.Filter.eq('Grid_ID', id)).first();

    return ee.Feature(null, {
      Grid_ID: id,
      NDVI_A: f.get('NDVI_A'),
      NDVI_B: b.get('NDVI_B'),
      NDVI_C: c.get('NDVI_C')
    });
  });
  
  // Clean null values
  var cleaned = merged.filter(ee.Filter.notNull([
  'NDVI_A', 'NDVI_B', 'NDVI_C'
]));


// Export csv
Export.table.toDrive({
  collection: cleaned,
  folder: 'project_CC',
  description: 'NDVI_Grid_Comparison',
  fileFormat: 'CSV'
});

// Export the NDVI raster for each pipeline
var exportRegion = aoi;

var scale = 10; // Sentinel-2 resolution


Export.image.toDrive({

  image: NDVI_A.clip(exportRegion),

  description: 'NDVI_Pipeline_A',

  folder: 'project_CC',

  fileNamePrefix: 'NDVI_A',

  region: exportRegion,

  scale: scale,

  maxPixels: 1e13

});



Export.image.toDrive({

  image: NDVI_B.clip(exportRegion),

  description: 'NDVI_Pipeline_B',

  folder: 'project_CC',

  fileNamePrefix: 'NDVI_B',

  region: exportRegion,

  scale: scale,

  maxPixels: 1e13

});





Export.image.toDrive({

  image: NDVI_C.clip(exportRegion),

  description: 'NDVI_Pipeline_C',

  folder: 'project_CC',

  fileNamePrefix: 'NDVI_C',

  region: exportRegion,

  scale: scale,

  maxPixels: 1e13

});

