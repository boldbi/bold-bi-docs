---
layout: post
title: Web Service Data Processing – Embedded BI | Bold BI Docs
description: Learn the data processing technique of Bold BI Embedded when deal with any web-based data sources like Jira.
canonical: "/faq/how-web-based-data-source-works-with-bold-bi-embedded-bi/"
platform: bold-bi
documentation: ug
---

# How web-based data source works with Bold BI?

When connecting Jira or any web-based data source, Bold BI will fetch data from the REST APIs exposed by that web-based source and store it in the Bold BI Intermediate Storage. The storage is usually a relational database. The intermediate data store is either in the Cloud for Bold BI Cloud or configured when the on-premise version is installed.

Refresh settings will be configured by users for periodic updates. Bold BI Cloud background jobs will fetch and move the data into the Bold BI Cloud Storage based on refresh settings. For each periodic update, it will delete the old data and insert new data.

For example, when connecting to a web-based data source for the first time, assume you have 1000 records from an API that are moved to the cloud storage and configured with refresh settings for every 15 minutes. At the next trigger, it will fetch available data from the same API, delete existing data, and move the new data, assuming there are now 1100 records. The new data will include both modified and new records. 

   ![Jira Data Source Workflow ](/static/assets/faq/images/bold-bi-extract-data-from-jira.png)

> **NOTE:** If you want to maintain the record from the last month, you can use a relative filter in JQL so that the Cloud Storage will only contain data from the last month. An example of JQL would be `project = projectXYZ and updated > -30d`.
