# Field Preparation and Stratified Sampling for NDVI Scale Sensitivity Analysis

This repository contains the spatial preprocessing workflow used to prepare agricultural field boundaries for an NDVI scale sensitivity and edge-effect analysis in fragmented smallholder landscapes of Sylhet, Bangladesh.

The workflow consists of two Jupyter notebooks that transform raw NASA Harvest *Fields of the World* (FTW) tiles into a balanced experimental sample suitable for remote sensing analysis.

---

# Repository Structure

```text
project/

├── notebooks/
│   ├── 01_Merge_and_Clip.ipynb
│   └── 02_Field_Analysis_and_Sampling.ipynb
│
└── README.md
```

---

# Study Area

Location:

Sylhet District, Bangladesh


Characteristics:

* Smallholder agricultural systems
* Highly fragmented field structure
* Predominantly rice-based cropping systems



---

# Notebook 1 — Merge and Clip

Notebook:

```python
01_Merge_and_Clip.ipynb
```

## Objective

Prepare a clean agricultural field dataset for the Sylhet region by merging multiple FTW tiles, repairing geometries, and clipping to the study area.

---

## Workflow


### 1. Environment Setup

Packages used

```python
geopandas
pandas
pyarrow
glob
```

---

### 2. Tile Aggregation

Input tiles:

```text
N24E091.parquet
N24E092.parquet
N25E091.parquet
N25E092.parquet
```

Procedure:

* Read individual parquet files
* Concatenate GeoDataFrames
* Preserve CRS information


---

### 3. Geometry Cleaning


Invalid geometries repaired using:


```python
buffer(0)
```


Operations:

* Fix self-intersections
* Remove empty geometries
* Remove null geometries


---

### 4. AOI Clipping


Input:

```text
sylhet_aoi.shp
```


Steps:


* CRS compatibility check
* Bounding box filtering
* Spatial indexing
* Geometric clipping



Method:


```python
gpd.clip()
```


---

### 5. Data Export


Output:


```text
sylhet_fields.parquet
```


Contains:

Agricultural field polygons located within Sylhet District.



---

# Notebook 2 — Field Analysis and Stratified Sampling


Notebook:


```python
02_Field_Analysis_and_Sampling.ipynb
```


## Objective


Compute spatial metrics, investigate field-size distributions, and create a balanced sample for NDVI sensitivity experiments.



---

## Workflow


### 1. Data Loading


Input:


```text
sylhet_fields.parquet
```


Dataset size:


```text
≈401,089 fields
```


Geometry types:


* Polygon
* MultiPolygon



---

### 2. Coordinate Transformation


Original CRS


```text
EPSG:4326
```


Projected CRS


```text
EPSG:32646
```


Purpose:


Enable accurate measurements in meters.



---

### 3. Spatial Feature Engineering


Computed variables


| Variable | Unit |
|---------|------|
| area_m2 | m² |
| perimeter_m | m |
| shape_index | Dimensionless |
| field_id | Integer |



---

### 4. Outlier Assessment


Area statistics examined using:


```python
describe()
```


Filtering criteria:


```python
100 m² < Area < 50,000 m²
```


Visualization:


* Log-scale histogram
* Area distribution assessment



---

### 5. Stratified Sampling


Fields classified into four categories.


| Class | Area Range |
|-------|------------|
| Small | <300 m² |
| Medium | 300–1500 m² |
| Large | 1500–5000 m² |
| Very Large | >5000 m² |


Sampling strategy:


```python
groupby()
sample()
```


Selected:


```text
50 fields per class
```


Final sample:


```text
200 fields
```



Balanced sampling helps reduce bias toward the numerous smaller fields.



---

### 6. Shape Index Calculation


Metric used:



$$
ShapeIndex=
\frac{Perimeter}
{2\sqrt{\pi\times Area}}
$$



Interpretation:


Shape Index ≈ 1

Compact fields



Shape Index > 1

Irregular or elongated fields



Higher values indicate increased susceptibility to mixed-pixel contamination.



---

### 7. Data Export


Outputs:



#### Spatial sample


```text
sample_fields.shp
```



Contains:


* 200 sampled fields
* Geometry information



---

#### Statistical table


```text
field_stats.csv
```



Contains:


* field_id
* area_m2
* perimeter_m
* shape_index
* size_class



---

# Key Outputs


| File | Description |
|------|-------------|
| sylhet_fields.parquet | Cleaned agricultural fields within Sylhet |
| sample_fields.shp | Stratified sample of 200 fields |
| field_stats.csv | Spatial metrics for sampled fields |
| sylhet_aoi.shp | Study area boundary |


---

# Applications


This dataset was prepared to support:


* NDVI scale sensitivity analysis
* Edge contamination assessment
* Mixed-pixel investigations
* Smallholder agricultural monitoring
* Sentinel-2 reliability studies
* Remote sensing experiments


---

# Reproducibility


The entire workflow is reproducible.


Requirements:


```python
geopandas
pandas
numpy
matplotlib
pyarrow
shapely
```

Both notebooks can be executed independently provided the input datasets are available.

---

# Author


**Durjoy Sarker**

Undergraduate Student

Sylhet Agricultural University

Research Interests:

* GIS
* Remote Sensing
* AI in Agriculture
* Spatial Data Science
* Crop Monitoring
