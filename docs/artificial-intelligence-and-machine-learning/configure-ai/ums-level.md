---
layout: post
title: Manage AI Settings in UMS – Enable or Disable AI | Bold BI Docs
description: Learn how to enable, disable, and manage AI feature settings at the UMS level in Bold BI to ensure smooth AI integration and control.
canonical: "/artificial-intelligence-and-machine-learning/configure-ai/ums-level/"
platform: bold-bi
documentation: ug
---
# Manage AI Settings in UMS

## Steps to Enable or Disable AI Features and Configure AI at the UMS Level

You can enable or disable AI features and configure AI settings at the UMS level. Follow the steps below:

1. Click on the `profile` icon in the top-right corner and select `Manage Sites`.

![Manage Sites](/static/assets/artificial-intelligence-and-machine-learning/images/configure-ai-feature/Manage_sites.png)

2. On the Manage Sites page, click the `Settings` icon.

![Settings](/static/assets/artificial-intelligence-and-machine-learning/images/configure-ai-feature/Settings_option.png)

3. In the Settings page, navigate to the `AI` option.

![AI Button](/static/assets/artificial-intelligence-and-machine-learning/images/configure-ai-feature/AI_button.png)

4. On the AI page, enable or disable the Enable AI toggle button.

![Enable Disable Ai](/static/assets/artificial-intelligence-and-machine-learning/images/configure-ai-feature/Global_enable_ai.png)

5. Choose and configure your preferred AI on the AI page.

![Select Ai](/static/assets/artificial-intelligence-and-machine-learning/images/configure-ai-feature/Select_own_ai.png)

6. If you select Bold AI Service, no credentials are required, and it operates as a cloud-based service.

![Bold Ai Service](/static/assets/artificial-intelligence-and-machine-learning/images/configure-ai-feature/Bold_ai.png)

7. If you select OpenAI, enter the API Key.

![Open Ai](/static/assets/artificial-intelligence-and-machine-learning/images/configure-ai-feature/Open_ai.png)

8. If you select Anthropic as the provider, enter the valid Anthropic API Key.

![Anthropic](/static/assets/artificial-intelligence-and-machine-learning/images/configure-ai-feature/Anthropic.png)

> **Note:** Multiple model selection is currently not available. The default model is `Claude Opus 4.8`. Support for selecting multiple models will be available in a future release.

9. If you select Azure AI as the provider, you can configure and use models deployed through Azure AI Foundry.

    To complete the configuration, provide the following details:

    - Model Name
    - Deployment Name
    - Resource Name
    - Azure AI API Key


![Azure Ai](/static/assets/artificial-intelligence-and-machine-learning/images/configure-ai-feature/Azure_ai.png)

> **Note:** Supported Azure AI Foundry models include `GPT-4o`, `GPT-4o-mini`, `GPT-5.1`, `GPT-5.2`, `GPT-5.4`, `GPT-5.5`, `DeepSeek-V4-Flash`, `DeepSeek-V4-Pro`, `Grok-4.3`, and `Mistral-Large-3`. The selected model must be deployed in your Azure AI Foundry resource, and the deployment name specified in the configuration must exactly match the deployment name created in Azure.

10. After configuring the AI provider, click **Save** to apply the configuration or **Cancel** to discard the changes.

>**NOTE:** This feature is available exclusively for on-premise users.