---
layout: post
title: Connecting data sources with SSH in Bold BI | Bold BI Docs
description: Learn the steps a user has to follow to connect data sources with SSH connection in Bold BI for embedded analytics.
canonical: "/cloud-bi/faq/how-to-connect-data-sources-with-ssh-connection-in-bold-bi/"
platform: bold-bi
documentation: ug
---

# How to connect data sources with SSH connection in Bold BI

Bold BI application allows you to enable SSH for the supported data sources by following these steps.

## Supported data sources in Bold BI with SSH connection

<ul>
<li>SQL Server</li>
<li>MySQL</li>
<li>CData</li>
<li>MemSQL</li>
<li>MariaDB</li>
<li>Amazon Redshift</li>
<li>Presto</li>
<li>Influx DB</li>
<li>Amazon Aurora</li>
<li>PostgreSQL</li>
<li>Elasticsearch</li>
<li>SparkSQL</li>
<li>Google cloud SQL</li>
</ul>

## Steps to connect to a data source with SSH connection

1.	Refer to the [Connecting to Bold BI data sources](https://help.boldbi.com/embedded-bi/working-with-data-source/data-connectors/) for successfully connecting to any of the above supported data sources.

2.	For connecting to the data source with SSH connection, you need to enable the **Enable SSH** checkbox and enter the required SSH details along with the existing data source server details and click **Connect.**

    ![SSH option in data source](/bold-bi-docs/static/assets/embedded/faq/images/ssh-option-faq.png#max-width=50%)

In this way, you can enable SSL in the connection by passing the parameters in a connection string.

3.	Drag and drop the table from the table schema in the data design view page.

    ![Table schema](/bold-bi-docs/static/assets/embedded/faq/images/ssh-tables.png#max-width=100%)

4.	Click **Save** to save the data source with a relevant name to proceed with designing a dashboard.

    ![Save option](/bold-bi-docs/static/assets/embedded/faq/images/ssh-save-option.png#max-width=100%)
