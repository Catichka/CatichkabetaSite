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

// The apps and games CatichkaBeta makes.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(['idea', 'in progress', 'playable', 'released']),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
  }),
});

export const collections = { posts, people, projects };
