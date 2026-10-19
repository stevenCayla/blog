import { locales, type Locale } from '../i18n';
import { getSitePages } from './pages';

const SITE = import.meta.env.SITE as string;

const escape = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const abs = (path: string) => new URL(path, SITE).href;

/** One sitemap per language, each URL listing its alternates (xhtml:link). */
export async function sitemap(locale: Locale) {
  const urls = (await getSitePages())
    .filter((page) => page.paths[locale])
    .map((page) => {
      const alternates = locales
        .filter((code) => page.paths[code])
        .map((code) => `    <xhtml:link rel="alternate" hreflang="${code}" href="${escape(abs(page.paths[code]!))}"/>`);
      const xDefault = page.paths.fr ?? page.paths[locale]!;
      alternates.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${escape(abs(xDefault))}"/>`);
      const lastmod = page.lastmod ? `\n    <lastmod>${page.lastmod.toISOString().slice(0, 10)}</lastmod>` : '';
      return `  <url>\n    <loc>${escape(abs(page.paths[locale]!))}</loc>${lastmod}\n${alternates.join('\n')}\n  </url>`;
    });

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
