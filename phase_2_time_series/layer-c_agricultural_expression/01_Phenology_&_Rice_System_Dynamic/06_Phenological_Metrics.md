# 3.6 — Phenological Metrics

Phenology becomes science when biological events are converted into measurable temporal features.

## Part 1 — What Are Phenological Metrics?

You learned to read an NDVI curve qualitatively.

**Example:**
```
The crop started growing → Reached maximum canopy → Began senescence → Harvested
```

That's descriptive. Now researchers want numbers.

Instead of saying: "The crop started growing," they say: **"SOS occurred on DOY 124."** (DOY = Day Of Year)

Instead of: "The crop matured," they say: **"Peak NDVI = 0.84 on DOY 213."**

Those numbers are **phenological metrics**.

---

## Part 2 — The Main Phenological Metrics

Imagine one yearly NDVI curve.

```
NDVI
0.9 |                ▲
    |               /   \
0.7 |             /       \
    |           /           \
0.5 |         /               \
    |       /
0.3 |___/
        Time →
```

Everything you measure comes from this curve.

### 1. SOS — Start of Season

**Definition:** The date when vegetation begins active growth.

Biologically:
- Emergence
- Establishment
- Canopy expansion

Not necessarily planting — planting may occur earlier.

```
Seed planted → Germination → Leaves appear → Satellite detects growth → SOS
```

SOS depends on:
- Crop type
- Climate
- Threshold method

### 2. POS — Peak of Season

The date when vegetation reaches maximum development.

Usually corresponds to:
- Maximum canopy
- Maximum LAI
- Highest NDVI

Not always maximum yield.

Metrics two things: **Peak Value** and **Peak Timing**.

**Example:**
```
Peak NDVI = 0.84
Peak Date = DOY 212
```

### 3. EOS — End of Season

The date when vegetation begins ending its growing cycle.

Usually associated with:
- Senescence
- Harvest

Remember: harvest may occur after EOS. EOS often represents biological decline, not necessarily harvest day.

### 4. LOS — Length of Season

Total growing duration.

```
LOS = EOS − SOS
```

---

## Part 3 — Additional Metrics

### Green-up Rate

Question: How quickly did vegetation develop?

Mathematically, it is related to the slope during growth.
- Steep slope → Rapid canopy development.
- Gentle slope → Slow establishment.

Possible reasons: fertilizer, irrigation, warm temperatures.

### Senescence Rate

How quickly did vegetation decline?
- Steep decline → Harvest or severe stress.
- Gradual decline → Natural aging.

---

## Part 4 — How Are These Metrics Extracted?

### Method 1 — Threshold Method

Most common. Growth begins when NDVI exceeds a chosen threshold.

**Example:** Threshold NDVI = 0.3

```
NDVI
0.8 |
0.6 |             /\
0.4 |______/  \____
0.3 |------ Threshold
```

- Crossing upward → SOS
- Crossing downward → EOS

**Advantages:** Simple, easy to implement, easy to explain.

**Disadvantages:**
- Threshold choice is subjective.
- Different thresholds produce different SOS and EOS.
- A fixed threshold may not work equally well across crop types or climates.

**Failure cases:**
- Noisy data
- Cloud-contaminated observations
- Very low-amplitude curves
- Years with severe drought

### Method 2 — Derivative Method

Instead of using NDVI values, look at the rate of change. Think of the derivative as: "How fast is NDVI changing today?"

- During green-up, the derivative is strongly positive.
- Near maturity, it approaches zero.
- During senescence, it becomes negative.

**Advantages:**
- Captures biological transitions more naturally than a fixed threshold.
- Less dependent on an arbitrary NDVI value.

**Disadvantages:**
- Derivatives amplify noise.
- Small fluctuations in NDVI can create large fluctuations in the derivative.

**Failure cases:**
- Unsmoothed time series
- Sparse observations
- Cloud gaps
- Irregular revisit intervals

### Method 3 — Curve Fitting

Instead of analyzing raw observations, fit a smooth mathematical curve to the season.

Common approaches include:
- Logistic curves
- Double logistic curves
- Asymmetric Gaussian
- Spline functions

Once the curve is fitted, metrics can be extracted from the continuous function rather than noisy observations.

**Advantages:**
- Smooth.
- Handles missing observations better.
- Provides biologically realistic transitions.

**Disadvantages:**
- Requires model assumptions.
- A poor fit leads to biased phenological metrics.

**Failure cases:**
- Very sparse data
- Multiple overlapping crop cycles
- Abrupt harvests not captured by the chosen model

---

## Part 5 — Comparison of Methods

| Method | Strength | Weakness | Best Use |
|---|---|---|---|
| Threshold | Simple and interpretable | Threshold is subjective | Routine crop monitoring |
| Derivative | Detects transitions | Very sensitive to noise | High-quality smoothed time series |
| Curve fitting | Robust and continuous | Requires model assumptions | Research and long-term analyses |

No method is universally best. The choice depends on data quality, crop type, and research objective.

---

## Part 6 — Biological Interpretation

Never stop after extracting metrics.

**Example:** SOS delayed by 12 days. Why?

Possible causes:
- Late planting
- Delayed rainfall
- Cooler temperatures
- Prolonged flooding

The metric is the observation. The explanation still requires biological reasoning.

---

## One Suggestion

I would not implement derivative or curve-fitting algorithms from scratch in your notebook. Instead:

1. Implement a threshold-based extraction yourself.
2. Use a library or a well-established implementation for more advanced methods if you explore them later.
3. Focus your effort on interpreting and comparing the outputs rather than reproducing complex algorithms — that aligns better with your research goals.
