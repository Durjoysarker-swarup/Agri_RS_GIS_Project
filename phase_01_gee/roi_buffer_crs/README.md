# 1. README.md (Concept Summary)

## Region of Interest (ROI)
An ROI defines the geographic boundaries of your dataset. Choosing the correct geometry structure determines the integrity of all downstream spatial workflows.

### Types of ROI
* **Point:** Lacks spatial footprint; weak and inefficient for agricultural analysis.
* **Polygon:** Represented by an ordered sequence of `[longitude, latitude]` pairs. Best used for mapping fields, farms, and regional boundaries.

### Node Geometry and Ordering
A polygon is constructed sequentially ($P_1 \rightarrow P_2 \rightarrow P_3 \rightarrow P_4 \rightarrow P_1$). Google Earth Engine (GEE) automatically closes the loop, so repeating the first coordinate is redundant.
* **Correct Topology:** Nodes follow a clear sequential path (clockwise or counter-clockwise).
* **Incorrect Topology:** Altering the natural sequence causes twisted or self-intersecting boundaries, resulting in invalid geometry errors.

---

## Buffer Operations
Buffers dynamically expand or shrink an ROI boundary using metric distance parameters.

### The Mixed Pixel Problem
Satellite pixels along a boundary layer frequently contain multiple land cover types (e.g., half crop, half soil, or road edge). This creates a blended transition zone that provides false spectral signals.

### Spatial Filtering Strategy
* **Expansion (`+` Buffer):** Used for landscape and irrigation footprint analysis where surrounding environmental contexts and micro-climates matter. 
    * *Risk:* Introduces unwanted signal noise (infrastructure, non-target features) which dilutes pure vegetation indexes (NDVI).
* **Shrinking (`-` Buffer):** Used for precision crop research to isolate the core of a field. 
    * *Risk:* Eliminates edge effects and isolates pure pixel profiles, though over-shrinking can cause small sample regions to disappear entirely.

---

## Coordinate Reference System (CRS)
A CRS handles the transformation of the curved 3D Earth surface onto a flattened 2D plane.

### System Categories
1.  **Geographic (e.g., WGS84):** Uses angular coordinates (degrees). Ideal for global location tracking and GPS, but highly distorted for distance/area metrics.
2.  **Projected (e.g., UTM):** Uses Cartesian coordinates (meters). Distortions are minimized locally, making it the standard for accurate spatial measurements.

### Scale Distortions
In a Geographic CRS, degrees do not represent fixed lengths. A $0.01^\circ \times 0.01^\circ$ bounding box varies dramatically based on latitude:
* **At Equator:** $\approx 1.11 \text{ km} \times 1.11 \text{ km}$
* **In Bangladesh:** $\approx 1.02 \text{ km} \times 1.11 \text{ km}$

**Analytical Impact:** Relying on default geometric area tools (`roi.area()`) without a specified metric projection forces GEE to apply estimation formulas, leading to inconsistent, unpublishable spatial data. Using a localized projection like **UTM Zone 46N (EPSG:32646)** ensures a uniform metric grid ($10\text{m} \times 10\text{m}$ pixels remain identical across the zone).

### CRS Sensitivity Matrix
* **High Sensitivity:** Area calculations, distance buffers, and proximity modeling.
* **Low Sensitivity:** Pixel-wise mathematical operations (e.g., calculating NDVI ratios within a single pixel column).

// Output quantitative data
print('Calculated Planar Area (Square Meters):', exactArea);
