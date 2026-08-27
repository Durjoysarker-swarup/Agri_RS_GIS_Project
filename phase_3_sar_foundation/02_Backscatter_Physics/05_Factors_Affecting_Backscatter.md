# DAY 5: Factors Affecting Backscatter

Imagine a radar looking at a rice field. The radar return depends on several things.

- **Moisture** → How much water is present?
- **Roughness** → How irregular is the surface?
- **Structure** → What physical structures are present and how are they arranged?
- **Geometry** → How is the radar looking at the target?

So conceptually:

$$\sigma^0 = f(\text{moisture}, \text{roughness}, \text{structure}, \text{geometry})$$

---

## PART 1 — Moisture

Water has very different electromagnetic properties from dry soil and dry vegetation.

Adding water changes the target's dielectric properties. And dielectric properties influence how microwaves interact with the target.

### 1. Dry soil vs wet soil

Water has a much higher dielectric constant than air. Therefore replacing air with water significantly changes the effective dielectric properties of the soil.

The wet soil contains more water. Its dielectric properties change substantially. This can change the amount of energy reflected/scattered.

Under many common conditions:

$$\text{soil moisture} \uparrow \rightarrow \sigma^0 \uparrow$$

especially for bare or sparsely vegetated soil.

**SAR is useful for soil moisture** — it does not directly "see water content." It measures a radar response that is influenced by moisture.

### 2. Moisture in vegetation

Moisture doesn't only matter in soil.

Plants contain water. A plant with high water content has different electromagnetic properties from a very dry plant.

### Moisture has different meanings in different targets

**Soil**
Moisture affects: soil dielectric properties

**Vegetation**
Moisture affects: vegetation dielectric properties

**Water surface**
The water itself is already a high-dielectric medium, but the important behavior depends heavily on surface smoothness and geometry.

---

## PART 2 — Roughness

### 1. Smooth vs Rough Surface

**Smooth surface**
Radar energy tends toward: specular reflection

Much of the energy may go away from the radar. Therefore the radar may receive relatively little energy.

**Rough surface**
Energy is scattered in many directions. Some of it can return toward the radar.

Therefore: roughness can increase backscatter under suitable conditions.

### 2. Roughness Factors

How rough is the surface relative to the radar wavelength?

You learned: $h_{rms}$ and correlation length. These help describe the statistical structure of the surface.

Electromagnetic roughness depends on:

- wavelength
- incidence angle
- surface height variation
- spatial scale of variation

> visual roughness ≠ radar roughness

This is one of the most important ideas from your previous day.

**Surface A** → `_/\/\_/\/\_/\/\_`

**Surface B** → `________/\________/\________`

They may have different:

- RMS height
- correlation length

Therefore the radar may respond differently even if both look "rough."

This is why we don't reduce roughness to simply: "number of bumps."

---

## PART 3 — Structure

Structure means the physical arrangement of scattering elements.

For vegetation, think about:

- height
- density
- size
- orientation
- spacing
- vertical distribution
- leaf arrangement
- stem arrangement

For example: Sparse crop and Dense crop

### 1. Structure Matters

Because the radar interacts with physical objects.

Change the objects:

$$\text{small seedlings} \rightarrow \text{larger plants} \rightarrow \text{denser canopy} \rightarrow \text{different scattering environment}$$

Therefore:

$$\text{canopy structure} \rightarrow \text{scattering behavior} \rightarrow \sigma^0$$

### But structure is not the same as biomass

**Field A** → Plants are upright.
**Field B** → Plants are bent/flattened.

They have similar biomass but very different geometry. Therefore they can have very different radar responses.

> $\sigma^0$ is not simply a biomass meter

---

## PART 4 — Geometry

The spatial relationship between the radar, the target, and the scattering structures.

For example:

```
Radar
  ↘
      ↘
         Target
```

Change the radar's viewing angle:

```
Radar
   ↓
   ↓
 Target
```

The interaction can change.

### 1. Incidence Angle

It is the angle between the radar beam and the normal to the target surface. The radar can look at the same surface from different angles. That changes the observed backscatter.

Imagine a row of vertical plants.

```
│ │ │ │ │
│ │ │ │ │
──────────
```

If the radar looks from one direction:

```
Radar
  ↘
     ↘
  │ │ │ │
```

If it looks from another:

```
Radar
  ↓
  ↓
│ │ │ │
```

The radar sees different projected geometry.

That can change:

- illuminated surface area
- shadowing
- scattering direction
- double-bounce geometry
- vegetation visibility

Therefore:

$$\text{geometry} \rightarrow \text{scattering behavior} \rightarrow \sigma^0$$

Geometry is especially important for double bounce.

Geometry also matters for surface roughness.

---

## Your Four Factors in One Table

| Factor | What changes physically? | Why SAR cares |
|---|---|---|
| Moisture | Water content / dielectric properties | Changes electromagnetic interaction |
| Roughness | Surface height variation | Changes scattering direction |
| Structure | Size, density, orientation, arrangement | Changes scattering elements/mechanisms |
| Geometry | Radar-target viewing relationship | Changes how energy interacts and returns |

---

## A. Interaction of These Four

### 1. Wet Vegetation

Now:

```
🌿🌿🌿🌿
────────
wet soil
```

There are multiple possible influences:

- Vegetation moisture ↑
- Soil moisture ↑
- Vegetation structure → depends on crop stage
- Surface roughness → may remain unchanged
- Geometry → depends on radar viewing conditions

Therefore: $\sigma^0$ is the result of a complicated combination.

### 2. The Same SAR Brightness Can Have Different Causes

The same approximate backscatter could potentially arise from different combinations of:

- moisture
- roughness
- vegetation structure
- geometry
- scattering mechanisms

This is the **inverse problem**.

### 3. Wavelength Belongs Here Too

Your roadmap lists four factors today, but don't forget:

Because the target's physical features are interpreted relative to the radar wavelength.

For example:

$$\text{small structure} \rightarrow \text{compared with } \lambda$$

$$\text{large structure} \rightarrow \text{compared with } \lambda$$

This determines how strongly different structures interact with the radar.

That's why X-, C-, L-, and P-band systems can respond differently to the same vegetation.

You already learned the basic idea in Week 1, so you don't need another deep dive today.

### 4. Another Deeper Concept: Polarization
