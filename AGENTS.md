# AGENTS.md — Pallet Ross Creative Landing Page

## Project Overview
Pallet Ross is a premium, state-of-the-art creative landing page featuring an editorial diagonal hero art gallery, floating cards, metadata tags, and sophisticated motion aesthetics.

## Technology Stack & Architecture
- **Framework**: React 19 / 18 + Vite + TypeScript
- **Styling**: Vanilla CSS Design System with CSS Custom Properties (Tokens), CSS Grid, and controlled relative/absolute positioning. No heavy utility bloat.
- **Icons**: Lucide React + custom inline SVGs for exact geometric branding.
- **State Management**: Lightweight React hooks (`useState`, `useEffect`, `useCallback`) for theme toggles, modal dialogs, and interactive gallery views.
- **Responsive Strategy**: Fluid clamp scales for desktop (1200px+), tablet (768px–1199px), and mobile (<768px) with horizontal swipeable artwork rails.

## Coding Standards & Rules
1. **Fidelity First**: Match the visual reference with millimeter precision—proportions, corner radii, drop shadows, typography hierarchy, and color palettes.
2. **Design Tokens**: All colors, radii, shadows, and spacings MUST be defined in `src/styles/tokens.css` and consumed via `var(--token)`.
3. **Accessibility**: Semantic HTML (`<header>`, `<nav>`, `<main>`, `<article>`, `<button>`), distinct focus states, explicit `aria-label` attributes, and `prefers-reduced-motion` support.
4. **No Placeholders**: All artworks must be real, high-resolution WebP assets located in `public/assets/artworks/`.
5. **Component Reusability**: Single-responsibility components (`SiteHeader`, `BrandLogo`, `NavigationMenu`, `HeroGallery`, `ArtworkCard`, `FloatingInfoCard`, `FloatingTag`, `ThemeToggle`, `ProfileModal`).
6. **Performance**: Optimized WebP images with explicit width/height, lazy loading where appropriate, transform/opacity hardware-accelerated animations.

## Single Source of Truth
- `AGENTS.md`: Operating constraints & guidelines
- `docs/ARCHITECTURE.md`: Architecture overview & component hierarchy
- `docs/DESIGN_SPEC.md`: Detailed visual specifications & tokens
- `docs/ASSET_MANIFEST.md`: Asset register, origins, and licenses
- `docs/CLEANUP_REPORT.md`: Repository cleanup ledger & security audit
- `docs/DEPLOYMENT.md`: Production hosting & environment configuration
- `docs/IMPLEMENTATION_PLAN.md`: Roadmap, stages, and acceptance criteria
- `docs/TEST_REPORT.md`: Testing, validation, and QA audits
- `CHANGELOG.md`: Revision history
- `CONTRIBUTING.md`: Contribution standards & guidelines
- `LICENSE`: Code and asset licensing terms
