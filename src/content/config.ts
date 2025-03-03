import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    image: z.string(),
    author: z.string(),
    category: z.string(),
  }),
});

export const collections = {
  'blog': blog,
};