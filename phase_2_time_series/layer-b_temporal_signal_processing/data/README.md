# Dataset

## Overview

This directory contains the Sentinel-2 NDVI time series used throughout **Layer B**. The same dataset is used for all practical exercises, including smoothing, interpolation, temporal dependence, change detection, and uncertainty analysis.

Using a single dataset across all modules allows direct comparison of how different processing methods affect the same vegetation signal.

---

## Files

| File | Description |
|------|-------------|
| `sentinel2_ndvi_2023_2025.csv` | Sentinel-2 NDVI time series exported from Google Earth Engine. |
| `extract_ndvi_timeseries.js` | Google Earth Engine script used to generate the NDVI time series. |

---

## Dataset Information

| Property | Value |
|----------|-------|
| Satellite | Sentinel-2 Level-2A Surface Reflectance |
| Vegetation Index | NDVI |
| Platform | Google Earth Engine |
| Time Period | 2023–2025 |
| Cloud Mask | Scene Classification Layer (SCL) |
| Output Format | CSV |

---

## Dataset Structure

The exported CSV contains the following fields:

| Column | Description |
|---------|-------------|
| `date` | Image acquisition date |
| `NDVI` | Mean NDVI value for the study field |
| `system:index` | Sentinel-2 image identifier |
| `.geo` | Geometry information exported by Google Earth Engine |

For most analyses in this repository, only the `date` and `NDVI` columns are required.

---

## Data Generation Workflow

```text
Sentinel-2 Level-2A
        │
        ▼
Cloud Masking (SCL)
        │
        ▼
NDVI Calculation
        │
        ▼
Field-Level Mean NDVI
        │
        ▼
Time Series Extraction
        │
        ▼
CSV Export
```

The complete extraction workflow is provided in `extract_ndvi_timeseries.js`.

---

## Reproducibility

This repository is fully reproducible.

To regenerate the dataset:

1. Open the Google Earth Engine Code Editor.
2. Load `extract_ndvi_timeseries.js`.
3. Update the asset path if necessary.
4. Run the script.
5. Export the resulting NDVI time series as a CSV.

---

## Notes

- The dataset contains **raw satellite observations** after cloud masking.
- No smoothing, interpolation, or temporal filtering has been applied.
- All temporal processing demonstrated in Layer B starts from this raw NDVI time series.


