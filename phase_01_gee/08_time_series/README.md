# Zonal Statistics & Time Series in Remote Sensing

## 1. Concept: Time Series in GEE
* **Simple Definition:** A sequence of NDVI values over different dates that forms a curve.
* **Deep Definition:** A temporal signal of a biological system.
* **The Mixed Signal:** Each data point is a combination of crop condition, soil moisture, weather, and noise. It is rarely a pure vegetation signal.

---

## 2. Zonal Statistics
* **Definition:** Reducing multiple pixel values within a region of interest (ROI) into a single representative value.
* **Why it Matters:** * Agriculture operates at the **field level**, not the individual pixel level.
  * Individual pixels are highly **noisy** due to mixed soil, plant shadows, and water.
  * It smooths out satellite sensor noise and atmospheric errors.
* **The Trade-off:** Spatial detail is lost. Averaging can mask localized problems (e.g., half a field dying while the other half is healthy can produce a false "normal" mean).

---

## 3. Types of Zonal Statistics (Reducers)

### MEAN (Average Condition)
* **Concept:** Sum of all pixel values divided by the total number of pixels.
* **Agricultural Meaning:** Overall greenness and general crop health.
* **Pros/Cons:** Stable and excellent for long-term trends, but hides localized stress zones.

### MEDIAN (Typical Pixel)
* **Concept:** The middle value when all pixels are sorted.
* **Agricultural Meaning:** Typical vegetation state.
* **Pros/Cons:** Effectively ignores anomalies like clouds or extreme NDVI spikes, but can overlook genuine early-stage hotspots of stress.

### MIN (Worst Condition Detector)
* **Concept:** The lowest NDVI pixel value in the field.
* **Agricultural Meaning:** Early warning signal for localized disease or drought.
* **Pros/Cons:** Highly sensitive to early anomalies, but easily corrupted by single-pixel noise or bad data.

### MAX (Best Condition Detector)
* **Concept:** The highest NDVI pixel value in the field.
* **Agricultural Meaning:** Potential peak productivity.
* **Pros/Cons:** Shows the maximum growth potential, but can be highly misleading if only one small patch is healthy.

### STANDARD DEVIATION (Uniformity Indicator)
* **Concept:** Measures the spread or variation of pixel values across the field.
* **Low Standard Deviation:** Indicates uniform crop growth, consistent soil, and stable irrigation.
* **High Standard Deviation:** Indicates uneven field conditions, localized pest/disease zones, or water stress variations.
* **Research Importance:** Agriculture relies heavily on uniformity. While the Mean hides internal field variance, the Standard Deviation exposes whether a field is uniform or breaking into patches.

---

## 4. Time Series Pipeline Concepts
* **Data Preparation:** Define the Region of Interest (ROI), filter cloud cover, and select targeted spectral bands.
* **Mapping Transformations:** Apply index calculations across the image collection sequentially using parallel processing to attach calculations to each original image.
* **Reduction (Spatial to Temporal):** Extract specific statistical reducers across the ROI geometry.
* **The Importance of Scale:** Scale controls pixel sampling resolution. Smaller scale numbers yield high-detail accuracy, while larger scale numbers aggregate fewer pixels for faster processing.
* **Data Structuring:** Converting calculated spatial statistics into chronological feature attributes containing dates and corresponding metric values.

---

## 5. Interpreting the NDVI Curve
An agricultural time series curve generally follows a distinct biological life cycle:

1. **Low NDVI:** Bare soil or early seedling growth stage.
2. **Rising NDVI:** Active vegetative growth and canopy development.
3. **Peak NDVI:** Maximum biomass, flowering, or peak canopy density.
4. **Decline:** Senescence, drying out, or crop harvest.
