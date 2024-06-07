---
layout: post
title: Change Dashboard Data Connection – Embedded BI | Bold BI
description: Learn how to change dashboard data connection in embedded view based on criteria defined in web service and the configuration in Bold BI Embedded application.
platform: bold-bi
documentation: ug
---

# Dynamic Connection String

The Dynamic Connection String feature allows you to modify the connection string of data sources in dashboard view mode. This feature enables you to view the modified connection string on the Bold BI application itself and on embedded dashboards using the Dashboard Embedding feature.

> **NOTE:** To embed the Bold BI application, please refer [Embed Bold BI](/overview/) documentation.

## How Dynamic Connection String Works

When creating live mode connections, it is necessary to configure a Web API that will provide the modified connection string.

The configured API will be triggered for each data source created with Dynamic Connection String Configuration during dashboard rendering.
The connection string in the data source will be updated and the dashboard will be rendered based on the response from the API.

If the API cannot be accessed or if the API returns any errors, the dashboard will display an error message indicating that the connection is invalid.

## How to Configure the API details for a data source

1.	Create a live mode connection with any database management systems such as MSSQL, MySQL, PostgreSQL, etc.

2.	In the connection input form, click the **Dynamic Connection String** switch to enable the Dynamic Connection String feature for the data source.

    ![Dynamic Connection String](/static/assets/iFrame-based/images/dynamicconnectionconfigurationmode.png)

3.	Click the **Configure** button to open the dialog for Dynamic Connection Configuration.

    ![Dynamic Connection String Configuration](/static/assets/iFrame-based/images/dynamicconnectionstringconfiguration.png)

4. In the Dynamic Connection Configuration dialog, the **External API** option will be selected by default. Please fill out the form for the Web API and click **Save**. The API will be validated by triggering a Head request. Please ensure that the provided API supports the HTTP HEAD method.

5. At the bottom of the dialogue, there is a pinned option to choose the **Configuration Mode** and **User Identity** for the Dynamic Connection Configuration.

    **Configuration Mode**

    The Dynamic Connection String can function in different modes, which can be used to limit its functionality to the embedded application, the server, or both.

    <table>   
    <tr>
    <td>
    Embedding </td><td>
    The dashboards can only be rendered with a modified connection string when they are embedded using the Dashboard Embedding feature.  
    </td></tr>
    <tr>
    <td>
    Server </td><td>
    The Bold BI application only allows for rendering the dashboards with a modified connection string. </td></tr>
    <tr>
    <td>
    Both </td><td>
    It is possible to render the dashboards with a modified connection string on both the Bold BI application and dashboards embedded using the Dashboard Embedding feature.</td></tr>  
    </table>

    **User Identity**

    The identity that should be passed to the custom Web API is meant to enhance the usage of a modified connection string at runtime. This can hold the logged-in user's information, such as their `Email` and `Full Name`.

6. After saving the configuration, please proceed with the creation of the data source.

## How to use Custom Attribute in Dynamic Connection String

1. At the beginning of the dialogue, there is a radio button that allows you to select either the **External API** or **Custom Attribute** for the Dynamic Connection Configuration.

   ![Dynamic Connection String](/static/assets/iFrame-based/images/customattribute.png)

2. Select the **Custom Attribute** option for the Custom Attribute in Dynamic Connection Configuration.

   ![Dynamic Connection String](/static/assets/iFrame-based/images/customattributeconfiguration.png)

3. Please enter the attribute name in the **Custom Attribute** section, which was created on the site. Ensure that the [custom attribute](/working-with-data-sources/configuring-custom-attribute/) was created at the **Site Level**.

4. At the bottom of the dialog, there is a pinned option to choose the Configuration Mode. In Configuration Mode, select the **Both** option and click **Save**.

