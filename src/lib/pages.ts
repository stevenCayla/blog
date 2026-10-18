import { getPosts, getTags, getTranslation, postPath } from './posts';
import { localePath, segments, type Locale } from '../i18n';

export interface SitePage {
  /** Path per language; a language without the page is simply absent. */
  paths: Partial<Record<Locale, string>>;
  lastmod?: Date;
}

/** Every indexable page, with its equivalent in the other language when there is one. */
export async function getSitePages(): Promise<SitePage[]> {
  const pages: SitePage[] = [
    { paths: { fr: localePath('fr', ''), en: localePath('en', '') } },
    { paths: { fr: localePath('fr', segments.blog.fr), en: localePath('en', segments.blog.en) } },
    { paths: { fr: localePath('fr', segments.about.fr), en: localePath('en', segments.about.en) } },
  ];

  for (const locale of ['fr', 'en'] as const) {
    for (const { tag } of await getTags(locale)) {
      pages.push({ paths: { [locale]: localePath(locale, segments.tags[locale], tag) } });
    }
    for (const post of await getPosts(locale)) {
      const translation = await getTranslation(post);
      // A translated pair is listed once, from the French side.
      if (translation && locale === 'en') continue;
      pages.push({
        paths: translation
          ? { fr: postPath(locale === 'fr' ? post : translation), en: postPath(locale === 'fr' ? translation : post) }
          : { [locale]: postPath(post) },
        lastmod: post.data.pubDate,
      });
    }
  }
  return pages;
}
