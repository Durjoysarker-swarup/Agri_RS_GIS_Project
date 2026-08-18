# Monsoon Observation Gaps: Quantifying Sentinel-2 Data Availability for Aman Rice Monitoring in Sylhet, Bangladesh

## 📋 Overview

This project quantifies **temporal observation gaps** in Sentinel-2 imagery during the monsoon season for **T. Aman rice monitoring** in Sylhet, Bangladesh (2022–2024). The research evaluates cloud contamination and data availability to understand constraints on satellite-based agricultural monitoring in cloud-prone regions.

**Research Question:** How often can we reliably observe cropland in Sylhet during the monsoon season, and how do observation gaps affect monitoring capability?

---

## 🎯 Key Findings

| Metric | Value |
|--------|-------|
| **Study Period** | June 1 – December 31 (Aman season) |
| **Total Acquisition Opportunities** | 126 |
| **Valid Observations (50% threshold)** | 47 (37.30%) |
| **Invalid Observations** | 79 (62.70%) |
| **Maximum Gap (50-80% thresholds)** | 55 days (June 5 – July 30, 2023) |
| **Maximum Gap (90% threshold)** | 90 days |
| **Null NDVI (0% clear cropland)** | 58 acquisitions (46%) |

---

## 📊 Study Area & Methodology

