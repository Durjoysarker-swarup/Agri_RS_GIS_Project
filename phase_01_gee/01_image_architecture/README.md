# GEE SYSTEM + IMAGE ARCHITECTURE

---

## 1. WHAT GEE ACTUALLY IS

GEE = distributed geospatial computation engine  
It runs on Google’s servers, not your laptop  

You are writing instructions, not executing immediately.  
Code does not run instantly — it only defines a processing pipeline.

This is called **lazy computation**.  
Execution happens only when triggered (e.g., map display, export, reduce).

### Why this design exists:
- Data size: petabytes (Sentinel, Landsat, ERA5)
- Cannot be downloaded locally
- Must be processed remotely

### Core idea:
You are not working with data directly  
You are working with a **data pipeline**

### Risk if misunderstood:
- Blind trust in outputs
- Wrong scientific interpretation

---

## 2. CORE OBJECTS

Only 2 core objects matter:

### A. Image
A single snapshot in time  
Multi-band raster

Think:
Image = matrix stack

Example:
- Date: 2023-07-10
- Bands: B2, B3, B4, B8...

Satellite image formation:
- Captured line by line during orbit
- Each line records reflected energy (not color)
- Multiple bands stacked into one object

So:
Image = multi-band raster built from sequential scanning

---

### B. ImageCollection
A time-series stack of images

Think:
ImageCollection = list of Images over time

Example:
All Sentinel-2 images from 2022–2024

### Critical truth:
ImageCollection cannot be directly analyzed because:
- Not a single matrix
- It is a set of matrices

So:
You MUST reduce it before analysis

---

## 3. BANDS = NUMERICAL MATRICES (NOT COLORS)

Each band is:
A 2D grid of numbers (matrix)

Structure:
- Rows = North–South direction
- Columns = East–West direction

So each band looks like:

[ 12  15  18  20 ]  
[ 14  16  19  21 ]  
[ 13  17  20  22 ]

This is:
- 2D numerical matrix

### Key shift in understanding:
Image = multi-dimensional numerical object  
NOT a visual image

---

## 4. LAZY COMPUTATION (MOST IMPORTANT CONCEPT)

Nothing executes immediately in GEE.

What you think:
- Code runs step by step

Reality:
- Nothing runs until triggered

### You are building:
A recipe (computation graph)

Execution happens only when:
- Map display
- Export
- Reduce

### Example meaning:
Filtering an ImageCollection is NOT data execution  
It is only a query definition

### Why this matters:
- Execution timing is controlled by system
- Errors appear late
- Performance depends on query structure

---

## 5. PRACTICAL — LOAD SENTINEL-2 SR DATA

---

### STEP 1 — ROI (Region of Interest)

ROI definition:
- Spatial filter
- Computational boundary

### What ROI controls:
- What data is loaded
- How much computation happens
- Which pixels are analyzed

Without ROI:
- Entire Earth may be processed unintentionally

---

### Geometry understanding:
Format:
Longitude, Latitude

Example:
- Longitude = East–West position
- Latitude = North–South position

---

### Why use POINT first:
- Simple structure
- Fast testing
- Avoid geometry complexity

---

### Map.centerObject
Purpose:
- Only visualization control
- Does NOT affect computation

Zoom levels:
- 5 → country
- 10 → district level
- 15 → field level

---

## STEP 2 — IMAGE COLLECTION FILTERING

### What ImageCollection is:
Time-indexed dataset of multi-band rasters

Each image contains:
- Bands (B2, B3, B4, B8...)
- Metadata
- Timestamp
- Geometry info

---

### Dataset ID meaning:
COPERNICUS/S2_SR = Sentinel-2 Surface Reflectance

Breakdown:
- COPERNICUS → EU Earth observation program
- S2 → Sentinel-2 satellite
- SR → Surface Reflectance (corrected data)

---

### Internal structure of each image:
- Bands
- Metadata
- Time information
- Sensor and projection info

---

### filterBounds (Spatial filtering)
Keeps images that intersect ROI

Important:
- Sentinel images are large tiles (~100km x 100km)
- Even small ROI gets full tile coverage

Without this:
- Whole Earth data may be loaded

