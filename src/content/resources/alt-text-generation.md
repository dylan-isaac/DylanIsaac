---
title: "Alt Text Generation: Translating Visual to Non-Visual Understanding"
description: "An AI-powered pattern that extracts author intention from page context to create equivalent experiences through accessibility metadata"
type: "ladder"
capabilities:
  - "Extracts author intention from page structure and context"
  - "Classifies images as decorative, simple informative, or complex informative"
  - "Generates contextually appropriate alt text within 140 character limit"
  - "Creates structured alternatives for complex data visualizations"
  - "Performs epistemological translation between visual and non-visual modalities"
usage: "Use this prompt with an LLM to analyze images in their page context and generate appropriate alternative text that creates equivalent experiences for screen reader users"
tags: ["accessibility", "AI", "translation", "alt-text", "web-development"]
featured: true
---

This is my personal methodology for creating alt text, encoded as a [ladder](/writing/building-ladders-extending-human-agency-with-ai) you can climb. After years as an accessibility expert, I've mapped the line of questioning I use when writing alt text into prompts that extract author intention from page structure—the implicit human variables that were previously locked behind expert judgment.

**How this is different:** Traditional alt text generators analyze only the image pixels. This pattern analyzes the entire page context first, then the image. It uses the same questioning process I use: What's the page purpose? Why is this image here? What would someone miss without it? Which of the metaphorical "1000 words" an image contains should actually be in the alt text?

The same photo needs completely different descriptions on a product page (focus on features), news article (focus on context), or portfolio (focus on technique). By extracting context from DOM structure, headings, and surrounding text, this pattern identifies which description serves the author's intent.

## How Expert Questioning Becomes Automated Analysis

When I analyze an image for alt text, I ask four strategic questions:
1. **"What's the purpose of this page?"** → Reveals communication context
2. **"Why is this image positioned here?"** → Indicates functional role
3. **"What would someone miss without this image?"** → Identifies essential information
4. **"How much detail serves the author's intent?"** → Determines description depth

These questions extract implicit variables from explicit page structure:

```javascript
// Programmatically available signals
const pageTitle = document.title;
const headings = document.querySelectorAll('h1, h2, h3');
const surroundingText = getSiblingContent(image);

// LLM interprets these signals through expert questioning
// DOM heading + adjacent chart → Business performance intent
// Hero image + minimal text → Primary visual communication
// Small inline image + detailed text → Check for redundancy
```

The breakthrough: LLMs can systematically apply this questioning process to derive the same insights I would manually—extracting author intention from page structure.

## My Three-Phase Methodology

### Phase 1: Extract Context to Decode Intention
I analyze page structure, headings, and surrounding text to understand *why* this image was chosen. The same photo needs different descriptions in different contexts.

### Phase 2: Classify Function to Determine Detail
- **Decorative**: No unique information → Empty alt text
- **Simple Informative**: Essential info in <140 characters
- **Complex Informative**: Data/relationships → Alt text + structured alternative

### Phase 3: Optimize for Screen Reader UX
- **Alt text**: 80-140 characters (cognitive load limit for audio processing)
- **Structured alternatives**: Tables/lists for complex data exploration
- **Information architecture**: Designed for sequential, non-visual navigation

## How the Prompts Encode This Process

The prompts below translate my methodology into five specific steps:

1. **Page Context Analysis** → Establishes communication framework from titles, headings, metadata
2. **Surrounding Content Analysis** → Narrows to section-level intent and visual placement
3. **Classification & Intent** → Synthesizes context with image content to determine function
4. **Alt Text Generation** → Creates concise description (≤140 chars) serving author's intent
5. **Structured Alternative** → Provides tables/lists for complex visual data when needed

## Good Alt Text vs Bad Alt Text

**❌ Poor:** "Image of a graph with blue and red bars showing different heights representing data points across time periods with labels and a legend"

**✅ Good:** "Quarterly sales up 40%, mobile revenue leading growth"

The difference: Lead with meaning, not appearance. Every word earns its place within the 140-character cognitive load limit.

---

## The Prompts

I've encoded my methodology into three formats:

> Note: Do **not** use a reasoning model for these prompts. Step by step reasoning instructions for reasoning models causes them to overthink.

### Option 1: Comprehensive Prompt (for Claude, ChatGPT, Gemini)
Use this when you have a powerful model that can handle complex multi-step reasoning.

