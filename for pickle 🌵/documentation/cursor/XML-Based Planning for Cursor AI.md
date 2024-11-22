# XML-Based Planning for Cursor AI

This guide outlines how to create effective XML-structured plans for Cursor AI development.

## Basic Structure

### 1. Template Format
```xml
<app_description>
  [Project details and requirements]
</app_description>

<instructions>
  [Specific implementation instructions]
</instructions>

<environment>
  [Development environment details]
</environment>
```

### 2. Plan Components
```xml
<plan>
  <setup>
    [NPX and NPM commands]
  </setup>
  
  <implementation>
    [Feature development details]
  </implementation>
</plan>
```

## Example Plans

### 1. Next.js Application
```xml
<app_description>
Create a Next.js app with user authentication:
- Email/password login
- Protected routes
- User dashboard
- Dark theme
</app_description>

<instructions>
Create necessary files in appropriate directories:
- pages/auth/*
- components/auth/*
- hooks/auth/*
</instructions>

<environment>
- Windows 11
- VS Code
- Node 18+
</environment>

<plan>
  <setup>
    npx create-next-app@latest
    npm install @auth/next auth
  </setup>
  
  <implementation>
    [Repeat description and instructions]
  </implementation>
</plan>
```

### 2. Data Visualization
```xml
<app_description>
Build a data visualization dashboard:
- Time series charts
- Interactive filters
- Real-time updates
- Responsive design
</app_description>

<instructions>
Organize files as follows:
- components/charts/*
- utils/data/*
- pages/dashboard/*
</instructions>

<plan>
  <setup>
    [Setup commands]
  </setup>
  
  <implementation>
    [Component details]
  </implementation>
</plan>
```

## Best Practices

### 1. Description Format
```xml
<app_description>
Be specific about:
1. Core features
2. Data structures
3. UI components
4. User interactions
5. Performance requirements
</app_description>
```

### 2. Instruction Structure
```xml
<instructions>
Include:
1. File organization
2. Naming conventions
3. Component hierarchy
4. Data flow
5. Testing requirements
</instructions>
```

### 3. Environment Details
```xml
<environment>
Specify:
1. Operating system
2. IDE/editor
3. Node version
4. Framework versions
5. Special requirements
</environment>
```

## Implementation Patterns

### 1. Setup Phase
```xml
<plan>
  <setup>
    <!-- Project Initialization -->
    npx create-next-app@latest
    
    <!-- Dependencies -->
    npm install [packages]
    
    <!-- Configuration -->
    [Config setup]
  </setup>
</plan>
```

### 2. Development Phase
```xml
<plan>
  <implementation>
    <!-- Component Creation -->
    [Component details]
    
    <!-- Integration -->
    [Integration steps]
    
    <!-- Testing -->
    [Test requirements]
  </implementation>
</plan>
```

## Common Patterns

### 1. Feature Description
```xml
<feature>
  <name>Authentication</name>
  <requirements>
    - Email/password login
    - OAuth integration
    - Session management
  </requirements>
  <components>
    - LoginForm
    - AuthProvider
    - ProtectedRoute
  </components>
</feature>
```

### 2. Data Structure
```xml
<data>
  <models>
    <user>
      - id: string
      - email: string
      - profile: object
    </user>
  </models>
  <apis>
    - /api/auth/*
    - /api/users/*
  </apis>
</data>
```

### 3. UI Components
```xml
<ui>
  <layout>
    - Header
    - Sidebar
    - MainContent
  </layout>
  <components>
    - DataTable
    - FilterPanel
    - Charts
  </components>
</ui>
```

## Tips for Success

1. **Clear Structure**
   - Use consistent formatting
   - Maintain hierarchy
   - Group related elements
   - Include all requirements

2. **Detailed Planning**
   - Break down features
   - Specify dependencies
   - Include examples
   - Document patterns

3. **Implementation Focus**
   - Organize by feature
   - Consider dependencies
   - Plan integration
   - Include validation

## Error Prevention

### 1. Common Issues
```xml
<validation>
  <check>File structure consistency</check>
  <check>Dependency conflicts</check>
  <check>Type compatibility</check>
</validation>
```

### 2. Solutions
```xml
<solutions>
  <fix>Clear file organization</fix>
  <fix>Explicit dependencies</fix>
  <fix>Type definitions</fix>
</solutions>
```

Remember that effective XML planning helps Cursor AI understand and implement your requirements more accurately. Focus on clarity, completeness, and proper structure for optimal results.