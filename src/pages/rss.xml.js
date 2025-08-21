import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('writing');
  const isDevelopment = import.meta.env.DEV;
  const filteredPosts = posts.filter(post => isDevelopment || !post.data.draft);
  const sortedPosts = filteredPosts.sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());

  return rss({
    title: 'Dylan Isaac - Writing',
    description: 'Essays on AI, accessibility, systems thinking, and building technology that adapts to human needs',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      link: `/writing/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}