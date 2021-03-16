---
layout: post
title: Creating a New Data Source – Cloud BI | Bold BI Learning
description: Learn how to create a new data source in Bold BI Cloud application to bind data with widgets in dashboard.
platform: bold-bi
documentation: ug
---
# Working with Data Source

This section will explains on how to create a new data source and fetch the data from it.

## Prerequisites

If you want to connect your database server with Bold BI cloud site, you must [white list](/cloud-bi/working-with-data-source/white-list-ip-address-bold-bi-cloud/) the Bold BI cloud server IP addresses within your Database server if it restricts to access.


## Creating a New Data Source

To bind data to a widget, minimum of one data source is required.  Follow these steps to create a data source,

1. Click `Data Source` button in the configuration panel. The data panel opens.

   ![Data button](/static/assets/cloud/working-with-datasource/images/databutton.png)

2. Click `CREATE NEW` to launch a new connection from the connection type panel.

   ![Data source button](/static/assets/cloud/working-with-datasource/images/datasourcebutton.png)

3. In the connection type panel, click any one (here clicked `Microsoft SQL` connection type for demonstration) of the listed connection types shown in the following image.

   ![Data source list](/static/assets/cloud/working-with-datasource/images/datasourcelist.png)

4. In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details.

   ![SQL database](/static/assets/cloud/working-with-datasource/images/sqldatabase.png)

5. Click `Connect` in the `NEW DATA SOURCE`configuration panel.

   ![Connect button](/static/assets/cloud/working-with-datasource/images/Connectbutton.png)
   
   Now, the following view will be displayed.
   
   ![Add data source](/static/assets/cloud/working-with-datasource/images/addeddatasource.png)

6. You can drag and drop the tables or views in the data design view by expanding the tree view.

   ![Tree view expand](/static/assets/cloud/working-with-datasource/images/treeviewexpand.png)

7. Click Update button or enable Toggle Option to show the data Preview data. When toggle button is in Disable state, you need click Update button every time for preview data for each and every action.

    ![Tree view expand](/static/assets/cloud/working-with-datasource/images/toggleoption.png)

8. Click `Save` button to save the data source with valid name.

   ![Save](/static/assets/cloud/working-with-datasource/images/finishbutton.png)

 [Learn how to edit a data source](/cloud-bi/working-with-data-source/editing-a-data-source/)

 [Learn how to delete a data source](/cloud-bi/working-with-data-source/deleting-a-data-source/)

## Post your message
If you are still not able to find the information that you are looking for in the self-help resources mentioned above then please [contact us](https://www.boldbi.com/contact) and send your requirements.