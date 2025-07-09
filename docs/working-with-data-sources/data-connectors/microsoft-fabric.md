---
layout: post
title: Microsoft Fabric Explorer – BI Connector | Bold BI Documentation
description: Learn how to connect Microsoft Fabric Explorer, an analytic data warehouse with Bold BI Cloud & Embedded, and create a data source for widget configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Microsoft Fabric source
Bold BI Dashboard Designer supports connecting to Microsoft Fabric database through SQL Live query.

## Choose Microsoft Fabric data source
To configure the Microsoft Fabric data source, follow these steps:
1. Click on **Data Sources** in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click on **CREATE NEW** to launch a new connection from the connection panel.

    ![Create data source](/static/assets/working-with-datasource/data-connectors/images/AzureDataExplorer/DataSource_CreateIcon.png)

3. Select the **Microsoft Fabric Source** connection in the connection panel.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Microsoft-Fabric/ChooseDataSource.png)

 **NOTE:**  You can also create a **data source** from the home page by clicking on the Data Sources menu in the left menu panel and selecting **Create Data Source** from the data sources page.

 ## Connect to Microsoft Fabric data Source
Microsoft Fabric data source can be accessed in Bold BI using the live connection mode. 

### Create Microsoft Fabric data source
After clicking the data source, the NEW DATA SOURCE configuration panel opens. Follow the given steps to create an Microsoft fabric data source:

1. Enter a name and an optional description for the data source.  
2. Select your **Lake house** or **Warehouse** from the Fabric workspace.  
3. Enter the **Tenant ID** (also known as *Authority*) in the **Authority** text box.  
4. Enter a valid Microsoft Fabric **Application Client ID** in the **Application Client ID** text box.  
5. Enter a valid Microsoft Fabric **Application Key** in the **Application Key** text box.  
6. Enter a valid output location for storing the output files in the **Output Location** text box, in the specified format.  
7. Select the database you want to query from the listed databases associated with the Microsoft Fabric server, using the **Database** combo box.  

   ![Microsoft Fabric Explorer Connection](/static/assets/working-with-datasource/data-connectors/images/Microsoft-Fabric/MicrosoftFabric_Connection.png)

### Data Preview

1. Click **Connect** to connect to the Microsoft Fabric Data Explorer server with the configured details.  
The schema represents the collection list retrieved from the Microsoft Fabric Data Explorer server. This dialog displays a list of schemas in a treeview along with their corresponding values.

   ![Treeview schema](/static/assets/working-with-datasource/data-connectors/images/Microsoft-Fabric/Microsoft_fabric_treeview_schema.png)

2. Now, the data design view page with the selected table schema opens. Drag and drop the table.

   ![Query designer](/static/assets/working-with-datasource/data-connectors/images/Microsoft-Fabric/Microsoft_fabric_Query_Editor-min.png)

   You can use the Code View options to pass queries and display data.
 
   ![Query designer](/static/assets/working-with-datasource/data-connectors/images/Microsoft-Fabric/Microsoft_fabric_CodeView-min.png)

3. Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** to the data source connection. You can connect to the data source using custom attributes or dashboard parameters.

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

**Custom Attribute**

A custom attribute is a piece of code that functions as a parameter and can be replaced by users in a query. The attribute name is replaced by the code, which is saved for each user and used to render the dashboard.

![Custom](/static/assets/working-with-datasource/data-connectors/images/Microsoft-Fabric/Custom.png)

**Dashboard Parameter**

A dashboard parameter is a global placeholder value such as a number, string, or date that can replace a constant value in an expression, stored procedure, code view, and web URL. By default, the dashboard will be rendered with the default parameter value. You can change the parameter dynamically while viewing the dashboard.

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/Microsoft-Fabric/Parameter.png)

## How to get Microsoft Fabric Credentials 

### Authority  
The authority in Microsoft Fabric is typically a GUID that contains the tenant ID of the Fabric directory.

### Application Client ID 
To get the client ID, go to the Microsoft Fabric portal, navigate to App Registrations, select your application, and find the Application (client) ID in the details.

### Application Key 
The application key is the (Client Secret) secret key generated for your app in the Microsoft Fabric portal when the app is registered, used for authentication and authorization.

## How to get above credentials in Microsoft Fabric Portal

Follow the below steps to access Microsoft Fabric data using the service principle

1. Register an Application in Microsoft Entra (Azure AD)

    ![Microsoft Fabric Registration](/static/assets/working-with-datasource/data-connectors/images/Microsoft-Fabric/Microsoft_fabric_registration.png)

2.	Once the application created you can note the Client ID and Tenant ID from here 

    ![Microsoft Fabric Connectivity](/static/assets/working-with-datasource/data-connectors/images/Microsoft-Fabric/Microsoft_fabric_Connectivity.png)

3.	Configure API Permissions

    ![Microsoft Fabric Api Permission](/static/assets/working-with-datasource/data-connectors/images/Microsoft-Fabric/Microsoft_fabric_apipermission.png)

4. Enable Service Principle Access in Fabric

   • Go to Microsoft Fabric (https://app.fabric.microsoft.com)

   • Click on the gear icon → Admin Portal.

   • Under Tenant settings, find Service principles can use Fabric APIs.

   • Ensure this option is Enabled.

5. Grant Workspace Access to the Service Principle

   • Navigate to the Workspace in Fabric.

   ![Microsoft Fabric WorkSpace](/static/assets/working-with-datasource/data-connectors/images/Microsoft-Fabric/Microsoft_fabric_Workspace.png)

   • Click Manage Access → + Add people or groups.

   • Type the App name (Service Principle) and select it

    ![Microsoft Fabric ManageAcess](/static/assets/working-with-datasource/data-connectors/images/Microsoft-Fabric/ManageAccess.png)

   • Then Click Add. 