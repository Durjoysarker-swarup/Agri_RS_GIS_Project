# Temporal Dependence Analysis

## Overview

This notebook investigates the temporal dependence structure of an NDVI time series, comparing the **raw NDVI signal** with a **Whittaker-smoothed version (AWS)**. Autocorrelation, partial autocorrelation, and seasonal decomposition were used to characterize how strongly past observations influence future values, and how smoothing affects that dependence structure.

---

## Objectives

- Quantify the autocorrelation structure of the raw NDVI series across multiple lags.
- Apply Whittaker smoothing (asymmetric least squares) to the NDVI signal.
- Compare autocorrelation behavior between raw and smoothed series.
- Examine ACF and PACF plots to assess lag significance.
- Decompose the smoothed series into trend, seasonal, and residual components.

---

## Dataset

| Property | Value |
|----------|-------|
| Dataset | Sentinel-2 NDVI Time Series |
| Study Area | *Sylhet* |
| Observation Period | 2023 – 2026 |
| Total Observations | *67* |
| Temporal Resolution | Sentinel-2 |

---

## Experimental Workflow

```text
Raw NDVI
    │
    ▼
Whittaker Smoothing (asls)
    │
    ▼
   ┌───────────────┬───────────────────┐
   ▼               ▼
Raw NDVI       Smoothed NDVI (AWS)
   │               │
   ▼               ▼
Autocorrelation (lags 1–10)
   │               │
   └───────┬───────┘
           ▼
   Compare Raw vs Smoothed
           │
           ▼
      ACF & PACF (lags 0–20)
           │
           ▼
   Seasonal Decomposition (AWS)
           │
           ▼
  Trend • Seasonal • Residual
```

---

## Experiment Settings

| Parameter | Value |
|-----------|------:|
| Smoothing Method | Whittaker (asymmetric least squares, `asls`) |
| Lambda (λ) | 1 |
| Asymmetry (p) | 0.5 |
| Max Autocorrelation Lag | 10 |
| ACF / PACF Lags | 20 |
| PACF Method | Yule-Walker (`ywm`) |
| Decomposition Model | Additive |
| Seasonal Period | 12 |

---

## Results

### Autocorrelation Comparison (Raw vs Smoothed)

| Lag | Raw | Smoothed |
|----:|----:|---------:|
| 1 | 0.7690 | 0.9361 |
| 2 | 0.5659 | 0.7629 |
| 3 | 0.3586 | 0.5265 |
| 4 | 0.1392 | 0.2771 |
| 5 | 0.0091 | 0.0526 |
| 6 | -0.1039 | -0.1337 |
| 7 | -0.2131 | -0.2837 |
| 8 | -0.3177 | -0.3978 |
| 9 | -0.3727 | -0.4710 |
| 10 | -0.4063 | -0.5107 |

---

### Autocorrelation by Lag

> **Placeholder:** Insert the **Autocorrelation by Lag** line plot.

```text
images/
└── autocorrelation_by_lag.png
```

```markdown
![Autocorrelation by Lag](images/autocorrelation_by_lag.png)
```

---

### ACF & PACF Plots

> **Placeholder:** Insert the combined **ACF/PACF** figure (Raw NDVI vs Smoothed NDVI).

```markdown
![ACF and PACF Comparison](images/acf_pacf_comparison.png)
```

**Interpretation guide:**
- Bar outside the shaded confidence band → likely a statistically significant lag.
- Bar inside the shaded confidence band → could simply be random variation.

---

### Seasonal Decomposition

> **Placeholder:** Insert the **Trend / Seasonal / Residual** decomposition figure for the smoothed (AWS) series.

```markdown
![Seasonal Decomposition](images/seasonal_decomposition.png)
```

---

## Discussion

The analysis reveals a clear temporal dependence structure in the NDVI signal that becomes more pronounced after smoothing.

Key observations from the experiment include:

- Both raw and smoothed series show strong positive autocorrelation at lag 1, decaying steadily and turning negative around lag 6.
- **Smoothing amplified the autocorrelation** at nearly every lag: the lag-1 autocorrelation increased from 0.769 (raw) to 0.936 (smoothed), and this pattern persists across all 10 lags tested.
- The autocorrelation crossing zero around lag 5 suggests a seasonal or cyclical dependence structure with a period longer than a few observations, consistent with vegetation growth cycles.
- The negative autocorrelation at higher lags (6–10) indicates an oscillatory pattern — high NDVI values tend to be followed by lower NDVI values roughly half a cycle later, and vice versa.
- PACF plots help isolate the direct effect of each lag after removing the influence of intermediate lags, which is useful for identifying an appropriate autoregressive order if modeling the series (e.g., ARIMA).
- Seasonal decomposition of the smoothed series confirms a strong repeating seasonal component layered on top of a slower-moving trend, with residuals showing modest, roughly cyclical fluctuation rather than pure noise.

---

## Key Findings

- Whittaker smoothing (λ = 1, p = 0.5) increased autocorrelation strength at every lag from 1 to 10 relative to the raw signal.
- Lag-1 autocorrelation: **0.769 (raw)** vs **0.936 (smoothed)**.
- Autocorrelation transitions from positive to negative between lag 5 and lag 6 for both series, suggesting a recurring seasonal cycle.
- ACF and PACF plots indicate the strongest direct dependence is concentrated at low lags, with diminishing significance at higher lags.
- Seasonal decomposition (period = 12, additive) successfully separated the smoothed NDVI series into clear trend, seasonal, and residual components.
- The trend component shows repeated rise-and-fall cycles rather than a single monotonic trend, consistent with recurring vegetation cycles across multiple years.

---

## Repository Structure

```text
Temporal-Dependence-Analysis/
│
├── 05_Temporal_Dependence_Analysis.ipynb
├── REPORT.md
├── data/
├── figures/
│   ├── autocorrelation_by_lag.png
│   ├── acf_pacf_comparison.png
│   └── seasonal_decomposition.png
└── README.md
```

---

## Future Improvements

- Fit an ARIMA/SARIMA model informed by the ACF/PACF structure and compare forecast accuracy.
- Test sensitivity of autocorrelation results to different Whittaker smoothing parameters (λ, p).
- Explore alternative seasonal periods (e.g., ~73 for 5-day Sentinel-2 composites) to better match the true satellite revisit cycle.
- Compare autocorrelation structure across multiple study areas or vegetation types.
- Investigate multiplicative decomposition as an alternative to the additive model.

---

## License

This notebook is part of a personal learning project on remote sensing time-series analysis and uncertainty quantification.
