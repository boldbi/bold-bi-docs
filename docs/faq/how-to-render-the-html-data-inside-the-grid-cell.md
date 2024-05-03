---
layout: post
title: How to render the html data inside grid cell | Bold BI Docs
description: Learn the steps to create an expression to modify a column value (of type date, string or integer) as html content & render it inside the dashboard grid widget.
platform: bold-bi
documentation: ug
---

# How to render the html data inside the grid cell

The grid has HTML content loading functionality enabled by default. However, our data source only contains **date**, **string**, or **integer** values. Therefore, you need to first create HTML content and bind it to a grid cell.

Follow these steps to render the HTML content inside the grid cell:

1. Create an [expression](/working-with-data-sources/data-modeling/configuring-expression-columns/) using the following syntax to convert **date**, **string** or **integer** values to HTML content, :

    <b>Syntax:</b> `CONCAT('<p>', [Column Name],'</p>')`

    Here, you can use any HTML tag instead of the paragraph tag.

    ![html expression](/static/assets/faq/images/html-expression.png)

2. Next, you need to [configure](/working-with-data-sources/data-modeling/configuring-expression-columns/#configuring-expression-column-in-widgets) this expression column in your grid widget. Once you bind the generated expression to your grid, the HTML content will be rendered correctly.

    ![html output](/static/assets/faq/images/html-output.png)