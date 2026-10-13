# DEPLOYMENT.md — Production Deployment Guide

## 1. Overview
Pallet Ross is configured as a high-performance static single-page application (SPA). Upon executing the production build, all TypeScript, React JSX, and CSS files are compiled and bundled into the `dist/` directory.

### Build Specifications
- **Build Command**: `npm run build` (runs `tsc && vite build`)
- **Output Directory**: `dist`
- **Node.js Target**: Node.js 18.x or 20.x
- **Bundle Footprint**: ~30 kB CSS, ~200 kB JS (~68 kB total compressed gzipped payload)

---

## 2. Deploying to Popular Hosting Platforms

### A. Vercel
1. Install the Vercel CLI or import the repository via the [Vercel Dashboard](https://vercel.com):
   ```bash
   npm i -g vercel
   vercel
   ```
2. Configure project settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm ci`
3. Optional `vercel.json` rewrite configuration for clean routing:
   ```json
   {
     "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
   }
   ```

---

### B. Netlify
1. Connect repository through [Netlify App](https://app.netlify.com).
2. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. For single-page application routing, create a `public/_redirects` file:
   ```text
   /*    /index.html   200
   ```

---

### C. Cloudflare Pages
1. In Cloudflare Dashboard, select **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
2. Select repository and set:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/`
3. Click **Save and Deploy**.

---

### D. GitHub Pages
To deploy to GitHub Pages:
1. Update `vite.config.ts` if deploying to a repository subpath (e.g. `https://dmsda.github.io/webs/`):
   ```typescript
   export default defineConfig({
     base: '/webs/',
     // ...
   });
   ```
2. Use GitHub Actions with the official static deployment workflow (`actions/deploy-pages@v4`).

---

## 3. Environment Variables
Pallet Ross is self-contained and does not require private backend credentials or database URLs. If you configure optional variables (such as custom network names or external form endpoints), add them to your hosting provider's Environment Variables panel matching the template in `.env.example`:
- `VITE_APP_TITLE`
- `VITE_NETWORK_NAME`
- `VITE_PROTOCOL_APY_BASELINE`
- `VITE_INQUIRY_ENDPOINT`

> [!WARNING]
> Vite exposes all variables prefixed with `VITE_` to client-side code. Never prefix private API keys, database passwords, or private keys with `VITE_`.

---

## 4. Post-Deployment Verification Checklist
- [ ] Visit the deployed URL across both Desktop (>=1200px) and Mobile (<768px).
- [ ] Verify all 7 artwork images load properly with HTTP 200 responses.
- [ ] Test the theme switcher (Light / Dark mode toggle).
- [ ] Test the interactive APY slider in the Protocol section.
- [ ] Test the Exhibition category filter buttons.
- [ ] Open the browser developer console to ensure 0 errors or unhandled exceptions.
