// Site-wide settings. Art comes from ChatGPT's approved handoff in docs/art/approved-handoff/.
export const site = {
  name: 'CatichkaBeta',
  description: 'imagination meets tools. Apps, games and notes from the rabbit hole.',
};

// Links with no destination yet render as dead (visible, not clickable). Set an href to bring one to life.
export const links = {
  blog: 'https://substack.com/@ca7ichka', // Cat's Substack
  connect: '/connect/' as string | null,
  humans: null as string | null, // its own "Meet the humans" page, not designed yet
};

export const contact = {
  email: 'connect@catichkabeta.com',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/catherinecampbell-/', icon: 'linkedin' },
    { label: 'Instagram', href: 'https://www.instagram.com/catichkasphilosophyforlife/', icon: 'instagram' },
    { label: 'Twitter / X', href: 'https://x.com/catichka', icon: 'x' },
  ],
};

export const nav = [
  { href: '/#apps', label: 'apps' },
  { href: '/#games', label: 'games' },
  { href: links.blog, label: 'blog' },
  { href: links.connect, label: 'connect' },
];

export const art = {
  druid: '/art/druid-small.png',
  heroTree: '/art/hero-tree.png',
  connect: '/art/connect.png',
  apps: '/art/apps.png',
  games: '/art/games.png',
  blog: '/art/blog.png',
  shareImage: null as string | null, // 1200x630 PNG link preview, still to come from ChatGPT
};
