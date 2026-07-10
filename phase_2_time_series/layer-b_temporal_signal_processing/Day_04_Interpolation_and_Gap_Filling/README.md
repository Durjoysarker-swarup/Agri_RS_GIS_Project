# Interpolation & Gap Filling

Suppose a rice field was observed on:

```
Day 1   NDVI = 0.25
Day 6   NDVI = 0.34
Day 11  Missing
Day 16  Missing
Day 21  NDVI = 0.78
```

**Question:** What happened on Day 11 and Day 16?

**The answer is:** Nobody knows. The satellite never observed those days.

Interpolation simply makes an educated guess.

---

## Interpolation

Estimating unknown values **between** two known observations. The important word is: **between**.

**Example:**
```
Day 1  → NDVI = 0.30
Day 11 → ?
Day 21 → NDVI = 0.70
```

Interpolation estimates Day 11.

---

## Extrapolation

Now imagine:
```
Day 1
Day 11
Day 21
Day 31 ?
```

No observations exist after Day 21. Predicting Day 31 is **extrapolation**.

### Difference

| Interpolation | Extrapolation |
|---|---|
| Between known observations | Outside observed range |
| Generally more reliable | Much more uncertain |
| Uses surrounding information | Must predict beyond available data |

---

## Interpolation Importance

Remote sensing data are rarely complete. Reasons include:
- Clouds
- Cloud shadows
- Haze
- Sensor issues
- Poor image quality
- Quality masking

Large gaps make it difficult to:
- Detect crop growth
- Estimate phenology
- Calculate growth rates
- Compute temporal features

Interpolation provides estimates for the missing periods.

---

## Why Interpolation Works

Suppose:
```
Day 1  → NDVI = 0.30
Day 21 → NDVI = 0.70
```

Vegetation usually changes gradually. Therefore, a value around 0.50 between them may be reasonable.

Interpolation assumes there is continuity.

---

## Method 1 — Linear Interpolation

This is the simplest.

**Assumption:** Vegetation changes at a constant rate.

**Example**
```
Day 1  → 0.30
  ↓
  ↓
  ↓
Day 21 → 0.70
```

Estimated:
```
Day 6 (0.40) → Day 11 (0.50) → Day 16 (0.60)
```

**Advantages**
- Simple
- Fast
- Easy to explain

**Limitations**
- Assumes straight-line growth
- Real crops rarely grow linearly

---

## Method 2 — Spline Interpolation

Instead of straight lines, spline fits smooth curves.

```
Linear ⇒ /
Spline ⇒ )
```

**Advantages**
- More realistic
- Smooth transitions

**Disadvantages**
- Can overshoot.
- Sometimes values are higher or lower than expected.

---

## Method 3 — Piecewise Interpolation

Instead of fitting one curve to the entire series, fit separate sections.

Useful when different growth stages have different behavior.

**Example**
```
Emergence → Vegetative → Heading → Harvest
```

Each stage can be modeled separately.

---

## Method 4 — Nearest Neighbor

```
Missing value
     ↓
Copy nearest observation.
```

**Example**
```
0.52
?
0.61
```

Estimate: `0.52`

Simple. Rarely used for vegetation time series.

---

## Method 5 — Whittaker Gap Filling

Whittaker creates one smooth curve. Missing observations can simply be read from that curve.

Instead of connecting points directly, it estimates the missing values using the global trend.

Useful for satellite NDVI.

---

## Trust Gap

How large can a gap become before interpolation becomes unreliable?

Suppose Sentinel-2 → 5-day revisit.

- Gap → 10 days → Reasonable.
- Gap → 20 days → Still acceptable.
- Gap → 80 days.

Now ask yourself: did vegetation stay unchanged for 80 days? Almost certainly not.

Interpolation now becomes guesswork.

**Trust Gap is:** The maximum gap length over which interpolation is considered scientifically reliable.

### Trust Gap Depends on Biology

Imagine the forest changes slowly. Even a 30-day gap may be acceptable.

Rice during heading changes dramatically within two weeks. A 30-day gap may miss the entire flowering stage.

The same gap has different meanings for different vegetation.

---

## Uncertainty Growth

```
Longer gaps → More possible crop trajectories → Higher uncertainty
```

| Gap Length | Uncertainty |
|---|---|
| 5 days | Low uncertainty |
| 20 days | Moderate uncertainty |
| 60 days | High uncertainty |
| 90 days | Very high uncertainty |

---

## Decision Rules

Never interpolate across:

1. **Monsoon Blind Periods** — Three months of cloud cover cannot be reconstructed reliably.
2. **Seasonal Discontinuities** — Crossing from one crop season to another breaks biological continuity.
3. **Harvest Events** — Harvest is abrupt. Interpolation assumes continuity. Those assumptions conflict.
4. **Major Stress Events**

---

## Summary

Interpolation estimates missing observations between known satellite measurements by assuming a plausible pattern of change. It does not recover the true crop condition, because the missing period was never observed. As the length of the missing gap increases, uncertainty also increases, especially during biologically important periods such as monsoon, flowering, or harvest.

Therefore, interpolation is a scientific estimation tool, not a replacement for observations, and its reliability depends on both gap length and crop dynamics.

---

## Data Fusion vs. Interpolation

These are often confused.

- **Interpolation** estimates missing values from the same time series.
- **Data fusion** fills information using other data sources (e.g., Sentinel-1 SAR, Landsat, weather data, or crop models).
