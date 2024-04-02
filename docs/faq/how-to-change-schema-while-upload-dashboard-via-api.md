---
layout: post
title: How to Change Upload Dashboard Schema - Embedded BI |Docs
description: Guidelines for Changing the Schema During Dashboard Upload Using API Step-by-Step Instructions and Best Practices
platform: bold-bi
documentation: ug
---

# How to change the schema name while uploading the dashboard via API

Bold BI supports changing the schema name while uploading the dashboard via API using the connection object.

1. Refer to the [Upload Dashboard](https://help.boldbi.com/server-api-reference/v4.0/api-reference/#operation/Dashboards_UploadDashboard) file to upload a dashboard via API.

2. To change the schema in the data source while uploading the dashboard, set the new schema name in the Schema parameter.

3. Sample connection JSON is given below using PostgreSql data source,

> **NOTE:**  The connection string varies for different connectors, and it is available on the [connectors page.](/working-with-data-sources/data-connectors/).
```json
{
"Connection": {
"ServerName": "server name",
"Database": "database name",
"UserName": "username",
"Password": "password",
"Port": "port number",
"Schema": "schemaname",
"SslMode": "",
"TrustServerCertificate": "",
"CommandTimeout": "300"
},
"ReplaceDsId": ""
}
```




## Related links
[Prepare Dashboard for download](https://help.boldbi.com/server-api-reference/v4.0/api-reference/#operation/Dashboards_DownloadDashboard)

[Download Dashboard](https://help.boldbi.com/server-api-reference/v4.0/api-reference/#operation/Dashboard_DownloadDashboardFile)   

[Get Meta Info For Dashboard](https://help.boldbi.com/server-api-reference/v4.0/api-reference/#operation/Dashboards_GetMetaInfo)

[Upload Dashboard File](https://help.boldbi.com/server-api-reference/v4.0/api-reference/#operation/Dashboards_UploadDashboard)

[Connection Object](/working-with-data-sources/data-connectors/postgresql/#for-editing-connection)
