# DAY 3: WHY CROSS-POLARIZATION EXISTS

A simple interaction can preserve the polarization state strongly.

Now introduce a more complicated target.

Instead of a simple surface, imagine this target has structures with different:

- orientations
- shapes
- surfaces
- angles

The incoming electromagnetic field now interacts with a much more complicated geometry.

The scattered electromagnetic field can therefore become more complicated.

## The scattered field can have components

Suppose we transmit: **V**

After interaction with the target, the scattered field can be represented conceptually as:

**E_scattered = E_V + E_H**

That means the scattered field has:

- a V component
- an H component

This is the fundamental idea behind cross-polarization.

A field can contain both H and V components.

Cross-polarized scattering can arise from several physical situations, including:

- target geometry
- target orientation
- roughness
- complex three-dimensional structures
- multiple scattering interactions
- volume scattering
- combinations of these mechanisms

## 1. Orientation

**complex / tilted target geometry → polarization mixing**

This doesn't mean every tilted object produces a large VH signal.

The actual magnitude depends on the electromagnetic properties and geometry.

## 2. Roughness ≠ cross-polarization

This distinction is important.

Don't conclude:

*"Rough surface = VH."*

No.

Roughness can affect scattering strength and polarization behavior, but cross-polarization depends on the complete electromagnetic interaction.

You must consider:

- wavelength
- roughness scale
- dielectric properties
- incidence angle
- surface geometry
- polarization

## 3. Vegetation

Vegetation is especially interesting because it is a 3-D collection of many scattering elements.

You have:

- vertical stems
- angled leaves
- different leaf orientations
- water-filled plant material
- gaps between plants

So the canopy is electromagnetically complicated.

**V entering a rice canopy**

```
             RADAR
                │
                │ V
                ↓
           🌾  🌾  🌾
          /│\ /│\ /│\
         / │ / │ / │ \
        🌾 🌾 🌾 🌾 🌾
```

The incoming field interacts with many differently oriented structures.

Each interaction can contribute to the final scattered field.

The resulting field is therefore not necessarily purely V.

It can contain: **V + HV + H** components.

**This is why vegetation can produce cross-polarization**

complex canopy structure → many differently oriented interactions → polarization mixing → cross-polarized return

Instead of one surface, the radar interacts with a three-dimensional distribution of scattering elements.

This creates a more complicated scattering environment.

### Multiple scattering

Multiple scattering can also contribute to polarization change.

**V → leaf → stem → soil → radar**

Every interaction can alter the electromagnetic field.

The final returned field may have a different polarization composition from the original field.

Therefore: **multiple interactions → potential polarization change**

### Double bounce

The wave may interact with:

- water
- stem

and scatter back toward the radar.

The two surfaces/structures have different electromagnetic properties and orientations.

The resulting scattering can have polarization-dependent behavior.

### Don't make a one-to-one rule

| Mechanism | Polarization |
|---|---|
| Surface | VV |
| Volume | VH |
| Double bounce | VV |

That would be wrong. The real relationship is more complicated.

**scattering mechanism + geometry + dielectric properties + polarization → observed backscatter**

## 4. Why cross-polarized returns are often weaker

**VV = −8 dB**
and:
**VH = −15 dB**

The VH signal is weaker.

Why might this happen?

Because the target may preserve a substantial portion of the incident polarization, while only part of the scattered energy appears in the orthogonal polarization component.

Conceptually:

```
Incident V energy
        │
        ↓
      TARGET
        │
     ┌──┴──┐
     ↓     ↓
    V     H
   large  smaller
```

This is a simplification, but useful for intuition.

## 5. Polarization conversion vs depolarization

**Depolarization**

The scattered field becomes less purely polarized in its original state.

For example:

Incident: **V**
Scattered: **V + H**

**Cross-polarized return**

The radar specifically measures the orthogonal component.

For V transmission:

VH measures the H component.

So:

depolarization can produce a measurable cross-polarized component

But don't treat the words as perfectly interchangeable in every advanced context.

## 5. VH Polarization

VH means: V is transmitted → H component is measured on reception.

The radar receives the scattered electromagnetic field, which can contain both V and H components.

It does not only measure waves that have physically rotated exactly 90°.

If the received field is oriented at 60° or 70°, it can be resolved mathematically into V and H components.

This is vector decomposition/projection, not the wave physically splitting into two waves.

The H component is what the VH measurement records.

Therefore, cross-polarization ≠ simply "90° turning."

## 6. Mathematical idea

At a more advanced level, the target can be described using a scattering matrix:

$$
\mathbf{S} = \begin{bmatrix} S_{HH} & S_{HV} \\ S_{VH} & S_{VV} \end{bmatrix}
$$

The target can have different responses for different transmit/receive polarization combinations.

Scattering happens → it can produce different polarization components → we measure those components in different transmit/receive configurations.
