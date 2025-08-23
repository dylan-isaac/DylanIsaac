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

This ladder enables anyone to generate contextually appropriate alt text by encoding accessibility expertise into a reusable pattern. It extracts the creator's epistemology—their way of understanding and organizing information—from the page's markup, headings, proximity relationships, and metadata.

## Key Innovation: Extracting Author Intention

Traditional alt text generators only analyze the image itself. This pattern is different—it reads the entire context to understand *why* the author chose this image. By analyzing:

- **Page structure** through DOM headings and title
- **Proximity and size** indicating relationships
- **Visual semantics** from the image placement
- **Structural patterns** showing usage intent

The AI can determine not just what's in the image, but what the author intended to communicate through it.

## The Prompt Pattern

```markdown
You are an expert accessibility professional performing modality translation. Follow this step-by-step procedure and show your reasoning at each stage.

## **Input Parameters:**
<page_context>
{{PAGE_CONTEXT}}
</page_context>

<surrounding_content>
{{SURROUNDING_CONTEXT}}
</surrounding_content>

<image>
[The raw image file called image.* attached to the chat message]
</image>

<image-on-page>
[The image file called image-on-page.* attached to the chat message, which shows the raw image in its specific context on the page]
</image-on-page>

### **Procedure - Follow Each Step:**

**Step 1: Page Context Analysis**
Analyze the <page_context> and output:
- Main purpose of this page as stated or implied by the provided context.
- Core themes being discussed based on the content provided.
- Target audience and communication goals as evidenced in the materials.

**Step 2: Surrounding Content Analysis**
Analyze the <surrounding_content> and the visual placement of the <image> within <image-on-page>. Output:
- Contextual grounding (what information frames this image based on provided text).
- Tone and style of the content as written.
- Specific topic being discussed in this section according to the text.
- Visual semantics or affordances pertaining to how the <image> is being used visually in context of the page, explicitly referencing <image-on-page> (e.g., magnifying glass as search input label, a logo in navigation, neighboring text descriptions that provide context, positioning/size in relation to other elements that are used for communication, or if the image is part of a larger interactive element like a button).
- **Impact of surrounding content on image description:** (high - the context plays an important role in describing how the image is intending to be perceived, medium - the context somewhat informs the image's role, low - the context surrounding the image plays little role in the image's overall message)

**Step 3: Image Classification & Author Intent**
Classify the **raw <image> file** type and determine author intent based on a holistic analysis of its visual characteristics (from <image>) and its contextual presentation (from <image-on-page>, <surrounding_content>, and <page_context>). Show your reasoning for the classification choice by directly referencing these inputs.

- **Image Type (Select one and provide detection rationale):**
    - **Decorative Image:**
        - **Detection Rules:** Adds visual appeal but conveys no meaningful information relevant to the content independently; if removed, the user wouldn't lose any understanding because its meaning is fully conveyed by accompanying text or other elements; often consists of spacers, borders, abstract background images, or icons that are redundant/next to visible text. **Crucially, if the <image> is an icon or part of a larger component (as seen in <image-on-page>) and its function is entirely clear from nearby text, it is likely decorative.**
        - **Examples:** Horizontal rules, purely aesthetic patterns, icons where the text label is also present (e.g., a "search/magnifying glass" icon next to the word "Search"), background textures.
    - **Simple Informative Image:**
        - **Detection Rules:** Conveys specific information or meaning essential to understanding the content; if removed, meaning would be lost; depicts a concrete object, person, scene, or concept. Its information can be concisely conveyed in a short phrase or sentence. **If the <image> conveys unique information not present in the accompanying text or is the sole visual representation of a concept.**
        - **Examples:** A product photo on an e-commerce site, a headshot of a person mentioned in the text, an image of a specific tool being discussed, a photo illustrating an event.
    - **Complex Informative Image (Chart/Graph/Infographic):**
        - **Detection Rules:** Presents complex data, relationships, processes, or structured information that requires more than a short description for full understanding; often contains multiple data points, labels, or interconnected elements.
        - **Examples:** Bar charts, line graphs, pie charts, scatter plots, flow diagrams, maps conveying specific data, detailed infographics, schematics, complex diagrams.

- **Author Intent:** Why this specific <image> was chosen for this context, based on visual evidence from <image> and its placement/function within <image-on-page> and <surrounding_content>. Describe what the image appears intended to communicate.
- **Key Information:** What the <image> visually communicates to users. Describe what is shown in the <image>. Explain *how* the **raw <image> file** (e.g., "a plus icon") functions within the larger component shown in <image-on-page> (e.g., "the button labeled 'Create'"). **Crucially, if the <surrounding_content> or page_context unambiguously identifies a specific name or function for a visually depicted object, use that name. Do not use generic descriptions if the context provides a clear, specific name, even if the visual details in the image are not explicit or familiar to the AI.**
- **Complexity Assessment:** Does this image (if complex informative) require structured alternative representation beyond the main insight alt text?

**Step 4: Alt Text Generation**
Create appropriate alt text for the **raw <image> file** based on its classification in Step 3 and the comprehensive context from Steps 1 and 2.

*Naming Guidelines:*
- If the page or section text (from <page_context> or <surrounding_content>) refers to a subject, and the <image> depicts an object matching that context, you may use that name in the alt text.
- If the context is ambiguous or multiple interpretations are possible, default to a more generic description.
- Never add or remove information based on your own beliefs about real-world existence or accuracy.

- **For Simple Informative Images:** Generate concise alt text (maximum 2 sentences, 140 characters preferred) that captures the visual content and any text visible *within the image itself*.
- **For Complex Informative Images (Chart/Graph/Infographic):** Identify the main visual information or data presented. Format this as a concise alt text (maximum 2 sentences, 140 characters preferred) describing what is shown. Append the exact message: "A more complete alternative [data table/structured breakdown - choose based on content] exists below this image."
- **For Decorative Images:** Provide an empty alt text: "".

**Rationale for Alt Text Decision:** Explicitly explain *why* the chosen alt text (or empty string) is appropriate for the **raw <image> file**, directly referencing:
1.  The image type determined in Step 3.
2.  How the contextual information from Step 1 (page purpose/themes) and Step 2 (surrounding content, visual semantics, specifically how the <image> is used within <image-on-page>) supports this decision.
3.  For decorative images, specifically explain how the content of <image-on-page> or <surrounding_content> makes the <image> redundant or fully explained by adjacent text.

**Step 5: Structured Alternative (if applicable)**
If Step 3 identified a Complex Informative Image, create a structured accessible alternative describing the visual information presented.
- **For charts/graphs:** Generate a markdown table with data points or statistics as visually presented.
- **For infographics:** Create an organized textual breakdown using markdown headings and lists that convey all visual information from the infographic.
- **Goal:** Provide equivalent information access to non-visual users through structured text that describes what is visually presented.
```

## Supporting Script: Extract Page Context

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

## How to Use This Ladder

1. **Run the extraction script** on the page containing the image to get the page context
2. **Capture a screenshot** of the image in its page context
3. **Feed both to an LLM** along with this prompt pattern
4. **Receive contextually appropriate alt text** that reflects the author's intention

## What Makes This a Ladder

This pattern builds a bridge between visual and non-visual understanding by:
- Encoding accessibility expertise into a reusable format
- Extracting implicit author intention from explicit page structure
- Translating between epistemologies (ways of knowing)
- Making expert knowledge accessible to non-experts
- Creating equivalent experiences across modalities

As described in ["Building Ladders: Extending Human Agency with AI"](/writing/building-ladders-extending-human-agency-with-ai), this tool doesn't force users to adapt to technology—it makes technology adapt to human needs by understanding context and intention.