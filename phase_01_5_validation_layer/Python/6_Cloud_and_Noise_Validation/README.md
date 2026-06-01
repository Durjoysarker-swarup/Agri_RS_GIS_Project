# 🧪 MODULE 6 — CLOUD + NOISE VALIDATION

Your NDVI time series is **NOT clean biology**.

It contains:

- 🌤️ Atmospheric distortion (cloud, haze)
- 🛰️ Sensor noise (angle effects, satellite error)
- 🌾 True vegetation signal

### Core Equation

Observed NDVI = True vegetation signal + Noise + Atmospheric distortion

---

## YOUR TASK

> Separate real crop behavior from artifacts.

---

## PART 0 — LOAD DATA

- Load dataset
- Convert date column
- Sort by time
- Set time index

---

## PART 1 — RAW vs CLEAN COMPARISON SYSTEM

### Goal

Always compare:

- Raw GEE NDVI
- Cleaned NDVI (Python version)

---

### Structure

```text
df['NDVI_raw'] = df['NDVI']
df['NDVI_clean'] = df['NDVI']
```

You will modify ONLY:

- `NDVI_clean`

Keep raw unchanged.

---

## PART 2 — CLOUD CONTAMINATION LOGIC

Even after cloud masking in GEE:

- Thin clouds remain
- Haze remains
- Shadow edges remain

---

### Detection Idea

Look for pattern:

- Sudden NDVI drop
- Immediate recovery

---

### Implementation Logic

Compare:

- t-1
- t
- t+1

Cloud signature:

- High → sudden dip → immediate recovery

Plant stress:

- Gradual decline → slow recovery (or no recovery)

---

## PART 3 — CLOUD FLAGGING AND REMOVAL

### Step 1 — Create Flag Column

Mark detected cloud pixels:

- cloud_flag = 1

---

### Step 2 — Replace with NaN

Remove cloud-contaminated NDVI values:

- Replace flagged NDVI values with NaN

---

## PART 4 — CLEANING RULES

### Step 1 — Physical Limits

NDVI must satisfy:

- -1 ≤ NDVI ≤ 1

Values outside this range are invalid → set to NaN.

---

### Step 2 — Biological Constraints

Crop behavior rules:

- Crop cannot jump 0.2 → 0.9 in 1 week
- Crop cannot drop 0.8 → -0.3 instantly

---

### Change Detection

Compute:

- NDVI difference between time steps

---

### Rule Enforcement

Keep values where:

- Absolute change < threshold (e.g., 0.3)

Remove others as invalid.

---

### Meaning

You are enforcing:

> Vegetation cannot change faster than biology allows

---

## PART 5 — IMPUTATION

Missing NDVI values (NaN) are filled using interpolation.

### Method

Linear interpolation:

- Estimates missing values from nearby points

---

### Example

Before:

- 0.40 → NaN → 0.60

After:

- 0.40 → 0.50 → 0.60

---

## PART 6 — OUTLIER DETECTION (NOISE SPIKES)

### Purpose

Detect abnormal NDVI changes caused by:

- Clouds
- Sensor issues
- Atmospheric distortion

---

### Method 1 — Difference Threshold

Detect sudden jumps:

- Change > threshold (e.g., 0.3)

If spikes exist:

- Apply smoothing (e.g., rolling mean)

---

### Method 2 — Z-Score Detection

Z-score measures distance from mean in standard deviation units.

---

### Interpretation

| Z-score | Meaning |
|--------|--------|
| 0 | Average |
| ±1 | Normal variation |
| ±2 | Unusual |
| > ±2.5 | Outlier |

---

### Meaning of Z-score

It quantifies:

> How far a value deviates from typical behavior

---

## PART 7 — THINK LIKE A SCIENTIST

You are no longer:

- A GIS operator
- A map visualizer

You are becoming:

> A temporal signal analyst

---

### Always Ask:

1. Biological plausibility
- Can crops change this fast?

2. Atmospheric noise
- Cloud?
- Shadow?
- Aerosol?

3. Sampling issues
- Missing dates?
- Irregular revisit?

4. Preprocessing artifacts
- Masking errors?
- Interpolation bias?
- Resampling distortion?

---

## PART 8 — ROLLING MEAN (NOISE FILTER)

### Definition

Rolling mean = local smoothing operation

---

### Formula Idea

Each value becomes:

- Average of neighboring time points

---

### Effect

- Reduces spikes
- Reduces random noise
- Preserves seasonal trends

---

### Critical Warning

Rolling mean is NOT true correction.

It is:

> A statistical smoothing tool

---

### Risk

If overused:

- Real crop stress signals are destroyed

---

## PART 9 — RAW vs CLEAN vs SMOOTH COMPARISON

### Key Questions

- Did smoothing remove real stress signals?
- Did cleaning remove true drought events?
- Is correction too aggressive?

---

## FINAL INSIGHT

You are not just cleaning data.

You are deciding:

> What is real Earth behavior and what is artifact
