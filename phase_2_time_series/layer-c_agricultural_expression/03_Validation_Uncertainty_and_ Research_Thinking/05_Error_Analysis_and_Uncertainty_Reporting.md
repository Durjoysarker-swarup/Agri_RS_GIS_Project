# 5.5 — Error Analysis & Uncertainty Reporting

Every remote sensing result is an estimate with uncertainty. Good science reports both the estimate and its uncertainty.

## Part 1 — Uncertainty

Uncertainty is the degree of confidence (or lack of confidence) in an estimate because the true value is not perfectly known.

### Sources of Uncertainty

Uncertainty enters the workflow long before analysis.

Think of your pipeline:

Sunlight → Sensor → Satellite Image → Cloud Masking → Interpolation → Smoothing → Feature Extraction → Baseline → Anomaly Detection → Interpretation

Every stage introduces uncertainty. These uncertainties accumulate

### Error

Error is the difference between an observed value and the (usually unknown) true value.

Mathematically:

Error = Observation − Truth

The problem: In remote sensing, the true value is rarely known exactly.

Error describes the difference from truth. Uncertainty describes our confidence in the estimate.

## Part 2 — Random vs Systematic Error

### Random Error

Unpredictable fluctuations.

**Examples:**
- Sensor noise
- Small atmospheric variations
- Minor GPS inaccuracies

**Characteristics:**
- Changes direction randomly
- Often reduced by averaging many observations

### Systematic Error (Bias)

Consistent deviation in one direction.

**Examples:**
- Miscalibrated sensor
- Incorrect atmospheric correction
- Persistent geolocation offset

**Characteristics:**
- Repeatable
- Does not disappear simply by collecting more data

### Comparison

| Random Error | Systematic Error |
|---------------|---------------------|
| Unpredictable | Consistent |
| Positive or negative | Usually one direction |
| Reduced by averaging | Requires correction |
| Increases variability | Shifts results consistently |

## Part 3 — Bias vs Variance

### Bias

Consistent deviation from the true value.

Example: A smoothing algorithm always underestimates peak NDVI.

### Variance

How much estimates fluctuate between repeated observations or datasets.

Example: Cloud contamination causes large day-to-day variability in NDVI.

### Trade-off

Increasing smoothing often:
- reduces variance
- increases bias

Reducing smoothing often:
- decreases bias
- increases variance

Choosing a processing method usually involves balancing these two.

Bias is being consistently wrong. Variance is inconsistently wrong. Good models seek a balance between the two.

Scientific credibility does not come from claiming uncertainty is absent—it comes from identifying, understanding, and transparently communicating how uncertainty influences every stage of the remote sensing workflow.
