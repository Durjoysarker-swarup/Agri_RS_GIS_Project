# 📚 Day 0 – NDVI Calculation

### STEP 1 — Open GEE
* Open the **Google Earth Engine Code Editor**.

### STEP 2 — Define ROI & Load Sentinel-2 Image
* Define your Region of Interest (ROI) and load the appropriate Sentinel-2 imagery.

### STEP 3 — Export Bands to QGIS
Export the GeoTIFF containing 4 bands: **Red, Green, Blue, and NIR**.

> ⚠️ **Exporting Requirements:**
> * Actual raster measurements (not screenshots)
> * Scientific raster data (not visual RGB)
> * A raster where pixel values represent physical measurements or derived quantitative variables—not just visual colors.

---

### STEP 4 — Open in QGIS
1. In QGIS, navigate to: **Layer** → **Add Layer** → **Add Raster Layer**.
2. Open your exported GeoTIFF.

**What You Will Notice:**
* A grayscale appearance.
* Potential high/low contrast irregularities.

---

### STEP 5 — Create RGB in QGIS
1. Right-click the raster layer → **Properties** → **Symbology**.
2. Set the channel bands as follows:

| Channel | Band |
| :--- | :--- |
| **Red** | B4 |
| **Green** | B3 |
| **Blue** | B2 |

3. Click **Apply**.
4. Compare the **GEE RGB** representation with the **QGIS RGB** representation.

---

### STEP 6 — Observe Pixel Structure
* Zoom in deeply to the pixels.
* **What am I actually seeing?**
  * Square reflectance measurements.
  * Spatial sampling units.
  * *Note: This is NOT a camera photo. This mental transition is crucial.*

---

### STEP 7 — Raw Reflectance Inspection
1. Right-click the raster layer → **Properties** → **Information**.
2. Check the **Data Type** and **Ranges**:
   * `UInt16` $\rightarrow$ Needs reflectance scaling (typically ranges from `0–10000`).
   * `Float64/32` $\rightarrow$ Already processed.

#### The Scaling Formula
Sentinel-2 reflectance scaling:
$$Reflectance = \frac{DN}{10000}$$

#### Creating a Scaled Reflectance Raster
1. Go to **Raster** → **Raster Calculator**.
2. Enter the following expression:
   `"B4@1" / 10000`
3. Save the output as a **Float32 GeoTIFF**.

> 💡 *Note: When just creating NDVI, scaling mathematically cancels out and doesn't change the final values. However, it matters significantly for absolute data interpretation.*

---

### STEP 8 — Create NDVI
The Normalized Difference Vegetation Index formula is:
$$NDVI = \frac{NIR - Red}{NIR + Red}$$

#### Local Processing in QGIS Raster Calculator:
* **Standard Expression:**
  `("B8@1" - "B4@1") / ("B8@1" + "B4@1")`

* **Scaled Expression (If Scaling is Required):**
  `(("B8@1" / 10000) - ("B4@1" / 10000)) / (("B8@1" / 10000) + ("B4@1" / 10000))`

---

### STEP 9 — Style NDVI
1. Open layer **Properties** → **Symbology**.
2. Set render type to **Singleband pseudocolor**.
3. Select a color ramp (e.g., **Red $\rightarrow$ Yellow $\rightarrow$ Blue $\rightarrow$ Green**).
4. Observe and differentiate:
   * Vegetation areas
   * Water bodies
   * Urban surfaces

---

### 🔬 Important Scientific Thinking
> Remote sensing science is fundamentally about **transforming spectral measurements into interpretable biophysical indicators**.
