---
title: "Building Ladders: Extending Human Agency with AI"
publishDate: 2025-08-20T12:00:00.000Z
description: "How AI can bridge the gap between human intent and digital experiences by adapting to people rather than forcing them to adapt"
tags: ["AI", "Accessibility", "Patterns", "Translation", "Agency", "Human-Centered-Tech", "Open-Source"]
type: "article"
draft: false
---

## My Career's Shared Thread

I spent years doing what seemed like completely different jobs—full-stack developer, accessibility coach, AI engineer—before I realized I'd been doing the same job all along.

I've always been a translator between worlds.

As a developer, I translated between front-end and back-end. As an accessibility coach, between disabled and non-disabled experiences. Now as an AI engineer, between human intention and machine comprehension. But no role embodied this translation work more than coaching.

As an accessibility coach, I embedded myself in product teams. Not to enforce rules, but to translate. I'd sit with a designer who understood visual hierarchy perfectly but had never considered how that hierarchy translates to someone navigating by keyboard. I'd work with developers who could optimize React hook but had never thought about how their loading states affect screen reader users. My job wasn't just teaching accessibility—it was translating one world's logic into another's language.

Then it hit me: What else has access to knowledge across disciplines? What else can reframe complex information using the receiver's own mental models? What else acts as a translator between different ways of knowing?

**Large Language Models.**

If accessibility coaching is translating between epistemologies (see my article on [epistemological translation as a concept](/writing/reframing-accessibility-ai-as-an-epistemological-translator)) to help teams build inclusive experiences, then AI engineering is building the translators themselves—giving everyone the ability to approach domains that were previously opaque to them.

## The Vision That Drives Everything

> **To make the digital world equitable by giving *everyone* the ability to engage with complex domains via trusted and tested shared procedures on trusted models.**

This isn't about making things easier. It's about recognizing that expertise shouldn't be gatekept by whether you think in the "right" way. That innovation shouldn't be limited to those who intuitively grasp our current interfaces. That human potential shouldn't be constrained by the historical accident of how we built our tools. Just because you're better at using technology doesn't make you smarter or your perspective more important.

## The Rule We Need to Break

For decades, computing has followed one ironclad rule: **humans adapt to computers**. 

We memorize keyboard shortcuts. We learn programming syntax. We internalize the logic of file systems and command lines. We learn to navigate the mazes of forms and cookie banners. This has left the benefits of computing to concentrate among those who think like computers—or can afford to pay someone who does.

But what if we could flip this entirely?

**What if computers adapted to humans?**

## The Moment It Clicked: Apple Math Notes

I was in college when a math major friend complained about LaTeX. "I've been writing equations by hand for fifteen years," he said. "Now I have to learn a programming language just to write what I already know how to write?"

Fast forward to iOS 18's Math Notes. You write equations by hand. The system recognizes your notation and computes the results and even graphs it. No new syntax. No learning to navigate a TI-84's menus. No adaptation required. 

Think about what this means. We developed mathematical notation over centuries—a visual language refined by countless mathematicians. Then computers arrived and said: "Forget all that. Learn our way." and just because of their power, we said "ok". What if computers don't have to be this way. What if it was obvious to all that because you don't know how to use an antiquated calculator's menus, it doesn't make incapable of advanced mathematics?

Math Notes says: "Keep writing how you've always written. We'll adapt to you" and that's how computers _should_ be. They're _our_ computers aren't they?

Apple isn't using LLMs in Math Notes, but it is a form of AI. There is also no reason it can't be applied to LLMs ability to structure unstructured language information into something a computer system understands and can augment. 

This is the bridge AI can be. Not forcing us to abandon human conventions refined over millennia, but [building ladders](/definitions/building-ladders) between our intuitive understanding and computational power. I call these types of adaptation systems "Building ladders". It's building [ladders](/definitions/ladders) between one way of looking at the world and adapt it to another. To make a discipline that one thought they could never engage with and relate it to them on terms they can finally understand.

## Building a Real Ladder: Alt Text as Translation

Let me show you what [building ladders](/definitions/building-ladders) looks like through something I've been developing. Not just any alt text generator—but one that aims to create an equivalent experience by translating between visual and non-visual understanding by utilizing the line of questioning an accessibility professional uses when writing an alt text.

### The Creator's [Epistemology](/definitions/epistemological-translation) Is Already There

Here's the key insight: The creator's epistemology—their way of understanding and organizing information—is embedded throughout the page's markup. It's in the heading hierarchy, the proximity of elements, the metadata, the structural choices. 

The creator's intention exists in one representation (visual design, HTML structure, content relationships) and can be interpolated through noticing and comparing various details on the page in tandem with the content itself. 

