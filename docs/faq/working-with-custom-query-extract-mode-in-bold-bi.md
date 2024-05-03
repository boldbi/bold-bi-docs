---
layout: post
title: Working with custom query extract mode in Bold BI | Bold BI Docs
description: Learn the steps for how to work with custom (select) query in SQL datasources for extract mode in Bold BI.
canonical: "/faq/working-with-custom-query-extract-mode-in-bold-bi/"
platform: bold-bi
documentation: ug
---


# Working with custom query extract mode in Bold BI

Bold BI allows the creation of data sources using custom queries to obtain aggregated or filtered data from a large database, rather than extracting all of the data.

## How to connect custom query in extract mode:

Steps on how to connect the data source using custom query mode:

1. Click on Data Source in the configuration panel to add a new data connection.

   ![Custom Query Extract](/static/assets/faq/images/custom-query-create-datasource.png#max-width=100%)
   
2. Click CREATE NEW to launch the new connection panel.

   ![Custom Query Extract](/static/assets/faq/images/custom-query-create-new.png#max-width=100%)

3. Enter the server name, authentication type, username, and password details.

4. Select the mode as extract and choose the maximum number of rows.

> **NOTE:** Initially, data will be extracted based on the maximum number of rows selected to proceed with the data model. The remaining records (with no limit) will be extracted during the next refresh.

5. Select the database name from the dropdown text box from which the tables are to be extracted.

6. Choose the relevant time interval from the Refresh Settings dropdown menu. To refresh the data source periodically, refer to [Refresh Settings](/working-with-data-sources/data-connectors/sql-data-source/#sql-data-source-refresh-settings) to learn more.

![Custom Query Extract](/static/assets/faq/images/custom-query-new-datasource-dialog.png#max-width=100%)

7. Click Connect, and the Extract Data dialog will open as shown below.

![Custom Query Extract](/static/assets/faq/images/custom-query-extract-data.png#max-width=65%)

8. To use custom query mode, switch to custom query and enter the query. The Table Name is used to store the results of the given query in the intermediate database. By default, the Table Name is shown as Query Result, but it can be changed based on the requirements.

![Custom Query Extract](/static/assets/faq/images/custom-query-create-query.png#max-width=65%)

9. Click preview to view the results of the given query. A maximum of 10 records will be shown for preview purposes.

![Custom Query Extract](/static/assets/faq/images/custom-query-preview-datasource.png#max-width=65%)

10. Close the preview and click connect. The provided query will be executed, and the table will be extracted and moved to the data design view page.

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

