// ============================================================
// STEP 1 — STUDY AREA (ROI)
// ============================================================
var roi = ee.Geometry.Polygon([
  [
    [91.73422516929422, 24.8979616251563],
    [91.77576722251688, 24.897650210772202],
    [91.77525223838602, 24.865726070595695],
    [91.73405350791727, 24.86479158127585],
    [91.73422516929422, 24.8979616251563]
  ]
]);


Map.centerObject(roi, 13);
Map.addLayer(roi, {color: 'red'});
print('ROI area (km²):', roi.area().divide(1e6));  // 15.10 is the answer


// Cropland mask — excludes ponds (water) and homes/roads (built-up) within the ROI
var worldcover = ee.ImageCollection('ESA/WorldCover/v200').first();
var croplandMask = worldcover
  .eq(40)
  .rename('cropland')
  .clip(roi); // 40 = cropland class

Map.addLayer(worldcover.clip(roi), {}, 'WorldCover (verify ponds/roads excluded)', false);
Map.addLayer(croplandMask.selfMask(), {palette: ['00ff00']}, 'Cropland mask (green = kept)', false);



// Quick visual scrub: print true-color RGB for several dates across the season
var dates = ['2023-10-15',  '2023-12-01'];

dates.forEach(function(d) {
  var img = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
    .filterBounds(roi)
    .filterDate(d, ee.Date(d).advance(10, 'day'))
    .sort('CLOUDY_PIXEL_PERCENTAGE')
    .first();
  Map.addLayer(img.clip(roi), {bands: ['B4','B3','B2'], min: 0, max: 3000},
    'RGB ' + d, false);
});



// PARAMETERS
var YEARS = [2022, 2023, 2024];
var SEASON_START_MD = [6, 1];
var SEASON_END_MD   = [12, 31];
 
var CLD_PRB_THRESH  = 40;
var NIR_DRK_THRESH  = 0.15;
var CLD_PRJ_DIST    = 2;
var BUFFER          = 50;
var SCALE           = 10;
 
var VALID_THRESHOLDS = [50, 60, 70, 80, 90];


// ============================================================
// STEP 2 — LOAD S2 SR + JOIN CLOUD PROBABILITY
// ============================================================

// Create a function that retrieves Sentinel-2 images and their matching s2cloudless cloud-probability images.
function get_s2_sr_cld_col(aoi, start, end) {


  // 1. Load Sentinel-2 Surface Reflectance
  var s2_sr_col = ee.ImageCollection(
      'COPERNICUS/S2_SR_HARMONIZED'
    )
    .filterBounds(aoi)      
    .filterDate(start, end); 


  // 2. Load s2cloudless cloud-probability images
  var s2_cloudless_col = ee.ImageCollection(
      'COPERNICUS/S2_CLOUD_PROBABILITY'
    )
    .filterBounds(aoi)      
    .filterDate(start, end); 


  // 3. Join Sentinel-2 with s2cloudless
  var joined = ee.ImageCollection(
    ee.Join.saveFirst('s2cloudless').apply({

      // Main collection
      primary: s2_sr_col,

      // Collection that provides cloud probability
      secondary: s2_cloudless_col,

      // Match images using their system:index
      condition: ee.Filter.equals({
        leftField: 'system:index',
        rightField: 'system:index'
      })
    })
  );



  // 4. Check how many images successfully found a match
  var beforeCount = joined.size();

  // Keep only Sentinel-2 images that have a corresponding s2cloudless image.
  var withMatch = joined.filter(
    ee.Filter.notNull(['s2cloudless'])
  );

  var afterCount = withMatch.size();

  print(
    '  [join check] before filter:',
    beforeCount,
    ' after filter:',
    afterCount
  );


  // 5. Return the matched collection
  return withMatch;
}
 
// ============================================================
// STEP 3 — BUILD AND MERGE THE THREE SEASON COLLECTIONS
// ============================================================

// 1. Run the same processing for each year: 2022, 2023 and 2024.
var seasonCollections = YEARS.map(function(y) {
  var start = ee.Date.fromYMD(
    y,
    SEASON_START_MD[0],
    SEASON_START_MD[1]
  );
  
  var end = ee.Date.fromYMD(
    y + 1,
    1,
    1
  );

  return get_s2_sr_cld_col(
    roi,
    start,
    end
  );
});



