---
layout: post
title: MongoDB – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect MongoDB database with Bold BI Cloud and create data source for dashboard configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to MongoDB data source
The Bold BI dashboard designer supports connecting to MongoDB database through MongoDB client. 

## Choose MongoDB data source
To configure the MongoDB data source, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **MongoDB** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/mongodb/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/mongodb/ChooseDS_server.png)

## Create MongoDB data source
Once you click the data source, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create MongoDB data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid MongoDB server/host name in the **Server Name** text box.
3. Enter its corresponding port in the **Port** text box.
4. Choose **Enable SSL**, if the given MongoDB server is configured with SSL Encryption.

   > **NOTE:**  Enable **Allow Self-Signed Certificates** if the MongoDB server configured to accept self signed certificates.

5. Choose **None** or **SCRAM** authentication in the **Authentication Mechanism** combo box.
6. If you choose SCRAM *Authentication Mechanism*, enter valid SCRAM credentials in the **Username** and **Password** text boxes.

7. Choose the **Extract Engine**.<br>
You can connect to the data source using one of the following extract methods:
- **Bold BI Extract**: Data will be extracted and managed directly within Bold BI.
- **Data Hub**: Data extraction is handled through the Data Hub. An equivalent pipeline is created, utilizing the Data Hub’s Extract, Transform, Load (ETL) capabilities to filter, optimize, or transform the data, and to generate new tables.
- To view the equivalent pipeline created for data extraction, navigate to the Query Designer page and click on View Pipeline.

    ![Refresh Setting](/static/assets/working-with-datasource/images/View_Pipeline.png)

- When the data refresh is configured for data sources that uses the Data Hub Extract Engine, the refresh will be managed within the Data Hub.
8. Select the database you want to query in the listed databases associated with the given MongoDB Server in the **Database** combo box.

   > **NOTE:**  If your MongoDB server reside inside a firewall, contact Bold BI support to get the list of IP addresses to be white-listed.
   
9. Choose a time interval for **Refresh Settings** using the combo box, to trigger a request to MongoDB server periodically to keep the data in sync with our dashboard.  

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

### Preview and Data Import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the collection list that are retrieved from the MongoDB server.   This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/mongodb/MongoDBDS_Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/mongodb/MongoDBDS_QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/mongodb/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/mongodb/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Connecting Bold BI to Mongodb Data Source via REST API

### Prerequisites 

Type while creating the data source needs to be MongoDB.

[Rest API - v4.0](/server-api-reference/v4.0/api-reference/)

### Modes

