---
layout: post
title: Connect to Web data source | Cloud BI Dashboard Designer
description: Learn how to create data source by connecting to the Web data source through REST API in Cloud BI Dashboard Designer.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Web data source
Bold BI dashboard designer supports connecting almost all web services that has a REST API interface.

## Choose web data source
To configure the web data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.
   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
   
2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Web** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Web/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Web/ChooseDS_Server.png)

## Create web data source
After clicking the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create web data source:
1. Enter a name and description (optional) for the data source.
2. Enter a valid REST API endpoint in the URL text box.
3. Choose one of the **Method Type** from the combo box for the provided REST API. Options are *GET* and *POST*.
4. If required by the REST API, provide key value pairs in **Headers**. To get details about headers, refer to [Query Parameters](/working-with-data-source/data-connectors/web/#query-parameters).
5. Choose a time interval for **Refresh Settings** using the combo box to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
6. Choose a **Data Format** from the combo box based on the response of your provided REST API. Options are *JSON, CSV, and XML*.
7. Choose an **Authentication Type** supported by the data source. Options are *Basic http authentication* and *None*. Learn more about [Authentication Types](/working-with-data-source/data-connectors/web/#authentication-types).
8. Choose a **Pagination Type** supported by the data source from the combo box. 
      
	  ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/Web/DataSourcesView.png)
	  
Options are [*None*](/working-with-data-source/data-connectors/web/#none), [*Offset*](/working-with-data-source/data-connectors/web/#offset), [*Next Page*](/working-with-data-source/data-connectors/web/#next-page), [*Next Token*](/working-with-data-source/data-connectors/web/#next-token), and [*Next URL*](/working-with-data-source/data-connectors/web/#next-url).

You can also edit the connection information set here using the [Edit Connection](/working-with-data-source/editing-a-data-connection/) option. 

### Pagination types

### None

It can be used when REST API does not need to be paginated. This will return first set of records alone.

### Offset

Number of records to be skipped before start paginating.

For example, let's connect `OData` REST API in web data source with pagination parameters as follows:

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

##### Sample for total records 

   ![TotalRecords](/static/assets/working-with-datasource/data-connectors/images/Web/TotalRecords.png)

##### Sample for data indicator path

   ![Data Indicator Path](/static/assets/working-with-datasource/data-connectors/images/Web/DataIndicatorPath.png)

### Next page

Number of Pages to be fetched with specific number of records per page.

For example, let's connect `Smartsheet` REST API in web data source with pagination parameters as follows:

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

##### Sample for total pages 

   ![TotalRecords](/static/assets/working-with-datasource/data-connectors/images/Web/TotalPages.png)

##### Sample for data indicator path

   ![Data Indicator Path](/static/assets/working-with-datasource/data-connectors/images/Web/DataIndicatorPath.png)


### Next token

Iterate next set of records using token.

For example, let's connect `Google AdSense` REST API in web data source with pagination parameters as follows:

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

##### Sample response

   ![Next Token](/static/assets/working-with-datasource/data-connectors/images/Web/NextToken.png)


### Next URL

Iterate next set of records using url obtained from response.

For example, let's connect `GitHub` REST API in web data source with pagination parameters as follows:

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

> **NOTE:**   To do pagination, you must provide any one of the field values, either `Total Records Path` or `Data Indicator Path`. If both values are provided, `Total Records Path` will be considered. 

#### Additional information
<table width="600">
<tr>
<td>
Refresh Settings
</td>
<td>
Period of time before next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date. If you do not want to sync your new data, choose ‘Never’.
</td>
</tr>
</table>

#### Query parameters

1. If required by the Rest API, pass required values as key-value pairs in **Headers**.
2. For **POST** method type, if required, pass required values as key-value pairs in **Parameter(s)**.
3. Use either *Parameter(s)* or *Raw* for POST request.

#### Authentication types

1. If your data source supports authentication directly through REST API URL, choose **None** under **Authentication Type**.
2. If your data source supports API Key/API Token authentication, pass these values under **Header(s)** by clicking **+Add**. Choose **None** under **Authentication Type**.
3. If your data source has Basic HTTP authentication, choose **Basic http Authentication** under **Authentication Type** and input the username and password.

#### Connecting Web API data source with API Key Authentication
API Key is one of the most commonly used authentication types for REST API. API Key will be assigned to a user by the provider at the time of user creation or when enabling the API Key authentication to access the data via REST API.

API Key can be used in following places which have listed below.
* Authorization/Custom Header (Basic or Bearer).
* Query String.
* Body Data.

##### Adding Authorization/Custom header for API Key
To connect REST API for adding API Key in the header, you can follow below steps to connect the API in Bold BI. 

* Add header in Web API data source as below.
    ![Header Bearer View](/static/assets/working-with-datasource/data-connectors/images/Web/Header_Bearer_View.png)

* You need to select the Authentication Type as None.
    ![Authentication View](/static/assets/working-with-datasource/data-connectors/images/Web/Authentication_View.png)
	
* Header value can be either basic or bearer based on the application that you are connecting.
* Most of the API Key authentication connect using Authorization header. You can also change the name of the header key as per your need.
    ![Header Basic View](/static/assets/working-with-datasource/data-connectors/images/Web/Header_Basic_View.png)
 
##### Adding API Key in Query String Parameter
Query String parameter will be added within the URL, so you can access the REST API without adding any header or body.
    ![Query String parameter View](/static/assets/working-with-datasource/data-connectors/images/Web/Query_String_parameter_View.png)
	
* No additional steps may require for connecting API using Query String type of API Key authentication. 
* You need to select the Authentication Type as None since its API Key added in the Query String parameter.
    ![Authentication Type View](/static/assets/working-with-datasource/data-connectors/images/Web/Authentication_Type_View.png)
	
##### Adding API Key in the Body Data for Post method REST APIs
Body Data usually be added for Post method API calls. If the application designed to send the API Key over the Body Data of REST API, you can follow the below steps.
    
* Choose POST method in Web API data source to add Body Data and add the API Key as below with relevant property names.
    ![Post method View](/static/assets/working-with-datasource/data-connectors/images/Web/Post_Method_View.png)

* You need to select the Authentication Type as None since its API Key added as Body Data.
    ![Post Authentication Type View](/static/assets/working-with-datasource/data-connectors/images/Web/Post_Authentication_Type_View.png)

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of data retrieved from Web Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Configuring Date Parameters

You can configure the URL of the API request with templates containing date queries. The queries will be updated with respective date values.

**Syntax**`{{:today()}}:`It is used for single calendar related method.

Or

**Syntax**`{{:today().adddays(1)}}:`It is used when more than one method is added.

For example,a dummy API is used to explain here

![Showing configuration of relative date parameter with web url](/static/assets/working-with-datasource/data-connectors/images/Web/RelativeDateParsing.png)

Now, this URL will be parsed, and templates will be matched, hence the templates will be replaced with dates accordingly. This helps you to fetch data between the start date and end date.

### Functions supported in date parameters

You can configure parameters as numeric values for the following functions: AddMinutes, Addhours, AddDays, AddWeeks, AddMonths, AddYears, AddQuarters, SetDayStart, and SetMonthStart.

All the Add methods should not have parameter as 0, the SetDayStart should have a numerical value between 0 and 6, and the SetMonthStart should have a numerical value between 1 and 12.

String parameters are used in the next set of functions which are start, end, format, and SetTimeZone. Both start and end functions support four string parameters which are week, month, quarter, and year. The format function is used to change the format of date and time, and the parameter is matched with the date and time format supported in C#. A support for epoch time is also made available in the format function. The SetTimeZone is used to change the time zone of the date and the parameter is matched with TimeZoneInfo IDs present in C#.

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

> **NOTE:**  Each template should mandatorily start with today function. 
> For a template, if the format function is used, it should be the last function call.

## Related links
[Data Transformation](/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)
