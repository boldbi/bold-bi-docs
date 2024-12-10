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
 
1. You encounter a situation where a synonym for a column name doesn't yield better results. As a workaround, you can refer to the actual column name in the data model to get better results. For example you might use: `"What is the TotalRevenue?`" instead of `"What is the total income?"`.
 
2. By enclosing data in single or double quotes, you can clarify exactly what you're referring to, which may help the AI understand the context better. For example, if you're looking for a specific item in a dataset, you might use: `"Find the entries where 'status' is 'active'."`.
 
3. You may encounter a situation where a specific textual filter member does not bring the expected result if the exact spelling is unknown. For example, if your data model contains a product category field where one of the possible values is `Electronics`, you might use: `"What are my sales for Electronics?"`. Ensuring accurate filter terms is a best practice when using the AI Assistant.
 
## Limitations
 
1. Currently, the AI Assistant does not support the following types: `Pivot Grid` and `Heat Map` in the `Relationship widget` category, `Radar polar`, `KPI card` and charts in the `Deviation`, `Filters`, `Composition`, and `Miscellaneous categories`.
 
2. Dashboard parameters or custom attributes cannot be utilized with the AI Assistant.
 
3. AI Assistant does not have support of creating any custom expressions.
 
4. AI Assistant does not know about the details of the visuals present in the dashboard designer and viewer.
 
5. AI Assistant does not support customizing visuals in dashboard viewer.
 
6. Advanced customization features, such as `tooltip customization`, `link properties`, `axis formatting`, `trendlines`, and `widget export`, are not supported by the AI Assistant at this time.

7. The accuracy of the AI Assistant's responses depends on the clarity and relevance of the table and column names. Ensure that these names are properly labeled, as they are sent to the LLMs and used to provide context for generating responses.

8. The AI Assistant supports only the following aggregation functions: `COUNT`, `COUNTD`, `SUM`, `MIN`, `MAX`, and `AVG`. Other aggregate functions, such as `MEDIAN`, `VARIANCE`, etc., are currently not supported.

9. The AI Assistant is mainly trained and tested in English. Since it uses OpenAI GPT models, it can respond in other languages and has shown good results with some. However, it may not fully support all languages, and accuracy may vary depending on the language. We recommend testing it in your language to see if it meets your needs, but keep in mind some limitations may apply.

10. The Q&A widget cannot be dragged and embedded inside the Tab widget. 

## Rate Limit

1. A single tenant can send up to 100 messages per minute to the AI Assistant. If the limit is exceeded, they will need to wait or contact support to request an increase in the limit.

2. For users in the sandbox environment, the AI Assistant allows only 100 messages per user.