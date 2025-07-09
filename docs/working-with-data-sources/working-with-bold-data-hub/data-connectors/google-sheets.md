---
layout: post
title: Google sheets Bold Data Hub Connector – Bold BI Learning
description: Learn how to use the Google sheets Bold Data Hub connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your Sheets.
platform: bold-bi
documentation: ug

---

# Google Sheets

Google Sheets is a cloud-based spreadsheet application offered by Google as part of its Google Workspace suite.


### Service Account Credential

Service account credentials are better suited for server-to-server interactions. Therefore, we recommend using service account credentials.

#### Google Service Account Credentials

To get API credentials using a GCP service account, follow these steps:

1. Sign in to [https://console.cloud.google.com](https://console.cloud.google.com).
2. Create a service account if needed.
3. Enable "Google Sheets API" (refer to Google documentation for comprehensive instructions).
4. Generate credentials:
   - Go to IAM & Admin in the console's left panel, then choose Service Accounts.
   - Locate the service account you plan to use, and click the three-dot menu under the "Actions" column next to it.
   - Create a new JSON key by selecting "Manage Keys" > "ADD KEY" > "CREATE".
   - Download the ".json" file containing the necessary credentials for future use.



## Connection Properties

The `config` section in a YAML file includes the following properties:

```yaml
Connectorname: GoogleSheets
project_id: Project ID
client_email: Client Email
private_key: Private Key
spreadsheet_url_or_id: Spreadsheet URL or ID
Range_names: Ranges of the names
spreadsheet_identifier: `spreadsheet_identifier = "https://docs.google.com/spreadsheets/d/1VTtCiYgxjAwcIw7UM1_BSaxC3rzIpr0HwXZwd2OlPD4/edit?usp=sharing"`
```
### Example Configuration

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: Google Sheets
      connectorname: Google Sheets
      config:
        project_id: 
        client_email: 
        private_key: 
      properties:
        spreadsheet_url_or_id: 
        # range_names value should be range_names: "range_name1", "range_name2"
        range_names:
```
## Configure the Data Hub to connect Google Sheets

#### OAuth Authentication with Google Sheets

1. Double Click on the connector, which will prompt a Authentication Setup window.

  ![Google Sheets - Data Hub](/static/assets/working-with-etl/images/oauth_details.png#max-width=100%)

2. Fill the Client ID and Client Secret and click Ok.

  ![Google Sheets - Data Hub](/static/assets/working-with-etl/images/authentication.png#max-width=100%)

3. Click on Allow in the authorization window to accept the scopes requested by Bold DataHub.

4. Update the project ID, client ID and client secret in the template. Also, Update the resources on the `properties` property and Click Save and choose the desired destination to save the pipeline.

  ![Google Sheets - Data Hub](/static/assets/working-with-etl/images/sheets_auth_template.png#max-width=100%)
  
5. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI]

(https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/)

 ![Google Sheets - Data Hub](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)

#### Service Authentication with Google Sheets

  1. To start, Click the `Bold Data Hub` icon on the Navigation Pane.

  ![Google Sheets - Data Hub](/static/assets/working-with-etl/images/boldbi_panel.png#max-width=100%)

  2. Click `Add Project` and provide the name for the new project.
  
   ![Google Sheets - Data Hub](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)
  
  3. Select the newly created project and add the `Google Sheets` template.

  ![Google Sheets - Data Hub](/static/assets/working-with-etl/images/sheets_service_template.png#max-width=100%)
  
  4. Update the project ID, client email and private key in the template. Also, Update the resources on the `properties` property and save it to the BoldBI Data Store.

  ![Google Sheets - Data Hub](/static/assets/working-with-etl/images/sheets_yaml.png#max-width=100%)

>**Warning:**
    1. The `Encrypt_Credentials` property should be set to false when updating the new access token on the template. If you have modified other properties, such as 'select' or 'account id', the `Encrypt_Credentials` property must be set to true.  
    2. The default lifetime of the access token is 1 hour. Therefore, you need to convert it to a long-lived access token in order to use the same token for 60 days. Existing tables should be maintained even if the token has expired or is being used as an invalid token. 

### Schedule Data Hub Job

1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.

![Google Sheets - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)

![Google Sheets - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)

2. For on-demand refresh, click `Run Now` button.

![Google Sheets - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%).

3. The Schedule history can be checked using the history option as well as logs.

![Google Sheets - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)

4. Click on Logs to see if the run is completed and data source is created in Bold BI. 

![Google Sheets - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)


5. Click `Edit DataSource` Option to view the created tables.