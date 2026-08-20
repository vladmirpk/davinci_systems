// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const owner = process.env.GITHUB_REPOSITORY_OWNER || 'vladmirpk';
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'davinci_systems';
const isCI = process.env.GITHUB_ACTIONS === 'true';
const isUserSite = repo.toLowerCase() === `${owner}.github.io`.toLowerCase();

export default defineConfig({
  site: process.env.SITE || `https://${owner}.github.io`,
  base: process.env.BASE || (isCI && !isUserSite ? `/${repo}` : '/'),
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
