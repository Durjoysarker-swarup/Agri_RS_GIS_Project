# DAY 4: VV vs VH OVER CROPS

Why does VV behave differently from VH over a crop field, especially rice?

And, more importantly, you should not fall into the shortcut:

- ❌ VV = soil
- ❌ VH = vegetation

## 1. VV and VH

**VV**
V transmitted → V component received

**VH**
V transmitted → H component received

So the radar sends the same V-polarized signal, but looks at a different component of the returned field.

## 2. Why do VV and VH behave differently

Because the crop does not interact with the incoming electromagnetic wave in a perfectly simple way.

A crop canopy contains:

- leaves
- stems
- branches/tillers
- water
- soil
- gaps between plants
- different orientations
- different heights
- different moisture levels

These structures scatter the incoming wave in different ways.

Some scattering preserves the polarization strongly.

Some scattering produces significant cross-polarized components.

Therefore:

The physical structure of the target affects how much energy appears in VV versus VH.

### a. Bare Soil Field

Suppose there is almost no vegetation.

The radar mainly interacts with the soil surface.

Important factors include:

- soil moisture
- surface roughness
- incidence angle
- soil texture/structure

Depending on these conditions, the return can have a strong co-polarized component.

Therefore, VV can often be relatively important over bare agricultural soil.

### b. Add a Crop

Now the radar interacts with a 3-D structure instead of a relatively simple surface.

The canopy contains many scattering elements.

For example:

- leaves at different angles
- vertical stems
- horizontal/diagonal leaves
- multiple canopy layers

These structures can change the polarization state of the scattered field.

Consequently, the radar can receive a stronger H component, even though it transmitted V.

That contributes to VH.

## 3. Why is VH Often Useful for Vegetation?

The canopy contains many differently oriented scattering elements.

Their interactions can produce polarization mixing.

Therefore, cross-polarized measurements such as VH often become particularly sensitive to vegetation structure.

This is why VH is widely useful for crop monitoring.

But remember:

VH is sensitive to vegetation structure; VH is not "vegetation itself."

### But What About VV?

VV doesn't disappear.

The radar still receives a V component.

VV can be influenced by:

- canopy structure
- stems
- leaves
- soil
- moisture
- surface roughness
- geometry
- incidence angle

So both VV and VH can contain information about the crop.

The difference is that they respond differently to the same physical scene.

| | VV | VH |
|---|---|---|
| Transmit | V | V |
| Receive | V | H |
| Type | Co-polarized | Cross-polarized |
| Measures | V component | H component |
| Crop sensitivity | Yes | Yes |
| Soil sensitivity | Yes | Yes |
| Vegetation sensitivity | Yes | Often particularly useful |
| Directly equals biomass? | ❌ | ❌ |
| Directly equals soil moisture? | ❌ | ❌ |

The last two rows are extremely important.

## 4. Is VH Caused Only by Volume Scattering?

No.

This is a common misconception. VH can be influenced by several physical processes.

For example:

**Vegetation structure**
Leaves and stems have different orientations.

**Volume scattering**
Many scatterers are distributed through the canopy.

**Multiple scattering**
The wave may interact more than once before returning.

**Surface structure**
Rough surfaces can also contribute to cross-polarized response.

**Double-bounce interactions**
Certain geometries can have polarization-dependent responses.

So:

VH is an observation produced by the combined scattering environment—not a direct measurement of one specific mechanism.

## 5. This Is the Researcher-Level Way to Think

Suppose you observe:

VH increased by 3 dB.

A beginner says:

*"Biomass increased."*

A researcher says:

*"VH increased. What physical mechanisms could explain this?"*

Possible hypotheses:

- vegetation structure increased
- canopy became denser
- moisture changed
- scattering geometry changed
- flooding altered scattering
- double-bounce contribution changed
- incidence-angle effects contributed
- speckle/noise affected the observation

Then you look for independent evidence.

## 6. Rice Example

Imagine you observe this seasonal pattern:

| Stage | VV | VH |
|---|---|---|
| Bare field | relatively moderate | low |
| Early growth | changes | begins increasing |
| Tillering | changes | increases |
| Dense canopy | changes | relatively strong |
| Harvest | changes again | decreases/changes |

This can be consistent with crop development.

But the exact pattern depends on:

- rice variety
- planting method
- water conditions
- soil moisture
- canopy structure
- incidence angle
- acquisition geometry
- weather
- local field conditions

Therefore, never treat a generic curve as a universal rice signature.
