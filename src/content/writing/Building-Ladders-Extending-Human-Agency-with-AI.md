---
title: "Building Ladders: Extending Human Agency with AI"
publishDate: 2025-08-20T12:00:00.000Z
description: "How AI can build ladders between human intent and digital experiences by adapting to people rather than forcing them to adapt"
tags: ["AI", "Accessibility", "Patterns", "Translation", "Agency", "Human-Centered-Tech", "Open-Source"]
type: "article"
draft: false
---

Large Language Models aren't just AI—they're translators between worlds.

For the first time in history, we have technology that can take expertise locked in one person's head and make it accessible to someone who thinks completely differently. Not by dumbing it down. Not by forcing adaptation. But by translating between epistemologies—between fundamentally different ways of knowing. LLMs have absorbed countless perspectives across every domain imaginable, giving them the unique ability to reframe any concept through the lens you likely already understand.

I discovered this through my own journey as a translator between worlds. As a developer, I translated between front-end and back-end. As an accessibility coach, between disabled and non-disabled experiences. Now as an AI engineer, between human intention and machine comprehension. But it wasn't until I embedded myself in [product teams—translating visual hierarchy for keyboard navigators](/writing/reframing-accessibility-ai-as-an-epistemological-translator), helping developers see how loading states affect screen readers—that I realized what I was actually doing: translating between different ways of knowing.

Then it hit me: Large Language Models do exactly what I'd been doing manually. They have access to knowledge across disciplines. They can pull the important information relevant to a discipline from unstructured sources. They can reframe complex information using the receiver's own mental models. They act as translators between different epistemologies. If accessibility coaching is translating between ways of _knowing_ in order to help teams build inclusive experiences, then AI engineering is building the _translators themselves_—giving everyone the ability to approach domains that were previously opaque to them.

## The Vision That Drives Everything

> **To make the digital world equitable by enabling *everyone* to reach expertise and capabilities that were previously impossible for them to access—through patterns that encode human expertise and adapt to how each person thinks.**

This isn't about making things easier. It's about recognizing that expertise shouldn't be gatekept by whether you think in the _"right"_ way. That innovation shouldn't be limited to those who intuitively grasp our _current_ interfaces. That human potential shouldn't be constrained by the historical accident of how we built our tools. Just because you're better at using technology doesn't make you smarter or your perspective more important.

## The Rule We Need to Break

For decades, computing has followed one ironclad rule: **humans adapt to computers**. 

We memorize keyboard shortcuts. We learn programming syntax. We internalize the logic of file systems and command lines. We learn to navigate the mazes of forms and cookie banners. This has left the benefits of computing to concentrate among those who think like computers—_or can afford to pay someone who does._

But what if we could flip this entirely?

**What if computers adapted to humans?**

Here's what that looks like in practice—and why it matters for how we think about AI.

## The Moment It Clicked: Apple Math Notes

I was in college when a math major friend complained about LaTeX. "I've been writing equations by hand for fifteen years," he said. "Now I have to learn a new language just to write what I already know how to write?"

Fast forward to iOS 18's Math Notes. You write equations by hand. The system recognizes your notation and computes the results and even graphs it. No new syntax. No learning to navigate a TI-84's menus (if you know, you know). No adaptation required. 

Think about what this means. We developed mathematical notation over centuries—a visual language refined by countless mathematicians. Then computers arrived and said: "Forget all that. Learn our way." and just because of their power, we said "ok". What if computers don't have to be this way. What if everyone obviously understood that because you don't know how to use an antiquated calculator's menus, it doesn't make you incapable of advanced mathematics?

Math Notes says: "Keep writing how you've always written. We'll adapt to you" and that's how computers _should_ be. They're _our_ computers aren't they?

Apple isn't using LLMs in Math Notes, but it is a form of AI. And this same principle—adapting to human conventions rather than forcing humans to adapt—is exactly what LLMs can do with language. They can structure unstructured information into something computers understand while letting us communicate naturally.

This is what AI can enable—not forcing us to abandon human conventions refined over millennia, but [building ladders](/definitions/building-ladders) that let us reach capabilities we couldn't access before. These aren't bridges connecting existing abilities—they're [ladders](/definitions/ladders) that help us climb, rung by rung, to entirely new forms of engagement with complex domains. They transform disciplines that seemed impossible into something we can finally grasp on our own terms.

## My Contribution to the Movement: Alt Text as a Ladder

