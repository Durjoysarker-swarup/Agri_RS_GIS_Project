# PELT

## Where exactly did the behavior change?

*"Where does one statistical behavior end and another begin?"*

This is called **segmentation**.

### What is a segment?

A region where the data behaves similarly.

**Example:**

```
0.20, 0.22, 0.21, 0.23
```

These values fluctuate, but all around ≈0.22. That is **one segment**.

Then suddenly:

```
0.70, 0.71, 0.69, 0.72
```

Now everything fluctuates around ≈0.70. That is **another segment**.

So the signal becomes:

```
Segment A → Segment B
```

---

## L2 Cost (model=12)

Suppose segment:

```
0.50, 0.52, 0.49, 0.51
```

- Mean → 0.505
- Error → 0.50 − 0.505 = -0.005
- Square → 0.000025

Keep going. Finally, add them all.

**Total squared error** → that number is the **cost**.

- Small cost → Segment is internally consistent.
- Large cost → Segment probably contains multiple behaviors.

---

## What is PELT actually trying to minimize?

PELT is **not** trying to find the biggest jump. Instead, it solves an optimization problem.

It asks:

> "How can I divide this signal into segments so that the total cost is as small as possible?"

Mathematically, the objective is:

Total Cost = ∑Cost of each segment + {β×(number of change points)}

where:
- **First term:** fit each segment well.
- **Second term:** penalize creating too many segments.
- β is the **penalty** (pen).

This balance is crucial.

---

## What does the penalty do?

Think of opening a new segment as **paying money**.

Suppose each new segment costs → **$10**

- If splitting reduces the error by only **$2** → Not worth it. Don't split.
- If splitting reduces the error by **$50** → Definitely worth paying $10. Split.

That is exactly what pen controls.

---

## Why is brute force impossible?

Suppose:
- 100 observations
- Every position between observations could be a change point
- There are 99 possible boundaries
- Each boundary can either be chosen or not chosen

That means there are roughly:

2^{99} possible segmentations.

That's about **6.3 * 10^{29}** different ways to split the data.

Even a supercomputer cannot check them all. So a naïve exhaustive search is **impossible** for realistic datasets.

---

## So how does PELT become fast?

### Pruned

Imagine you're walking through a maze.

At one junction, you realize: *"Every path through the left tunnel is already longer than the best route I've found."*

Do you keep exploring the left tunnel? → **No.** You permanently ignore it.

That's **pruning**. PELT applies the same idea mathematically.

During optimization, it proves that some candidate change points can never lead to the best overall solution. Once that proof is made, those candidates are **discarded forever**.

---

## Penalty

- **Small penalty** → Many segments → Overfitting
- **Large penalty** → Few segments → Underfitting
- **Good penalty** → Real structural changes only

Penalty is determined by the the trial and error process.

| Model | Assumes change in... | Good for |
|-------|----------------------|----------|
| l2 | Mean (least-squares) | Continuous signals like NDVI, temperature, rainfall |
