---
layout: post
title: Synonyms Support for AI Interactions | Bold BI Docs
description: Learn how to add and manage column and value synonyms to improve AI question interpretation in Bold BI.
canonical: "/artificial-intelligence-and-machine-learning/synonyms/"
platform: bold-bi
documentation: ug
---

# Synonyms
Synonyms let the AI recognize different phrasings users might use for the same columns or values, improving question interpretation and intent matching.

## Steps to initiate synonyms
1. Add synonyms for a column and its values by selecting Add Synonyms for that column in the datasource editor.

![Add Synonyms](/static/assets/artificial-intelligence-and-machine-learning/images/synonyms/add-synonyms-click.png)

2. After clicking, synonyms addition dialog will appear.

![Add Synonyms](/static/assets/artificial-intelligence-and-machine-learning/images/synonyms/add-synonyms-dialog.png)

## Column Synonyms

Column Synonyms are alternate names or short phrases users commonly use to refer to a column. They help the AI map varied terminology to the correct field.

### Steps to add Column Synonyms
1. Enter common variants, abbreviations, or business-specific terms to improve matching and click Add to apply.

![Add Synonyms](/static/assets/artificial-intelligence-and-machine-learning/images/synonyms/column-synonyms-add.png)

2. Added column synonyms are shown beneath the input for that column.

![Add Synonyms](/static/assets/artificial-intelligence-and-machine-learning/images/synonyms/column-synonyms-added.png)

## Column Synonyms Suggestions

The system can generate suggested column synonyms from your data and context; you may accept, edit, or reject these suggestions.

### How to get column synonyms suggestions
1. Click Suggest to view generated candidates and review them before applying.

![Add Synonyms](/static/assets/artificial-intelligence-and-machine-learning/images/synonyms/column-synonyms-suggestions.png)

## Value Synonyms

Value Synonyms are alternate names or phrases for specific values within a column, ensuring the AI recognizes different ways users refer to the same value.

### Steps to add Column Synonyms
1. Choose a value from the list or type a value manually, then enter synonyms to improve matching and click add to apply.

![Add Synonyms](/static/assets/artificial-intelligence-and-machine-learning/images/synonyms/value-synonyms-add.png)

2. Added value synonyms are shown beneath the input for that value.

![Add Synonyms](/static/assets/artificial-intelligence-and-machine-learning/images/synonyms/value-synonyms-added.png)

## Value Synonyms Suggestions

The system can propose synonyms for specific values to help you quickly populate value-level synonyms.

### How to get value synonyms suggestions
1. Select or enter a value and click Suggest to view generated candidates; review and apply as needed.

![Add Synonyms](/static/assets/artificial-intelligence-and-machine-learning/images/synonyms/value-synonyms-suggestions.png)

## Additional Context for Synonyms Suggestions
An optional "additional context" field is available for columns and values. Providing this context helps the suggestion engine produce more accurate and relevant synonym recommendations.

![Add Synonyms](/static/assets/artificial-intelligence-and-machine-learning/images/synonyms/synonyms-additional-context.png)

## Limitations

1. In the Value Synonyms list, only the first 1000 data values are displayed; values beyond the first 1000 must be entered manually.  
2. Synonyms must be added one column at a time; support is provided per single column in the datasource (add synonyms separately for each column).  
3. Synonyms are used only for AI interactions; they do not change or replace the actual column names or actual data values.
4. Adding synonyms is currently not supported in Code view or for dashboard parameters.

> **Note:** Saving the datasource applies synonyms at the datasource level and affects subsequent AI interactions.