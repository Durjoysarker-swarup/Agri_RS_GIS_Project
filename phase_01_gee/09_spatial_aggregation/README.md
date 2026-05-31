# Spatial Aggregation Thinking

## 1. Spatial Aggregation
* **Definition:** Combining multiple pixels inside a Region of Interest (ROI) into one single representative value (Zonal Statistics).
* **Noise Reduction Mechanism:** * Each pixel contains both signal and noise.
  * When averaged, random noise cancels out while the consistent underlying signal remains. This creates basic statistical smoothing.

---

## 2. When Mean Fails
* **Limitations:** The mean fails when a field has highly heterogeneous (uneven) zones or contains extreme values (e.g., water patches, localized damage zones).
* **Alternatives:** * **Median:** Robust against anomalies.
  * **Standard Deviation (Std Dev):** Measures variability (highly critical for research).
* **Core Principle:** Use aggregation to track general **trends**; use original spatial maps for **diagnosis**.

---

## 3. Workflow Concepts
* **Multi-Reducer Execution:** Combining mean, median, and standard deviation into a single spatial reduction calculation over the target geometry and scale.
* **Metadata Parsing:** Extracting the computed metrics along with chronological timestamps to transition spatial data into a chronological format.
* **Filtering and Charting:** Filtering out null values from contaminated data points and plotting temporal trends to contrast the behavior of different reducers.

---

## 4. Metric Interpretation & Data Stability

### Median (Most Stable)
* **Behavior:** Highly resistant to outliers (such as cloud cover and sensor noise) because it ignores extreme values.
* **Application:** Particularly superior in consistently cloudy regions where data contamination is frequent.

### Mean (Sensitive to Noise)
* **Behavior:** Directly reacts to data contamination because every pixel value influences the calculation. Cloud, shadow, or bad pixels cause noticeable drops.
* **Application:** Strong fluctuations usually signal data contamination or intense field heterogeneity.

### Standard Deviation (Variability Indicator)
* **Behavior:** Measures the internal variance of the field. It exposes the hidden details that spatial aggregation typically smooths out.

---

## 5. Problem Detection Matrix

### Case 1: Healthy Uniform Field
* **Indicators:** Mean $\approx$ Median | Std Dev is **LOW**
* **Diagnosis:** Uniform crop growth and consistent management.

### Case 2: Heterogeneous Field
* **Indicators:** Mean $\neq$ Median | Std Dev is **HIGH**
* **Diagnosis:** Uneven crop growth and localized stress zones exist.

### Case 3: Cloud / Noise Contamination
* **Indicators:** Mean drops suddenly | Median stays stable | Std Dev increases
* **Diagnosis:** Data issue / atmospheric contamination, not a real crop problem.

### Case 4: Real Crop Stress
* **Indicators:** Mean drops | Median drops | Std Dev increases
* **Diagnosis:** Actual field deterioration and uneven spreading of crop stress.