// 2. MERGE 2022 + 2023 + 2024
var s2_col = ee.ImageCollection(
  seasonCollections[0]
    .merge(seasonCollections[1])
    .merge(seasonCollections[2])
);



// 3. COUNT TOTAL OBSERVATION OPPORTUNITIES
print(
  'Total observation opportunities (all 3 seasons, post-join):',
  s2_col.size()
);



// ============================================================
// STEP 4 — CLOUD DETECTION
// ============================================================

function add_cloud_bands(img) {

  // Get the s2cloudless image that was attached to this Sentinel-2 image during Step 2.
  var cld_prb =
    ee.Image(img.get('s2cloudless'))
      .select('probability');

  // Convert cloud probability into a binary cloud mask.
  // If probability > CLD_PRB_THRESH:
  // cloud = 1 , Otherwise: cloud = 0
  var is_cloud =
    cld_prb
      .gt(CLD_PRB_THRESH)
      .rename('clouds');

  // Add both the original probability and the binary cloud mask to the image.
  return img.addBands(
    ee.Image([cld_prb, is_cloud])
  );
}

// ============================================================
// STEP 5 — CLOUD SHADOW DETECTION
// ============================================================

function add_shadow_bands(img) {

  // SCL class 6 = water.
  // We don't want dark water pixels to be incorrectly treated as cloud shadows.
  var not_water =
    img.select('SCL').neq(6);  //not water --> 1 and water --> 0


  // Sentinel-2 Surface Reflectance values are scaled by 10,000.
  var SR_BAND_SCALE = 1e4;


  // Identify dark pixels using Sentinel-2 B8 (NIR).
  // Dark pixel condition: B8 < NIR_DRK_THRESH
  // Then exclude water.
  var dark_pixels =
    img.select('B8')
      .lt(NIR_DRK_THRESH * SR_BAND_SCALE)
      .multiply(not_water)
      .rename('dark_pixels');


  // Determine the expected direction of cloud shadows from the solar azimuth.
  var shadow_azimuth =
    ee.Number(90)
      .subtract(
        ee.Number(
          img.get('MEAN_SOLAR_AZIMUTH_ANGLE')
        )
      );


  // Project detected clouds in the expected shadow direction.
  var cld_proj =
    img.select('clouds')
      .directionalDistanceTransform(
        shadow_azimuth,
        CLD_PRJ_DIST * 10
      )
      .reproject({
        crs: img.select(0).projection(),
        scale: 100
      })
      .select('distance')
      .mask()
      .rename('cloud_transform');


  // A shadow candidate occurs where: projected cloud area AND dark non-water pixels
  var shadows =
    cld_proj
      .multiply(dark_pixels)
      .rename('shadows');


  // Add all shadow-related bands.
  return img.addBands(
    ee.Image([
      dark_pixels,
      cld_proj,
      shadows
    ])
  );
}


// ============================================================
// STEP 6 — COMBINE CLOUD + SHADOW
// ============================================================

function add_cld_shdw_mask(img) {

  // First detect clouds.
  var img_cloud = add_cloud_bands(img);

  // Then detect cloud shadows.
  var img_cloud_shadow = add_shadow_bands(img_cloud);


  // Combine clouds and shadows. cloud = 1 OR shadow = 1 means contaminated.
  var is_cld_shdw =
    img_cloud_shadow
      .select('clouds')
      .add(
        img_cloud_shadow.select('shadows')
      )
      .gt(0);


  // Clean and expand the mask using morphological operations.
  is_cld_shdw =
    is_cld_shdw
      .focal_min(2) // clean and supress small feature
      .focal_max(BUFFER * 2 / 20)  // Expand the reamaining contaminated region
      .reproject({
        crs: img.select([0]).projection(),  // forced this particular mask computation to be evaluated at 20 m.
        scale: 20
      })
      .rename('cloudmask');


  // Return the image with the final cloud-shadow mask added.
  return img_cloud_shadow.addBands(
    is_cld_shdw
  );
}


