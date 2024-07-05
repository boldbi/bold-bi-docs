---
layout: post
title: Connect Live Web data in Dashboard Designer | Cloud Bold BI Docs
description: Learn how to create a data source by connecting the Live Web data through the REST API in Bold BI's Cloud Dashboard Designer and prepare your dashboards online.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Web data source
The Bold BI dashboard designer supports connecting to nearly all web services that have a REST API interface.
A live connection in Bold BI is more powerful than an extract connection because it does not store data in the data process. However, it is different from Direct Query since it fetches the data from your server rather than connecting directly to it.

## What is Live Connection?
A live connection feature is available for WEB API data sources. Live web API connections do not store data in the data process. The fetched data will be cleared from the data process once all widgets have been visualized in the dashboard.

### Advantages
1. Dashboard can automatically update with live data.
2. Data will no longer be stored on the data process, making it more secure.
3. There is no need to configure refresh settings for data refresh.
4. [Shared](/working-with-data-sources/shared-table/) and [Joined](/working-with-data-sources/data-modeling/joining-table/) more than one live data sources.
5. The [Dashboard parameter](/working-with-data-sources/dashboard-parameter/) is supported in Live connection, allowing for a global placeholder value such as a number, string, or date.
6. Pick up a selected column from the Web API schema.

### Limitations
Some of the limitations associated with the Bold BI Web API LIVE Connection are as follows:
1. For optimum performance in live mode Web API, records are restricted to 5000 by default. Use the Extract mode for more than 5000 records. Change the limit from the Max Rows option to fetch more records.
2. It is a bit slower than the extract mode connection because the data will be fetched from your server for every action.

### Workflow of live connections in Bold BI
1. In the beginning, the Live Web API can fetch data from a connected server and transfer it to a connected data processing unit.
2. Widgets on the dashboard are displayed based on the fetched data.
3. The data will be cleared from the data processing unit once the dashboard data has been displayed.

## Choose web data source
To configure the web data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
   
2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Web** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/LiveWeb/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/LiveWeb/ChooseDS_Server.png)

