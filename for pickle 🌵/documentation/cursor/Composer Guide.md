# Cursor Composer: Multi-File AI Coding Guide

## Overview
Cursor Composer is a powerful multi-file editing feature that enables AI-assisted development across multiple files simultaneously. This guide covers setup, usage patterns, and best practices.

## Setup

### Enabling Composer
1. Open Cursor Settings
2. Navigate to Beta Flags
3. Enable Composer feature

### Keyboard Shortcuts
- `Command + I`: Open small Composer window
- `Command + Shift + I`: Open full-screen Composer
- `Escape`: Close Composer window

## Core Features

### 1. Multi-File Context
```javascript
// Add files to context
- Individual files: Select from file picker
- Directories: Add entire directories
- Read-only files: Reference without modification
```

### 2. Model Selection
- Claude 3.5 Sonnet (Recommended for stability)
- GPT-4 Latest (Experimental)
- Other available models

### 3. Context Management
- Active files shown in sidebar
- Read-only files marked separately
- Context size indicator
- File type filtering

## Usage Patterns

### 1. Component Refactoring
```typescript
// Example prompt
"Move [component] logic into its own file at [path], 
update imports and exports accordingly"
```

**Best Practices:**
- Start with component definition
- Include related dependencies
- Add parent component for context
- Specify exact file paths

### 2. Style Updates
```typescript
// Example prompt
"Update styles in [components] to match [reference],
maintain consistent theming"
```

**Best Practices:**
- Include style reference files
- Specify target components
- Define scope clearly
- List specific style attributes

### 3. Feature Implementation
```typescript
// Example prompt
"Add [feature] across these files:
- Update component logic in [file1]
- Add new types in [file2]
- Integrate with existing functionality in [file3]"
```

## Advanced Features

### 1. Iterative Development
```typescript
// Initial change
"Create basic implementation of [feature]"

// Refinement
"Update implementation to handle [edge case]"

// Polish
"Add error handling and improve typing"
```

### 2. Multi-Stage Changes
1. **Planning Stage**
   ```typescript
   "Outline changes needed across files for [feature]"
   ```

2. **Implementation Stage**
   ```typescript
   "Implement outlined changes in specified files"
   ```

3. **Integration Stage**
   ```typescript
   "Connect components and update imports"
   ```

### 3. Context-Aware Updates
```typescript
// Add reference files
"Add [file] as read-only context"

// Make changes
"Update [component] based on patterns in [reference]"
```

## Best Practices

### 1. Context Management
- Include minimal necessary files
- Use read-only for reference files
- Organize files by feature
- Maintain clear boundaries

### 2. Prompting Strategy
- Be specific about file locations
- Reference existing patterns
- Specify exact requirements
- Break down complex changes

### 3. Validation Approach
- Review changes per file
- Test functionality incrementally
- Verify imports and exports
- Check for side effects

## Working with Large Codebases

### 1. File Selection
- Choose relevant subset of files
- Include necessary context
- Use read-only for dependencies
- Focus on related components

### 2. Change Scoping
```typescript
// Example scoped prompt
"Update authentication flow in:
- auth/login.ts
- auth/validation.ts
- types/auth.ts"
```

### 3. Incremental Changes
1. Core functionality first
2. Add error handling
3. Improve types
4. Enhance UI/UX

## Common Patterns

### 1. Component Extraction
```typescript
// Before
<template>
  <div>
    <!-- Complex component logic -->
  </div>
</template>

// Prompt
"Extract this logic into ComponentName.vue"
```

### 2. Style Standardization
```typescript
// Prompt
"Apply consistent styling across components:
- Use design system tokens
- Match spacing patterns
- Align with existing components"
```

### 3. Feature Integration
```typescript
// Prompt
"Add feature X:
1. Create new components
2. Update existing files
3. Add type definitions
4. Update tests"
```

## Troubleshooting

### 1. Common Issues
- Context limit exceeded
- Model confusion
- Import/export errors
- Type mismatches

### 2. Resolution Strategies
- Reduce context size
- Clarify requirements
- Add reference files
- Break down changes

### 3. Model Selection
- Use Claude 3.5 for stability
- GPT-4 for experimental features
- Test model performance
- Adapt to requirements

## Tips for Success

1. **Clear Requirements**
   - Define scope upfront
   - List affected files
   - Specify patterns
   - Include examples

2. **Incremental Changes**
   - Start small
   - Build complexity
   - Test frequently
   - Review carefully

3. **Context Management**
   - Minimal file set
   - Clear boundaries
   - Relevant references
   - Organized structure

Remember that Composer is a powerful tool that works best with clear direction and appropriate context. Focus on providing clear, specific instructions and maintaining relevant context for optimal results.