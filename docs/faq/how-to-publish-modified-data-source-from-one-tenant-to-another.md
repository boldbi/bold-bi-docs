---
layout: post
title: How to publish modified data source between tenants |Bold BI Docs
description: This section describes how to publish the modified data sources from one tenant in to different tenant in your on-premise application using Bold BI software.
platform: bold-bi
documentation: ug
---

# How to publish modified data sources from one tenant to another

To modify the connection string of the corresponding data source of a dashboard dynamically in the destination tenant using [Custom Attribute](https://help.boldbi.com/embedded-bi/working-with-data-source/configuring-custom-attribute/#site-level-attribute) support, create and save the required data source connection string details as custom attribute in both source and destination tenants with the same attribute key and use it in the dynamic connection string value of a corresponding data source in a dashboard of a source tenant.

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

Follow these steps to publish the modified data sources from one tenant to another

1. First,you need to create a custom attribute with the required connection string in the source tenant.

   ![Custom Attribute of Source Tenant](/static/assets/embedded/faq/images/custom-attribute-of-source-tenant.png)

2. Edit the dashboard's corresponding data source, enable the Dynamic Connection String option, and click on the Configure button. 
  
   ![Enable Dynamic Connection String](/static/assets/embedded/faq/images/enable-dynamic-connectionstring.png)

3. In that pop-up window, choose the Custom Attribute option, enter the created custom attribute key (Name) in the text box, select the Configuration Mode as Both if needed, and save the configuration. Finally, save that data source. 

   >**Note:** Refer to this [section](https://help.boldbi.com/embedded-bi/iframe-based/dynamic-connection-string/#how-to-configure-the-api-details-for-a-data-source) to learn more details about the Configuration Mode of Dynamic Connection String.

   ![Configure Dynamic Connection String](/static/assets/embedded/faq/images/configure-dynamic-connectionstring.png)

   Now, the dashboard will be rendered in the source tenant as shown in the following image.

   ![Dashboard in Source Tenant](/static/assets/embedded/faq/images/dashboard-in-source-tenant.png) 

4. Then create the Custom Attribute with the required connection string details in the destination tenant with the same attribute key (Name) used on the source tenant as shown in the following image. 

   ![Custom Attribute of Target Tenant](/static/assets/embedded/faq/images/custom-attribute-of-target-tenant.png) 

5. Now, publish the dashboard in the source tenant configured with the modified data source to the destination tenant using the Publish dashboard in the [internal site](https://help.boldbi.com/embedded-bi/managing-resources/manage-dashboards/publish-dashboards/#internal-site) support. And we can ensure it by checking the status of the published dashboard by clicking on the `Publish` icon in left sidebar.
  
   ![How to publish dashboard in Target Tenant](/static/assets/embedded/faq/images/publish-dashboard-in-target-tenant.png)

   To `Synchronize` published dashboard to reflect dashboard changes in other sites, click `Synchronize` option then select `Yes` on the pop-window.

   ![Synchronize Option](/static/assets/embedded/faq/images/synchronize-option.png)

   ![Synchronize Pop-up Window](/static/assets/embedded/faq/images/synchronize-pop-up.png)

   You will receive the following highlighted notification

   ![Synchronization Notification](/static/assets/embedded/faq/images/synchronized-notification.png)
 
6. Refresh the destination tenant and open the dashboard. Now, the dashboard will be rendered with the data of the connection string, which is added to the custom attribute of the tenant.

   ![Dashboard in Target Tenant](/static/assets/embedded/faq/images/dashboard-in-target-tenant.png)

>**NOTE:** The published dashboard will work properly only if the source site's data source schema matches the target site's schema.