```markdown
You are an expert accessibility professional specializing in modality translation between visual and non-visual information.

Your task: ANALYZE the provided image within its page context and CREATE appropriate alt text following WCAG guidelines.

<inputs>
  <page_context>
    <!-- Extracted page metadata, title, headings, purpose -->
    {{PAGE_CONTEXT}}
  </page_context>

  <surrounding_content>
    <!-- Text immediately before/after the image -->
    {{SURROUNDING_CONTENT}}
  </surrounding_content>

  <raw_image>
    <!-- Attached: image file showing the image in isolation -->
  </raw_image>

  <contextual_image>
    <!-- Attached: screenshot showing image within page layout -->
  </contextual_image>
</inputs>

## ANALYSIS PROCEDURE

### Step 1: EXTRACT Page Context
ANALYZE <page_context> and IDENTIFY:
- Primary purpose and communication goal
- Target audience characteristics
- Content domain (commercial/educational/informational)

### Step 2: EVALUATE Surrounding Context
EXAMINE <surrounding_content> and <contextual_image> to DETERMINE:
- Immediate textual relationships
- Visual hierarchy and prominence
- Functional role within page structure
- Context influence level: HIGH | MEDIUM | LOW

### Step 3: CLASSIFY Image Function
CLASSIFY the image into exactly ONE category:

<classification_criteria>
  DECORATIVE:
    - Purely aesthetic or redundant with text
    - No information lost if removed
    - Examples: spacers, borders, redundant icons

  SIMPLE_INFORMATIVE:
    - Conveys specific, essential information
    - Can be described in ≤140 characters
    - Examples: product photos, headshots, illustrations

  COMPLEX_INFORMATIVE:
    - Contains data, relationships, or processes
    - Requires structured alternative
    - Examples: charts, graphs, infographics, diagrams
</classification_criteria>

### Step 4: GENERATE Alt Text

<output>
  <classification>[DECORATIVE | SIMPLE_INFORMATIVE | COMPLEX_INFORMATIVE]</classification>

  <author_intent>
    [Why this image was chosen for this context]
  </author_intent>

  <alt_text>
    <!-- DECORATIVE: "" (empty string)
         SIMPLE_INFORMATIVE: Meaningful description ≤140 characters
         COMPLEX_INFORMATIVE: Brief summary + "Full data table follows" -->
  </alt_text>

  <rationale>
    [Explain classification and alt text decisions based on context analysis]
  </rationale>
</output>

### Step 5: CREATE Structured Alternative (if COMPLEX_INFORMATIVE)

<structured_alternative>
  <!-- Generate markdown table for data
       OR hierarchical list for processes
       OR detailed breakdown for infographics -->
</structured_alternative>
```

### Option 2: Step-by-Step Prompt (for Smaller/Local Models)

```markdown
ROLE: You are an expert accessibility professional specializing in creating alt text for screen reader users.

TASK: We'll work together step-by-step to CREATE appropriate alt text for an image.

## STEP 1: ANALYZE Page Context

<page_info>
  <title>{{PAGE_TITLE}}</title>
  <headings>{{KEY_HEADINGS}}</headings>
  <type>{{WEBSITE_TYPE}}</type>
</page_info>

IDENTIFY the page's:
1. Primary purpose
2. Target audience
3. Communication goal

## STEP 2: EXAMINE Local Context

<surrounding_text>
{{SURROUNDING_TEXT}}
</surrounding_text>

DETERMINE:
- Why was an image placed here?
- What information gap does it fill?
- How does it support the text?

## STEP 3: DESCRIBE the Image

[Attach raw image]

OBSERVE and LIST:
- Main subjects
- Visual composition
- Text within image
- Data or relationships shown

## STEP 4: INTEGRATE Context with Visual

[Attach contextual screenshot]

EVALUATE the image's:
- Visual prominence (large/medium/small)
- Position relationship to text
- Functional role on page

## STEP 5: CLASSIFY the Image

APPLY these criteria:

<decision_tree>
  Q1: Would removing this image lose information?
    NO + text explains everything = DECORATIVE
    YES → Continue

  Q2: Can the essential info fit in 140 characters?
    YES = SIMPLE_INFORMATIVE
    NO = COMPLEX_INFORMATIVE
</decision_tree>

OUTPUT: [DECORATIVE | SIMPLE_INFORMATIVE | COMPLEX_INFORMATIVE]

## STEP 6: CREATE Alt Text

<requirements>
  DECORATIVE → alt=""
  SIMPLE_INFORMATIVE → Concise description (≤140 chars)
  COMPLEX_INFORMATIVE → Summary + "Full data table follows"
</requirements>

GENERATE:
<alt_text>{{YOUR_ALT_TEXT}}</alt_text>

IF COMPLEX, also CREATE:
<structured_alternative>
  {{TABLE_OR_LIST}}
</structured_alternative>
```

