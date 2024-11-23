import { defineCollection, z } from 'astro:content';

export const collections = {
  writing: defineCollection({
    schema: z.object({
      title: z.string(),
      publishDate: z.date(),
      description: z.string(),
      tags: z.array(z.string()).default([]),
      type: z.enum(['article', 'note', 'tutorial']).default('article'),
      image: z.object({
        src: z.string(),
        alt: z.string(),
      }).optional(),
    }),
  }),
  projects: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()).default([]),
      image: z.object({
        src: z.string(),
        alt: z.string(),
      }).optional(),
      url: z.string().url().optional(),
      featured: z.boolean().default(false),
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