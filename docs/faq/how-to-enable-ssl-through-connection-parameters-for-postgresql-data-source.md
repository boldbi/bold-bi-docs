---
layout: post
title: SSL with connection parameters for PostgreSQL | Bold BI Docs
description: Learn the steps a user has to follow to enable SSL through connection parameters for PostgreSQL in Bold BI for embedded analytics.
canonical: "/faq/how-to-enable-ssl-through-connection-parameters-for-postgresql-data-source/"
platform: bold-bi
documentation: ug
---

# How to enable SSL through connection parameters for PostgreSQL data source

Bold BI application allows you to enable SSL through connection parameters in the PostgreSQL data source by following these steps.

## Steps to connect PostgreSQL with SSL

1.	Refer to the [Connecting Bold BI to PostgreSQL data source](/working-with-data-source/data-connectors/postgresql/#connecting-bold-bi-to-postgresql-data-source) for successfully connecting to it.

2.	For connecting the [PostgreSQL](/working-with-data-source/data-connectors/postgresql/) with SSL connection, you need to add the connection string **sslmode=Require;TrustServerCertificate=true** in the **Additional connection parameters** textbox along with the existing server details and click **Connect.**

    ![Additional COnnection Parameters](/static/assets/faq/images/additional-parameters.png#max-width=40%)

In this way, you can enable SSL in the connection by passing parameters in the connection string.

3.	Drag and drop the table from the table schema in the data design view page.

    ![Table schema](/static/assets/faq/images/ssh-tables.png#max-width=70%)

4.	Click **Save** to save the data source with a relevant name to proceed with designing a dashboard.

    ![Save option](/static/assets/faq/images/ssh-save-option.png#max-width=70%)
