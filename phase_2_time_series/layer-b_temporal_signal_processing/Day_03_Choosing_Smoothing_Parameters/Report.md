# Day 3 — Parameter Sensitivity Analysis

## Overview

This notebook explores how **parameter selection** influences the performance of common NDVI smoothing algorithms. Instead of comparing different smoothing methods, the focus is on understanding how changes in algorithm parameters affect the reconstructed vegetation signal and introduce processing uncertainty.

---

## Objective

The objectives of this notebook are to:

- Investigate the sensitivity of smoothing algorithms to different parameter values.
- Evaluate how parameter changes influence the NDVI time series.
- Quantify the effects on peak NDVI, peak timing, smoothness, and reconstruction error.
- Demonstrate the importance of parameter tuning in remote sensing time-series analysis.

---

## Methods

The following smoothing algorithms were evaluated using multiple parameter settings:

| Algorithm | Parameters Tested |
|-----------|-------------------|
| Moving Average | Window sizes: **3, 5, 7, 11** |
| Savitzky–Golay | Window lengths and polynomial orders |
| Whittaker | λ values: **0.01, 0.1, 1, 10** |
| Asymmetric Whittaker | Asymmetry parameter (**p**) values |

Each parameter combination was applied to the same Sentinel-2 NDVI time series.

---

## Evaluation Metrics

The reconstructed NDVI curves were compared using:

- Peak NDVI
- Peak Date
- Root Mean Square Error (RMSE)

---

## Outputs

The notebook produces:

- Parameter sensitivity plots
- Combined comparison figures
- Peak timing analysis
- RMSE
- Final parameter sensitivity summary tables

---

## Key Findings

- Increasing smoothing strength generally reduced short-term noise.
- Larger parameter values produced smoother curves but flattened vegetation peaks.
- Peak NDVI and seasonal amplitude were sensitive to parameter selection.
- Different parameter combinations produced different trade-offs between noise reduction and signal preservation.
- Parameter tuning is a significant source of processing uncertainty and should be carefully considered before downstream analyses.

---

## Conclusion

This notebook demonstrates that the choice of smoothing parameters has a substantial impact on reconstructed NDVI time series. Careful parameter selection is essential to balance noise suppression with the preservation of meaningful vegetation dynamics, making parameter sensitivity analysis an important step in remote sensing preprocessing workflows.
