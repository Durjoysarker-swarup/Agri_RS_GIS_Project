# Sentinel-2 Aman Rice Observation & Gap Analysis (Sylhet Region, 2022–2024)

## Overview

This repository contains the Python-based data processing, quality filtering, and gap analysis pipeline for Part 3 of the Sylhet Aman Rice Monitoring project. It evaluates the availability and quality of Sentinel-2 satellite imagery over the Sylhet region (Aman rice growing season, 2022–2024) to quantify cloud-cover dynamics, temporal observation gaps, and missing data implications for NDVI time-series analysis.

---

## 🔑 Key Findings

| Metric | Value |
|--------|-------|
| **Total acquisition opportunities** | 126 |
| **Valid observations at 50% threshold** | 47 (37.30%) |
| **Invalid observations at 50% threshold** | 79 (62.70%) |
| **Maximum gap (50-80% thresholds)** | 55 days (June 5 – July 30, 2023) |
| **Maximum gap (90% threshold)** | 90 days |
| **Null NDVI (0% clear cropland)** | 58 acquisitions (46%) |

---

## ⚠️ Important: Run Notebooks in Order

```
01 → 02 → 03 → 04
```

Each notebook saves outputs used by the next one. Running them out of order will cause errors.

---

## Directory Structure

```
03_python_analysis/
│
├── README.md                                    # This file
│
├── 01_data_quality_availability.ipynb           # Part 01: Data loading & basic checks
├── 02_valid_observation_classification.ipynb    # Part 02: Threshold classification
├── 03_gap_detection_analysis.ipynb              # Part 03: Temporal gap detection
├── 04_observed_vs_missing_ndvi.ipynb            # Part 04: NDVI availability
│
├── data/
    ├── raw/
    │   └── sylhet_aman_observations_2022_2024.csv
    └── processed/                    ← ALL processed CSVs here
        │
        ├── observations_clean.csv    # From Part 01
        │
        ├── overall_availability.csv  # From Part 02
        ├── seasonal_monthly_availability.csv  # From Part 02
        ├── sylhet_aman_observations_classified.csv  # From Part 02
        │
        ├── gap_largest_intervals.csv  # From Part 03
        ├── gap_overall_summary.csv    # From Part 03
        ├── gap_distribution.csv       # From Part 03
        ├── gap_yearly_summary.csv     # From Part 03
        │
        └── threshold_sensitivity.csv  # From Part 04

```

---

## 📓 Notebook Descriptions

### 01_data_quality_availability.ipynb

**Objective:** Load raw Sentinel-2 metadata and perform foundational data quality checks.

**Key Tasks:**
- Load CSV and inspect structure (126 observations, 13 columns)
- Convert dates and validate study period (2022-06-05 to 2024-12-31)
- Check observations by year: 2022 (42), 2023 (40), 2024 (44)
- Identify duplicate acquisition dates (Sentinel-2A and 2C)
- Generate clear-percentage timeline visualization

**Outputs:**
- `data/processed/observations_clean.csv`

---

### 02_valid_observation_classification.ipynb

**Objective:** Classify observations as valid or invalid based on clear cropland thresholds.

**Key Tasks:**
- Define valid observations using **50% clear cropland** as primary threshold
- Perform sensitivity analysis across thresholds: 50%, 60%, 70%, 80%, 90%
- Calculate monthly availability by threshold
- Generate monthly availability figure

**Results:**

| Threshold | Valid | Availability |
|-----------|-------|--------------|
| 50% | 47 | 37.30% |
| 60% | 45 | 35.71% |
| 70% | 42 | 33.33% |
| 80% | 38 | 30.16% |
| 90% | 32 | 25.40% |

**Outputs:**
- `data/processed/overall_availability.csv`
- `data/processed/seasonal_monthly_availability.csv`


---

### 03_gap_detection_analysis.ipynb

**Objective:** Quantify temporal gaps between consecutive valid observations.

**Key Tasks:**
- Calculate inter-observation gap lengths (days) for each season (2022, 2023, 2024)
- Compute mean, median, and maximum gaps per threshold
- Identify primary gap period: **June 5 – July 30, 2023 (55 days)**
- Generate gap distribution by category (5, 6-10, 11-15, 16-20, 21-30, >30 days)

**Per-Year Gap Summary (50% threshold):**

| Year | Valid Dates | Mean Gap | Median Gap | Max Gap |
|------|-------------|----------|------------|---------|
| 2022 | 19 | 9.4 | 5.0 | 30 |
| 2023 | 13 | 17.1 | 12.5 | **55** |
| 2024 | 15 | 8.6 | 5.0 | 20 |

**Outputs:**
- `data/processed/gap_distribution.csv`


---

### 04_observed_vs_missing_ndvi.ipynb

**Objective:** Quantify observation availability and loss at the primary 50% threshold.

**Key Tasks:**
- Classify observations at 50% clear cropland threshold
- Calculate observed vs. missing counts
- Generate threshold sensitivity curve

**Results:**

| Metric | Value |
|--------|-------|
| Total opportunities | 126 |
| Valid (≥50% clear) | 47 |
| Missing (<50% clear) | 79 |
| Observation availability | 37.30% |
| Observation loss | 62.70% |

**Outputs:**
- `data/processed/threshold_sensitivity.csv`

---
