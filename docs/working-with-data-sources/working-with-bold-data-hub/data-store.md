---
layout: post
title: Bold Data Hub Destinations - Embedded BI | Bold BI Docs
description: Learn to configure various destinations in Bold Data Hub,leveraging inbuilt ETL capabilities support for data stores in Bold BI.
platform: bold-bi
documentation: ug
---

# Destination

>To set the destination credentials navigate to the settings tab in the Bold Data Hub. Bold Data Hub supports below destinations,
    >1.	 Bold IMDB Datastore
    >2.	 PostgreSQL
    >3.	 Apache Doris
    >4.	 SQL server
    >5.	 MySQL
    >6.  Google BigQuery
    >7.  Snow Flake
    >8.  Oracle
	>9.  ClickHouse
	>10. Firebolt
	>11. Teradata
	>12. SAP HANA Cloud
	>13. IBMDB2
	>14. Azure Synapse
	>15. Amazon RedShift

We can configure multiple data store destinations with the same server type and load data into them. This is common in scenarios where we might have multiple databases of the same type (for example, multiple MySQL or PostgreSQL databases) for different environments like development, testing, staging, or production, or for different segments of business operations.

Step 1 : Click on the settings.

![Source](/static/assets/working-with-etl/images/datahub_newsettings.png)

Step 2: Choose the Connection Type.

![Source](/static/assets/working-with-etl/images/datahub_settingtype.png)

- **New**: Choose this option if you are creating a new connection to a destination for which you have not previously created credentials.

- **Existing**: Select this option if you are updating or modifying the credentials or settings of a connection that you have already set up.


Step 3: Choose the destination where you want to move the data.

![Source](/static/assets/working-with-etl/images/datahub_destination.png)

Step 4: Enter the credentials for the respective destination.

Step 5: Click on Save to save the credentials from the Bold BI Data Store. If all the given credentials are valid, the “Datastore settings are saved successfully” message will appear near the save button.

## Bold IMDB Datastore

The Bold IMDB Datastore fetches the destination credentials from the BOLD BI Data Store configuration.
 
The data will be moved based on the credentials given in the Bold BI data store.

![Source](/static/assets/working-with-etl/images/datahub_imdb.png)



## PostgreSQL

Enter the following credentials for PostgreSQL:
1.	Server name/Host name
2.	Port number (default port number is 5432)
3.	Maintenance Database : The maintenance DB is a default database for users and applications to connect to. On PostgreSQL 8.1 and above, the maintenance DB is normally called ``postgres``.
4.	Username
5.	Password
6.	Check the SSL (Secure Sockets Layer) checkbox if needed.
7.	Database name : If the data wants to be moved to an existing database in the server click on the existing database radio buttons and give database name in the textbox or click on new database to create a new one and enter the database name in the textbox

![Source](/static/assets/working-with-etl/images/datahub_post.png)


## Apache Doris

Enter the credentials for the Apache Doris.

![Source](/static/assets/working-with-etl/images/etl_doris.png)

Click on Save to save the credentials.
If all the given credentials are valid, the “Datastore settings are saved successfully” message will appear near the save button.

## SQL Server

Enter the following credentials for SQL Server:

1.	Server name/Host name
2.	Username
3.	Password
4.	Check the SSL (Secure Sockets Layer) checkbox if needed.
5.	Database name : If the data wants to be moved to an existing database in the server click on the existing database radio buttons and give database name in the textbox or click on new database to create a new one and enter the database name in the textbox

![Source](/static/assets/working-with-etl/images/datahub_sql.png)



## MySQL

Enter the following credentials for MySQL:

1.	Server name/Host name
2.	Port number (default port number is 3306)
3.	Username
4.	Password
5.	Check the SSL (Secure Sockets Layer) checkbox if needed.
6.	Database name : If the data wants to be moved to an existing database in the server click on the existing database radio buttons and give database name in the textbox or click on new database to create a new one and enter the database name in the textbox

![Source](/static/assets/working-with-etl/images/datahub_mysql.png)


## Snow Flake

Enter the credentials for Snow Flake,

1. **Server**: Enter the server name . 
    Example: `account.snowflakecomputing.com`
2. **Username** : Enter your Snowflake username.
3. **Password** : Input your Snowflake password.
4. **Warehouse**: Enter your Snowflake warehouse name.
5. **Database** : Enter your Snowflake database name.