### Study Area: Dakshin Surma, Sylhet
- **Location:** Sylhet District, Non-haor T. Aman rice plain
- **Size:** ~15.11 km² (15°31'44.3"N to 15°31'12.3"N, 91°55'44.5"E to 91°54'36.8"E)
- **Why Dakshin Surma?** 
  - Avoids haor (seasonally submerged) regions → prevents confounding submergence with clouds
  - Confirmed cropland (ESA WorldCover class 40)
  - Homogeneous, contiguous rice plots

### Data & Specifications
- **Satellite:** Sentinel-2 L2A Surface Reflectance (S2_SR_HARMONIZED)
- **Time Period:** June 1 – December 31 (2022, 2023, 2024)
- **Nominal Revisit:** ~5 days (dual-satellite Sentinel-2A + 2B/2C)
- **Vegetation Index:** NDVI = (B8 - B4)/(B8 + B4)
- **Cropland Mask:** ESA WorldCover
- **Cloud Detection:** s2cloudless (COPERNICUS/S2_CLOUD_PROBABILITY)
- **Spatial Resolution:** 10 m (B4 & B8 bands)

### Validity Thresholds (Sensitivity Analysis)
Multiple thresholds tested to avoid arbitrary assumptions:
- **50%:** ≥50% of cropland pixels clear → baseline
- **60%, 70%, 80%:** Progressive strictness
- **90%:** Maximum quality (minimal contamination)

---

## 📁 Project Structure

```
03_Monsoon_Observation_Gaps/
│
├── README.md                              # This file
│
├── workflow/                              # Analysis pipeline
│   ├── 01_define_observation_system/      # Design decisions & study area
│   │   ├── README.md                      # Study design documentation
│   │   └── roi.geojson                    # Region of Interest polygon
│   │
│   ├── 02_gee_scripts/                    # Google Earth Engine processing
│   │   ├── README.md                      # GEE pipeline instructions
│   │   └── 01_main_pipeline.js            # Complete GEE script
│   │
│   └── 03_python_analysis/                # Data analysis & visualization
│       ├── README.md                      # Detailed analysis workflow
│       ├── 01_data_quality_availability.ipynb        # Part 1: Data loading & QA
│       ├── 02_valid_observation_classification.ipynb # Part 2: Threshold classification
│       ├── 03_gap_detection_analysis.ipynb           # Part 3: Temporal gap detection
│       ├── 04_observed_vs_missing_ndvi.ipynb         # Part 4: NDVI availability
│       │
│       └── data/
│           ├── raw/
│           │   └── sylhet_aman_observations_2022_2024.csv  # GEE export
│           └── processed/              ← All output CSVs
│               ├── observations_clean.csv
│               ├── overall_availability.csv
│               ├── seasonal_monthly_availability.csv
│               ├── sylhet_aman_observations_classified.csv
│               ├── gap_largest_intervals.csv
│               ├── gap_overall_summary.csv
│               ├── gap_distribution.csv
│               ├── gap_yearly_summary.csv
│               └── threshold_sensitivity.csv
│
├── docs/                                  # Figures & visualizations
│   ├── README.md
│   ├── fig1_roi_map.png                  # Study area map
│   ├── fig2_workflow.png                 # Processing workflow diagram
│   ├── fig3_monthly_availability.png     # Temporal availability by month
│   ├── fig4_valid_ndvi_scatter_plot.png  # Valid vs. invalid observations
│   ├── fig5_gap_distribution.png         # Gap length distribution
│   └── fig6_sensitivity.png              # Threshold sensitivity analysis
│
├── conference/                            # Conference publications
│   ├── README.md                         # BSPST 2026 conference materials
│   ├── conference_abstract.docx          # Submitted abstract
│   └── poster/
│       ├── poster_final.pdf
│       └── poster_source.pptx
│
└── report/                                # Final research reports
    └── README.md

```

---

## 🔄 Workflow & Analysis Pipeline

### Step 1: Define Observation System (`workflow/01_define_observation_system/`)
- Justifies ROI selection (non-haor rice plain)
- Specifies seasonal window (June–December)
- Defines satellite & data specifications
- Explains validity thresholds (50%–90%)
- Documents all assumptions transparently

**Key Document:** `01_define_observation_system/README.md`

### Step 2: Google Earth Engine Processing (`workflow/02_gee_scripts/`)
- Loads Sentinel-2 L2A imagery (2022–2024)
- Applies s2cloudless cloud detection
- Detects cloud shadows (NIR dark-pixel analysis)
- Counts clear cropland pixels
- Calculates NDVI only on clear pixels
- **Exports:** `sylhet_aman_observations_2022_2024.csv` (126 records)

**Input:** ROI polygon (`roi.geojson`)  
**Script:** `01_main_pipeline.js` (copy-paste into GEE Code Editor)  
**Output Format:** Date, year, month, clear pixel count, clear %, total cropland pixels, NDVI median/mean

### Step 3: Python Analysis (`workflow/03_python_analysis/`)
Four sequential Jupyter notebooks:

#### 01_data_quality_availability.ipynb
- Loads raw CSV from GEE
- Data validation & cleaning
- Timeline visualization (clear pixel % over time)
- **Output:** `observations_clean.csv`

#### 02_valid_observation_classification.ipynb
- Classifies observations at multiple thresholds (50%–90%)
- Sensitivity analysis results
- Monthly availability calculation
- **Outputs:** `overall_availability.csv`, `seasonal_monthly_availability.csv`

#### 03_gap_detection_analysis.ipynb
- Identifies consecutive valid observations
- Calculates inter-observation gaps (days)
- Finds maximum gap: **55 days (June 5 – July 30, 2023)**
- Gap distribution analysis
- **Output:** `gap_distribution.csv`

#### 04_observed_vs_missing_ndvi.ipynb
- Quantifies observation loss at 50% threshold
- Threshold sensitivity curve
- **Output:** `threshold_sensitivity.csv`

**⚠️ Important:** Run notebooks in order → 01 → 02 → 03 → 04

---

## 📈 Gap Analysis Results

### Per-Year Summary (50% Threshold)

| Year | Total Days | Valid Observations | Mean Gap (days) | Median Gap | Max Gap |
|------|------------|-------------------|-----------------|------------|---------|
| **2022** | 214 | 19 | 9.4 | 5.0 | 30 |
| **2023** | 214 | 13 | 17.1 | 12.5 | **55** |
| **2024** | 214 | 15 | 8.6 | 5.0 | 20 |

### Threshold Sensitivity (Validity vs. Availability)

| Threshold | Valid Obs. | Availability |
|-----------|-----------|--------------|
| **50%** | 47 | 37.30% |
| **60%** | 45 | 35.71% |
| **70%** | 42 | 33.33% |
| **80%** | 38 | 30.16% |
| **90%** | 32 | 25.40% |

**Interpretation:** Stricter quality requirements (higher thresholds) → fewer valid observations → longer gaps

---

## 🛠️ Tools & Technologies

- **Remote Sensing:** Google Earth Engine (JavaScript API)
- **Data Processing:** Python 3.x
- **Libraries:** 
  - Data: `pandas`, `numpy`
  - Visualization: `matplotlib`, `seaborn`
  - Geospatial: `rasterio`, `fiona`, `geopandas`
- **Satellite Data:** Copernicus Sentinel-2, ESA WorldCover
- **Cloud Detection:** s2cloudless (Zupanc, 2021)

---

## 📚 Key References & Context

### Study Design
- Atzberger, C. (2013). *Advances in Remote Sensing of Agriculture: Context Description.* Remote Sensing, 5(4), 1937-1944.
- Whitcraft, A. K., et al. (2015). *A framework for defining and quantifying uncertainty in large-scale mapping projects.* ISPRS Journal, 109, 191-202.

### Monsoon Monitoring
- T. Aman rice is Bangladesh's main rainy-season rice crop (June–December)
- Sylhet is one of Bangladesh's highest-rainfall regions (~3,000+ mm annually)
- Cloud cover during monsoon directly limits satellite observation capability

### Study Period Context
- **2022:** Normal monsoon season
- **2023:** Severe monsoon (record rainfall in July) → longest observation gap
- **2024:** Return to near-normal conditions

---

## 📊 Figures & Visualizations

All figures are in `docs/`:

1. **fig1_roi_map.png** – Study area location map (Dakshin Surma, Sylhet)
2. **fig2_workflow.png** – Data processing workflow diagram
3. **fig3_monthly_availability.png** – Monthly valid observation counts (by threshold)
4. **fig4_valid_ndvi_scatter_plot.png** – Valid vs. invalid observation distribution
5. **fig5_gap_distribution.png** – Gap length frequency distribution
6. **fig6_sensitivity.png** – Threshold sensitivity curve

---

## 🎓 Conference Publication

**BSPST 2026 — Sylhet Agricultural University**

Conference materials in `conference/`:
- **Abstract:** "Quantifying Monsoon Observation Gaps in Sentinel-2 Imagery for Rice Monitoring in Sylhet, Bangladesh"
- **Format:** Poster presentation (90 × 120 cm)
- **Key Findings:** Highlighted in poster with all figures and statistics

---

## ✅ How to Use This Repository

### For Reproduction:
1. **Study Design:** Read `workflow/01_define_observation_system/README.md`
2. **GEE Processing:** Copy `workflow/02_gee_scripts/01_main_pipeline.js` into Google Earth Engine Code Editor
   - Requires: Google Earth Engine account
   - Output: CSV file (place in `workflow/03_python_analysis/data/raw/`)
3. **Python Analysis:** Run notebooks in order
   - Requires: Python 3.x + pandas, numpy, matplotlib, seaborn
   - All processed outputs saved automatically

### For Citation:
```
Sarker, Durjoy Kumar. (2026). 
"Quantifying Monsoon Observation Gaps in Sentinel-2 Imagery 
for Aman Rice Monitoring in Sylhet, Bangladesh (2022–2024)."
Presented at BSPST 2026, Sylhet Agricultural University.
```

---

## 📝 Project Status

- ✅ Study design & assumptions documented
- ✅ GEE pipeline complete and tested
- ✅ Python analysis pipeline complete
- ✅ Conference abstract submitted & accepted
- ✅ Poster prepared for BSPST 2026
- 🟡 Full research report in progress

---

## 📧 Contact & Questions

**Durjoy Kumar Sarker**  
durjoysarker78@gmail.com

**Related Projects:**
- Project 01: NDVI Classification Stability
- Project 02: NDVI Scale Sensitivity

---

## 📜 License

MIT License

---

**Last Updated:** August 2026  
**Repository:** [Agri_RS_GIS_Project](https://github.com/Durjoysarker-swarup/Agri_RS_GIS_Project)
