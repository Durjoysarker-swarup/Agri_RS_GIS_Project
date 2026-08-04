# 1.2 — Active vs Passive Sensors

## Part 1 — Passive Sensors

Every measurement needs energy. Like to see a chair, you need light.

A passive sensor does not produce energy. It simply waits for naturally available energy. Usually this energy comes from the Sun.

```
Sun → Earth → Satellite
```

The satellite only records the reflected sunlight.

**Examples include:**
- Sentinel-2
- Landsat
- MODIS

### Characteristics of Passive Sensors

Passive sensors:
- Need sunlight (for reflected-light observations)
- Cannot image the Earth's surface at night (for visible bands)
- Are strongly affected by clouds
- Measure reflected or emitted natural radiation

---

## Part 2 — Active Sensors

An active sensor is completely different. It creates its own energy. Instead of waiting for sunlight, it transmits electromagnetic waves itself.

```
Satellite → Microwave Pulse → Ground → Returned Signal → Satellite
```

The satellite acts as both:
- Transmitter
- Receiver

This is exactly how radar works.

### Measuring Distance Using Time

The satellite knows:
- When it transmitted the pulse
- When the echo returned

If it takes longer, the object is farther away. If it returns quickly, the object is closer.

This is called **time-of-flight**.

The basic relationship is:

```
Distance = (c × t) / 2
```

where:
- c = speed of light
- t = total travel time

**Why divide by 2?**

Because the pulse travels: Satellite → Ground → Satellite. The measured time includes both directions.

---

## Part 3 — Passive vs Active

| Feature | Passive Sensor | Active Sensor |
|---|---|---|
| Energy source | Sun or natural emission | Sensor itself |
| Needs sunlight? | Usually yes (for reflected-light imaging) | No |
| Works at night? | Limited (visible bands cannot) | Yes |
| Cloud problem | Severe | Usually much smaller |
| Measures | Reflected or emitted radiation | Returned transmitted signal |
| Example | Sentinel-2, Landsat | Sentinel-1 |

---

## Misconception: "Passive Sensors Are Worse Than Radar"

**Reality:** Neither is better. They measure different physical properties.

- Optical sensors measure reflected solar radiation, revealing information about color, chlorophyll, and biochemical properties.
- Radar measures the interaction of microwaves with structure, moisture, and geometry.

The two systems complement each other.

An optical sensor may tell you:
- The crop is green
- Chlorophyll is increasing
- Vegetation index is high

A radar sensor may tell you:
- The field is flooded
- Stems are developing
- Canopy structure is changing
- Moisture conditions have changed

Together they provide a more complete understanding than either alone.
