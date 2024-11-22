# Website Requirements

## Core Features

### Navigation & Structure
- Main navigation visible on all pages with sections: Writing, Projects, Artifacts, and Hire
- Dynamic table of contents for each page based on heading structure
  - Implemented as a hamburger menu
  - Unique to each page's content
  - Properly labeled with aria-label="table of contents"
- Visible skip link that appears on focus
- Clear and accessible navigation paths throughout the site

### Design & Aesthetics
- Minimal homepage design with subtle whimsical elements
- Light and dark mode support
  - Respects user system preferences by default
  - Includes toggle for manual control
- Playful, colorful animations
  - Inspired by Siri/Apple intelligence animations
  - Subtle interaction animations
  - Focus on performance and reduced motion preferences
- Strong personal identity focusing on playful and fun rather than dramatic

### Content Management
- Markdown-based content system
  - YAML frontmatter support for metadata
  - Support for various content types (writing, projects)
- RSS feed for blog content
- "Best Of" functionality for writing (hidden until content exists)

### Page-Specific Requirements

#### Homepage
- Minimal but engaging design
- Whimsical elements through subtle animations
- Clear path to main content areas

#### Writing Page
- Sub-navigation: Latest, Best Of, RSS
- Dynamic heading describing current interests/focus
- Clear content organization and hierarchy

#### Projects Page
- Card-based layout
- Each card includes:
  - Project image
  - Title (linked to project)
  - Project description

#### Artifacts Page
- Grid layout supporting multiple content types:
  - Images
  - Links
  - Embedded audio
  - Embedded video
- Focused on direct media presentation

#### Hire Page
- Clear personal value proposition
- Professional expertise summary
- List of services offered
- Simple call to action
- Portfolio of past work/clients
- Direct email contact link (no contact form)

## Technical Requirements

### Accessibility
- WCAG 2.1 AA compliance minimum
- Semantic HTML structure
- Proper ARIA labels where needed
- Keyboard navigation support
- Screen reader friendly
- Support for reduced motion
- High contrast ratios
- Focus indicators

### Performance
- Fast initial load time
- Optimized images and animations
- Minimal JavaScript usage
- Progressive enhancement

## Anti-Patterns to Avoid
- Over-complicated animations that distract from content
- Separate disconnected sections (like noted in Dario's site)
- Contact forms when simple email links suffice
- Premature optimization for future content
- Hidden content that requires JavaScript to access

## Future Considerations
- Integration of new content types
- Expansion of artifact showcase
- Addition of "Best Of" content when available