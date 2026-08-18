# Sentinel-2 Aman Rice Observation & Gap Analysis (Sylhet Region, 2022–2024)

## Overview

This repository contains the Python-based data processing, quality filtering, and gap analysis pipeline for Part 3 of the Sylhet Aman Rice Monitoring project. It evaluates the availability and quality of Sentinel-2 satellite imagery over the Sylhet region (Aman rice growing season, 2022–2024) to evaluate cloud-cover dynamics, temporal observation gaps, and missing data implications for NDVI time-series analysis.

## Directory Structure

```
03_python_analysis/
│
├── README.md                                    # Overview and execution guide
│
├── 01_data_quality_availability.ipynb           # Part 3A: Quality & availability analysis
├── 02_valid_observation_classification.ipynb    # Part 3B: Clear-cropland thresholding
├── 03_gap_detection_analysis.ipynb              # Part 3C: Temporal gap & persistence analysis
├── 04_observed_vs_missing_ndvi.ipynb            # Part 3D: Impact of gaps on NDVI tracking
│
├── data/
│   ├── raw/
│   │   └── sylhet_aman_observations_2022_2024.csv  # Raw Sentinel-2 scene extraction data
│   └── processed/
│       ├── observations_clean.csv               # Standardized & cleaned observation logs
│       ├── overall_availability.csv             # Summary of overall scene availability
│       ├── seasonal_monthly_availability.csv    # Monthly/seasonal clear-observation metrics
│       ├── gap_metrics.csv                      # Inter-observation gap statistics per year
│       └── threshold_summary.csv                # Sensitivity analysis across threshold levels
│
└── outputs/
    ├── clear_percentage_timeline.png            # Timeline of clear-sky percentages (2022–2024)
    ├── monthly_availability.png                 # Monthly clear observation rates
    ├── gap_distribution.png                     # Histogram/CDF of gap lengths (days)
    └── availability_by_threshold.png            # Sensitivity curve of threshold vs. availability
```

## Workflow & Notebooks

### 1. Data Quality & Availability Analysis (`01_data_quality_availability.ipynb`)

**Objective:** Clean raw Sentinel-2 metadata and calculate foundational observation metrics.

**Key Tasks:**
- Clean dates, filter target months (June–December, 2022–2024), and compute basic percentages (clear, cloud, water, shadow, etc.).
- Generate overall summary statistics and monthly/seasonal breakdown tables.
- Visualize clear-pixel trends and monthly availability patterns.

**Outputs Generated:**
- `data/processed/observations_clean.csv`
- `data/processed/overall_availability.csv`
- `data/processed/seasonal_monthly_availability.csv`
- `outputs/clear_percentage_timeline.png`
- `outputs/monthly_availability.png`

### 2. Valid Observation Classification (`02_valid_observation_classification.ipynb`)

**Objective:** Classify usable observations based on clear cropland coverage thresholds.

**Key Tasks:**
- Define valid observations using a baseline threshold (e.g., ≥ 70% clear cropland pixels).
- Perform sensitivity analysis across thresholds (50%, 60%, 70%, 80%, 90%).
- Evaluate the trade-off between image quality and observation frequency.

**Outputs Generated:**
- `data/processed/threshold_summary.csv`
- `outputs/availability_by_threshold.png`

### 3. Gap Detection Analysis (`03_gap_detection_analysis.ipynb`)

**Objective:** Quantify temporal gaps between consecutive valid observations during the Aman season.

**Key Tasks:**
- Calculate inter-observation gap lengths (in days) for each year (2022, 2023, 2024).
- Compute key metrics: Mean Gap, Median Gap, Max Gap, and Percent of Gaps > 15 days.
- Plot gap distributions and identify persistent cloud-cover windows during the monsoon season.

**Outputs Generated:**
- `data/processed/gap_metrics.csv`
- `outputs/gap_distribution.png`

### 4. Observed vs. Missing NDVI Analysis (`04_observed_vs_missing_ndvi.ipynb`)

**Objective:** Assess the impact of missing data on monitoring the Aman rice phenology.

**Key Tasks:**
- Reconstruct composite NDVI time series across the crop cycle.
- Evaluate how extended cloud gaps (especially June–August monsoon months) affect key phenological stages (heading, tillering, peak vegetation).
- Compare raw observed trajectories with gap-filled or interpolated curves.