### Create web data source
After clicking on the data source, the **NEW DATA SOURCE** configuration panel will open. Follow the below steps to create web data source:
1. Enter a name and description (optional) for the data source.
2. Enter a valid REST API endpoint in the URL text box.
3. Choose one of the **Method Type** from the combo box for the provided REST API. The options are *GET* and *POST*.
4. If required by the REST API, provide key value pairs in **Headers**. For details about headers, refer to [Query Parameters](/working-with-data-sources/data-connectors/web/#query-parameters).
5. Choose a time interval for **Refresh Settings** using the combo box to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
6. Choose a **Data Format** from the combo box based on the response of your provided REST API. The options are *JSON, CSV, and XML*.
7. Choose an **Authentication Type** supported by the data source. The options are *Basic http authentication* and *None*. Learn more about [Authentication Types](/working-with-data-sources/data-connectors/web/#authentication-types).
8. Choose a **Pagination Type** supported by the data source from the combo box.

   ![Data source preview](/static/assets/working-with-datasource/data-connectors/images/LiveWeb/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option. 

### Preview and Data Import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Table(s) dialog opens. The schema represents the key data fields retrieved from the Web Rest API request. This dialog displays a list of schemas in treeview and their corresponding values in the grid for preview. Select the required schema(s) from the treeview to use in the designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.

   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/LiveWeb/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/LiveWeb/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Pagination Types

Options are [*None*](#none), [*Offset*](#offset), [*Next Page*](#next-page), [*Next Token*](#next-token), and [*Next URL*](#next-url).

> **Note:**  According to the pagination type, the response data must align with the provided JSON format.

### None

It can be used when the REST API does not need to be paginated. This will return only the first set of records.

### Offset

The number of records that should be skipped before beginning pagination.

   ![Offset Pagination](/static/assets/working-with-datasource/data-connectors/images/LiveWeb/Offset_Pagination.png)

For example, connect the `OData` REST API in the web data source with the pagination parameters as shown below:

   <table>
   <tr>
      <th scope="col">Field Name</th>
      <th scope="col">Values</th>
      <th scope="col">Description</th>
   </tr>
   <tr>
      <td>URL</td>
      <td>https://services.odata.org/V4/Northwind/Northwind.svc/Order_Details</td>
      <td>Rest endpoint URL</td>
   </tr>
   <tr>
      <td>Method Type</td>
      <td>GET</td>
      <td>Request Type of the provided endpoint</td>
   </tr>
   <tr>
      <td>Data Format</td>
      <td>JSON</td>
      <td>Data format of the response for the provided Rest API</td>
   </tr>
   <tr>
      <td>Authentication Type</td>
      <td>None</td>
      <td>To connect the provided endpoint, provide proper authorization credentials</td>
   </tr>
   <tr>
      <td>Pagination Type</td>
      <td>Offset</td>
      <td>Number of records to be skipped before start paginating</td>
   </tr>
   <tr>
      <td>Max Rows</td>
      <td>7</td>
      <td>Number of records to be fetched</td>
   </tr>
   <tr>
      <td>Start field name</td>
      <td>$skip</td>
      <td>Indicates the name of the parameter to skip the records</td>
   </tr>
   <tr>
      <td>Start field value</td>
      <td>2</td>
      <td>Value for the parameter *Start field name*</td>
   </tr>
   <tr>
      <td>Count field name</td>
      <td>$top</td>
      <td>Indicates the name of the parameter to fetch the number of records from the index provided</td>
   </tr>
   <tr>
      <td>Count field value</td>
      <td>3</td>
      <td>Value for the parameter *Count field name*</td>
   </tr>
   <tr>
      <td>Total Records Path</td>
      <td>(leave as blank)</td>
      <td>To find the total records count from the obtained response. Use '.' to specify the nested key as like `data.records.totalRecords`. Refer Sample for Total Records. </td>
   </tr>
   <tr>
      <td>Data indicator path</td>
      <td>value</td>
      <td>Number of records fetched will be identified from the data. Refer to the sample for Data Indicator Path.</td>
   </tr>
   </table>

<b>Sample for total records</b>

   ![TotalRecords](/static/assets/working-with-datasource/data-connectors/images/LiveWeb/TotalRecords.png)

<b>Sample for data indicator path</b>

   ![Data Indicator Path](/static/assets/working-with-datasource/data-connectors/images/LiveWeb/DataIndicatorPath.png)

### Next Page

The number of pages that need to be fetched with the specific number of records per page.

   ![Next Page Pagination](/static/assets/working-with-datasource/data-connectors/images/LiveWeb/Next_Page_pagination.png)

For example, connect the `Smartsheet` REST API in the web data source with the pagination parameters as follows:

   <table>
   <tr>
      <th scope="col">Field Name</th>
      <th scope="col">Values</th>
      <th scope="col">Description</th>
   </tr>
   <tr>
      <td>URL</td>
      <td>https://api.smartsheet.com/2.0/workspaces</td>
      <td>Rest endpoint URL</td>
   </tr>
   <tr>
      <td>Method Type</td>
      <td>GET</td>
      <td>Request Type of the provided endpoint</td>
   </tr>
   <tr>
      <td>Header</td>
      <td>Authorization : Bearer {:access_token}</td>
      <td>Authorization Headers for the endpoint</td>
   </tr>
   <tr>
      <td>Data Format</td>
      <td>JSON</td>
      <td>Data format of the response for the provided Rest API</td>
   </tr>
   <tr>
      <td>Authentication Type</td>
      <td>None</td>
      <td>To connect the provided endpoint, provide proper authorization credentials</td>
   </tr>
   <tr>
      <td>Pagination Type</td>
      <td>Next Page</td>
      <td>Pagination pairs like page/per_page, page/pageSize, etc... will be supported under this category</td>
   </tr>
   <tr>
      <td>Max Iterations</td>
      <td>2</td>
      <td>Number of Iterations to paginate.</td>
   </tr>
   <tr>
      <td>Next page field name</td>
      <td>page</td>
      <td>Name of the parameter to fetch the specific page</td>
   </tr>
   <tr>
      <td>Next page field value</td>
      <td>1</td>
      <td>Value for the parameter *Next page field name*</td>
   </tr>
   <tr>
      <td>Page size field name</td>
      <td>pageSize</td>
      <td>Name of the parameter to denote the number of records per page.</td>
   </tr>
   <tr>
      <td>Page size field value</td>
      <td>2</td>
      <td>Value for the parameter *Page size field name*</td>
   </tr>
   <tr>
      <td>Total Pages</td>
      <td>data.records.totalPages</td>
      <td>Specify the path where the response has the information for `total number of pages`. Refer to the sample for Total Pages.</td>
   </tr>
   <tr>
      <td>Data indicator path</td>
      <td>records</td>
      <td>Number of records fetched will be identified from this path.</td>
   </tr>
   </table> 

<b>Sample for total pages</b>

   ![TotalRecords](/static/assets/working-with-datasource/data-connectors/images/LiveWeb/TotalPages.png)

<b>Sample for data indicator path</b>

   ![Data Indicator Path](/static/assets/working-with-datasource/data-connectors/images/LiveWeb/DataIndicatorPath.png)


### Next Token

Iterate the next set of records using a token.

   ![Next Token Pagination](/static/assets/working-with-datasource/data-connectors/images/LiveWeb/Next_Token_pagination.png)

For example, let's connect the `Google AdSense` REST API in the web data source with the pagination parameters as follows:

   <table>
   <tr>
      <th scope="col">Field Name</th>
      <th scope="col">Values</th>
      <th scope="col">Description</th>
   </tr>
   <tr>
      <td>URL</td>
      <td>https://www.googleapis.com/adsense/v1.4/accounts/{:accountId}/adclients?maxResults=2</td>
      <td>Rest endpoint URL</td>
   </tr>
   <tr>
      <td>Method Type</td>
      <td>GET</td>
      <td>Request Type of the provided endpoint</td>
   </tr>
   <tr>
      <td>Header</td>
      <td>Authorization : Bearer {:access_token}</td>
      <td>Authorization Headers for the endpoint</td>
   </tr>
   <tr>
      <td>Data Format</td>
      <td>JSON</td>
      <td>Data format of the response for the provided Rest API</td>
   </tr>
   <tr>
      <td>Authentication Type</td>
      <td>None</td>
      <td>To connect the provided endpoint, provide proper authorization credentials</td>
   </tr>
   <tr>
      <td>Pagination Type</td>
      <td>Next Token</td>
      <td>To get the next set of records, make use of token from the response</td>
   </tr>
   <tr>
      <td>Max Iterations</td>
      <td>2</td>
      <td>Number of Iterations to paginate</td>
   </tr>
   <tr>
      <td>Next token field name</td>
      <td>pageToken</td>
      <td>Name of the parameter used to carry the token in the request like http://sample.com/samples?pageToken=1234. To fetch nested key, refer to the sample response</td>
   </tr>
   <tr>
      <td>Data indicator path</td>
      <td>nextPageToken</td>
      <td>Specify the path of the token to fetch the next set of records</td>
   </tr>
   </table> 

<b>Sample response</b>

   ![Next Token](/static/assets/working-with-datasource/data-connectors/images/LiveWeb/NextToken.png)


### Next URL

Iterate the next set of records using url obtained from the response.

   ![Next URL Pagination](/static/assets/working-with-datasource/data-connectors/images/LiveWeb/Next_Url_pagination.png)

For example, let's connect the `GitHub` REST API in the web data source with the pagination parameters as follows:

   <table>
   <tr>
      <th scope="col">Field Name</th>
      <th scope="col">Values</th>
      <th scope="col">Description</th>
   </tr>
   <tr>
      <td>URL</td>
      <td>https://api.github.com/events?page=1&per_page=2</td>
      <td>Rest endpoint URL</td>
   </tr>
   <tr>
      <td>Method Type</td>
      <td>GET</td>
      <td>Request Type of the provided endpoint</td>
   </tr>
   <tr>
      <td>Header</td>
      <td>User-Agent : Syncfusion Dashboards</td>
      <td>Authorization Headers for the endpoint</td>
   </tr>
   <tr>
      <td>Data Format</td>
      <td>JSON</td>
      <td>Data format of the response for the provided Rest API</td>
   </tr>
   <tr>
      <td>Authentication Type</td>
      <td>None</td>
      <td>To connect the provided endpoint, provide proper authorization credentials</td>
   </tr>
   <tr>
      <td>Pagination Type</td>
      <td>Next URL</td>
      <td>To get the next set of records, make use of URL from the response</td>
   </tr>
   <tr>
      <td>Max Iterations</td>
      <td>2</td>
      <td>Number of Iterations to paginate</td>
   </tr>
   <tr>
      <td>Next URL path</td>
      <td>link</td>
      <td>Specify the path to get the next url.</td>
   </tr>
   <tr>
      <td>Look in Header</td>
      <td>Enable checkbox</td>
      <td>Whether to find the provided URL path in response header or not.</td>
   </tr>
   </table> 

> **NOTE:**   To implement pagination, you must provide either the `Total Records Path` or the `Data Indicator Path`. If both values are provided, the `Total Records Path` will take precedence. 

## Query Parameters

1. If the Rest API requires it, pass the necessary values as key-value pairs in the **Headers**.
2. For the **POST** method, if necessary, pass the required values as key-value pairs in the **Parameters**.
3. Use either *Parameter(s)* or *Raw* for a POST request.

## Authentication Types

1. If your data source supports authentication directly through the REST API URL, choose **None** under **Authentication Type**.
2. If your data source supports API Key/API Token authentication, pass these values under **Header(s)** by clicking **+Add**. Choose **None** under **Authentication Type**.
3. If your data source has Basic HTTP authentication, choose **Basic http Authentication** under **Authentication Type** and input the username and password.

### Connecting Web API data source with API Key Authentication
An API key is one of the most commonly used authentication types for REST APIs. The API key will be assigned to a user by the provider at the time of user creation or when enabling API key authentication to access data via the REST API.

API keys can be used in the following places, which are listed below.
* Authorization/Custom Header (Basic or Bearer).
* Query String.
* Body Data.

### Adding Authorization/Custom header for API Key
To connect a REST API for adding an API Key in the header, you can follow the steps below to connect the API in Bold BI. 

* Add header in Web API data source as below.

    ![Header Bearer View](/static/assets/working-with-datasource/data-connectors/images/LiveWeb/Header_Bearer_View.png)

* You need to select the Authentication Type as None.

    ![Authentication View](/static/assets/working-with-datasource/data-connectors/images/LiveWeb/Authentication_View.png)
	
* The header value can be either basic or bearer, depending on the application to which you are connecting.
* Most API Key authentication methods connect using the Authorization header. You can also change the name of the header key as needed.

    ![Header Basic View](/static/assets/working-with-datasource/data-connectors/images/LiveWeb/Header_Basic_View.png)
 
### Adding API Key in Query String Parameter
A query string parameter will be added to the URL, allowing you to access the REST API without the need to add any headers or bodies.
    ![Query String parameter View](/static/assets/working-with-datasource/data-connectors/images/LiveWeb/Query_String_parameter_View.png)
	
* No additional steps may be required for connecting to the API using Query String type of API Key authentication.
* You need to select the Authentication Type as None, since the API Key is added in the Query String parameter.

    ![Authentication Type View](/static/assets/working-with-datasource/data-connectors/images/LiveWeb/Authentication_Type_View.png)
	
### Adding API Key in the Body Data for Post method REST APIs
Body data is typically added for POST method API calls. If the application is designed to send the API Key over the body data of the REST API, you can follow the steps below.
    
* Please select the POST method in the Web API data source to include Body Data and then add the API Key as shown below, using the appropriate property names.

    ![Post method View](/static/assets/working-with-datasource/data-connectors/images/LiveWeb/Post_Method_View.png)

* You need to select the Authentication Type as None since its API Key is added as Body Data.

    ![Post Authentication Type View](/static/assets/working-with-datasource/data-connectors/images/LiveWeb/Post_Authentication_Type_View.png)


## Connecting Bold BI to WEB Live Data Source via REST API

### Prerequisites 

Type while creating the data source needs to be Web.

[Rest API - v4.0](/server-api-reference/v4.0/api-reference/)

### Modes

Only the **Live mode** WEB data source can be created through the REST API.

### Parameters for creating Data Source

<table>
   <tr>
   <th>Parameters</th>
   <th>Details</th>
   </tr>
   <tr>
   <td>Name</br></br>
   <b>required</b> </td>
  <td><code>string</code></br></br>
   Name of the data source</td>
   </tr>
   <tr>
   <td>Type</br></br>
   <b>required</b> </td>
  <td><code>string</code></br></br>
   This is used to specify the Type of the data source.</br></br></td>
   </tr>
   <tr>
   <td>URL</br></br>
   <b>required</b>  </td>
  <td><code>string</code></br></br>
   Rest endpoint URL</td>
   </tr>
   <tr>
   <td>MethodType</br></br>
   <b>optional</b>  </td>
  <td><code>string</code></br></br>
   Request Type of the provided endpoint.</td>
   </tr>
   <tr>
   <td>DataFormat</br></br>
   <b>optional </b> </td>
  <td><code>string</code></br></br>
   Data format of the response for the provided Rest API</td>
   </tr>
   <tr>
   <td>Headers</br></br>
   <b>optional</b> </td>
  <td><code>array</code></br></br>
  Authorization Headers for the endpoint ,default as []</td>
   </tr>
   <tr>
   <td>Parameters</br></br>
   <b>optional</b> </td>
  <td><code>array</code></br></br>
  Parameters for the endpoint and support for Post MethodType</td>
   </tr>
   <tr>
   <td>RawData</br></br>
   <b>optional</b> </td>
  <td><code>json</code></br></br>
  Raw body of the endpoint and support for Post MethodType</td>
   </tr>
   <tr>
   <td>Authentication Type</br></br>
   <b>optional</b> </td>
  <td><code>string</code></br></br>
   To connect to the provided endpoint, use either None or BasicHttpAuthentication for proper authentication</td>
   </tr>
   <tr>
   <td>Username</br></br>
   <b>optional</b> </td>
  <td><code>string</code></br></br>
   To connect to the provided endpoint, provide the username for BasicHttpAuthentication</td>
   </tr>
   <tr>
   <td>Password</br></br>
   <b>optional</b> </td>
  <td><code>string</code></br></br>
   To connect to the provided endpoint, provide the password for BasicHttpAuthentication</td>
   </tr>
   <tr>
   <td>RefreshInterval</br></br>
   <b>optional </b> </td>
  <td><code>string</code></br></br>
   No schedule for live data source. By default, it is set to Never</td>
   </tr>
   <tr>
   <td>Provider</br></br>
   <b>optional</b> </td>
  <td><code>string</code></br></br>
   Type of the data source</td>
   </tr>
   <tr>
   <td>ProviderType</br></br>
   <b>optional</b> </td>
  <td><code>string</code></br></br>
   Enter a DataProvider as Web</td>
   </tr>
   <tr>
   <td>Rows</br></br>
   <b>optional</b> </td>
  <td><code>string</code></br></br>
  This is used to specify the data count.</td>
   </tr>
   <tr>

   <td>Mode</br></br>
   <b>optional</b> </td>
  <td><code>string</code></br></br>
   Mode of the data source is Live</td>
   </tr>
   <tr>
   <td>DataProvider</br></br>
   <b>optional</b> </td>
  <td><code>string</code></br></br>
   Enter a DataProvider as WEB</td>
   </tr>
   </table>

 #### For creating connection:

 ``` json
 {
  "Name": "string",
  "Type": "Web",
  "Connection": {
    "Url": "string",
    "MethodType": "string",
    "DataFormat": "string",
    "Headers":[],
    "AuthenticationType": "string",
    "RefreshInterval": "string",
    "Provider": "WEB",
    "ProviderType": "Web",
    "Rows": "string",
    "Mode": "Live",
    "DataProvider": "WEB"
  }
}
 ```
 #### For creating a connection with Headers, Parameters, Raw Body, and Authentication:

 ``` json
 {
  "Name": "string",
  "Type": "Web",
  "Connection": {
    "Url": "string",
    "MethodType": "string",
    "DataFormat": "string",
    "Headers": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "Parameters": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "RawData": "",
    "AuthenticationType": "string",
    "Username": "string",
    "Password": "string",
    "RefreshInterval": "Never",
    "Provider": "WEB",
    "ProviderType": "Web",
    "Rows": "string",
    "Mode": "Live",
    "DataProvider": "WEB"
  }
}
 ```
 
## Dashboard Parameter

Utilize dashboard parameters in conjunction with a Live Web API connection.
Connecting to the Web API live connection, along with using dashboard parameters, will assist in achieving various use cases. Below are some examples of using dashboard parameters with Live web connections.

Dashboard parameters can be used in the Web API connection's URL, Headers, and Parameters.

**Example 1:** Filtering the dashboards based on Literal Mode.

Follow these steps to use the feature.

1.	Connect the REST API to the live web data source.
`https://services.odata.org/V4/OData/OData.svc/Products`
   ![Data preview](/static/assets/working-with-datasource/data-connectors/images/LiveWeb/web1.png)
2. Once you have connected the data source, create the StartDate and EndDate under the [Literal Mode](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameters/) dashboard parameters.
   ![Data preview](/static/assets/working-with-datasource/data-connectors/images/LiveWeb/web2.png)
3. Save the data source first. Then, click on the Edit Data Source button to reconnect the dashboard parameter URL provided, and save the changes.
   Example:`http://services.odata.org/V4/OData/OData.svc/Products?%24filter=ReleaseDate%20gt%20@{{:LiteralDS.StartDate}}T00:00:00Z%20and%20ReleaseDate%20lt%20@{{:LiteralDS.EndDate}}T00:00:00Z`

   ![Data preview](/static/assets/working-with-datasource/data-connectors/images/LiveWeb/web3.png)
4. Create the dashboard using the data source and then publish it.

    >  **NOTE:** A dashboard is rendered according to the date range configured in the dashboard parameter when the data source is created.

   ![Data preview](/static/assets/working-with-datasource/data-connectors/images/LiveWeb/web5.png)
5. Click on the dashboard parameter icon and adjust the date range to display the dashboard with the specified values.
   ![Data preview](/static/assets/working-with-datasource/data-connectors/images/LiveWeb/web4.png)
6. Real-time data will be displayed on the dashboard according to the chosen date range.
    ![Data preview](/static/assets/working-with-datasource/data-connectors/images/LiveWeb/web6.png)

**Example 2:** Filtering the dashboards based on Iterative Mode.

   >  **Note:** The Live Web data sources do not support multiple iterative modes for optimal performance and minimal time delay.

Follow these steps to use the feature.

1.	Connect the REST API to the live web data source.
`https://gorest.co.in/public/v2/users`
   ![Data preview](/static/assets/working-with-datasource/data-connectors/images/LiveWeb/it1.png)

2. Once you have connected the data source, create the User ID under the Iterative Mode of the dashboard parameters. Refer to the document for instructions on how to add the [Iterative Mode](/working-with-data-sources/dashboard-parameter-iterative-mode/) dashboard parameter.
   ![Data preview](/static/assets/working-with-datasource/data-connectors/images/LiveWeb/it2.png)
3. Save the data source. Then, click edit data source to reconnect the dashboard parameter URL as provided and save the changes.
   Example:`https://gorest.co.in/public/v2/users/@{{:IterativeDS.User ID}}`
   ![Data preview](/static/assets/working-with-datasource/data-connectors/images/LiveWeb/it3.png)

4. Create the dashboard with the data source and publish it.

    >  **NOTE:** A dashboard is rendered according to the range of User IDs configured in the dashboard parameter when the data source is created.

   ![Data preview](/static/assets/working-with-datasource/data-connectors/images/LiveWeb/it4.png)

5. Click on the dashboard parameter icon and select the User IDs to render the dashboard with the specified values.
   ![Data preview](/static/assets/working-with-datasource/data-connectors/images/LiveWeb/it5.png)
6. Real-time data will be displayed on the dashboard based on the selected User ID's range.
    ![Data preview](/static/assets/working-with-datasource/data-connectors/images/LiveWeb/it6.png)

### Limitation Information
<table width="600">
<tr>
<td>
Live mode max rows limitation
</td>
<td>
For optimal performance in live mode Web API, records are restricted to 5000 by default. To fetch more records in live mode or extract mode for more than 5000 records, change the limit from the Max Rows option.
</td>
</tr>
<tr>
<td>
Refresh Settings limitation
</td>
<td>
In live mode Web API, it is impossible to refresh tables because the data is not stored when connecting to the data source.
</td>
</tr>
</table>

## Configuring Date Parameters

You can configure the URL of the API request with templates containing date queries. The queries will be updated with the respective date values.

**Syntax**`{{:today()}}:`It is used for single calendar related method.

Or

**Syntax**`{{:today().adddays(1)}}:`It is used when more than one method is added.

For example,a dummy API is used to explain here

   ![Showing configuration of relative date parameter with web url](/static/assets/working-with-datasource/data-connectors/images/LiveWeb/RelativeDateParsing.png)

Now, this URL will be parsed, and templates will be matched. Therefore, the templates will be replaced with dates accordingly. This will help you fetch data between the start date and end date.

### Functions supported in date parameters

You can configure parameters as numeric values for the following functions: AddMinutes, AddHours, AddDays, AddWeeks, AddMonths, AddYears, AddQuarters, SetDayStart, and SetMonthStart.

All the Add methods should not have a parameter of 0. The SetDayStart function should have a numerical value between 0 and 6, and the SetMonthStart function should have a numerical value between 1 and 12.

String parameters are utilized in the following set of functions: start, end, format, and SetTimeZone. Both the start and end functions support four string parameters - week, month, quarter, and year. The format function is utilized to modify the format of date and time, with the parameter aligning with the date and time format supported in C#. Additionally, support for epoch time is available in the format function. The SetTimeZone function is utilized to alter the time zone of the date, with the parameter aligning with TimeZoneInfo IDs present in C#.

`Today` function does not hold any parameters.
Here for example concern we are using `today()`as `11/16/2018 12:17`

<table>
<tr>
<th scope="col">Function Name</th>
<th scope="col">Type(s) Used</th>
<th scope="col">Description</th>
<th scope="col">Example(s)</th>
<th scope="col">Result</th>
</tr>
<tr>
<td>Today</td>
<td>No Parameter</td>
<td>Sets date and time to current date and time.</td>
<td>{{:today()}}</td>
<td>11/16/2018 12:17</td>
</tr>
<tr>
<td>AddMinutes</td>
<td>Numerical</td>
<td>Updates the date and time by changing the number of minutes.</td>
<td>{{:today().addminutes(10)}}</td>
<td>11/16/2018 12:27</td>
</tr>
<tr>
<td>AddHours</td>
<td>Numerical</td>
<td>Updates the date and time by changing the number of hours.</td>
<td>{{:today().addminutes.addhours(2)}}</td>
<td>11/16/2018 14:29</td>
</tr>
<tr>
<td>AddDays</td>
<td>Numerical</td>
<td>Updates the date and time by changing the number of days.</td>
<td>{{:today().adddays(2)}}</td>
<td>11/18/2018 12:17</td>
</tr>
<tr>
<td>AddWeeks</td>
<td>Numerical</td>
<td>Updates the date time by adding a date with the numerical parameter considered as 7 days.</td>
<td>{{:today().addweeks(1)}}</td>
<td>11/23/2018 12:17</td>
</tr>
<tr>
<td>AddMonths</td>
<td>Numerical</td>
<td>Updates date and time by adding months with numerical parameter.</td>
<td>{{:today().addmonths(2)}}</td>
<td>1/16/2018 12:17</td>
</tr>
<tr>
<td>AddYears</td>
<td>Numerical</td>
<td>Updates date and time by adding years with the numerical parameter.</td>
<td>{{:today().addyears(3)}}</td>
<td>11/16/2020 12:17</td>
</tr>
<tr>
<td>AddQuarters</td>
<td>Numerical</td>
<td>Updates date and time by adding months with a numerical parameter, where parameter value 1 means 3 months.</td>
<td>{{:today().adddays(10).addquarters(2)}}</td>
<td>5/26/2019 12:17</td>
</tr>
<tr>
<td>Start</td>
<td>String</td>
<td>Sets the date and time values to the start of the given string parameter.</td>
<td>{{:today.addweeks(2).start(week)}}</td>
<td>11/25/2018 00:00</td>
</tr>
<tr>
<td>End</td>
<td>String </td>
<td>Sets the date and time value to the end of the given string parameter.</td>
<td>{{:today().addmonths(4).end(year{{}})}}</td>
<td>12/31/2019 00:00</td>
</tr>
<tr>
<td>Format</td>
<td>String</td>
<td>Formats the date and time to the correct date format entered as string parameter.</td>
<td>{{:today().start(week).format(MM/dd/yyyy)}}</td>
<td>11/11/2018</td>
</tr>
<tr>
<td>SetTimeZone</td>
<td>String</td>
<td>Changes the time zone to the time zone entered as string parameter.</td>
<td>{{:today().settimezone(New Zealand Time Zone)}}</td>
<td>11/16/2018 19:47</td>
</tr>
<tr>
<td>SetDayStart</td>
<td>Numerical</td>
<td>Updates the date to the day of the week based on the entered numerical parameter.</td>
<td>{{:today().Setdaystart(1)}}</td>
<td>11/12/2018 12:17</td>
</tr>
<tr>
<td>SetMonthStart</td>
<td>Numerical</td>
<td>Updates the date to change the month based on the entered numerical parameter</td>
<td>{{:today().SetMonthStart(10)}}</td> 
<td>10/16/2018 12:17</td>
</tr>
</table>

> **NOTE:** Each template should start with the today function as a mandatory requirement. 
> If the format function is used in a template, it should be the last function call.


## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)
