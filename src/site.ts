// Site-wide settings and the art slots ChatGPT fills in.
// When a piece of art arrives, put it in public/art/ and set its path here.
// While a slot is null the site shows a drawn placeholder instead.
export const site = {
  name: 'CatichkaBeta',
  tagline: 'Friends using AI in interesting ways, sharing what works.',
  email: 'hello@catichkabeta.com',
};

export const art = {
  logo: null as string | null, // square transparent PNG, e.g. '/art/logo.png'
  wordmark: null as string | null, // wide transparent PNG
  hero: null as string | null, // about 1600x900
  icons: {
    insight: null as string | null,
    idea: null as string | null,
    code: null as string | null,
  },
  avatar: null as string | null, // placeholder avatar for people without a photo
  notFound: null as string | null, // 404 illustration
  shareImage: null as string | null, // 1200x630 PNG link preview (social sites don't show SVG)
};

export const postTypes = {
  insight: { label: 'Insights', single: 'Insight', path: '/insights/', emoji: '✦', blurb: 'What we learned: workflows, write-ups and lessons from using AI for real.' },
  idea: { label: 'Ideas', single: 'Idea', path: '/ideas/', emoji: '◐', blurb: 'Half-formed ideas, prompts and experiments worth trying.' },
  code: { label: 'Code', single: 'Code', path: '/code/', emoji: '</>', blurb: 'Snippets, tools and repos you can copy and use.' },
} as const;

export type PostType = keyof typeof postTypes;
