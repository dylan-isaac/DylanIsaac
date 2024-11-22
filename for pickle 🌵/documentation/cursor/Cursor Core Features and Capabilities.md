# Cursor Core Features and Capabilities

Table of contents

[Core Features Overview](#core-features-overview)
[1. Autocomplete](#autocomplete)
[2. Chat](#chat)
[3. Generate and Edit](#generate-and-edit)
[4. Composer](#composer)
[Cursor Rules](#cursor-rules)
[Artifacts](#artifacts)
[Best Practices](#best-practices)

## Core Features Overview

Cursor is a VS Code fork that integrates AI capabilities directly into your development workflow. It maintains familiar VS Code shortcuts and interface while adding powerful AI-assisted coding features.

## Autocomplete

Similar to GitHub Copilot, Cursor provides real-time code suggestions as you type. Key features include:
- Intelligent code completion
- Format suggestions
- Context-aware predictions
- Activation through tab key

## Chat

The chat feature allows for direct code modifications through natural language:
- Select code and request specific changes
- Line-by-line modification approach
- Model selection (Claude 3.5 or GPT-4)
- Provides explanations with changes when requested

## Generate and Edit

Generate and Edit mode offers quick code modifications:
- Faster than chat for simple changes
- No explanations provided
- Works best with smaller files
- Direct code implementation

## Composer

Composer (activated with Command+I) provides multi-file editing capabilities:
- Understands project context across files
- Can create new components and integrate them
- References other files and folders
- Supports both edit and generate modes
- Automatic file saving and creation

## Cursor Rules

Cursor rules allow for custom configuration:
- Created in root directory
- Define coding conventions
- Set formatting preferences
- Specify naming conventions
- Can be generated using Cursor Rule Maker tool

## Artifacts

Cursor artifacts provide:
- Deployed file storage
- Reference material storage
- Long-running task support
- Local directory saving option

## Best Practices

### Recommended Use Cases:
- Creating new components
- Data transformation tasks
- Styling improvements
- Small to medium file edits

### Limitations and Considerations:
- Performance may slow with large files
- Multi-file edits may require verification
- Keep files small for optimal performance
- Use as an assistant rather than complete solution

### Tips for Optimal Use:
1. Break large tasks into smaller components
2. Verify changes in complex operations
3. Use appropriate feature for task size:
   - Autocomplete for small changes
   - Chat for explained modifications
   - Generate for quick implementations
   - Composer for multi-file operations

Would you like me to continue creating documentation for other aspects of Cursor, such as detailed setup instructions or specific feature guides?