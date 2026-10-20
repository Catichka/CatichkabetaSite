# CatichkaBeta site

The website for catichkabeta.com: a place for friends using AI in interesting ways to share insights, ideas and code, and home of the apps and games CatichkaBeta makes.

Built with [Astro](https://astro.build), which turns Markdown text files into web pages, and published to GitHub Pages whenever `main` changes.

## Where things live
| To change… | Edit |
| --- | --- |
| A post | `src/content/posts/<name>.md` (one file per post) |
| A person | `src/content/people/<name>.md` (the file name is what posts use as `author`) |
| A project | `src/content/projects/<name>.md` |
| Site name, tagline, email, art | `src/site.ts` |
| Colours and fonts | `src/styles/global.css` |
| Pages (About, Contribute, Privacy…) | `src/pages/` |
| Art from ChatGPT | `docs/art/` (see `ASSET_LIST.md` and `ART_BIBLE.md`) |

## Adding a post
Create `src/content/posts/my-post.md`:

```markdown
---
title: Your title
description: One sentence on what this is about.
type: insight   # insight, idea or code
author: cat     # a file name from src/content/people/
date: 2026-10-20
tags: [prompting]
draft: false    # true hides it from the live site
---

Your post, in Markdown.
```

## Running it on your computer (optional)
Needs [Node.js](https://nodejs.org) 22 or newer.

```sh
npm install
npm run dev     # preview at http://localhost:4321
npm run build   # build the finished site into dist/
```
