---
layout: post
title: How to enable the threshold through code view mode| Bold BI Docs
description: Learn the steps a user has to follow to enable threshold through code view mode for data sources in Bold BI.
canonical: "/faq/how-to-enable-the-threshold-feature-through-code-view-mode-in-data-source/"
platform: bold-bi
documentation: ug
---

# How to enable the threshold through code view mode in Bold BI

Please follow these steps to enable the threshold in Bold BI.

1. Connect to a data source by providing valid credentials.

2. Drag and drop the table from the table schema in the data design view page.

3. By default, the data design view opens with design view. Switch to the code view by enabling the slider option in the tools pane in data design view as shown (highlighted) in the following image.
![Code view](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/Customsql_CodeSlider.png)
* This will open the query editor window as like below,
![Query Editor](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/CustomSql-QueryEditor.png)

4. In the `Query Editor` window, you can write your own query which helps you to access table schema information and create a new data source that can be bound to dashboard widgets. 

5. Click on the `Threshold` icon as shown in the following image.
![Threshold](/static/assets/faq/images/thresholdIcon.png)
![Threshold dialog box](/static/assets/faq/images/threshold-dialog-box.png)
* Threshold dialog box will display after clicking the threshold icon,
how-to-enable-the-threshold-feature-through-code-view-mode-in-datasources
6. You must first select the Threshold checkbox.
7. Then, Threshold Data Limit input box will then be enabled.
Enter the Threshold Data Limit value now.

8. After writing your query, click the `Execute` button in the tools pane. You can also view the data for your query in bottom of the Query Editor by clicking `Update`. 
![Execute](/static/assets/faq/images/threshold-run-and-update.png)
Then click `Save` to save the data source.
![Save Data source](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/CustomSql-SaveDataSource.png)

**Limitation**

If the threshold limit is set to 5000, and a query returns more than 5000 rows, a warning message will be displayed to the user like this below
![Threshold warning](/static/assets/faq/images/threshold-warning.png)
