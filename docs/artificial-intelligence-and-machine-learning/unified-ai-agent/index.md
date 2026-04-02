---
layout: post
title: Getting Started with Unified AI Overview | Bold BI Docs
description: Learn how to set up and use Unified AI in Bold BI to ask questions, create charts, and generate dashboard summaries.
canonical: "/artificial-intelligence-and-machine-learning/unified-ai-agent/"
platform: bold-bi
documentation: ug
---
# Unified AI Agent

## Getting Started with Unified AI Agent
Unified AI Agent in Bold BI, powered by Large Language Models (LLMs), improves analytical workflows by enabling users to perform text-based queries on integrated data sources, automatically generate visual widgets from input, and create concise dashboard summaries that clearly highlight important insights.

![Unified AI](/static/assets/artificial-intelligence-and-machine-learning/images/unified-ai/unifiedaistart.png)

## Configuring Unified AI Agent
During the installation of Bold BI, a license key update screen will be displayed. Entering a valid license key at this stage will automatically activate the AI service. If this step is missed, the AI service can still be activated later by accessing the "Manage License" section on the UMS page.

## Adding a Data Source
To ask questions or create visualizations with unified AI Agent, you need to connect a data source:

1. Navigate to the **Data Source** in Bold BI.
2. Click Create Data Source to add and connect your data.
![Unified AI](/static/assets/artificial-intelligence-and-machine-learning/images/unified-ai/datasourcepage.png)
3. Once added, you can explore the data source with suggested questions and add it to your query in Unified AI Agent by typing @ followed by the data source name.

## Accessing Unified AI Agent
Follow these steps to start using Unified AI Agent:

1. Click the **AI** option in the left-side panel of Bold BI.
![Unified AI](/static/assets/artificial-intelligence-and-machine-learning/images/unified-ai/unifiedaiicon.png)
2. Unified AI Agent will be opened with a new session.
![Unified AI](/static/assets/artificial-intelligence-and-machine-learning/images/unified-ai/loadunifiedai.png)
3. Use the sample suggestion list provided below to design a visual representation
![Unified AI](/static/assets/artificial-intelligence-and-machine-learning/images/unified-ai/suggestions.png)
4. Click the usage icon to view detailed usage information.

### BoldBI AI
![Unified AI](/static/assets/artificial-intelligence-and-machine-learning/images/unified-ai/boldbiaiusage.png)
### OpenAI or Azure AI
![Unified AI](/static/assets/artificial-intelligence-and-machine-learning/images/unified-ai/aiusage.png)
5. Click the restart icon to begin a new session.
![Unified AI](/static/assets/artificial-intelligence-and-machine-learning/images/unified-ai/restart.png)

6. Click History icon to view and resume any saved session. For additional information, please refer to the guide [Chat History](/artificial-intelligence-and-machine-learning/unified-ai-agent/chat-history/)
![Unified AI](/static/assets/artificial-intelligence-and-machine-learning/images/unified-ai/history/historyicon.png)

## Data and Dashboard Features

Unified AI Agent in Bold BI empowers users to interact with data and dashboards through a conversational interface. It supports two primary modes: **Data** and **Dashboard**. In **Data** mode, users can generate widgets or receive text-based responses by querying connected data sources. In **Dashboard** mode, users can generate summaries of dashboards to uncover key insights.

![Unified AI](/static/assets/artificial-intelligence-and-machine-learning/images/unified-ai/dataanddashboard.png)

Additionally, the Unified AI Agent integrates **Chat History**, enabling you to review past interactions, switch sessions, and resume analysis seamlessly—ensuring continuity across workflows and dashboards.

The following sections explain how to use each feature:

[Data](/artificial-intelligence-and-machine-learning/unified-ai-agent/data/)  
[Dashboard](/artificial-intelligence-and-machine-learning/unified-ai-agent/dashboard/)  
[Chat History](/artificial-intelligence-and-machine-learning/unified-ai-agent/chat-history/)