# 📑 Final Research Reports

This folder contains the complete research reports and findings from the Monsoon Observation Gaps analysis.

---

## 📁 Contents & Status

| Document | Status | Description |
|----------|--------|-------------|
| Full Research Report | 🔄 In Progress | Comprehensive technical report with all methodology, results, and discussion |
| Executive Summary | 📋 Planned | Brief summary (2–3 pages) of key findings for stakeholders |
| Statistical Appendix | 📋 Planned | Detailed statistical tables, confidence intervals, and sensitivity analysis |
| Data Dictionary | 📋 Planned | Complete description of all variables in output CSVs |

---

## 📖 Full Research Report

**Status:** 🔄 In Progress (Expected: September 2026)

### Expected Contents:
1. **Title & Abstract**
2. **Introduction**
   - Background on monsoon rice monitoring in Bangladesh
   - Remote sensing in cloud-prone regions
   - Research gap: quantifying observation availability
3. **Study Area**
   - Dakshin Surma, Sylhet District
   - Agricultural context (T. Aman rice)
   - Rationale for non-haor selection
4. **Methods**
   - Study design decisions (thresholds, time period, data sources)
   - Sentinel-2 data specifications
   - Cloud detection methodology (s2cloudless)
   - NDVI calculation and cropland masking
   - Python analysis pipeline
5. **Results**
   - Observation availability by threshold
   - Monthly and seasonal patterns
   - Temporal gap analysis (2022, 2023, 2024)
   - NDVI distribution and variability
   - Sensitivity analysis
6. **Discussion**
   - Comparison with literature
   - Implications for operational monitoring
   - Recommendations for addressing data gaps
   - Limitations
7. **Conclusions**
8. **References**
9. **Appendices**
   - All figures (fig1–fig6)
   - Detailed statistical tables

### Format:
- PDF (print-ready)
- Target journal: Agricultural and Forest Meteorology, Remote Sensing of Environment, or GIScience & Remote Sensing

---

## 📊 Executive Summary

**Status:** 📋 Planned

**Purpose:** Quick reference for policymakers, agricultural extension officers, and decision-makers

**Key Sections:**
- Research question & objectives
- Study area description (map included)
- Key findings (bullet points)
- Implications for rice monitoring
- Recommendations

**Length:** 2–3 pages

---

## 📈 Statistical Appendix

**Status:** 📋 Planned

**Contents:**
- Full gap statistics by threshold & year
- Confidence intervals for availability estimates
- Monthly breakdown tables
- Per-acquisition metadata table
- Correlation analysis (clear pixel % vs. NDVI)
- Threshold sensitivity numerical results

---

## 📋 Data Dictionary

**Status:** 📋 Planned

**Purpose:** Document all variables in output CSVs

**Will Define:**
- `date` - Acquisition date (YYYY-MM-DD)
- `year`, `month`, `doy` - Temporal identifiers
- `spacecraft` - Sentinel-2A, 2B, or 2C identifier
- `clear_pixels` - Number of clear cropland pixels
- `clear_pct` - Percentage of clear cropland pixels (0–100%)
- `total_cropland_pixels` - Total pixels in ROI classified as cropland
- `ndvi_median`, `ndvi_mean` - Vegetation index statistics
- `valid_50`, `valid_60`, ..., `valid_90` - Binary classification at each threshold
- `gap_length_days` - Days since previous valid observation

---

## 🔗 Related Resources

### In This Project:
- `../workflow/01_define_observation_system/README.md` — Complete study design rationale
- `../workflow/03_python_analysis/README.md` — Detailed methods & code documentation
- `../docs/` — All figures referenced in reports
- `../conference/README.md` — BSPST 2026 poster (condensed version)

### External References:
- Atzberger (2013) on cloud pixel thresholds for cropland monitoring
- Whitcraft et al. (2015) on 50% threshold for agricultural monitoring
- GEE Best Practices documentation

---

## 📄 How to Cite This Work

**Full Citation (when report is complete):**
```
Sarker, Durjoy Kumar. (2026). 
"Quantifying Monsoon Observation Gaps in Sentinel-2 Imagery 
for Aman Rice Monitoring in Sylhet, Bangladesh (2022–2024)."
[Full Research Report]. Sylhet Agricultural University.
```

**Poster Citation:**
```
Sarker, Durjoy Kumar. (2026). 
"Quantifying Monsoon Observation Gaps in Sentinel-2 Imagery 
for Rice Monitoring in Sylhet, Bangladesh."
Presented at the 5th International Conference on Plant Science 
and Technology for Sustainable Agriculture (BSPST 2026), 
Sylhet Agricultural University.
```

---

## 📧 Contact for Report Requests

For pre-publication versions or custom report formats:  
**Durjoy Kumar Sarker**  
durjoysarker78@gmail.com

---

## 📜 License

All reports and findings are released under the MIT License.

---

**Last Updated:** August 2026  
**Current Status:** Main README complete, full report in progress
