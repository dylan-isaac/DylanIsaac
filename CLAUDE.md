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

## SEO & Discovery Features

### SEO Metadata
- **Open Graph tags** for rich social media previews
- **Twitter Card tags** for X/Twitter sharing  
- **Structured data** (JSON-LD) for search engines
- **Meta tags** for description, keywords, author
- **Canonical URLs** to prevent duplicate content issues

### Discovery Files
- **`/llms.txt`** - Context for AI models following llmstxt.org standard
- **`/robots.txt`** - Search engine crawler instructions
- **`/rss.xml`** - RSS feed for blog subscribers
- **`/sitemap-index.xml`** - Auto-generated sitemap via @astrojs/sitemap
- **`/manifest.json`** - PWA manifest for installable web app

### Updating SEO Content

1. **Site-wide defaults**: Edit `src/layouts/Layout.astro` for global meta tags
2. **Page-specific**: Pass custom `title`, `description`, `image` props to Layout
3. **Article metadata**: Set in frontmatter, automatically used by WritingLayout
4. **llms.txt**: Edit `/public/llms.txt` to update AI context
5. **Site URL**: Update `site` in `astro.config.mjs` if domain changes

## Adding Content

### Writing (Blog Posts)
1. Create a new `.md` file in `src/content/writing/`
2. Add frontmatter:
```yaml
---
title: "Your Title"
publishDate: 2025-01-20T12:00:00.000Z
description: "Brief description for SEO and previews"
tags: ["AI", "Accessibility"]
type: "article" # or "note", "tutorial"
draft: false # Set true to hide from production
image: # Optional
  src: "/images/your-image.jpg"
  alt: "Image description"
---
```
3. Write content in Markdown below the frontmatter
4. Images go in `/public/images/`

### Projects
1. Create a new `.md` file in `src/content/projects/`
2. Add frontmatter:
```yaml
---
title: "Project Name"
description: "What this project does"
tags: ["Technology", "Category"]
featured: true # Shows first if true
image:
  src: "/images/project-screenshot.jpg"
  alt: "Screenshot description"
url: "https://project-link.com"
---
```

### Artifacts
1. Create a new `.md` file in `src/content/artifacts/`
2. Add frontmatter based on type (image, audio, video, link)

## Maintenance Tasks

### Regular Updates
- **Dependencies**: Run `npm update` periodically
- **RSS Feed**: Automatically updates when new posts are added
- **Sitemap**: Regenerates on build via @astrojs/sitemap integration

### SEO Checklist for New Content
- [ ] Unique, descriptive title (<60 chars)
- [ ] Meta description (150-160 chars)
- [ ] Featured image with alt text
- [ ] Appropriate tags/categories
- [ ] Check reading time estimate (auto-calculated)

### Performance Monitoring
- Build outputs show bundle sizes
- Images should be optimized before adding to `/public/`
- Use `loading="lazy"` for below-fold images

## Deployment

The site builds to static HTML/CSS/JS in the `dist/` folder:
1. `npm run build` - Creates production build
2. `npm run preview` - Test production build locally
3. Deploy `dist/` folder to any static host

## Custom Features

### Text Selection
- Pink highlight (30% opacity) on selected text
- Configured in Layout.astro inline styles

### Reading Time
- Auto-calculated in WritingLayout (200 words/min)
- Displayed as "X min read" on articles

### Draft Posts
- Set `draft: true` in frontmatter
- Shows warning banner in development
- Hidden in production builds

### PWA Support
- Web manifest for installability
- Theme color (yellow) for browser UI
- Works offline for cached content

## Troubleshooting

- **Styles not updating**: Hard refresh (Cmd+Shift+R) to clear cache
- **Content not showing**: Check if `draft: false` and rebuild
- **SEO not working**: Ensure `site` is set in astro.config.mjs
- **RSS issues**: Verify date format in frontmatter (ISO 8601)