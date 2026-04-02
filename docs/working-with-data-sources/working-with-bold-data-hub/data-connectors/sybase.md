---
layout: post
title: Sybase Connector – Bold Data Hub Embedded Learning
description: Learn how to connect and use the Sybase data connector in Bold BI Enterprise Edition. Follow simple steps to integrate your Sybase data seamlessly and unlock powerful dashboards and visualizations from your enterprise database.
platform: bold-bi
documentation: ug
---

# Sybase Source

The Sybase connector connects to a Sybase database and allows users to fetch data from tables or views. It supports authentication, handles nested or related data, and presents the results in a clean, structured format for easy use.

### Grab Sybase ODBC Connection Details

1. Configure ODBC DSN on your system:
    - Open ODBC Data Source Administrator.
    - Go to the System DSN tab and click Add.
    - Select the Sybase ODBC driver and configure it with:
            - Data Source Name (DSN)
            - Server Name/IP
            - Port
            - Database Name
2. Provide Credentials:
    - Enter your Username and Password for the Sybase database.
3. Connect in Bold BI:
    - In Bold BI, choose the ODBC connector.
    - Select the configured DSN, enter your credentials, and click Connect.

## Connection Properties

The `config` section in a YAML file includes the following properties:

```yaml
connectorname: Sybase
dsn: <>
username: <>
password: <>
```
### Example Configuration

```yaml
version: 1.0.1
destination: 
plugins:
  extractors:
    - name: Sybase
      connectorname: Sybase
      config:
        dsn: <>
        username: <>
        password: <>
      select:
        - tablename
```

## Configure the Data Hub to connect Sybase

  1. To start, Click the `Bold Data Hub` icon on the Navigation Pane.
  ![Sybase - BoldBI](/static/assets/working-with-etl/images/boldbi_panel.png#max-width=100%)
  
  2. Click `Add Pipeline` and provide the name for the new pipeline. 
   ![Sybase - BoldBI](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)
  
  3. Select the newly created pipeline and choose the Sybase connector. Double click or Click on Add Template option to add template.
  ![Sybase - BoldBI](/static/assets/working-with-etl/images/sybase_yaml.png#max-width=100%)

  ### Configuration Parameters

|  Parameters |  Description                                     |
|--------------------------------|---------------------------------------------|
| **Username:**                |  Provide the username to authenticate with the Sybase server.    |
| **Password:**            | 	Provide the password associated with the Sybase username. |
| **DSN Name:**            | Specify the ODBC Data Source Name configured for the Sybase database |
|    **Select:**     |                                  **Tablename(s):**       Specify the list of tables to load data from the Sybase server.|

  ![Sybase - BoldBI](/static/assets/working-with-etl/images/Sybase_final_template.png#max-width=100%)

  6. Click Save and choose the desired destination to save the pipeline.
  
   ![Sybase - BoldBI](/static/assets/working-with-etl/images/csv_destination.png#max-width=100%)
  
  7. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/).
  
   ![Sybase - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)
   
### Schedule Data Hub Job

1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.

![Sybase - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)

![Sybase - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)

2. For on-demand refresh, click `Run Now` button.

![Sybase - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%).

3. The Schedule history can be checked using the history option as well as logs.

![Sybase - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)

4. Click on Logs to see if the run is completed and data source is created in Bold BI. 

![Sybase - BoldBI](/static/assets/working-with-etl/images/pipeline_DScreated.png#max-width=100%)

5. Click `Edit DataSource` Option to view the created tables.