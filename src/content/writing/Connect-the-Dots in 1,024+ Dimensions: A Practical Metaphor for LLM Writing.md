---
title: "Connect-the-Dots in 1,024+ Dimensions"
publishDate: 2025-08-18T12:00:00.000Z
description: "A Practical Metaphor for LLM Writing"
tags: ["AI", "Writing", "Patterns", "Translation", "Prompt-Engineering", "Context-Engineering"]
type: "article"
draft: true
---

## Connect-the-Dots in 1,024+ Dimensions: A Practical Metaphor for LLM Writing

The other day, a coworker was explaining the nuances of a niche Postgres feature with incredible clarity. "You should write a blog post about that," another colleague suggested. The expert sighed. "I'm already behind on my other work. I don't have time to start from a blank page."

I stopped him. "You just spent five minutes explaining this perfectly. You already have everything you need."

Think about what just happened: In explaining that feature, he effortlessly laid out the core concepts, identified common pitfalls, referenced documentation he'd used, and provided concrete examples. That explanation wasn't created from nothing—it was a verbal trace through his existing knowledge map. The dots already exist in his mind, shaped by his expertise and the resources he's consumed. He doesn't need time to create content; he needs five minutes to dump those dots onto a page.

The advice I gave him was simple: Take those key points you just articulated—your perspective, the resources you mentioned, maybe that killer example—and give them to an AI. Let it interpolate the prose between your dots. You're not starting from a blank page; you're revealing the high-dimensional map that already exists in your expertise. The blank page isn't empty; it's an invisible field of dots you've already connected in your mind. What I was describing has recently gotten a name in AI circles—context engineering—but you don't need to learn it because you're already doing it.

This essay will show you exactly how to use this technique. First, I'll give you the recipe. Then we'll explore why it works through the connect-the-dots metaphor. Finally, we'll tackle common problems and their fixes.

### An Operational Recipe: Your Dots Are Already There

This recipe isn't about creating content—it's about revealing the connect-the-dots drawing that exists in your expertise. This structured approach aligns directly with best practices from major labs like OpenAI, which advise developers to "[be specific, provide context, and structure the output format](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api)."

**Inputs (Things You Already Have):**

1.  **Your Dots (Outline):** The key points from your mental model—your core claims and acceptance tests.
2.  **Your Sources (Context Packs):** The resources that shaped your understanding. For each dot that requires factual grounding, paste in short, verbatim extracts from your sources. Don't just paste links.
3.  **Your Voice (Style Priors):** How you naturally explain things—a "do/don't" list and a 1-2 sentence exemplar of your target voice.

Notice: these aren't things you create—they're things you already have. You're documenting, not inventing.

**Process: PLAN → DRAFT → VERIFY**

1.  **PLAN:** Prompt the model for a one-screen transition plan that connects your dots and proposes any necessary bridge dots.
2.  **DRAFT:** Using the approved plan, ask the model to draft the full text. Require it to add paragraph-level `[source]` tags that trace back to your context, forcing it to map claims to evidence.
3.  **VERIFY:** Read through the draft. For every claim, check the source. Replace any unsupported sentence with a direct quote from your context or mark it as needing a source.

A note on models: Some models will tends toward verbose connections and academic tone and technical precision. Others can often produces tighter, more conversational prose. The same dots fed to different models yield different styles—experiment to find which 'drawing style' matches your voice.

### Seeing the Dots You Already Have: An Alt Text Generation Example

Let's see this in action with a real accessibility challenge. A colleague needs to generate appropriate alt text for images but thinks they need to "start from scratch." In reality, they already know:
- Images serve different purposes (decorative vs informative)
- Context determines appropriate description
- Screen readers need different information than visual users
- WCAG guidelines exist

These are their dots. Here's how they revealed them:

**PLAN Phase - Making the Dots Visible:**
```markdown
My dots (what I already know):
1. Check page context first
2. Analyze surrounding content 
3. Classify image type (decorative/simple/complex)
4. Determine author intent
5. Generate appropriate alt text based on classification

My resources (documentation I've used):
- WCAG 2.1 guidelines on images
- Screen reader behavior documentation
- Examples of good/bad alt text

My constraints (non-negotiables):
- Decorative images get empty alt=""
- Complex images need structured alternatives
- Maximum 140 characters for simple images
```

**DRAFT Phase - AI Connects the Dots:**
The colleague gives these dots to an AI with instructions to create a structured prompt. The AI doesn't invent new accessibility knowledge—it traces logical paths between the dots already provided:

```markdown
[AI Output with source tags]
"Step 1: Page Context Analysis [source: dot 1]
Analyze the page context to understand the main purpose..."

"Step 3: Image Classification [source: dot 3, WCAG guidelines]
- Decorative: Adds visual appeal but no information
- Simple Informative: Essential meaning in <140 chars  
- Complex: Charts/graphs needing structured alternatives..."
```

