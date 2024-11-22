# Project Details

## Quick Reference
- **Framework**: Astro v4.15.3
- **Documentation**: https://docs.astro.build (Use `@docs Astro` in Cursor)
- **Terminal**: Open with `` Cmd + ` ``
- **AI Terminal**: `Cmd + K`

## Project Structure
- `/public/` - Static assets (images, fonts, favicon)
- `/src/` - Main source code
  - `/components/` - Reusable UI components
  - `/content/` - Content collections (writing, projects, artifacts)
  - `/layouts/` - Page layouts and templates
  - `/pages/` - File-based routing
  - `/styles/` - Global styles and utilities
  - `/utils/` - Helper functions

## Content Collections
Defined in `src/content/config.ts`:
- `writing` - Blog posts with title, date, description
- `projects` - Portfolio items with title, description, image, URL
- `artifacts` - Media items (images, audio, video, links)

## Common Tasks

### Creating Components
1. Create `.astro` file in `src/components/`
2. Use TypeScript interface for props
3. Include component styles with Tailwind or `<style>` tags

### Adding Content
1. Create markdown file in appropriate collection
2. Add required frontmatter (title, date, etc.)
3. Write content in markdown

### Styling
- Use Tailwind classes for component styles
- Global styles in `src/styles/`
- Theme colors in `tailwind.config.mjs`

### Development
```bash
npm run dev     # Start development
npm run build   # Production build
npm run preview # Preview build
```

## Accessibility Features
- Skip links
- ARIA labels and descriptions
- Semantic HTML structure
- Keyboard navigation
- Screen reader support
- Reduced motion support
- High contrast ratios

## Design System
- Light/dark mode with system preference detection
- Responsive breakpoints
- Animation system
- Typography scale
- Color palette

## Navigation
- Main sections: Writing, Projects, Artifacts, Hire
- Mobile hamburger menu
- Table of contents for long pages
- Clear focus indicators

## Content Types
- Blog posts (writing collection)
- Project showcases
- Media artifacts
- Service offerings

## Important Links
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Astro Docs](https://docs.astro.build)
- [Tailwind Docs](https://tailwindcss.com/docs)

## Understanding TypeScript & Props

### TypeScript Basics
- TypeScript is JavaScript with added type safety
- Helps catch errors before runtime
- Provides better code documentation and IDE support

Example of TypeScript in components:
```typescript
// Without TypeScript
const greeting = (name) => {
  return "Hello " + name; // name could be anything
}

// With TypeScript
const greeting = (name: string): string => {
  return "Hello " + name; // name must be a string
}
```

### Props in Astro Components
Props are properties passed to components - like arguments to a function. They define the data a component needs to work.

Example of props usage:
```astro
---
// Define the props interface with TypeScript
interface Props {
  title: string;           // Required
  description?: string;    // Optional (? means optional)
  isActive: boolean;
}

// Destructure props with default values
const { 
  title, 
  description = "Default description",
  isActive = false 
} = Astro.props;
---

<div class={isActive ? "active" : ""}>
  <h2>{title}</h2>
  {description && <p>{description}</p>}
</div>
```

### When to Use Props
Use props when you need to:
1. Make components reusable with different data
2. Pass data from parent to child components
3. Configure component behavior externally

Common prop types:
- `string` - Text content
- `number` - Numerical values
- `boolean` - True/false flags
- `string[]` - Arrays of text
- `Record<string, unknown>` - Object with unknown structure
- Custom interfaces - Complex data structures
