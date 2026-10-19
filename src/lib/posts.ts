import { getCollection, type CollectionEntry } from 'astro:content';
import { localePath, segments, type Locale } from '../i18n';

export type Post = CollectionEntry<'blog'>;

export function postLocale(post: Post): Locale {
  return post.id.split('/')[0] as Locale;
}

export function postSlug(post: Post): string {
  return post.id.split('/').slice(1).join('/');
}

export function postPath(post: Post): string {
  return localePath(postLocale(post), segments.blog[postLocale(post)], postSlug(post));
}

async function allPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getPosts(locale: Locale): Promise<Post[]> {
  return (await allPosts()).filter((post) => postLocale(post) === locale);
}

/** The same article in the other language, only when `translationKey` matches. */
export async function getTranslation(post: Post): Promise<Post | undefined> {
  const key = post.data.translationKey;
  if (!key) return undefined;
  const locale = postLocale(post);
  return (await allPosts()).find(
    (candidate) => postLocale(candidate) !== locale && candidate.data.translationKey === key,
  );
}

export async function getTags(locale: Locale): Promise<{ tag: string; count: number }[]> {
  const counts = new Map<string, number>();
  for (const post of await getPosts(locale)) {
    for (const tag of post.data.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }
  return [...counts].map(([tag, count]) => ({ tag, count })).sort((a, b) => a.tag.localeCompare(b.tag));
}

export function readingTime(body: string | undefined): number {
  const words = (body ?? '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}
