# 2.7 — Uncertainty in Temporal Analysis

## How Confident Are We in Every Conclusion?

Most beginners report:
```
Peak NDVI = 0.82
```

A researcher reports:
```
Peak NDVI = 0.82 ± 0.03
```
or
```
95% Confidence Interval: 0.79–0.85
```

Because every observation contains uncertainty.

---

## Uncertainty

Uncertainty is the range within which the true value is expected to lie.

### Types of Uncertainty

**1. Measurement Uncertainty**

Question: Did the satellite measure perfectly? **No.**

Reasons:
- Sensor calibration
- Electronic noise
- Atmospheric correction
- Viewing geometry

**2. Processing Uncertainty**

Different cloud masks:
```
SCL  → 0.72
QA60 → 0.69
```

Both are possible. The processing workflow introduced uncertainty.

**3. Interpolation Uncertainty**

Interpolation always introduces uncertainty because the value was never observed.

**4. Model Uncertainty**

Suppose two smoothing methods produce:
```
Moving Average → 0.72
Savitzky-Golay  → 0.76
```

Which one represents reality? We don't know. Different models → different answers.

---

## Error Propagation

Your workflow is:
```
Raw NDVI → Cloud Mask → Smoothing → Interpolation → Feature Extraction
```

Every step adds uncertainty.

---

## Bias vs Variance

These are two different kinds of error.

### Bias

Systematic error. Always pushes results in one direction.

**Example:** Cloud contamination.
```
True NDVI: 0.80
Observed:  0.60
```

Clouds consistently lower NDVI. That is biased.

### Variance

Random variation.

**Example**
```
0.79 → 0.81 → 0.78 → 0.82 → 0.80
```

No consistent direction. Just random fluctuation. The average is correct; individual observations vary.

---

## Confidence Interval (CI)

A confidence interval gives a range that is likely to contain the true value based on repeated sampling.

**Example**

Instead of writing:
```
Peak NDVI = 0.82
```

Write:
```
Peak NDVI was 0.82 (95% CI: 0.79–0.85).
```

**Interpretation:** The estimate is 0.82, but values between 0.79 and 0.85 are plausible given the uncertainty in the estimation process.

### Confidence Labeling

Not every value has the same reliability.

| Feature | Value | Source |
|---|---|---|
| NDVI (Day 20) | 0.72 | Observed |
| NDVI (Day 25) | 0.74 | Interpolated |
| Peak NDVI | 0.82 | Modeled |
| Growth Rate | 0.03/day | Estimated |

Now the reader immediately knows which values came directly from the satellite and which were derived.

This simple practice makes your results much more transparent and reproducible.

---

## Prediction Interval (PI)

Uncertainty about a future individual observation.

**Example:** Predict next week's NDVI.

Prediction intervals are almost always wider because individual observations vary more than the mean.

---

## Monte Carlo Simulation

Instead of assuming one NDVI value is exact, we allow it to vary within its measurement uncertainty.

**Suppose:**
```
Observed NDVI:      0.72
Sensor uncertainty: ±0.02
```

Now generate many possible versions.

```
Run 1   → 0.71
Run 2   → 0.73
Run 3   → 0.70
...
Run 100 → 0.74
```

Each run is one possible reality.

Now smooth every realization. You now have 100 smoothed curves. Instead of one answer, you obtain a **distribution** of answers.

### What Do Researchers Actually Report?

Not this:
```
Run 1
Run 2
Run 3
...
Run 100
```

Instead, they report:

| Quantity | Value |
|---|---|
| Mean Peak NDVI | 0.82 |
| Standard Deviation | 0.01 |
| 95% CI | 0.81–0.84 |

Or show a confidence band around the mean curve.

---

## Ensemble Processing

This is similar in spirit. Instead of varying the data, vary the processing methods.

**Example**

Use:
- Moving Average
- Savitzky-Golay
- Whittaker
- Asymmetric Whittaker

Each produces a slightly different curve.

If all four methods give Peak NDVI ≈ 0.82, your conclusion is robust.

If they produce:
```
0.74
0.80
0.87
0.91
```

Then your result depends heavily on the chosen method. That itself is an important finding.

---

## Scientific Reporting

Don't report:
```
Peak NDVI = 0.82
```

Instead report:
```
Peak NDVI: 0.82 ± 0.03
Method: Whittaker
Observed/Modeled: Modeled
```

This is much more transparent.

---

## Putting Everything Together

Your complete workflow now looks like this:

```
Reality → Satellite Observation → Measurement Uncertainty → Preprocessing →
Processing Uncertainty → Interpolation → Interpolation Uncertainty → Smoothing →
Model Uncertainty → Temporal Features → Report Value + Uncertainty
```

Notice something profound:

> Uncertainty is not introduced at one step — it accumulates throughout the workflow.

---

## Summary

Every stage of temporal analysis — from measurement and preprocessing to interpolation, smoothing, and feature extraction — introduces uncertainty. Because these uncertainties propagate through the analysis, temporal features such as peak NDVI, growth rate, and anomaly magnitude should always be interpreted alongside measures of confidence rather than as exact values.

Scientific conclusions are strongest when they report both the estimate and its associated uncertainty.
