# 4.1 — Anomaly

> What is an anomaly, how is it different from an outlier or noise, and why should it never be interpreted as stress without evidence?

## Part 1 — What Is an Anomaly?

An anomaly is an observation that differs from an expected reference or baseline.

```
Observation − Expected value = Anomaly
```

No interpretation. Just comparison.

**Example**
```
Expected NDVI → 0.70 (Reference)
Observed NDVI → 0.55
Difference    → -0.15
```

That difference is the anomaly.

So, we need a reference to detect the anomaly.

---

## Part 2 — Expected Variability vs Abnormal Behavior

Nature is never perfectly constant. Even healthy crops change from day to day. Small differences are normal.

**Example**
```
Expected NDVI → 0.70
Observed      → 0.69
Difference    → -0.01
```
Probably normal variability.

**Another example**
```
Expected → 0.70
Observed → 0.42
Difference → -0.28
```
Much larger. Now investigate.

Not every difference is an anomaly worth explaining. Some variation is expected because of:
- Measurement noise,
- Weather,
- Natural biological variability.

---

## Part 3 — Absolute vs Relative Anomalies

There are different ways to describe anomalies.

### Absolute Anomaly

Simple difference between Observed & Expected. Easy to interpret.

### Relative Anomaly

Difference expressed relative to the expected value.

Conceptually: difference compared to baseline.

**Example**

A drop of 0.10 is much more important if the expected value was 0.20 than if it was 0.90.

Relative anomalies account for that context.

---

## Part 4 — Positive and Negative Anomalies

### Positive Anomaly

The observed value is higher than expected.

Possible reasons:
- Favorable weather,
- Irrigation,
- Better fertilizer,
- Vigorous crop growth.

### Negative Anomaly

Observed value is lower than expected.

Possible reasons:
- Drought,
- Flood,
- Disease,
- Harvest,
- Cloud contamination.

---

## Part 5 — Spatial vs Temporal Anomalies

There are two common ways to detect anomalies.

### Temporal Anomaly

Compare the same field across time.

**Example — Field A**
```
2025 → NDVI = 0.82
2026 → NDVI = 0.60
```
Question: Why is this year different?

### Spatial Anomaly

Compare different locations at the same time.

**Example — Today**
```
Field A → 0.80
Field B → 0.55
```
Question: Why is this field different?

For your current research, **temporal anomalies** are the primary focus.

---

## Part 6 — Noise vs Outlier vs Anomaly vs Stress

### 1. Noise

Small random fluctuations.

**Example**
```
0.71 → 0.70 → 0.72 → 0.69 → 0.71
```
Tiny changes. Usually caused by:
- Sensor variability,
- Atmosphere,
- Illumination.

Noise is expected.

### 2. Outlier

A value very different from neighboring observations.

**Example**
```
0.71 → 0.70 → 0.15 → 0.72 → 0.71
```
The value 0.15 is an outlier.

Possible causes:
- Cloud,
- Sensor error,
- Real event.

An outlier is a statistical description. It does not explain the cause.

### 3. Anomaly

A deviation from the expected baseline.

**Example**
```
Expected → 0.75
Observed → 0.55
```
Negative anomaly.

Notice: the observation may not even look like an outlier if the whole season was poor. Anomalies depend on a **reference**, not neighboring values.

### 4. Stress

Stress is not a measurement. Stress is a biological process.

Examples:
- Drought,
- Flooding,
- Nutrient deficiency,
- Heat,
- Disease.

Stress may produce an anomaly. But not every anomaly is caused by stress.

---

## Part 7 — Scientific Reasoning

Suppose you detect:
```
NDVI
0.82 → 0.60
```

**Poor reasoning:** "Crop stress."

**Scientific reasoning:**
```
Observation → Negative anomaly → Possible explanations →
Evidence → Most likely explanation → Remaining uncertainty
```