I can write these observation instructions and recipes in reusable prompts. Then that makes my accessibility expertise a reusable pattern that can snap a creator's intention to the nearest mapping to the accessibility APIs that others depend on. I imagine it working somewhat like a [drum machine's beat quantizing functionality](https://nickcesarz.com/the-case-for-quantizing-drums/) that can snap an imperfectly timed beat to the nearest correctly timed beat.

For alt text, I can use the following information that can be programmatically extracted from any page and transform it into a contextual alternative for that photo that fits within the needed ~120 character mark for an ideal alt text size for screen reader UX. This is [modality translation](/definitions/modality-translation) in action—converting visual information to text. 

- **Page structure** reveals information hierarchy through DOM headings, page title and the website itself indicates author intention (sales, news, social media, etc).
- **Proximity and size** indicates relationships through surrounding text blocks
- **Visual design** encodes importance through the image itself (the 1000 words in an image)
- **Structural patterns** show usage through element positioning

I took my years of creating alt text, mapped it to a [prompt](https://github.com/dylan-isaac/Building-Ladders--Extending-Human-Agency-with-AI--Talk-/blob/main/Demo/prompt.md) with output instructions specific to screen reader UX, and created a reusable pattern others can apply. This pattern captures how an accessibility expert thinks about this translation problem. Now a creator can express their vision using their own words and have their intention snap to the correct symbolic representation for users who depend on accessibility metadata.

<details>
<summary><strong>View the Alt Text Prompt Template</strong></summary>

```
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

</details>

### How It Actually Works

When I see a graph labeled "Semantic Feature Space" with four words plotted by gender and age, I can begin the process of decoding the visual information using the visual semantics and conventions I've internalized throughout my life. That understanding comes from synthesizing multiple signals: the visual pattern, the surrounding explanation, the page's educational context.

The AI does the same synthesis:

![Semantic Feature Space graph showing 'man', 'woman', 'boy', and 'girl' plotted on axes of Gender (x) and Age (y)](/images/semantic-feature-space.png)
*Source: [CMU Word Embedding Demo Tutorial](https://www.cs.cmu.edu/~dst/WordEmbeddingDemo/tutorial.html)*

It reads the surrounding text: *"Two refer to males, two to females. Two refer to adults, two to children."* It sees the graph structure. It understands from the page context this is educational material about word embeddings.

Then it generates not just a description, but an equivalent experience:

**Alt text:** "Scatter plot showing four words plotted by gender and age coordinates in semantic feature space."

**Structured alternative for those who want details:**
| Word | Gender (X-axis) | Age (Y-axis) | Semantic Position |
|------|-----------------|--------------|------------------|
| man | 1 (male) | 7 (adult) | Male adult characteristics |
| woman | 9 (female) | 7 (adult) | Female adult characteristics |
| boy | 1 (male) | 2 (child) | Male child characteristics |
| girl | 9 (female) | 2 (child) | Female child characteristics |

## Patterns as Infrastructure

This approach is already emerging at scale. [Fabric](https://github.com/danielmiessler/fabric), an open-source framework by Daniel Miessler, collects "patterns"—battle-tested prompts encoding expert thinking. Each pattern is a ladder. What I've shown with accessibility, others are doing for security analysis, content creation, code review.

The philosophy is profound: "AI isn't a thing; it's a magnifier of a thing. And that thing is human creativity." Experts aren't losing their value by sharing patterns—they're multiplying their impact. The infrastructure for sharing expertise is being built.

## The Choice: Walls or Ladders

Right now, as you read this, AI and technology at large, is being deployed in two fundamentally different ways:

**Walls:** Dark patterns that manipulate. Systems that obscure their workings. Tools that create dependency. Corporate AI designed to extract—your attention, your data, your agency.

**Ladders:** Tools that reveal their reasoning. Systems that teach while they assist. Bridges that connect different ways of understanding. AI that extends human agency rather than replacing it.

The choice seems obvious. But look around. How many AI tools actually empower versus extract?

## Standing on Open Shoulders

I'd like you to pause and reflect on your life. How did you get here? How did you learn what you know? What tools do you rely on everyday to make a living or to bring joy into your life and the lives of your loved ones. What is the force that raises the tides of us all? 

The answer for most of us is **openness**.

If you're technical, you built on open protocols and learned from shared code. If you're not, you still benefit from openness every day—Wikipedia's free knowledge, open source software running your favorite apps, free tutorials teaching you new skills, community forums answering your questions.

The pioneers of the last technical revolution chose to share knowledge rather than gatekeep it. They gave us `View Source`. They gave us free browsers that render the web. They gave us open standards that let anyone participate. They gave us the ability to learn by seeing, by copying, by understanding.

Now it's our turn. And the stakes are higher.

## This Is THE Challenge of Our Time

Marshall McLuhan: "We shape our tools, and thereafter our tools shape us."

Never more true than now. The AI systems we build today will shape how billions interact with information, services, each other. We continue on this trajectory where we build systems that demand human adaptation, that gatekeep knowledge, that maintain existing power structures, that continue the onslaught of slop and enshittification.

Or we can build ladders.

Not someday. **Right now.** 

Every tool you create. Every pattern you share. Every word you write—whether it's code, content, or community guidelines. Each is a vote for the world you want. The infrastructure of openness surrounds us: open source software user interfaces, free browsers rendering the web, and now free or incredibly cheap tech support via AI that can run locally on your own computer indefinitely.

## Your Turn

The tools are in our collective hands. Local models. Open frameworks like Fabric. Accessible APIs. We have everything we need.

But having tools isn't enough. The question is: What will you build with them?

My ask of you is this:

**Build ladders, not walls.**

Make your unique perspective multiplied. Allow others to benefit from your unique perspective and approach.

Take your expertise—whatever domain you know deeply—and encode it as patterns others can use. That accessibility formula you've perfected? Make it a ladder. That security analysis process you've refined? Lay it down for others to climb. That creative workflow that took you years to develop? Turn it into a pattern that can serve humanity indefinitely.

Build tools that see people in all their complexity and help them engage with the world on their own terms. Build systems that trust users rather than trapping them. Build bridges between ways of knowing rather than enforcing a single path.

Remember the open spirit that gave you your start. Pay it forward. Use your skills not to create higher barriers, but to build adaptable bridges. Contribute patterns. Share your perspectives. Multiply your impact.

Because here's the truth: The most profound innovations don't come from making people adapt to our tools. They come from people creating tools for the _service of others_ — tools that make people more capable. 

The question isn't whether AI will change how knowledge moves through the world. The question is whether that knowledge will flow freely or be dammed up behind artificial walls.

This is why I call to you: Build ladders. The world is waiting to climb.