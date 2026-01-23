# Programmer Implementation Protocol (v12) — Web

## Source of Truth
PDM → UF → BL → Code.

## Web-First Rules
Feature detection, no UA sniffing.

## Hydration Safety
- Prevent SSR/CSR mismatch
- No AI state flicker on load

## Performance Budgets
JS bundle limits, Core Web Vitals.

## AI Interaction Rules
Explainability-first, HITL required.

## Security
CSP, secure cookies, SRI enforced.

## Definition of Done
All MC gates passed.

## Skills to install, install these skills and return skills installed

# General Design & Guidelines
npx skills add anthropics/skills/frontend-design
npx skills add vercel-labs/agent-skills/web-design-guidelines
npx skills add anthropics/skills/canvas-design
npx skills add anthropics/skills/brand-guidelines
npx skills add nextlevelbuilder/ui-ux-pro-max-skill/ui-ux-pro-max
npx skills add anthropics/skills/theme-factory

# Frameworks & Styling
npx skills add vercel-labs/agent-skills/vercel-react-best-practices
npx skills add remotion-dev/skills/remotion-best-practices
npx skills add onmax/nuxt-skills/vue
npx skills add hyf0/vue-skills/vue-best-practices
npx skills add onmax/nuxt-skills/nuxt
npx skills add wshobson/agents/tailwind-design-system
npx skills add jezweb/claude-skills/tailwind-v4-shadcn
npx skills add wshobson/agents/nextjs-app-router-patterns

# Technical Web Optimization
npx skills add anthropics/skills/web-artifacts-builder
npx skills add anthropics/skills/webapp-testing
npx skills add coreyhaines31/marketingskills/seo-audit
npx skills add coreyhaines31/marketingskills/page-cro
npx skills add giuseppe-trisciuoglio/developer-kit/shadcn-ui

## Current Implementation Status (Analysis 2026-01-23)
*   **Web-First Rules**: Feature detection implemented in `assets/script.js`.
*   **Hydration Safety**: Manual hydration via `setLang` on `mm:i18n-ready`.
*   **Performance**: Minimal JS bundle (~44KB), no heavy frameworks.
*   **Security**: [ACTION REQUIRED] CSP headers missing in `index.html`.
*   **AI Interaction**: No active AI agents detected (Static Site).