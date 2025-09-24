---
title: "Alt Text Generation: Translating Visual to Non-Visual Understanding"
description: "An AI-powered pattern that extracts author intention from page context to create equivalent experiences through accessibility metadata"
type: "ladder"
capabilities:
  - "Extracts author intention from page structure and context"
  - "Classifies images as decorative, simple informative, or complex informative"
  - "Generates contextually appropriate alt text within 150 character limit"
  - "Creates structured alternatives for complex data visualizations"
  - "Performs epistemological translation between visual and non-visual modalities"
usage: "Use this prompt with an LLM to analyze images in their page context and generate appropriate alternative text that creates equivalent experiences for screen reader users"
tags: ["accessibility", "AI", "translation", "alt-text", "web-development"]
featured: true
---

This is my personal methodology for creating alt text, encoded as a [ladder](/writing/building-ladders-extending-human-agency-with-ai) you can climb. After years as an accessibility expert, I've mapped the line of questioning I use when writing alt text into prompts that extract author intention from page structure—the implicit human variables that were previously locked behind expert judgment. It's [modality translation](/definitions/modality-translation) in action—converting visual information into equivalent textual experiences.

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

The breakthrough: Author intent and page purpose aren't hidden—they're embedded in programmatically accessible content. DOM structure, headings, surrounding text, and metadata all contain the contextual signals needed for meaningful alt text. By extracting these signals and feeding them to an LLM with the right questioning framework, we can generate alt text that serves the author's actual communication intent.

## The Five-Step Methodology I Designed for LLMs

The following is a process I've designed for LLMs to follow, based on my accessibility expertise. Each step extracts specific programmatic signals and transforms them into meaningful descriptions that can be used to assist in writing contextual alt-text:

### Checklist Overview
1. **Extract page context** → Decode author intent from structure
2. **Analyze surrounding content** → Determine functional placement
3. **Classify image type** → Apply systematic decision criteria
4. **Generate alt text** → Create description serving author's intent
5. **Validate output** → Confirm accuracy and screen reader UX

### Step-by-Step Process

#### Step 1: Extract Context to Decode Intention
Analyze page structure, headings, and metadata to understand *why* this image was chosen. The same photo needs different descriptions in different contexts—product page vs. news article vs. portfolio.

#### Step 2: Analyze Surrounding Content for Functional Role
Examine immediate text context, visual prominence, and placement to determine what information gap the image fills.

#### Step 3: Classify Function Using Decision Criteria
Apply systematic classification:
- **Decorative**: No unique information → Empty alt text
- **Simple Informative**: Essential info in ≤150 characters
- **Complex Informative**: Data/relationships → Alt text + structured alternative

