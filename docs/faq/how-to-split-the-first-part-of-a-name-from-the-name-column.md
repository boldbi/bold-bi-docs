---
layout: post
title: How to split the first part of a name - PostgreSQL | Bold BI Docs
description: Learn the steps for splitting the first part of a name from the name column by creating an expression of PostgreSQL connection data source in Bold BI designer.
platform: bold-bi
documentation: ug
---
# How to split the first part of a name from the name column

You can split the first part of a name from the name column by using the following syntax, which only works with PostgreSQL connections.

 <b>Syntax:</b>  `SPLIT_PART(([Column Name]) , ' ', 1)`

Follow these steps to split the first part of a name from the name column:

1. First, you need to create an [expression](/working-with-data-sources/data-modeling/configuring-expression-columns/) using the above syntax. You can see how we separate the names using a space in the following image.

    ![split expression](/static/assets/faq/images/split-expression.png)

2. Next, you will need to [configure](/working-with-data-sources/data-modeling/configuring-expression-columns/#configuring-expression-column-in-widgets) this expression column to your grid widget. Once you bind the generated expression in your grid, it will display the first name from the full name.

    ![split output](/static/assets/faq/images/split-output.png)

3. Similarly, you can split the second part of the name from the name column by using the following method:

    <b>Syntax:</b>  `SPLIT_PART(([Column Name]) , ' ', 2)`