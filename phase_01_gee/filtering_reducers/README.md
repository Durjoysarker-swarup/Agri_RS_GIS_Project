# Filtering + Reducers

This day focuses on how satellite image collections are cleaned and compressed into meaningful single images for analysis.

---

## Core Idea

Satellite data comes as multiple observations of the same area. To make it usable, we must **filter unwanted data and reduce multiple images into one stable representation**.

---

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

## 🎯 Takeaway

Reduction transforms multiple noisy satellite observations into a single stable representation of the Earth surface, but only if filtering is done correctly.
