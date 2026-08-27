# DAY 2: Surface Scattering

A surface is not simply "smooth" or "rough." It is smooth or rough relative to the radar wavelength and viewing geometry.

---

## 1. Surface Scattering

**Surface scattering** is the interaction of microwave energy with a target's surface, where surface roughness and material properties determine how much energy is scattered back toward the radar.

### Specular reflection

You shine a flashlight at the mirror. The light doesn't scatter randomly in every direction.

It reflects in a predictable direction.

This is called: **Specular reflection**

The key idea is:

> A smooth surface sends the incoming energy in a preferred direction.

### Law of reflection

For a simple smooth surface:

$$\theta_i = \theta_r$$

where:

- $\theta_i$ = angle of incidence
- $\theta_r$ = angle of reflection

In words: **Angle in = angle out.**

For example:

```
                 radar
                    \
                     \  θi
                      \
                       \
--------------------\---------
                         \
                          \ θr
                           \
                            \
```

If the surface is very smooth, the reflected energy may travel away from the radar. Very little energy comes back toward the radar.

Therefore: **low backscatter** and the SAR pixel may appear: **dark**

This is the fundamental reason smooth surfaces can appear dark in SAR imagery.

The classic example: **calm water**

### But, now make the water rough

Suppose wind creates waves. Now the surface contains many differently oriented facets.

Instead of one smooth reflecting surface, you have many small surfaces. Each one can reflect energy in different directions. Some of that energy may return toward the radar.

So: **more backscatter** and the water can become brighter.

This gives us our first major rule:

> Smooth water tends to produce low backscatter; rough water can produce substantially higher backscatter.

---

## 2. Wavelength as a Measuring Ruler

Suppose a field has bumps that are: **1 cm high**.

Is the field rough or smooth?

You cannot answer that yet.

You need to know: **What wavelength is the radar using?**

Suppose the radar wavelength is: **5.6 cm**. Then 1 cm features are relatively small.

Now imagine another radar with **1 cm** wavelength. Those same 1 cm features become much more significant.

Therefore: **roughness is relative to wavelength**

- **Short wavelength:** Small surface features become important
- **Long wavelength:** Small surface features may matter less

### A conceptual roughness scale

Don't memorize exact numerical thresholds yet, because roughness classification depends on incidence angle and the scattering model.

Instead think:

- Very smooth → $h \ll \lambda$
- Intermediate → $h \sim \lambda$
- Very rough → $h \gg \lambda$

where $h$ represents characteristic surface height variation.

Sentinel uses C

---

## 3. Height Alone Isn't Enough

Imagine two surfaces.

**Surface A**
```
_/\/\/\/\/\/\/\/\/\_
```
Small but regularly spaced waves.

**Surface B**
```
_/\___/\/\_/____/\__
```
Irregular roughness.

They could have similar average height variation but scatter radar energy differently.

So radar roughness involves characteristics such as:

- RMS height
- horizontal correlation length
- surface slope
- spatial arrangement
- wavelength
- incidence angle

You don't need to calculate these yet. Just understand that:

> "Roughness" is an electromagnetic/statistical description of a surface, not simply how bumpy it looks to your eyes.

---

## 4. Specular Reflection and Diffuse Scattering

**Specular reflection** occurs when a relatively smooth surface reflects electromagnetic energy in a dominant, organized direction according to the law of reflection.
*Example: Mirror-like reflection*

**Diffuse scattering** is the scattering of microwave energy in many directions due to surface irregularities, allowing some energy to return toward the radar.

---

## 5. "Rough = Bright" Is NOT a Universal Rule

For example, consider a very wet smooth surface.

Water can greatly change dielectric properties. A smooth wet soil surface may still produce a different response than dry soil. Similarly, vegetation can cover the soil and completely change the dominant scattering mechanism. Surface roughness is one control, not the only control.

### Agricultural example

Consider bare agricultural soil.

**Case A — smooth and dry**
```
----------------------------
```
The surface may produce relatively directional reflection.
Depending on geometry → relatively low backscatter.

**Case B — rough and dry**
```
_/\/\____/\/\___/\_/\/\__
```
There are more surface facets.
→ more diffuse scattering.
→ potentially higher backscatter.

