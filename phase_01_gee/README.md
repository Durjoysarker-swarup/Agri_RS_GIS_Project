# PHASE 1 — Google Earth Engine (GEE) Core Skills

This phase focuses on building a strong foundation in Google Earth Engine (GEE) for remote sensing and agricultural analysis.

The goal is to understand how satellite imagery is transformed into reliable spatial and temporal information through filtering, cloud masking, spectral analysis, spatial aggregation, and time-series extraction.

---

## Learning Objectives

By the end of this phase, you should be able to:

* Understand GEE's data model and computation system
* Work with `Image` and `ImageCollection` objects
* Apply filtering and reducers correctly
* Create and manage ROIs, buffers, and projections
* Perform cloud masking and data cleaning
* Understand band resolution and resampling effects
* Compute and interpret NDVI
* Extract field-level statistics and time series
* Build a complete remote sensing workflow from raw imagery to analysis-ready data
* Export rasters, vectors, and tabular outputs for further analysis

---

## Contents

| Day | Topic                             |
| --- | --------------------------------- |
| 01  | GEE System & Image Architecture   |
| 02  | Filtering & Reducers              |
| 03  | ROI, Buffer & CRS Thinking        |
| 04  | Cloud Masking                     |
| 05  | Spectral Bands & Resampling       |
| 06  | NDVI Computation                  |
| 07  | NDVI Interpretation & Limitations |
| 08  | Time Series & Zonal Statistics    |
| 09  | Spatial Aggregation Thinking      |
| 10  | Full Pipeline Integration         |
| 11  | Raster & NDVI Export              |
| 12  | Shapefile Export                  |
| 13  | Monthly NDVI Export               |
| 14  | Time-Series CSV Export            |

---

## Folder Structure

```text
phase_01_gee_core_skills/
│
├── README.md
│
├── day_01_image_architecture/
├── day_02_filtering_reducers/
├── day_03_roi_buffer_crs/
├── day_04_cloud_masking/
├── day_05_resampling/
├── day_06_ndvi_computation/
├── day_07_ndvi_interpretation/
├── day_08_time_series/
├── day_09_spatial_aggregation/
├── day_10_pipeline_integration/
├── day_11_raster_export/
├── day_12_shapefile_export/
├── day_13_monthly_ndvi_export/
└── day_14_csv_export/
```

Each folder contains:

* Notes (`README.md`)
* GEE scripts
* Outputs and examples
* Practice exercises (if applicable)

---

## Key Idea

Remote sensing is not image processing.

It is the transformation of physical measurements into meaningful agricultural information through a scientifically valid workflow.
