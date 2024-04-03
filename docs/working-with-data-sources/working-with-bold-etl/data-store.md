---
layout: post
title: Bold ETL Data Store – Embedded BI | Bold BI Learning
description: Learn how to set destination credentials in ETL application Settings Tab in Bold BI Enterprise Edition.
platform: bold-bi
documentation: ug
---

# Destination

Navigate to the settings tab in the Bold ETL to set the destination credentials. Bold ETL supports five different destinations:
    >1.	Bold IMDB Datastore
    >2.	PostgreSQL
    >3.	Apache Doris
    >4.	SQL server
    >5.	MySQL

We can configure multiple data store destinations with the same server type and load data into them. This is common in scenarios where we might have multiple databases of the same type (for example, multiple MySQL or PostgreSQL databases) for different environments like development, testing, staging, or production, or for different segments of business operations.

Step 1 : Click on the settings.

![Source](/static/assets/working-with-etl/images/etl_newsettings.png)

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
 
The data would be moved based on the credentials given in the Bold BI (data store).

![Source](/static/assets/working-with-etl/images/etl_imdb.png)



## PostgreSQL

Enter the following credentials for PostgreSQL:
1.	Server name/Host name
2.	Port number (default port number is 5432)
3.	Maintenance Database: The maintenance DB is a default database for users and applications to connect to. On PostgreSQL 8.1 and above, the maintenance DB is normally called ``postgres``.
4.	Username
5.	Password
6.	Check on the SSL(Secure Sockets Layer) checkbox if needed.
7.	Database name: If the data needs to be moved to an existing database in the server, click on the existing database radio buttons and give the database name in the textbox, or click on the new database to create a new one and enter the database name in the textbox

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
4.	Check on the SSL(Secure Sockets Layer) checkbox if needed.
5.	Database name: If the data needs to be moved to an existing database in the server, click on the existing database radio buttons and give the database name in the textbox, or click on the new database to create a new one and enter the database name in the textbox.

![Source](/static/assets/working-with-etl/images/etl_sql.png)



## MySQL
Enter the following credentials for PostgreSQL:
1.	Server name/Host name
2.	Port number (default port number is 3306)
3.	Username
4.	Password
5.	Check on the SSL(Secure Sockets Layer) checkbox if needed.
6.	Database name: If the data wants to be moved to an existing database in the server, click on the existing database radio buttons and give the database name in the textbox, or click on the new database to create a new one and enter the database name in the textbox.

![Source](/static/assets/working-with-etl/images/etl_mysql.png)