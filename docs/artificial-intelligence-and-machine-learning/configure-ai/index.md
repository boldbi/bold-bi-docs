---
layout: post
title: Managing AI Features and Configure Your Own Key | Bold BI Docs
description: Learn how to enable or disable AI features in Bold BI and configure AI credentials, including OpenAI, Azure AI, and Syncfusion AI.
canonical: "/artificial-intelligence-and-machine-learning/configure-ai/"
platform: bold-bi
documentation: ug

---

# Configure AI

- Starting from Bold BI v10.1, on-premise users can configure their own AI models with credentials for AI features.

## BOLD AI Service
Once users configure the Bold AI Service, we manage AI functionalities on our end seamlessly. it requires no credentials and operates on a cloud-based service.

- We provide 500 AI Credits every month per license, which is free of charge and will not be billed.

### How are the Credits Applied for Bold BI Service License?

- Each license has its own dedicated pool of 500 AI Credits every month.
- AI Credits cannot be shared or transferred between licenses.
- All AI usage, regardless of the number of users (for example, 10 or 100 embedded users), is deducted from - the same license credit balance.
- The free 500 AI Credits are automatically reset at the beginning of each billing period.

## Understanding Credits Usage
AI token and credit usage varies based on the datasource size, column count, and complexity of the query. It is not constant and can differ notably across dashboards and operations. For example, in a Sales Dashboard Analysis scenario

- Dashboard: Sales analysis Dashboard
- Datasource: Sales
- Number of Columns: 43

<table> <thead> <tr> <th>Purpose</th> <th>Average Token Usage (Min - Max)</th> <th>Average Credit Usage</th> </tr> </thead> <tbody> <tr> <td>AI Summarization</td> <td>0.6K – 0.7K tokens</td> <td>0.03 - 0.04 credits</td> </tr> <tr> <td>Widget property updates</td> <td>4K – 5K tokens</td> <td>0.1 - 0.2 credits</td> </tr> <tr> <td>Widget creation</td> <td>11K – 12K tokens</td> <td>0.27 - 0.33 credits</td> </tr> </tbody> </table>

### AI Credit Plans & Purchase Options

In addition to the monthly free credits, we offer flexible plans for higher usage.

If you exceed the monthly quota, you can purchase additional AI credits through our available plans. These plans are designed to scale with your needs and ensure uninterrupted AI service.

We offer two credit options:

- Subscription Plan – Credits are provided monthly based on the subscribed tier and expire at the end of each billing cycle if unused.

- Add-on Credits – Extra credits that can be purchased separately and carried forward to the next month. Add-on credits require an active subscription plan.

For more information about AI Credits, including credit allocation, subscriptions, add-on credits, purchasing, and usage tracking, refer to the [AI Credits](https://help.boldbi.com/artificial-intelligence-and-machine-learning/ai-credits) documentation.

>**NOTE:**  credit usage estimates may vary based on data size, structure, and query complexity. If usage is high or frequent, additional credits may require prior payment.

## Open AI

- Users can integrate their own OpenAI model for AI features by entering an API key.

- Once configured, we can identify the selected model from our end.

## Azure AI

- For Azure AI configuration, users need to provide their Azure AI model name, resource name, deployment name, and API key.

>**NOTE:** We recommend using gpt-4o deployment for Azure AI to achieve better responses.

The following section explains how to configure AI settings in both UMS and Site Settings.

[UMS Level](/artificial-intelligence-and-machine-learning/configure-ai/ums-level/)

[Site Settings Configuration](/artificial-intelligence-and-machine-learning/configure-ai/site-settings-configuration/)

