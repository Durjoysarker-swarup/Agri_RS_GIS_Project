# 4.6 — Anomaly to Hypothesis

Anomalies do not explain themselves. They generate hypotheses that must be evaluated with evidence.

## Part 1 — Observation Is Not Explanation

Suppose you observe

**NDVI**

0.78 → 0.52

A negative anomaly was observed.

That is all you know.

You do not yet know
- drought
- flood
- disease
- harvest

**Scientific Thinking**

Observation → Anomaly detected → Generate hypotheses → Collect evidence → Reject unsupported explanations → Most likely explanation

**One Observation Can Have Many Causes**

## Part 2 — Categories of Hypotheses

### 1. Biological Hypotheses

Changes caused by crop or environmental processes.

**Examples**
- drought
- flood
- disease
- pest damage
- nutrient stress

These directly affect plant physiology.

### 2. Management Hypotheses

Changes caused by human actions.

**Examples**
- irrigation
- fertilizer application
- planting date
- harvesting
- cultivar selection

Management can produce NDVI changes that look similar to natural processes.

### 3. Observation Hypotheses

Changes caused by the measurement system.

**Examples**
- cloud
- shadow
- atmospheric effects
- interpolation
- sensor noise
- mixed pixels

These affect the observation without changing the crop itself.

## Part 3 — Decision Rules (not universal)

**Rule 1 → Does it persist?**

- One observation → Probably a measurement issue.
- Several consecutive observations → More likely real.

**Rule 2 → Does it remain after smoothing?**

If the anomaly disappears after reasonable smoothing, it may be
- noise
- cloud
- sensor artifact

If it remains, confidence increases that it reflects a genuine signal.

**Rule 3 → Does it match crop biology?**

Rice cannot suddenly double its biomass in three days.

If the observed change violates biological reality, suspect an observation problem.

**Rule 4 → Did it occur during a cloudy period?**

Check
- cloud mask
- satellite image
- quality flags

A cloudy acquisition increases the likelihood of measurement artifacts.

**Rule 5 → Does it coincide with external events?**

Examples
- heavy rainfall
- flood reports
- irrigation schedule
- harvest records
- field observations

External evidence strengthens or weakens hypotheses.

## Part 4 — Competing Hypotheses

A scientist should never stop after the first idea.

Instead, create competing hypotheses.

**Example**

| Hypothesis | Evidence Supporting | Evidence Against |
|------------|----------------------|--------------------|
| Drought | Low rainfall | Irrigation available |
| Flood | Heavy rainfall | No standing water detected |
| Harvest | Calendar timing | Field still appears green |
| Cloud | Cloud flag present | Adjacent clear observations |

This approach reduces confirmation bias.
