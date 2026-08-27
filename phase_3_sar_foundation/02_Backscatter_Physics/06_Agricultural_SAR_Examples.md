# DAY 6: Agricultural SAR Examples

## PART 1 — Rice

### 1. Early-stage rice

Imagine newly planted rice:

```
      🌱        🌱

   🌱        🌱

────────────────────────
       soil/water
```

There are only a few plants. Therefore:

- vegetation volume is small
- much of the radar interaction may involve the underlying surface
- vegetation structure is relatively simple

Possible contributions:

> surface scattering + some vegetation scattering. The exact balance depends on field conditions.

### 2. As Rice Grows

Now imagine:

```
🌿   🌿   🌿   🌿
  🌿   🌿   🌿
🌿   🌿   🌿   🌿
──────────────────
```

There are more scattering elements.

The canopy becomes:

- taller
- denser
- more complex
- more vertically distributed

Therefore the radar encounters more vegetation structures.

This can increase the contribution from: **volume scattering**

### Does more biomass always mean higher σ⁰?

No.

Because radar backscatter also depends on:

- moisture
- canopy structure
- stem orientation
- wavelength
- polarization
- incidence angle
- saturation effects
- underlying soil/water

So:

$$\text{SAR response} \neq \text{simple biomass measurement}$$

### 3. Moisture Complicates Rice Interpretation

Suppose rice grows after rainfall.

You observe: $\sigma^0 \uparrow$

Possible explanation: More vegetation.

But another possibility: Vegetation moisture increased.

Or: Soil moisture increased.

Or: Flooding occurred and double bounce became stronger.

Therefore:

$$\sigma^0 \uparrow \neq \text{proof of crop growth}$$

You need context.

---

## PART 2 — Bare Soil

The two major factors you should immediately think about are:

- Moisture
- Roughness

### 1. Smooth Dry Soil

If the surface is relatively smooth compared with the radar wavelength, much of the energy can be reflected away from the radar.

The return can therefore be relatively weak.

### 2. Rough Soil

The irregular surface scatters energy in multiple directions. Some of that energy can return toward the radar.

Therefore:

$$\text{roughness} \uparrow \rightarrow \text{backscatter can increase}$$

relative to the radar wavelength and viewing geometry.

### 3. Dry vs Wet Bare Soil

Adding water changes the soil's dielectric properties.

Therefore:

$$\text{soil moisture} \rightarrow \text{dielectric properties} \rightarrow \text{scattering} \rightarrow \sigma^0$$

Often, wetter bare soil produces stronger backscatter, but the actual response depends on roughness and geometry.

### Rainfall Can Therefore Create a SAR Change

Imagine:

**Before rain** → dry soil
**After rain** → wet soil

but:

> SAR observes a microwave response influenced by soil moisture; it does not directly measure "soil moisture" without modeling or calibration.

### 4. Tillage

**Before tillage** → `____________________`

**After tillage** → `_/\/\_/\/\__/\/\_/\/\`

Roughness changed.

$$\text{tillage} \rightarrow \text{roughness change} \rightarrow \sigma^0 \text{ change}$$

So if you observe a change in bare-soil backscatter, possible explanations include:

- moisture change
- tillage
- roughness change
- geometry
- combinations of these

---

## PART 3 — Flooded Fields

### 1. Open Water

A calm water surface is relatively smooth.

Therefore the reflection tends to be: **Specular**

Much of the energy can be reflected away from the radar.

Therefore: calm open water → low backscatter and it often appears dark in SAR.

### 2. Rough Water

Now imagine wind creating waves: `_/\/\_/\/\__/\/\_/\/\_`

The surface is no longer as smooth. Therefore the scattering becomes less purely specular. More energy can be scattered in different directions.

So: water roughness → different radar return

This is why "water = dark" is not universally true.

### 3. Vegetation Added

Imagine:

```
      🌿
       │
       │
────────────────
      water
```

Now you have:

- vertical vegetation
- horizontal water

This creates a potential double-bounce geometry.

The pathway is: $\text{Radar} \rightarrow \text{vegetation} \rightarrow \text{water} \rightarrow \text{Radar}$

### 4. Flooding Can Also Change the Underlying Surface

**Before flooding:** rice + soil
**After flooding:** rice + water

So flooding changes:

- dielectric environment
- surface properties
- scattering geometry

---

## PART 4 — Harvested Fields

**Before:**

- tall vegetation
- many stems
- many leaves
- 3-D canopy
- high structural complexity

**After:**

- little or no standing vegetation
- exposed soil
- crop residue
- different surface roughness

Therefore the scattering environment changes.

### 1. Dominant Scattering

**Before harvest:** volume scattering may be an important contribution.

**After harvest:** surface scattering from the soil/residue may become more important.

So:

$$\text{harvest} \rightarrow \text{canopy structure collapses} \rightarrow \text{scattering environment changes}$$

### Other Factors

- Crop residue matters
- Harvest can change roughness too
- Dry vs wet harvested fields

---

## Compare Agricultural Scenes

| Scene | Main physical components | Important possible scattering |
|---|---|---|
| Growing rice | leaves + stems + soil/water | Volume + surface + possibly double bounce |
| Bare soil | soil surface | Surface scattering |
| Flooded bare field | water surface | Mostly surface/specular behavior |
| Flooded rice | vegetation + water | Double bounce + volume + other contributions |
| Harvested field | soil + residue | Surface + residue scattering |

---

## PART 5 — This Explains Why SAR Time Series Are Interesting

If you plot SAR backscatter over time:

```
σ⁰
↑
│          /\            __
│         /  \_____/    \
│ ___ /                     \__
│
└────────────────────────→ time
       crop season
```

The curve is not simply:

> "crop biomass curve."

It reflects changes in:

- structure
- moisture
- roughness
- flooding
- scattering mechanisms
- geometry
- radar configuration