5. After saving the configuration, follow the **Uses of custom attribute** in [configuring custom attribute](/working-with-data-sources/configuring-custom-attribute/#uses-of-custom-attribute) to complete the configuration. 

> **NOTE:** The configuration can be modified or removed at any time by accessing the Edit Connection dialog for the data source.

## How to create the Web API

We can utilize any technology to develop the Web API. The return type and content type of the API should be JSON.

The Dashboard Service will pass the following arguments when triggering the API. 

**Arguments**

<table>   
   <tr>
   <td>
   requiredParams </td><td>
   Comma separated values. The API should return the value with the keys mentioned in the argument.
   
   Eg: MSSQL required Parameters for the connection string are `DataSource, InitialCatalog, Username, Password, IntegratedSecurity,AdvancedSettings, CommandTimeout, Schema`
</td></tr>
   <tr>
   <td>
   datasourceName</td><td>
   Name of the data source</td></tr>
   <tr>
   <td>
   datasourceId</td><td>
   GUID of the data source as string.</td></tr>
   <tr>
   <td>
   customIdentity</td><td>
   The string value that holds the user identity information based on the identity type chose on Dynamic Connection String Configuration. Also it can be override while the dashboard embedded using the Dashboard Embedding feature</td></tr>
   <tr>
   <td>
   identityType</td><td>
   The string value that holds the type of the user identity chose on Dynamic Connection String Configuration either `Email` or `Full Name`. Also it should be `Custom` while custom identity is passed on dashboard embedded using the Dashboard Embedding feature </td></tr>

   </table>

   > **NOTE:** During the validation of the HEAD request, the above arguments will not be passed to the API.

   **Parameters for the connection string**
   
<table>
   <tr>
   <td>Data Source</td>
   <td>Parameters</td>
   </tr>
   <tr>
   <td>Amazon Athena</td>
   <td>Database,RegionEndpoint,OutputLocation,AwsAccessKeyId,AwsSecretAccessKey</td>
   </tr>
   <tr>
   <td>Amazon Aurora MySQL</td>
   <td>ServerName,Database,UserName,Password,Port,AdvancedSettings,CommandTimeout</td>
   </tr>
   <tr>
   <td>Amazon Aurora PostgreSQL</td>
   <td>ServerName,Database,UserName,Password,Port,SslMode,TrustServerCertificate,AdvancedSettings,CommandTimeout</td>
   </tr>
   <tr>
   <td>Amazon RDS MariaDB</td>
   <td>ServerName,Database,UserName,Password,Port,AdvancedSettings,CommandTimeout</td>
   </tr>
   <tr>
   <td>Amazon RDS MySQL</td>
   <td>ServerName,Database,UserName,Password,Port,AdvancedSettings,CommandTimeout</td>
   </tr>
   <tr>
   <td>Amazon RDS PostgreSQL</td>
   <td>ServerName,Database,UserName,Password,Port,SslMode,TrustServerCertificate,AdvancedSettings,CommandTimeout</td>
   </tr>
   <tr>
   <td>Amazon RDS SQL</td>
   <td>DataSource,InitialCatalog,UserName,Password,IntegratedSecurity,AdvancedSettings,CommandTimeout</td>
   </tr>
   <tr>
   <td>Amazon Redshift</td>
   <td>ServerName,Database,UserName,Password,Port,SslMode,TrustServerCertificate,AdvancedSettings,CommandTimeout</td>
   </tr>
   <tr>
   <td>Azure Synapse Analytics</td>
   <td>DataSource,InitialCatalog,UserName,Password,IntegratedSecurity,AdvancedSettings,CommandTimeout</td>
   </tr>
   <tr>
   <td>CDATA with MySQL endpoints</td>
   <td>ServerName,Database,UserName,Password,Port,AdvancedSettings,CommandTimeout</td>
   </tr>
   <tr>
   <td>ClickHouse</td>
   <td>ServerName,Database,Port,UserName,Password,AdvancedSettings,CommandTimeout</td>
   </tr>
   <tr>
   <td>Elasticsearch</td>
   <td>ServerName,Database,Port,UserName,Password,AuthenticationType,AdvancedSettings,ConnectionType</td>
   </tr>
   <tr>
   <td>Google BigQuery (This is supported only for Service Account Authentication) </td>
   <td>ServiceId, Service, Provider, Database, IsServiceAccount, ClientID, Type, ClientEmail, PrivateKey
   </td>
   </tr>
   <tr>
   <td>Google Cloud MySQL</td>
   <td>ServerName,Database,UserName,Password,Port,AdvancedSettings,CommandTimeout</td>
   </tr>
   <tr>
   <td>Google Cloud PostgreSQL</td>
   <td>ServerName,Database,UserName,Password,Port,SslMode,TrustServerCertificate,AdvancedSettings,CommandTimeout</td>
   </tr>
   <tr>
   <td>InfluxDB</td>
   <td>ServerName,Database,UserName,Password,Port,AuthenticationType,AdvancedSettings,CommandTimeout</td>
   </tr>
   <tr>
   <td>MariaDB</td>
   <td>ServerName,Database,UserName,Password,Port,AdvancedSettings,CommandTimeout</td>
   </tr>
   <tr>
   <td>ODBC</td>
   <td>ServerName,Port,UserName,PassWord,Database,DsnName,odbctype,Driver,AdvancedSettings,CommandTimeout</td>
   </tr>
   <tr>
   <td>Oracle</td>
   <td>ServerName,Port,InstanceName,Database,UserName,Password,AdvancedSettings,CommandTimeout</td>
   </tr>
   <tr>
   <td>PostgreSQL</td>
   <td>ServerName,Database,UserName,Password,Port,SslMode,TrustServerCertificate,AdvancedSettings,CommandTimeout</td>
   </tr>
   <tr>
   <td>Presto</td>
   <td>ServerName,Port,UserName,Password,Database,CatalogName,AuthenticationType,AdvancedSettings</td>
   </tr>
   <tr>
   <td>SingleStore</td>
   <td>ServerName,Database,UserName,Password,Port,AdvancedSettings,CommandTimeout</td>
   </tr>
   <tr>
   <td>SnowFlake</td>
   <td>ServerName,Database,UserName,Password,AdvancedSettings,CommandTimeout</td>
   </tr>   
   <tr>
   <td>SparkSQL</td>
   <td>ServerName,Port,Database,UserName,Password,AuthenticationType,AdvancedSettings</td>
   </tr> 
   <tr>
   <td>SQL server</td>
   <td>DataSource,InitialCatalog,UserName,Password,IntegratedSecurity,AdvancedSettings,CommandTimeout</td>
   </tr>  
   </table>

   **Return Type**

   **Type:** ApiResponse class

  ```json

      public class ApiResponse
      {
        public bool Status { get; set; }

        public string Message { get; set; }

        public object Data { get; set; }
      }

  ```

   The API should return the response as the above Class object.

   **APIResponse Class Properties**

   <table>   
   <tr>
   <td>
   Status </td><td>
   Represents whether the action is successful or not. Set as true if the response is valid connection string.
</td></tr>
   <tr>
   <td>
   Message</td><td>
   Holds the status message it can be a simple “Success” or an error message when the status is false.</td></tr>
   <tr>
   <td>
   Data</td><td>
   Holds the Connection string builder data.</td></tr>   
   </table>

   **Example Response**

  ```json
      {
        Status: true,
        Message: "Success",
        Data: {
                DataSource: "<server>",
                InitialCatalog: "<database>",
                Username: "<username>",
                Password: "<password>",
                IntegratedSecurity: "false",
                AdvancedSettings: "",
                CommandTimeout: "300"
        }
      }
  ```


> **NOTE:** If the response or the connection string is invalid, then the dashboard will not be rendered, and an error message will be displayed on the widgets.

![Data Retrieval Error](/static/assets/iFrame-based/images/dataretrievalerror.png)

## How to pass the Custom Identity to the viewer Service

1. The custom identity can only be passed to the viewer when the dashboard is embedded using the [Dashboard Embedding feature](/embedding-options/embedding-sdk/).

2. The custom identity should be passed through the [dynamicConnection](/embedding-options/embedding-sdk/embedding-api-reference/members/#dynamicconnection) API.

**Example**

  ```js
	  var dashboard = BoldBI.create({     
     dynamicConnection: {
          isEnabled: true,
          identity: "",
     }
     });
     dashboard.loadDashboard();
  ```


> **NOTE:** The value of the identity property should be a string, which will not be processed at the Bold BI end. This information will be passed to the API without any modifications.

## Dynamic Connection String Configuration within same Database

1. To configure the dynamic connection string for a dashboard's data source using the same database with a different schema, we can utilize the necessary "Schema" parameter in the modified connection string.

2. The API response from the Custom Web API should include the connection parameter schema in the modified connection string.

**Example Response**

  ```json    
      {
        Status: true,
        Message: "Success",
        Data: {
                DataSource: "<server>",
                InitialCatalog: "<database>",
                Username: "<username>",
                Password: "<password>",
                IntegratedSecurity: "false",
                AdvancedSettings: "",
                CommandTimeout: "300",
                Schema: "<schema>"
        }
      }
  ```

## Custom Attribute support for Dynamic Connection string

Dynamic Connection String support provides another way to connect the data source using Custom Attributes.

You can edit a data source by following these steps: 

1.	Please add the custom attribute at the User level, Group level, or Site level.

![Custom Attribute Configuration](/static/assets/iFrame-based/images/custom-attribute-configuration.png)

Please enter the data source connection string in JSON format in the Custom Attribute window.

**Dynamic connection string supported Datasources**

<table>
   <tr>
   <td>Data Source</td>
   <td>Connection String</td>
   </tr>
   <tr>
   <td>
       <li> SQL server
       <li> Amazon RDS SQL
       <li> Azure Synapse Analytics       
   </td>
            
   <td>
     
      {
       
          "DataSource": "",
          "InitialCatalog": "",
          "UserName": "",
          "Password": "",
          "IntegratedSecurity": "",
          "AdvancedSettings": "",
          "CommandTimeout": ""
      }
   </td></tr>
   <tr>
   <td><li>PostgreSQL
      <li>Amazon Redshift
      <li>Amazon RDS PostgreSQL
      <li>Google Cloud PostgreSQL
      <li>Amazon Aurora PostgreSQL
      </td>
   <td>
      
      {
       
          "ServerName": "", 
          "Database": "",
          "UserName": "",
          "Password": "",
          "Port": "",
          "SslMode": "",
          "TrustServerCertificate": "",
          "AdvancedSettings": "",
          "CommandTimeout": "",
          "Schema":""    
      } 
   </td>
   </tr>
   <tr>
   <td><li>MySQL
       <li>MariaDB     
       <li>SingleStore      
       <li>Amazon RDS MySQL       
       <li>Amazon RDS MariaDB
       <li>Google Cloud MySQL
       <li>Amazon Aurora MySQL
       <li>CDATA with MySQL endpoints
	   <li>ClickHouse
       </td>
   <td>
      
      {
       
           "ServerName": "",
           "Database": "",
           "UserName": "",
           "Password": "",
           "Port": "",
           "AdvancedSettings": "",
           "CommandTimeout": ""
      }
   </td>
   </tr>
   <tr>
   <td>Oracle</td>
   <td>
      
      {
       
           "ServerName": "",
           "Port": "",
           "InstanceName": "",
           "Database": "",
           "UserName": "",
           "Password": "",
           "AdvancedSettings": "",
           "CommandTimeout": ""
      }
   </td>
   </tr>
   <tr>
   <td>InfluxDB</td>
   <td>
      
      {
       
           "ServerName": "",
           "Database": "",
           "UserName": "",
           "Password": "",
           "Port": "",
           "AuthenticationType": "",
           "AdvancedSettings": "",
           "CommandTimeout": ""
      }
   </td>
   </tr>
   <tr>
   <td>Amazon Athena</td>
   <td>
      
      {
       
           "Database": "",
           "RegionEndpoint": "",
           "OutputLocation": "",
           "AwsAccessKeyId": "",
           "AwsSecretAccessKey": ""
      }
   </td>
   </tr>
   <tr>
   <td>Elasticsearch</td>
   <td>
      
      {
       
           "ServerName": "",
           "Database": "",
		   "Port": "",
           "UserName": "",
           "Password": "",
		   "AuthenticationType": "",
           "AdvancedSettings": "",
           "ConnectionType": ""
      }
   </td>
   </tr>
   <tr>
   <td>ODBC</td>
   <td>
      
      {
       
           "ServerName": "",
           "Database": "",
		   "Port": "",
           "UserName": "",
           "PassWord": "",
		   "DsnName": "",
		   "odbctype": "",
		   "Driver": "",
           "AdvancedSettings": "",
           "CommandTimeout": ""
      }
   </td>
   </tr>
   <tr>
   <td>Presto</td>
   <td>
      
      {
       
           "ServerName": "",
           "Database": "",
		   "Port": "",
           "UserName": "",
           "Password": "",
		   "AuthenticationType": "",
           "AdvancedSettings": "",
           "CatalogName": ""
      }
   </td>
   </tr>
   <tr>
   <td>SparkSQL</td>
   <td>
      
      {
       
           "ServerName": "",
           "Database": "",
		   "Port": "",
           "UserName": "",
           "Password": "",
		   "AuthenticationType": "",
           "AdvancedSettings": ""
      }
   </td>
   </tr>
   <tr>
   <td>SnowFlake</td>
   <td>
      
      {
       
           "ServerName": "",
           "Database": "",
           "UserName": "",
           "Password": "",
           "AdvancedSettings": "",
           "CommandTimeout": ""
      }
   </td>
   </tr>
   <tr>
   <td>Google BigQuery</td>
   <td>
      
      {

         "ServiceId" = "",
         "Service" = "",
         "Provider" = "",
         "Database" = "",
         "IsServiceAccount" = "",
         "ClientID" = "",
         "Type" = "",
         "ClientEmail" = "",
         "PrivateKey" = ""
      }
   </td>
   </tr>
   </table>

   >**NOTE** :This is supported only for Service Account Authentication

2. Open the Dynamic connection string configuration window and navigate to the Custom Attribute option.

3. Please enter the valid custom attribute in the window provided and click Save.

![Custom Attribute Configuration with Dynamic Connection String](/static/assets/iFrame-based/images/custom-attribute-configuration-with-dynamic-connection-string.png)

Please refer to the help document below for instructions on configuring Custom Attribute. Click on the [custom attribute](/working-with-data-sources/configuring-custom-attribute/) for more information.
 