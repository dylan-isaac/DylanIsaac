# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server at localhost:4321 |
| `npm run build` | Build production site to ./dist/ |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

## Architecture Overview

This is an Astro-based personal portfolio website featuring:

- **Content Collections**: Three main collections defined in `src/content/config.ts`:
  - `writing` - Blog posts/articles with frontmatter schema (title, publishDate, description, tags, type, draft, image)
  - `projects` - Portfolio projects with metadata (title, description, tags, image, url, featured)
  - `artifacts` - Creative outputs (image, audio, video, link types)

- **Design System**: Custom Tailwind configuration with:
  - Color palette: Primary (pink), Secondary (cyan), Accent (green/yellow)
  - Dark/light mode support with CSS custom properties
  - Typography scale with custom font sizes and line heights
  - Component utilities for tags, focus rings, headings

- **Layout Architecture**:
  - `Layout.astro` - Base layout with theme initialization script
  - `WritingLayout.astro` - Specialized layout for blog content
  - `Header.astro` - Navigation with responsive table of contents sidebar
  - Component-based architecture in `src/components/`

- **Styling Approach**:
  - Tailwind CSS with custom design tokens in `tailwind.config.mjs`
  - Global styles in `src/styles/global.css` with component layer
  - Custom font (Glacial Indifference) loaded via CSS
  - Consistent color system supporting dark mode

- **Content Management**:
  - File-based content in `src/content/` directories
  - Markdown with frontmatter for writing and projects
  - Static assets in `public/` directory

## Key Features

- **Theme System**: Automatic dark/light mode detection with localStorage persistence
- **Navigation**: Responsive header with collapsible table of contents sidebar
- **Typography**: Custom prose styles with @tailwindcss/typography integration
- **Accessibility**: Skip links, semantic markup, ARIA attributes
- **Content Types**: Support for articles, notes, tutorials, and project showcases

## File Organization

- Pages follow Astro's file-based routing in `src/pages/`
- Components are reusable across layouts
- Content collections enable type-safe frontmatter validation
- Utility classes and component styles centralized in global CSS