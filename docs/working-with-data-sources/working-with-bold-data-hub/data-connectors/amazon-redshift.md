---
layout: post
title: Amazon Redshift Connector – Bold Data Hub Embedded Learning
description: Learn how to connect Amazon Redshift to Bold BI using Data Hub connectors. Follow easy steps to bring in your data and start analyzing it quickly.
platform: bold-bi
documentation: ug
---
# Amazon Redshift
Amazon Redshift is a cloud-based data warehouse from AWS that uses SQL to analyze large datasets. It’s known for fast query performance, easy scalability, and deep integration with other AWS services. Redshift is widely used for business intelligence, analytics, and big data processing.
## Connection Properties
In a YAML file, the `config` section contains the following properties:
```yaml
 connectorname: RedShift
 schemaname: <>
 host: <>
 port: <>
 username: <>
 database: <>
 password: <>
```
### Example Configuration
```yaml
version: 1.0.1
destination: 
plugins:
  extractors:
    - name: RedShift
      connectorname: RedShift
      schemaname: public
      config:
        host: hostname
        port: 5439
        username: user
        database: database
        password: password
      select:
        - tablename
```
## Configure the Bold Data Hub to connect Amazon Redshift
  1. Click the `Data Hub` icon on the Navigation Pane.

  ![Amazon Redshift Hub- BoldBI](/static/assets/working-with-etl/images/clickdatahub.png#max-width=100%)

  2. Click `Add Pipeline` and provide the new pipeline's name.
  
   ![Amazon Redshift Hub- BoldBI](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)
  
  3. Select the newly created pipeline and add the `Amazon Redshift` template.
  ![Amazon Redshift Hub- BoldBI](/static/assets/working-with-etl/images/Redshift_template.png#max-width=100%)
  
### Configuration Parameters
  
  |Parameters |    Description                                          |
|--------------------------|----------------------------------------------|
| **Host:**                | Specify the hostname of the Amazon Redshift server.    |
| **Port:**                | Specify the port number of the Amazon Redshift server (default is 3306). |
| **Username:**            | Provide the username to authenticate with the Amazon Redshift server. |
| **Password:**            | Provide the password to authenticate with the Amazon Redshift server. |
| **Database:**            | Specify the name of the Amazon Redshift database from which data will be extracted. |
| **Schema Name:**         | Specify the Schema name for connecting to Amazon Redshift. |
| **Select:**            | **Tablename(s):**  Specify the table name list to load tables from the Amazon Redshift server.|
  4. Update the details required in the template and Click Save, choose the desired destination to save the pipeline.
  ![Amazon Redshift Hub- BoldBI](/static/assets/working-with-etl/images/Redshift_yaml.png#max-width=100%)
  
 5. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/)
### Schedule Bold Data Hub Job
1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.
![Amazon Redshift - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)
![Amazon Redshift - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)
2. For on-demand refresh, click `Run Now` button.
![Amazon Redshift - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%).
3. The Schedule history can be checked using the history option as well as logs.
![Amazon Redshift - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)
4. Click on Logs to see if the run is completed and data source is created in Bold BI. 
![Amazon Redshift - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)
5. Click `Edit DataSource` Option to view the created tables.