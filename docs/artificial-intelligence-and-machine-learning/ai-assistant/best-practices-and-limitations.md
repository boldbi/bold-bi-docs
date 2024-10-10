---
layout: post
title: AI Assistant Best Practices and Limitations | Bold BI Docs
description: "Learn about the best practices and limitations to ensure seamless use of the AI Assistant in Bold BI, enhancing your data visualization experience."
canonical: "/artificial-intelligence-and-machine-learning/ai-assistant/best-practices-and-limitations/"
platform: bold-bi
documentation: ug
---

# Guidelines for Optimal Use of the AI Assistant

## Best Practices
 
1. An active internet connection is required for AI Assistant as the process utilizes Large Language Models.
 
2. You encounter a situation where a synonym for a column name doesn't yield better results. As a workaround, you can refer to the actual column name in the data model to get better results. For example you might use: `"What is the TotalRevenue?`" instead of `"What is the total income?"`.
 
3. By enclosing data in single or double quotes, you can clarify exactly what you're referring to, which may help the AI understand the context better. For example, if you're looking for a specific item in a dataset, you might use: `"Find the entries where 'status' is 'active'."`.
 
4. You encounter a situation where a specific textual filter member without knowing its exact spelling cannot bring expected result. For example, if your data model contains a gender field where one of the possible values is female, you might use: `"What are my sales for female?"`.
 
## Limitations
 
1. Currently, the AI Assistant does not support the following chart types: Scatter chart, Radar polar, all charts in the Relationship widget category except for grid chart, KPI card, and charts in the Deviation, Filters, Composition, and Miscellaneous categories.
 
2. Dashboard parameters or custom attributes cannot be utilized with the AI Assistant.
 
3. AI Assistant does not have support of creating any custom expressions.
 
4. AI Assistant does not know about the details of the visuals present in the dashboard designer and viewer.
 
5. AI Assistant does not support customizing visuals in dashboard viewer.
 
6. Advanced customization features, such as `tooltip customization`, `link properties`, `axis formatting`, `trendlines`, and `widget export`, are not supported by the AI Assistant at this time.

7. The request limit of AI Assistant for a single tenant is set at 100 requests per minute.

8. The accuracy of the AI Assistant's responses depends on the clarity and relevance of the table and column names. Ensure that these names are properly labeled, as they are sent to the LLMs and used to provide context for generating responses.

9. The AI Assistant does not support `Median` and  `Variance` aggregate functions.