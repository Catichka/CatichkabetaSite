// Site-wide settings. Art comes from ChatGPT's approved handoff in docs/art/approved-handoff/.
export const site = {
  name: 'CatichkaBeta',
  description: 'imagination meets tools. Apps, games and notes from the rabbit hole.',
};

// Links with no destination yet render as dead (visible, not clickable). Set an href to bring one to life.
export const links = {
  connect: null as string | null, // its own connect page, not designed yet
  humans: null as string | null, // its own "Meet the humans" page, not designed yet
};

export const nav = [
  { href: '/#apps', label: 'apps' },
  { href: '/#games', label: 'games' },
  { href: '/blog/', label: 'blog' },
  { href: links.connect, label: 'connect' },
];

export const art = {
  druid: '/art/druid-small.png',
  heroTree: '/art/hero-tree.png',
  apps: '/art/apps.png',
  games: '/art/games.png',
  blog: '/art/blog.png',
  shareImage: null as string | null, // 1200x630 PNG link preview, still to come from ChatGPT
};

export const postTypes = {
  insight: { single: 'Insight' },
  idea: { single: 'Idea' },
  code: { single: 'Code' },
} as const;

export type PostType = keyof typeof postTypes;
