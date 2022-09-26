---
layout: post
title: Google BigQuery – Cloud BI Connector | Bold BI Documentation
description: Learn how to connect Google BigQuery cloud data warehouse and read its data into the dashboard in Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Google BigQuery data source
Bold BI dashboard designer supports connecting Google BigQuery server using the Live mode.

## Choose a Google BigQuery data source
To configure the Google BigQuery data source, follow these steps: 
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Google BigQuery** connection in the connection panel.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.
 
   ![Choose data source server](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/ChooseDS_server.png)

## Authentication with Google BigQuery
Use the following steps to authenticate with Google BigQuery server:
1. Click the data source, you will be prompted with a login window. Enter the credentials of your Google BigQuery account to authorize.

   ![Google BigQuery Login](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_Login.png)

2. Click **Allow** in the authorization window to accept the scopes requested by Bold BI dashboards.

   ![Google BigQuery Login Allow](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_LoginAllow.png)

   > **NOTE:**  If the permission is denied, the account will not be accessible from the dashboard.

3. Set a name to identify the account and click **Next**.
4. Now, you have successfully authorized your connection. Click **Connect** to continue with the data source connection.

   ![Google BigQuery Connect Account](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_ConnectAccount.png)

5. To connect using the already connected account, refer to Connected Accounts.

> **NOTE:**  To connect to another account, click **Connect New Account**.

## Connect to Google BigQuery
### Create a Google BigQuery data source
After successful authentication, the **NEW DATA SOURCE** configuration panel opens. 
Follow these steps to create the Google BigQuery data source. 
1. Enter name and description (optional) for the data source. 
2. Choose the required projects in **Project** drop-down box.
3. The authentication type will be sent to Google BigQuery automatically in the **Connected as** text box since OAuth is used for authenticating with the Google BigQuery account.
4. To connect Google Big Query with particular dataset, enter the property currentdataset={datasetname} or specificdataset={datasetname} in the Additional connection parameters text box.

   ![Google BigQuery Connection](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_Connection.png#max-width=100%)

To edit the connection information, use the [Edit Connection](https://help.syncfusion.com/bold-bi/editing-a-data-connection) option.

### Preview data
1. Click **Connect** to connect the Google BigQuery server with configured details.
The available datasets list is shown in a tree view for the selected projects that are retrieved from the Google BigQuery server.

   ![Treev view](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_Treeview.png#max-width=100%)

If the dataset name is provided in Additional connection parameters text box, only the specified dataset will be listed.

   ![Tree view specific dataset](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_Treeview_specific_dataset.png#max-width=100%)

   2. In the data design view page, drag, and drop the table.

   ![Query Editor](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_QueryEditor.png#max-width=100%)
 
    You can use **Code View** options for passing query to display data.

   ![Code view](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/GoogleBQ_CodeView.png#max-width=100%) 

3. Click **Save** to save the data source with relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with the data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/OAuthDS.png)
 
You can edit, delete, and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/cloud/working-with-datasource/data-connectors/images/GoogleBigQuery/ManageDS.png)

## Link Google BigQuery data source with Google Analytics
Google BigQuery is a data warehouse and only supports live connection in Bold BI. You can link your Google BigQuery with Google Analytics by following the official documentation steps about [linking Google BigQuery with Google Analytics](https://support.google.com/analytics/answer/3416092?hl=en). 

## Related links
[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/quick-start/)

[Google BigQuery Limitations to build query](https://cloud.google.com/bigquery/quotas)

[Linking Google BigQuery with Google Analytics](https://support.google.com/analytics/answer/3416092?hl=en)

[Google BigQuery Integration](https://www.boldbi.com/integrations/google-big-query?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbigoolglebigqueryintegration)