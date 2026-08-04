# 1.5 — MICROWAVE INTERACTION WITH OBJECTS

**"What happens to the microwave when it reaches something on Earth?"**

The four main processes are:

- Reflection
- Absorption
- Transmission
- Scattering

And the central idea is:

> Different materials interact differently with microwave energy, so they return different amounts and patterns of energy to the radar.

---

## Part 1 — The Four Processes

Think of the incoming microwave energy as a group of travelers arriving at a building.

They can:

- **Reflection:** Bounce away from the surface.
- **Absorption:** Transfer energy into the material.
- **Transmission:** Pass through the material.
- **Scattering:** Be redirected in many directions because of surfaces, structures, particles, or multiple interactions.

These processes can happen simultaneously.

### Reflection

The microwave hits the surface and is redirected. Microwaves can also be reflected.

But microwave reflection depends strongly on:

- surface properties
- roughness
- dielectric properties
- wavelength
- incidence angle
- polarization

"Every object reflects microwave energy in the same way."

### Specular Reflection

Now let's make the surface very smooth.

Imagine a calm lake.

```
             Radar
                ●
                 \
                  \
                   \
~~~~~~~~~~~~~~~~~~~~\~~~~~~~~~~~~
                     \
                      \
                   reflected
                    away
```

A smooth surface can behave somewhat like a mirror.

Most of the energy can be directed in a particular direction.

This is called: **Specular reflection**

The important thing is:

The reflected energy may go away from the radar.

Therefore, even though the surface reflects a lot of microwave energy, the radar may receive very little. This is one reason calm water can appear dark in SAR imagery.

### Absorption

The electromagnetic energy is transferred into the material and ultimately contributes to internal energy, often as heat.

#### Water Matters So Much

Water is particularly important in microwave remote sensing.

Because water has strong electromagnetic interaction with microwaves.

This means moisture can strongly change how a target interacts with radar energy.

For agriculture, this is extremely important.

Consider two soils:

```
Dry soil                                 Wet soil

██████████                ██████████
low water                          high water
content                              content
```

Their microwave response can be very different.

Soil moisture is one of the most important variables affecting SAR backscatter.

### Transmission

Now suppose the microwave reaches a material and some energy continues through it.

#### Transmission Matters for SAR

This is particularly important because microwaves can sometimes penetrate materials that visible light cannot.

For example, vegetation is not necessarily an opaque wall to microwaves.

A microwave can interact with:

```
Leaf
 ↓
through canopy
 ↓
stem
 ↓
other leaves
 ↓
soil
```

depending on:

- wavelength
- moisture
- vegetation density
- structure
- frequency

This is one reason SAR can provide information that optical sensors cannot.

#### But Don't Say "Microwave Always Penetrates Vegetation"

This is a common oversimplification. Microwave penetration depends strongly on wavelength and material properties.

### Scattering

Now we reach the most important concept for SAR interpretation.

Suppose the surface is irregular.

```
Incoming
microwave
    ↓
    ↓
  ▓ ▓ ▓ ▓
 ▓ ▓ ▓ ▓ ▓
  ▓ ▓ ▓ ▓
 ↙ ↓ ↗ ↖ →
```

Instead of one clean reflection direction, the energy is redirected in multiple directions.

This is: **Scattering**

Some of that scattered energy happens to travel back toward the radar.

That returned portion contributes to: **Backscatter**

---

## Part 2 — Agricultural Example

### Calm Water

The water surface is relatively smooth.

The microwave energy can behave somewhat like a mirror:

Little energy returns → Low backscatter → Dark SAR pixel

This is why smooth open water often appears dark.

### Rough Soil

Now consider rough agricultural soil. The surface contains many irregularities.

Energy can scatter in multiple directions:

```
                ↗
                ↑
          ↖   OBJECT   ↗
             ↙ ↓ ↘
```

Some energy returns toward the radar.

```
More returned energy
        ↓
Higher backscatter
        ↓
Brighter pixel
```

But remember:

roughness isn't the only factor.

Moisture and geometry also matter.

### Rice Canopy

Imagine a rice field.

The microwave doesn't necessarily interact with only the top leaf.

It can interact with:

- leaves
- stems
- water inside vegetation
- lower canopy
- soil beneath the canopy

So the signal can become complicated.

### Multiple Interactions

The microwave may interact with multiple components. Some energy may return directly. Some may scatter several times.

For example:

```
Leaf
 ↓
Stem
 ↓
Soil
 ↓
Radar
```

This is why agricultural SAR interpretation is not:

"Bright = healthy crop."

That would be scientifically weak.

The brightness could involve:

- canopy structure
- moisture
- soil
- water
- geometry
- wavelength
- polarization

You'll learn the scattering mechanisms more specifically in Week 2.

**Field A**
- Young rice
- Low biomass
- Relatively open canopy

**Field B**
- Mature rice
- Dense canopy
- Many stems/leaves

To your eyes:

Both = rice

But to SAR:

Different structure + different moisture + different interactions + different scattering
↓
Potentially different backscatter

This is why SAR can be useful for monitoring crop development.

But remember:

Different backscatter does not automatically mean different crop growth.

It could also reflect moisture or geometry.
