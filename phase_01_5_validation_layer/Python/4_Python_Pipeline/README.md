# 🧪 MODULE 4 — GEE Export → Python Pipeline

## DATA ENGINEERING THINKING

How does satellite data move through the pipeline?

```text
Earth → Satellite → GEE → Export → Python → Analysis → AI Model
```

### Objectives

In GEE you may already have:

- NDVI
- Time series
- Raster stacks
- Zonal statistics

Everything may look correct.

However, there is a dangerous truth:

> GEE can produce outputs that look correct but are scientifically wrong.

### Common Problems

- Wrong CRS
- Wrong scaling
- Masked pixels becoming zeros
- Temporal gaps
- Band mismatch
- Duplicated timestamps
- Invalid cloud masking
- Datatype truncation
- Export compression artifacts
- Inconsistent geometry

If you blindly trust exports:

> Your AI model learns garbage.

### Core Principle

This module teaches:

> Trust through validation, not through visualization.

---

## WHAT YOU ARE REALLY LEARNING

| Surface Skill | Deep Skill |
|--------------|------------|
| Load CSV | Temporal data engineering |
| Load GeoTIFF | Spatial tensor handling |
| Organize files | Scientific reproducibility |
| Inspect rows | Anomaly detection |
| Compare NDVI | Pipeline validation |

---

# PART 1 — WHAT TYPES OF DATA YOU EXPORT

## 1. NDVI Time-Series CSV

### Example

| Date | Field ID | NDVI |
|--------|--------|--------|
| 2024-01-01 | A1 | 0.61 |
| 2024-01-15 | A1 | 0.64 |
| 2024-02-01 | A1 | 0.59 |

### Data Type

**Tabular Temporal Data**

### Used For

- Crop monitoring
- Growth tracking
- Anomaly detection
- Machine learning features

---

## 2. Raster Stacks (GeoTIFF)

### Example

A multiband TIFF where:

- Band 1 = January NDVI
- Band 2 = February NDVI
- Band 3 = March NDVI

### Data Type

**Spatiotemporal Array Data**

### Used For

- Pixel-level machine learning
- CNN models
- Change detection
- Spatial analysis

---

## 3. Feature Tables

### Example

| Field ID | Mean NDVI | Rainfall | Yield |
|-----------|-----------|----------|--------|
| A1 | 0.63 | 120 mm | 4.5 t/ha |

### Data Type

**ML-Ready Structured Data**

### Used For

- Regression
- Classification
- Yield prediction

---

# PART 2 — DATA STRUCTURE CONSISTENCY

Suppose your NDVI CSV contains:

- 2024-01-01
- 2024-01-15
- 2024-02-01

But your raster stack order is:

- Band 1 → February
- Band 2 → January
- Band 3 → January 15

### Result

Your AI model becomes scientifically invalid.

This is called:

> **Temporal Misalignment**

### Why It Matters

- Extremely common
- Extremely dangerous
- Often invisible until model failure

---

# PART 3 — WHY PANDAS MATTERS

You are not learning Pandas simply to manipulate tables.

You are learning:

> Time-aware scientific data handling

### Date Parsing

Convert date strings into temporal objects.

Once converted, Python understands:

- Chronology
- Intervals
- Seasons
- Gaps
- Frequencies

### Sorting Chronology

Time-series analysis assumes:

- Correct temporal order

Always sort chronologically before analysis.

### Time-Aware Indexing

Using dates as an index transforms the dataframe into a temporal dataset.

### Temporal Frequency Validation

Purpose:

- Detect irregular acquisitions
- Detect missing dates
- Detect temporal gaps

### Important

Satellite data is rarely perfectly regular because of:

- Cloud cover
- Revisit schedules
- Cloud masking
- Acquisition failures

### Applications

- Crop phenology
- Drought analysis
- Temporal machine learning

---

# PART 4 — THE REAL SCIENTIFIC VALIDATION

Compare:

- GEE NDVI
- Python NDVI

### Workflow

Export:

- RED band
- NIR band

Compute NDVI manually in Python.

Then compare it with exported GEE NDVI.

### If a Mismatch Occurs

Possible causes:

- Scaling error
- Masked pixels
- Datatype issue
- Wrong bands
- Export compression
- Clipping problem

### What This Step Really Is

> Pipeline Integrity Validation

Very few beginners perform this step rigorously.

---

# PART 5 — PROFESSIONAL WORKFLOW

```text
GEE
 ↓
Export
 ↓
Python Ingest
 ↓
Validation
 ↓
Cleaning
 ↓
Temporal Alignment
 ↓
Feature Engineering
 ↓
Statistical Verification
 ↓
ML Pipeline
 ↓
Scientific Interpretation
```

