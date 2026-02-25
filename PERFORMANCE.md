# Solaris Performance Checklist 🚀

## Core Optimization
- [x] **Server Components**: Used by default in all layouts and static sections.
- [x] **Image Optimization**: Custom `next/image` usage with appropriate `sizes` and `priority` for above-the-fold content.
- [x] **Dynamic Imports**: Used for heavy components like GSAP `HowItWorks`.
- [x] **Font Optimization**: `next/font` for zero layout shift with Inter and Outfit.
- [x] **React Compiler**: Enabled via Next.js 15 config for automatic memoization.

## Advanced Techniques
- [ ] **Streaming**: Implement `loading.tsx` for async product/project data once connected to CMS.
- [x] **Minimal JS**: Framer Motion used only for entrance animations; GSAP isolated to pinned sections.
- [x] **Turbo Engine**: Configured for faster development and build times.
- [x] **CSS Performance**: Tailwind 4 lightning-fast CSS processing.

## Visual Stability (Lighthouse)
- [x] **Aspect Ratios**: All image containers have fixed aspect ratios to prevent CLS.
- [x] **Preconnect**: Critical assets preconnected where necessary.
- [x] **Critical CSS**: Modern App Router handles critical CSS extraction automatically.
