# 📚 Day 4 — NDVI Classification Mapping in QGIS

---

# PART 1 — LOAD YOUR NDVI

Open your NDVI raster in QGIS.

---

# PART 2 — INSPECT THE DATA RANGE

Right-click raster → Properties → Information

Check:

- Minimum value
- Maximum value

### Example

- Min = -0.12
- Max = 0.78

---

# PART 3 — UNDERSTAND CLASSIFICATION

Classification means:

> Converting continuous values into meaningful categories

---

### Continuous NDVI

- -0.12 → 0.78

### Classified NDVI

- Low vegetation
- Moderate vegetation
- High vegetation

---

# PART 4 — CHOOSE CLASSIFICATION STRATEGY

There are multiple methods.

---

## METHOD 1 — MANUAL THRESHOLDS

Best for scientific interpretation.

### Example

| Class | Range |
|------|------|
| Low | 0–0.2 |
| Moderate | 0.2–0.5 |
| High | >0.5 |

### Best For

- Environmental interpretation
- Vegetation analysis
- Agriculture studies

---

## METHOD 2 — EQUAL INTERVAL

- Splits values evenly
- Can be misleading for skewed NDVI data

---

## METHOD 3 — QUANTILE

- Equal number of pixels per class
- Can distort ecological meaning

---

## METHOD 4 — NATURAL BREAKS (JENKS)

- Data-driven grouping
- Statistically optimized

### Warning

Often misused because it:

- Optimizes statistics
- Does NOT guarantee ecological meaning

---

# PART 5 — APPLY NDVI COLOR CLASSIFICATION

Right-click raster → Properties → Symbology

---

## Change Style

From:

- Singleband gray

To:

- Singleband pseudocolor

---

## Color Ramp

Use:

- Red → Yellow → Green

---

### Scientific Meaning

- Red = stressed / bare land
- Yellow = moderate vegetation
- Green = healthy vegetation

---

# PART 6 — CREATE CUSTOM CLASSES

Set:

- Mode: Equal Interval (initially)
- Classes: 3

Click:

- Classify

---

## EDIT MANUALLY

Rename classes:

| Range | Label |
|------|------|
| 0.2 | Low Vegetation |
| 0.5 | Moderate Vegetation |
| 1 | High Vegetation |

---

### Optional Class

- < 0 → Water / Cloud

---

# PART 7 — CREATE MAP LAYOUT

---

## OPEN PRINT LAYOUT

Top Menu:

Project → New Print Layout

Name:

- NDVI_Classification_Map

Click OK

---

## ADD MAP

Toolbar → Add Map

- Draw rectangle on page
- Map canvas appears

---

### If Map Does Not Appear Correctly

- Go back to QGIS main window
- Zoom to study area
- Set correct extent
- Return to layout

---

## ADD TITLE

Toolbar → Add Label

Set text:

NDVI Vegetation Classification Map

---

## ADD LEGEND

Toolbar → Add Legend

Place legend on right side

---

### IMPORTANT

QGIS auto-generates legend from layer symbology.

---

## CLEAN THE LEGEND

Turn OFF:

- Auto Update

Then manually edit.

---

### Rule

Legend should show:

> Meaning, not file names

Remove:

- Band names
- File names
- Technical clutter

---

## ADD SCALE BAR

Toolbar → Add Scale Bar

Place below map.

---

### IMPORTANT CRS NOTE

Your CRS:

- EPSG:4326 (degrees)

### Problem

- Scale bars work best in projected CRS
- QGIS gives approximate scaling in degrees

---

## ADD NORTH ARROW

Toolbar → Add Picture

Insert north arrow.

---

### CARTOGRAPHY RULE

- North arrow should be small
- Should support map, not dominate it

---

## ADD SOURCE TEXT

Use Add Label at bottom.

### Example

Source:

- Sentinel-2 imagery
- Processed in Google Earth Engine and QGIS

Date:

- 2023

Projection:

- WGS 84 (EPSG:4326)

---

## EXPORT MAP

---

### EXPORT AS PNG

Layout → Export as Image

---

### EXPORT AS PDF

Layout → Export as PDF

---

## WHY PDF IS BETTER

- Vector quality
- Sharp text
- Publication-ready output
- Print-friendly
