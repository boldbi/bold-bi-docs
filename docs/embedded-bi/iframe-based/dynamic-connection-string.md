---
layout: post
title: Change Dashboard Data Connection – Embedded BI | Bold BI
description: Learn how to change dashboard data connection in embedded view based on criteria defined in web service and the configuration in Bold BI Embedded application.
platform: bold-bi
documentation: ug
---

# Dynamic Connection String

The Dynamic Connection String feature enables you to modify the connection string of the data sources in dashboard view mode. This feature allows you to view the dashboard with modified connection string on Bold BI application itself and also to the dashboards embedded using the Dashboard Embedding feature as well.

> **NOTE:** To embed the Bold BI application, refer [Embed Bold BI](/embedded-bi/overview/) documentation.

## How Dynamic Connection String Works

While creating live mode connections, you need to configure a Web API that will return the modified connection string.

On dashboard rendering, the configured API will be triggered for  each data source created with Dynamic Connection String Configuration. 
Based on the response from the API the connection string will be updated in the data source and the dashboard will be rendered.

If the API is not reachable or if the API returned any errors then the dashboard will be rendered with an error stating that the connection is not valid.

## How to Configure the API details for a data source

1.	Create any live mode connection such as MSSQL, MySQL, PostgreSQL etc.

2.	In the connection input form, click the **Dynamic Connection String** switch to enable the Dynamic Connection String feature for the data source.

    ![Dynamic Connection String](/static/assets/embedded/iFrame-based/images/dynamicconnectionconfigurationmode.png)

3.	Click the **Configure** button to open the Dynamic Connection Configuration dialog.   

    ![Dynamic Connection String Configuration](/static/assets/embedded/iFrame-based/images/dynamicconnectionstringconfiguration.png)

4. In the Dynamic Connection Configuration dialog, fill the form for the Web API and click  **Save**. The API will be validated by triggering the API with a Head request. Make sure that the provided API has HTTP HEAD method support. 

5. At the bottom of the dialog, there is an option pinned to choose the **Configuration Mode** and **User Identity** for the Dynamic Connection Configuration.

    **Configuration Mode**

    The mode in which the Dynamic Connection String should function also can be used to limit the functionality to the embedded application or within the server or both.

    <table>   
    <tr>
    <td>
    Embedding </td><td>
    Allows to render the dashboards with modified connection string only when the dashboards are embedded using the Dashboard Embedding feature  
    </td></tr>
    <tr>
    <td>
    Server </td><td>
    Allows to render the dashboards with modified connection string only on Bold BI application itself </td></tr>
    <tr>
    <td>
    Both </td><td>
    Allows to render the dashboards with modified connection string on both Bold BI application and dashboards embedded using the Dashboard Embedding feature as well</td></tr>  
    </table>

    **User Identity**

    The Identity that should be passed to the Custom Web API, in order to enhance the usage of modified connection string at run time. This can holds the logged in user information as `Email` and `Full Name` 

6. After saving the configuration, complete the data source creation.

> **NOTE:** The configuration can be modified or removed any time by navigating to Edit Connection dialog for the data source.

## How to create the Web API

We can use any technology to create the Web API. The return type and the content type of the API should be JSON.

The following arguments will be passed by the Dashboard Service when triggering the API.

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

   > **NOTE:** During the validation of head request the above arguments will not be passed to the API.

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


> **NOTE:** If the response is invalid or the connection string is invalid then the dashboard will not be rendered. An error message will be shown on the widgets.

![Data Retrieval Error](/static/assets/embedded/iFrame-based/images/dataretrievalerror.png)

## How to pass the Custom Identity to the viewer Service

1. The custom identity can be passed to the viewer only when the dashboard embedded using the [Dashboard Embedding feature](/embedded-bi/javascript-based/).

2. The custom identity should be passed through the API [dynamicConnection](/embedded-bi/javascript-based/api-reference/members/#dynamicconnection).

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


> **NOTE:** The value of the identity property should be a string. This string will not be processed at the Bold BI end. This information will be passed to the API without any modifications.

## Dynamic Connection String Configuration within same Database

1. While configuring the Dynamic Connection String for a dashboard's data source using the same Database with different Schema, we can use the required parameter `Schema` on the modified connection string.

2. So the API response from the Custom Web API should includes the connection parameter Schema on modified connection string.

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

