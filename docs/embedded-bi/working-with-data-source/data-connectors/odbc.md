---
layout: post
title: ODBC – Embedded BI Data Connector | Bold BI Learning
description: Learn how to connect ODBC databases such as SQL Server, PostgreSQL, MySQL, Oracle, Exasol and DB2 with Bold BI Embedded and create data source.
canonical: "/embedded-bi/working-with-data-source/data-connectors/odbc/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to ODBC data source
Bold BI Dashboard designer (Enterprise) supports connecting to datasources through Open Database Connectivity (ODBC).

## Choose an ODBC data source
Dashboard designer (Enterprise) supports connecting to the ODBC data sources through following two connection modes.

•	Data Source Name (DSN).

•	Drivers
![ODBC modes](/static/assets/embedded/working-with-datasource/data-connectors/images/Odbc/odbc-mode-types.png#max-width=60%)

### Data Source Name (DSN)
Create a DSN using the 32-bit driver architecture and Bold BI will retrieve the 32-bit DSN architecture types from the windows registry.

•	If the Bold BI is installed in IIS, it will show the system DSN alone because all the applications hosted in IIS are considered and running on the system user privilege.

By default, IIS (inetinfo.exe) is configured to run in the system account context, but you can use the services console to change the identity of various services. So that they can run in a user account rather than the system account and the system DSN will work only under the hosted application in IIS.

•	If the Bold BI is installed in IIS Express, we will list out the system and user DSN from the installed machine. So that you can connect using both the system and user DSN.
![ODBC DSN list](/static/assets/embedded/working-with-datasource/data-connectors/images/Odbc/dsn-list.png#max-width=60%)

### ODBC Drivers

ODBC Data source can also be connect through the drivers. If the Bold BI is installed in IIS Express, list out the drivers from the installed machine. So that you can connect using the driver.
![ODBC driver list](/static/assets/embedded/working-with-datasource/data-connectors/images/Odbc/driver-list.png#max-width=60%)

To configure the ODBC data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/Odbc/data-sources-icon.png#max-width=60%)

2. Click **CREATE NEW** to launch a new connection from the connection panel.

   ![Create datasource](/static/assets/embedded/working-with-datasource/data-connectors/images/Odbc/create-new-datasource.png#max-width=60%)
   
3. Select the **ODBC** connection in the connection panel.

   ![ODBC data source](/static/assets/embedded/working-with-datasource/data-connectors/images/Odbc/odbc-icon.png#max-width=60%)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.
   ![ODBC connector](/static/assets/embedded/working-with-datasource/data-connectors/images/Odbc/odbc-connector.png#max-width=90%)

## Connect to ODBC
### Create an ODBC data source
After clicking the data source, the NEW DATA SOURCE configuration panel opens. The following ODBC drivers are supported:
* SQL Server
* PostgreSQL
* MySQL
* Oracle
* Exasol
* DB2
* SAP-HANA
* Vertica
* Microsoft Access
* Elasticsearch
* FileMaker
* Firebird

Follow the given steps to create an ODBC data source: 
1. Enter a name and description (optional) for the data source.
2. A drop-down box for ODBC Connection Type.

   * DSN
   * Driver

  ![ODBC modes](/static/assets/embedded/working-with-datasource/data-connectors/images/Odbc/odbc-mode-types.png#max-width=60%)

### Connect using the DSN Connection Type
1. Choose a DSN name from the drop-down list.
2. Enter a valid ODBC server username in the **UserName** text box.
3. Enter a valid ODBC server password in the **Password** text box.
4. Enter a valid ODBC server database name (optional) in the **Database** text box.

   ![ODBC DSN](/static/assets/embedded/working-with-datasource/data-connectors/images/Odbc/odbc-dsn.png#max-width=60%)

In future, you can edit the connection information using [Edit Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/) option.

### Connect using the Driver Connection Type
1. Enter a name and description (optional) for the data source. 
2. Enter a valid ODBC server or host name in the **ServerName** text box.
3. Enter the port in which the server is running in **Port** text box.
4. Enter a valid ODBC username in the **UserName** text box. 
5. Enter a valid ODBC password in the **Password** text box.
6. Enter a valid ODBC database name in the **Database** text box.

   ![ODBC Driver](/static/assets/embedded/working-with-datasource/data-connectors/images/Odbc/odbc-driver.png#max-width=60%)

### Data Preview
1. Click **Connect** to connect the ODBC server with configured details.
The schema represents the collection list that are retrieved from the ODBC server. This dialog box displays the list of schemas in tree view and its corresponding values.

   ![ODBC designer page](/static/assets/embedded/working-with-datasource/data-connectors/images/Odbc/odbc-designer-page.png#max-width=100%)

2. Now, the data design view page with selected table schema opens. Drag the table.

   ![Drag table](/static/assets/embedded/working-with-datasource/data-connectors/images/Odbc/odbc-drag-table.png#max-width=100%)

   You can use the Code View options for passing query to display data.

   ![Codeview mode](/static/assets/embedded/working-with-datasource/data-connectors/images/Odbc/odbc-code-view-mode.png#max-width=100%)

3. Click **Save** to save the data source with a relevant name.

## Bold BI hosting with x86 and x64 bit wise for ODBC data source connection
If the Bold BI is installed in IIS, we will list the system DSN values from the installed machine. By default, the application will be hosted in IIS 32-bit mode. So, we will list only the 32-bit System DSN values in Bold BI ODBC connector.

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

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/quick-start/)