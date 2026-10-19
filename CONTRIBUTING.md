# Contributing

## Branches

```text
main (production, Cloudflare Pages)
└── develop (integration)
    ├── feature/*
    └── hotfix/*
```

- `main` is production: every merge into `main` is deployed by Cloudflare Pages.
- `develop` is the integration branch.
- Work happens on `feature/<topic>` or `hotfix/<topic>`, created from `develop`.
- A feature or hotfix branch is merged into `develop` through a pull request. Never commit directly to `main` or `develop`.
- Only `develop` is merged into `main`, through a pull request `develop` → `main`. Use a merge commit and keep `develop` (do not delete it).

## Commits and pull requests

- Conventional Commits in English: `type(scope): summary (#issue)`, for example `feat(i18n): add language switcher`.
- Pull request body in English, with `Refs #<issue>`.
- Keep pull requests small and focused.

## Before opening a pull request

```bash
npm install
npm run build   # type check + static build; must pass
```

## Writing a post

- Add the file to `src/content/blog/fr/` or `src/content/blog/en/`; the file name is the URL slug.
- Fill in the frontmatter (see the README). Use the same `translationKey` in both languages to link a post to its translation.
- Set `draft: true` to keep a post out of the production build.
