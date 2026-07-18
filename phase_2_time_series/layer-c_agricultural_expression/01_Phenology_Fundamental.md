# 3.1 — Phenology Fundamentals

## Part 1 — Phenology

**Phenology** is the study of when biological events occur and why their timing changes.

**Examples:**
- Seed germination
- Leaf emergence
- Flowering
- Fruit development
- Senescence
- Harvest

Phenology is essentially the calendar of a living organism.

### Why Phenology Matters in Remote Sensing

A satellite does not know:
- Whether rice is flowering
- Whether rice is tillering
- Whether rice is mature

It only records reflected light. Researchers infer the growth stage by observing changes in reflectance over time.

---

## Part 2 — Crop Calendar

A crop calendar answers:
- When is planting?
- When is growth?
- When is flowering?
- When is harvest?

**For Bangladesh:**

| Season | Planting | Harvest |
|---|---|---|
| Aus | Spring | Summer |
| Aman | Monsoon | Late Autumn |
| Boro | Winter | Spring |

These dates vary by location and year.

The same NDVI value can represent different biological stages if you ignore the calendar. For example, NDVI = 0.65 could mean:
- Growing Aman
- Mature Aus
- Early Boro

...depending on the date. So time provides biological context.

---

## Part 3 — Rice Growth Stages

Rice is usually divided into three major phases.

### 1. Vegetative Stage

The plant focuses on building leaves and stems.

Processes include:
- Germination
- Seedling establishment
- Tillering

Characteristics:
- Rapid leaf production
- Increasing chlorophyll
- Increasing biomass

NDVI usually rises rapidly.

### 2. Reproductive Stage

The plant shifts from growing leaves to producing grain.

Includes:
- Panicle initiation
- Booting
- Heading
- Flowering

Canopy is near maximum. NDVI reaches its highest values.

### 3. Ripening Stage

Energy moves into grain development. Leaves begin aging.

Processes:
- Chlorophyll breakdown
- Drying
- Senescence

NDVI decreases. Eventually harvest removes most green vegetation.

---

## Part 4 — Phenological Transitions

Growth is continuous. But we often divide it into stages.

**Transition examples:**
```
Seedling → Tillering → Stem elongation → Heading → Ripening → Harvest
```

These transitions create changes in the NDVI curve.

---

## Part 5 — Why NDVI Changes

```
Crop growth → More leaves → Higher Leaf Area Index → More chlorophyll →
More near-infrared reflection → Less red reflection → Higher NDVI
```

NDVI does not directly measure growth. It measures changes in light reflectance that result from growth.

---

## Part 6 — Four Biological Drivers of NDVI

### Leaf Area Index (LAI)

Leaf area per unit ground area. The formula is:

```
LAI = Total one-sided leaf area / Ground area
```

Notice the denominator is ground area, while the numerator is the sum of all leaf surfaces.

It is not asking: "How much of the ground is covered?"

It is asking: "If I collected every leaf and measured its area, how much leaf area exists above one square meter of land?"

**Example:** One square meter of ground may contain several square meters of leaf surface because leaves overlap.

Higher LAI usually means:
- More photosynthesis
- More light interception
- Higher NDVI (until saturation)

### Biomass

Biomass is the total plant material. Includes:
- Stems
- Leaves
- Panicles
- Roots (not directly visible)

More biomass often increases NDVI, but only to a point. Very dense vegetation causes NDVI saturation.

### Chlorophyll

Chlorophyll absorbs red light. Healthy plants contain more chlorophyll.

```
More chlorophyll → Lower red reflectance → Higher NDVI
```

When chlorophyll declines during senescence, NDVI decreases.

### Canopy Closure

Early in growth:
```
Ground + Leaf
```
Much soil is visible.

Later:
```
Leaves + Leaves + Leaves
```
Most soil is hidden.

Canopy closure reduces soil influence on the satellite signal.

---

## Part 7 — Biological Meaning of the NDVI Curve

| NDVI Pattern | Biological Interpretation |
|---|---|
| Increasing | Leaf production, canopy expansion |
| Rapid increase | Active vegetative growth |
| Peak | Maximum canopy development |
| Plateau | Mature canopy with little structural change |
| Gradual decline | Senescence, chlorophyll loss |
| Sudden drop | Harvest, flooding, or disturbance |
| Two peaks | Multiple cropping or management changes |

Notice that one pattern can have multiple causes. For example, a sudden NDVI drop could be harvest, flood damage, disease, or even cloud contamination. The pattern alone is not enough to identify the cause.

> NDVI is the end result of several biological and physical processes, not a direct measurement of plant health.
