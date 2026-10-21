# Connect page — approved design for Claude

Catherine approved the enclosed mockup exactly: “yeah thats super cute actually. Lets do exactly that”. Build a separate `/connect/` page from `references/connect-approved.png`. ChatGPT owns art/design, Claude owns code/integration. This PR supplies the design and brief; it does not implement or deploy the page.

## Exact content

- Eyebrow: `SAY HELLO`
- H1: `let’s connect`
- Body: `Have an idea, a question, or something curious to share? Say hello.`
- Main action: envelope icon, visible `connect@catichkabeta.com`, arrow. Link: `mailto:connect@catichkabeta.com`.
- Social intro: `You can also find me here`
- Social labels in order: `LinkedIn`, `Instagram`, `Twitter / X`, each with its icon and small outbound arrow.

## User-supplied destinations — use exactly

| Link | Destination |
| --- | --- |
| Email | mailto:connect@catichkabeta.com |
| LinkedIn | https://www.linkedin.com/in/catherinecampbell-/ |
| Instagram | https://www.instagram.com/catichkasphilosophyforlife/ |
| Twitter / X | https://x.com/catichka |

These destinations were supplied directly by Catherine; no additional profile verification is needed to implement the links. Keep Twitter/X as a secondary link alongside the other socials, with no claim of regular posting.

## Layout and artwork

Match the approved mockup: existing druid/wordmark header and footer, thin lavender dividers with leaf endpoints, existing lowercase apps · games · blog · connect navigation. Mark Connect as current with a subtle mint colour and `aria-current="page"`. Point Connect in both global nav locations to the new page; preserve existing other destinations, with Apps/Games targeting homepage anchors.

Main section: spacious two columns. Text and outlined email action on the left, social links below. Right: two pastel outline speech bubbles (lavender three dots, mint heart) joined by an organic circuit stem with two leaves, plus sparse tiny accents. Preserve the approved illustration. Use existing approved druid and wordmark assets, not a new character redraw.

Palette: background #0b0b10, lavender #c9b8ff, mint #a6f0d2, peach #ffc9a8, baby blue #a8d6ff, pink #ffb8d8, text #f3f0fa. Match the site's existing font; the generated mockup may drift in saturation, so use approved tokens.

The PNG is a design reference, not the page implementation. Text, email and social links must be real accessible HTML. Extract only the right-side decorative illustration if needed, without embedded page text or navigation; do not use a full-page image as the website. Contact email is visible text as well as a working mailto link. Use accessible vector icons for socials; text labels remain visible. Treat illustration and repeated icon artwork as decorative.

## Responsive behaviour and checks

On mobile, retain readable text first, email second, socials third; place illustration below or scale tastefully. Wrap the email address/action and social row without overflow. Keep generous spacing, comfortable tap targets, visible focus and adequate contrast. Preserve full illustration without clipping. Reuse site-wide responsive navigation/footer. Check at desktop and 390px phone width, all four destinations, keyboard navigation and current nav state.

No form, newsletter, embedded social feeds, new tracking, additional sections or content are approved. Keep the homepage composition intact; Connect remains a separate page linked from header/footer. Show Catherine the actual rendered page before publishing. No DNS or certificate changes are part of this handoff.
