export const fr = {
  siteTitle: 'Steven Cayla-Maschi',
  siteDescription: 'Intelligence artificielle, programmation et réflexions sur la vie.',
  nav: { home: 'Accueil', blog: 'Blog', about: 'À propos' },
  language: { label: 'Langue', fr: 'Français', en: 'English' },
  theme: { toggle: 'Changer de thème' },
  home: {
    latest: 'Derniers articles',
    allPosts: 'Tous les articles',
    otherLanguage: (n: number) =>
      n === 0
        ? "Aucun article n'est encore disponible en anglais."
        : n === 1
          ? '1 article est disponible en anglais.'
          : `${n} articles sont disponibles en anglais.`,
    otherLanguageLink: 'Lire le blog en anglais',
  },
  blog: {
    title: 'Blog',
    description: 'Tous les articles, filtrables par thème.',
    filter: 'Filtrer par thème',
    all: 'Tous',
    empty: "Aucun article pour l'instant.",
  },
  tags: {
    title: 'Thèmes',
    postsTagged: (tag: string) => `Articles du thème « ${tag} »`,
    ia: 'IA',
    programmation: 'Programmation',
    vie: 'Vie',
    outil: 'Outil',
    tutoriel: 'Tutoriel',
    reflexion: 'Réflexion',
  },
  post: {
    readingTime: (min: number) => `${min} min de lecture`,
    translation: 'Lire cet article en anglais',
    published: 'Publié le',
    back: '← Tous les articles',
  },
  about: {
    title: 'À propos',
    description: 'Qui écrit ici, et pourquoi.',
  },
  notFound: {
    title: 'Page introuvable',
    text: "Cette page n'existe pas ou a été déplacée.",
    home: "Retour à l'accueil",
  },
  footer: { rights: 'Tous droits réservés pour le contenu. Code sous licence MIT.', rss: 'Flux RSS' },
};

export type Dictionary = typeof fr;
