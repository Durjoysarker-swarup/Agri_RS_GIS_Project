# Temporal Aggregation & Week Synthesis

A monthly NDVI value is not measured by the satellite. It is created by an aggregation algorithm.

---

## Temporal Aggregation

Imagine Sentinel-2 observes your field five times during January.

| Date | NDVI |
|---|---|
| Jan 2 | 0.65 |
| Jan 7 | 0.70 |
| Jan 12 | 0.42 (thin cloud) |
| Jan 17 | 0.73 |
| Jan 22 | 0.71 |

Instead of keeping five values, many researchers want one value per month. So they aggregate them.

By aggregating, time series are easier to interpret.

**But aggregation always throws away information.**

---

## Three Common Aggregation Methods

1. Mean Composite
2. Median Composite
3. Maximum NDVI Composite

Each method produces a different answer.

> The crop didn't change. The algorithm changed.

**There is no universally best composite.**

---

## Scientific Trade-offs

| Method | Strength | Weakness |
|---|---|---|
| Mean | Uses all observations | Sensitive to outliers and residual clouds |
| Median | Robust to outliers | Ignores the magnitude of extreme values |
| Maximum | Often selects the clearest vegetation signal | Can preserve unrealistically high values or artifacts |
