---
layout: post
title: How to render the html data inside grid cell | Bold BI Docs
description: Learn the steps to create an expression to modify a column value (of type date, string or integer) as html content & render it inside the dashboard grid widget.
platform: bold-bi
documentation: ug
---

# How to render the html data inside the grid cell

The grid has HTML content loading functionality enabled by default. But our data source only contains <b>date, string,</b> or <b>integer</b> values. So first, you need to create a HTML content and bind it to a grid cell.

Follow these steps to render the HTML content inside the grid cell:

1. Create an [expression](/working-with-data-sources/data-modeling/configuring-expression-columns/) by using the following syntax to convert <b>date, string,</b> or <b>integer</b> values to HTML content, :

    <b>Syntax:</b> `CONCAT('<p>', [Column Name],'</p>')`

    Here, you can use any HTML tag instead of the paragraph tag.

    ![html expression](/static/assets/faq/images/html-expression.png)

2. Then, you need to [configure](/working-with-data-sources/data-modeling/configuring-expression-columns/#configuring-expression-column-in-widgets) this expression column to your grid widget. Once, you bind the generated expression in your grid, the HTML content is rendered correctly.

    ![html output](/static/assets/faq/images/html-output.png)