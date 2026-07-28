# 4.3 — Detecting NDVI Anomalies

## Part 1 — Different Types of Anomaly Patterns

Not all anomalies look the same. Their shape through time provides important clues.

### 1. Single-Date Anomaly

Only one observation differs strongly.

**NDVI**

0.75 → 0.74 → 0.30 → 0.76 → 0.75

**Characteristics**
- appears once
- disappears immediately

**Common causes**
- cloud contamination
- shadow
- sensor noise

Sometimes real, often suspicious. Also, it depends on the time gap of your dataset. If the dataset observation gap is high then you need to validate this.

### 2. Persistent Anomaly

The deviation continues for many observations.

**Expected**

0.75 → 0.76 → 0.77 → 0.78

**Observed**

0.60 → 0.59 → 0.58 → 0.57

**Characteristics**
- long duration
- consistent deviation

Much more likely to represent real environmental or biological changes.

### 3. Gradual Anomaly

The deviation develops slowly.

**Baseline**

0.70 → 0.72 → 0.74 → 0.76

**Observation**

0.70 → 0.69 → 0.66 → 0.61

The difference increases over time.

**Possible future explanations**
- progressive drought
- nutrient limitation
- disease spread

### 4. Abrupt Anomaly

The deviation appears suddenly.

0.75
0.76
0.77
↓
0.38

**Possible future explanations**
- flood
- harvest
- severe storm

## Part 2 — What Information Can Be Recorded?

For every detected anomaly, describe it objectively.

**Example**

| Property | Description |
|----------|-------------|
| Direction | Positive / Negative |
| Pattern | Single-date / Persistent / Gradual / Abrupt |
| Start date | When it first appeared |
| End date | When it disappeared |
| Largest deviation | Maximum anomaly value |

None of these require knowing the cause.

## Part 3 — Detection vs Explanation

Suppose NDVI decreases.

- **Detection** → Negative anomaly.
- **Explanation**
  - Maybe drought.
  - Maybe flood.
  - Maybe clouds.
  - Maybe harvest.

Detection asks → What happened?

Interpretation asks → Why did it happen?

**Remember**

Detection → Description → Interpretation

Never skip the middle step.
