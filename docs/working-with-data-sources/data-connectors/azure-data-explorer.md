---
layout: post
title: Azure Data Explorer – BI Connector | Bold BI Documentation
description: Learn how to connect Azure Data Explorer, an analytic data warehouse with Bold BI Cloud & Embedded, and create a data source for widget configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Azure Data Explorer data source
Bold BI Dashboard Designer supports connecting to Azure Data Explorer database through KQL Live query.

## Choose Azure Data Explorer data source
To configure the Azure Data Explorer data source, follow these steps:
1. Click on **Data Sources** in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click on **CREATE NEW** to launch a new connection from the connection panel.

    ![Create data source](/static/assets/working-with-datasource/data-connectors/images/AzureDataExplorer/DataSource_CreateIcon.png)

3. Select the **Azure Data Explorer** connection in the connection panel.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/AzureDataExplorer/ChooseDataSource.png)

> **NOTE:**  You can also create a **data source** from the home page by clicking on the Data Sources menu in the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/AzureDataExplorer/ChooseDataSource_Server.png)

## Connect to Azure Data Explorer
Azure Data Explorer data source can be accessed in Bold BI using the live connection mode. 

### Create Azure Data Explorer data source
After clicking the data source, the NEW DATA SOURCE configuration panel opens. Follow the given steps to create an Azure Data Explorer data source:
1. Enter a name and description (optional) for the data source.
2. Enter the tenant ID (authority) of the server in the Authority textbox.
3. Enter a valid Azure Data Explorer application Client ID in the **Application Client ID** text box. 
4. Enter a valid Azure Data Explorer application secret key in the **Application Key** text box.
5. Enter a valid output location for storing the output files in the **Output location** text box in the specified format.
6. Select a database that you want to query from the listed databases associated with the Azure Data Explorer server in the database combo box.

   ![Azure Data Explorer Connection](/static/assets/working-with-datasource/data-connectors/images/AzureDataExplorer/AzureDataExplorer_Connection.png)

### Data Preview
1. Click **Connect** to connect to the Azure Data Explorer server with the configured details.
The schema represents the collection list retrieved from the Azure Data Explorer server. This dialog displays a list of schemas in a treeview along with their corresponding values.

   ![Treeview schema](/static/assets/working-with-datasource/data-connectors/images/AzureDataExplorer/AzureDataExplorer_Treeview_schema.png)

2. Now, the data design view page with the selected table schema opens. Drag and drop the table.

   ![Query designer](/static/assets/working-with-datasource/data-connectors/images/AzureDataExplorer/AzureDataExplorer_Query_Editor.png)

   You can use the Code View options to pass queries and display data.
 
   ![Query designer](/static/assets/working-with-datasource/data-connectors/images/AzureDataExplorer/AzureDataExplorer_CodeView.png)
   

3. Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** to the data source connection. You can connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/AzureDataExplorer/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/AzureDataExplorer/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## How to get Azure Data Explorer Credentials 

### Authority  
The authority is a GUID that contains the tenant ID of Azure Directory.

### Application Client ID 
The client ID is a unique Application (client) ID assigned to your app by Azure AD when the app is registered.

### Application Key 
This application key is the secret key generated for your app by Azure AD when the app is registered.

## How to get above credentials in Azure Portal
1. Login to the Azure Portal.
2. Navigate to Azure Active Directory.
3. Select App Registrations and locate the Azure AD App where you’re trying to find the Client ID and Client Secret Key.
4. Within the Azure AD App, select Certificates & Secrets.

**NOTE:**  Once a Secret is created and you navigate away from the Certificates and Secrets page, the Secret value is no longer available to be seen or copied.

## Limitations 
1. The expressions that Azure Data Explorer does not support are:

   * Char
   * Date Name

2. You cannot use ranges with an aggregation function in a widget’s measure filter. Therefore, selecting the **none** option in the **aggregate** setting after applying a measure filter with ranges will be supported.
3. Azure Data Explorer does not provide built-in support for data sampling. While it offers powerful capabilities for real-time analytics and querying large datasets, data sampling operations cannot be performed directly within the platform. If data sampling is required, it is necessary to perform the sampling outside of Azure Data Explorer using other tools or programming languages. Once the sampling is completed, the sampled data can be ingested into Azure Data Explorer for further analysis. It is important to consider alternative approaches and optimize data analysis workflows without relying on built-in data sampling functionality.
4. The Azure Data Explorer connector cannot support column names with dots. In such cases, address this limitation by hiding the affected column in the table.