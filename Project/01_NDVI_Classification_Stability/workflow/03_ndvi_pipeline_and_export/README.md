# NDVI Pipeline and Export (Google Earth Engine)

## Objective

This module implements the full remote sensing processing pipeline in Google Earth Engine (GEE).  
It generates NDVI composites under three different cloud masking strategies and extracts zonal statistics over a 100m analysis grid for agricultural risk analysis.

The final outputs are:
- NDVI raster maps (A, B, C)
- Grid-level NDVI table (CSV)

---

## Study Area

- Region: Sylhet District, Bangladesh
- Source: FAO GAUL Level-2 administrative boundaries
- AOI is extracted dynamically from GAUL dataset and clipped for analysis

---

## Data Used

- Sentinel-2 Surface Reflectance (Harmonized)
  - Collection: `COPERNICUS/S2_SR_HARMONIZED`
  - Time period: June 1, 2025 – November 30, 2025
- Spatial Grid:
  - 200m × 200m grid
  - Stored as a pre-uploaded GEE asset

---

## Workflow Overview

### Step 1 — Load AOI (Sylhet)
- Extract Sylhet district boundary from GAUL dataset
- Convert FeatureCollection → Geometry for spatial operations

---

### Step 2 — Load Analysis Grid
- Import pre-generated 100m grid from GEE assets
- This grid acts as the spatial unit for zonal statistics

---

### Step 3 — Sentinel-2 Filtering
- Filter imagery by:
  - AOI boundary
  - Time range (2025-06-01 to 2025-11-30)

---

### Step 4 — Cloud Masking Pipelines

Three independent preprocessing pipelines were created:

#### Pipeline A — Standard SCL Mask
Removes:
- Cloud shadow (3)
- Medium probability clouds (8)
- High probability clouds (9)
- Cirrus (10)
- Snow (11)

#### Pipeline B — Strict Mask
Keeps only:
- Vegetation (4)
- Bare soil (5)
- Water (6)

#### Pipeline C — Weak Mask (QA60)
Uses bitmasking:
- Removes cloud (bit 10)
- Removes cirrus (bit 11)

---

### Step 5 — NDVI Computation

NDVI is computed using:
NDVI = (NIR - RED) / (NIR + RED)

Bands used:
- NIR = B8
- RED = B4

NDVI is calculated for each pipeline separately.

---

### Step 6 — Temporal Aggregation

For each pipeline:
- NDVI images are combined using **median composite**
- This reduces noise from cloud contamination

Outputs:
- NDVI_A (Pipeline A)
- NDVI_B (Pipeline B)
- NDVI_C (Pipeline C)

---

### Step 7 — Zonal Statistics

For each grid cell:
- Mean NDVI is extracted using `reduceRegions()`
- Scale used: **10m (Sentinel-2 native resolution)**

Outputs:
- tableA → NDVI_A per grid cell
- tableB → NDVI_B per grid cell
- tableC → NDVI_C per grid cell

---

### Step 8 — Table Merging

All three pipelines are merged using:
- Grid_ID as the spatial key

Final structure:

| Grid_ID | NDVI_A | NDVI_B | NDVI_C |

Null values are removed using filtering.

---

### Step 9 — Export Outputs

#### CSV Export
Final grid-level dataset exported as:

- `NDVI_Grid_Comparison.csv`

Key contains:
- Grid_ID
- NDVI_A
- NDVI_B
- NDVI_C

---

#### Raster Export (GeoTIFF)

Each NDVI composite is exported:

- NDVI_A.tif
- NDVI_B.tif
- NDVI_C.tif

Settings:
- Scale: 10m
- Region: Sylhet AOI
- Format: GeoTIFF

---

## Key Technical Insight

This pipeline isolates the effect of **cloud masking strategy alone**, keeping:
- Sensor (Sentinel-2)
- Index (NDVI)
- Region
- Time window

constant.

This allows measurement of:
> "How much preprocessing alone changes agricultural risk classification."

---

## Outputs Generated

### Raster Maps
- NDVI_A.tif
- NDVI_B.tif
- NDVI_C.tif

### Tabular Data
- NDVI_Grid_Comparison.csv

---

## Importance

This stage forms the **core data generation layer** for downstream analysis:
- Threshold classification
- Flip rate computation
- Confusion matrix analysis
- QGIS visualization
