---
layout: post
title: Onedrive Connector – Bold Data Hub Embedded Learning
description: Learn how to connect and use the OneDrive data connector in Bold BI Enterprise Edition. Follow simple steps to integrate your cloud files seamlessly and unlock powerful data visualizations from your OneDrive documents.
platform: bold-bi
documentation: ug
---
# OneDrive Source
OneDrive is a cloud-based file storage service from Microsoft that allows users to store, sync, and share files securely. In Bold Data Hub, the OneDrive connector enables you to access data stored in your OneDrive documents, for powerful and interactive dashboards.
### Grab OneDrive Account Credentials
To obtain API credentials, follow these steps:
1. Sign in to the Azure Portal.
2. Go to Azure Active Directory > App registrations.
3. Click New registration to create an app and Enter a name, choose account type, and add redirect URI (if needed).
4. Generate credentials:
   - Go to API permissions > Add a permission.
   - Choose Microsoft Graph > Delegated permissions like Files.Read, Files.Read.All, User.Read, Sites.Read.All, offline_access
   - Go to Certificates & secrets > New client secret > Add and copy the value.
   - In Overview, copy Client ID and Tenant ID.
   - Use Client ID, Tenant ID, and Client Secret in Bold BI to connect OneDrive.
## Connection Properties
The `config` section in a YAML file includes the following properties:
```yaml
connectorname: Onedrive
client_id: <>
client_secret: <>
tenant_id: <>
file_path: <>
```
### Example Configuration
```yaml
version: 1.0.1
destination: 
plugins:
  extractors:
    - name: Onedrive
      connectorname: Onedrive
      config:
        client_id: <>
        client_secret: <>
        tenant_id: <>
        file_path: <>
```
## Configure the Data Hub to connect OneDrive
#### OAuth Authentication with OneDrive
1. Double Click on the connector, which will prompt a Authentication Setup window.
  ![OneDrive Data Hub - BoldBI](/static/assets/working-with-etl/images/oauth_onedrive.png#max-width=100%)
2. Fill the Client ID and Client Secret and click Ok.
  ![OneDrive Data Hub - BoldBI](/static/assets/working-with-etl/images/onedrive_authentication.png#max-width=100%)
3. Click on Allow in the authorization window to accept the scopes requested by Bold DataHub.
4. Update the Tenant ID, File Path, client ID and client secret in the template. Also, Update the resources on the `properties` property and Click Save and choose the desired destination to save the pipeline.
  ![OneDrive Data Hub - BoldBI](/static/assets/working-with-etl/images/onedrive_auth_template.png#max-width=100%)
  
5. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI]
(https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/)
   ![OneDrive - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)
### Schedule Data Hub Job
1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.
![OneDrive - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)
![OneDrive - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)
2. For on-demand refresh, click `Run Now` button.
![OneDrive - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%).
3. The Schedule history can be checked using the history option as well as logs.
![OneDrive - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)
4. Click on Logs to see if the run is completed and data source is created in Bold BI. 
![OneDrive - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)
5. Click `Edit DataSource` Option to view the created tables.