// ============================================================
// STEP 7 — CLEAR-PIXEL COUNT & % — CROPLAND-AWARE
//
// A clear pixel must satisfy BOTH conditions:
//   (a) Cloud/shadow-free
//   (b) Classified as cropland
//
// Numerator   = clear cropland pixels
// Denominator = total cropland pixels
//
// Ponds, roads, homes, and other non-cropland areas
// are excluded from the denominator.
// ============================================================

function add_clear_pct(img) {

  // ----------------------------------------------------------
  // 1. Use the Sentinel-2 B4 (10 m) projection
  // ----------------------------------------------------------
  var proj = img.select('B4').projection();


  // ----------------------------------------------------------
  // 2. Identify CLEAR CROPLAND pixels
  //
  // cloudmask = 0 → cloud/shadow-free
  // croplandMask = 1 → cropland
  //
  // Therefore:
  // 1 = clear AND cropland
  // 0 = everything else
  // ----------------------------------------------------------
  var isClearCropland =
    img.select('cloudmask')
      .eq(0)
      .and(croplandMask)
      .rename('is_clear');


  // ----------------------------------------------------------
  // 3. Count CLEAR CROPLAND pixels
  //
  // SUM works because:
  //   1 = clear cropland
  //   0 = not clear cropland
  //
  // Therefore, SUM = number of clear cropland pixels.
  // ----------------------------------------------------------
  var clearStats = isClearCropland.reduceRegion({
    reducer: ee.Reducer.sum(),
    geometry: roi,
    crs: proj,
    scale: SCALE,
    maxPixels: 1e9,
    tileScale: 4
  });

  var clearCount =
    ee.Number(clearStats.get('is_clear'));


  // ----------------------------------------------------------
  // 4. Count TOTAL CROPLAND pixels
  //
  // selfMask() converts:
  //   cropland     = 1 → kept
  //   non-cropland = 0 → masked/ignored
  //
  // Therefore COUNT counts ONLY cropland pixels.
  // Ponds, roads, homes, etc. are excluded.
  // ----------------------------------------------------------
  var totalCroplandStats =
    croplandMask.selfMask().reduceRegion({
      reducer: ee.Reducer.count(),
      geometry: roi,
      crs: proj,
      scale: SCALE,
      maxPixels: 1e9,
      tileScale: 4
    });

  var totalCroplandCount =
    ee.Number(totalCroplandStats.get('cropland'));


  // ----------------------------------------------------------
  // 5. Calculate clear-cropland percentage
  //
  // Clear % =
  // (clear cropland pixels / total cropland pixels) × 100
  // ----------------------------------------------------------
  var clearPct =
    clearCount
      .divide(totalCroplandCount)
      .multiply(100);


  // ----------------------------------------------------------
  // 6. Attach the statistics to the Sentinel-2 image
  // ----------------------------------------------------------
  return img
    .addBands(isClearCropland)
    .set({
  
      // Number of clear cropland pixels
      CLEAR_PIXEL_COUNT: clearCount,
  
      // Total number of cropland pixels in the ROI
      TOTAL_CROPLAND_PIXEL_COUNT: totalCroplandCount,
  
      // Percentage of cropland that is clear
      CLEAR_PCT: clearPct,

  });
}


// ============================================================
// STEP 8 — NDVI — stats computed only over clear + cropland pixels
// ============================================================
function add_ndvi(img) {
  var ndvi = img.normalizedDifference(['B8', 'B4']).rename('NDVI');
  return img.addBands(ndvi);
}

function add_ndvi_stats(img) {
  var proj = img.select('B4').projection();
  var validMask = img.select('cloudmask').not().and(croplandMask); // get the clear cropland
  var ndviClear = img.select('NDVI').updateMask(validMask);  // NDVI only from clear cropland

  var stats = ndviClear.reduceRegion({
    reducer: ee.Reducer.median().combine({reducer2: ee.Reducer.mean(), sharedInputs: true}),
    geometry: roi,
    crs: proj,
    scale: SCALE,
    maxPixels: 1e9,
    tileScale: 4
  });

  return img.set({
    NDVI_MEDIAN: stats.get('NDVI_median'),
    NDVI_MEAN: stats.get('NDVI_mean')
  });
}

// ============================================================
// STEP 9 — VALIDITY CLASSIFICATION AT MULTIPLE THRESHOLDS
// ============================================================

