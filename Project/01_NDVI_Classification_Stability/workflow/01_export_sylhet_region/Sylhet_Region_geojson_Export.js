//Load Bangladesh Admin Boundaries
var bd = ee.FeatureCollection("FAO/GAUL/2015/level2");


//Filter Sylhet District
var sylhet = bd.filter(ee.Filter.eq('ADM2_NAME', 'Sylhet'));

//Visualize
Map.centerObject(sylhet, 9);

Map.addLayer(
  sylhet,
  {color: 'red'},
  'Sylhet District'
);


//Convert to Geometry
var aoi = sylhet.geometry();

//Export geometry
Export.table.toDrive({
  collection: sylhet,
  description: 'sylhet_aoi',
  fileFormat: 'GeoJSON'
});
