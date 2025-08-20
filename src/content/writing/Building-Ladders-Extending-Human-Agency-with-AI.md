---
title: "Building Ladders: Extending Human Agency with AI"
publishDate: 2025-01-08T12:00:00.000Z
description: "How AI can bridge the gap between human intent and digital experiences by adapting to people rather than forcing them to adapt"
tags: ["AI", "Accessibility", "Human-Agency", "Inclusive-Design", "AI-Engineering", "Epistemology"]
type: "article"
draft: false
---

## The Thread I Finally Found

My career trajectory might seem random—frontend engineer, accessibility coach, AI engineer. But there's a thread I only recently recognized: I've always been a translator between worlds.

As an accessibility coach, I embedded myself in product teams. Not to enforce rules, but to translate. I'd sit with a designer who understood visual hierarchy perfectly but had never considered how that hierarchy translates to someone navigating by keyboard. I'd work with developers who could optimize React hook but had never thought about how their loading states affect screen reader users. My job wasn't teaching accessibility—it was translating one world's logic into another's language.

Then it hit me: What else has access to knowledge across disciplines? What else can reframe complex information using the receiver's own mental models? What else acts as a translator between different ways of knowing?

Large Language Models. 

If accessibility coaching is translating between epistemologies to help teams build inclusive experiences, then AI engineering is building the translators themselves—giving everyone the ability to approach domains that were previously opaque to them.

## The Vision That Drives Everything

> **To make the digital world equitable by giving *everyone* the ability to engage with complex domains.**

This isn't about making things easier. It's about recognizing that expertise shouldn't be gatekept by whether you think in the "right" way. That innovation shouldn't be limited to those who intuitively grasp our current interfaces. That human potential shouldn't be constrained by the historical accident of how we built our tools.

## The Rule We Need to Break

For decades, computing has followed one ironclad rule: **humans adapt to computers**. 

We memorize keyboard shortcuts. We learn programming syntax. We internalize the logic of file systems and command lines. We learn to navigate the mazes of forms and cookie banners. This has left the benefits of computing to concentrate among those who think like computers—or can afford to pay someone who does.

But what if we could flip this entirely?

**What if computers adapted to humans?**

## The Moment It Clicked: Apple Math Notes

I was in college when a math major friend complained about LaTeX. "I've been writing equations by hand for fifteen years," he said. "Now I have to learn a programming language just to write what I already know how to write?"

Fast forward to iOS 18's Math Notes. You write equations by hand. The system recognizes your notation and computes the results and even graphs it. No new syntax. No learning to navigate a TI-84's menus. No adaptation required. 

Think about what this means. We developed mathematical notation over centuries—a visual language refined by countless mathematicians. Then computers arrived and said: "Forget all that. Learn our way." and just because of their power, we said "ok". What if computers don't have to be this way.

Math Notes says: "Keep writing how you've always written. We'll adapt to you."

This is the bridge AI can be. Not forcing us to abandon human conventions refined over millennia, but building ladders between our intuitive understanding and computational power. Building ladders between one way of looking at the world and adapt it to another. To make a discipline that one thought they could never engage with and relate it to them on terms they can finally understand.

## Building a Real Ladder: Alt Text as Translation

Let me show you what building ladders looks like through something I've been developing. Not just any alt text generator—but one that aims to create an equivalent experience by translating between visual and non-visual understanding by utilizing the line of questioning an accessibility professional uses when writing an alt text.

### The Creator's Epistemology Is Already There

Here's the key insight: The creator's epistemology—their way of understanding and organizing information—is embedded throughout the page's markup. It's in the heading hierarchy, the proximity of elements, the metadata, the structural choices. 

Think of it like a drum machine quantizing a beat. The creator's intention exists in one representation (visual design, HTML structure, content relationships). My accessibility expertise becomes a pattern—a formula—that quantizes this into the nearest meaningful representation for screen reader users:

- **Page structure** reveals information hierarchy through DOM headings
- **Proximity** indicates relationships through surrounding text blocks
- **Visual design** encodes importance through the image itself
- **Structural patterns** show usage through element positioning

I took my years of creating alt text, mapped it to a prompt template format with output instructions specific to screen reader UX, and created a ladder others can climb. The pattern captures how an accessibility expert thinks about this translation problem. Now a creator can express their vision using their own words and have their intention snap to the correct position. 

