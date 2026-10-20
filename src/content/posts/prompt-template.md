---
title: A reusable prompt for consistent AI art
description: Keep every image in the same style by starting each prompt with one fixed style line.
type: code
author: cat
date: 2026-10-20
tags: [prompting, art]
draft: true
---

[Sample post showing how code blocks look.]

Save the style once, then build every prompt from it:

```python
STYLE = (
    "Style: playful modern flat illustration, clean shapes, soft grain, "
    "black background with soft pastel accents (lavender, mint, peach, baby blue)."
)

def art_prompt(subject: str, size: str = "square, transparent background") -> str:
    return f"{STYLE}\n\n{subject}\n\nFormat: {size}."

print(art_prompt("A friendly cat sitting on a laptop"))
```
