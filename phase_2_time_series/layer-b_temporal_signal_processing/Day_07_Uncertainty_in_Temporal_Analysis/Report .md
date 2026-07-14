# NDVI Uncertainty Analysis

## Overview

This notebook quantifies the uncertainty surrounding derived NDVI features using a **Monte Carlo simulation** approach. Rather than treating each NDVI observation as an exact value, the analysis treats it as a random variable subject to measurement uncertainty, generates many plausible realizations of the time series, smooths each realization independently, and extracts vegetation features from every one. The resulting distribution of feature values — rather than a single point estimate — is used to report confidence intervals around key temporal metrics such as Peak NDVI, Seasonal Mean, and Area Under the Curve (AUC).

This approach directly addresses a core principle of temporal remote-sensing analysis: uncertainty is not introduced at a single step but **accumulates through the entire workflow** — from measurement, through preprocessing, interpolation, and smoothing, to the final extracted feature. A single reported number (e.g., "Peak NDVI = 0.82") hides this accumulated uncertainty; reporting a value alongside a confidence interval (e.g., "Peak NDVI = 0.82, 95% CI: 0.79–0.85") makes the analysis transparent and reproducible.

---

## Objectives

- Simulate multiple plausible realizations of the observed NDVI signal, accounting for measurement uncertainty.
- Smooth every Monte Carlo realization independently using Whittaker smoothing.
- Extract vegetation features (Peak NDVI, Peak Date, Seasonal Mean, AUC) from each realization.
- Quantify the distribution of each feature across all simulations.
- Report point estimates alongside empirical 95% confidence intervals rather than single fixed values.
- Visualize uncertainty as a confidence band around the mean smoothed NDVI curve.

---

## Background: Sources of Uncertainty

| Type | Description | Example |
|------|-------------|---------|
| Measurement Uncertainty | Imperfect satellite observation | Sensor calibration, electronic noise, atmospheric correction, viewing geometry |
| Processing Uncertainty | Different valid processing choices yield different results | Cloud mask SCL → 0.72 vs QA60 → 0.69 |
| Interpolation Uncertainty | Missing values were never actually observed | Any gap-filled NDVI value |
| Model Uncertainty | Different smoothing/modeling methods disagree | Moving Average → 0.72 vs Savitzky-Golay → 0.76 |

**Bias vs. Variance:**
- **Bias** is systematic error that consistently pushes results in one direction (e.g., cloud contamination consistently lowering NDVI).
- **Variance** is random fluctuation with no consistent direction (e.g., 0.79 → 0.81 → 0.78 → 0.82); the average remains correct even though individual observations vary.

This notebook specifically quantifies **variance-driven uncertainty** via Monte Carlo resampling of the observed signal.

---

## Dataset

| Property | Value |
|----------|-------|
| Dataset | Sentinel-2 NDVI Time Series |
| Study Area | Sylhet |
| Observation Period | 2023 – 2026 |
| Total Observations | 69 |
| Temporal Resolution | Sentinel-2 |

---

## Experimental Workflow

```text
Observed NDVI
      │
      ▼
Monte Carlo Resampling
 (n = 100 realizations)
      │
      ▼
100 Simulated NDVI Series
      │
      ▼
Whittaker Smoothing (asls)
 applied to every realization
      │
      ▼
100 Smoothed NDVI Curves
      │
      ▼
Extract Features per Realization
 (Peak NDVI, Peak Date, Seasonal Mean, AUC)
      │
      ▼
Feature Distributions
      │
      ▼
Summary Statistics + 95% CI
      │
      ▼
Mean Curve + 95% Simulation Band
```

---

## Experiment Settings

| Parameter | Value |
|-----------|------:|
| Number of Monte Carlo Simulations | 100 |
| Smoothing Method (per realization) | Whittaker (`pybaselines.Baseline.asls`) |
| Lambda (λ) | 1 |
| Asymmetry (p) | 0.5 |
| Confidence Interval | 95% (empirical percentile: 2.5% / 97.5%) |

---

## Results

### Extracted Features (Sample)

| Simulation | Peak NDVI | Peak Date | Seasonal Mean | AUC |
|------------|----------:|-----------|---------------:|-----:|
| Simulation_1 | 0.758177 | 2025-10-20 | 0.517652 | 35.301636 |
| Simulation_2 | 0.745862 | 2025-10-22 | 0.518732 | 35.416816 |
| Simulation_3 | 0.754297 | 2023-04-19 | 0.515720 | 35.157464 |
| Simulation_4 | 0.760254 | 2025-10-20 | 0.517801 | 35.343060 |
| Simulation_5 | 0.757048 | 2025-10-20 | 0.516192 | 35.226306 |

---

### Monte Carlo Summary Statistics

| Feature | Mean | Std | Min | Max | Lower 95% | Upper 95% |
|---------|-----:|----:|----:|----:|----------:|----------:|
| Peak NDVI | 0.763003 | 0.008449 | 0.744866 | 0.786023 | 0.747148 | 0.782133 |
| Seasonal Mean | 0.517971 | 0.002184 | 0.510532 | 0.523112 | 0.513662 | 0.521799 |
| AUC | 35.337869 | 0.150142 | 34.832774 | 35.685834 | 35.045215 | 35.606458 |

