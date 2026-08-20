# Davinci Systems website

Marketing site for Davinci Systems — a Harare software studio. Built with [Astro](https://astro.build) so it compiles to static HTML and can be hosted **for free on GitHub Pages**.

## Local development

Requires Node.js 22.12+.

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (usually `http://localhost:4321/`).

```bash
npm run build
npm run preview
```

## Deploy on GitHub Pages

1. Create a GitHub repository and push this project to the `main` branch.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds the site and publishes it.

The site URL will be:

- This repo: `https://vladmirpk.github.io/davinci_systems/`

Locally the site is served from `/`. In GitHub Actions, `BASE` is set automatically from the repository name.

## Content you will want to edit

| What | Where |
| --- | --- |
| Phone, email, address, social links | `src/data/site.ts` |
| Solutions, industries, process, case studies | `src/data/site.ts` |
| Insights / blog posts | `src/content/resources/*.md` |
| Brand colours | `src/styles/global.css` |

The contact form opens the visitor’s email client (`mailto:`) after validation so it works on GitHub Pages with no server. To receive submissions in a dashboard later, point the form at [Formspree](https://formspree.io) or a similar endpoint.

## Stack

- Astro 7 (static output)
- Tailwind CSS 4
- GitHub Actions → GitHub Pages
