---
layout: post
title: AI Agent in view mode - Embedded BI | Bold BI Docs
description: Learn how to effectively use the AI Agent in view mode, including various use cases that enhance your data visualization experience.
canonical: "/artificial-intelligence-and-machine-learning/generative-ai/ai-agent/"
platform: bold-bi
documentation: ug
---

# Using the AI Agent in View Mode

In View Mode, the AI Agent allows you to analyze data through visualizations without making any changes to the existing widgets. Although you can't create or modify widgets in this mode, the AI Agent helps you explore and compare data from the current dashboard.

## How to Use the AI Agent in View Mode

1. Launch the AI Agent while in View Mode.

![AI-Agent-ViewMode](/static/assets/artificial-intelligence-and-machine-learning/images/generative-ai/relevant-question-view.png)

2. Enter queries to visualize data for deeper analysis without altering any existing widgets.

3. For instance in a sales dashboard, you might want to analyze the relationship between orders and sales for a specific region. For example, you can ask `How many orders were placed last year in China displayed month wise?`

![AI-Agent-Query-ViewMode](/static/assets/artificial-intelligence-and-machine-learning/images/generative-ai/query-view.png)

4. The AI Agent generates a textual response based on the query or creates a visual representation, depending on the context.

![AI-Agent-Query2-ViewMode](/static/assets/artificial-intelligence-and-machine-learning/images/generative-ai/ai-agent-textual-response.png)

>**Note**: For details on the data used for textual responses, refer to the [Data Processing Feature Guide](/artificial-intelligence-and-machine-learning/ai-data-processing/).

5. To utilize Textual Responses in AI Agent, ensure that the `Enable Widget Insights and Dashboard Summary` option is enabled. Disabling this option will prevent the generation of textual responses.

![Textual-Response](/static/assets/artificial-intelligence-and-machine-learning/images/activate-ai-feature/enable-disable-summarize.png)

6. The AI Agent considers your last four conversations when responding, providing tailored insights to better fit your needs.