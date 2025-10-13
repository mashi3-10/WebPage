
# WebPage (Vite + React)

Minimal Vite + React starter configured for GitHub Pages deployment.

## Local development

```powershell
# install dependencies
npm install

# start dev server
npm run dev
```

Open http://localhost:5173 in your browser.

## Using nvm (Windows)

If you want to manage Node versions per-project with `nvm-windows`:

```powershell
# install & use version specified in .nvmrc (if present)
nvm install (Get-Content .nvmrc).Trim()
nvm use (Get-Content .nvmrc).Trim()

# then install deps and run dev server
npm install
npm run dev
```

## Build

```powershell
npm run build
```

This creates the `dist` folder ready for publishing.

## GitHub Pages deployment

This repository contains a GitHub Actions workflow at `.github/workflows/gh-pages.yml` that builds and deploys the `dist` folder to GitHub Pages whenever you push to the `main` branch.

How to publish:

1. Commit and push to `main`.
2. Actions will run automatically and deploy to Pages.

Notes:
- The workflow uses the default `GITHUB_TOKEN`, so no extra secrets are required for a standard Pages deployment.
- Ensure your repository Pages settings point to `gh-pages` (or the configured branch) as the publishing source if required.

---

If you'd like, I can also:
- Add a `.nvmrc` with the project's Node version.
- Update `package.json` with a `homepage` field if you use a custom path.
- Add CI checks (lint/test) before deploy.
