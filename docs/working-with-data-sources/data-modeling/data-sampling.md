---
layout: post
title: Connecting Bold BI application to Data Sampling feature
description: This section describes how to enable and configure the Data Sampling feature for data sources in Bold BI Embedded.
platform: bold-bi
documentation: ug
keywords:  isolation, isolation code, isolation filter, row level security, row level ,data sampling, preview row limit, sampling strategy, accurate, balanced, fast
---

# Data Sampling feature in Bold BI

The **Data Sampling** feature in Bold BI improves the dashboard design experience by limiting the amount of data retrieved while designing dashboards. This helps reduce query execution time and improves responsiveness when working with large datasets.

Data Sampling is applied **only during dashboard design and data source preview**. When the dashboard is previewed or published, Bold BI automatically retrieves the complete dataset to ensure accurate results.

## Sampling Strategies

| Strategy | Description |
|----------|-------------|
| **Accurate** | Applies the configured row limit after all joins, providing the most representative preview data. |
| **Balanced** | Allows separate row limits to be configured for the selected Primary and Secondary tables, balancing preview accuracy and performance. |
| **Fast** | Applies the configured row limit to each table before joins, providing the fastest preview performance. |

## Enable Data Sampling

To configure Data Sampling in Bold BI, follow these steps:

1. Connect to a supported data source using valid credentials.

2. Drag and drop one or more tables into the Query Designer.

3. Click the **Data Sampling** button.

   ![Data Sampling icon](/static/assets/working-with-datasource/data-sampling/datasamplingicon.png)

4. By default, **Enable Data Sampling** is disabled.

   ![Enable Data Sampling](/static/assets/working-with-datasource/data-sampling/Enable2.png)

5. Select the **Enable Data Sampling** checkbox.

   Once enabled, the following options become available:

   - **Preview Row Limit** – Specifies the maximum number of rows retrieved during preview.
   - **Sampling Strategy** – Select one of the following strategies:
     - **Accurate**
     - **Balanced**
     - **Fast**

   ![Configure Data Sampling](/static/assets/working-with-datasource/data-sampling/sample.png)

6. Configure the **Preview Row Limit** and choose the appropriate **Sampling Strategy**.

   ### Accurate

   Select **Accurate** when you want the preview data to closely represent the final query result. The configured row limit is applied **after all joins** are completed, providing the most representative preview.

   ![Accurate Sampling](/static/assets/working-with-datasource/data-sampling/accurate.png)

   ### Balanced

   Select **Balanced** to balance preview accuracy and performance. Configure separate **Primary Tables** and **Secondary Tables** along with their respective **Row Limits**. The specified row limits are applied before the join operation, reducing the amount of data processed while maintaining a representative preview.

   ![Balanced Sampling](/static/assets/working-with-datasource/data-sampling/enable3.png)

   ### Fast

   Select **Fast** when you need the quickest preview. The configured row limit is applied to **each table before joins**, minimizing the amount of data processed and providing the fastest preview generation.

   ![Fast Sampling](/static/assets/working-with-datasource/data-sampling/sample.png)

7. Click **Apply**, then click **Preview** to verify that Data Sampling has been applied.

   ![Data Sampling Preview](/static/assets/working-with-datasource/data-sampling/maxirow.png)

8. Data sources with Data Sampling enabled are identified using the Data Sampling icon.

   ![Data Sampling Enabled](/static/assets/working-with-datasource/data-sampling/datasampleenabledicon.png#width=453px;height=544.9px)

9. During dashboard design, the configured Data Sampling settings are applied to improve performance. During dashboard preview or publishing, Data Sampling is automatically ignored so that all widgets use the complete dataset.

   ![Dashboard Preview](/static/assets/working-with-datasource/data-sampling/datasampledashboard.png)

> **NOTE:** When **Enable Data Sampling** is unchecked, all Data Sampling settings are disabled and no sampling configuration is applied.

> **NOTE:** The **Data Sampling** button is unavailable when the Query Designer is switched to **Code View**.

> **NOTE:** Data Sampling is not supported for the following data sources: **SSAS**, **SparkSQL**, **AWS OpenSearch**, **Elasticsearch**, **InfluxDB**, and **ODBC**.