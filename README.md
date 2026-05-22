# Tejeshwar | Dev — Portfolio

A modern, responsive single-page portfolio built with **React**, **Vite**, and **Tailwind CSS**.

## Features

- Premium dark mode (default) with light mode toggle
- Glassmorphism UI, scroll reveal animations, hover scaling
- Sections: Hero, About, Education, Skills, Projects, Contact
- Fully responsive (mobile, tablet, desktop)

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build & Deploy

```bash
npm run build
npm run preview
```

Deploy the `dist` folder to **Vercel**, **Netlify**, or **GitHub Pages**.

### GitHub Pages (recommended)

1. Push this repo to `Tejeshwar-codeio/tejeshwar-Portfolio` on GitHub.
2. In repo **Settings → Pages**, set source to **GitHub Actions**.
3. Push to `main` — the workflow deploys automatically to  
   `https://tejeshwar-codeio.github.io/tejeshwar-Portfolio/`

### Vercel

1. Push this repo to GitHub.
2. Import the project on [vercel.com](https://vercel.com).
3. Framework preset: **Vite** — set base to `/` in `vite.config.js` for root deploy.

## Customize

Edit `src/data/content.js` for:

- Project links, descriptions, and tags
- Social URLs and email
- Skill categories and hero badges

## Tech Stack

- React 19
- Vite 6
- Tailwind CSS 3
- Inter (Google Fonts)
