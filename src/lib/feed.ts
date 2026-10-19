import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { htmlLang, useUi, type Locale } from '../i18n';
import { getPosts, postPath } from './posts';

export async function feed(locale: Locale, context: Pick<APIContext, 'site'>) {
  const ui = useUi(locale);
  const posts = await getPosts(locale);
  return rss({
    title: ui.siteTitle,
    description: ui.siteDescription,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: postPath(post),
      categories: post.data.tags,
    })),
    customData: `<language>${htmlLang[locale].toLowerCase()}</language>`,
  });
}