Only the **Extract mode** MongoDB data source can be created through the REST API.

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
   <td>AuthenticationDatabase</br></br>
   <b>required</b>  </td>
  <td><code>string</code></br></br>
   This is used to specify Authentication Database</td>
   </tr>
   <tr>
   <td>AuthenticationType</br></br>
   <b>required</b>  </td>
  <td><code>string</code></br></br>
   This is used to specify Authentication mechanism, Provide None or SCRAM authentication in the Authentication Mechanism .</td>
   </tr>
   <tr>
   <td>Database</br></br>
   <b>required</b> </td>
  <td><code>string</code></br></br>
   Database which needs to be connected</td>
   </tr>
   <tr>
   <td>CollectionName</br></br>
   <b>required</b> </td>
  <td><code>Array</code></br></br>
   schema of the database</td>
   </tr>
   <tr>
   <td>Provider</br></br>
   <b>required</b> </td>
  <td><code>string</code></br></br>
   Type of the data source</td>
   </tr>
   <td>IsSelfSigned</br></br>
   <b>optional </b> </td>
  <td>`boolean`</br></br>
   Enable or disable SSH. By default, it is false.</td>
   </tr>
   <tr>
   <td>IsSslEnabled</br></br>
   <b>required </b> </td>
  <td>`boolean`</br></br>
   Enable SSL </td>
   </tr>
   <tr>
   <td>Password</br></br>
   <b>required</b> </td>
  <td><code>string</code></br></br>
   A valid Password for the connection </td>
   </tr>
   <tr>
   <td>Port</br></br>
   <b>required</b> </td>
  <td><code>string</code></br></br>
   Enter a valid Port number  </td>
   </tr>
   <tr>
   <td>RefreshInterval</br></br>
   <b>optional</b> </td>
  <td><code>string</code></br></br>
   By default, it is never  </td>
   </tr>
   <tr>
   <td>Username</br></br>
   <b>required</b> </td>
  <td><code>string</code></br></br>
   Enter a valid Username  </td>
   </tr>
   <tr>
   <td>ServerName</br></br>
   <b>required</b> </td>
  <td><code>string</code></br></br>
   Server name or Host name of the connection  </td>
   </tr>
   <tr>
   <td>IsSshConnection</br></br>
   <b>optional</b> </td>
  <td>`boolean`</br></br>
   Enable or disable SSH. By default, it is false.  </td>
   </tr>
   <tr>
   <td>IsSshConnection</br></br>
   <b>optional</b> </td>
   <td>`boolean`</br></br>
   Enable or disable SSH. By default, it is false.</td>
   </tr>
   <tr>
   <td>SshServerName</br></br>
   <b>optional</b> </td>
  <td><code>string</code></br></br>
   Enter a valid Ssh Server name. By default, it is empty.</td>
   </tr>
   <tr>
   <td>SshPort</br></br>
   <b>optional</b> </td>
   <td><code>string</code></br></br>
   Enter a valid Ssh Port number.</td>
   </tr>
   <tr>
   <td>SshUserName</br></br>
   <b>optional</b> </td>
  <td><code>string</code></br></br>
   Enter a valid Ssh Username. By default, it is empty.</td>
   </tr>
   <tr>
   <td>SshPassword</br></br>
   <b>optional</b> </td>
  <td><code>string</code></br></br>
   Enter a valid Ssh Password. By default, it is empty.</td>
   </tr>
   <tr>
   <td>SslCertificateData</br></br>
   <b>optional</b> </td>
  <td><code>object</code></br></br>
   By default, it is Null.</td>
   </tr>
   <tr>
   <td>SslCertificatePassword</br></br>
   <b>optional</b> </td>
  <td><code>string</code></br></br>
   Enter a valid SslCertificatePassword Password. By default, it is empty.</td>
   </tr>
   <tr>
   <td>DataProvider</br></br>
   <b>required</b> </td>
  <td><code>string</code></br></br>
   Enter a DataProvider as MongoDB.</td>
   </tr>
   </table>

   #### For creating connection:

``` json
{
  "Name": "string",
  "Type": "MongoDB",
  "Connection": {
    "authenticationDatabase": "string",
    "authenticationType": "scram",
    "database": "string",
    "collectionName": [
      "string",
      "string",
      "string"
    ],
    "provider": "MongoDB",
    "isSelfSigned": false,
    "isSslEnabled": true,
    "password": "string",
    "port": 27017,
    "refreshInterval": "string",
    "username": "string",
    "serverName": "string",
    "IsSshConnection": false,
    "SshServerName": "",
    "SshPort": "string",
    "SshUsername": "",
    "SshPassword": "",
    "sslCertificateData": null,
    "sslCertificatePassword": "",
    "dataprovider": "MongoDB"
  }
}

```
   #### For schedule data source with Hourly refresh:

To create a MongoDB data source through the REST API using an hourly refresh schedule.

``` json
{
  "Name": "string",
  "Type": "MongoDB",
  "Connection": {
    "authenticationDatabase": "string",
    "authenticationType": "scram",
    "database": "string",
    "collectionName": [
      "string",
      "string",
      "string"
    ],
    "provider": "MongoDB",
    "isSelfSigned": false,
    "isSslEnabled": true,
    "password": "string",
    "port": 27017,
    "refreshInterval": "string",
    "username": "string",
    "serverName": "string",
    "IsSshConnection": false,
    "SshServerName": "",
    "SshPort": "string",
    "SshUsername": "",
    "SshPassword": "",
    "sslCertificateData": null,
    "sslCertificatePassword": "",
    "dataprovider": "MongoDB"
  },
  "RefreshSettings": {
    "StartTime": "2024-06-06T06:08:00Z",
    "NeverEnd": true,
    "EndAfterOccurrence": 1,
    "ScheduleType": "Hourly",
    "HourlySchedule": {
    "ScheduleInterval": "00:05"
},
    "IsEnabled": true,
    "FailureNotificationToOwner": true
  }
}

```

