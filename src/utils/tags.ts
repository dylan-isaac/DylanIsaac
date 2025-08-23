import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');
}

export function normalizeTag(tag: string): string {
  return tag
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export async function getAllUniqueTags(): Promise<Map<string, number>> {
  const posts = await getCollection('writing');
  const isDevelopment = import.meta.env.DEV;
  const filteredPosts = posts.filter(post => isDevelopment || !post.data.draft);
  
  const tagCounts = new Map<string, number>();
  
  filteredPosts.forEach(post => {
    post.data.tags?.forEach(tag => {
      const currentCount = tagCounts.get(tag) || 0;
      tagCounts.set(tag, currentCount + 1);
    });
  });
  
  return new Map([...tagCounts.entries()].sort((a, b) => b[1] - a[1]));
}

export async function getPostsByTag(tag: string): Promise<CollectionEntry<'writing'>[]> {
  const posts = await getCollection('writing');
  const isDevelopment = import.meta.env.DEV;
  
  return posts
    .filter(post => (isDevelopment || !post.data.draft) && post.data.tags?.includes(tag))
    .sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());
}

export async function getRelatedTags(tag: string): Promise<Map<string, number>> {
  const postsWithTag = await getPostsByTag(tag);
  const relatedTags = new Map<string, number>();
  
  postsWithTag.forEach(post => {
    post.data.tags?.forEach(relatedTag => {
      if (relatedTag !== tag) {
        const currentCount = relatedTags.get(relatedTag) || 0;
        relatedTags.set(relatedTag, currentCount + 1);
      }
    });
  });
  
  return new Map([...relatedTags.entries()].sort((a, b) => b[1] - a[1]));
}

export function getTagColor(index: number): string {
  const colors = ['primary', 'secondary', 'accent'];
  return colors[index % colors.length];
}

export async function getDefinitionsByTag(tag: string): Promise<CollectionEntry<'definitions'>[]> {
  const definitions = await getCollection('definitions');
  
  return definitions
    .filter(def => def.data.tags?.includes(tag))
    .sort((a, b) => a.data.term.localeCompare(b.data.term));
}

export async function getAllTagsWithContent(): Promise<Map<string, { posts: CollectionEntry<'writing'>[], definitions: CollectionEntry<'definitions'>[] }>> {
  const posts = await getCollection('writing');
  const definitions = await getCollection('definitions');
  const isDevelopment = import.meta.env.DEV;
  const filteredPosts = posts.filter(post => isDevelopment || !post.data.draft);
  
  const tagContent = new Map<string, { posts: CollectionEntry<'writing'>[], definitions: CollectionEntry<'definitions'>[] }>();
  
  // Add posts to tags
  filteredPosts.forEach(post => {
    post.data.tags?.forEach(tag => {
      if (!tagContent.has(tag)) {
        tagContent.set(tag, { posts: [], definitions: [] });
      }
      tagContent.get(tag)!.posts.push(post);
    });
  });
  
  // Add definitions to tags
  definitions.forEach(def => {
    def.data.tags?.forEach(tag => {
      if (!tagContent.has(tag)) {
        tagContent.set(tag, { posts: [], definitions: [] });
      }
      tagContent.get(tag)!.definitions.push(def);
    });
  });
  
  return tagContent;
}