**Scientific reporting equivalent:**
> Peak NDVI = 0.763 (95% CI: 0.747–0.782)
> Method: Whittaker smoothing of 100 Monte Carlo realizations
> Observed/Modeled: Modeled

---

### Monte Carlo Realizations of NDVI

> **Placeholder:** Insert the **Monte Carlo Realizations** figure (100 raw simulated curves + observed NDVI overlay).

<img width="1306" height="577" alt="image" src="https://github.com/user-attachments/assets/1bc96c35-2dda-4554-b297-20e4ccb6e230" />


---

### First Five Smoothed Realizations

<img width="1307" height="585" alt="image" src="https://github.com/user-attachments/assets/e5d0650c-6930-4fe1-9d9b-684364e79c56" />


---

### Distribution of Peak NDVI

<img width="813" height="485" alt="image" src="https://github.com/user-attachments/assets/bdb75a71-da0c-40e8-a28d-8d81f4f2e47a" />

---

### Mean NDVI Curve with 95% Simulation Band

<img width="1300" height="572" alt="image" src="https://github.com/user-attachments/assets/f1568fea-b8c5-4758-80bf-fc891965a0f5" />


---

## Discussion

The Monte Carlo simulation converts a single deterministic NDVI curve into a distribution of plausible curves, allowing every derived feature to be reported with a quantified confidence interval rather than as an exact value.

Key observations from the experiment include:

- Peak NDVI varied from 0.745 to 0.786 across 100 simulations (std ≈ 0.008), giving a 95% CI of **0.747–0.782** around a mean of **0.763**. This is a relatively tight distribution, indicating the peak magnitude is fairly stable to small perturbations in the input signal.
- The Seasonal Mean showed even lower relative variability (std ≈ 0.002), suggesting this aggregate feature is more robust to measurement noise than instantaneous peak values.
- AUC (Area Under the Curve), an integrated seasonal metric, showed a 95% CI of **35.05–35.61**, reflecting the accumulation of small per-timestep uncertainties across the full growing season.
- The Peak Date extracted across simulations was **not always the same date** (e.g., most realizations converge near 2025-10-20, but Simulation_3 identified 2023-04-19 instead) — indicating that timing-based features can be considerably more sensitive to noise than magnitude-based features, since flat or double peaks can shift which date is selected as "the" maximum.
- The 95% simulation band around the mean smoothed curve widens and narrows across the season, reflecting where the signal is more or less sensitive to input perturbations — likely wider around rapid transitions (green-up, senescence) and narrower during stable plateau periods.
- This ensemble-of-realizations approach is conceptually similar to **ensemble processing** (varying the *method* instead of the *data*): if multiple smoothing methods and simulation approaches converge on similar peak values, the conclusion is robust; if they diverge substantially, that divergence itself is a meaningful finding about the reliability of the metric.

---

## Key Findings

- 100 Monte Carlo realizations were generated and independently smoothed using Whittaker smoothing (λ=1, p=0.5).
- **Peak NDVI = 0.763 (95% CI: 0.747–0.782)** — modeled, not directly observed.
- **Seasonal Mean = 0.518 (95% CI: 0.514–0.522)** — the most stable of the three extracted features.
- **AUC = 35.34 (95% CI: 35.05–35.61)**.
- Peak Date was largely consistent across simulations (~2025-10-20) but showed occasional divergence, highlighting that timing-based features carry more positional uncertainty than magnitude-based features.
- Reporting features as point estimates with confidence intervals — rather than single fixed values — provides a substantially more transparent and reproducible summary of the underlying vegetation signal.

---

## Repository Structure

```text
NDVI-Uncertainty-Analysis/
│
├── 07_NDVI_Uncertainty_Analysis.ipynb
├── REPORT.md
├── data/
├── figures/
│   ├── monte_carlo_realizations.png
│   ├── first_five_smoothed_realizations.png
│   ├── peak_ndvi_distribution.png
│   └── mean_ndvi_uncertainty_band.png
└── README.md
```

---

## Future Improvements

- Incorporate additional uncertainty sources (processing/cloud-mask choice, interpolation method) into the Monte Carlo framework, not just measurement noise.
- Combine Monte Carlo resampling with ensemble processing (multiple smoothing methods) to separate model uncertainty from measurement uncertainty.
- Report prediction intervals (not just confidence intervals) for forecasting future NDVI observations.
- Extend confidence labeling to all features in downstream tables (marking each value as Observed / Interpolated / Modeled / Estimated).
- Investigate why Peak Date shows higher variability than Peak NDVI magnitude, and consider a more robust peak-timing estimator (e.g., fitting a parametric curve near the seasonal maximum).

---

## License

This notebook is part of a personal learning project on remote sensing time-series analysis and uncertainty quantification.
