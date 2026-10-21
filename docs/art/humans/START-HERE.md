# Meet the Humans — approved design and Claude build handoff

Catherine approved `references/meet-the-humans-approved.png`, including the final intermediate warm-orange avatar grade (“yeah I like thst”). Build this as a real responsive page, using the existing site architecture. ChatGPT owns art direction; Claude owns implementation, tests and deployment. This PR is a design handoff, not implemented page code.

## Exact approved text

Page heading: `meet the humans`

Profile name: `Catherine Campbell`

Alias: `aka Catichka` — italic, lavender, beneath the name as shown.

Catherine is passionate about innovation and collaboration across industries. She has spent 15 years working closely with small and digital businesses, gaming publishers, government, and telecommunications. An Honorary Industry Fellow at UTS, she writes on AI governance, roadmaps, capability and responsible output.

She also delivers talks, seminars and workshops on ethical and responsible uses of AI—and how to use these tools without sacrificing your soul.

Action below biography: `Let’s connect ↗`, targeting the verified existing Connect route (or the route added by the Connect handoff in #4). This is an internal link; use the site's normal internal-link behaviour.

The initial bio came from Catherine's GCAP speaker profile at https://registration.crowdcomms.com/gcap2026/speakers and was edited and explicitly approved by her in this conversation. The text above is the final source of truth; do not silently revert to the conference wording or replace it with LinkedIn copy.

## People and future growth

Catherine explicitly says there WILL be more humans, but they are not ready yet. Keep the plural heading. Render only Catherine now; no empty cards, anonymous silhouettes, invented team members or coming-soon placeholders. Store profiles as an extensible data list/collection, so adding a person does not require redesigning the page. Do not publish existing sample people from the skeleton.

## Layout and visual treatment

Match the approved full-page mockup: existing header and footer with the druid/wordmark and lowercase apps · games · blog · connect navigation, thin lavender dividers with leaf endpoints, near-black background. Spacious two-column profile, rounded-square avatar on left and readable name/bio/action on right. Reuse existing fonts, approved druid assets and site colour tokens.

The mockup carries over a mint Connect nav colour from the prior design. That is not an active-page requirement: on this page, Connect must not receive aria-current or a false active state. Keep actual navigation semantics correct.

## Avatar — essential constraints

The image is Catherine's EverQuest II character DEAD AT THE BOTTOM OF A LAVA PIT. BOTH the character and surrounding lava must remain visible together; without the lava the image loses its context. Preserve the pose and framing, not a tight face crop, circular crop, new portrait, revived character or pastel character redraw.

The final approved colour is BETWEEN the original bright orange and the darker muted-rust option A: warm soft burnt orange, quiet enough for this page, with visible amber lava. The pastel-peach option B was NOT selected. Use the final mockup as the colour reference.

Included `references/avatar-framed-source.png` is the earlier full-resolution framed avatar source, BEFORE the final orange reduction. It is a generated compositing reference based on Catherine's uploaded screenshot, not a claim to be the untouched original screenshot. Do not deploy this brighter source unchanged. Match the final avatar grade from the approved mockup; extract the approved avatar from the mockup or apply a deterministic colour grade to the framed source. No AI redraw is needed. Avoid doubling the lavender border if applying a CSS border to an already-framed image. Optimize the delivery image and preserve the full composition.

Suggested alt: `Catichka’s EverQuest II character at the bottom of a lava pit.`

## Implementation and validation

- Use the existing humans route if established; otherwise create an appropriate route and set the homepage “Meet the humans” link in src/site.ts to it.
- Keep text as accessible real HTML; the full-page PNG is a visual reference, not a page asset to display instead of HTML.
- Use semantic headings, visible keyboard focus and readable paragraph widths.
- On phones stack avatar/name/bio coherently; keep full avatar context and avoid horizontal overflow. Check desktop and 390px phone widths.
- Verify homepage button, profile action, and header/footer links. No extra biography, captions, social rows, forms or sections were approved.
- Show Catherine a real rendered preview before publishing. This handoff does not authorize changes to DNS or certificate settings.

## Files and provenance

- `references/meet-the-humans-approved.png`: final approved page composition and colour reference.
- `references/avatar-framed-source.png`: earlier brighter avatar source, useful for export/colour grading.
- Both images were made with the built-in image generation tool and visually reviewed in conversation.
- Uploaded file bytes verified against local Git blob hashes.
