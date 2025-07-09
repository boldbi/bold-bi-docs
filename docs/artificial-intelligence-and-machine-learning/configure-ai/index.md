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

- Once users configure the Bold AI Service, we can manage AI functionalities on our end seamlessly.

- It requires no credentials and operates on a cloud-based service.

- We provide an initial 1 million tokens for the Bold BI AI Copilot, which is free of charge and will not be billed.

### How Are the 1 Million Tokens Applied for Bold BI Service Tenants?

- Each Bold BI tenant receives its own separate 1 million token allocation, which cannot be shared or transferred between tenants.

- Whether you have 10 users or 100 embedded users within a single tenant, all AI-related usage will consume tokens from the same 1 million token pool assigned to that tenant. 

- Once the initial 1 million tokens are exhausted, you can request additional tokens by contacting our support team. We will review your request and add tokens upon validation.

## Understanding Token Usage
AI token usage varies based on the datasource size, column count, and complexity of the query. It is not constant and can differ notably across dashboards and operations. For example, in a Sales Dashboard Analysis scenario

- Dashboard: Sales analysis Dashboard
- Datasource: Sales
- Number of Columns: 43

<table>
    <thead>
        <tr>
            <th>Purpose</th>
            <th>Average Token Usage (Min - Max)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>AI Summarization</td>
            <td>0.6K – 0.75K tokens</td>
        </tr>
        <tr>
            <td>Widget property updates</td>
            <td>4K – 5K tokens</td>
        </tr>
        <tr>
            <td>Widget creation</td>
            <td>8.90K – 9.1K tokens</td>
        </tr>
    </tbody>
</table>

>**NOTE:**  Token usage estimates may vary based on data size, structure, and query complexity. If usage is high or frequent, additional tokens may require prior payment.

## Open AI

- Users can integrate their own OpenAI model for AI features by entering an API key.

- Once configured, we can identify the selected model from our end.

## Azure AI

- For Azure AI configuration, users need to provide their Azure AI model name, resource name, deployment name, and API key.

>**NOTE:** We recommend using gpt-4o deployment for Azure AI to achieve better responses.

The following section explains how to configure AI settings in both UMS and Site Settings.

[UMS Level](/artificial-intelligence-and-machine-learning/configure-ai/ums-level/)

[Site Settings Configuration](/artificial-intelligence-and-machine-learning/configure-ai/site-settings-configuration/)

