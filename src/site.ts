// Site-wide settings. Art comes from ChatGPT's approved handoff in docs/art/approved-handoff/.
export const site = {
  name: 'CatichkaBeta',
  description: 'imagination meets tools. Apps, games and notes from the rabbit hole.',
  // Where "connect" goes. Not agreed yet: confirm the address before launch.
  connect: 'mailto:hello@catichkabeta.com',
};

export const nav = [
  { href: '/#apps', label: 'apps' },
  { href: '/#games', label: 'games' },
  { href: '/blog/', label: 'blog' },
  { href: site.connect, label: 'connect' },
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