### Option 3: Parallel Processing (for Speed)

Run these three prompts simultaneously for fastest results:

**Track A - Context Extraction:**
```markdown
ROLE: Accessibility context analyst

TASK: EXTRACT key page information for alt text generation

<input>
  <page_data>{{PAGE_CONTEXT}}</page_data>
</input>

IDENTIFY and OUTPUT:
<context_analysis>
  <purpose>[commercial|educational|informational]</purpose>
  <audience>{{TARGET_AUDIENCE}}</audience>
  <intent>{{PRIMARY_COMMUNICATION_GOAL}}</intent>
</context_analysis>
```

**Track B - Visual Analysis:**
```markdown
ROLE: Visual content analyst

TASK: ANALYZE image for accessibility description

[Attach image]

EXTRACT and OUTPUT:
<visual_analysis>
  <subjects>{{MAIN_SUBJECTS}}</subjects>
  <data_present>[yes|no]</data_present>
  <text_in_image>{{ANY_TEXT}}</text_in_image>
  <complexity>[simple|complex]</complexity>
</visual_analysis>
```

**Synthesis - Final Alt Text Generation:**
```markdown
ROLE: Expert accessibility professional

TASK: SYNTHESIZE analyses to CREATE final alt text

<context_result>{{TRACK_A_OUTPUT}}</context_result>
<visual_result>{{TRACK_B_OUTPUT}}</visual_result>
<surrounding>{{SURROUNDING_TEXT}}</surrounding>

CLASSIFY using this logic:
- No unique info + redundant with text = DECORATIVE
- Essential info + ≤140 chars = SIMPLE_INFORMATIVE
- Data/complex relationships = COMPLEX_INFORMATIVE

OUTPUT:
<final_output>
  <classification>{{TYPE}}</classification>
  <alt_text>{{ALT_TEXT}}</alt_text>
  <structured_alt>{{IF_COMPLEX}}</structured_alt>
</final_output>
```

**Why this parallel approach works:**
- **Separation of concerns**: Each track focuses on one domain (context vs. visual)
- **Expert framing**: Each prompt activates specialized knowledge
- **Clear synthesis**: Final prompt explicitly combines insights
- **Maintains rigor**: Classification criteria prevent arbitrary decisions

## Which Prompt Should You Use?

**Option 1 (Comprehensive):** Best for Claude Opus/Sonnet or GPT-4+ when accuracy matters most
**Option 2 (Step-by-Step):** Best for GPT-3.5, smaller models, or when you want to see the reasoning process
**Option 3 (Parallel):** Best when speed matters and you can run multiple prompts simultaneously

---

## Supporting Tools

### JavaScript for Context Extraction

This JavaScript extracts the contextual information needed for the prompt:

