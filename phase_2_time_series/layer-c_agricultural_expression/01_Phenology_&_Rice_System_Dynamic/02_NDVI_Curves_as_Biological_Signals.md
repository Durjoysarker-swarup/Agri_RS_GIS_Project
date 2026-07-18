# 3.2 — NDVI Curves as Biological Signals

## Part 1 — The Big Picture

An NDVI curve is simply the changing amount of green vegetation over time.

The x-axis represents time. The y-axis represents NDVI.

As the crop grows, NDVI changes because:
- Leaf area changes
- Chlorophyll changes
- Canopy structure changes

Every part of curve has biological meaning.

---

## Part 2 — Stage-by-Stage Interpretation

### 1. Land Preparation

Field condition:
- Previous crop removed
- Soil exposed
- Plowing
- Puddling

What does the satellite see? Mostly bare soil, water, little vegetation.

NDVI is very low. Typical (0.10–0.25)

### 2. Flooding

Many rice fields are intentionally flooded.

Satellite sees water, exposed soil, scattered seedlings.

NDVI may become even lower.

The important thing is flooding alone does not mean crop failure. It may simply be normal field management.

### 3. Transplanting

Seedlings are planted. Still small leaves, much soil visible.

NDVI: Low and starts increasing slowly. The Leaf Area Index is still very small.

### 4. Establishment

Roots develop. Plants recover from transplant shock. Leaf production begins.

NDVI → slow upward trend. Growth is visible but not explosive.

### 5. Tillering

This is where rice becomes much greener. Plants produce many new shoots. Leaf area expands rapidly. Canopy begins closing.

NDVI → Rapid increase.

**Biology:**
- LAI increases quickly
- Chlorophyll increases
- Biomass accumulates rapidly

This is often the steepest part of the curve.

### 6. Stem Elongation

The plant grows taller. Canopy becomes denser. Leaves overlap.

NDVI continues increasing. Slope begins slowing.

**Why slower?** Leaf production is no longer as rapid. Energy shifts toward reproductive development.

### 7. Panicle Initiation

The plant prepares to produce grain. Many internal changes occur. Canopy is nearly complete.

NDVI → Near maximum.

**Important:** The plant is still developing, but NDVI changes only slightly. This does not mean growth has stopped.

### 8. Heading / Flowering

Panicles emerge. Maximum canopy. Highest chlorophyll. Highest LAI. Highest biomass.

NDVI reaches its peak.

### 9. Grain Filling

Energy moves toward grain production. Leaves remain green for some time. NDVI stays high.

Often forms a plateau.

### 10. Senescence

Leaves begin aging. Chlorophyll breaks down. Yellow leaves appear.

LAI slowly decreases — not during the senescence itself, but later when leaves get dry.

NDVI declines gradually.

### 11. Harvest

Plants removed. Canopy disappears.

Satellite sees soil, straw, residue.

NDVI drops sharply.

---

## Part 3 — Understanding Curve Characteristics

### 1. Slope

How fast is NDVI changing?
- Steep positive slope → Rapid growth.
- Gentle slope → Slow growth.
- Negative slope → Declining vegetation.

### 2. Curvature

- Slope (1st derivative) = How fast NDVI is changing.
- Curvature (2nd derivative) = Whether that change is speeding up or slowing down.

**Example**
```
Accelerating → )
Slowing       → (
```

This helps identify biological transitions.

### 3. Peak

Highest NDVI. Usually:
- Maximum LAI
- Maximum canopy
- Maximum greenness

Not necessarily:
- Maximum biomass
- Maximum yield

### 4. Plateau

Flat top. NDVI changes very little.

Usually means stable mature canopy.

### 5. Decline

Decline represents loss of green vegetation.

Possible causes:
- Senescence
- Harvest
- Drought
- Flood
- Disease

One pattern, many possible explanations.

### 6. Duration

Duration asks: how long did the season last?
- Long duration → Long growing season.
- Short duration → Early harvest or crop stress.

---

## Part 4 — Biological Meaning of Each Shape

| Curve Feature | Biological Meaning |
|---|---|
| Rising curve | Expanding canopy |
| Steep rise | Rapid vegetative growth |
| Gentle rise | Slow establishment |
| Peak | Maximum canopy development |
| Plateau | Stable mature canopy |
| Slow decline | Natural senescence |
| Sharp decline | Harvest or sudden disturbance |
| Long duration | Longer crop cycle |
| Short duration | Early maturity or stress |

---

## Part 5 — Important Misconceptions

**Misconception 1:** High NDVI = Healthy crop

Not always. Dense weeds can also produce high NDVI.

**Misconception 2:** Highest NDVI = Highest yield

False. Grain yield depends on many factors besides canopy greenness.

**Misconception 3:** Sudden NDVI drop = Disease

Not necessarily. Could be:
- Harvest
- Flood
- Cloud contamination
- Sensor error
- Management

**Misconception 4:** Every rice field has the same curve

False. Different varieties, planting dates, irrigation, rainfall, soil, and management produce different curves.
