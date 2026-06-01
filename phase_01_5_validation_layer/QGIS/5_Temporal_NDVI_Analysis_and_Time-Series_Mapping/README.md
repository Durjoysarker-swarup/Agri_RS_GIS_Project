# 📚 Day 5 — Temporal NDVI Analysis and Time-Series Mapping

---

## PART 1 — UNDERSTAND TEMPORAL RASTER LOGIC

### Example Structure

| Month | Raster |
|------|--------|
| Jan | NDVI_Jan.tif |
| Feb | NDVI_Feb.tif |
| Mar | NDVI_Mar.tif |

---

## CORE PROPERTIES

Each raster has:

- Same area
- Same resolution
- Same projection
- Different date

---

## DEFINITION

This is called:

> TEMPORAL RASTER COLLECTION

(before zonal statistics)

---

## PIXEL LEVEL VIEW

Each pixel becomes a time signal:

| Pixel Location | Jan | Feb | Mar |
|--------------|-----|-----|-----|
| x1,y1 | 0.22 | 0.41 | 0.67 |

---

## KEY IDEA

This becomes:

> A TEMPORAL SIGNAL

This is the foundation of satellite crop monitoring.

---

## PART 2 — PREPARE MONTHLY NDVI DATA

You need multiple NDVI rasters:

- NDVI_2025_01.tif
- NDVI_2025_02.tif
- NDVI_2025_03.tif
- NDVI_2025_04.tif

---

## PART 3 — LOAD MULTI-DATE NDVI IN QGIS

Load all rasters.

### IMPORTANT

Maintain correct order:

- Jan → Feb → Mar → Apr

---

## PART 4 — MANUAL TEMPORAL COMPARISON

---

## METHOD 1 — TOGGLE COMPARISON

Switch layers ON/OFF and observe:

- Greening areas
- Stressed regions
- Water changes
- Cloud contamination
- Seasonal progression

---

## METHOD 2 — SWIPE COMPARISON

In QGIS:

View → Panels → Layer Styling

---

## USE CASE

Compare:

- Jan vs Feb
- Feb vs Mar

---

## WHAT TO OBSERVE

### Spatial Questions

- Which field changed first?
- Which zone stayed stressed?
- Which area recovered?

---

### Temporal Questions

- When did greening begin?
- When did decline start?
- Was growth gradual or sudden?

---

## PART 5 — TEMPORAL RASTER STACKING

---

## WHAT IS A RASTER STACK?

Instead of separate files:

- Jan.tif
- Feb.tif
- Mar.tif

You combine them into:

> MultiBand_TimeSeries.tif

---

## BAND STRUCTURE

| Band | Meaning |
|------|--------|
| Band 1 | Jan NDVI |
| Band 2 | Feb NDVI |
| Band 3 | Mar NDVI |

---

## DEFINITION

This is called:

> TEMPORAL STACK

---

## WHY IT MATTERS

Now:

- Each pixel contains time history
- ML models can use temporal features
- Phenology analysis becomes possible
- Temporal statistics become possible

---

## HOW TO CREATE STACK IN QGIS

Raster → Miscellaneous → Build Virtual Raster (VRT)

---

## SELECT INPUT LAYERS

Choose:

- Jan
- Feb
- Mar

---

## CRITICAL OPTION

Enable:

> Place each input file into separate band

---

## OUTPUT

- NDVI_TimeSeries.vrt

---

## VRT vs MERGE

| Method | Type | Storage |
|--------|------|--------|
| VRT | Virtual | Lightweight |
| Merge | Physical file | Large |

---

## RECOMMENDATION

- Use VRT for learning

---

## PART 6 — VISUALIZE FIELD-LEVEL TRENDS

---

## WHAT IS FIELD-LEVEL ANALYSIS?

Not:

- Single pixel analysis

But:

> Entire agricultural field behavior

---

## WHY IMPORTANT

- Pixels are noisy
- Agriculture depends on averages
- Field-level patterns are meaningful

---

## STEP 1 — LOAD FIELD BOUNDARY

### OPTION 1 — MANUAL DRAWING (BEST FOR LEARNING)

QGIS:

Layer → Create Layer → New Shapefile Layer

---

### SETTINGS

- Geometry: Polygon
- CRS: Same as raster

---

Save as:

- field_boundary.shp

---

### DRAWING

- Enable editing
- Use “Add Polygon Feature”
- Draw field manually
- Save edits

---

### OPTION 2 — GEE METHOD

- Draw polygon in Google Earth Engine
- Export geometry

---

## STEP 2 — ZONAL THINKING

Instead of:

- Pixel = 0.63

Think:

> Field average NDVI = 0.63

---

## PART 7 — ZONAL STATISTICS CALCULATION

---

## STEP 1 — LOAD DATA

Load:

- field_boundary.shp
- NDVI_TimeSeries.vrt

---

## STEP 2 — OPEN TOOL

Processing → Toolbox → Zonal Statistics

---

## STEP 3 — INPUT VECTOR

- field_boundary.shp

---

## STEP 4 — INPUT RASTER

- NDVI_TimeSeries.vrt

---

## STEP 5 — SELECT BAND

Start with:

- Band 1 (January NDVI)

---

## STEP 6 — COLUMN PREFIX

Set:

- Jan_

---

## STEP 7 — STATISTICS

Select:

- Mean

---

## STEP 8 — RUN TOOL

Execute processing.

---

## STEP 9 — CHECK OUTPUT

Open attribute table:

| id | Jan_mean |
|----|----------|
| 1 | 0.32 |
| 2 | 0.55 |

---

## MEANING

This represents:

> Average NDVI per field for January

---

## STEP 10 — REPEAT

Repeat for:

- February (Band 2 → Feb_)
- March (Band 3 → Mar_)

---

## IMPORTANT NOTE

This process is:

- Time-consuming
- Repetitive

That’s why Python or GEE is preferred later.

---

## PART 8 — TIME-SERIES CARTOGRAPHY

---

## MONTHLY MAP SERIES

Same symbology across months:

| Map | Meaning |
|-----|--------|
| January NDVI | Early growth |
| February NDVI | Vegetative expansion |
| March NDVI | Peak growth |
| April NDVI | Senescence |

---

## RESULT

This becomes:

> Visual crop story over time

---

## PART 9 — SCIENTIFIC INTERPRETATION

---

## CORE TRUTH

Remote sensing is NOT:

- Making pretty maps
- Color visualization

It is:

> Extracting biological meaning from data

---

## EXAMPLE

| Month | Mean NDVI |
|------|-----------|
| Jan | 0.21 |
| Feb | 0.48 |
| Mar | 0.73 |
| Apr | 0.39 |

---

## INTERPRETATION

- Jan → sparse vegetation
- Feb → active growth
- Mar → peak canopy
- Apr → senescence / harvest

---

## FINAL DEFINITION

### Temporal Stack

Combines NDVI from different months into one dataset where each pixel has a time series.

---

### Zonal Statistics

Converts pixel data into field-level summaries.

---

## COMBINED POWER

Together they give:

- Field-wise NDVI over time
- Crop growth patterns
- Stress detection signals
- Inputs for ML and prediction models
