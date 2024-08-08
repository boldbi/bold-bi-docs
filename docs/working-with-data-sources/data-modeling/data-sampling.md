---
layout: post
title: Connecting Bold BI application to Data Sampling feature
description: This section describes how to enable the data sampling feature for data sources in Bold BI Embedded.
platform: bold-bi
documentation: ug
keywords: isolation, isolation code, isolation filter, row level security, row level
---

# Data Sampling feature in Bold BI

The `Data Sampling` feature in Bold BI will provide a better design experience by limiting the number of records when creating dashboards with millions of data. However, this limitation will not be applied during the preview or publishing of dashboards.

## Enabling Data sampling in Bold BI:

To enable Data Sampling in Bold BI, please follow these steps:

1. Connect to a data source by providing valid credentials.

2. Drag and drop the table inside the query designer page.

3. Click on the `Data sampling` button as shown in the following image.

![Data sampling icon](/static/assets/working-with-datasource/data-sampling/datasamplingicon.png)
 
4. The `Data sampling` dialog will be disabled by default.

![Data sampling enable](/static/assets/working-with-datasource/data-sampling/enabledatasampling.png)

5. Click on the `checkbox` to enable and enter the number of records needed when creating a dashboard.

![Data sampling enable](/static/assets/working-with-datasource/data-sampling/enableandapplylimit.png)

> **NOTE:** The Data Sampling button will be disabled when switching to the code view mode in Bold BI.

6. Select `OK` and click on preview to ensure that `Data Sampling` has been applied to the data source as shown in the following image.

![Data sampling table preview](/static/assets/working-with-datasource/data-sampling/datasampledtablepreview.png)

7. Data sources enabled with `Data Sampling` can be identified using the icon as shown in the following image.

![Data sampling enabled](/static/assets/working-with-datasource/data-sampling/datasampleenabledicon.png#width=453px;height=544.9px)

8. While designing dashboards in Bold BI, the `Data Sampling` limit will be applied to all widgets.<br/> However, during the preview or publishing of the dashboard, `Data Sampling` will be automatically disabled to ensure data integrity.

![Data sample dashboard](/static/assets/working-with-datasource/data-sampling/datasampledashboard.png)

> **NOTE:** Data Sampling is not supported for the following data sources: **SSAS**, **SparkSQL**, **AWS OpenSearch**, **Elasticsearch**,**Influx DB** and **ODBC**.
