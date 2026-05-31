# NDVI: Principles & Image Processing Pipeline

A conceptual guide to the Normalized Difference Vegetation Index (NDVI), its biological basis, operational limitations, and standard processing steps within a remote sensing environment.

---

## 1. Biological Basis & Concept

NDVI is not a direct measurement of vegetation, but a mathematical proxy based on the physical properties of plant leaves. 

* **Red Light (B4):** Absorbed heavily by chlorophyll in healthy leaves for photosynthesis.
* **Near-Infrared / NIR (B8):** Highly reflected by the internal spongy mesophyll cell structure of healthy leaves.



### The Mathematical Formula

The index scales the difference between NIR and Red reflectance to normalize for changing lighting conditions:

$$NDVI = \frac{\text{NIR} - \text{RED}}{\text{NIR} + \text{RED}}$$

### Value Interpretation
* **Close to +1:** Dense, healthy canopy (high NIR reflection, high Red absorption).
* **Around 0:** Bare soil, rock, or sparse/dead vegetation.
* **Negative Values:** Water bodies, deep cloud cover, or heavy terrain shadows.

---

## 2. Core Image Processing Pipeline

To generate a scientifically valid NDVI map across a Region of Interest (ROI), raw satellite image collections go through a standardized structural workflow.
