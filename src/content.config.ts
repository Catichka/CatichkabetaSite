import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One Markdown file per post. `type` decides which section it appears in.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(['insight', 'idea', 'code']),
    author: reference('people'),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// One Markdown file per contributor. The file name is their id, used as `author` in posts.
const people = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/people' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    avatar: z.string().optional(),
    founder: z.boolean().default(false),
    links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
  }),
});

// The apps and games lists on the home page: one Markdown file per entry.
// Add a file to grow a list; the category art stays the same.
const entry = z.object({
  title: z.string(),
  url: z.string().url().optional(),
  featured: z.boolean().default(false),
  description: z.string().optional(),
  order: z.number().default(100),
});
const apps = defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/apps' }), schema: entry });
const games = defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/games' }), schema: entry });

export const collections = { posts, people, apps, games };
