# CatichkaBeta website: Art Bible v0.1

ChatGPT owns art direction and asset production. Claude owns the site's structure, code and putting the art in. Cat reviews and approves.

## Creative direction
Black and pastel, with a gaming, soft-cyberpunk feel: pastel neon glows on black, faint grids, wireframe shapes. Playful rather than gritty: friendly and a little nerdy. The home page has a live 3D wireframe knot in a cloud of pastel particles, so art should sit comfortably next to it. The site is about friends using AI in interesting ways, and a small studio making apps and games.

**Style line to start every prompt with:**

> Style: playful soft-cyberpunk illustration, clean shapes, pastel neon glow (lavender, mint, peach, baby blue, pink) on a near-black background, subtle grid and wireframe details, friendly and a little nerdy, not gritty, no text unless asked.

## Palette (from `src/styles/global.css`)
| Name | Hex | Used for |
| --- | --- | --- |
| Background | `#0b0b10` | Page background |
| Surface | `#15151d` | Cards |
| Text | `#f3f0fa` | Body text |
| Lavender | `#c9b8ff` | Links, buttons, "Insight" |
| Mint | `#a6f0d2` | Hover, "Code" |
| Peach | `#ffc9a8` | "Idea" |
| Baby blue | `#a8d6ff` | Project status |
| Pink | `#ffb8d8` | Spare accent |

## Technical rules
- PNG, largest size available. Transparent background wherever the list says so.
- Art sits on a near-black page: avoid thin dark lines that disappear, and check edges of transparent images for white halos.
- No text baked into illustrations, except the wordmark.
- File names: lowercase with hyphens, e.g. `logo.png`, `icon-code.png`.
