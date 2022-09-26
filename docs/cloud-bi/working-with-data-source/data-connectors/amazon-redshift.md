---
layout: post
title: Amazon Redshift – Cloud BI Connector | Bold BI Documentation
description: Learn how to connect an Amazon Redshift database cluster and read its data into Bold BI Cloud dashboard.
platform: bold-bi
documentation: ug
---
   
# Connecting Bold BI to Amazon Redshift Database

Using the `Amazon Redshift` connection type, you can connect an Amazon Redshift database.

Click `Data Source` button in the configuration panel to add a new data connection.

![Data source Image](/static/assets/cloud/working-with-datasource/data-connectors/images/amazon-redshift/datasource.png#width=352px;height=501.51px)

Click `CREATE NEW` to launch a new connection from the connection type panel. 

![Data source Button](/static/assets/cloud/working-with-datasource/data-connectors/images/amazon-redshift/datasourcebutton.png#width=351px;height=504.4px)

Click `Amazon Redshift` connection button in the connection type panel.

![Red shift button](/static/assets/cloud/working-with-datasource/data-connectors/images/amazon-redshift/amazonredshiftbutton.png#width=351px;height=504.06px)

Set the `server Name` and `port number` where the Amazon Redshift service is running.

Enter the `user name` and `password` to connect to the Amazon Redshift.

There are two connection types available in a data source:

* Live mode
* Extract mode

## Live mode connection

In this connection type, a data source is directly fetched from source. Choose the `Live` mode option for this connection.

![Redshift Live mode](/static/assets/cloud/working-with-datasource/data-connectors/images/amazon-redshift/amazonredshiftlivemode.png#width=348px;height=500.95px)
 
The selected database will be opened in the data design view window.

![Data Design view](/static/assets/cloud/working-with-datasource/data-connectors/images/amazon-redshift/datadesignview.png#max-width=100%)

Drag and drop the table from table list, and click `Save` button to save the data source with valid name.

## Extract mode connection

In this connection type, a data source is fetched from source periodically. Choose the `Extract` mode option for this connection.

![Redshift Extract Mode](/static/assets/cloud/working-with-datasource/data-connectors/images/amazon-redshift/amazonredshiftExtractmode.png#width=350px;height=503.92px)

> **NOTE:**  Initially, data will be extracted based on the Max Rows selected in order to proceed with data model creation. The remaining records (there is no limit) will be extracted during the next refresh.  <br /> 
 ![Max rows option](/static/assets/cloud/working-with-datasource/data-connectors/images/amazon-redshift/maxRowOption.png#max-width=60%)	
 
## Refresh Settings

### Steps to configure the data source refresh settings:

1. Click Refresh Settings in the configuration panel.

![Refresh Setting](/static/assets/cloud/working-with-datasource/data-connectors/images/amazon-redshift/amazonredshiftRefreshSetting.png#width=350px;height=503.25px)

2. Select the recurrence type, recurrence start, and end dates in the **Refresh Setting** dialog box.

     * Data refresh can be scheduled hourly, daily, weekly, and monthly.
     * Application Time Zone is displayed below the date picker. Start time of the schedule is converted to the client Time Zone and shown at the right-side for users convenience. After selecting, click `Schedule`.

![Refresh Setting](/static/assets/cloud/working-with-datasource/data-connectors/images/amazon-redshift/RefreshSetting.png#max-width=100%)

## Preview and data import

1. Click `Connect` to redshift server with configured details.

2. The Extract Data dialog opens. This dialog has two modes of connection either via Table or [Custom query](/cloud-bi/faq/working-with-custom-query-extract-mode-in-bold-bi/). Under custom query option, write the required query and click **Connect**.
Under the Table option, this dialog displays list of tables and views in treeview. Select the required table(s) or view(s) from treeview to use in the designer.
The option is available for configuring incremental refresh column (The table must have a primary key column and date column to configure this option) for the selected items in the right-side panel. If you configure it, then the data source will work on [Incremental update](https://help.boldbi.com/cloud-bi/working-with-data-source/data-connectors/sql-data-source/#incremental-update), otherwise works on [Full load ](https://help.boldbi.com/cloud-bi/working-with-data-source/data-connectors/sql-data-source/#full-load) concept. And finally click `Connect`.

![Preview Extract](/static/assets/cloud/working-with-datasource/data-connectors/images/amazon-redshift/PreviewExtract.png#max-width=100%)

1. Now, the data design view page with the selected table schema opens. Drag the table.

![Query Editor Extract](/static/assets/cloud/working-with-datasource/data-connectors/images/amazon-redshift/QueryEditorExtract.png#max-width=100%)

* You can use the Code View option for passing query to display data.

![Code view mode extract](/static/assets/cloud/working-with-datasource/data-connectors/images/amazon-redshift/CodeViewModeExtract.png#max-width=100%)

Click `Save` to save the data source with a relevant name.

> **NOTE:** In future, you can edit the connection information for both live and extract mode connections using the [Edit Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/) option.

## Related links
[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/quick-start/)

[Blog post for Amazon Redshift](https://www.boldbi.com/blog/unlock-actionable-insights-from-amazon-redshift-data)

[Amazon Redshift Integration](https://www.boldbi.com/integrations/amazon-redshift)