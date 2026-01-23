# UX & Design Audit (Analysis 2026-01-23)

## Executive Summary
The site currently uses a solid, functional Vanilla CSS foundation with a warm, earth-tone palette (`--terracotta`, `--hue`). It hits basic accessibility and responsive marks. However, aligned with the "Pro Max" and "Premium" skills requested, the design lacks depth, modern dynamism, and "wow" factor. It feels more like a static brochure than a dynamic digital experience.

## 1. Visual Aesthetics & "Premium" Feel

### Current State
*   **Palette**: Warm earth tones are effective for a clinic but flat. Background is a simple off-white (`#FBF5EC`).
*   **Shadows**: Basic drop shadows (`0 12px 28px rgba(47,39,34,0.10)`).
*   **Typography**: `Poppins` (Headings) and `Inter` (Body) are good choices but lack scale-contrast.

### Recommendations using `ui-ux-pro-max` & `frontend-design`
1.  **Glassmorphism**: The header (`rgba(251,245,236,0.95); backdrop-filter: blur(8px)`) is a good start. Extend this to:
    *   **Service Cards**: Add a subtle frosted glass overlay on hover before full expansion.
    *   **Modals**: Ensure the `projectModal` uses a deep blur backdrop (`backdrop-filter: blur(16px)`).
2.  **Gradients & Mesh**: The `#servicios` section uses a radial gradient.
    *   *Upgrade*: Move to a **Mesh Gradient** that slowly animates/breathes to create an "alive" background, reflecting the "Movement" brand.
3.  **Depth**: Increase shadow diffusion and add multiple layers of shadow (ambient + direct) to card elements to make them "float" more realistically.

## 2. Interactive & Dynamic Elements

### Current State
*   **Animations**: `heroFloat` (simple translate) and Timeline auto-play.
*   **Micro-interactions**: Standard hover states on buttons (`background` change) and links.

### Recommendations using `canvas-design` & `web-design-guidelines`
1.  **Scroll-Triggered Reveals**: Elements currently exist statically.
    *   *Upgrade*: Implement a lightweight Intersection Observer (or `animate-on-scroll` library logic) to stagger-fade elements up as they enter the viewport.
2.  **Magnetic Buttons**: Make primary CTAs (like "Cuéntanos tu caso") subtly magnetic or have a "glow" follow the cursor.
3.  **Hero Animation**: The floating logo is simple.
    *   *Upgrade*: Consider a canvas-based or SVG-based organic blob animation behind the logo that morphs, representing "neuroplasticity" and "development".

## 3. Usability & Navigation (UX)

### Current State
*   **Nav**: Sticky header, auto-hides on scroll.
*   **Mobile**: Standard hamburger menu.

### Recommendations using `webapp-testing` & `mobile-first`
1.  **Mobile Navigation**: The "Services" expansion on mobile pushes content down.
    *   *Upgrade*: On mobile, consider a horizontal snap-scroll (carousel) for Service Cards instead of a vertical stack, or a full-screen modal for details to avoid layout shifts.
2.  **Feedback Loops**:
    *   *Upgrade*: The Contact Form success message is hidden text. Replace with a **Toaster Notification** (floating top-right or bottom-center) for immediate, high-visibility feedback.

## 4. Dark Mode / Theming

### Current State
*   Semi-hardcoded variables (`--bg: #FBF5EC`). No toggle visible.

### Recommendations using `theme-factory`
1.  **Dark Mode Support**: Implement a `data-theme="dark"` attribute on `<html>`.
    *   *Strategy*: Map CSS variables to semantic tokens.
    *   `--terracotta` -> remains (accent).
    *   `--bg` -> `#1a1614` (Warm dark grey, not pure black).
    *   `--text` -> `#ede0d4` (Off-white).
2.  **Toggle**: Add a sun/moon toggle in the `lang-switcher` area.

## 5. Technical Improvements (Codebase)

### Current State
*   **CSS Architecture**: Single big file (`assets/styles.css`).
    *   *Upgrade*: Adopt a utility-first approach (even in Vanilla CSS) for common spacing/typography to ensure consistency.
*   **Accessibility**:
    *   *Upgrade*: Ensure `prefers-reduced-motion` queries explicitly disable the new "mesh gradients" and complex floats proposed above.

## Proposed Action Plan

1.  **Phase 1: Polish (Low Effort / High Impact)**
    *   Refine shadows and border-radius.
    *   Add scroll-reveal animations (fade-up).
    *   Enhance button hover states (scale/lift).
2.  **Phase 2: Modernization (Medium Effort)**
    *   Implement "Mesh Gradient" background for Service Key/Hero.
    *   Add Dark Mode toggle and variables.
    *   Upgrade Contact Form feedback to Toasts.
3.  **Phase 3: Premium Features (High Effort)**
    *   Canvas-based hero background.
    *   Refactor Mobile Services to Snap-Carousel.

**Ready to proceed with implementing Phase 1 or Phase 2?**
