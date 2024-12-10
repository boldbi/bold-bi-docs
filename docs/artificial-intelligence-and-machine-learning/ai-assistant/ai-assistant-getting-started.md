---
layout: post
title: Overview of AI Assistant - Embedded BI | Bold BI Docs
description: Discover the AI Assistant's overview, including its features, location, and session management for efficient widget creation.
canonical: "/artificial-intelligence-and-machine-learning/ai-assistant/getting-started/"
platform: bold-bi
documentation: ug
---

# Getting Started with the AI Assistant
We recommend watching the following video, which offers essential insights on effectively getting started with the AI Assistant in Bold BI.<br/>

<iframe class="helpsite-video-section" src="https://www.youtube.com/embed/6KfzY3tpOG8" frameborder="0" allowfullscreen></iframe>

1. The AI Assistant is conveniently located at the bottom-right corner of your window of your dashboard designer and dashboard viewer only.

![AI-Assistant-Location](/static/assets/artificial-intelligence-and-machine-learning/images/ai-assistant/overview-location.png)

2.  Before you can start using the AI Assistant, it must be activated. For detailed steps on how to enable AI in Bold BI, refer to the [Activate AI Feature Guide](/artificial-intelligence-and-machine-learning/activate-ai-feature/)

3. You can easily drag and resize the AI Assistant window to suit your workspace needs.

![Drag-Resize-AI-Assistant](/static/assets/artificial-intelligence-and-machine-learning/images/ai-assistant/ai-assistant-drag-resize.png)

4. After activating the AI Assistant, make sure to attach a datasource to begin interacting with it.

## Auto-Generated Queries

Once a datasource is connected, the AI Assistant will automatically create four sample queries based on the tables in your datasource. These queries will help you get started quickly.

![AI-Assistant](/static/assets/artificial-intelligence-and-machine-learning/images/ai-assistant/relevant-question-designer.png)

## Monitoring Your AI Usage
 
You can easily monitor your AI Assistant usage. This includes:
- The cost for the current session

- The total cost for today

- Your remaining usage balance

This helps you keep track of your AI consumption with ease.

>**NOTE**: Usage costs include interactions with the Q&A widget except session usage.

We provide an initial $3 credit for the AI Assistant, which is free of charge and will not be billed. The credits are reduced based on token-based usage, as shown below:

<table>
    <thead>
        <tr>
            <th>Model</th>
            <th>Purpose</th>
            <th>Pricing</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>GPT-4o Mini</td>
            <td>Conversations in AI Assistant</td>
            <td>$0.150 per 1M input tokens<br>$0.600 per 1M output tokens</td>
        </tr>
        <tr>
            <td>Fine-tuned GPT-4o Mini model</td>
            <td>Widget property updates</td>
            <td>$0.300 per 1M input tokens<br>$1.200 per 1M output tokens</td>
        </tr>
        <tr>
            <td>GPT-4o model</td>
            <td>Widget creation</td>
            <td>$2.50 per 1M input tokens<br>$10.00 per 1M output tokens</td>
        </tr>
    </tbody>
</table>

Once the initial $3 credit is exhausted, you can request additional credits by contacting our support team. We will review and add credits upon validation.

Please note, if your usage is frequent, you may be required to make a payment prior to adding further credits.

![AI-Assistant-Usage](/static/assets/artificial-intelligence-and-machine-learning/images/ai-assistant/ai-assistant-usage.png)

## Restarting a Session

To restart your AI Assistant session, simply click the restart icon next to the usage icon. This will clear your chat history and give you a fresh start.

![Restart-AI-Assistant](/static/assets/artificial-intelligence-and-machine-learning/images/ai-assistant/ai-assistant-restart.png)

## Minimizing and Continuing Later

If you don’t need the AI Assistant for a while, you can minimize it and pick up the conversation later without losing your session. Keep in mind that the session will automatically end after 2 hours of inactivity.

![AI-Assistant-End-Session](/static/assets/artificial-intelligence-and-machine-learning/images/ai-assistant/ai-assistant-end-session.png)