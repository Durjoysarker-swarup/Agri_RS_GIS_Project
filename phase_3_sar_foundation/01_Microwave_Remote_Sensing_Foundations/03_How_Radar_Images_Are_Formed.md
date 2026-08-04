# 1.3 — How Radar Images Are Formed

## Part 1 — Radar Pulse

Radar transmits microwaves. It does not transmit them continuously.

Instead, it sends very short bursts of energy. These bursts are called **radar pulses**.

```
Pulse → Wait → Receive Echo
```

again,

```
Pulse → Wait → Receive Echo
```

Each pulse lasts only a tiny fraction of a second.

---

## Part 2 — Backscatter

When SAR sends microwave energy toward Earth, the energy interacts with the surface.

Some energy is:
- Reflected
- Absorbed
- Transmitted
- Scattered in different directions

Only the portion of scattered energy that travels back toward the radar antenna contributes to the measured backscatter.

### Example 1 — Open Water

Calm water is relatively smooth.

```
SAR
 ↓
 ↓
~~~~~~~~~~~~~~
   Water
~~~~~~~~~~~~~~
```

The microwave tends to reflect away from the radar rather than back toward it.

```
SAR
 ↓
~~~~~~~~~~~~
      ↘
       ↘
```

Therefore: little energy returns → low backscatter → dark SAR pixel.

But don't memorize "water = dark." Wind, waves, floating vegetation, and surface roughness can increase the return.

### Example 2 — Bare Soil

Soil is usually not perfectly smooth. It contains:
- Clods
- Ridges
- Furrows
- Aggregates
- Crop residues
- Small depressions

Therefore, incoming microwave energy scatters in many directions.

```
       SAR
      ↗ ↑ ↖
       \|/
        ↓
   /\/\_/\/\_/\/\
       Soil
```

Some energy returns to the radar. More return → stronger backscatter → potentially brighter pixel.

But soil moisture also matters greatly.

```
Soil roughness + Soil moisture + Radar geometry → Backscatter
```

So a brighter soil pixel does not automatically mean "more roughness."

### Example 3 — Rice Canopy

Rice is much more complicated.

The radar interacts with:
- Leaves
- Stems
- Panicles
- Water
- Soil
- Other plants

The microwave can penetrate into parts of the canopy and interact with different components.

Some energy returns from:
- Leaves
- Stems
- Canopy volume
- Soil/water beneath the canopy

The radar receives the combined signal.

Therefore, rice backscatter depends on:
- Crop growth stage
- Vegetation structure
- Vegetation moisture
- Soil moisture
- Water conditions
- Wavelength
- Polarization
- Incidence angle
- Surface geometry

### Rice Growth Changes the Radar Response

**Early stage**
```
Small plants + Water/soil → Strong influence from surface conditions
```

**Growing stage**
```
More leaves + stems
       ↓
More vegetation interaction
       ↓
Changing backscatter
```

**Dense mature canopy**
```
Dense 3D structure
       ↓
Complex scattering
       ↓
Different SAR response
```

Therefore, SAR can provide information about crop development over time.

---

## Part 3 — Range

Radar now knows how far away the object is. This direction is called **Range**.

Range is the direction from the radar toward the ground.

Every object with the same travel time belongs to the same range.

---

## Part 4 — Azimuth

Suppose two trees are at exactly the same distance. How can radar distinguish them?

Because the satellite moves. Imagine Sentinel-1 flying forward.

```
Flight Direction

────────────►
```

This direction is called **Azimuth**.

Azimuth is the along-track direction.

So every target has Range and Azimuth — together, they define position.

---

## Workflow

Everything you've learned today forms one chain:

```
Radar Pulse
      ↓
Travels at Speed of Light
      ↓
Hits Target
      ↓
Backscatter Produced
      ↓
Travel Time Measured
      ↓
Range Determined
      ↓
Satellite Motion Gives Azimuth
      ↓
Backscatter Assigned to a Pixel
      ↓
Millions of Pixels Form a SAR Image
```

If you understand this flow, the rest of SAR processing becomes much easier.
