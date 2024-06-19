---
layout: post
title: Web Service Data Processing – Embedded BI | Bold BI Docs
description: Learn the data processing technique of Bold BI Embedded when deal with any web-based data sources like Jira.
canonical: "/cloud-bi/faq/how-web-based-data-source-works-with-bold-bi-embedded-bi/"
platform: bold-bi
documentation: ug
---

# How web-based data source works with Bold BI?

When connecting Jira or any web-based data source, Bold BI will fetch data from the REST APIs exposed by that web-based source and store in the Bold BI Intermediate Storage. The storage is usually a relational database. The intermediate data store is either in the Cloud for Bold BI Cloud or configured when the on-premise version is installed.

Refresh settings will be configured by users for periodic updates. Bold BI Cloud background jobs will fetch and move the data into the Bold BI Cloud Storage based on refresh settings. For each periodic update, it will delete the old data and insert a new one. 

For example, when connecting a web-based data source the first time, assume you have 1000 records from an API and moved to the cloud storage and configured with refresh settings for every 15 minutes. At the next trigger, it will fetch available data from the same API and delete existing data and moved the new data, assume 1100 records. The new data will have both modified and new records. 

   ![Jira Data Source Workflow ](/bold-bi-docs/static/assets/embedded/faq/images/bold-bi-extract-data-from-jira.png)

> **NOTE:** If you want to maintain the last one month record, you can use a relative filter in JQL so the Cloud Storage will contain the last month's data only. JQL example, `project = projectXYZ and updated > -30d`. 
