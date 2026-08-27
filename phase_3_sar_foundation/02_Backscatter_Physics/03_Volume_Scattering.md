# DAY 3: Volume Scattering

**Volume scattering** is the scattering of microwave energy by multiple elements distributed throughout a three-dimensional target, such as leaves, stems, and branches in vegetation.

Microwaves can interact with vegetation elements and, depending on wavelength, polarization, moisture, density, and structure, can penetrate into parts of the canopy.

The wave may encounter:

- upper leaves
- lower leaves
- stems
- branches
- underlying soil/water

So the radar signal can contain contributions from different depths.

But don't imagine the radar wave simply traveling straight through the canopy like a flashlight through glass.

The wave is:

- scattered
- attenuated
- transmitted
- reflected
- possibly scattered multiple times

throughout the canopy.

---

## 1. Rice Is Especially Interesting

Consider a rice field.

**Early season:**
```
──────────────
      soil/water
```
There is little vegetation.

**Later:**
```
     🌿   🌿
   🌿   🌿   🌿
     🌿 🌿 🌿
────────────────
      soil/water
```

**Later still:**
```
  🌿🌿🌿🌿🌿🌿
  🌿🌿🌿🌿🌿🌿🌿
 🌿🌿🌿🌿🌿🌿🌿🌿
──────────────────
       soil/water
```

The canopy becomes denser. Now the radar sees a much more complicated 3-D scattering environment.

---

## 2. Vegetation Water Matters

Water strongly affects dielectric properties.

Vegetation contains water.

Therefore:

> vegetation water → dielectric properties → microwave interaction

This means radar sensitivity to vegetation isn't just about physical structure. It can also be influenced by: **vegetation moisture**

So a plant isn't simply a collection of sticks and leaves. Electromagnetically, it is a complex mixture of:

- water
- dry matter
- air
- structural elements

---

## 3. The Radar Doesn't Label Individual Leaves

A SAR pixel does not say:

> "This return came from leaf #27."

Instead, the pixel represents the combined electromagnetic response from everything within the resolution cell.

Conceptually:

```
             SAR pixel
┌──────────────────────────┐
│ 🍃   🌿  🍃   🌿  🍃     │
│   🌿  🍃   🌿    🍃      │
│ 🍃   🌿   🍃  🌿         │
│──────────────────────────│
│       soil/water         │
└──────────────────────────┘
```

The observed signal is the result of many scattering contributions.

This is why SAR interpretation is fundamentally a **mixture problem**.

---

## 4. Volume Scattering Does Not Necessarily Mean Multiple Scattering

This distinction is subtle but important.

**Volume scattering** means:
Scattering elements are distributed through a volume.

**Multiple scattering** means:
The wave undergoes multiple scattering interactions before reaching the radar.

A canopy can have volume scattering without every photon/wave contribution undergoing repeated scattering.

---

## 5. Attenuation

**Attenuation** means reduction in the strength of the wave as it travels through a medium.

For vegetation:

```
Radar
 ↓↓↓↓↓↓↓
 ↓↓↓↓↓
  ↓↓↓
   ↓
Canopy
```

The deeper the wave travels, the more energy may be:

- scattered
- absorbed
- redirected

Therefore less energy may reach the ground and return.

So a dense canopy can act like a partially obscuring layer.

This gives us another important relationship:

> Dense canopy → more interaction + attenuation.

That is why the relationship between biomass and backscatter can eventually **saturate**.

---

## 6. SAR Detects Crop Growth

As the plant grows:

- Plant height changes
- Leaf area changes
- Biomass changes
- Vegetation water changes
- Canopy density changes
- Element orientation changes — leaves and stems have different orientations

All of these can change: $\sigma^0$

### But SAR doesn't "see biomass"

Suppose: $\sigma^0 = -8 \text{ dB}$

You cannot say:

> "The biomass is exactly X kg/m²."

unless you have a validated model or empirical relationship.

The scientifically correct reasoning is:

> The observed backscatter is consistent with a canopy structure/moisture condition that may be associated with a particular biomass level.

---

## 7. Volume Scattering vs Surface Scattering in Rice

| Feature | Surface scattering | Volume scattering |
|---|---|---|
| Main location | Surface | 3-D canopy |
| Example | Soil/water | Leaves/stems |
| Important property | Roughness | Canopy structure |
| Moisture influence | Soil/water moisture | Vegetation moisture |
| Structure | Mostly 2-D surface | 3-D structure |
| Example target | Bare soil | Rice canopy |
| Main idea | Surface interaction | Internal canopy interaction |

But in a real rice field: **both can occur simultaneously**

---

## 8. Masking

A dense canopy can partially mask the underlying surface.

**Before:**
```
Radar
 ↓
 ↓
──────────
ground
```

**After:**
```
Radar
 ↓
 🌿🌿🌿
 🌿🌿🌿
 🌿🌿🌿
──────────
ground
```

The radar signal from the ground may become weaker or less visible because vegetation lies above it.

So:

> vegetation → attenuation → reduced ground contribution

This becomes particularly important when trying to retrieve soil moisture beneath vegetation.

---

## 9. SAR vs NDVI

This connects beautifully with your previous optical work.

**NDVI:** red + NIR reflectance — is strongly related to:

- chlorophyll
- vegetation vigor
- canopy properties
- biochemical condition

**SAR:** $\sigma^0$ — is influenced strongly by:

- structure
- moisture
- geometry
- scattering mechanisms

Therefore:

> NDVI and SAR observe different physical properties. This is why their time series don't have to look identical.

### A Rice-Season Thought Experiment

**Early season**
Little vegetation.
- NDVI: low
- SAR: Potentially influenced strongly by water, soil, roughness

**Mid-season**
Dense growing canopy.
- NDVI: ↑
- SAR: Potentially: vegetation scattering ↑

**Later season**
Canopy structure changes as plants mature.
- NDVI: ↑ → peak → ↓
- SAR may show a different pattern because its controlling mechanisms are different.

This is exactly why comparing SAR and NDVI is scientifically useful.

---

## 10. "Volume Scattering = Random Bouncing" Is Wrong

You might encounter explanations saying:

> "Radar enters the canopy and bounces randomly around."

The actual process involves electromagnetic interaction with:

- dielectric properties
- geometry
- orientation
- wavelength
- polarization
- phase
- multiple scattering

So don't visualize it as a bunch of billiard balls randomly bouncing.

Instead think:

> A structured electromagnetic field interacts with many distributed scattering elements throughout a 3-D medium.

### The Scientific Trap

Suppose:

$$\sigma^0(B) > \sigma^0(A)$$

You cannot immediately say:

> "Field B has more biomass."

Alternative explanations could include:

- more vegetation moisture
- different soil moisture
- different incidence angle
- different canopy orientation
- different planting density
- different roughness
- different polarization
- speckle
- double-bounce contribution
