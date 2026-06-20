// =======================
// Sample_sylhet_field
// =======================
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

print("Number of Images", clean.size());

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
var proj = s2.first()
  .select('B8')
  .projection();

var ndvi10 = ndviCollection
  .select('NDVI')
  .median()
  .setDefaultProjection(proj);

// Visual  
Map.addLayer(
  ndvi10,
  {
    min:0,
    max:1,
    palette:['red','yellow','green']
  },
  'NDVI'
);




//Create NDVI_20m
var ndvi20 = ndvi10
  .reduceResolution({
    reducer: ee.Reducer.mean(),
    maxPixels: 1024
  })
  .reproject({
    crs: ndvi10.projection(),
    scale: 20
  });
  
  //Create NDVI_30m
  var ndvi30 = ndvi10
  .reduceResolution({
    reducer: ee.Reducer.mean(),
    maxPixels: 1024
  })
  .reproject({
    crs: ndvi10.projection(),
    scale: 30
  });
  
  //Visual comparison
  Map.addLayer(
  ndvi20,
  {
    min:0,
    max:1,
    palette:['red','yellow','green']
  },
  'NDVI 20m'
);

Map.addLayer(
  ndvi30,
  {
    min:0,
    max:1,
    palette:['red','yellow','green']
  },
  'NDVI 30m'
);


// check the projection
print("NDVI 10m", ndvi10.projection());
print("NDVI 20m", ndvi20.projection());
print("NDVI 30m", ndvi30.projection());


// Extract Statistics

//for 10m
var stats10 = ndvi10.reduceRegions({
  collection: fields,
  reducer: ee.Reducer.mean(),
  scale: 10
});
//for 20m
var stats20 = ndvi20.reduceRegions({
  collection: fields,
  reducer: ee.Reducer.mean(),
  scale: 20
});
//for 30m
var stats30 = ndvi30.reduceRegions({
  collection: fields,
  reducer: ee.Reducer.mean(),
  scale: 30
});


// Check a few record
print(stats10.limit(5));
//print(stats20.limit(1).select(['field_id', 'mean'])); //heavy work
//print(stats30.limit(1).select(['field_id', 'mean'])); //heavy work


// Extract CSV
Export.table.toDrive({
  collection: stats10,
  description: 'NDVI_10m',
  fileFormat: 'CSV'
});

Export.table.toDrive({
  collection: stats20,
  description: 'NDVI_20m',
  fileFormat: 'CSV'
});

Export.table.toDrive({
  collection: stats30,
  description: 'NDVI_30m',
  fileFormat: 'CSV'
});
