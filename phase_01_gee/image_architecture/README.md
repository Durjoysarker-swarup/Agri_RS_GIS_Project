# GEE System + Image Architecture

This day builds the foundation of how Google Earth Engine (GEE) actually works as a geospatial computation system and how satellite data is structured inside it.

---

## 🧠 Core Idea

GEE is a **server-side geospatial computation engine**, not a traditional data tool.

You do not work directly with data — you define **processing instructions**, and computation happens only when triggered.

---

## 📌 Key Concepts

- **GEE system**
  - Runs on Google servers (not local machine)
  - Works with petabyte-scale satellite datasets
  - Uses *lazy computation* (nothing runs immediately)

- **Image vs ImageCollection**
  - Image → single multi-band snapshot
  - ImageCollection → time-series stack of images
  - ImageCollection must be reduced before analysis

- **Bands**
  - Bands are **2D numerical matrices**, not visual colors
  - Each band represents physical measurements (e.g., Red, NIR)
  - Satellite image = stack of multiple matrices

- **Lazy computation**
  - Code defines a pipeline, not execution
  - Runs only on display/export/reduction
  - Errors appear late due to deferred execution

- **ROI + Filtering**
  - ROI defines spatial boundary
  - `.filterBounds()` + `.filterDate()` control dataset scope

- **Image structure**
  - Each image contains:
    - bands (spectral data)
    - metadata (time, cloud, sensor info)
    - projection info

- **Metadata importance**
  - Time, cloud %, and sensor info are essential for valid analysis
  - Without metadata, interpretation is unreliable

- **Visualization**
  - RGB view is only for inspection
  - Uses contrast stretching (min/max scaling)

- **Why ImageCollections exist**
  - Earth is dynamic (temporal system)
  - Clouds require multiple observations
  - Enables statistical signal recovery

---

## 🌍 Why it matters

Satellite data is not an image problem — it is a **spatio-temporal measurement system**.

Understanding this prevents:
- false interpretation of NDVI
- misuse of single images
- incorrect assumptions about crop conditions

---

## ⚠️ Common mistakes

- Treating GEE outputs as ground truth
- Thinking images are like photographs
- Ignoring metadata (cloud, time, sensor angle)
- Using ImageCollection without reduction
- Assuming pixel values are “visual colors”

---

## 🎯 Takeaway

GEE is not an image viewer — it is a **distributed system for processing Earth observation data through mathematical pipelines**.
