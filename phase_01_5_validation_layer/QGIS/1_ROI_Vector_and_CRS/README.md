# 📚 Day 1 — ROI, Vector and CRS in QGIS

## ROI, Vector and CRS

---

# PHASE A — Export ROI From GEE

## STEP 1 — Create ROI in GEE

Your ROI is NOT just a shape.

It is:

> A geometric representation of spatial boundaries

### Polygon contains:

- Vertices
- Coordinates
- Topology

### Definition

A polygon is a sequence of coordinate points connected together.

---

## STEP 2 — Convert Geometry Into Feature

A feature attaches attributes to geometry.

### Result

| Component | Meaning |
|----------|--------|
| geometry | Spatial shape |
| properties | Metadata |

### Final Concept

Feature = geometry + attributes

---

## STEP 3 — Create FeatureCollection

FeatureCollection wraps multiple features.

### Concept

- A single feature = one object
- A collection = multiple spatial objects

### Why it matters

GIS systems operate on:

- Many fields
- Many roads
- Many districts

Not single objects.

---

## STEP 4 — Export ROI

Export formats:

- Shapefile
- GeoJSON

Prefer both.

---

## SHAPEFILE vs GEOJSON

### SHAPEFILE (Old GIS Standard)

Not a single file.

| File | Meaning |
|------|--------|
| .shp | Geometry |
| .dbf | Attribute table |
| .shx | Shape index |
| .prj | Projection info |

---

### GEOJSON (Modern Format)

Stores everything in one file:

- Geometry
- Attributes
- CRS information

### Key Insight

- Shapefile = legacy GIS ecosystem
- GeoJSON = modern web-friendly GIS ecosystem

---

# PHASE B — Load Into QGIS

## STEP 1 — Open QGIS Project

Start a new project.

---

## STEP 2 — Add Basemap

Add ESRI World Imagery via XYZ Tiles.

### Why basemap matters

Without basemap:

> You cannot visually verify spatial alignment

This is a critical research habit.

---

## STEP 3 — Load ROI Layer

Add vector layer:

- Shapefile
- GeoJSON

---

# PHASE C — Understand Vector Layers

## STEP 1 — Open Attribute Table

Inspect data:

- Feature attributes
- Field properties

---

## STEP 2 — Inspect Geometry

Use Identify Features tool.

Click polygon and observe:

- Feature ID
- Coordinates
- Attributes

---

# PHASE D — Learn CRS Deeply

## STEP 1 — Check Layer CRS

Check in properties:

Example:

- EPSG:4326

---

## WHAT IS CRS?

CRS = Coordinate Reference System

It defines:

> How spatial coordinates map onto Earth

---

## STEP 2 — Geographic Coordinates

Example:

- 24.89° N
- 91.86° E

This system:

- EPSG:4326 (WGS84)

### Important Fact

Latitude and longitude:

- Are NOT equal-distance units
- Change meaning depending on location

---

## STEP 3 — Projected CRS (UTM)

Example:

- EPSG:32646 (Bangladesh region)

---

## WHY PROJECTED CRS EXISTS

Projected CRS converts Earth into:

- Meters
- Flat coordinate system

---

### Used for:

- Distance calculation
- Area calculation
- Spatial analysis

---

## CRITICAL WARNING

Never calculate area using geographic CRS.

This is a very common beginner mistake.

---

# PHASE E — Spatial Alignment Investigation

## STEP 1 — Compare ROI With Satellite Image

Zoom in and inspect boundaries carefully.

---

## QUESTIONS TO ASK

- Does boundary follow roads?
- Does it follow field edges?
- Does it cross rivers incorrectly?
- Is it shifted?
- Are edges jagged?

---

## KEY REALIZATION

GIS data is NEVER perfect.

It always contains:

- Spatial error
- Temporal mismatch
- Projection uncertainty
- Digitization error

---

# PHASE F — Style the ROI

You can improve visualization by adjusting:

- Outline color
- Fill transparency
- Boundary thickness

---

# PHASE G — Raster vs Vector

## Raster

- Pixels
- Continuous data
- Satellite images (e.g., Sentinel)

---

## Vector

- Coordinates
- Discrete geometry
- Field boundaries, roads, polygons

---

## Core Difference

| Raster | Vector |
|--------|--------|
| Pixels | Coordinates |
| Continuous | Discrete |
| Image data | Geometry data |

