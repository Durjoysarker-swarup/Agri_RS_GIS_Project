# 🧩 Grid Generation for Spatial NDVI Analysis (Sylhet, Bangladesh)

##  Objective

This module generates a structured **200m × 200m spatial grid** over the Sylhet District, Bangladesh.  
The grid acts as the **primary analysis unit** for zonal statistics in NDVI-based agricultural risk classification.

The purpose is to convert continuous satellite data into **discrete spatial decision units**.

---

## 🧭 Input Data

- Administrative boundary: FAO GAUL Level-2 (Sylhet District)
- Coordinate Reference System (CRS): WGS 84 → Projected CRS (meter-based)
- Python libraries:
  - GeoPandas
  - Shapely
  - NumPy

---

## ⚙️ Workflow Overview

### 1. Import Libraries & Data
- Load geospatial libraries
- Import Sylhet boundary shapefile / GeoJSON

---

### 2. CRS Transformation (Critical Step)

The dataset is reprojected from geographic coordinates (lat/lon) to a **projected coordinate system (meter-based CRS)**.

### Why this matters:
Grid generation requires uniform distance units (meters), not degrees.

---

### 3. Generate Bounding Box Grid

A full rectangular grid is created over the **bounding box of Sylhet District**.

This ensures:
- Complete spatial coverage
- No boundary omission at initial stage

---

### 4. Grid Creation Function

A custom function generates grid cells using:
- X-axis stepping (longitude direction in meters)
- Y-axis stepping (latitude direction in meters)
- Fixed resolution: **100m × 100m**

Each cell is created as a polygon using Shapely geometry.

---

### 5. Clip Grid to AOI (IMPORTANT STEP)

The rectangular grid is intersected with the Sylhet AOI:
Final Grid = Bounding Grid ∩ Sylhet Boundary


### Effect:
- Removes external non-study area cells
- Ensures spatial consistency with administrative boundary

---

### 6. Reset Grid IDs

Each grid cell is assigned a unique identifier:
G000001
G000002
G000003
...


This ID is used later for:
- Zonal statistics mapping
- NDVI linking
- Classification tracking
- Flip rate analysis

---

### 7. Final Dataset Structure

| Grid_ID | ADM2_CODE | ADM2_NAME | Shape_Area | Shape_Leng | Geometry |
|----------|-----------|------------|------------|-------------|----------|
| G000001 | 5824 | Sylhet | 0.3105 | 3.67 | POLYGON |
| G000002 | 5824 | Sylhet | 0.3105 | 3.67 | POLYGON |
| G000003 | 5824 | Sylhet | 0.3105 | 3.67 | POLYGON |

---

## 📤 Output

Final exported dataset:
grid_100m.shp


---

## Key Insight

The grid is NOT just a preprocessing step.

It defines:
- Spatial resolution of analysis
- Unit of risk classification
- Basis of flip rate computation

Without this grid, comparison between pipelines is not possible.

---

## 📌 Reproducibility

- Fully reproducible in Python
- Requires only standard geospatial libraries
- No external API dependency

