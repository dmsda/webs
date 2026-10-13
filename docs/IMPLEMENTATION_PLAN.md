# IMPLEMENTATION_PLAN.md — Staged Execution Roadmap

## Phase 1: Repository Audit & Asset Pipeline (Complete)
- [x] Environment inspection (Node v22.14.0, Python 3.13, npm 10.9.2).
- [x] Video reference inspection and keyframe motion analysis.
- [x] Coordinate and dimensional measurement of the 1440x850 panel and diagonal gallery layout.
- [x] High-resolution asset generation for all 7 original artworks.
- [x] Processing into optimized WebP formats in `public/assets/artworks/`.
- [x] Creation of core documentation (`AGENTS.md`, `DESIGN_SPEC.md`, `ASSET_MANIFEST.md`).

## Phase 2: Frontend Scaffolding & Design System Setup
- [ ] Initialize React + Vite + TypeScript project structure.
- [ ] Install minimal runtime dependencies (`lucide-react`).
- [ ] Define design system tokens in `src/styles/tokens.css`.
- [ ] Implement global base styles, typography, reset, and scroll settings in `src/styles/global.css`.
- [ ] Setup exact SVG brand logo in `public/assets/brand/logo.svg` and React component.

## Phase 3: Core Components Construction
- [ ] `BrandLogo.tsx`: SVG icon with exact bezier curves and "Pallet Ross" wordmark.
- [ ] `NavigationMenu.tsx`: Navigation items with interactive feedback, badges, profile and theme icons.
- [ ] `SiteHeader.tsx`: Layout wrapper connecting BrandLogo and NavigationMenu.
- [ ] `ArtworkCard.tsx`: Reusable poster card component with title, dimensions, hover elevation, and lightbox modal view.
- [ ] `FloatingInfoCard.tsx`: Pure white card with "Where Art Meets Market", APY badge, description, and sparkle icon.
- [ ] `FloatingTag.tsx`: "@Johnson" pill badge with down-pointing indicator triangle.
- [ ] `HeroGallery.tsx`: Diagonal cascading gallery container calculating relative offsets, z-indices, and responsive layout.
- [ ] `ModalPreview.tsx` / `InfoModal.tsx`: Accessible dialogs for Get Started, Strategy, Pricing, Contact, and Profile.

## Phase 4: Assembly & Responsive Polishing
- [ ] Assemble full page in `src/App.tsx`.
- [ ] Desktop layout (>1200px): Centered artboard canvas, floating diagonal cascade, controlled overlap.
- [ ] Tablet layout (768px–1199px): Proportional scaling with smooth scroll/drag support.
- [ ] Mobile layout (<768px): Compressed header with mobile menu, adaptive artwork carousel, accessible touch targets (min 44px).
- [ ] Light / Dark mode transition implementation.

## Phase 5: Verification & QA Testing
- [ ] Development server execution (`npm run dev`).
- [ ] TypeScript compilation check (`npm run build`).
- [ ] Visual verification with browser subagent across 1440px, 1024px, 768px, and 390px viewports.
- [ ] Interactive testing (navigation clicks, modals, hover states, theme switcher).
- [ ] Generate comprehensive `docs/TEST_REPORT.md`.
- [ ] Record changes in `CHANGELOG.md`.
