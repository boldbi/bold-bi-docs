---
layout: post
title: Lighthouse – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect Lighthouse web service through REST API endpoint with Bold BI Cloud and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Lighthouse data source
The Bold BI dashboard designer supports connecting to Lighthouse web services through the REST API. 

## Choose Lighthouse data source
To configure the Lighthouse data source, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Lighthouse** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/lighthouse/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/lighthouse/ChooseDS_server.png)

## Create Lighthouse data source

Once you click the Lighthouse data source, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create Lighthouse data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Lighthouse REST API endpoint in the URL textbox. Refer to the [Lighthouse API documentation](http://help.lighthouseapp.com/kb/api/api-basics) for more details.

    Example: `https://<:domain>.lighthouseapp.com/projects`

3. Select the **GET** method for the REST API in the **Method** combo box.
4. Choose a time interval for the **Refresh Settings** using the combo box, to periodically trigger the REST API request and keep the data in sync with our dashboard.  
5. Select **JSON** or **XML** data type in **Data Format** combo box.
6. Replace `<:X-LighthouseToken>` under Headers with a valid **Access Token**.
7. Choose **None** under **Authentication Type** as authentication is done through header.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/lighthouse/DataSourcesView.png)


You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### How do I get Access Token for connecting Lighthouse data source?

1. Login to your **Lighthouse** account.
2. Go to *Profile -> Account*. Find your API token under *YOUR API TOKENS*.
3. Use *CREATE AN API TOKEN*, if you do not have a Lighthouse token yet.
4. Use this *API Token* as **Access Token** in Lighthouse data source in Bold BI Dashboard.

![Reveal API Token](/static/assets/working-with-datasource/data-connectors/images/lighthouse/APIToken.png)

#### Additional information
<table width="600">
<tr>
<td>
Max Rows
</td>
<td>
Most REST APIs return only a limited amount of data on a single API request. To retrieve the necessary amount of data, you can set a value in this field. Pagination is handled internally and will fetch the required data.
</td>
</tr>
<tr>
<td>
Refresh Settings
</td>
<td>
The period of time before the next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date. If you do not want to sync your new data, choose 'Never'.
</td>
</tr>
<tr>
<td>
Data Formats 
</td>
<td>
By default data is retrieved in <i>JSON</i> format. Additionally <i>XML</i> is supported in Lighthouse.
</td>
</tr>
</table>

### Setting up the URL

1. Replace &lt;:domain&gt; with your Lighthouse domain.
2. Query the <i>/Projects</i> endpoint.
3. From the listed information get the id of the specific *Project*.

Replace it in the URL to query a tickets:

`https://my-sample-domain.lighthouseapp.com/projects/140556/tickets`

For more information on the API endpoints available for this data source, refer to their official [API Documentation](http://help.lighthouseapp.com/kb/api/api-basics)

### Sample queries

**Milestones**

`https://my-sample-domain.lighthouseapp.com/projects/140556/milestones`

**Messages**

`https://my-sample-domain.lighthouseapp.com/projects/140556/messages`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Lighthouse Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/lighthouse/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/lighthouse/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Lighthouse Integration](https://www.boldbi.com/integrations/lighthouse?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbilighthouseintegration)