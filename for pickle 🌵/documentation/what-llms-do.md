### What can LLMs even do? What new things they enable for us?

#### Core Capabilities
- **Code and Markup Proficiency**: Reads and writes code, with strong skills in JavaScript, Python, and markup formats like HTML, YAML, CSV, XML, JSON.
- **Versatile Conversation**: Capable of discussing any topic, at any level of depth.
- **Visual Understanding**: Understands images in ways that are similar to human perception.
- **Role Playing**: Can assume various roles to provide responses within defined contexts.
- **Instruction Following**: Adheres to detailed instructions, capable of both simple and complex guidance.
- **Adaptive Learning**: Learns through teaching and provided examples, adjusting responses based on user interaction.
- **Filling In the Blanks:** If you can provide a template, the raw data, and instructions on how to apply the raw data, it can fill in the blanks between the steps. Similar to how transitions work in CSS where you can establish start and end positions, a curve for it to follow, and the duration. This is just done with information instead of graphics.

#### Core Concepts
- **System 1 vs System 2 Thinking**: Models can either provide quick, intuitive responses (System 1) or deliberate, reasoned outputs (System 2), depending on model type.
- **Stateless Processing**: Each action is stateless—the model processes the entire conversation from start to finish on each request, meaning there's no persistent memory.
- **System Prompts**: These are the types of prompts that LLMs are most responsive to, guiding behavior effectively.
- **Output Influence**: The model's previous outputs impact future responses.
  - **Implication**: If an incorrect answer is generated, the model tends to stick to that assumption—it can be "stubborn."
  - **Mitigation**: Use step-by-step prompts, scratch pads, or internal dialogue sections to help the model think through a problem before answering. Including clear instructions on how to use different pieces of context in the scratch pad is also effective.
- **English as a Programming Language**: Treat prompts like commands in a programming language.
  - **Analogy**: You’re the boss—hire the roles you need and tell the model how to work.
  - **Creative Control**: It’s your world—you’re the creator. - Bob Ross
- **LLM Application Design**: When programming LLM-based applications, think in terms of systems, flows, and components to build a cohesive experience.



#### Examples of New Capabilities
## Language and Communication
- **World-Class Translations**: Translate text accurately across languages.
- **Technical to Layman’s Translation**: Convert complex technical information into simple terms.
- **Analogy and Metaphor Generation**: Create metaphors and analogies that connect disparate topics.

## Knowledge and Interpretation
- **Interdisciplinary Comparison**: Make connections across fields where experts might not naturally intersect.
- **Contextual Understanding**: Identify relevant information, like product descriptions on busy web pages, by interpreting context.
- **Perspective Simulation**: Emulate perspectives and values of various people, enhancing inclusivity and empathy.

## Development and Documentation
- **Code and Documentation Analysis**: Read code or extensive documentation to understand and apply other people's work.
- **Natural Language to API Calls**: Convert instructions into API calls, making services accessible via natural language.
- **Extrapolate Non-Functional Requirements**: Automatically derive performance, UX, and security requirements based on atomic notes and global best practices.
  - *Example*: Use personas to drive user stories, continually refining these from user feedback and codifying them for robust ticket creation.
- **Acceptance Criteria and TDD**: Generate scenario-based acceptance criteria that map to Test-Driven Development (TDD) processes.

## Semantic and Data Management
- **Visual Semantics Understanding**: Interpret and translate visual data into universal semantic formats.
- **Human-Readable Formats**: Operate with markdown, YAML, and plain-text databases to store, modify, and use data in prompts effectively.

## Innovation and Discovery
- **Link Generation and Terminology Extraction**: Identify key terms and connections that foster new insights and discoveries.
- **Cross-Disciplinary Metaphors**: Provide insightful links and metaphors between unrelated topics, aiding creative problem-solving. 