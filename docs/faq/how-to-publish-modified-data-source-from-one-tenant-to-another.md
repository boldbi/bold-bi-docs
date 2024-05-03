---
layout: post
title: How to publish modified data source between tenants |Bold BI Docs
description: This section describes how to publish the modified data sources from one tenant in to different tenant in your on-premise application using Bold BI software.
platform: bold-bi
documentation: ug

---

# How to publish modified data sources from one tenant to another

To dynamically modify the connection string of the corresponding data source of a dashboard in the destination tenant using [Custom Attribute](/working-with-data-sources/configuring-custom-attribute/#site-level-attribute) support, you need to create and save the necessary data source connection string details as a custom attribute in both the source and destination tenants. Make sure to use the same attribute key and then incorporate it into the dynamic connection string value of the corresponding data source in a dashboard of the source tenant.

Find the list of connections with the connection string details as follows,

* SQL
* Azure Synapse Analytics
* Amazon RDS SQL
   <table>
   <tr><td>               
                
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
   </table>

* Amazon Athena
   <table>
   <tr><td>               
                
            {
               "Database": "",
               "RegionEndpoint": "",               
               "OutputLocation": "",
               "AwsAccessKeyId": "",
               "AwsSecretAccessKey": ""
            }
   </td></tr>
   </table>

* Amazon Aurora PostgreSQL
* Amazon Redshift
* Google Cloud PostgreSQL
* Amazon RDS PostgreSQL
   <table>
   <tr><td>           
                
            {
               "ServerName": "",
               "Database": "",
               "UserName": "",
               "Password": "",
               "Port": "",
               "SslMode": "",
               "TrustServerCertificate": "",
               "AdvancedSettings": "",
               "CommandTimeout": ""
            }
   </td></tr>
   </table>

* ClickHouse
   <table>
   <tr><td>           
                
            {
               "ServerName": "",
               "Database": "",
               "Port": "",
               "UserName": "",
               "Password": "",
               "AdvancedSettings": "",
               "CommandTimeout": ""
            }
   </td></tr>
   </table>

* Elasticsearch
   <table>
   <tr><td>           
                
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
   </td></tr>
   </table>

* MySQL
* Amazon Aurora MySQL
* MariaDB
* Google Cloud MySQL
* Amazon RDS MySQL
* Amazon RDS MariaDB
* CDATA with MySQL endpoints
* SingleStore
   <table>
   <tr><td>               
                
            {
               "ServerName": "",
               "Database": "",
               "UserName": "",
               "Password": "",
               "Port": "",               
               "AdvancedSettings": "",
               "CommandTimeout": ""
            }
   </td></tr>
   </table>

* Oracle 
   <table>
   <tr><td>               
                
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
   </td></tr>
   </table>
   
* ODBC
   <table>
   <tr><td>           
                
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
   </td></tr>
   </table>

* Presto
   <table>
   <tr><td>           
                
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
   </td></tr>
   </table>

* InfluxDB
   <table>
   <tr><td>               
                
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
   </td></tr>
   </table>
   
* SparkSQL
   <table>
   <tr><td>           
                
            {
               "ServerName": "",
               "Database": "",
               "Port": "",
               "UserName": "",
               "Password": "",
               "AuthenticationType": "",
               "AdvancedSettings": ""
            }
   </td></tr>
   </table>

* SnowFlake
   <table>
   <tr><td>               
                
            {
               "ServerName": "",
               "Database": "",
               "UserName": "",
               "Password": "",
               "AdvancedSettings": "",
               "CommandTimeout": ""
            }
   </td></tr>
   </table>

 * Google BigQuery
   <table>
   <tr><td>               
                
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
   </td></tr>
   </table>

>**NOTE** :This is supported only for Service Account Authentication

Follow these steps to publish the modified data sources from one tenant to another

1. First,you need to create a custom attribute with the required connection string in the source tenant.

   ![Custom Attribute of Source Tenant](/static/assets/faq/images/custom-attribute-of-source-tenant.png)

2. Edit the corresponding data source of the dashboard, enable the Dynamic Connection String option, and then click on the Configure button. 
  
   ![Enable Dynamic Connection String](/static/assets/faq/images/enable-dynamic-connectionstring.png)

3. In the pop-up window, select the Custom Attribute option, enter the custom attribute key (Name) in the text box, choose the Configuration Mode as Both if necessary, and save the configuration. Lastly, save the data source. 

   >**Note:** Refer to this [section](/embedding-options/iframe-embedding/dynamic-connection-string/#how-to-configure-the-api-details-for-a-data-source) to learn more details about the Configuration Mode of Dynamic Connection String.

   ![Configure Dynamic Connection String](/static/assets/faq/images/configure-dynamic-connectionstring.png)

   Now, the dashboard will be rendered in the source tenant as shown in the following image.

   ![Dashboard in Source Tenant](/static/assets/faq/images/dashboard-in-source-tenant.png) 

4. Then, create the Custom Attribute in the destination tenant with the required connection string details using the same attribute key (Name) that was used in the source tenant, as shown in the following image.

   ![Custom Attribute of Target Tenant](/static/assets/faq/images/custom-attribute-of-target-tenant.png) 

5. Now, publish the dashboard in the source tenant that is configured with the modified data source to the destination tenant using the "Publish dashboard" feature in the [internal site](/managing-resources/manage-dashboards/publish-dashboards/#internal-site) support. We can ensure this by checking the status of the published dashboard by clicking on the `Publish` icon in the left sidebar.
  
   ![How to publish dashboard in Target Tenant](/static/assets/faq/images/publish-dashboard-in-target-tenant.png)

  To `synchronize` the published dashboard to reflect dashboard changes on other sites, click the `Synchronize` option, and then select `Yes` on the pop-up window.

   ![Synchronize Option](/static/assets/faq/images/synchronize-option.png)

   ![Synchronize Pop-up Window](/static/assets/faq/images/synchronize-pop-up.png)

   You will receive the highlighted notification.

   ![Synchronization Notification](/static/assets/faq/images/synchronized-notification.png)
 
6. Refresh the destination tenant and open the dashboard. The dashboard will now be rendered with the data from the connection string that has been added to the custom attribute of the tenant.

   ![Dashboard in Target Tenant](/static/assets/faq/images/dashboard-in-target-tenant.png)

>**NOTE:** The published dashboard will only work properly if the data source schema of the source site matches the schema of the target site.