#### For schedule data source with Daily refresh:

To create a MongoDB data source through the REST API using an Daily refresh schedule.

``` json

"RefreshSettings": {
    "StartTime": "2024-06-06T06:08:00Z",
    "NeverEnd": true,
    "EndAfterOccurrence": 1,
    "ScheduleType": "DailySchedule",
    "DailySchedule": {
      "RecurrenceType": "string",
      "EveryNdays": 0,
      "EveryWeekday": true
    },
    "IsEnabled": true,
    "FailureNotificationToOwner": true
  }

```
#### For schedule data source with Weekly refresh:

To create a MongoDB data source through the REST API using an Weekly refresh schedule.

``` json
{
  "Name": "string",
  "Type": "MongoDB",
  "Connection": {
    "authenticationDatabase": "string",
    "authenticationType": "scram",
    "database": "string",
    "collectionName": [
      "string",
      "string",
      "string"
    ],
    "provider": "MongoDB",
    "isSelfSigned": false,
    "isSslEnabled": true,
    "password": "string",
    "port": 27017,
    "refreshInterval": "string",
    "username": "string",
    "serverName": "string",
    "IsSshConnection": false,
    "SshServerName": "",
    "SshPort": "string",
    "SshUsername": "",
    "SshPassword": "",
    "sslCertificateData": null,
    "sslCertificatePassword": "",
    "dataprovider": "MongoDB"
  },
  "RefreshSettings": {
    "StartTime": "2024-09-21T09:40:00Z",
    "NeverEnd": true,
    "EndAfterOccurrence": 1,
    "ScheduleType": "Weekly",
    "WeeklySchedule": {
      "RecurrenceWeeks": 1,
      "RecurrenceDays": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ]
    },
    "IsEnabled": true,
    "FailureNotificationToOwner": true
  }
}

```

#### For schedule data source with Monthly refresh:

To create a MongoDB data source through the REST API using an Monthly refresh schedule.

``` json

"RefreshSettings": {
    "StartTime": "2024-06-06T06:08:00Z",
    "NeverEnd": true,
    "EndAfterOccurrence": 1,
    "ScheduleType": "MonthlySchedule",
    "MonthlySchedule": {
      "RecurrenceType": "string",
      "DayRecurrence": {
        "DayInterval": 0,
        "MonthInterval": 0
      },
      "CustomRecurrence": {
        "WeekOfMonth": "string",
        "DayOfWeek": "string",
        "MonthInterval": 0
      }
    },
    "IsEnabled": true,
    "FailureNotificationToOwner": true
  }
```

### Additional Information
<table width="600">
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
Pagination
</td>
<td>
Upon initial connection, MongoDB will extract a maximum of 10,000 records. By configuring the Refresh option, it will extract all tables and data for the selected database with each refresh call.
</td>
</tr>
</table>

**NOTE:** MongoDB provides a BI connector tool that allows you to connect MongoDB servers directly through an ODBC connector or MySQL connector, without the need for any intermediate database. Please refer to this KB article for more information. [How to connect MongoDB by direct query mode in Bold BI](https://www.boldbi.com/kb/faq/how-to-connect-mongodb-by-direct-query-mode-in-bold-bi).

## Related links
[Blog post](https://www.boldbi.com/blog/connect-mongodb-workloads-migrated-to-azure-cosmos-db)

[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[MongoDB Integration](https://www.boldbi.com/integrations/mongodb?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbimongodbintegration)

[How to connect MongoDB by direct query mode in Bold BI](https://www.boldbi.com/kb/faq/how-to-connect-mongodb-by-direct-query-mode-in-bold-bi)