### How It Actually Works

When I see a graph labeled "Semantic Feature Space" with four words plotted by gender and age, I understand it instantly. But that understanding comes from synthesizing multiple signals: the visual pattern, the surrounding explanation, the page's educational context.

The AI does the same synthesis:

![Semantic Feature Space graph showing 'man', 'woman', 'boy', and 'girl' plotted on axes of Gender (x) and Age (y)](/images/semantic-feature-space.png)

It reads the surrounding text: *"Two refer to males, two to females. Two refer to adults, two to children."* It sees the graph structure. It understands from the page context this is educational material about word embeddings.

Then it generates not just a description, but an equivalent experience:

**Alt text:** "Scatter plot showing four words plotted by gender and age coordinates in semantic feature space."

**Structured alternative for those who want details:**
| Word | Gender | Age | Semantic Position |
|------|--------|-----|------------------|
| man | 1 | 7 | Male adult characteristics |
| woman | 9 | 7 | Female adult characteristics |
| boy | 1 | 2 | Male child characteristics |
| girl | 9 | 2 | Female child characteristics |

## Patterns as Infrastructure

This approach is already emerging at scale. Fabric, an open-source framework by Daniel Miessler, collects "patterns"—battle-tested prompts encoding expert thinking. Each pattern is a ladder. What I've shown with accessibility, others are doing for security analysis, content creation, code review.

The philosophy is profound: "AI isn't a thing; it's a magnifier of a thing. And that thing is human creativity." Experts aren't losing their value by sharing patterns—they're multiplying their impact. The infrastructure for sharing expertise is being built.

## The Choice: Walls or Ladders

Right now, as you read this, AI is being deployed in two fundamentally different ways:

**Walls:** Dark patterns that manipulate. Systems that obscure their workings. Tools that create dependency. Corporate AI designed to extract—your attention, your data, your agency.

**Ladders:** Tools that reveal their reasoning. Systems that teach while they assist. Bridges that connect different ways of understanding. AI that extends human agency rather than replacing it.

The choice seems obvious. But look around. How many AI tools actually empower versus extract?

## Standing on Open Shoulders

How did you get here? How did you learn to code, to build, to understand these systems?

For most of us: **openness**.

We built on open protocols. We learned from shared code. We grew because knowledge was freely given, not hoarded. Stack Overflow answers, YouTube tutorials, blog posts from developers who took the time to explain.

The pioneers of the last revolution chose to share knowledge rather than gatekeep it. They gave us View Source. They gave us documentation. They gave us the ability to learn by seeing, by copying, by understanding.

Now it's our turn. And the stakes are higher.

## This Is THE Challenge of Our Time

Marshall McLuhan: "We shape our tools, and thereafter our tools shape us."

Never more true than now. The AI systems we build today will shape how billions interact with information, services, each other. We can build systems that demand adaptation, that gatekeep knowledge, that maintain existing power structures.

Or we can build ladders.

Not someday. Right now. Every line of code you write this week. Every model you deploy. Every interface you design. Each is a vote for the world you want.

## Your Turn

The tools are in your hands. Local models. Open frameworks like Fabric. Accessible APIs. We have everything we need.

But having tools isn't enough. The question is: What will you build with them?

My challenge—no, my plea—is this:

**Build ladders, not walls.**

Take your expertise—whatever domain you know deeply—and encode it as patterns others can use. That accessibility formula you've perfected? Make it a ladder. That security analysis process you've refined? Lay it down for others to climb. That creative workflow that took you years to develop? Turn it into a pattern.

Build tools that see people in all their complexity and help them engage with the world on their own terms. Build systems that trust users rather than trapping them. Build bridges between ways of knowing rather than enforcing a single path.

Remember the open spirit that gave you your start. Pay it forward. Use your skills not to create higher barriers, but to build adaptable bridges. Contribute patterns. Share your perspectives. Multiply your impact.

Because here's the truth: The most profound innovations don't come from making people adapt to our tools. They come from people creating tools for others that make them more capable.

The blank page isn't blank anymore. Every tool we build, every pattern we share, every bridge we create between different ways of knowing—these are the dots we're placing for the future. 

The question isn't whether AI will change how knowledge moves through the world. The question is whether that knowledge will flow freely or be dammed up behind walls.

Build ladders. The world is waiting to climb.