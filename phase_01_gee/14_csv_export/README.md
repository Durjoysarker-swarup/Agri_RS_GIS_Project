# Google Earth Engine (GEE) Spatiotemporal NDVI Extraction & CSV Export Pipeline

This repository contains a Google Earth Engine script that automates the calculation of spatial statistics over a designated Area of Interest (AOI) across a 5-month timeline, exporting the final aggregated data as a flat-file database.

## What the Script Does

### 1. Spatial Initialization
* Establishes a localized bounding box polygon defining the target Area of Interest (AOI).

### 2. Scene Collection Filtering & SCL Masking
* Queries the **Sentinel-2 Surface Reflectance Harmonized** data catalogue.
* Constrains the imagery pipeline to an exact 5-month window (January 1, 2024, to May 31, 2024) and retains only scenes containing less than 10% total cloud cover.
* Runs a pixel-by-pixel Scene Classification Layer (SCL) validation routine to explicitly discard cloud shadows, low-probability clouds, medium-probability clouds, high-probability clouds, and thin cirrus formations.

### 3. Integrated Vector & Matrix Reduction
* Maps an inline processing function over each remaining valid clear-sky scene in the collection:
  * Computes the normalized difference ratio between the Near-Infrared (B8) and Red (B4) channels to isolate **NDVI**.
  * Executes an immediate spatial **mean reducer** across all intersecting internal pixels inside the AOI polygon boundary at a native 10-meter cell scale.
  * Drops the spatial dimension of the raster entirely, packaging the singular resultant average numeric score along with its unique chronological timestamp into an abstract `Feature` format.

### 4. Tabular Data Conversion & Drive Export
* Casts the calculated list of temporal feature properties into a structured vector table data type (`FeatureCollection`).
* Triggers a non-spatial backend server task to parse, structure, and export the running metadata table straight to Google Drive in a designated folder (`GEE_EXPORT`).
* Configures the final output as a standalone **Comma-Separated Values (.CSV)** spreadsheet profile (`ndvi_timeseries.csv`) optimized for tabular analytics or visualization in external software packages.
