# 02. GEE Scripts

## What This Does

This script processes Sentinel-2 imagery for Aman rice monitoring in Sylhet.

**The pipeline:**
1. Defines study area (ROI) and cropland mask
2. Loads Sentinel-2 with s2cloudless cloud probability
3. Detects clouds and cloud shadows
4. Counts clear cropland pixels
5. Computes NDVI (only on clear cropland)
6. Exports observation table for Python analysis

## How to Use

1. Go to **Google Earth Engine Code Editor**
2. Copy-paste `01_main_pipeline.js` into the script
3. Click **Run**
4. Check the **Console** for outputs
5. Go to **Tasks** tab → click **Run** to export CSV

## Output

Exports: `sylhet_aman_observations_2022_2024.csv`

This CSV contains:
- Date, year, month, DOY
- Spacecraft name
- Clear pixel count and percentage
- Total cropland pixels
- NDVI median and mean

## Files

| File | Description |
|------|-------------|
| `01_main_pipeline.js` | Complete GEE pipeline |

## Dependencies

- Google Earth Engine account
- Sentinel-2 L2A SR Harmonized collection
- ESA WorldCover v200
- s2cloudless cloud probability

## Quick Start

```javascript
// Copy the entire code from 01_main_pipeline.js
// Paste into GEE Code Editor
// Click Run
