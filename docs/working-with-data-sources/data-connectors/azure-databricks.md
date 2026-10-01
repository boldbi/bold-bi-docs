---
layout: post
title: Azure Databricks – BI Connector | Bold BI Documentation
description: Learn how to connect Azure Databricks, an analytic data warehouse with Bold BI Cloud & Embedded, and create a data source for widget configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Azure Databricks data source
Bold BI Dashboard Designer supports connecting to Azure Databricks Catalog through SQL Live query.

## Choose Azure Databricks data source
To configure the Azure Databricks data source, follow these steps:
1. Click on **Data Sources** in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click on **CREATE NEW** to launch a new connection from the connection panel.

    ![Create data source](/static/assets/working-with-datasource/data-connectors/images/AzureDatabricks/DataSource_CreateIcon.png)

3. Select the **Azure Databricks** connection in the connection panel.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/AzureDatabricks/ChooseDataSource.png)

 >**NOTE:**  You can also create a **data source** from the home page by clicking on the Data Sources menu in the left menu panel and selecting **Create Data Source** from the data sources page.

 ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/AzureDatabricks/ChooseDS_server.png)

 ## Connect to Azure Databricks data Source
Azure Databricks data source can be accessed in Bold BI using the live connection mode. 

### Create Azure Databricks data source
After clicking the data source, the NEW DATA SOURCE configuration panel opens. Follow the given steps to create an Azure Databricks data source:

1. Enter a name and an optional description for the data source.  

2. Enter the **Workspace URL** in the  **Server Name** text box.

3. Enter the **Warehouse ID** in the **Warehouse** text box.

4. From the **Authentication Type** dropdown, select one of the following authentication Mode:

      - **Personal Access Token (PAT)**

      - **Azure AD Service Principal**

5. If you select **Personal Access Token (PAT)** authentication, enter the PAT value in the Personal Access Token text box. Otherwise, select Service Principal as the authentication mode.

   ![Azure Databricks Connection](/static/assets/working-with-datasource/data-connectors/images/AzureDatabricks/Azure_Databricks_PAT.png)

6. Enter the **Tenant ID** (also known as *Authority*) in the **Tenant ID** text box.  
7. Enter a valid Azure databricks **Application Client ID** in the **Client ID** text box.  
8. Enter a valid Azure databricks **Application Key** in the **Client Secret** text box.  
9. Select the database you want to query from the listed databases associated with the Azure databricks server, using the **Database** combo box.  

   ![Azure Databricks Connection](/static/assets/working-with-datasource/data-connectors/images/AzureDatabricks/AzureDatabricks_Connection.png)

### Data Preview

1. Click **Connect** to connect to the Azure Databricks server with the configured details.  
The schema represents the collection list retrieved from the Azure Databricks server. This dialog displays a list of schemas in a treeview along with their corresponding values.

   ![Treeview schema](/static/assets/working-with-datasource/data-connectors/images/AzureDatabricks/Azure_Databricks_treeview_schema.png)

2. Now, the data design view page with the selected table schema opens. Drag and drop the table.

   ![Query designer](/static/assets/working-with-datasource/data-connectors/images/AzureDatabricks/Azure_Databricks_Query_Editor-min.png)

   You can use the Code View options to pass queries and display data.
 
   ![Query designer](/static/assets/working-with-datasource/data-connectors/images/AzureDatabricks/Azure_Databricks_CodeView-min.png)

3. Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** to the data source connection. You can connect to the data source using custom attributes or dashboard parameters.

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

**Custom Attribute**

A custom attribute is a piece of code that functions as a parameter and can be replaced by users in a query. The attribute name is replaced by the code, which is saved for each user and used to render the dashboard.

![Custom](/static/assets/working-with-datasource/data-connectors/images/AzureDatabricks/Custom.png)

**Dashboard Parameter**

A dashboard parameter is a global placeholder value such as a number, string, or date that can replace a constant value in an expression, stored procedure, code view, and web URL. By default, the dashboard will be rendered with the default parameter value. You can change the parameter dynamically while viewing the dashboard.

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/AzureDatabricks/Parameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## How to get Azure databricks Credentials 

### Workspace URL 
To find the Azure Databricks Workspace URL, open your Azure Databricks workspace and copy the URL displayed in the browser's address bar. For example: `https://adb-1234567890123456.7.azuredatabricks.net`.

