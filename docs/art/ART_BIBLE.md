# CatichkaBeta website: Art Bible v0.1

ChatGPT owns art direction and asset production. Claude owns the site's structure, code and putting the art in. Cat reviews and approves.

## Creative direction
Black and pastel. Playful, modern flat illustration with clean shapes and a soft grain texture. Friendly and a little nerdy. The site is about friends using AI in interesting ways, and a small studio making apps and games.

**Style line to start every prompt with:**

> Style: playful modern flat illustration, clean shapes, soft grain texture, black background with soft pastel accents (lavender, mint, peach, baby blue), friendly and a little nerdy, no text unless asked.

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