```javascript
function extractPageContext() {
    // Helper function to trim text and normalize whitespace
    const trimText = (text) => {
      if (!text) return '';
      // Replaces multiple whitespace characters (including newlines) with a single space
      return text.trim().replace(/\s+/g, ' '); 
    };
  
    // Get page title
    const pageTitle = document.title;
    
    // --- HEADING EXTRACTION WITH DE-DUPLICATION ---
    const allHeadings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    const uniqueHeadings = [];
    const seenHeadings = new Set();
  
    allHeadings.forEach(heading => {
      // 1. Check if the element is visible on the page
      // (offsetParent is null for hidden elements)
      if (heading.offsetParent === null) {
        return;
      }
      
      const text = trimText(heading.textContent);
      
      // 2. Skip if the heading is blank
      if (text.length === 0) {
        return;
      }
      
      const level = parseInt(heading.tagName.charAt(1));
      const key = `${level}-${text}`; // Create a unique key from level and text content
      
      // 3. Add the heading only if it hasn't been seen before
      if (!seenHeadings.has(key)) {
        uniqueHeadings.push({ level, text });
        seenHeadings.add(key);
      }
    });
    // --- END HEADING EXTRACTION ---
  
    // Use the clean, unique list of headings
    const headings = uniqueHeadings;
  
    // Get meta description
    const metaDescription = trimText(document.querySelector('meta[name="description"]')?.content);
    
    // Function to get content from semantic elements or ARIA role equivalents
    const getSemanticContent = (selector, role) => {
      let element = document.querySelector(selector) || document.querySelector(`[role="${role}"]`);
      if (!element || element.offsetParent === null) { // Also check for visibility here
          // If the primary element is hidden, try the role-based one
          element = document.querySelector(`[role="${role}"]`);
          if (!element || element.offsetParent === null) return '';
      }
      
      const links = Array.from(element.querySelectorAll('a'))
        .map(a => trimText(a.textContent))
        .filter(text => text.length > 0 && text.length < 50)
        .filter((text, i, arr) => arr.indexOf(text) === i) // Deduplicate links within the landmark
        .slice(0, 5);
        
      if (links.length > 0) {
        return links.join(' • ');
      }
      
      return trimText(element.textContent).substring(0, 200) + (element.textContent.length > 200 ? '...' : '');
    };
    
    // Get current URL
    const currentUrl = window.location.href;
    
    // Get keywords
    const keywords = document.querySelector('meta[name="keywords"]')?.content || '';
    
    // Get Open Graph data
    const ogTitle = document.querySelector('meta[property="og:title"]')?.content || '';
    const ogDescription = trimText(document.querySelector('meta[property="og:description"]')?.content);
    const ogType = document.querySelector('meta[property="og:type"]')?.content || '';
    
    // Try to detect page type
    const detectPageType = () => {
      if (document.querySelector('article, [role="article"]')) return 'Article';
      if (ogType.includes('article')) return 'Article';
      if (ogType.includes('video')) return 'Video';
      return 'General';
    };
    
    // Get landmark regions
    const landmarks = {
      header: getSemanticContent('header', 'banner'),
      nav: getSemanticContent('nav', 'navigation'),
      main: getSemanticContent('main', 'main'),
      aside: getSemanticContent('aside', 'complementary'),
      footer: getSemanticContent('footer', 'contentinfo')
    };
    
    // --- MARKDOWN OUTPUT GENERATION ---
    let markdownOutput = `# ${pageTitle}\n\n`;
    markdownOutput += `**URL:** ${currentUrl}\n`;
    markdownOutput += `**Page Type:** ${detectPageType()}\n\n`;
    
    if (metaDescription) {
      markdownOutput += `**Description:** ${metaDescription}\n\n`;
    }
    
    if (keywords) {
      markdownOutput += `**Keywords:** ${keywords}\n\n`;
    }
    
    if (ogTitle || ogDescription || ogType) {
      markdownOutput += `## Open Graph Data\n\n`;
      if (ogTitle && ogTitle !== pageTitle) markdownOutput += `**OG Title:** ${ogTitle}\n`;
      if (ogDescription && ogDescription !== metaDescription) markdownOutput += `**OG Description:** ${ogDescription}\n`;
      if (ogType) markdownOutput += `**OG Type:** ${ogType}\n`;
      markdownOutput += `\n`;
    }
    
    if (headings.length > 0) {
      markdownOutput += `## Page Structure\n\n`;
      headings.forEach((heading) => {
        const indent = '  '.repeat(heading.level - 1);
        markdownOutput += `${indent}- ${heading.text}\n`;
      });
    }
    
    const hasLandmarks = Object.values(landmarks).some(content => content && content.length > 0);
    if (hasLandmarks) {
      markdownOutput += `\n## Page Landmarks\n\n`;
      for (const [name, content] of Object.entries(landmarks)) {
        if (content) {
          markdownOutput += `**${name.charAt(0).toUpperCase() + name.slice(1)}:** ${content}\n\n`;
        }
      }
    }
    
    console.log(markdownOutput);
    return markdownOutput;
  }
  
  extractPageContext();
```

## How to Use This Pattern

1. **Extract page context** using the JavaScript in Supporting Tools
2. **Capture screenshots** of both the raw image and image-in-context
3. **Choose your prompt** based on your model's capabilities (see guide above)
4. **Run the prompt** with the extracted context and images
5. **Receive alt text** optimized for the author's intent and screen reader UX

---

## Why This Is a Ladder

This pattern embodies the [ladder philosophy](/writing/building-ladders-extending-human-agency-with-ai): encoding expert knowledge into rungs others can climb.

Instead of forcing creators to learn accessibility guidelines, it meets them where they are—letting them express through visual design while the ladder translates their intent into equivalent non-visual experiences. Each step is a rung: understanding context, recognizing patterns, making classification decisions, applying UX constraints.

The result: My years of accessibility expertise become a tool anyone can use. Technology adapts to humans, not the other way around.