---
layout: post
title: AI-Powered Data Processing in Bold BI | Bold BI Documentation
description: Discover how Bold BI processes and manages data for AI features, including AI Copilot, text-based queries, and dashboard insights, while ensuring data security and control.
canonical: "/artificial-intelligence-and-machine-learning/ai-data-processing/"
platform: bold-bi
documentation: ug
---

# Data Processing

## How Bold BI Handles Data for AI Processing

- With the release of Bold BI 10.1, we are providing users with greater control over their AI processing infrastructure. Now, you have the option to configure your own API key for AI service providers like `OpenAI or Azure OpenAI`. 

- This ensures that all data remains within your infrastructure, giving you complete control over budget and cost management.

- For evaluation purposes, we also offer Bold BI AI Service with limited credits. However, for production use cases, we recommend integrating with `OpenAI or Azure OpenAI`.

## What Data is Sent to AI Models in Bold BI?

- When utilizing AI features, not all data is sent to the model. The specific data shared depends on the AI functionality being used. Below, we break down the data handling process for different AI-powered features in Bold BI.

## AI Agent / AI Copilot

AI Copilot assists in visual creation and data querying. The data sent to the AI model varies based on the use case:

**Visual Creation**

For generating visualizations, AI Copilot relies solely on the metadata of the data source, which includes:
- User query
- Data source schema (Table names, Column names, Data types)

**Example:**

If a user asks: **"Top 5 customers by orders"**

The data sent to the AI model would be:

**User Query:** "Top 5 customers by orders"

**Data Source Schema:**
```json
{
  "schema": [
    {
      "customers": [
        {"name": "customerid", "datatype": "int"},
        {"name": "name", "datatype": "string"}
      ]
    },
    {
      "orders": [
        {"name": "orderid", "datatype": "int"},
        {"name": "value", "datatype": "int"}
      ]
    }
  ]
}
```

>**NOTE:** No raw data is shared—only schema details are sent to ensure privacy and security.

## Text-Based Queries

For AI Agent responses in text format, some processed data is sent along with the schema and user query.

**Example:**

If a user asks: **"How many orders were closed in the year 2024?"**

**User Query:** "How many orders were closed in the year 2024?"

**Data Source Schema:**
```json
{
  "schema": [
    {
      "customers": [
        {"name": "customerid", "datatype": "int"},
        {"name": "name", "datatype": "string"}
      ]
    },
    {
      "orders": [
        {"name": "orderid", "datatype": "int"},
        {"name": "value", "datatype": "int"}
      ]
    }
  ]
}
Processed Data: {"orders_closed": 20}
```


## Why is processed data sent?

The model needs it to `format the response` correctly. Based on the processed data, the model can generate a response like:
**"20 orders were closed in 2024."**

## Summarization & Widget Insights

For `dashboard summaries` and `widget insights`, the AI model uses:

- Widget metadata (Widget name, Widget type, Axis names)
- Data points from widgets

**Example:**

If summarizing a `Sales Performance` widget:

**Widget Name:** "Sales Performance Overview"

**Widget Type:** "Line Chart"

**Axis Names:** {"X-Axis": "Month", "Y-Axis": "Orders Count"}

**Data Points:**

```json
{
  "January": "50",
  "February": "$55",
  "March": "60",
  "April": "58",
  "May": "65"
}
```

>**NOTE:** AI processes this data to generate a `concise summary` of trends in your dashboard.