---

# PART 6 — REAL PIPELINE

## TASK 1 — Export Data from GEE

Export four datasets:

| Export | Purpose |
|----------|----------|
| NDVI CSV | Temporal analysis |
| RED Band | Manual NDVI validation |
| NIR Band | Manual NDVI validation |
| NDVI Raster | Compare with Python NDVI |

---

## Understanding the GEE Workflow

### Image Collection

Sentinel-2 (`s2`) is not a single image.

It is:

> A collection of satellite images

### Mapping

`map()` means:

> Apply the same operation to every image in the collection.

### NDVI Computation

For each image:

- Compute NDVI using NIR and RED bands
- Rename the output as NDVI

---

### Raster → Statistics

`reduceRegion()` converts:

```text
Millions of pixels
        ↓
Single numerical summary
```

Example result:

```text
{ NDVI: 0.63 }
```

Important:

- Returns a dictionary
- Not an image
- Not a raster

---

### Creating Tabular Data

The workflow converts image statistics into a feature table.

### Why Geometry Is Null

Normally a feature contains:

- Geometry
- Attributes

Here we only need:

- Attributes

Therefore:

- Geometry = null

This reduces unnecessary export size.

---

## TASK 2 — Load CSV

### First Inspection

Check:

- Head
- Datatypes
- Summary statistics
- Missing values
- Duplicate records

---

### Parse Dates

Convert dates into temporal objects.

Purpose:

- Enable chronology awareness
- Enable time-series operations

---

### Sort Chronologically

Purpose:

- Preserve temporal order
- Ensure correct time-series analysis

---

### Set Date Index

Result:

> Dataframe becomes time-aware.

---

### Check Temporal Frequency

Purpose:

- Detect irregular acquisitions
- Detect missing observations
- Detect temporal gaps

---

## TASK 3 — Build a Clean Dataset

Create a validated temporal remote sensing dataset.

### Do Not Remove Geometry If You Need

- Zonal statistics per field
- Spatial machine learning
- CNN models
- Field boundary analysis
- Spatial joins

### Final Dataset Uses

- Machine learning
- Statistical analysis
- Forecasting
- Crop monitoring

---

## TASK 4 — Load Raster

### Load Raster

Open the raster and inspect its properties.

---

### Inspect Shape

Check:

- Number of bands
- Height
- Width

---

### Check CRS

Example:

```text
EPSG:32646
```

### Why CRS Matters

If raster CRS and polygon CRS differ:

- Spatial overlays become incorrect
- Zonal statistics become invalid
- ML features become misaligned

This often fails silently.

---

### Pixel-to-World Mapping

Inspect the raster transform.

Purpose:

> Define how raster coordinates map onto Earth coordinates.

---

### Read Pixel Values

Raster bands become NumPy arrays.

This is the representation used for analysis.

---

### Inspect Pixel Ranges

Example:

```text
Minimum = 0
Maximum = 9234
```

Interpretation:

> Reflectance scaling still exists.

---

### Check NoData Values

Always inspect:

- Missing value representation
- NoData metadata

This is essential before calculations.

---

## TASK 5 — MANUAL NDVI VALIDATION

### Pipeline Integrity Testing

Compute NDVI manually using:

- RED
- NIR

Then compare it against:

- Exported GEE NDVI

---

### Difference Analysis

Calculate:

- Mean difference
- Maximum absolute difference

### Interpretation

#### Small Differences

- Pipeline is valid
- Export is trustworthy

#### Large Differences

Something is broken:

- Scaling
- Masking
- Band selection
- Datatype handling
- Export settings

---

### Histogram Validation

Compare NDVI distributions.

Look for:

- Distribution shifts
- Unexpected spikes
- Missing ranges
- Clipping artifacts

---

## TASK 6 — BUILD CLEAN DATASET

After validation:

- Remove errors
- Correct inconsistencies
- Align temporal records
- Document processing steps

### Preserve Geometry When Needed

Do not drop geometry for:

- Zonal statistics
- Spatial ML
- CNN workflows
- Field boundary analysis
- Spatial joins

---

## FINAL OUTCOME

You have built a:

> **Validated Remote Sensing Dataset**

Suitable for:

- Machine Learning
- Statistical Modeling
- Forecasting
- Crop Monitoring
- Scientific Research

### Core Lesson

Never trust exported data because it looks correct.

Trust it only after:

- Validation
- Consistency checks
- Temporal verification
- Spatial verification
- Reproducibility testing