// ============================================================
// METADATA
// ============================================================
function add_metadata(img) {
  var d = img.date();
  return img.set({
    OBSERVATION_OPPORTUNITY: 1,
    YEAR: d.get('year'),
    MONTH: d.get('month'),
    DOY: d.getRelative('day', 'year').add(1),
    SPACECRAFT: img.get('SPACECRAFT_NAME')
  });
}

// ============================================================
// RUN THE PIPELINE
// ============================================================
var processed = s2_col
    .map(add_cld_shdw_mask)  //cloud, shadow, cloudmask
    .map(add_ndvi)           //NDVI
    .map(add_clear_pct)      //is_clear, CLEAR_PIXEL_COUNT, TOTAL_CROPLAND_PIXEL_COUNT, CLEAR_PCT
    .map(add_ndvi_stats)     // NDVI_MEAN, NDVI_MEDIAN
    .map(add_metadata);      // OBS_OPPORTUNITY, YEAR, MONTH, DOY, SPACECRAFT

print('Final processed observation opportunities:', processed.size());


// ============================================================
// AUTOMATED REPRESENTATIVE-IMAGE QA
// ============================================================
function addQALayer(img, label) {
  img = ee.Image(img);
  Map.addLayer(img.select('cloudmask').clip(roi), {min: 0, max: 1, palette: ['white', 'red']},
    'Mask - ' + label, false);
  Map.addLayer(img.select('NDVI').updateMask(img.select('cloudmask').not().and(croplandMask)),
    {min: -0.2, max: 0.9, palette: ['brown', 'yellow', 'green']}, 'NDVI (clear+cropland) - ' + label, false);
  print('QA [' + label + '] date:', img.date().format('YYYY-MM-dd'),
        ' clear_pct:', img.get('CLEAR_PCT'));
}

var clearest   = processed.sort('CLEAR_PCT', false).first();
var mostCloudy = processed.sort('CLEAR_PCT', true).first();
var moderate   = processed.map(function(img) {
  return img.set('DIFF50', ee.Number(img.get('CLEAR_PCT')).subtract(50).abs());
}).sort('DIFF50').first();

addQALayer(clearest, 'Clearest image');
addQALayer(mostCloudy, 'Most-cloudy image');
addQALayer(moderate, 'Moderate (~50% clear)');

var chart = ui.Chart.feature.byFeature(
  processed.map(function(img) {
    return ee.Feature(null, {
      'date_millis': img.date().millis(),
      'NDVI_MEDIAN': img.get('NDVI_MEDIAN')
    });
  }),
  'date_millis',
  ['NDVI_MEDIAN']
)
.setChartType('ScatterChart')
.setOptions({
  title: 'NDVI (median, clear + cropland pixels) over time',
  hAxis: {
    title: 'Date',
    format: 'yyyy-MM-dd'
  },
  vAxis: {
    title: 'Median NDVI'
  },
  pointSize: 4,
  legend: {
    position: 'none'
  }
});

print(chart);

// ============================================================
// EXPORT — observation table for Part 3
// ============================================================
var table = processed.map(function(img) {
  return ee.Feature(null, {
    'date':               img.date().format('YYYY-MM-dd'),
    'year':               img.get('YEAR'),
    'month':              img.get('MONTH'),
    'doy':                img.get('DOY'),
    'spacecraft':         img.get('SPACECRAFT'),
    'scene_cloud_pct':    img.get('CLOUDY_PIXEL_PERCENTAGE'),
    'clear_pixel_count':  img.get('CLEAR_PIXEL_COUNT'),
    'total_cropland_pixel_count': img.get('TOTAL_CROPLAND_PIXEL_COUNT'),
    'clear_pct':          img.get('CLEAR_PCT'),
    'ndvi_median':        img.get('NDVI_MEDIAN'),
    'ndvi_mean':          img.get('NDVI_MEAN')
  });
});

Export.table.toDrive({
  collection: table,
  description: 'sylhet_aman_observations_2022_2024',
  folder: 'sylhet_ndvi_project',
  fileNamePrefix: 'sylhet_aman_observations_2022_2024',
  fileFormat: 'CSV'
});




