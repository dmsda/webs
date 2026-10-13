# Contributing to Pallet Ross

Thank you for your interest in contributing to Pallet Ross! We welcome contributions ranging from visual refinements and performance optimizations to documentation and bug fixes.

---

## 1. Getting Started

### Prerequisites
- **Node.js**: `18.0.0` or higher (`node -v`)
- **npm**: `9.0.0` or higher (`npm -v`)
- **Git**: installed and configured

### Setting Up Your Local Environment
1. Fork the repository on GitHub: [https://github.com/dmsda/webs](https://github.com/dmsda/webs).
2. Clone your fork locally:
   ```bash
   git clone https://github.com/<your-username>/webs.git
   cd webs
   ```
3. Install dependencies using exact versions from the lockfile:
   ```bash
   npm ci
   ```
4. Start the Vite local development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 2. Development Workflow & Standards

### Coding Conventions
- **TypeScript**: Strict mode is enabled (`"strict": true`, `"noUnusedLocals": true`, `"noUnusedParameters": true`). Ensure zero TypeScript compiler errors.
- **Styling**: Vanilla CSS Design System. All colors, radii, shadows, and spacings MUST consume design tokens defined in `src/styles/tokens.css` (e.g., `var(--bg-panel)`, `var(--radius-card)`). Avoid arbitrary ad-hoc inline styles.
- **Component Architecture**: Single-responsibility, reusable functional components located in `src/components/`. Section-level organisms reside in `src/components/sections/`.
- **Naming Conventions**:
  - Components: PascalCase (`ArtworkCard.tsx`, `HeroGallery.tsx`, `PricingSection.tsx`).
  - CSS Classes: BEM-inspired lower-case with hyphens (`.hero-gallery`, `.hero-gallery__artboard`, `.hero-card--active`).
  - Data Files: camelCase (`artworks.ts`, `navigation.ts`).
  - Assets: kebab-case with descriptive descriptors (`poster-blue-abstract.webp`).

### Verification & Testing
Before committing any changes, run the verification scripts:
```bash
# 1. Type-check all TypeScript files
npm run typecheck

# 2. Compile production bundle
npm run build

# 3. Preview local production bundle
npm run preview
```
All commands must exit cleanly with code `0`.

---

## 3. Submitting Issues & Features

- **Bug Reports**: Use the [Bug Report Template](.github/ISSUE_TEMPLATE/bug_report.md). Include viewport dimensions, browser version, and clear steps to reproduce.
- **Feature Requests**: Use the [Feature Request Template](.github/ISSUE_TEMPLATE/feature_request.md). Provide design rationale and references where possible.

---

## 4. Pull Request Guidelines

1. **Create a Feature Branch**:
   ```bash
   git checkout -b feat/your-feature-name
   # or
   git checkout -b fix/issue-description
   ```
2. **Commit Your Changes**:
   Follow conventional commit standards:
   - `feat: add animated lightbox view for mobile artwork rail`
   - `fix: resolve overflow clipping on 360px viewport`
   - `docs: update architecture diagram and asset manifest`
3. **Push to Your Fork**:
   ```bash
   git push origin feat/your-feature-name
   ```
4. **Open a Pull Request**:
   Fill in all sections of the [Pull Request Template](.github/PULL_REQUEST_TEMPLATE.md).

### Acceptance Criteria
- [x] Code passes `npm run typecheck` and `npm run build`.
- [x] Responsive layout verified on desktop (`1440px`), tablet (`1024px`), and mobile (`390px` / `360px`).
- [x] No regressions in visual fidelity or design tokens.
- [x] No secrets, private credentials, or unnecessary external dependencies introduced.
