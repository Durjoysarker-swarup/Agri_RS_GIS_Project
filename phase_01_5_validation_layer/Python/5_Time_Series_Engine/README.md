# 🧪 MODULE 5 — TIME SERIES ENGINE

## WHAT IS A TIME SERIES?

A time series is the same variable measured repeatedly across time.

### Example

| Date | NDVI |
|------|------|
| Jan | 0.21 |
| Feb | 0.33 |
| Mar | 0.48 |
| Apr | 0.71 |
| May | 0.62 |

### This represents:

- Crop growth trajectory
- Vegetation dynamics
- Seasonal behavior
- Stress detection system

---

## OBJECTIVE

### 1. Temporal Structure

Natural crop behavior follows patterns:

- Growth is gradual
- Senescence is gradual
- Biological processes are smooth

### Key Insight

Sudden jumps are suspicious.

---

### 2. Noise Recognition

Satellite time series contains noise such as:

- Clouds
- Haze
- Shadows
- Atmospheric scattering
- Sensor noise
- Missing observations

### Critical Truth

A raw NDVI series is NEVER perfectly clean.

If you trust raw data blindly:

- ML models become unreliable
- Phenology analysis becomes incorrect
- Yield prediction becomes unstable

---

### 3. Biological Reasoning

You must constantly ask:

- Does this NDVI jump make biological sense?
- Can rice become mature in 3 days?
- Can vegetation collapse instantly?

This is scientific reasoning, not just coding.

---

## PART 1 — LOAD AND STRUCTURE TIME DATA

Convert CSV into a proper temporal dataset.

### STEP 1 — LOAD DATA

Load NDVI time-series data.

---

### STEP 2 — CONVERT DATE COLUMN

Convert date column into a temporal format, then:

- Sort by time
- Set date as index

This makes the dataset time-aware.

---

### STEP 3 — DROP UNNECESSARY COLUMNS

Remove irrelevant columns to keep dataset clean and focused.

---

## PART 2 — IRREGULAR SAMPLING

Satellite data is often NOT evenly spaced.

### Example

| Date |
|------|
| Jan 1 |
| Jan 17 |
| Feb 10 |
| Mar 2 |

### Key Issue

Time gaps are inconsistent.

---

### Why This Matters

Many algorithms assume:

- Regular intervals
- Fixed time steps

But real satellite data violates this assumption.

---

### Gap Detection

Measure time differences between observations.

This reveals:

- 16-day gaps
- 24-day gaps
- Missing observations

---

### Interpretation

Large temporal gaps reduce:

- Phenology accuracy
- Seasonal interpretation
- Stress detection reliability

---

### Critical Insight

This is not just programming.

It directly affects scientific validity.

---

## PART 3 — RESAMPLING TIME SERIES

Transform irregular data into consistent intervals.

### Purpose

- Standardize time steps
- Improve model compatibility
- Reduce irregularity

---

### Example

Resample data into:

- Weekly intervals
- Monthly intervals
- 10-day intervals

---

### Concept

Satellite acquisition is irregular.

But ML models prefer:

- Consistent sampling
- Regular time steps

---

### Example Operation

Resampling aggregates values over time windows.

---

### Common Frequencies

| Code | Meaning |
|------|--------|
| 7D | 7 days |
| 10D | 10 days |
| W | Weekly |
| M | Monthly |

---

## PART 4 — VISUALIZE NDVI CURVE

A healthy vegetation curve typically:

- Rises gradually
- Peaks
- Declines gradually

### Crop Lifecycle Pattern

- Seedling
- Vegetative stage
- Maturity
- Harvest

---

## PART 5 — NOISE SPIKE DETECTION

### Definition

A noise spike is an unrealistic sudden jump or drop in NDVI.

---

### Example

| Date | NDVI |
|------|------|
| Apr 1 | 0.72 |
| Apr 5 | 0.11 |
| Apr 10 | 0.73 |

### Interpretation

Such behavior is biologically unlikely.

---

### Likely Causes

- Cloud contamination
- Haze
- Poor atmospheric correction

---

## STEP 1 — VISUAL INSPECTION

Plot NDVI over time.

### Purpose

- Identify irregular patterns
- Human validation of trends

---

## STEP 2 — DIFFERENCE ANALYSIS

Compute change between consecutive values.

### Meaning

Measures how NDVI evolves over time.

---

## STEP 3 — DETECT LARGE CHANGES

Identify sudden jumps:

- Large NDVI increases or drops
- Example threshold: 0.3

---

### Important Insight

A large change is NOT always an error.

### Possible Real Causes

- Harvest
- Flood
- Fire
- Drought

---

## FINAL INSIGHT

This is where domain knowledge becomes essential.

AI alone is not sufficient.

Scientific interpretation is required to distinguish:

- True environmental change
- Sensor or atmospheric noise