**Case C — smooth and wet**
```
~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```
Now the dielectric properties have changed strongly because of water. This can alter the radar interaction substantially. So you cannot predict the response from roughness alone.

### Geometric roughness vs Dielectric contrast

There are at least two different things influencing surface scattering.

- **Geometric effect** → The surface has physical bumps.
- **Electromagnetic effect** → The material has certain dielectric properties: $\epsilon$

---

## 6. Incidence Angle and Tillage

**Incidence angle** = angle between the incoming radar wave and the surface normal.

The direction of reflection/scattering relative to the radar changes.

Therefore: **surface response depends on viewing geometry**

Tillage changes soil surface roughness, which alters microwave scattering and therefore changes SAR backscatter ($\sigma^0$). Thus, SAR can potentially help infer agricultural management practices such as plowing.

---

## 7. Example: Rainfall

**Before rainfall:** rough + dry
**After rainfall:** rough + wet

Two things may matter:

- Moisture changes
- Surface condition may change

Rain can modify:

- soil surface
- aggregates
- puddles
- roughness
- microtopography

So the radar response can change substantially. This is why interpreting SAR time series requires environmental context. A sudden change in backscatter after rain does not automatically mean crop growth.

### Flooded rice

Imagine a flooded rice field before substantial vegetation develops.

> smooth water → specular reflection → little return → low σ

So the flooded field can become very dark.

But now add rice plants.

Now the situation becomes more complicated. The stems can interact with the water surface.

Once vegetation appears over water, surface scattering alone may no longer explain the radar response.

---

## 8. RMS Height and Correlation Length

What does "surface roughness" actually mean?

**Question A — How high/low are the bumps?**
```
            /\          /\
           /  \        /  \
_____/    \___/    \_____
```
This is about the vertical size of the roughness.

**Question B — How far apart are the bumps?**
```
_/\/\_/\/\_/\/\_/\/\_
```
versus
```
____/\________/\_____
```
This is about the horizontal spacing/structure of the roughness.

These are two different properties. And that's exactly where:

- RMS height
- correlation length

### A. RMS height: "How much does the surface vary vertically?"

**The RMS height equation**

$$
h_{rms} = \sqrt{\frac{1}{N}\sum_{i=1}^{N}(h_i - \bar{h})^2}
$$
 
**Where:**
 
- $h_i$ = measured surface height
- $\bar{h}$ = mean surface height
- $N$ = number of measurements
- $h_{rms}$ = RMS surface height

Measure how far the surface goes above/below the average, square those differences, average them, then take the square root.

### B. Correlation length

Imagine walking across a field.

You measure the height at one point.

Suppose:

**Point A** — height = 5 cm

Now you move 1 cm away.

The surface height might still be around 5 cm → Because nearby points are often physically related. Move another 1 cm. Maybe still similar.

Move 10 meters away:

The surface could be completely different.

> How far can I move before the surface heights stop being strongly related?

That distance is related to: **correlation length**

**Imagine two agricultural fields**

**Field A**
```
_/\/\_/\/\_/\/\_/\/\_/\/\_
```
The surface changes rapidly.

If you move a small distance:
```
_/\/\_
```
The height may already be quite different.

So: **short correlation length**

**Field B**
```
________/\________________/\________
```
The surface changes slowly over larger distances.

Nearby points remain similar for longer.

So: **long correlation length**

### This gives us the two-dimensional idea

Now we can describe surface roughness using two major characteristics:

- **RMS height** — How much does the surface move vertically?
- **Correlation length** — How quickly does the surface change horizontally?

---

## 9. The Scientific Reasoning You Should Use

Suppose you observe:

$$\sigma^0 = -10 \text{ dB}$$

Don't say:

> "The soil is rough."

Instead:

**Observation**
Backscatter is relatively high.

**Possible physical explanation**
A rough surface could be producing stronger diffuse scattering.

**Alternative explanations**
- higher soil moisture
- different incidence angle
- vegetation contribution
- different polarization
- other scattering mechanisms

**Evidence needed**
- field condition
- rainfall data
- optical imagery
- acquisition geometry
- temporal behavior
- field observations

This is the scientific reasoning framework you will later use in your research.
