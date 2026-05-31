# Google Earth Engine (GEE) Vector Data Creation & Vector Export Pipeline

This repository contains a Google Earth Engine script designed to manually construct vector geometry, attach attribute metadata, and handle multi-format vector data exports.

## What the Script Does

### 1. Vector Geometry Creation
* Defines three distinct spatial boundaries (`field1_geom`, `field2_geom`, `field3_geom`) using precise coordinate arrays representing distinct agricultural plots.

### 2. Feature Structure and Attributes
* Converts raw spatial geometries into Google Earth Engine `Features`.
* Injects structured non-spatial metadata attributes into each polygon, including unique identification keys (`field_id`), crop designations (`Rice`, `Tea`, `Wheat`), localized tracking administrative areas (`district`), and observation seasons (`year`).

### 3. Collection Aggregation & Mapping
* Combines individual distinct features into a singular `FeatureCollection`.
* Dynamically re-centers the GEE map viewport around the aggregate bounding area.
* Displays the vector fields as a highlighted yellow layer on the map interface.

### 4. Multi-Format Data Export Tasks
Triggers background processing tasks to package and export the aggregated feature database to Google Drive inside a dedicated folder (`GEE_Exports`) under two primary vector formats:
* **ESRI Shapefile (SHP):** Generates a zipped shapefile package optimized for traditional desktop GIS environments.
* **GeoJSON:** Generates a lightweight text-based web format containing both spatial boundaries and relational attribute tables.
