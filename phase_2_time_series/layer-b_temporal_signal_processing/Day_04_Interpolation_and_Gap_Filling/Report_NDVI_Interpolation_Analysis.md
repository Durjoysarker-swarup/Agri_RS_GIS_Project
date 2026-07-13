# NDVI Interpolation Method Comparison Analysis

## Overview

This notebook investigates how different interpolation methods perform when reconstructing missing observations in a Sentinel-2 NDVI time series.

A controlled simulation experiment was conducted by artificially removing observations from a complete NDVI time series. The missing values were reconstructed using three interpolation techniques — **Linear**, **Nearest Neighbor**, and **Cubic Spline** — and the reconstructed values were compared against the original (ground truth) observations to quantify reconstruction accuracy.

---

## Objectives

- Artificially remove observations from a complete NDVI time series.
- Reconstruct the missing values using multiple interpolation methods.
- Compare the reconstructed series against the ground truth values.
- Quantify reconstruction accuracy using statistical error metrics (RMSE, MAE, R²).
- Identify which interpolation method best preserves the underlying vegetation signal.

---

## Dataset

| Property | Value |
|----------|-------|
| Dataset | Sentinel-2 NDVI Time Series |
| Study Area | *Sylhet* |
| Observation Period | 2023 – 2026 |
| Total Observations | *XX* |
| Temporal Resolution | Sentinel-2 |

---

## Experimental Workflow

```text
Original NDVI
      │
      ▼
Randomly Remove Observations
      │
      ▼
   ┌──────────────┬──────────────────┬──────────────────┐
   ▼              ▼                  ▼
Linear         Nearest Neighbor   Cubic Spline
Interpolation  Interpolation      Interpolation
   │              │                  │
   └──────────────┴──────────────────┘
                  ▼
        Compare with Ground Truth
                  ▼
             RMSE • MAE • R²
```

---

## Experiment Settings

| Parameter | Value |
|-----------|------:|
| Interpolation Methods | Linear, Nearest Neighbor, Cubic Spline (order 3) |
| Observations Removed | **20** |
| Selection Method | Random, without replacement |
| Boundary Handling | `limit_direction="both"` (interpolates first/last values) |

---

## Results

### Reconstruction Accuracy

| Method | RMSE | MAE | R² |
|--------|-----:|----:|---:|
| Linear | 0.0496 | 0.0205 | 0.9118 |
| Nearest Neighbor | 0.0467 | 0.0186 | 0.9217 |
| Cubic Spline | 0.0924 | 0.0421 | 0.6942 |


---

### Example of Removed Observations

<img width="1322" height="500" alt="image" src="https://github.com/user-attachments/assets/2a96ee4b-5e4b-4c7b-a098-0d8abf03eb3d" />

---

## Discussion

The controlled simulation demonstrates that reconstruction accuracy depends strongly on the interpolation method used, even when the same set of observations is removed.

Key observations from the experiment include:

- **Nearest Neighbor** interpolation achieved the lowest RMSE and MAE, along with the highest R², among the three methods tested.
- **Linear interpolation** performed comparably well, producing smooth straight-line transitions between neighboring observations with only slightly higher error than Nearest Neighbor.
- **Cubic Spline** interpolation, despite producing the visually smoothest curve, resulted in the highest error and lowest R², suggesting it overfits local fluctuations and can overshoot true NDVI values, especially near abrupt changes in the signal.
- Visually, Nearest Neighbor creates step-like transitions, Linear connects points directly, and Spline follows a continuous curve — but smoothness alone does not guarantee accuracy.
- These results suggest that simpler interpolation methods can outperform more complex ones on irregular, noisy vegetation time series with abrupt seasonal transitions.

---

## Key Findings

- 20 observations were artificially removed and successfully reconstructed using three interpolation methods.
- **Nearest Neighbor** interpolation was the most accurate method overall (RMSE = 0.0467, R² = 0.9217).
- **Linear** interpolation was a close second (RMSE = 0.0496, R² = 0.9118).
- **Cubic Spline** interpolation underperformed relative to the simpler methods (RMSE = 0.0924, R² = 0.6942).
- Smoother reconstructions (Spline) do not necessarily translate into higher accuracy.
- Method choice should be guided by the characteristics of the underlying signal, not just visual smoothness.

---


## Future Improvements

- Evaluate additional interpolation methods (PCHIP, Whittaker smoother, Kalman filtering).
- Test performance sensitivity to the number/length of consecutive missing observations.
- Investigate the influence of seasonal variability on reconstruction accuracy.
- Compare artificial gaps with real cloud-induced observation gaps.
- Assess method performance across multiple study areas and vegetation types.

---

## License

This notebook is part of a personal learning project on remote sensing time-series analysis and uncertainty quantification.
