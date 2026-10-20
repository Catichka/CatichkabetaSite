# CatichkaBeta — approved design handoff for Claude

Build the site from the enclosed approved visual references. ChatGPT owns art direction, Claude owns code and integration, Catherine reviews and approves. Do not replace the approved art with generic generated substitutes.

## Domain and hosting

Domain: catichkabeta.com. Catherine says it is a Squarespace domain. This establishes the domain provider, not whether the website must use Squarespace hosting or its page builder. Inspect the existing project and confirm its hosting arrangement before choosing implementation. Build and preview first. Record any required domain connection steps; do not change DNS or publish as part of this handoff. Preserve existing email-related DNS records. No domain transfer is requested.

## Source of truth

`references/01-approved-full-page.png` is the final approved overall composition. Earlier dedicated references give larger views of the logo and hero. In any conflict, the final page and decisions in this brief win.

These PNGs are raster design references, NOT an implemented website or a set of isolated production assets. All text, navigation, project rows and buttons must be real accessible HTML. Do not use a full-page image as the site. Extract faithful illustration assets from the references or request isolated art from ChatGPT if necessary. Do not silently redraw the druid, woman or tree into a different style. No editable SVG master is included.

## Visual direction

Friendly, playful, slightly nerdy soft cyberpunk: near-black, flat 2D pastel contour illustrations, gentle glow, generous negative space. Organic circuit sprouts link nature and technology. Keep decoration restrained; the busier technology-tree variation was rejected.

| Token | Colour |
| --- | --- |
| Background | #0b0b10 |
| Lavender | #c9b8ff |
| Mint | #a6f0d2 |
| Peach | #ffc9a8 |
| Baby blue | #a8d6ff |
| Pink | #ffb8d8 |
| Main text | #f3f0fa |

Use these exact colours in code; generated references can drift brighter. Clean friendly sans-serif throughout. Do not use the serif type from the early section-only concept. Choose an available close match, keep one family, and tune weight/spacing to the final reference.

## Page order and exact content

### Header

Small approved druid outline followed by `CatichkaBeta`; Beta lavender. The druid is Catherine's old university comic character: tall rounded hood, empty face opening, broad raised drooping sleeves, rounded robe hem. Simple lavender monoline, flat 2D. No cat, eyes, staff, clasp or added character details.

Navigation, in order and lowercase: `apps` · `games` · `blog` · `connect`.

### Hero

Headline exactly `imagination meets tools`, lowercase, two lines: lavender `imagination`, mint `meets tools`.

No supporting tagline. The former sentence about three friends was explicitly removed.

Buttons: `Explore the playground` and `Meet the humans`.

Right: approved long-haired lavender outline woman in a knee-length dress, standing and touching a mint tree. Small peach hand/arm accent. Calm technology tree: three widely spaced canopy cogs, a few flowing circuit wires, sparse natural leaves. Two tiny ground sprouts: a gear flower and a circuit sprout. Minimal sparkles. Preserve the approved pose and organic silhouette. No knot and no elaborate dense technology canopy.

### Apps

Generic category illustration on LEFT: three pastel application windows joined by a flowing circuit/leaf stem. Content on RIGHT.

- Heading: `Apps`
- Copy: `Tools for everyday life.`
- First list entry: `Family Outpost 32`
- Small badge: `FEATURED`
- Action: `Explore app`

### Games

Content on LEFT, generic controller/platform illustration on RIGHT.

- Heading: `Games`
- Copy: `Little worlds to play in.`
- First list entry: `The T-Rex Game`
- Small badge: `FEATURED`
- Action: `Play game`

Keep generic category artwork distinct from individual projects. Do not invent a dinosaur thumbnail or game screenshot. If actual game imagery is later needed, use the real game's assets.

### Blog

Generic open notebook with a circuit sprout on LEFT, content on RIGHT.

- Heading: `Blog`
- Copy: `Ideas, discoveries and notes from the rabbit hole.`
- Action: `Explore the blog`

No fabricated posts, authors or dates.

### Footer

Mirror the header: druid and CatichkaBeta left, lowercase `apps` · `games` · `blog` · `connect` right, thin lavender divider. There is NO standalone Connect section, Get in touch panel or additional footer promotion. Connect exists as a link in the top and bottom navigation only.

## Behaviour and content model

Apps and games are expandable lists, initially one real entry each. Keep category illustrations stable as projects are added. Use separate data collections/arrays for project title, URL, featured status, and optional future description. No fake coming-soon entries.

Suggested navigation: apps and games jump to their sections. Blog may jump to its panel or open an established blog destination; use the existing site architecture. Final destinations for Family Outpost 32, The T-Rex Game, blog, connect and Meet the humans have NOT been supplied in this conversation. Reuse verified existing routes if present; otherwise flag them as outstanding rather than inventing external URLs. Explore the playground can jump to Apps as the start of the project catalogue. Connect should open an agreed contact destination, not a new homepage section. No forms, newsletter, analytics or account features have been requested.

## Responsive and accessible build

Desktop uses the approved alternating two-column composition. The tall reference is a complete page overview, not a requirement to squeeze all content into one viewport. On mobile, stack each section with consistent reading order, scale the hero illustration without cropping the woman/tree, and wrap project rows and buttons. Keep links comfortably tappable and navigation usable at narrow widths. Avoid horizontal scroll. Keep text as text, use semantic headings, visible keyboard focus and adequate contrast. Decorative art should not create redundant screen-reader content. Honour reduced motion if adding subtle animation; motion is optional, not approved as a required feature.

## Review checklist

- Header/footer navigation match and include blog.
- No cat logo, knot, supporting hero tagline, or standalone Connect panel.
- Approved druid character and calm tree preserved.
- Exact project names and copy used; no invented functionality or claims.
- Lists can grow without changing category art.
- Mobile and desktop previews checked; links and keyboard navigation verified.
- Show Catherine a real rendered preview before publishing. Report outstanding destinations and deployment assumptions explicitly.

## Mandatory line for any future image prompt

Playful soft-cyberpunk illustration, clean shapes, pastel neon glow (lavender, mint, peach, baby blue, pink) on a near-black background, subtle grid and wireframe details, friendly and a little nerdy, not gritty, no text unless asked.

Start every image prompt with that line verbatim. For the approved druid, preserve the stricter flat simple monoline treatment even though the general style line mentions glow.
