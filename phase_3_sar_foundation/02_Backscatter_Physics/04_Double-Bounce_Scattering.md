# DAY 4: Double-Bounce Scattering

## 1. Double Bounce

**Double-bounce scattering** occurs when radar energy undergoes two major reflections/scattering interactions before returning toward the radar.

The basic path is:

$$\text{Radar} \rightarrow \text{vertical object} \rightarrow \text{horizontal surface} \rightarrow \text{Radar}$$

The radar signal:

- hits the vertical object,
- reflects toward the ground/water,
- reflects again,
- returns toward the radar.

### This is different from surface scattering

**Surface scattering**
```
            Radar
               ↓
               ↓
────────────────────
       rough soil
```
The main interaction is with the surface.

**Double bounce**
```
            Radar
               ↘
                │
                │
                │
                ↙
────────────────────
      water/soil
```
The energy interacts with:

- a vertical structure
- a horizontal surface

So there are two important interactions.

---

## 2. Dihedral Geometry

Heart of double bounce.

Imagine a vertical wall:

```
       │
       │
       │
───────┴────────
     ground
```

You have two surfaces oriented roughly at right angles:

- One is: **vertical**
- The other: **horizontal**

This creates a geometry that can redirect radar energy back toward the sensor under suitable viewing conditions.

This is sometimes called a: **dihedral geometry**

A dihedral is essentially two surfaces meeting at an angle, commonly close to $90°$.

**Example:** In case of rice, radar energy interacts with the stem and the water surface.

---

## 3. Flooded Vegetation

A calm water surface is usually very smooth relative to the radar wavelength. It produces mostly specular reflection. And the pixel is dark.

Now put vertical vegetation into the water.

```
            Radar
               ↘
                ↘
                 │
                 │
                 │
────────────────────
       calm water
```

The vertical vegetation changes the geometry.

Now the stem and water can create a double-bounce path:

$$\text{Radar} \rightarrow \text{stem} \rightarrow \text{water} \rightarrow \text{Radar}$$

Therefore, the water is no longer behaving like an isolated smooth surface. The vegetation provides a vertical scattering element.

This can dramatically change the radar return. And flooded vegetation can be bright.

### But don't memorize "flooded = bright"

This is another important scientific warning.

You might hear:

> "Flooded rice is bright in SAR."

That's often useful as a rough interpretation, but it is not universally true.

The actual response depends on:

- vegetation structure
- water level
- stem orientation
- canopy density
- surface roughness
- radar incidence angle
- polarization
- wavelength
- moisture
- acquisition geometry

So the scientifically safer statement is:

> Flooding can enhance double-bounce scattering when vertical vegetation interacts with a suitable water/ground surface geometry.

---

## 4. Compare Three Situations

**Situation A — Bare dry soil**
```
Radar
  ↓
────────────
     soil
```
Possible dominant mechanism: surface scattering depending on roughness and moisture.

**Situation B — Open calm water**
```
Radar
  ↘
   ↘
────────────
    water
```
Dominant behavior: specular reflection away from radar. Therefore it is often dark.

**Situation C — Flooded rice**
```
            Radar
               ↘
                │
                │
                │
────────────────────
        water
```
Possible strong mechanism: Double-bounce. This is the key agricultural difference.

---

## 5. Can Everything Happen in One Rice Field?

Yes.

Consider a flooded rice field with a dense canopy:

```
               Radar
                  ↓
          🍃     🌿     🍃
             🌿     🌿
          🍃    🌿     🍃
────────────────────────────
             water
```

Potential contributions include:

**Volume scattering** — From:
- leaves
- stems
- other canopy elements

**Double bounce** — From:
- vertical stems
- water surface

**Surface scattering** — From:
- soil/water surface

So the observed SAR signal is the result of a complex combination of mechanisms.

This is why interpreting SAR is difficult.

---

## 6. The Three Major Mechanisms

| Mechanism | Basic physical idea | Typical agricultural example |
|---|---|---|
| Surface scattering | Radar interacts mainly with surface | Bare soil |
| Volume scattering | Radar interacts with 3-D distributed elements | Crop canopy |
| Double bounce | Two major interactions involving vertical + horizontal surfaces | Flooded rice |

This is the foundation you need before moving to factors affecting backscatter.

> Flooding does not merely change the amount of water in a field. It can change the scattering geometry of the entire scene.
