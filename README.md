# ☀️ Solaris - Premium Solar Energy Website

A state-of-the-art Next.js 15 platform for the solar industry. Built for world-class performance, premium aesthetics, and search engine dominance.

## 🚀 Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 (CSS-First)
- **Animations**: Framer Motion (Reveals) + GSAP ScrollTrigger (Pinned Timelines)
- **Icons**: Lucide React
- **Optimization**: React Compiler enabled

## 🛠️ Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## 📁 Project Structure
- `/app`: App router pages and layouts.
- `/components/ui`: Atomic UI components (Buttons, Navbar, Reveal).
- `/components/sections`: Large page sections (Hero, HowItWorks).
- `/lib`: Utility functions and SEO helpers.
- `PERFORMANCE.md`: Performance optimization checklist.
- `SEO.md`: Search engine optimization checklist.

## 📈 SEO & Marketing
- **JSON-LD**: Structured data is pre-configured in `lib/seo`.
- **Sitemap**: Automatically generated at `/sitemap.xml`.
- **Metadata**: Fully dynamic metadata per route in `layout.tsx` and individual pages.

## 🎨 Design System
- **Colors**: Solar Gold (`primary`), Tech Blue (`secondary`), Eco Green (`accent`).
- **Typography**: `Outfit` for headings, `Inter` for body.
- **Micro-animations**: Smooth hover transitions and scroll-based entry effects.

## 📝 Content Management
Currently, content is managed directly within the components for maximum performance. To migrate to a CMS (Sanity/Payload/Contentful), simply replace the data arrays in:
- `app/products/page.tsx`
- `app/projects/page.tsx`

---
*Built with ❤️ for the sustainable future.*