### Warehouse ID 
 To obtain the Azure Databricks SQL Warehouse ID, navigate to **Azure Databricks** → **SQL Warehouses**, select the target warehouse, and copy the **Warehouse ID** from the warehouse details page or from the warehouse URL.
 
 ![Get WarehouseID ](/static/assets/working-with-datasource/data-connectors/images/AzureDatabricks/Azure_Databricks_WarehouseID.png)

### Tenant ID 
To obtain the Tenant ID from the registered application, navigate to **Azure Portal** → **Microsoft Entra ID** → **App Registrations**, select the application, and copy the **Directory (tenant) ID** from the application's **Overview** page.

### Client ID 
To obtain the Azure Databricks Client ID, navigate to **Azure Portal** → **Microsoft Entra ID** → **App Registrations**, select the registered application used for authentication, and copy the **Application (client) ID** from the application's **Overview** page.

### Application Key 
To obtain the Application Key, navigate to **Azure Portal** → **Microsoft Entra ID** → **App Registrations**, select the registered application, go to **Certificates & Secrets** → **Client Secrets**, and copy the **Secret Value** of the generated client secret. This value is used to authenticate the application when connecting to Azure Databricks.

### Personal Access Token 
To generate a Personal Access Token (PAT) in Azure Databricks, navigate to **Profile** → **Settings** → **Developer** → **Access Tokens**, generate a new token, and securely copy the generated PAT for later use.

   ![Azure Databricks GetPAT](/static/assets/working-with-datasource/data-connectors/images/AzureDatabricks/Azure_Databricks_GetPAT.png)

## How to get Service Principal credentials in Azure Portal

Follow the below steps to access Azure Databricks data using the Service Principal

1. Register an Application in Microsoft Entra (Azure AD)

    ![Azure Databricks Registration](/static/assets/working-with-datasource/data-connectors/images/AzureDatabricks/Azure_Databricks_registration.png)

2.	Once the application created you can note the Client ID , Tenant ID  and Client Secrets from here

    ![Azure Databricks Connectivity](/static/assets/working-with-datasource/data-connectors/images/AzureDatabricks/Azure_Databricks_Connectivity.png)

## How to Enable Service Principal Access for Azure Databricks and Databricks SQL Warehouse
   Add the service principal to the Azure Databricks workspace.
   1. In the Azure Databricks workspace, Navigate to Profile → Settings → Identity and Access → Service Principals  → Add Service Principal.

       ![Add New ServicePrincipal ](/static/assets/working-with-datasource/data-connectors/images/AzureDatabricks/Azure_Databricks_ServicePrincipal.png)

   2. Select Add new service principal to account and workspace, choose Microsoft Entra ID Managed as the identity provider, enter the Microsoft Entra Application ID, and then click Add.

   3. Assign the required Workspace Permissions to the service principal and save the changes to complete the configuration.

       ![Add Service Principal privilege ](/static/assets/working-with-datasource/data-connectors/images/AzureDatabricks/Azure_Databricks_AddServicePrincipal.png)

   4. Navigate to **SQL Warehouses**, select the target warehouse, add the service principal to the warehouse permissions, and grant **CAN Manage** or the appropriate privileges required for query execution.
 
   ![Add Service Principal to Warehouse](/static/assets/working-with-datasource/data-connectors/images/AzureDatabricks/Azure_Databricks_AddServicePrincipalWorkspace.png)

## How to Enable Service Principal Access to a Catalog in Azure Databricks
1. Navigate to Catalog → <Catalog Name> in the Azure Databricks workspace.

2. Open the Permissions tab and click Grant.

3. Select the required Service Principal from the list of available principals.

4. Select the Data Reader privilege in the catalog permissions.

![ Add Service Principal to Catalog ](/static/assets/working-with-datasource/data-connectors/images/AzureDatabricks/Azure_Databricks_CatalogPermission.png)

5. Click Confirm to apply the permissions.

> **Note:** If you use **Personal Access Token (PAT)** authentication to connect to Azure Databricks, the user associated with the PAT must have the required permissions in Azure Databricks. Ensure that the user has **Can Manage** permission on the target SQL Warehouse and **Data Reader** permission on the required catalog to access and query data successfully.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Service Principals](https://learn.microsoft.com/en-us/azure/databricks/admin/users-groups/service-principals)

[Manage service principals](https://learn.microsoft.com/en-us/azure/databricks/admin/users-groups/manage-service-principals)