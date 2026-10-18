import type { Dictionary } from './fr';

export const en: Dictionary = {
  siteTitle: 'Steven Cayla-Maschi',
  siteDescription: 'Artificial intelligence, programming and thoughts on life.',
  nav: { home: 'Home', blog: 'Blog', about: 'About' },
  language: { label: 'Language', fr: 'Français', en: 'English' },
  theme: { toggle: 'Toggle theme' },
  home: {
    latest: 'Latest posts',
    allPosts: 'All posts',
    otherLanguage: (n: number) =>
      n === 0
        ? 'No post is available in French yet.'
        : n === 1
          ? '1 post is available in French.'
          : `${n} posts are available in French.`,
    otherLanguageLink: 'Read the blog in French',
  },
  blog: {
    title: 'Blog',
    description: 'All posts, filterable by topic.',
    filter: 'Filter by topic',
    all: 'All',
    empty: 'No posts yet.',
  },
  tags: {
    title: 'Topics',
    postsTagged: (tag: string) => `Posts tagged “${tag}”`,
    ia: 'AI',
    programmation: 'Programming',
    vie: 'Life',
    outil: 'Tool',
    tutoriel: 'Tutorial',
    reflexion: 'Reflection',
  },
  post: {
    readingTime: (min: number) => `${min} min read`,
    translation: 'Read this post in French',
    published: 'Published on',
    back: '← All posts',
  },
  about: {
    title: 'About',
    description: 'Who writes here, and why.',
  },
  notFound: {
    title: 'Page not found',
    text: 'This page does not exist or has been moved.',
    home: 'Back to home',
  },
  footer: { rights: 'All rights reserved for the content. Code under the MIT license.', rss: 'RSS feed' },
};
