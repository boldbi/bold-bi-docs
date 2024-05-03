---
layout: post
title: SSL with connection parameters for PostgreSQL | Bold BI Docs
description: Learn the steps a user has to follow to enable SSL through connection parameters for PostgreSQL in Bold BI for embedded analytics.
canonical: "/faq/how-to-enable-ssl-through-connection-parameters-for-postgresql-data-source/"
platform: bold-bi
documentation: ug
---

# How to enable SSL through connection parameters for PostgreSQL data source

The Bold BI application allows you to enable SSL through connection parameters in the PostgreSQL data source by following these steps.

## Steps to connect PostgreSQL with SSL

1.	Refer to the guide [Connecting Bold BI to PostgreSQL data source](/working-with-data-sources/data-connectors/postgresql/#connecting-bold-bi-to-postgresql-data-source) for instructions on successfully connecting to it.

2.	To connect [PostgreSQL](/working-with-data-sources/data-connectors/postgresql/) with SSL, you need to add the connection string **sslmode=Require;TrustServerCertificate=true** in the **Additional connection parameters** textbox, along with the existing server details. Then, click **Connect**.

    ![Additional COnnection Parameters](/static/assets/faq/images/additional-parameters.png#max-width=40%)

By passing parameters in the connection string, you can enable SSL in the connection in this way.

3.	Drag and drop the table from the table schema onto the data design view page.

    ![Table schema](/static/assets/faq/images/ssh-tables.png#max-width=70%)

4.	Click **Save** to save the data source with a relevant name in order to proceed with designing a dashboard.

    ![Save option](/static/assets/faq/images/ssh-save-option.png#max-width=70%)
