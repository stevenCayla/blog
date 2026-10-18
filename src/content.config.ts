import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const TAGS = ['ia', 'programmation', 'vie', 'outil', 'tutoriel', 'reflexion'] as const;

// Entry ids are `fr/<slug>` and `en/<slug>`: the folder gives the language.
const blog = defineCollection({
  loader: glob({ pattern: '{fr,en}/**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.enum(TAGS)),
    translationKey: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog };
