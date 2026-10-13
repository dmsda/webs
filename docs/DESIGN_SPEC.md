# DESIGN_SPEC.md — Visual Specification & Design System

## 1. Executive Summary
This document specifies the exact visual rules, design tokens, and layout mathematics derived from the user reference image and video storyboard.

## 2. Canvas & Spatial Proportions
- **Outer Background (Viewport Canvas)**: Soft neutral tinted off-white vignette `#F1F1F1` (edges `#E8E8EA`, subtle radial highlight `#FAFAFA`).
- **Main Artboard Container**:
  - Centered floating panel with generous breathing room.
  - Desktop Max Width: `1440px` (or ~92% viewport on standard desktop screens).
  - Background: Pure Surface White `#FFFFFF` (light mode), Deep Charcoal `#121214` (dark mode).
  - Border Radius: `24px` (`1.5rem`).
  - Outer Shadow: Ultra-soft, low-opacity ambient diffusion `0 20px 60px -15px rgba(0, 0, 0, 0.05), 0 0 1px 1px rgba(0, 0, 0, 0.03)`.
  - Inner Padding: `32px 48px` (desktop), `24px 28px` (tablet), `16px 20px` (mobile).

## 3. Color Tokens
```css
:root {
  /* Surface Tokens */
  --bg-viewport: #F1F1F1;
  --bg-panel: #FFFFFF;
  --bg-card: #FFFFFF;
  --bg-tag: #F4A61D;
  --border-subtle: rgba(0, 0, 0, 0.06);

  /* Typography Tokens */
  --text-primary: #171717;
  --text-secondary: #767676;
  --text-tertiary: #A0A0A0;
  --text-inverse: #FFFFFF;

  /* Accent Tokens */
  --accent-turquoise: #75CFC5;
  --accent-yellow: #F5A900;
  --accent-orange: #F47724;
  --accent-purple: #9D38D4;
  --accent-blue: #1760F5;
  --accent-green: #2B7A4B;

  /* Geometry & Elevation */
  --radius-panel: 24px;
  --radius-card: 18px;
  --radius-tag: 9999px;
  --shadow-panel: 0 20px 60px -15px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.03);
  --shadow-card: 0 12px 36px -8px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.02);
  --shadow-hover: 0 24px 48px -12px rgba(0, 0, 0, 0.16);

  /* Animation */
  --transition-smooth: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-normal: 300ms;
}

[data-theme="dark"] {
  --bg-viewport: #0D0E10;
  --bg-panel: #16171A;
  --bg-card: #1E2024;
  --border-subtle: rgba(255, 255, 255, 0.08);
  --text-primary: #F5F5F7;
  --text-secondary: #9E9EA7;
  --text-tertiary: #6E6E78;
  --shadow-panel: 0 24px 64px -12px rgba(0, 0, 0, 0.6);
  --shadow-card: 0 16px 40px -10px rgba(0, 0, 0, 0.5);
}
```

## 4. Typography Hierarchy
- **Font Family**: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif.
- **Brand Wordmark**: `19px`, font-weight `600`, tracking `-0.02em`.
- **Navigation Links**: `13.5px`, font-weight `500`, tracking `-0.01em`, color `--text-primary`.
- **Card Headline ("Where Art Meets Market")**: `18px`, font-weight `700`, line-height `1.25`, tracking `-0.02em`.
- **Card Metadata ("• APY: 4.60%")**: `12px`, font-weight `500`, color `--text-secondary`.
- **Card Body Description**: `13px`, font-weight `400`, line-height `1.5`, color `--text-secondary`.
- **Tag Label ("@Johnson")**: `12.5px`, font-weight `600`, color `--text-inverse`.

## 5. Header & Navigation Structure
- **Left**:
  - Logo Icon: 22px × 22px SVG, geometric tri-lobed rounded propellor in `#75CFC5`.
  - Wordmark: "Pallet Ross".
- **Right Navigation**:
  - "Get Started"
  - "Create strategy" with small circular black badge icon.
  - "Pricing"
  - "Contact"
  - "Solution"
  - "E-Commerce"
  - Profile Icon (User circle in subtle 32px pill).
  - Theme Toggle Icon (Sun / Moon toggle with accessible tooltip).

## 6. Diagonal Hero Gallery Geometry (Desktop Baseline 1440px)
The hero composition steps diagonally from top-left (Poster 1) to bottom-right (Poster 6):

| Element | Description | Approx Relative X | Approx Relative Y | Relative Size (W × H) | Z-Index |
|---|---|---|---|---|---|
| **Poster 1** | Purple Editorial ("ALL GOOD THINGS") | `3%` | `10%` | `230px × 310px` | `1` |
| **Floating Info Card** | "Where Art Meets Market" | `15%` | `26%` | `220px × 240px` | `10` |
| **Poster 2** | Orange Character ("STAFF") | `28%` | `36%` | `220px × 295px` | `2` |
| **Poster 3** | Green Outdoor ("le FLEUR*") | `41%` | `46%` | `225px × 310px` | `3` |
| **Poster 4** | Golden Cinematic ("THE GREEN KNIGHT") | `54%` | `52%` | `225px × 310px` | `4` |
| **Floating Tag** | "@Johnson" Pill with pointer | `62%` | `44%` | `100px × 36px` | `11` |
| **Poster 5** | Orange Music ("GLIMMER 9") | `67%` | `62%` | `230px × 315px` | `5` |
| **Poster 6** | Blue Abstract ("FLUFFY WORM") | `80%` | `72%` | `230px × 250px` | `6` |

## 7. Interactive States & Motion
- **Staggered Entry**: CSS keyframe cascade `fadeSlideUp` on initial page load with `animation-delay` increments of 80ms.
- **Hover Micro-Interactions**:
  - Cards subtly elevate by `translateY(-6px)` and scale `1.01` on hover with enhanced box-shadow.
  - Smooth 300ms easing `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Active Navigation**:
  - Interactive click handlers trigger smooth modal drawers or informative preview sheets.
  - Theme toggle switches between light mode and sleek dark mode without layout shifts.
- **Responsive Adaptations**:
  - Desktop (>1200px): Cascading diagonal gallery with controlled overlap.
  - Tablet (768px–1199px): Scaled down diagonal flow with horizontal pan capability.
  - Mobile (<768px): Mobile hamburger nav, top featured highlight, and smooth horizontal swipeable carousel rail.
