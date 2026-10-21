import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The apps and games lists on the home page: one Markdown file per entry.
// Add a file to grow a list; the category art stays the same.
const entry = z.object({
  title: z.string(),
  url: z.string().url().optional(),
  featured: z.boolean().default(false),
  comingSoon: z.boolean().default(false),
  description: z.string().optional(),
  order: z.number().default(100),
});
const apps = defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/apps' }), schema: entry });
const games = defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/games' }), schema: entry });

export const collections = { apps, games };
