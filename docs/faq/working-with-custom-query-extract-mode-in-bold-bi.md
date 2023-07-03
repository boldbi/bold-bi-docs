---
layout: post
title: Working with custom query extract mode in Bold BI | Bold BI Docs
description: Learn the steps for how to work with custom (select) query in SQL datasources for extract mode in Bold BI.
canonical: "/faq/working-with-custom-query-extract-mode-in-bold-bi/"
platform: bold-bi
documentation: ug
---


# Working with custom query extract mode in Bold BI

Bold BI allows creating data sources using custom query to get the aggregated or filtered data from the large database instead of extracting the entire data.

## How to connect custom query in extract mode:

Steps on how to connect the data source using custom query mode:

1. Click Data Source in the configuration panel to add a new data connection.

   ![Custom Query Extract](/static/assets/faq/images/custom-query-create-datasource.png#max-width=100%)
   
2. Click CREATE NEW to launch new connection panel.

   ![Custom Query Extract](/static/assets/faq/images/custom-query-create-new.png#max-width=100%)

3. Enter server name, authentication type, user name, and password details.

4. Select the mode as extract and choose max rows count.

> **NOTE:** Initially, data will be extracted based on the max rows selected to proceed with the data model. The remaining records (there is no limit) will be extracted during the next refresh.

5. Select the database name from dropdown text box from which the tables are to be extracted.

6. Choose relevant time interval from Refresh Settings dropdown menu. For refreshing the data source periodically, refer [Refresh Settings](/working-with-data-source/data-connectors/sql-data-source/#sql-data-source-refresh-settings) to learn more.

![Custom Query Extract](/static/assets/faq/images/custom-query-new-datasource-dialog.png#max-width=100%)

7. Click Connect, Extract data dialog will open as follows.

![Custom Query Extract](/static/assets/faq/images/custom-query-extract-data.png#max-width=65%)

8. To use custom query mode, switch to custom query and enter the query. The Table Name is used to store the results of the given query in the intermediate database. By default, Table Name is shown as Query Result, which can be changed based on the requirement.

![Custom Query Extract](/static/assets/faq/images/custom-query-create-query.png#max-width=65%)

9. Click preview to view the results of the given query. A maximum of 10 records will be shown for preview purpose.

![Custom Query Extract](/static/assets/faq/images/custom-query-preview-datasource.png#max-width=65%)

10. Close preview and click connect. The given query will be executed, and the table will be extracted and moved to the data design view page.

![Custom Query Extract](/static/assets/faq/images/custom-query-design-view.png#max-width=75%)

11. Drag and drop the table from the left side tree view panel.

![Custom Query Extract](/static/assets/faq/images/custom-query-drop-table.png#max-width=85%)

12. Click **Save and Exit** to save the data source or **Continue to Dashboard** to design a dashboard using this data source.

![Custom Query Extract](/static/assets/faq/images/custom-query-save-datasource.png#max-width=85%)

> **Limitations:**

- Support only select query.
- Query is not supported in custom query.
- Max Row count is not applicable for the stored procedure executed in the custom query.
- Dashboard parameter is not supported in the custom query.

