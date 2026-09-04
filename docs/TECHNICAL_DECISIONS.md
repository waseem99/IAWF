# IAWF Homepage Concept — Technical Decisions

## Stack

- Next.js 16.3.3 (Active LTS, current security-patched line as of September 2026)
- React 19.2
- App Router
- TypeScript
- Next/Image for responsive image optimization
- next/font for Noto Sans / Noto Serif
- CSS design tokens and responsive grid without a heavy component framework

## Why this approach

The proposal demo should feel current and production-capable while remaining easy to inspect and portable. The final RFP implementation can reproduce the same component model in WordPress/Gutenberg, but Next.js is used here to build a fast interactive proposal artifact and demonstrate the system before production CMS implementation.

## Accessibility

- Semantic landmarks and heading hierarchy
- Skip link
- Persistent visible focus state
- Descriptive CTA labels
- Labelled email field
- Keyboard-operable mobile navigation
- No positive tabindex
- Reduced-motion support
- Contrast-led token choices
- Approximate 44px minimum interactive target sizing

## Performance

- Fixed/aspect-ratio image containers to reduce layout shift
- One priority hero image only
- Next/Image responsive sizing
- No autoplay video
- No animation framework
- No large UI library
- Minimal client JavaScript: mobile navigation and newsletter demo only

## Production boundary

This live concept is not the proposed production architecture commitment. The RFP preference remains WordPress. Production should carry the same IA, components, event content models, accessibility rules and performance budgets into the selected WordPress implementation.
