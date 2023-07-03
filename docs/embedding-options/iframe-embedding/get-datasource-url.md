---
layout: post
title: Get data source URL for Embedding | Bold BI Documentation
description: Learn how to get Bold BI data source URL to embed data source create and data source edit mode in any application.
platform: bold-bi
documentation: ug
---

# How to get the data source URL

1. To get the embed URL, click the More option icon of the desired data source from data source listing page .Select Edit data source option from dropdown.  
![DataSourceUrl](/static/assets/iFrame-based/images/Edit-DataSource.png#max-width=90%)  

2. Once the particular data source opened, copy the datasourceId with its name from the URL to embed it.  
![InspectElement](/static/assets/iFrame-based/images/datasource-url.png)

3. Example URL for edit data source.
<table>
<tr>
<td> http://localhost:53623/bi/site/site1/datasource-designer/313dde2f-9add-493c-9d45-7dac4f1ec770/TestingIframe</td>
</tr>
</table>

4. To form a URL for creating a data source , replace the data source name and data source Id with a word `connection`.
Example URL for create data source,
<table>
<tr>
<td> http://localhost:53623/bi/site/site1/datasource-designer/connection
</td>
</tr>
</table>



