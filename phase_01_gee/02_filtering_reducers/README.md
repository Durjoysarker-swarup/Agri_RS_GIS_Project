# Filtering + Reducers

This day focuses on how satellite image collections are cleaned and compressed into meaningful single images for analysis.

---

## Core Idea

Satellite data comes as multiple observations of the same area. To make it usable, we must **filter unwanted data and reduce multiple images into one stable representation**.

---# DAY 2 — FILTERING + REDUCERS

## Core Idea
Satellite data is not a single image. It is a stack of observations over time or multiple captures of the same area.  
Reducers compress this stack into one output value.

---

## Two Types of Stacks

### Temporal Stack (Time Story)
Same pixel across different dates.

- Each date = different plant stage + possible cloud
- Example progression: seed → growth → maturity → cloud
- If you apply mean/median:
  → you destroy time progression
  → crop growth story is lost

**Key insight:**  
Temporal reduction removes biological meaning if used blindly.

---

### Spatial Stack (Image Cleaning)
Same area, same time window, multiple noisy images.

- Each image has different noise (cloud, haze, gaps)
- Signal (vegetation) is stable
- Noise changes across images

If reduced:
→ stable land signal remains  
→ noise cancels out  

**Key insight:**  
Spatial reduction improves data quality.

---

## Reducer Concept
A reducer converts multiple values into one representative value.

Example: NDVI over time for one pixel
- Day 1: 0.7
- Day 2: 0.65
- Day 3: cloud
- Day 4: 0.68

Reducer decides final value.

---

## Mean vs Median

### Mean
- Sensitive to clouds (treated as real values)
- Pulls result downward
- Scientifically weak in high-cloud regions

### Median
- Robust to outliers (clouds)
- Keeps central vegetation signal
- More physically realistic

**Conclusion:**  
Median is usually better for remote sensing composites.

---

## Filtering Before Reduction
Reduction only works properly after filtering:

- Date filter → controls time window
- Spatial filter → restricts area of interest
- Cloud filter → removes heavily clouded images

Without filtering → garbage-in, garbage-out

---

## Key Takeaways
- Temporal reduction destroys story
- Spatial reduction cleans noise
- Median > Mean for cloudy environments
- Filtering is mandatory before any reducer

## Key Concepts

### 1. ImageCollection needs reduction
- Satellite data = multiple images over time
- Cannot be used directly
- Must be converted into one representative image

---

### 2. Reducers (Compression logic)
Reducers combine multiple pixel values into one value.

- **Mean**
  - Average of all values
  - Sensitive to noise and clouds
  - Can distort real surface condition

- **Median**
  - Middle value after sorting
  - Naturally removes cloud and outliers
  - More stable for cloudy agricultural regions

---

### 3. Temporal vs Spatial meaning of reduction

- **Temporal reduction**
  - Same pixel across different dates
  - Risk: destroys time-based crop growth information

- **Spatial reduction**
  - Multiple images of same region
  - Goal: remove noise and create clean surface signal

---

### 4. Filtering before reduction
Data must be filtered before applying reducers:

- Time filter → selects season window
- Spatial filter → restricts region of interest
- Cloud filter → removes heavily contaminated images

---

## Why it matters

Without proper filtering and reduction:
- NDVI becomes unreliable
- Cloud noise distorts vegetation signals
- Agricultural interpretation becomes scientifically invalid

---

## Common mistakes

- Using raw ImageCollection directly
- Applying mean without considering cloud effects
- Ignoring filtering before reduction
- Mixing temporal interpretation with spatial reduction

---

## Takeaway

Reduction transforms multiple noisy satellite observations into a single stable representation of the Earth surface, but only if filtering is done correctly.