#### Step 4: Generate Optimized Alt Text
Create functional descriptions that serve as true text alternatives:
- **Character limit**: Maximum 150 characters (users can't navigate within alt text like regular text)
- **Lead with purpose**: Convey function and meaning, not visual appearance
- **Serve author's intent**: What would someone miss without this image?
- **Avoid redundancy**: Never include "image of", "picture of", or "graphic of"—screen readers already announce the image role

#### Step 5: Validate for Screen Reader UX
Confirm output serves sequential, non-visual navigation needs. For complex visuals, provide structured alternatives (tables/lists) for data exploration.

## How the Prompts Encode This Process

The prompts below translate my methodology into five specific steps with built-in validation:

1. **Page Context Analysis** → Establishes communication framework from titles, headings, metadata
2. **Surrounding Content Analysis** → Narrows to section-level intent and visual placement
3. **Classification & Intent** → Synthesizes context with image content to determine function
4. **Alt Text Generation** → Creates concise description (≤150 chars) serving author's intent
5. **Self-Validation & Error Handling** → Verifies output quality and handles insufficient context

## Good Alt Text vs Bad Alt Text

**❌ Poor:** "Image of a graph with blue and red bars showing different heights representing data points across time periods with labels and a legend"

**✅ Good:** "Quarterly sales up 40%, mobile revenue leading growth"

The difference: Lead with meaning, not appearance. Every word earns its place within the 150-character cognitive load limit.

---

## The Prompts

I've encoded my methodology into two formats:

> Note: Do **not** use a reasoning model for these prompts. Step by step reasoning instructions for reasoning models causes them to overthink.

### Option 1: Comprehensive Prompt (for Claude, ChatGPT, Gemini)
Use this when you have a powerful model that can handle complex multi-step reasoning. This is the optimized version after refinement through OpenAI's prompt optimizer.

You'll notice that much of the prompt is wrapped in XML tags. Language models speak the conventions of programming languages just as well as natural language. The XML tags give us a clear grammar for establishing consistent symbols for semi-structured data like the structure below. 

```markdown
Role: Accessibility expert specializing in converting visual images into accessible textual formats compliant with WCAG standards.

Checklist:
1. Extract page purpose, author intent, intended audience, and domain
2. Analyze surrounding content and image display context
3. Classify image
4. Generate output in strict XML-like structure
5. Include error handling if information is insufficient

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

Instructions:
- Begin with the checklist above for each image.
- Analyze the provided image and its full page context to generate accurate alt text.
- Follow the specified multi-step analysis procedure to ensure contextually appropriate image classification and description:

1. Extract main purpose, communication goal, intended audience, and domain from <page_context>.

2. Evaluate <surrounding_content> and <contextual_image> for the image's role, visual prominence, and textual associations.

3. Classify the image as DECORATIVE, SIMPLE_INFORMATIVE, or COMPLEX_INFORMATIVE using the provided explicit criteria:
   - **DECORATIVE**: Purely aesthetic or redundant with text, no information lost if removed
   - **SIMPLE_INFORMATIVE**: Conveys specific, essential information in ≤150 characters
   - **COMPLEX_INFORMATIVE**: Contains data, relationships, or processes requiring structured alternative

4. Generate alt text and rationale according to classification:
   - For **DECORATIVE**: alt_text = ""
   - For **SIMPLE_INFORMATIVE**: Alt description ≤150 characters
   - For **COMPLEX_INFORMATIVE**: Concise summary plus "Full data table follows." and structured alternative (markdown table, list, or detailed breakdown)
   - For **insufficient context**: Output error in all required fields, classification = "UNDETERMINED"

Output Policy:
- Always use the required structured XML-like output format below.
- Never generate <structured_alternative> for images classified as DECORATIVE or SIMPLE_INFORMATIVE.
- For ambiguous or incomplete information, supply error messages in designated fields and set classification to 'UNDETERMINED.'

After generating the output, validate that each required output field is present, corresponds with the image classification, and that no <structured_alternative> is included except for COMPLEX_INFORMATIVE classifications. If validation fails, self-correct and return a revised output.

Output Format:
<output>
  <classification>DECORATIVE | SIMPLE_INFORMATIVE | COMPLEX_INFORMATIVE | UNDETERMINED</classification>
  <author_intent>Why this image appears in this location / error message if unknown</author_intent>
  <alt_text>Concise and contextually appropriate description / error message</alt_text>
  <rationale>Justification for your classification and alt text / error message</rationale>
  [<structured_alternative>Markdown table, list, or detailed breakdown when image is COMPLEX_INFORMATIVE only</structured_alternative>]
</output>
```

### Option 2: Prompt Chain for Small/Local Models

Small and local models often cannot hold complex state across multiple steps. Instead of one long prompt trying to guide them through everything, break it into 5 focused prompts that chain together. Each prompt does ONE thing well, then passes its output to the next. You review and can correct at each natural decision point.

> **Parallelization Note:** Prompts 1 and 2 can run simultaneously since they analyze different inputs (page context vs. image). Their outputs then feed into Prompt 3. This can save time on final determination

**Prompt 1: Extract Page Context**
```markdown
ROLE: Context analyst specializing in understanding page purpose and author intent as it relates to an image.

INPUTS:
- PAGE_TITLE: The browser tab title (from <title> tag)
- KEY_HEADINGS: The h1, h2, h3 headers that structure the page
- PAGE_URL: The web address showing domain and path
- TEXT_NEAR_IMAGE: Paragraphs immediately before/after the image location

INPUT:
<page_data>
  <title>{{PAGE_TITLE}}</title>
  <headings>{{KEY_HEADINGS}}</headings>
  <url>{{PAGE_URL}}</url>
  <surrounding_text>{{TEXT_NEAR_IMAGE}}</surrounding_text>
</page_data>

TASK: Extract the page's essential context to understand its purpose and how it may relate to the image we're critically analyzing.

OUTPUT exactly this structure:
<context_analysis>
  <purpose>{{WHY_THIS_PAGE_EXISTS}}</purpose>
  <audience>{{WHO_THIS_IS_FOR}}</audience>
  <image_placement_reason>{{WHY_AN_IMAGE_IS_HERE}}</image_placement_reason>
</context_analysis>
```

**Prompt 2: Analyze Visual Content**
```markdown
ROLE: Visual analyst specializing in systematic image description.

DEFINITIONS:
- MAIN_SUBJECTS: The primary objects, people, or elements visible
- TEXT_IN_IMAGE: Actual words/labels that appear within the image itself
- DATA_PRESENT: Whether the image shows charts, graphs, or data visualizations
- VISUAL_COMPLEXITY: Simple (few elements) or Complex (many elements/relationships)

[Attach image]

TASK: Describe what you see factually, without interpretation.

OUTPUT exactly this structure:
<visual_analysis>
  <main_subjects>{{WHAT_IS_IN_THE_IMAGE}}</main_subjects>
  <text_in_image>{{ANY_TEXT_VISIBLE}}</text_in_image>
  <data_present>{{yes|no}}</data_present>
  <visual_complexity>{{simple|complex}}</visual_complexity>
</visual_analysis>
```

**Prompt 3: Classify Image Function**
```markdown
ROLE: Accessibility expert determining image classification.

DEFINITIONS:
- DECORATIVE: Image adds no information beyond what text already provides
- SIMPLE_INFORMATIVE: Image conveys essential info that fits in 150 characters
- COMPLEX_INFORMATIVE: Image contains data/relationships requiring detailed description

INPUTS from previous steps:
<context>{{PROMPT_1_OUTPUT}}</context>
<visual>{{PROMPT_2_OUTPUT}}</visual>

DECISION TREE:
1. Would removing this image lose information?
   NO + text explains it = DECORATIVE
   YES → Continue

2. Can essential info fit in 150 characters?
   YES = SIMPLE_INFORMATIVE
   NO = COMPLEX_INFORMATIVE

OUTPUT exactly:
<classification>
  <type>{{DECORATIVE|SIMPLE_INFORMATIVE|COMPLEX_INFORMATIVE}}</type>
  <reasoning>{{WHY_THIS_CLASSIFICATION}}</reasoning>
</classification>
```

**Prompt 4: Generate Alt Text**
```markdown
ROLE: Alt text writer creating screen reader-optimized descriptions.

INPUTS:
<context>{{PROMPT_1_OUTPUT}}</context>
<visual>{{PROMPT_2_OUTPUT}}</visual>
<classification>{{PROMPT_3_OUTPUT}}</classification>

RULES:
- DECORATIVE → alt=""
- SIMPLE_INFORMATIVE → Description ≤150 characters, lead with meaning not appearance
- COMPLEX_INFORMATIVE → Brief summary + "Full data table follows"

OUTPUT:
<alt_text>
  <text>{{YOUR_ALT_TEXT}}</text>
  <character_count>{{NUMBER}}</character_count>
</alt_text>

[If COMPLEX_INFORMATIVE, also output:]
<structured_alternative>
{{TABLE_OR_LIST}}
</structured_alternative>
```

**Prompt 5: Validate and Finalize**
```markdown
ROLE: Quality validator ensuring accessibility standards.

INPUTS:
<context>{{PROMPT_1_OUTPUT}}</context>
<classification>{{PROMPT_3_OUTPUT}}</classification>
<alt_text>{{PROMPT_4_OUTPUT}}</alt_text>

VALIDATE:
1. Does classification match the alt text format?
2. Is character count appropriate?
3. Does it serve the page's purpose?
4. Would a screen reader user understand the same thing?

OUTPUT:
<final_output>
  <classification>{{TYPE}}</classification>
  <alt_text>{{FINAL_TEXT}}</alt_text>
  <validation_status>{{passed|needs_revision}}</validation_status>
  [<revision_notes>{{WHAT_TO_FIX}}</revision_notes>]
</final_output>
```


## Which Prompt Should You Use?

**Option 1 (Comprehensive):** Best for top of the line models like the higher end Claude, ChatGPT, and Gemini models when accuracy matters most. One prompt handles everything.

**Option 2 (Prompt Chain):** Best for smaller and local models, or when you want human review at each decision point. Five focused prompts that each do one thing well.

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