# 01. Define Observation System

This folder documents all design decisions made before any code was written. Every analysis has assumptions — this makes ours explicit, transparent, and defensible.

---

## 📋 Quick Reference

| Parameter | Decision | Justification |
|-----------|----------|---------------|
| **Study Area** | Non-haor T. Aman rice plain, Dakshin Surma/Sylhet Sadar | Avoids confounding submergence with clouds |
| **Time Period** | June 1 – December 31 | Complete Aman season (seedbed → harvest) |
| **Years** | 2022, 2023, 2024 | Full dual-satellite coverage; recent; 3 seasons |
| **Validity Thresholds** | 50%, 60%, 70%, 80%, 90% | No single assumption; built-in sensitivity analysis |
| **Satellite** | Sentinel-2 L2A SR Harmonized | Standard; readily available in GEE |
| **Vegetation Index** | NDVI = (B8 - B4)/(B8 + B4) | Most common for crop monitoring |

---

## 🗺️ Study Area: Dakshin Surma, Sylhet

### Why Not Haor?

Haor regions were **explicitly excluded** because:

- Haors are seasonally **submerged** during monsoon
- They are primarily **Boro** (dry-season, irrigated) rice territory, not Aman
- Submergence would confound two issues:
  - ❌ "No valid observation due to clouds" 
  - ❌ "No valid observation because field is underwater"
- The cloud/shadow detection algorithm **cannot distinguish** water from shadow reliably

### Why Dakshin Surma / Sylhet Sadar?

This area was selected because:

- ✅ **Non-haor** T. Aman-growing plain
- ✅ Directly documented as active Aman transplanting area (FAO, BBS data)
- ✅ Small and homogeneous (15.10 km²) → cleaner "clear-pixel %" signal
- ✅ Avoids rivers, settlements, and haor edges

### Verification Steps

1. **ESA WorldCover** → Confirmed as cropland (class 40)
2. **Google Earth** → Visually verified as contiguous rice plots


### ROI Specifications

| Property | Value |
|----------|-------|
| **Location** | Dakshin Surma Upazila, Sylhet |
| **Size** | ~15.11 km² (exact polygon in `roi.geojson`) |
| **Type** | T. Aman rice plain (non-haor) |

---

## 📅 Seasonal Window: June 1 – December 31

### Why This Window?

T. Aman rice follows a well-defined phenological cycle in Sylhet:

| Month | Phase | Agricultural Significance |
|-------|-------|---------------------------|
| **June** | Seedbed preparation, land preparation | Early monsoon onset, first cloud buildup |
| **July** | Transplanting begins | Peak monsoon begins |
| **August** | Transplanting (peak) | Main transplanting window for Sylhet |
| **September** | Vegetative → Reproductive | Peak monsoon continues |
| **October** | Reproductive → Ripening | Monsoon transitions out |
| **November** | Ripening → Harvest begins | End of monsoon |
| **December** | Harvest completion | Dry season begins |


---

## 📆 Years: 2022, 2023, 2024

### Why These Years?

| Factor | Explanation |
|--------|-------------|
| **Full Dual-Satellite Coverage** | Both Sentinel-2A and 2B were fully operational (nominal ~5-day combined revisit). Avoids 2015-2016 single-satellite period (~10-day revisit) which would bias gap statistics |
| **Recent Data** | Relevant to current monsoon patterns; 2025-2026 data may be incomplete in GEE collections |
| **Three Years** | Enables inter-annual gap variability reporting → "this recurs, not a one-off" |

### Sentinel-2 Coverage Status

| Year | Sentinel-2A | Sentinel-2B/2C | Combined Revisit |
|------|-------------|----------------|------------------|
| 2022 | ✅ Active | ✅ Active | ~5 days |
| 2023 | ✅ Active | ✅ Active | ~5 days |
| 2024 | ✅ Active | ✅ Active | ~5 days |


**Final Decision:** 2022–2024 is the best balance of full coverage, recency, and data completeness.

---

## 🎯 Validity Thresholds: 50–90%

### Why Not a Single Threshold?

Choosing **one** threshold (e.g., 50%) would be arbitrary. Instead, we test **multiple thresholds** so:
- ✅ No a priori assumption
- ✅ Sensitivity analysis is built in
- ✅ Users can choose based on application needs

### Threshold Definitions

| Threshold | Meaning |
|-----------|---------|
| **50%** | ≥50% of cropland pixels are clear → "valid observation" |
| **60%** | ≥60% clear → stricter |
| **70%** | Even stricter |
| **80%** | Very strict |
| **90%** | Maximum quality → minimal cloud contamination |

### Why 50% as Minimum?

Based on literature review and standard practice:

| Source | Recommendation |
|--------|---------------|
| **Atzberger (2013)** | 30-50% clear pixels minimum for reliable cropland NDVI |
| **Whitcraft et al. (2015)** | 50% threshold for agricultural monitoring in cloud-prone regions |
| **GEE Community Best Practices** | 30-70% recommended; 50% is standard compromise |

### Why 90% as Maximum?

- Represents "pristine" observations with minimal contamination
- Tests the cost of high-quality requirements
- Demonstrates the trade-off: **quality vs. temporal density**

### What This Enables

Testing all five thresholds (50%, 60%, 70%, 80%, 90%) will show:
- How observation availability changes with threshold
- How maximum gap changes with threshold
- The quality-density trade-off for operational monitoring

---

## 🛰️ Satellite & Data Specifications

| Parameter | Value |
|-----------|-------|
| **Dataset** | COPERNICUS/S2_SR_HARMONIZED (Sentinel-2 L2A Surface Reflectance) |
| **Cloud Detection** | COPERNICUS/S2_CLOUD_PROBABILITY (s2cloudless) |
| **Shadow Detection** | Cloud projection + NIR dark-pixel detection |
| **Vegetation Index** | NDVI = (B8 - B4)/(B8 + B4) |
| **Cropland Mask** | ESA WorldCover class 40 (Cropland) |
| **Spatial Resolution** | 10 m (aligned to B4/B8 bands) |
| **Temporal Unit** | Per-acquisition (~5-day nominal revisit) |

---
