import { defineCollection, z } from 'astro:content';

export const collections = {
  writing: defineCollection({
    schema: z.object({
      title: z.string(),
      publishDate: z.date(),
      isBestOf: z.boolean().default(false),
      description: z.string(),
    }),
  }),
  projects: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      image: z.string(),
      url: z.string().url(),
    }),
  }),
  artifacts: defineCollection({
    schema: z.object({
      title: z.string(),
      type: z.enum(['image', 'audio', 'video', 'link']),
      content: z.string(),
    }),
  }),
}; 