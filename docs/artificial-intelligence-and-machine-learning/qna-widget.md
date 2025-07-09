---
layout: post
title: Q&A Widget - Embedded BI Visual | Bold BI Documentation
description: Learn about Q&A widget and how to use a Q&A widget in the dashboard designing through simple Natural language questions using Bold BI application.
canonical: "/artificial-intelligence-and-machine-learning/qna-widget/"
platform: bold-bi
documentation: ug
---

# About Q&A Widget
The BoldBI Q&A widget is an AI-powered tool that simplifies the process of converting data into visual charts by using natural language commands. It employs AI models using the AI Assistant service to comprehend your queries and crafts relevant charts, streamlining the process of data investigation and dashboard creation.

>**Breaking Changes:** Starting from Bold BI v8.1, the Q&A widget will integrate with our dedicated AI service. As a result, no fine-tuning process or initial configuration setup is required on your end to utilize the Q&A widget. 
For versions prior to Bold BI v8.1, fine-tuning your data is necessary to use the Q&A widget. Please refer to the [Fine-Tuning Guide](/utilities/fine-tuning-utility/) for more details.

## Activation of Q&A widget

In order to use the Q&A widget you need to activate the AI Feature. Please refer to this link [Activate AI Feature Guide](/artificial-intelligence-and-machine-learning/activate-ai-feature/) for activation.

## How to add Q&A widget
Drag the Q&A widget from the dashboard’s item panel, present under the Miscellaneous group.

![Drag and drop](/static/assets/artificial-intelligence-and-machine-learning/images/qna-widget/add-qnawidget.png)

Now, resize the container as required to drag multiple widgets in it.

## Questioning the Q&A widget 
The Q&A widget features a search bar where users can enter their queries. Begin by stating the desired information in conversational language. For instance, you might input, `Show sales by region`.

Our AI model will understand your question phrased in everyday language, determine the relevant data, and select the appropriate chart format. The Q&A widget takes into account previous questions when responding to the current query, providing tailored responses to meet user preferences.

Afterward, the Q&A widget will create the visual representation of the data you requested, drawing from the dataset you have provided.

![Questioning Q&A widget](/static/assets/artificial-intelligence-and-machine-learning/images/qna-widget/questioning-qna.png)

## Provide feedback to the generated chart
Review the generated chart and provide feedback by clicking like or dislike.

![Feedback Q&A widget](/static/assets/artificial-intelligence-and-machine-learning/images/qna-widget/feedback-qna.png)

When you select the dislike option, a prompt will appear, allowing you to inform the BoldBI team about your reasons for disliking. This action will generate an email to the BoldBI team that includes the question, the data source's column names relevant to the widget in question, and any error logs. Your feedback will be used to enhance the AI model.

![Report feedback to BoldBI](/static/assets/artificial-intelligence-and-machine-learning/images/qna-widget/reportfeedback-qna.png)

The email will be sent from the email configured in the [Email settings](https://help.boldbi.com/site-administration/email-settings/email-settings-configuration/). 


## Transforming the Q&A Widget into a Regular Widget

You have the option to transform the widget generated from the Q&A into a regular widget, which provides additional customization features to tailor the chart according to your preferences.

To initiate the transformation, select the `Convert to standard widget` icon. This action will change the current Q&A widget into a regular widget, maintaining the same dimensions. After conversion, it will function just like any other standard widget, ready for further customization.

![Convert to Standard widget](/static/assets/artificial-intelligence-and-machine-learning/images/qna-widget/converttostandard-qna.png)

>**Note**: Once converted, it is not possible to revert to the Q&A widget. Should you require modifications to the question, please proceed by incorporating a fresh Q&A widget within the designer.

## View Mode for Questions and Answers Feature

The Questions and Answers feature can be deployed on the dashboard, enabling end users to pose questions to the linked data sources within the dashboard and view the resulting charts.

![Questioning Q&A widget in view mode](/static/assets/artificial-intelligence-and-machine-learning/images/qna-widget/viewmode-qna.png)

>**NOTE:** The Q&A widget utilizes the AI Assistant service, and its usage is deducted from the AI Assistant's available credits.

> **IMPORTANT:** Please find the best practices and limitations from this link [Best Practices and Limitations](/artificial-intelligence-and-machine-learning/best-practices-and-limitations/) to get a seamless experience with the Q&A widget 