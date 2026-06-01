# Google Earth Engine (GEE) to QGIS: Agricultural Remote Sensing Pipeline

This repository contains a structured, 6-day learning and implementation workflow for processing satellite imagery. The curriculum bridges cloud-based planetary computing (**Google Earth Engine**) with desktop geospatial analysis (**QGIS**) to extract actionable biophysical indicators for agricultural monitoring.

---

## Curriculum Overview

### [Day 0] NDVI Calculation & Raster Foundations
* **Objective:** Transition from visual RGB representations to quantitative scientific raster data.
* **Core Concepts:** Sentinel-2 band structures ($B2, B3, B4, B8$), Digital Numbers (DN) vs. raw reflectance scaling, and local NDVI calculation using the QGIS Raster Calculator.
* **Key Formula:** $$\text{NDVI} = \frac{\text{NIR} - \text{Red}}{\text{NIR} + \text{Red}}$$

### [Day 1] ROI, Vector Data, and Coordinate Reference Systems (CRS)
* **Objective:** Export vector boundaries from GEE and master spatial alignment in QGIS.
* **Core Concepts:** Geometries vs. Features vs. FeatureCollections, Shapefile vs. GeoJSON structures, and the critical distinction between Geographic CRS ($\text{EPSG:4326}$) and Projected CRS ($\text{EPSG:32646}$) for accurate area calculations.

### [Day 2] Cloud Masking Impact Analysis
* **Objective:** Execute a controlled experiment to evaluate the statistical impact of cloud removal.
* **Core Concepts:** Comparative raster visualization, generating difference rasters ($\Delta\text{NDVI}$), and interpreting histogram shifts to identify atmospheric noise vs. true vegetation signals.

### [Day 3] Spatial Resolution & Resampling Methodologies
* **Objective:** Handle multi-resolution satellite bands and understand pixel interpolation math.
* **Core Concepts:** Mixed pixels in coarse resolutions ($10\text{m}$ vs. $20\text{m}$), and the trade-offs of spatial resampling algorithms:
  * **Nearest Neighbor:** Preserves raw categorical values; blocky texture.
  * **Bilinear Interpolation:** Smooths continuous data using 4 neighboring pixels.
  * **Cubic Convolution:** Highly smoothed output using 16 neighbors; risk of artificial edge artifacts.

### [Day 4] NDVI Classification & Cartographic Design
* **Objective:** Transform continuous spectral indices into thematic maps suitable for publication.
* **Core Concepts:** Thresholding strategies (Manual, Equal Interval, Quantile, Jenks Natural Breaks), and professional print layout production including scale bars, dynamic legends, orientation indicators, and metadata sourcing.

### [Day 5] Temporal NDVI Stacking & Zonal Statistics
* **Objective:** Extract chronological crop phenology signals across a growing season.
* **Core Concepts:** Building Virtual Rasters (VRT) to create multi-band temporal stacks, manual layer swipe comparisons, and executing **Zonal Statistics** to aggregate pixel-level noise into clean, field-level agronomic datasets.

---

## 🛠️ Core Tool Stack
* **Cloud Processing:** Google Earth Engine (JavaScript API)
* **Desktop GIS:** QGIS 3.x
* **Primary Dataset:** Sentinel-2 Level-2A (Bottom-of-Atmosphere Reflectance)

## Target Learning Outcomes
1. **Data Integrity:** Understanding that pixel values are physical measurements, not just digital colors.
2. **Analytical Rigor:** Avoiding common beginner mistakes like calculating distance/area in geographic coordinate systems.
3. **Agronomic Insights:** Converting raw spectral reflectance charts into concrete biological timelines (greening, peak canopy, senescence).
