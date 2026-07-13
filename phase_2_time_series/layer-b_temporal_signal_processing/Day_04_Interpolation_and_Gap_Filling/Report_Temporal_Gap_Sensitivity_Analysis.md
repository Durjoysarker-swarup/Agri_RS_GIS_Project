# Temporal Gap Sensitivity Analysis

## Overview

This notebook investigates how the length of consecutive missing observations affects the accuracy of NDVI time-series reconstruction.

A controlled simulation experiment was conducted by artificially introducing temporal gaps into a complete Sentinel-2 NDVI time series. The missing observations were reconstructed using **Linear Interpolation**, and the reconstructed values were compared with the original observations to quantify interpolation error.

---

## Objectives

- Simulate consecutive temporal gaps of different lengths.
- Evaluate interpolation performance under increasing information loss.
- Quantify reconstruction accuracy using statistical error metrics.
- Understand the relationship between temporal gap length and interpolation uncertainty.

---

## Dataset

| Property | Value |
|----------|-------|
| Dataset | Sentinel-2 NDVI Time Series |
| Study Area | *Sylhet* |
| Observation Period | **2023 - 2025** |
| Total Observations | **67** |
| Temporal Resolution | Sentinel-2 |

---

## Experimental Workflow

```text
Original NDVI
      │
      ▼
Create Artificial Temporal Gap
      │
      ▼
Linear Interpolation
      │
      ▼
Reconstructed NDVI
      │
      ▼
Compare with Ground Truth
      │
      ▼
RMSE • MAE
```

---

## Experiment Settings

| Parameter | Value |
|-----------|------:|
| Interpolation Method | Linear |
| Gap Lengths | 2, 4, 6, 8 observations |
| Number of Trials | **30** |
| Random Seed | **42** |

---

## Results

### Reconstruction Accuracy

| Gap Length | RMSE | MAE |
|------------|-----:|----:|
| 2 | **0.0672** | **0.0612** |
| 4 | **0.1096** | **0.0995** |
| 6 | **0.1272** | **0.1127** |
| 8 | **0.1494** | **0.1299** |

---

### Error Growth

> **Placeholder:** Insert the **RMSE vs Gap Length** figure.



### Example Gap Reconstruction

> **Placeholder:** Insert a figure showing:

- Original NDVI
- Artificial temporal gap
- Reconstructed NDVI



## Discussion

The controlled simulation demonstrates that interpolation performance is strongly influenced by the length of consecutive missing observations.

Key observations from the experiment include:

- Reconstruction error increased as temporal gap length increased.
- Short gaps were reconstructed with relatively small error.
- Larger consecutive gaps introduced greater uncertainty due to reduced temporal information.
- Linear interpolation performed well for small gaps but became progressively less reliable as the missing interval expanded.

These findings highlight the importance of observation frequency when reconstructing satellite-derived vegetation time series.

---

## Key Findings

- Artificial temporal gaps were successfully introduced into the NDVI time series.
- Reconstruction accuracy declined with increasing gap length.
- RMSE increased from **XX** to **XX** as gap length increased.
- MAE showed a similar increasing trend.
- Longer temporal gaps resulted in higher reconstruction uncertainty.
- Temporal gap length is an important factor affecting interpolation reliability.

---

## License

This notebook is part of a personal learning project on remote sensing time-series analysis and uncertainty quantification.