As an accessibility expert, I've spent years developing a methodology for creating meaningful alt text. The questions I ask, the patterns I look for, the way I decode author intention—this is expertise that took years to develop. But what if I could encode that expertise into a pattern that anyone could use?

That's exactly what I did. I mapped my personal methodology—the exact line of questioning I use when writing alt text—into a programmatic pattern. Now anyone can access my expertise to create equivalent experiences for screen reader users.

### The Creator's [Epistemology](/definitions/epistemological-translation) Is Already There

Here's the key insight: The creator's epistemology—their way of understanding and organizing information—is embedded throughout the page's markup. It's in the heading hierarchy, the proximity of elements, the metadata, the structural choices. 

The creator's intention exists in one representation (visual design, HTML structure, content relationships) and can be interpolated through noticing and comparing various details on the page in tandem with the content itself. 

I can write these observation instructions and recipes in reusable prompts. Then that makes my accessibility expertise a reusable pattern that can snap a creator's intention to the nearest mapping to the accessibility APIs that others depend on. I imagine it working somewhat like a [drum machine's beat quantizing functionality](https://nickcesarz.com/the-case-for-quantizing-drums/) that can snap an imperfectly timed beat to the nearest correctly timed beat.

For alt text, I can use the following information that can be programmatically extracted from any page and transform it into a contextual alternative for that photo that fits within the needed ~120 character mark for an ideal alt text size for screen reader UX. This is [modality translation](/definitions/modality-translation) in action—converting visual information to text. 

- **Page structure** reveals information hierarchy through DOM headings, page title and the website itself indicates author intention (sales, news, social media, etc).
- **Proximity and size** indicates relationships through surrounding text blocks
- **Visual design** encodes importance through the image itself (the 1000 words in an image)
- **Structural patterns** show usage through element positioning

This is the power of encoding expertise as a ladder. I took my years of experience and mapped it to a [structured prompt](/resources/alt-text-generation) with output instructions specific to screen reader UX. Now it's a reusable pattern others can climb. A creator can express their vision using their own words, and my encoded expertise helps translate that intention into the correct symbolic representation for users who depend on accessibility metadata.

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

## The Movement Is Already Here

This approach is already emerging at scale. [Fabric](https://github.com/danielmiessler/fabric), an open-source framework by Daniel Miessler, collects "patterns"—battle-tested prompts encoding expert thinking. Each pattern is a ladder, with rungs that guide users step by step through expert reasoning.

Take the **Extract Wisdom** pattern, for example. It can take any content—a two-hour YouTube interview, a dense research paper, a rambling podcast—and extract the key insights, memorable quotes, and references. In minutes, you get the wisdom that would take hours to extract manually. It's not replacing deep engagement; it's helping you decide what deserves that deep engagement. As Miessler explains in [this breakdown of Fabric](https://www.youtube.com/watch?v=UbDyjIIGaxQ), it's about filtering signal from noise so you can focus your limited time on what matters most.

The philosophy is profound: "AI isn't a thing; it's a magnifier of a thing. And that thing is human creativity." What I've shown with accessibility, others are doing for security analysis, content creation, code review. Experts aren't losing their value by sharing patterns—they're multiplying their impact. The infrastructure for sharing expertise is being built.

## The Choice: Walls or Ladders

Right now, as you read this, AI and technology at large, is being deployed in two fundamentally different ways:

**Walls:** Dark patterns that manipulate. Systems that obscure their workings. Tools that create dependency. Corporate AI designed to extract—your attention, your data, your agency.

**Ladders:** Tools that reveal their reasoning through [glass box](/definitions/glass-box) approaches. Systems that teach while they assist. Ladders with clear rungs connecting different ways of understanding. AI that extends human agency rather than replacing it.

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

Build tools that see people in all their complexity and help them engage with the world on their own terms. Build systems that trust users rather than trapping them. Build ladders between ways of knowing rather than enforcing a single path—each rung a manageable step toward understanding.

Remember the open spirit that gave you your start. Pay it forward. Use your skills not to create higher barriers, but to build adaptable ladders that others can climb. Contribute patterns. Share your perspectives. Multiply your impact.

Because here's the truth: The most profound innovations don't come from making people adapt to our tools. They come from people creating tools for the _service of others_ — tools that make people more capable. 

The question isn't whether AI will change how knowledge moves through the world. The question is whether that knowledge will flow freely or be dammed up behind artificial walls.

This is why I call to you: Build ladders. The world is waiting to climb.