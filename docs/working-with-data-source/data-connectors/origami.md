---
layout: post
title: Origami – Embedded BI Data Connector | Bold BI Documentation
description: Learn how to create a data source by connecting the Origami data using its REST API endpoint in Dashboard Designer with the Bold BI Embedded data connector.
canonical: "/working-with-data-source/data-connectors/origami/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Origami data source
Bold BI dashboard designer supports connecting the Origami web services through REST API. 

> **Note:** Origami data source is available in Bold BI Embedded Analytics but not in Cloud Analytics Server.

## Choose Origami data source
To configure the Origami data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

    ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Origami** connection in the connection panel.

    ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Origami/ChooseDS.png)

  > **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Origami/ChooseDS_Server.png)
   
   
## Create Origami data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow these steps to create Origami data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Origami REST API endpoint in the URL textbox. Refer to the [Origami API documentation](https://documenter.getpostman.com/view/2653695/TzRa5Ni8#3729bf72-a394-497b-9336-79b2db027a23) for more details.

    Example: `https://<:Account_Name>.origami.ms/entities/api/instance_data/format/json?`

3. Select POST method for the REST API in the Method combo box.
4. Choose a valid **Username** ,**Password** and **Entity_data_name** in parameters.
5. In Max Rows, enter the maximum number of rows to be fetched from the Origami data source. This value is used to fetch the data from the Origami data source via pagination.	
6. Choose a time interval for the Refresh Settings using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard. 
7. Select **JSON** data type in the **Data Format** combo box.
8. Choose *None* under the **Authentication Type** as authentication is done through the header.

     ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/Origami/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-source/editing-a-data-connection/) option.

#### How do I get *Entity_data_name* for connecting Origami Data source?
1. Login to the [Origami](https://origami.ms/login/) account.
2. Go to *Settings -> Developers -> Entity test*.

    ![Entity_Data_Name](/static/assets/working-with-datasource/data-connectors/images/Origami/Entity_Data_Name.png)

#### Additional information
<table width="600">
<tr>
<td>
Max Rows
</td>
<td>
Most of the REST APIs return only fewer data on a single API request. To pull the amount of data you need, set a value in this field.  
Pagination is handled internally and will fetch the amount of data you need.
</td>
</tr>
<tr>
<td>
Refresh Settings
</td>
<td>
Period of time before next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date. If you do not want to sync your new data, choose ‘Never.’
</td>
</tr>
</table>

### Setting up the URL

1. Login to the [Origami](https://origami.ms/login/) account. As soon as you login the account, **ACCOUNT NAME** will be created on the URL.
2. Replace the account name in the *<:ACCOUNT NAME>* on the URL.

### Sample queries

**Fetch instance structure**

  `https://zync.origami.ms/entities/api/entity_structure/format/json?`
  
**Create instance with regular groups**  

  `https://zync.origami.ms/entities/api/create_instance/format/json?`
  
### Preview and data import

* Click **Preview & Connect** to connect with the configurations set.

* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from the Origami Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in a grid for preview. Select required schema(s) from a treeview to use in designer and click **Connect**.

    ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.

    ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links

[Data Transformation](/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](https://help.boldbi.com/getting-started/creating-dashboard/)