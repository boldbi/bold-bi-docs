---
layout: post
title: ODBC – Embedded BI Data Connector | Bold BI Learning
description: Learn how to connect ODBC databases such as SQL Server, PostgreSQL, MySQL, Oracle, Exasol and DB2 with Bold BI Embedded and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to ODBC data source
Bold BI Dashboard designer (On-Premise) supports connecting to datasources through Open Database Connectivity(ODBC).

## Choose an ODBC data source
Dashboard designer (On-Premise) supports connecting to the data sources through the ODBC Drivers using the Data Source Name(DSN).

Connecting to the ODBC data sources are similar to the other data sources in Bold BI. First, create a DSN using the 32-bit driver architecture and Bold BI will retrieve the 32-bit DSN architecture types from the windows registry.

To configure the ODBC data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **ODBC** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/Odbc/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/Odbc/ChooseDS_server.png)

## Connect to ODBC
### Create an ODBC data source
After clicking the data source, the NEW DATA SOURCE configuration panel opens. The following ODBC drivers are supported:
* SQL Server
* PostgreSQL
* MySQL
* Oracle
* Exasol
* DB2

Following steps to create a ODBC data source: 
1. Enter a name and description (optional) for the data source.
2. There is a drop-down box for DSN name to choose from the drop-down list.
3. Enter a valid ODBC server user name in the **User Name** text box.
4. Enter a valid ODBC server password in the **Password** text box.
5. Enter a valid ODBC server database name (optional) in the **Database** text box.

   ![ODBC Connection](/static/assets/embedded/working-with-datasource/data-connectors/images/Odbc/Odbc_Connection.png)

If the on premise is installed in IIS, it will show the system DSN alone because all the applications hosted in IIS are considered and running on the system user privilege.

By default, IIS (inetinfo.exe) is configured to run in the system account context, but you can use the services console to change the identity of various services. So that they can run in a user account rather than the system account and the system DSN will work  only under the hosted application in IIS.

If the on premise is installed in IIS Express, you have to list out the system and user DSN from the installed machine. So that you can connect using both the system and user DSN.

   ![ODBC Dsn list](/static/assets/embedded/working-with-datasource/data-connectors/images/Odbc/Odbc_DsnList.png)

In future, you can edit the connection information using [Edit Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/) option.

### Data Preview
1. Click **Connect** to connect the ODBC server with configured details.
The schema represents the collection list that are retrieved from the ODBC server. This dialog box displays the list of schemas in tree view and its corresponding values.

   ![Treeview schema](/static/assets/embedded/working-with-datasource/data-connectors/images/common/Treeview_schema.png)

2. Now, the data design view page with selected table schema opens. Drag the table.

   ![Query designer](/static/assets/embedded/working-with-datasource/data-connectors/images/common/QueryEditor_sql.png)

    Either you can use the Code View options for passing query to display data.

   ![Codeview mode](/static/assets/embedded/working-with-datasource/data-connectors/images/common/CodeViewMode.png)

3. Click **Save** to save the data source with a relevant name.

## Bold BI hosting with x86 and x64 bit wise for ODBC data source connection
If the on premise is installed in IIS, you have to list out the system DSN values from installed machine. By default, the application will be hosted in IIS on 32-bit mode. While listing out the system DSN values, it will list only the 32-bit System DSN values.
To connect the 64-bit DSN values, run the dashboard application in 64-bit mode.

Following steps to connect the 64-bit values: 
1. Open Internet Information Services (IIS) Manager (**Start** > **Run** > type "**inetmgr**").
   ![IIS Run](/static/assets/embedded/working-with-datasource/data-connectors/images/Odbc/IIS_Run.png) 
2. Using the navigation pane at the left, browse to **Sites** and select your Bold BI application site (**BoldBIOnPremiseEdition**).
   ![IIS Bold BI Site](/static/assets/embedded/working-with-datasource/data-connectors/images/Odbc/IIS_BoldBISite.png) 
3. Right-click the Bold BI application site (**BoldBIOnPremiseEdition**) and select the **Manage Website** > **Stop**.
   ![IIS Stop BoldBI](/static/assets/embedded/working-with-datasource/data-connectors/images/Odbc/IIS_Stop_BoldBI.png) 
4. Select the **Application Pools** and then select and right click **BoldBI** > **Stop**. 
   ![IIS Stop Application Pools](/static/assets/embedded/working-with-datasource/data-connectors/images/Odbc/IIS_Stop_ApplicationPools.png) 
5. Repeat the step 4 for all other application pools **BoldBIDesigner**, **BoldBIJobs**, and **BoldUMS**.
6. Select the application pool **BoldBI** and click the **Advanced Settings** option.
   ![IIS Application Pools Advanced settings](/static/assets/embedded/working-with-datasource/data-connectors/images/Odbc/IIS_ApplicationPools_ADS.png) 
7. Set the “**Enable 32- bit Applications**” to “**False**”.
   ![IIS Application Pools Advanced settings False](/static/assets/embedded/working-with-datasource/data-connectors/images/Odbc/IIS_ApplicationPools_ADS_False.png) 
8. Set the same property change in other three application pools (**BoldBIDesigner**, **BoldBIJobs**, and **BoldUMS**) also. 
9. Restart the site (**BoldBIOnPremiseEdition**) and all application pools (**BoldBI**, **BoldBIDesigner**, **BoldBIJobs**, and **BoldUMS**).
   ![IIS Start BoldBI](/static/assets/embedded/working-with-datasource/data-connectors/images/Odbc/IIS_Start_BoldBI.png)
   ![IIS Start Application Pools](/static/assets/embedded/working-with-datasource/data-connectors/images/Odbc/IIS_Start_ApplicationPools.png) 
10. If the services are restarted, then go to the ODBC data source, it will list out the System DSN 64-bit values.

## Related links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/bold-bi-walk-through/)