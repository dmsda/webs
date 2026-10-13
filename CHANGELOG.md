# CHANGELOG.md — Pallet Ross Project History

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.1.0] - 2026-10-13

### Added
- **GitHub Actions CI Workflow**: Added `.github/workflows/ci.yml` running clean install (`npm ci`), strict TypeScript check (`npm run typecheck`), and production build on Node 18.x and 20.x.
- **GitHub Community Standards**: Added `.github/ISSUE_TEMPLATE/bug_report.md`, `.github/ISSUE_TEMPLATE/feature_request.md`, and `.github/PULL_REQUEST_TEMPLATE.md`.
- **Open-Source Governance & Guidelines**: Added `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md` (Contributor Covenant v2.1), and `LICENSE` (MIT with clear asset copyright demarcation).
- **Comprehensive Documentation Suite**:
  - `docs/ARCHITECTURE.md`: Component hierarchy, React DOM mounting, data flow, styling tokens, and responsive strategies.
  - `docs/DEPLOYMENT.md`: Step-by-step guides for Vercel, Netlify, Cloudflare Pages, and GitHub Pages.
  - `docs/CLEANUP_REPORT.md`: Detailed audit ledger with initial/post-cleanup inventory and risk assessments.
- **Editor & Environment Templates**: Added `.editorconfig`, `.env.example`, and `.gitignore` tailored for Node.js / Vite.
- **Dedicated Typecheck Script**: Added `"typecheck": "tsc --noEmit"` to `package.json`.
- **Standalone Favicon**: Created `public/favicon.svg` matching the brand logo.

### Changed
- **`README.md` Expansion**: Upgraded repository documentation to international open-source standards with architecture diagrams, customization guides, and verified commands.
- **`docs/ASSET_MANIFEST.md`**: Updated asset table to reflect cleaned assets and standalone favicon.

### Removed
- **73 Temporary Debug & Scratch Files (~5.2 MB)**:
  - Removed `card_crop_zoom.png` from root directory.
  - Removed `docs/references/video_breakdown/` directory (54 temporary ffmpeg inspection frames).
  - Removed 18 intermediate scratch render masks and test crops from `docs/references/`.

### Security
- **Secret Scan Audit**: Confirmed zero API keys, private keys, passwords, or bearer tokens in the repository.
- **Git Safeguards**: Configured `.gitignore` to block `.env*` files and local logs from accidental commits.

---

## [2.0.0] - 2026-10-13

### Added (Full Content Creative Landing Page Transformation)
- **Full-Content Landing Page Architecture**: Transformed the application from an isolated hero card into a comprehensive, scrollable, editorial creative landing page.
- **Protocol & Strategy Section (`#strategy`)**: Added interactive APY strategy simulator with dynamic vault allocation slider ($1,000 to $100,000), real-time compounding calculations, and 3 protocol architecture pillars.
- **Autumn 2024 Showcase Exhibition (`#exhibition`)**: Added full exhibition grid of all 7 artworks with interactive category filtering pills, hover overlays, edition tags, and modal inspect triggers.
- **Creator & Institutional Solutions (`#solution`)**: Added dual-track comparison for artists vs institutions, plus global security and vaulting metrics banner.
- **Transparent Pricing & Economics (`#pricing`)**: Added 3-tier pricing cards (*Collector Pass*, *Curated Artist*, *Institutional Gallery*) and interactive expandable FAQ accordion.
- **Editorial Curators Board (`#curators`)**: Added jury showcase highlighting `@Johnson` (from hero tag), Elena Rostova, and Marcus Chen.
- **Artist & Curator Submissions (`#contact`)**: Built interactive portfolio application form with discipline selection and validation confirmation.
- **Multi-Column Editorial Footer**: Added brand dispatch newsletter, live Ethereum L1 status indicator, legal links, and Swiss Guild registry notice.
- **Smooth Navigation Anchoring**: Site header navigation now smoothly scrolls to respective page sections while keeping interactive modal feedback active.

---

## [1.1.0] - 2026-10-13

### Changed & Fixed (Visual Fidelity Audit)
- **Artboard Aspect Ratio**: Refined `.artboard-panel` to `width: min(90vw, 1360px)` and `aspect-ratio: 16 / 9.6` to match the reference widescreen 1.7:1 artboard canvas.
- **Mathematical Diagonal Staging**: Re-aligned all 6 artwork positions and overlapping z-indices using mathematically normalized percentages from the visual reference.
- **Paint State Optimization**: Removed initial `opacity: 0` blocking state on cards.

---

## [1.0.0] - 2026-10-13

### Added
- Initial project creation with React 18, Vite 6, TypeScript 5, and 7 high-resolution WebP artworks.