![Source](/static/assets/working-with-etl/images/datahub_snowflake.png)

Click on Save to save the credentials.
If all the given credentials are valid, the “Datastore settings are saved successfully” message will appear near the save button.

## Oracle

Enter the credentials for Oracle,

1. **Host**: Enter the hostname or IP address of the Oracle database server.
2. **Port**: Enter the port number Oracle is listening on (default is 1521).
3. **Service Instance Name**: Provide the Oracle service name.
4. **Username**: Input your Oracle database username.
5. **Password**: Input your Oracle database password.
6. **Database**: Input your Oracle database name (Database name should be same as user name)

![Source](/static/assets/working-with-etl/images/datahub_oracle.png)

Click on Save to save the credentials.
If all the given credentials are valid, the “Datastore settings are saved successfully” message will appear near the save button.

## Google BigQuery

Enter the credentials for Google BigQuery:

1. **Project ID** : Enter the Google BigQuery project ID.
2. **File Path** : Upload the Google BigQuery service account JSON file.

Click [Here](/working-with-data-sources/working-with-bold-data-hub/data-store/#steps-to-download-the-service-account-json-file) to Know how to get the Google BigQuery service account JSON file.

![Source](/static/assets/working-with-etl/images/datahub_google_bigquery.png)

Click on Save to save the credentials.
If all the given credentials are valid, the “Datastore settings are saved successfully” message will appear near the save button.

## Steps to download the Service Account JSON file:

1. Log in to or create a Google Cloud account
2. Sign up for or log in to the [Google Cloud Platform](https://console.cloud.google.com/) in your web browser.
3. Create a new Google Cloud project
4.  After arriving at the [Google Cloud console welcome page](https://console.cloud.google.com/welcome), click the project selector in the top left, then click the New Project button, and finally click the Create button after naming the project whatever you would like.
5. Create a service account and grant BigQuery permissions
You will then need to create a [service account](https://cloud.google.com/iam/docs/creating-managing-service-accounts#creating). After clicking the Go to Create service account button on the linked docs page, select the project you created and name the service account whatever you would like.
6. Click the Continue button and grant the following roles, so that we can create schemas and load data:
· BigQuery Data Editor
· BigQuery Job User
· BigQuery Read Session User
    You don't need to grant users access to this service account now, so click the Done button.
7. Download the service account JSON
    In the service accounts table page that you're redirected to after clicking Done as instructed above, select the three dots under the Actions column for the service account you created and select Manage keys.
    This will take you to a page where you can click the Add key button, then the Create new key button, and finally the Create button, keeping the preselected JSON option.

A JSON file that includes your service account private key will then be downloaded.

>**Note:** Currently Bold Data Hub does not support creating a data source in Bold BI when using Google Bigquery as the data store. 

## ClickHouse

Enter the credentials for ClickHouse:

1. Select the server type as Clickhouse.
2. Fill in your Clickhouse credentials as follows:
3. Datastore Name: Enter a meaningful name; this is how the Clickhouse credentials will be stored in Bold Data Hub.
4. Server: Enter the server name.
Example: service.region.clickhouse.cloud or private ip
5. Secure Connection: Enter your connection type as Insecure (HTTP) or Secure (HTTPS)
6. Http Port number: Enter your Http and Tcp port number.
7. Username: Enter your Clickhouse username.
8. Password: Input your Clickhouse password.
9. Database: Enter your Clickhouse database name.

![Source](/static/assets/working-with-etl/images/clickhousedatastore.png)

Click on Save to save the credentials.

If all the given credentials are valid, the “Datastore settings are saved successfully” message will appear near the save button.

For More Details please visit https://support.boldbi.com/kb/article/18509/connecting-clickhouse-as-destination-using-bold-data-hub 

## Firebolt

Enter the credentials for Firebolt:

1. Select the server type as Firebolt.
2. Fill in your Firebolt credentials as follows:
3. Datastore Name: Enter a meaningful name; this is how the Firebolt credentials will be stored in Bold Data Hub.
4. Account: Enter the Account Name.
Example: account-1
5. Enter your Client ID and Client Secret.
6. Enter your Engine Name.
7. Database: Enter your Clickhouse database name.

![Source](/static/assets/working-with-etl/images/fireboltdatastore.png)

Click on Save to save the credentials.

If all the given credentials are valid, the “Datastore settings are saved successfully” message will appear near the save button.

## Teradata

Enter the credentials for Teradata:

1. Select the server type as Teradata.
2. Fill in your Teradata credentials as follows:
3. Datastore Name: Enter a meaningful name; this is how the Teradata credentials will be stored in Bold Data Hub.
4. Server: Enter the Server Name.
Example: teradataenv-u043k14.env.clearscape.teradata.com
5. Username: Enter your Teradata username.
6. Password: Input your Teradata password.
7. Database: Enter your Teradata database name.

![Source](/static/assets/working-with-etl/images/teradata_dastore.png)

Click on Save to save the credentials.

If all the given credentials are valid, the “Datastore settings are saved successfully” message will appear near the save button.

## SAP HANA Cloud

Enter the credentials for SAP HANA Cloud:

1. Select the server type as SAP HANA Cloud.
2. Fill in your SAP HANA credentials as follows:
3. Datastore Name: Enter a meaningful name; this is how the SAP HANA credentials will be stored in Bold Data Hub.
4. Server: Enter the Server Name.
Example: 042a9310-1f79-4d80-ab0b-06277ca7c54a.hana.trial-us10.hanacloud.ondemand.com
5. Username: Enter your SAP HANA username.
6. Password: Input your SAP HANA password.
7. Database: Enter your SAP HANA database name.

![Source](/static/assets/working-with-etl/images/saphanacloud_destination.png)

Click on Save to save the credentials.

If all the given credentials are valid, the “Datastore settings are saved successfully” message will appear near the save button.

## IBMDB2

Enter the credentials for IBMDB2:

1. Select the server type as IBMDB2.
2. Fill in your IBMDB2 credentials as follows:
3. Datastore Name: Enter a meaningful name; this is how the IBMDB2 credentials will be stored in Bold Data Hub.
4. Server: Enter the Server Name.
5. Username: Enter your IBMDB2 username.
6. Password: Input your IBMDB2 password.
7. Database: Enter your IBMDB2 database name.
8. Enter the IBM client library path 

![Source](/static/assets/working-with-etl/images/ibmdb2_destination.png)

Click on Save to save the credentials.

## Azure Synapse

Enter the credentials for Azure Synapse:

1. Select the server type as Azure Synapse.
2. Fill in your Azure Synapse credentials as follows:
3. Datastore Name: Enter a meaningful name; this is how the Azure Synapse credentials will be stored in Bold Data Hub.
4. Server: Enter the Server Name.
5. Username: Enter your Azure Synapse username.
6. Password: Input your Azure Synapse password.
7. Database: Enter your Azure Synapse database name.
8. Enter the staging type preferred.

For faster data transfers with large datasets, it's recommended to use Azure Blob. When staging is not set, isDirectImport property is not supported.

![Source](/static/assets/working-with-etl/images/azuresynapse_destination.png)

9. When using staging enter the Azure ContainerName, Account Name, Account Key, SAS token

![Source](/static/assets/working-with-etl/images/azuresynapse_destination_blob.png)

Click on Save to save the credentials.

## Amazon RedShift

Enter the credentials for Amazon RedShift:

1. Select the server type as Azure RedShift.
2. Fill in your Azure RedShift credentials as follows:
3. Datastore Name: Enter a meaningful name; this is how the Amazon RedShift credentials will be stored in Bold Data Hub.
4. Server: Enter the Server Name.
5. Username: Enter your Amazon RedShift username.
6. Password: Input your Amazon RedShift password.
7. Database: Enter your Amazon RedShift database name.
8. Enter the staging type preferred.

For faster data transfers with large datasets, it's recommended to use s3 blob. When staging is not set, isDirectImport property is not supported.


9. When using staging enter the Bucket Name, Key Name,Role,Secret Access Key,Access Key ID,Region


Click on Save to save the credentials.

## MinIO

Enter the credentials for MinIO:

1. Select the server type as MinIO.
2. Fill in your MinIO credentials as follows:
3. Datastore Name: Enter a meaningful name; this is how the MinIO credentials will be stored in Bold Data Hub.
4. Server: Enter the Server Name.
5. Port Number: Specify the port where MinIO is hosted.
6. Access Key: Provide your MinIO access key.
7. Secret Key: Enter the secret key associated with your MinIO access.
8. Bucket Name: Provide the MinIO bucket name where the data will be stored. 

![Source](/static/assets/working-with-etl/images/Minio_destination.png)

Click on Save to save the credentials.