**VERIFY Phase - Checking the Connections:**
- ✓ Classification rules match WCAG? → Yes, verified
- ✓ 140 character limit mentioned? → Yes, included
- ✓ Structured alternative guidance? → Yes, for complex images
- ✓ Author intent consideration? → Yes, Step 3

The result: A comprehensive alt text generation prompt that captures accessibility expertise in a reusable format. The expert didn't create new knowledge—they revealed the connect-the-dots drawing that already existed in their understanding.

### The Blank Page is an Invisible Dot Field

The "connect-the-dots" model works because AI doesn't create from nothing; it traces paths through the structure you provide and the patterns it's been trained to generalize.

The Adobe Pen tool is a useful mental model. You don't paint pixels one by one; you place anchor points and let the software interpolate the curves. Adobe's documentation on the Pen tool explains that using fewer anchor points creates smoother, more manageable curves—a principle that directly applies to LLM writing. Just as excessive points make curves harder to edit, too many constraints can make prose feel stilted. Writing with LLMs follows the same principle: you place the dots (outline items, quotes, data), and the model interpolates the prose between them.

This isn't just a helpful metaphor. When AI researchers talk about 'context engineering'—structuring knowledge so LLMs can use it effectively—they're describing exactly this process. Your dots are context. Your outline is context architecture. You're not learning a new skill; you're applying expertise you already have.

### From Children's Puzzle to High-Dimensional Manifold

In a classic connect-the-dots puzzle, a child reveals a picture by drawing straight lines from one numbered dot to the next. The dots are the constraints. The lines are the completion path.

Now, let's generalize that idea. Instead of a 2D piece of paper, imagine a "semantic space" with thousands of dimensions. Your outline is the set of dots in that space. The model's job is to trace a smooth, logical path that visits each of your dots in order. The prose you read is simply that high-dimensional path rendered as sentences. This is an analogy, not a perfect mathematical description, but it provides powerful intuition for reasoning about a model's behavior.

Unlike a traditional connect-the-dots puzzle with one solution, LLMs are probabilistic. Run the same dots through twice, and you'll get different prose—like asking two writers to connect the same points. Both outputs follow your constraints but take slightly different rhetorical paths. This variability is a feature: it gives you options to choose from and reminds us that editing remains essential. The dots define the territory; the AI explores different routes through it.

### A Writer's Guide to Latent Space

At a technical level, this happens in what's called a latent space. [Embeddings map words, sentences, and entire passages to points in this high-dimensional vector space](https://www.ibm.com/think/topics/embedding). The key property, as IBM notes, is that this space is continuous; [nearby points decode to similar content](https://www.ibm.com/think/topics/latent-space). Far-apart points often represent a shift in topic, tone, or logic. Because the dimensionality is so high, this space can capture an incredible amount of nuance.

The paths are also shaped by priors. Ask for a "Computerphile-style" explanation, and the model biases its path toward regions of the space associated with short, concrete sentences. Ask for an "academic tone," and the path will curve toward hedging, citations, and complex syntax. These are powerful tendencies, not guarantees.

**Limit of the Metaphor #1:** The axes in this space aren't labeled "formality" or "humor." While we can identify directions that correlate with certain concepts, research confirms that [unsupervised learning of disentangled, human-interpretable representations is impossible without specific biases or supervision](https://proceedings.mlr.press/v97/locatello19a.html). We can't simply turn a "humor" dial from 5 to 8.

### Controlling What You Already Know: Dot Density

Your outline controls the density of the dots, which gives you a dial to tune the trade-off between control and creativity.

*   **Dense dot maps** (many bullet points, detailed tests, specific quotes) aren't about adding information—they're about revealing more of what you already know with certainty. The model has less room to wander, so the resulting prose hews closely to your intent.
*   **Sparse dot maps** (a few high-level points) leave room for the AI to interpolate, but the fundamental structure is still yours. The model has to span a greater distance between dots, giving it more freedom to make novel connections.

This mirrors vector drawing tools. As Adobe Illustrator's documentation explains, more anchor points let you fit a complex shape precisely, while fewer points give you a smoother, more elegant flow. For most blog essays, a medium density of 6–10 primary dots is the sweet spot: enough to prevent meandering, but not so many that the prose feels pinned down at every sentence.

But be careful what you infer. "More dots" does not equal "better prose." In vector art, too many points create unwanted bumps and make editing a nightmare. In writing, too many constraints can produce stilted, robotic text. Always maintain the ability to delete a few points and let the curve breathe.

### Grounding = Showing Your Work

When factual accuracy is critical, your dots must be grounded. When you provide sources, you're not researching—you're showing the AI the same materials that shaped your understanding. These are the dots that already exist in your mental model.

