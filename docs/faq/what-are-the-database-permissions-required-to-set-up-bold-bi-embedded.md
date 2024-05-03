---
layout: post
title: Grant Database Permissions - Embedded Analytics | Bold BI Docs
description: Find the list of database permissions a user needs to be granted in a database server to create and access for user detail or data store for embedded analytics.
platform: bold-bi
documentation: ug
---
# Permissions needed to create and use the database

In order to create a database, the server requires specific permissions to be assigned to your username. Please refer to this documentation to understand which permissions are needed to enable Bold BI to connect to and utilize the database.

The credentials provided to connect to the server instance must have the following permissions:

- **Create Database:** Permission is granted to create databases if the application is to be deployed on a new database.
- **Create Table:** Permission is required to create tables for the applications.
- **Insert:** Permission is granted to add new records to the tables.
- **Update:** Permission is granted to update existing records in the tables.
- **Alter:** Permission is granted to change the database schema during upgrades.  
- **Select:** Permission is granted to read the records from the tables.
- **Drop Table:** Permission is granted to change the database schema during upgrades and to remove tables from the database when deleting the site. 
- **Drop Database:** Permission to drop the database is granted while deleting the site.

## References

* [Microsoft SQL Server](https://docs.microsoft.com/en-us/sql/t-sql/statements/alter-server-role-transact-sql?view=sql-server-ver15#syntax)
* [PostgreSQL](https://www.postgresql.org/docs/9.5/sql-alteruser.html)
* [My SQL](https://www.digitalocean.com/docs/databases/mysql/how-to/modify-user-privileges/#granting-privileges)