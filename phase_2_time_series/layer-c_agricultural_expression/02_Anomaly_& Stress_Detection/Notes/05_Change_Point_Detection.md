# 4.5 — Change Point Detection

## Part 1 — Change Point

A change point is a point in time where the statistical or biological behavior of a time series changes.

A change point is not a value. It is time.

**Types of Change:**

1. Abrupt Change
2. Gradual Change
3. Permanent Shift
4. Temporary Disturbance

## Part 2 — Anomaly vs Change Point

### Anomaly

What is unusual?

- Expected → 0.75
- Observed → 0.52

Negative anomaly.

### Change Point

When did the behavior begin to change?

| Week | 1 | 2 | 3 | 4 | 5 |
|------|------|------|------|------|------|
| NDVI | 0.74 | 0.75 | 0.74 | ↓ 0.53 | 0.52 |

The change point occurs between Week 3 and Week 4.

### Comparison

| Anomaly | Change Point |
|---------|----------------|
| Focuses on values | Focuses on time |
| Measures deviation | Identifies transition |
| Answers "What is unusual?" | Answers "When did change begin?" |
| May last many observations | Usually occurs at one moment |

## Part 3 — Common Agricultural Change Points

### Flood Onset

Healthy canopy → Flood occurs → Rapid NDVI decrease

The flood itself is not the change point.

The beginning of its effect is.

### Harvest

Mature canopy → Harvest → Abrupt canopy removal

One of the clearest change points in agriculture.

### Irrigation Change

Improved water availability → Growth rate changes → Slope of the NDVI curve changes.

The transition may be gradual rather than abrupt.

### Disease Outbreak

Disease rarely appears instantly.

Instead, NDVI often begins declining gradually.

The first consistent departure from the previous trend marks the change point.

## Part 4 — Anomaly vs Change Point vs Trend

| Concept | Main Question | Focus |
|---------|----------------|-------|
| Anomaly | Is this value unusual? | Value |
| Change Point | When did behavior change? | Time of transition |
| Trend | Is the system increasing or decreasing over the long term? | Long-term direction |