The most effective way to do this is to use direct extracts over abstractive summaries. Pull verbatim, bounded snippets from your source material and instruct the model to quote and cite them.

Best practices for reducing hallucinations emphasize using direct quotes from source materials rather than paraphrased content. Always verify the output against your sources. Research confirms this approach; abstractive summarization is notoriously "[highly prone to hallucinate](https://aclanthology.org/2020.acl-main.173.pdf)" content that is unfaithful to the source—with studies showing error rates above 70% in some cases.

Here's a micro-case study:

*   **Without Grounding:** You prompt, "Explain why VAEs have smooth latent spaces." The model might confidently invent incorrect technical details.
*   **With Grounding:** You provide an extract: "A core idea of VAEs is continuity: nearby points in the latent space should yield similar content when decoded." Then you prompt, "Using only the provided quote, explain VAE latent space continuity and cite your source." The model stays aligned with the facts.

This technique is a manual form of Retrieval-Augmented Generation (RAG), a process where a model is conditioned on retrieved documents to [improve factuality on knowledge-intensive tasks](https://proceedings.neurips.cc/paper/2020/file/6b493230205f780e1bc26945df7481e5-Paper.pdf).

### Voice and Style as Regularizers

Treat style as a real constraint, not as decorative lipstick you apply at the end. You can create a "style dot" by providing a small "do/don't" block that the model can pattern-match.

> **Do say:** Short sentences, concrete examples, "show then tell," note limits.
> **Don't say:** Hype adjectives, vague claims, "as everyone knows," ungrounded numbers.

Follow this with a one- or two-sentence exemplar in your own voice. Models are excellent at mirroring the patterns they see in the prompt. A common failure mode is **voice collapse**, where prose turns generic because the constraints are purely factual. You can fix this by adding a style prior and output scaffolding (e.g., "Each section should have a clear heading and be 3-4 paragraphs long"). These act like regularizers in machine learning, shaping the solution to be smoother and less erratic.

### Pathing and Curvature

Before asking an LLM to draft a long piece, ask it to **propose a transition plan**. This forces the model to think about the entire path, not just the next step. It can reorder your dots for a more logical flow, suggest "bridge dots" (like an analogy or a counterargument) to smooth over an abrupt jump, and anticipate the curves ahead. This aligns with vendor guidance to [define success criteria and chain complex prompts](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview).

**Limit of the Metaphor #2:** Models aren't computing true geodesics on a known mathematical manifold. The idea of a "low-energy path" is an intuition, not a description of the algorithm. But the intuition is useful: when a transition feels clunky, you can nudge the curvature by adding a bridge dot that makes the turn feel more natural.

### Calibrating the Line Drawing: Common Problems and Fixes

These aren't failures—they're misalignments between your mental connect-the-dots picture and how the AI is drawing the lines:

*   **Over-interpolation (The AI is drawing extra loops between your dots):** The prose flows beautifully between your dots but fabricates details along the way.
    *   **Fix:** Thicken your context with more short extracts and require direct quotes for all named entities, quantities, and definitions.
*   **Tunnel Vision (The AI is drawing straight lines when you wanted curves):** The model sticks too rigidly to the dots, producing a dry, list-like output.
    *   **Fix:** Add a bridge dot (an example or counterpoint) or loosen an acceptance test to allow for more synthesis.
*   **Curvature Mismatch (The AI connected your dots in the wrong order):** The dots are good, but the sequence feels awkward.
    *   **Fix:** Use the PLAN step to reorder the dots and add a connecting analogy to smooth the transition.

If you feel the output is "over-fitted" to your outline, try deleting a couple of non-essential dots. Just like Illustrator's Simplify Path tool, removing points can restore a natural, elegant flow by letting the model span a longer curve between the remaining constraints.

### The Page Was Never Blank

The next time you find yourself explaining something with clarity—whether it's a Postgres feature, an accessibility principle, or a cooking technique—stop. Listen to yourself. Those aren't random thoughts tumbling out. They're dots, carefully arranged by your expertise, waiting to be connected into prose.

You don't need hours to 'write from scratch.' You need five minutes to capture those dots—your key points, the resources you'd cite, the examples you'd use. Feed them to an AI with clear constraints about voice and structure. Verify the connections. Edit for flow.

The anxiety my coworker felt is universal. But the blank page isn't a void to be feared. It's an invisible connect-the-dots drawing you've already completed in your mind through years of learning and experience. What the AI industry calls context engineering, you call explaining something clearly. The only difference is recognizing that your mental organization is already the structure AI needs. The AI doesn't create your expertise—it simply traces the lines between points you've already mastered.

Better dots always beat more dots. And you already have them. You prove it every time you explain something well.