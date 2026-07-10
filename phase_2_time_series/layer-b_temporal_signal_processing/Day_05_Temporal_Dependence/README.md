# 2.5 — Temporal Dependence

## Why Are Time-Series Observations Not Independent?

Most classical statistics assume that observations are independent.

**Example:**

Imagine measuring the heights of 100 randomly selected people.
```
Person 1 → 168 cm
Person 2 → 175 cm
Person 3 → 161 cm
Person 4 → 172 cm
```

Does Person 2's height affect Person 3's height? → **No.**

Each observation is independent. Many statistical methods are built on this assumption.

---

## But Crop Growth Is Different

Imagine one rice field.
```
Day 1  → NDVI = 0.22
Day 6  → NDVI = 0.28
Day 11 → NDVI = 0.36
Day 16 → NDVI = 0.48
Day 21 → NDVI = 0.60
```

**Question:** Can Day 21 suddenly become 0.05 without any event?

Almost impossible. Because crops grow continuously.

Today's condition depends on yesterday's condition.

---

## The Core Idea

A crop has memory. Today's NDVI contains information from yesterday. Yesterday contains information from last week.

Growth is continuous. This creates **temporal dependence**.

> Temporal dependence means observations close together in time tend to be more similar than observations far apart in time.

---

## Lag

This is one of the most important concepts.

Suppose:
```
Day 1 → Day 6 → Day 11 → Day 16
```

Each observation is 5 days apart.

**Lag 1** — Compare:
```
Day 1 ↔ Day 6
Day 6 ↔ Day 11
Day 11 ↔ Day 16
```
One observation apart.

**Lag 2** — Compare:
```
Day 1 ↔ Day 11
Day 6 ↔ Day 16
```
Two observations apart.

**Lag 3** — Compare:
```
Day 1 ↔ Day 16
```
Three observations apart.

---

## Autocorrelation

Autocorrelation is the correlation of a time series with itself at different lags. Not between two variables — between the same variable at different times.

Suppose NDVI:
```
Day 1  - 0.30
Day 6  - 0.32
Day 11 - 0.35
Day 16 - 0.39
```

- Lag 1 correlation → Very high.
- Lag 10 correlation → Probably low.

**High Autocorrelation**
```
0.30 → 0.31 → 0.33 → 0.34 → 0.36 → 0.38
```
Very smooth, very predictable.

**Low Autocorrelation**
```
0.30 → 0.80 → 0.22 → 0.74 → 0.18 → 0.91
```
Almost random. Not realistic for vegetation.

---

## Partial Autocorrelation (PACF)

This is more advanced.

Imagine Day 1 influences Day 11. But does it influence directly, or only because Day 6 connects them?

PACF tries to answer: **What is the direct relationship after removing the effects of intermediate lags?**

```
Day 1 → Day 6 → Day 11
```

- Autocorrelation asks: Are Day 1 and Day 11 related?
- PACF asks: If I already know Day 6, does Day 1 still add information?

---

## Stationarity

A time series is stationary if its statistical properties remain constant over time. These properties include:
- Mean
- Variance
- Autocorrelation structure

```
5 → 5 → 5 → 5 → 5 → 5
```
Mean never changes. **Stationary.**

Now NDVI:
```
0.20 → 0.35 → 0.50 → 0.72 → 0.84 → 0.40
```
Mean changes dramatically. **Not stationary.**

Most vegetation time series are non-stationary, because crops grow.

---

## Trend & Seasonality

**Trend:** the long-term direction.

**Example**
```
0.20 → 0.30 → 0.40 → 0.50 → 0.60
```
Steady increase. Trend does not have to be linear — it simply represents long-term movement.

**Seasonality:** patterns that repeat at regular intervals.

**Example (rice every year):**
```
Planting → Growth → Harvest → Planting → Growth → Harvest
```
The cycle repeats. That's seasonality.

---

## Residual

After removing trend and seasonality, what remains is called the **residual**.

Residual contains:
- Random noise
- Unexplained variation
- Unusual events

---

## Consequences (Independence Failed)

This has major implications, because the observations (NDVI) are not independent.

### Statistics

Many statistical tests assume independence. If autocorrelation exists, p-values can become misleading.

### Machine Learning

Random train-test split can leak information.

**Example:**
```
Training → Day 10
Testing  → Day 11
```
The model has almost seen the answer. Instead, use time-based splits.

### Forecasting

Forecasting actually *uses* temporal dependence. Without autocorrelation, forecasting would be impossible.

---

## Common Misconceptions

- ❌ "Each NDVI observation is an independent sample."
- ❌ "Autocorrelation is a problem." — Not necessarily. Autocorrelation is a property of time-series data. It's a problem only if you ignore it when using methods that assume independence.
- ❌ "Stationarity means the values never change."

---

## Summary

Crop time-series exhibit temporal dependence because plant growth is a continuous biological process. As a result, observations close together in time are correlated, violating the independence assumptions of many statistical methods.

This dependence can be quantified using autocorrelation and lags, while trend and seasonality describe systematic temporal patterns. Understanding temporal dependence is essential for valid statistical analysis, forecasting, machine learning, and change detection in agricultural remote sensing.
