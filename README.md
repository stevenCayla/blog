# Blog

Blog personnel bilingue (français / anglais) sur l'intelligence artificielle, la programmation et la vie. Construit avec [Astro](https://astro.build) et déployé sur Cloudflare Pages.

*Bilingual personal blog (French / English) about artificial intelligence, programming and life. Built with Astro and deployed on Cloudflare Pages.*

## Français

### Fonctionnement

- Français à la racine (`/`, `/blog`, `/a-propos`), anglais sous `/en/` (`/en/`, `/en/blog`, `/en/about`).
- Articles Markdown dans `src/content/blog/fr/` et `src/content/blog/en/`. Un article et sa traduction partagent le même `translationKey`. Un article sans traduction reste accessible, sans lien vers l'autre langue.
- Textes de l'interface : `src/i18n/fr.ts` et `src/i18n/en.ts`.
- SEO : `hreflang` + `x-default`, sitemap et flux RSS par langue (`/sitemap-fr.xml`, `/sitemap-en.xml`, `/rss.xml`, `/en/rss.xml`).

### Installation

Prérequis : Node.js ≥ 22.22.

```bash
npm install
npm run dev       # serveur local sur http://localhost:4321
npm run build     # vérification des types puis build statique dans dist/
npm run preview   # prévisualiser le build
```

### Frontmatter d'un article

```yaml
title: "Titre"
description: "Résumé"
pubDate: 2026-01-31
tags: [ia, programmation]   # ia, programmation, vie, outil, tutoriel, reflexion
translationKey: ma-cle      # optionnel, identique dans les deux langues
draft: false                # optionnel
```

### Déploiement (Cloudflare Pages)

1. Créer un projet Pages relié au dépôt GitHub.
2. Branche de production : `main`. Commande de build : `npm run build`. Dossier de sortie : `dist`.
3. Variable d'environnement `NODE_VERSION` = `22` (ou plus).
4. Mettre l'adresse réelle du site dans `site` (`astro.config.mjs`) et dans `public/robots.txt`.

## English

### How it works

- French at the root (`/`, `/blog`, `/a-propos`), English under `/en/` (`/en/`, `/en/blog`, `/en/about`).
- Markdown posts in `src/content/blog/fr/` and `src/content/blog/en/`. A post and its translation share the same `translationKey`. A post without translation stays reachable, with no link to the other language.
- UI strings: `src/i18n/fr.ts` and `src/i18n/en.ts`.
- SEO: `hreflang` + `x-default`, one sitemap and one RSS feed per language (`/sitemap-fr.xml`, `/sitemap-en.xml`, `/rss.xml`, `/en/rss.xml`).

### Setup

Requires Node.js ≥ 22.22.

```bash
npm install
npm run dev       # local server on http://localhost:4321
npm run build     # type check, then static build into dist/
npm run preview   # preview the build
```

### Post frontmatter

```yaml
title: "Title"
description: "Summary"
pubDate: 2026-01-31
tags: [ia, programmation]   # ia, programmation, vie, outil, tutoriel, reflexion
translationKey: my-key      # optional, same value in both languages
draft: false                # optional
```

### Deployment (Cloudflare Pages)

1. Create a Pages project linked to the GitHub repository.
2. Production branch: `main`. Build command: `npm run build`. Output directory: `dist`.
3. Environment variable `NODE_VERSION` = `22` (or higher).
4. Set the real site address in `site` (`astro.config.mjs`) and in `public/robots.txt`.

## Licence / License

Code: MIT. Content (`src/content/`): all rights reserved. See [LICENSE](LICENSE).
