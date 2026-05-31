# Satellite Cloud Masking & Composite Generation

A concept guide for identifying, masking, and managing cloud contamination in optical satellite imagery (Sentinel-2) for robust vegetation and agricultural analysis.

---

## 1. The Cloud Problem in Satellite Data

Clouds and atmospheric interference corrupt optical satellite imagery by shifting surface reflectance values, particularly in the **Red** and **Near-Infrared (NIR)** bands used for vegetation analysis.

* **Impact on Metrics:** Cloud pixels can artificially inflate reflectance values leading to false high Normalized Difference Vegetation Index (NDVI) readings, or obscure the surface entirely to mimic false crop stress.
* **Impact on Agricultural Modeling:** Unmasked imagery introduces noise into historical time-series datasets, rendering yield estimations, phenology tracking, and field-level assessments unreliable.

---

## 2. Cloud Masking Mechanisms

To eliminate atmospheric noise, specific bands within the imagery metadata are converted into pixel-level binary masks. 

### Method A: The QA60 Band (Quality Assessment)
The **QA60 band** is a dedicated 60-meter resolution metadata layer mapped to each image asset. 

* **Structure:** It functions as a **bitmask**, compressing multiple attributes into single binary positions (bits) per pixel.
* **Key Indicators:** Bits **10 (Opaque Clouds)** and **11 (Cirrus Clouds)** are checked for presence (`1`) or absence (`0`).
* **Logic:** If either target bit returns `1`, the pixel is flagged as contaminated and systematically dropped during preprocessing.

### Method B: Scene Classification Layer (SCL)
The **SCL** is an internal algorithmic classification model output included in Sentinel-2 Surface Reflectance (SR) products. It separates surface features and atmospheric artifacts into 12 discrete integer values:

| Category | Value | Feature Label | Operational Status |
| :--- | :---: | :--- | :--- |
| **Safe / Target** | 4 | Vegetation | Keep |
| | 5 | Bare Soil | Keep |
| | 6 | Water | Keep |
| **Dangerous / Corrupt**| 3 | Cloud Shadows | Remove (Distorts reflectance) |
| | 7 | Low Probability Cloud | Remove (Blocks optical signal) |
| | 8 | Medium Probability Cloud| Remove (Blocks optical signal) |
| | 9 | High Probability Cloud | Remove (Blocks optical signal) |
| | 10 | Cirrus | Remove (Thin, high-altitude noise) |
| **Optional / Conditional**| 0 | No Data | Process or discard |
| | 1 | Saturated / Defective | Process or discard |
| | 2 | Dark Area Pixels | Process or discard |
| | 11 | Snow / Ice | Region dependent |

#### Masking Strategies
* **Strict Masking:** Rejects pixels liberally across borderline SCL categories (e.g., cloud shadows, low-probability clouds). Results in cleaner data but produces larger geographic data gaps.
* **Lenient Masking:** Retains questionable SCL classes to preserve spatial data density at the cost of higher background atmospheric noise.

---

## 3. Data Recomposition & Spatial Synthesis

Applying a cloud mask creates a spatial trade-off: it purges bad data but leaves behind physical gaps (missing pixels) in individual scenes. Resolving this requires combining temporal spatial tools.

### Temporal Aggregation (The Median Reducer)
To reconstruct a seamless image without cloud interference, a multi-temporal stack of filtered images is compiled. A median reducer statistical operator is then applied across the temporal scale.

$$\text{Final Pixel Value} = \text{Median}(P_1, P_2, \dots, P_n)$$

Where $P$ represents the unmasked, valid surface reflectance value for an identical coordinate across $n$ different dates within a target timeframe. 



### Comparative Visual Outputs

* **Raw + Median Composite:** Compiles all available scenes across a timeline without prior masking. Clouds are not removed; they are mathematically diluted. This creates a visually smooth image that remains scientifically skewed by lingering atmospheric remnants.
* **Masked + Median Composite:** Filters out contaminated pixels from individual scenes prior to any statistical calculation. The reducer evaluates only true ground surface returns. This approach removes cloud bias and represents the baseline standard for quantitative agricultural research.
* **Masked Single Image:** Provides a cloud-free snapshot of a single date, but contains black holes and incomplete coverage where clouds were extracted.

---

## 4. Analytical Diagnostics

Two diagnostic steps evaluate the structural integrity and scientific utility of a post-processed image collection.

### Statistical Delta Check
Comparing the regional mean NDVI between a raw composite and a masked/median composite quantifies exactly how much cloud contamination distorted the original baseline readings. A large shift confirms significant bias in unmasked products.

### Pixel Loss / Fraction Analysis
Evaluating the data retention rate reveals the ratio of remaining valid pixels relative to the total geographic area.
* **Fraction Value $\approx$ 0.6:** Indicates a 40% loss of spatial data across the time horizon.
* **Fraction Value $\le$ 0.3:** Indicates a weak, data-poor environment where the remaining stack may be insufficient for robust time-series calculations.

