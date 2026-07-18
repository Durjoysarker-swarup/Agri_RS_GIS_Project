# 3.4 — Causal Thinking: Why Patterns Exist

> "What caused this NDVI pattern, and how confident am I in that explanation?"

## Part 1 — Observation ≠ Cause

Suppose your NDVI curve looks like this.

```
NDVI
0.85 |
0.75 |             ______
0.65 |          /
0.55 |____/
     Time →
```

What happened? "The crop grew."

Actually, that's not what you observed. You observed only: **NDVI increased.**

Everything else is an interpretation.

---

## Part 2 — The Chain of Causation

```
Rainfall → Higher soil moisture → Roots absorb water → Photosynthesis increases →
New leaves develop → Leaf Area Index increases → Canopy becomes denser →
Reflectance changes → NDVI increases
```

Rain never directly changes NDVI. It changes plant biology. Plant biology changes light reflectance. Reflectance changes NDVI.

---

## Part 3 — Response Lag

Plants do not respond instantly. Suppose heavy rainfall occurs today.

Will NDVI rise tomorrow? Usually no — because plants need time.

```
Rain → Water enters soil → Roots absorb water → Cells expand → Leaves grow →
Canopy expands → Satellite observes greener vegetation → Higher NDVI
```

This delay is called **response lag**.

Different drivers have different lag times.

| Driver | Typical Response |
|---|---|
| Rainfall | Delayed |
| Irrigation | Delayed |
| Fertilizer | Delayed |
| Harvest | Almost immediate |
| Flood | Often immediate |
| Fire | Immediate |

Notice that some processes are gradual while others are abrupt.

---

## Part 4 — Rain-fed vs Irrigated Fields

Imagine two rice fields. Both receive exactly the same rainfall.

Will they have identical NDVI? **Not necessarily.**

### Field A — Rain-fed

Water source → Rain only.

If rainfall decreases:
```
Soil dries → Crop stress develops → NDVI decreases
```

### Field B — Irrigated

Water source → Rain + Irrigation.

Even if rainfall decreases, farmers continue supplying water. The crop continues growing, NDVI remains high.

So identical rainfall does not produce identical NDVI. Management changes the relationship. This is called **decoupling**.

> Decoupling means two things that were strongly connected become less connected or independent.

The crop becomes less dependent on rainfall because humans supply water.

---

## Part 5 — Management Signals

Many NDVI changes are caused by farmers rather than climate.

### Fertilizer

```
Nitrogen → More chlorophyll → Greener leaves → Higher photosynthesis →
Rapid canopy development → Steeper NDVI increase
```

### Harvest

Harvest removes vegetation.

```
Harvest → Leaves removed → Canopy disappears → Soil becomes visible → NDVI drops sharply
```

### Flood

Flooding has two possible effects.

**Normal rice flooding:** Early season flooding is intentional. Rice survives. NDVI may remain stable or rise later.

**Deep flood:** Leaves become submerged. Photosynthesis decreases. Canopy disappears. NDVI decreases.

---

## Part 6 — Confounding Variables

Suppose NDVI suddenly decreases. Many possibilities:
- Cloud → Lower NDVI
- Cloud shadow → Lower NDVI
- Flood → Lower NDVI
- Disease → Lower NDVI
- Harvest → Lower NDVI

Exactly the same observation. Different causes.

This is called **confounding** — different mechanisms produce similar observations.

---

## Part 7 — Evidence-Based Interpretation

**Pattern:** Sharp NDVI decline

**Possible explanations:**
- Harvest
- Flood
- Disease
- Cloud
- Sensor artifact

How do we decide? Collect evidence.

| Evidence | Helps Identify |
|---|---|
| Rainfall data | Flood or drought |
| SAR imagery | Flood beneath clouds |
| Cloud mask | Cloud contamination |
| Crop calendar | Harvest timing |
| Farmer records | Management activities |
| Temperature | Heat stress |
| Field visit | Ground truth |
