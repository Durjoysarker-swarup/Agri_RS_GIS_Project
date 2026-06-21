# NDVI Scale Sensitivity in Smallholder Rice Fields

## Short description
This subproject quantifies how NDVI (Normalized Difference Vegetation Index) reliability is affected by spatial resolution and field geometry in smallholder rice farming systems. The analysis focuses on scale mismatch, edge effects, and pixel mixing that bias field-level NDVI for small and irregularly shaped paddies.

## Table of contents
- Background & motivation
- Research question & objectives
- Data
- Methods
- Outputs
- Folder structure
- Reproducibility
- Status
- Authors & contact
- License / citation

---

## Background & motivation
Remote-sensing vegetation indices such as NDVI assume that pixels represent homogeneous land cover. In smallholder agricultural landscapes where fields are small and irregular, one satellite pixel often contains mixed-surface signals. This causes systematic bias in field-level NDVI and reduces the reliability of vegetation monitoring.

Understanding how NDVI behaves across spatial scales and field geometries is essential for:
- Selecting suitable imagery for field-scale monitoring
- Designing unbiased sampling and monitoring protocols
- Interpreting time-series and change-detection results

---

## Research question & objectives
Primary question
- How does NDVI reliability change with field size, field shape, and spatial resolution?

Objectives
- Quantify NDVI bias introduced by edge effects and pixel mixing
- Compare NDVI derived at multiple simulated spatial resolutions (e.g., 10 m, 20 m, 30 m)
- Relate field geometry metrics (area, perimeter, shape index) to NDVI stability
- Identify minimum reliable field size per resolution and provide practical recommendations

---

## Data
- Sentinel-2 surface reflectance (or equivalent) used to derive NDVI at native resolution
- Digitized field polygons (smallholder rice paddies) used as reference field units
- Synthetic/resampled rasters to simulate coarser resolutions for sensitivity analysis

Note: Data files and intermediate products are stored in the `data/` and `output/` folders.

---

## Methods (high-level)
1. Preprocess imagery (cloud masking, atmospheric correction as required)
2. Compute NDVI from the appropriate spectral bands
3. Use vectorized field polygons to extract per-field NDVI statistics
4. Separate edge and core pixels to quantify edge contamination
5. Resample / aggregate NDVI to coarser resolutions to simulate scale effects
6. Compute geometry metrics (area, perimeter, shape index) and correlate with NDVI bias
7. Produce plots and tables showing NDVI stability and recommended thresholds

Technical stack: Google Earth Engine (for imagery and scalable processing), Python (geopandas, rasterio, numpy, matplotlib / seaborn), and additional GIS tools as needed.

---

## Outputs
Primary deliverables in this folder and subfolders include:
- `data/` — raw and processed input datasets
- `output/` — intermediate rasters, aggregated NDVI layers, and CSV/GeoPackage outputs
- `report/` — figures, tables, and write-ups summarizing results
- `docs/` — supplementary documentation, methods, and usage notes
- `workflow/` — scripts and notebooks to reproduce analysis

Key outputs:
- Field geometry dataset with computed metrics
- Edge ratio and core/core NDVI comparisons
- NDVI at multiple spatial scales
- Scale-sensitivity plots and reliability thresholds

---

## Folder structure (this subproject)
- README.md (this file)
- data/
- docs/
- output/
- report/
- workflow/

If you want, I can add README files to each subfolder explaining the contents and how to use them.

---

## Reproducibility / How to run
1. (Optional) Set up Google Earth Engine access and authenticate following GEE docs
2. Create a Python environment and install dependencies (example):

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r workflow/requirements.txt
```

3. Run `workflow/run_analysis.py` (or the notebook `workflow/analysis.ipynb`) to reproduce the main figures. Adjust paths in `workflow/config.yml` if necessary.

4. Output artifacts will be written to `output/` and figures to `report/`.

---

## Status
Planned / in progress — update this section as analysis progresses (e.g., Data prepared, Scripts ready, Results generated).

---

## Authors & contact
Durjoy Sarker (Durjoysarker-swarup)
Email: (add your preferred contact)

---

## License & citation
Please add a license file at repository root (e.g., MIT, CC-BY) and cite the project as:
Durjoy Sarker (2026). NDVI Scale Sensitivity in Smallholder Rice Fields. Agri_RS_GIS_Project.

---

If you'd like, I can also:
- Create/standardize READMEs for each subfolder (data, docs, output, report, workflow)
- Add a `workflow/requirements.txt` and minimal `workflow/config.yml` template
- Add badges (status, license) to the README
