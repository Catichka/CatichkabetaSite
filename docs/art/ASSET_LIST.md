# Art needed, and how to hand it over

## How to hand art to Claude
Same as T-Rex Run!:
1. Put each batch in its own folder: `docs/art/<name>-v01/` (e.g. `docs/art/logo-v01/`).
2. Add a short `CLAUDE_HANDOFF.md` in that folder: what each file is, which slot below it fills, and anything to watch for.
3. Commit on a branch and open a pull request, or give the files to Cat to upload in the Claude thread.

Claude then copies approved files to `public/art/`, sets the slot in `src/site.ts`, checks it on the site at desktop and phone sizes, and opens a pull request with screenshots.

## The list
| # | Slot in `src/site.ts` | Asset | Size and format | Priority |
| --- | --- | --- | --- | --- |
| 1 | `logo` | Logo mark: a cat silhouette combined with β | Square, transparent PNG | First |
| 2 | `wordmark` | "CatichkaBeta" next to the logo mark, light version for the black header | Wide, transparent PNG | First |
| 3 | favicon | Logo mark in pastel on a black rounded square, bold enough for 16px | 1024×1024 PNG | First |
| 4 | `hero` | A character piece that floats in front of the 3D scene on the home page: a friendly cat with a laptop or game controller, pastel neon rim light | Transparent PNG, about 1000px tall | Next (the 3D scene works without it) |
| 5 | `icons.insight`, `icons.idea`, `icons.code` | Matching icon set: notebook with sparkle, lightbulb, `</>` brackets | Square, transparent PNG each | Next |
| 6 | `shareImage` | Link preview card: wordmark centred, floating pastel icons | 1200×630 PNG | Next |
| 7 | `avatar` | Placeholder avatar: a cat face in a circle | Square, transparent PNG | Later |
| 8 | `notFound` | Confused cat at a broken screen showing β, for the 404 page | About 800×600 | Later |
| 9 | (background) | Subtle tileable pattern: code brackets, stars, paw prints, very low contrast | Tileable square | Optional |

Full prompts are in the website plan doc.
