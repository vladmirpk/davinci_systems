import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(['Insight', 'Case Study', 'Whitepaper']),
    readingTime: z.string(),
  }),
});

export const collections = { resources };
