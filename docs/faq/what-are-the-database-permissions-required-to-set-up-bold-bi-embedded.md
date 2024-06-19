---
layout: post
title: Grant Database Permissions - Embedded Analytics | Bold BI Docs
description: Find the list of database permissions a user needs to be granted in a database server to create and access for user detail or data store for embedded analytics.
platform: bold-bi
documentation: ug
---
# Permissions needed to create and use the database

To create a database, the server requires certain permissions to be assigned to your username. Please refer to this documentation to learn which permissions need to be assigned to allow Bold BI to connect and use the database.

The credentials given to connect to the server instance must have the following permissions:

- **Create Database:** permission to create databases if the application is to be deployed in a new database.
- **Create Table:** permission to create tables required for the applications.
- **Insert:** permission to add new records to the tables.
- **Update:** permission to update existing records in the tables.
- **Alter:** permission to change the database schema with upgrades.  
- **Select:** permission to read the records from the tables.
- **Drop Table:** permission to change the database schema during upgrades and to remove tables from the database while deleting the site. 
- **Drop Database:** permission to drop the database while deleting the site.

## References

* [Microsoft SQL Server](https://docs.microsoft.com/en-us/sql/t-sql/statements/alter-server-role-transact-sql?view=sql-server-ver15#syntax)
* [PostgreSQL](https://www.postgresql.org/docs/9.5/sql-alteruser.html)
* [My SQL](https://www.digitalocean.com/docs/databases/mysql/how-to/modify-user-privileges/#granting-privileges)