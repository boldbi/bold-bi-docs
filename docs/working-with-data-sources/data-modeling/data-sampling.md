---
layout: post
title: Connecting Bold BI application to Data Sampling feature
description: This section describes how to enable the data sampling feature for data sources in Bold BI Embedded.
platform: bold-bi
documentation: ug
keywords: isolation, isolation code, isolation filter, row level security, row level
---

# Data Sampling feature in Bold BI

`Data sampling` will provide a better designing experience by limiting the number of records while creating dashboards with millions of data, However, the limitation will not be applied while previewing or publishing dashboards.

> **Note:** This feature is available in On-Premises Deployment but not in Syncfusion Managed Cloud Server.

## Enabling Data sampling in Bold BI:

Please follow these steps to enable the data sampling feature in Bold BI.

1. Connect to a data source by providing valid credentials.

2. Drag and drop the table inside the query designer page.

3. Click on the `Data sampling` button as shown in the following image.

![Data sampling icon](/static/assets/working-with-datasource/data-sampling/datasamplingicon.png)
 
4. The `Data sampling` dialog will be disabled by default.

![Data sampling enable](/static/assets/working-with-datasource/data-sampling/enabledatasampling.png)

5. Click on the `Check box` to enable and enter the number of records needed while creating a dashboard.

![Data sampling enable](/static/assets/working-with-datasource/data-sampling/enableandapplylimit.png)

> **NOTE:** The data sampling button will be disabled while switching to the code view mode in Bold BI.

6. Select `OK` and click on the preview to ensure whether `Data sampling` has been applied to the data source as shown in the following image.

![Data sampling table preview](/static/assets/working-with-datasource/data-sampling/datasampledtablepreview.png)

7. The data sources enabled with `Data sampling` can be identified by using the icon as shown in the following image.

![Data sampling enabled](/static/assets/working-with-datasource/data-sampling/datasampleenabledicon.png#width=453px;height=544.9px)

8. While designing dashboards in Bold BI, the `Data sampling` limit will be applied to all the widgets.<br/> Whereas, while previewing or publishing the dashboard, the `data sampling` will be disabled automatically to ensure data integrity.

![Data sample dashboard](/static/assets/working-with-datasource/data-sampling/datasampledashboard.png)

> **NOTE:** The data sampling is not supported for the following data source’s  **SSAS**, **SparkSQL**, **AWS OpenSearch**, **Elasticsearch**,**Influx DB** and **ODBC**.