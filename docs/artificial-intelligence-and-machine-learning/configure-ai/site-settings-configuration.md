---
layout: post
title: Manage AI in Site Settings – Enable or Disable AI | Bold BI Docs
description: Learn how to enable, disable, and configure AI features within the Site Settings of Bold BI for better control and enhanced AI management.
canonical: "/artificial-intelligence-and-machine-learning/configure-ai/site-settings-configuration/"
platform: bold-bi
documentation: ug
---
# Manage AI Settings in Site Settings

## Steps to Configure and Manage AI Settings at the Site Level

You can enable or disable AI features and configure AI settings at the site settings configuration.

1. Click on the `Settings` icon in the left-side panel.

![Settings icon](/static/assets/artificial-intelligence-and-machine-learning/images/configure-ai-feature/site-settings/settings.png)

2. In the Settings page, navigate to the `AI` option.

![Settings icon](/static/assets/artificial-intelligence-and-machine-learning/images/configure-ai-feature/site-settings/AI.png)

3. On the AI page, enable or disable the Enable AI toggle button.

![Settings icon](/static/assets/artificial-intelligence-and-machine-learning/images/configure-ai-feature/site-settings/enable.png)

4. Choose and configure your preferred AI on the AI page.

![Settings icon](/static/assets/artificial-intelligence-and-machine-learning/images/configure-ai-feature/site-settings/optionAI.png)

5. If you select Bold AI Service, no credentials are required, and it operates as a cloud-based service.

![Settings icon](/static/assets/artificial-intelligence-and-machine-learning/images/configure-ai-feature/site-settings/boldAI.png)

6. If you select OpenAI, enter the API Key.

![Settings icon](/static/assets/artificial-intelligence-and-machine-learning/images/configure-ai-feature/site-settings/openAI.png)

7. If you select Anthropic as the provider, enter the valid Anthropic API Key.

![Settings icon](/static/assets/artificial-intelligence-and-machine-learning/images/configure-ai-feature/site-settings/anthropicSite.png)

> **Note:** Multiple model selection is currently not available. The default model is `Claude Opus 4.8`. Support for selecting multiple models will be available in a future release.

8. If you select Azure AI as the provider, you can configure and use models deployed through Azure AI Foundry.

    To complete the configuration, provide the following details:

    - Model Name
    - Deployment Name
    - Resource Name
    - Azure AI API Key

![Settings icon](/static/assets/artificial-intelligence-and-machine-learning/images/configure-ai-feature/site-settings/azureAI.png)


> **Note:** Supported Azure AI Foundry models include `GPT-4o`, `GPT-4o-mini`, `GPT-5.1`, `GPT-5.2`, `GPT-5.4`, `GPT-5.5`, `DeepSeek-V4-Flash`, `DeepSeek-V4-Pro`, `Grok-4.3`, and `Mistral-Large-3`. The selected model must be deployed in your Azure AI Foundry resource, and the deployment name specified in the configuration must exactly match the deployment name created in Azure.


9. After configuring the AI provider, click **Save** to apply the configuration or **Cancel** to discard the changes.


>**NOTE:** This feature is available exclusively for on-premise users.