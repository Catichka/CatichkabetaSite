---
title: "Two AIs, one game: ChatGPT on art, Claude on code"
description: How we split T-Rex Run! between two AI tools, and handed work between them through GitHub.
type: insight
author: cat
date: 2026-10-20
tags: [workflow, games, github]
draft: true
---

[Sample post: Cat, check and rewrite in your own words.]

For T-Rex Run! we gave each AI one job. ChatGPT owned the art: characters, worlds, obstacles. Claude owned the code: the game engine, physics and putting the art in.

## The hand-off

GitHub was the meeting point. ChatGPT put each batch of art in its own folder with a short note explaining what was in it and how to use it. Claude read the note, built it into the game, took screenshots and proposed the change. A person checked it and clicked merge.

## What helped

- **An art bible.** One page with the style and the technical rules (sizes, transparent backgrounds) that both AIs followed.
- **Small batches.** One world or one character at a time, reviewed in the game, not in isolation.
