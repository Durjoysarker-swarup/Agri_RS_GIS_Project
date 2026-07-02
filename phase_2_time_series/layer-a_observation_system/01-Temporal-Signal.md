# Temporal Signal

## Nature is Continuous. Observations are Discrete.

A crop never stops changing. Growth, photosynthesis, water loss, and chlorophyll changes occur continuously.

A satellite does not observe continuously. It only captures the crop at specific moments in time.

```
Reality (continuous)
──────────────────────────────────────────────
Satellite observations (discrete)
●         ●         ●         ●         ●
```

- The line represents reality.
- The dots represent observations.

> **Observation ≠ Reality**

---

## 1. What is a Temporal Signal?

A temporal signal is: **a variable measured repeatedly over time.**

### Examples
- NDVI every 5 days
- Rainfall every day
- Temperature every hour
- Soil moisture every week
- River water level every minute

Without time, a measurement is just a number.

With time, it becomes a story showing how the system changes. A single value tells very little.

A sequence tells you:
- Crop growth
- Growth rate
- When growth slows
- When maturity is reached

This sequence is the **temporal signal**.

---

## 2. Why Time Matters

Suppose today's NDVI is 0.72.

Can you conclude the crop is healthy?

**No.**

The same value could mean:
- Increasing rapidly
- Stable
- Declining after harvest
- Recovering from stress

A single observation has no context.

**Time provides context.**

---

## 3. Observation ≠ Reality

Suppose:
- Crop stress occurs on Day 8
- Satellite images are available only on Day 6 and Day 11

```
Day 6        Day 8        Day 11
● ---------- X ---------- ●
```

The satellite only shows:
- Day 6 → NDVI = 0.72
- Day 11 → NDVI = 0.60

It cannot tell exactly when the stress occurred.

This is why:

> **Observation ≠ Reality**

---

## 4. Temporal Resolution

The time interval between repeated observations of the same location.

### Examples

| System | Temporal Resolution |
|---|---|
| Weather station | 1 hour |
| Rain gauge | 1 day |
| Sentinel-2 | ~5 days (ideal) |
| Landsat | ~16 days |

**Smaller temporal resolution = More frequent observations.**

---

## 5. Revisit Frequency

How often a satellite can return to the same location.

### Example — Sentinel-2
- Ideal revisit ≈ 5 days

Clouds do not change the revisit frequency. The satellite still passes overhead.

---

## 6. Observation Frequency

The number of usable observations you actually obtain.

- Revisit frequency = every 5 days
- Observation frequency = much lower because cloudy images are unusable

This is especially important during the **Bangladesh monsoon**.

---

## 7. Sampling Frequency

How often measurements are taken from a continuous process.

### Example
- Crop grows continuously.
- Satellite samples every 5 days.

If sampling is too infrequent, important events may be missed:
- Flowering
- Flood damage
- Pest attack
- Harvest

### Irregular Sampling

Real satellite observations are rarely perfectly regular.

**Ideal intervals:**
```
5 → 5 → 5 → 5 → 5
```

**Real intervals:**
```
5 → 12 → 18 → 4 → 9 → 15
```

**Reasons:**
- Clouds
- Missing images
- Poor image quality
- Cloud masking

Irregular sampling makes time-series analysis more difficult.

---

## 8. Seasonal Dynamics

Plants change predictably through the growing season.

### Typical crop cycle

```
Planting → Slow growth → Rapid growth → Peak vegetation → Maturity → Harvest → Sharp decline
```

These seasonal changes are called **seasonal dynamics**.

---

## 9. Temporal Sampling Theory

How often should we observe a continuously changing process to represent it accurately?

If observations are too sparse:
- Peaks may be missed
- Stress events may go undetected
- Phenology estimates become inaccurate

The goal is to determine whether the sampling is sufficient to capture the true biological process.

---

> 📓 For code reference, please check `RESAMPLING TIME SERIES.ipynb`
