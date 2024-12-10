---
layout: post
title: Data Hub Data Store – Embedded BI | Bold BI Learning
description: Learn how to set destination credentials in Data Hub application Settings Tab in Bold BI Enterprise Edition.
platform: bold-bi
documentation: ug
---

# Destination

>To set the destination credentials navigate to the settings tab in the Bold Data Hub. Bold Data Hub supports five different destinations:
    >1.	Bold IMDB Datastore
    >2.	PostgreSQL
    >3.	Apache Doris
    >4.	SQL server
    >5.	MySQL
    >6. Google BigQuery
    >7. Snow Flake
    >8. Oracle

We can configure multiple data store destinations with the same server type and load data into them. This is common in scenarios where we might have multiple databases of the same type (for example, multiple MySQL or PostgreSQL databases) for different environments like development, testing, staging, or production, or for different segments of business operations.

Step 1 : Click on the settings.

![Source](/static/assets/working-with-etl/images/datahub_newsettings.png)

Step 2: Choose the Connection Type.

![Source](/static/assets/working-with-etl/images/etl_settingtype.png)
- **New**: Choose this option if you are creating a new connection to a destination for which you have not previously created credentials.

- **Existing**: Select this option if you are updating or modifying the credentials or settings of a connection that you have already set up.


Step 3: Choose the destination where you want to move the data.

![Source](/static/assets/working-with-etl/images/etl_destination.png)

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

![Source](/static/assets/working-with-etl/images/etl_post.png)


## Apache Doris
Enter the credentials for the Apache Doris.

![Source](/static/assets/working-with-etl/images/etl_doris.png)

Click on Save to save the credentials.
If all the given credentials are valid, the “Datastore settings are saved successfully” message will appear near the save button.

## SQL Server
Enter the following credentials for PostgreSQL:
1.	Server name/Host name
2.	Username
3.	Password
4.	Check the SSL (Secure Sockets Layer) checkbox if needed.
5.	Database name : If the data wants to be moved to an existing database in the server click on the existing database radio buttons and give database name in the textbox or click on new database to create a new one and enter the database name in the textbox

![Source](/static/assets/working-with-etl/images/etl_sql.png)



## MySQL
Enter the following credentials for PostgreSQL:
1.	Server name/Host name
2.	Port number (default port number is 3306)
3.	Username
4.	Password
5.	Check the SSL (Secure Sockets Layer) checkbox if needed.
6.	Database name : If the data wants to be moved to an existing database in the server click on the existing database radio buttons and give database name in the textbox or click on new database to create a new one and enter the database name in the textbox

![Source](/static/assets/working-with-etl/images/etl_mysql.png)


## Snow Flake
Enter the credentials for Snow Flake
1. **Server**: Enter the server name . 
    Example: `account.snowflakecomputing.com`
2. **Username** : Enter your Snowflake username.
3. **Password** : Input your Snowflake password.
4. **Warehouse**: Enter your Snowflake warehouse name.
5. **Database** : Enter your Snowflake database name.

![Source](/static/assets/working-with-etl/images/etl_snowflake.png)

Click on Save to save the credentials.
If all the given credentials are valid, the “Datastore settings are saved successfully” message will appear near the save button.

## Oracle
Enter the credentials for Oracle
1. **Host**: Enter the hostname or IP address of the Oracle database server.
2. **Port**: Enter the port number Oracle is listening on (default is 1521).
3. **Service Instance Name**: Provide the Oracle service name.
4. **Username**: Input your Oracle database username.
5. **Password**: Input your Oracle database password.
6. **Database**: Input your Oracle database name (Database name should be same as user name)

![Source](/static/assets/working-with-etl/images/etl_oracle.png)

Click on Save to save the credentials.
If all the given credentials are valid, the “Datastore settings are saved successfully” message will appear near the save button.

## Google BigQuery
Enter the credentials for Google BigQuery:
1. **Project ID** : Enter the Google BigQuery project ID.
2. **File Path** : Upload the Google BigQuery service account JSON file.

Click [Here](/working-with-data-sources/working-with-bold-data-hub/data-store/#steps-to-download-the-service-account-json-file) to Know how to get the Google BigQuery service account JSON file.

![Source](/static/assets/working-with-etl/images/etl_google_bigquery.png)

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