---

### filterDate (Temporal filtering)
Selects images within a time range  
Essential for seasonal analysis

---

## STEP 3 — INSPECT IMAGE COLLECTION

### Purpose:
Validate dataset before analysis

You are checking:
- Did filtering work?
- Is dataset meaningful?
- Is season correct?

---

### When printing dataset:
You observe:
- Number of images
- Collection type
- Feature list

---

### Meaning of “features list”:
Each feature = one satellite image containing:
- bands
- timestamp
- metadata
- geometry

---

### dataset.first()
Important clarification:
It is NOT:
- best image
- clearest image
- latest image

It is simply:
First image in internal ordering

---

### Dataset quality checks:

#### 1. Number of images
- < 5 → weak dataset
- 10–50 → good for monthly analysis
- 100+ → good for seasonal analysis

#### 2. Cloud condition
- Cloud > 60% → poor dataset

#### 3. Time distribution
Check if images:
- evenly distributed
- or clustered

#### 4. Spatial correctness
Check ROI alignment

---

## STEP 4 — SEASON COVERAGE ANALYSIS

### A. Time extraction
Process:
- Extract timestamps
- Convert to readable dates

Meaning:
You are checking temporal coverage

---

### B. Monthly image count
Purpose:
Identify sampling distribution

Interpretation:
- Missing months = incomplete seasonal coverage
- Uneven distribution = weak time-series reliability

---

### C. Cloud analysis
Cloud percentage indicates usability

Interpretation:
- < 20% → usable
- > 60% → unreliable
- mixed → requires filtering

---

### D. Visual time distribution check
Evaluate:
- planting season
- growth phase
- harvest period

---

## STEP 5 — BANDS

### 1. Band definition
A band = measurement of reflected electromagnetic energy

Not a visual channel

---

### 2. Spectral slicing concept
Sunlight is split into:
- Blue
- Green
- Red
- NIR
- SWIR

Each band captures a portion of spectrum

---

### 3. Meaning of band values
Pixel value = reflected energy amount

---

### 4. Key agricultural bands

#### B4 (Red band)
Used in photosynthesis

#### B8 (NIR band)
Strong reflection in healthy vegetation

### Vegetation logic:
- Healthy plants: low Red, high NIR
- Water: very low NIR

---

### 5. Band resolution difference

Different bands have different spatial resolution because:

- Visible + NIR → stronger signal → 10m resolution
- SWIR → weaker signal → 20m resolution

Trade-off:
- spectral detail vs spatial resolution

---

### 6. Band inspection
Used for:
- vegetation detection
- water detection
- soil analysis

---

## STEP 6 — METADATA

### What metadata represents:
Context of measurement

Not image data itself

---

### Why metadata exists:
Satellite data depends on:
- time
- atmosphere
- sensor conditions

---

### Key metadata fields:

#### system:time_start
- Exact capture time
- Needed for time-series analysis

#### CLOUDY_PIXEL_PERCENTAGE
- Cloud contamination level
- Affects NDVI reliability

#### SPACECRAFT_NAME
- Sentinel-2A or Sentinel-2B
- Indicates data source

---

### Importance in agriculture:
Agriculture depends on:
- time
- environment conditions

Without metadata:
- NDVI cannot be trusted
- temporal comparison becomes invalid

---

## STEP 7 — VISUALIZATION

### RGB composite meaning:
- B4 = Red reflectance
- B3 = Green reflectance
- B2 = Blue reflectance

---

### min/max concept:
This is contrast stretching

Purpose:
- Convert raw values into visible range

Reality:
- Pixel values exceed display range
- Values are compressed for visualization

---

### Why visualization matters:
Used for:
- quick inspection
- cloud detection
- validation before NDVI

---

## WHY DATA IS STORED AS COLLECTIONS

### 1. Earth is dynamic
- crops change
- seasons change
- environment changes

Single image = insufficient

---

### 2. Cloud problem
- single image often unusable
- multiple images recover signal

---

### 3. Temporal modeling
Agriculture depends on time:
NDVI(t)

---

### 4. Statistical robustness
Multiple images:
- reduce noise
- improve reliability
- stabilize signal
