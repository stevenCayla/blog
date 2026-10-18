import { fr, type Dictionary } from './fr';
import { en } from './en';

export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

const dictionaries: Record<Locale, Dictionary> = { fr, en };

export const htmlLang: Record<Locale, string> = { fr: 'fr-FR', en: 'en-US' };
export const ogLocale: Record<Locale, string> = { fr: 'fr_FR', en: 'en_US' };

// Path segments that differ from one language to the other.
export const segments = {
  blog: { fr: 'blog', en: 'blog' },
  tags: { fr: 'tags', en: 'tags' },
  about: { fr: 'a-propos', en: 'about' },
} as const;

export function useUi(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'fr' ? 'en' : 'fr';
}

export function isLocale(value: string | undefined): value is Locale {
  return value === 'fr' || value === 'en';
}

/** Absolute path (no trailing slash) of a page, e.g. localePath('en', 'blog') -> /en/blog. */
export function localePath(locale: Locale, ...parts: string[]): string {
  const rest = parts.filter(Boolean).join('/');
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  return `${prefix}/${rest}`.replace(/\/$/, '') || '/';
}

export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(htmlLang[locale], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
