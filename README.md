# CatichkaBeta site

The website for catichkabeta.com: imagination meets tools. Apps and games from CatichkaBeta; the blog lives on Substack.

Built with [Astro](https://astro.build), which turns Markdown text files into web pages, and published to GitHub Pages whenever `main` changes.

## Where things live
| To change… | Edit |
| --- | --- |
| An app or game in the home page lists | `src/content/apps/<name>.md` or `src/content/games/<name>.md` (title, url, featured, order) |
| Navigation, the blog link (Cat's Substack), dead links, art paths | `src/site.ts` |
| Colours and fonts | `src/styles/global.css` |
| Pages | `src/pages/` |
| Art from ChatGPT | `docs/art/` (the approved handoff, `ART_BIBLE.md` and `ASSET_LIST.md`) |

## Adding an app or game
Create `src/content/games/my-game.md`:

```markdown
---
title: My Game
url: https://mygame.catichkabeta.com   # leave out to show a dead link
featured: false
order: 2
---
```

## Running it on your computer (optional)
Needs [Node.js](https://nodejs.org) 22 or newer.

```sh
npm install
npm run dev     # preview at http://localhost:4321
npm run build   # build the finished site into dist/
```
