---
layout: post
title: Configure Fiscal Year – Embedded BI | Bold BI Documentation
description: Learn how to configure Fiscal Year settings while creating a data source and dashboard in Bold BI Embedded.
platform: bold-bi
documentation: ug
keywords: fiscal, fiscal year, fiscal quarter, fiscal month, fiscal quarter year, fiscal month year 

---
# Configure Fiscal Year

To configure the fiscal year, select a date-based column and click the `Settings` icon, which will be displayed as shown below.

![Fiscal Date column](/static/assets/working-with-datasource/images/fiscaldatecolumn.png)

Next, select the `Fiscal Year Start` and select the fiscal year month you want, as shown below.

![Fiscal Year Start column](/static/assets/working-with-datasource/images/fiscalyearsettings.png)

**Note**: Please refer this [link](/visualizing-data/working-with-widgets/custom-date-format/) to configure fiscal year in dashboard page.

## Fiscal Year Formats

In Bold BI, it supports the following fiscal year formats,

* Year
* Quarter
* Quarter Year
* Month
* Month Year

## Fiscal Year Format Support in Bold BI Data Sources

Bold BI supports the following data sources for configuring Fiscal Year formats:

| `Data Source`    |`Fiscal Year`|`Fiscal Quarter`|`Fiscal Quarter Year`|`Fiscal Month`|`Fiscal Month Year`|
|------------------|-------------|----------------|---------------------|--------------|-------------------|
| Clickhouse       | Yes     	 | Yes     	      | Yes                 | Yes          | Yes               |
| Google Bigquery  | Yes     	 | Yes     	      | Yes                 | Yes          | Yes               |
| MSSQL            | Yes     	 | Yes     	      | Yes                 | Yes          | Yes               |
| MYSQL            | Yes     	 | Yes     	      | Yes                 | Yes          | Yes               |
| PostgreSQL       | Yes     	 | Yes     	      | Yes                 | Yes          | Yes               |
| Snowflake        | Yes     	 | Yes     	      | Yes                 | Yes          | Yes               |
| Elastic Search   | Yes     	 | Yes     	      | No                  | No           | No                |

## Sample Dates

| `Date (mm/dd/yyyy)`       |`Accounting Year`|
|---------------------------|-----------------|
| 02/12/2024                | 2024     	      |
| 12/12/2024                | 2024     	      |
| 01/12/2025                | 2025     	      |
| 02/12/2025                | 2025     	      |
| 03/12/2025                | 2025     	      |
| 04/12/2025                | 2025     	      |
| 05/12/2025                | 2025     	      |
| 06/12/2025                | 2025     	      |
| 07/12/2025                | 2025     	      |
| 08/12/2025                | 2025     	      |
| 09/12/2025                | 2025     	      |
| 10/12/2025                | 2025     	      |
| 11/12/2025                | 2025     	      |
| 12/12/2025                | 2025     	      |
| 01/12/2026                | 2026     	      |
| 02/12/2026                | 2026     	      |
| 03/12/2026                | 2026     	      |
| 04/12/2026                | 2026     	      |

## Fiscal Year

A fiscal year is a 12‑month period used by organizations for accounting and financial reporting, and it is named for the year in which it ends.

If the Fiscal year starts in April and ends in March, then the Fiscal year is calculated by,

Apr → Dec: Fiscal Year = Calendar Year + 1.

Jan → Mar: Fiscal Year = Calendar Year.  

![Fiscal Year](/static/assets/working-with-datasource/images/FiscalYear.png)

## Fiscal Quarter

Fiscal Quarter (FQ) is a 3-month period in a fiscal year.

If the Fiscal Quarter starts in April, then the Fiscal Quarters are,

| `Quarter Months`|`Fiscal Quarter` |
|-----------------|-----------------|
| Apr - Jun       | Quarter 1  	    |
| Jul – Sep       | Quarter 2   	|
| Oct – Dec       | Quarter 3   	|
| Jan – Mar       | Quarter 4   	|

![Fiscal Quarter](/static/assets/working-with-datasource/images/FiscalQuarter.png)

## Fiscal Quarter Year

A Fiscal Quarter Year divides the fiscal year into four equal parts, each consisting of three months. It is a combination of both Fiscal Quarter and Fiscal Year.

Consider the Fiscal year for Apr 2025 - Mar 2026, then the Fiscal Quarter Years are,

| `Quarter Months`| `Fiscal Quarter`| `Fiscal Year` |`Fiscal Quarter Year` |
|-----------------|-----------------|---------------|----------------------|
| Apr - Jun       | Quarter 1       | 2026          | Quarter 1  2026	   |
| Jul – Sep       | Quarter 2       | 2026          | Quarter 2  2026 	   |
| Oct – Dec       | Quarter 3       | 2026          | Quarter 3  2026 	   |
| Jan – Mar       | Quarter 4       | 2026          | Quarter 4  2026 	   |

![Fiscal Quarter Year](/static/assets/working-with-datasource/images/FiscalQuarterYear.png)

## Fiscal Month

Fiscal Month refers to one of the 12 accounting periods within a Fiscal Year. Unlike calendar months, fiscal months may not align exactly with standard months if the fiscal year doesn’t start in January.

If the Fiscal Month starts in April, then the Fiscal Months are, 

| `Month`   | `Fiscal Month`|
|-----------|---------------|
| Apr       | Jan           |
| May       | Feb           |
| June      | Mar           |
| .         | .             |
| .         | .             |
| Feb       | Nov           | 
| Mar       | Dec           |

![Fiscal Month](/static/assets/working-with-datasource/images/FiscalMonth.png)

## Fiscal Month Year

Fiscal Month Year is a single term that identifies a specific fiscal month together with its corresponding fiscal year, providing a clear reference to a financial period. In simple words, it is a combination of both Fiscal Month and Fiscal Year.

Consider the Fiscal year for Apr 2025 - Mar 2026, then the Fiscal Month Years are,

| `Month`   | `Fiscal Month`|`Fiscal year`|`Fiscal Month Year`|
|-----------|---------------|-------------|-------------------|
| Apr       | Jan           | 2026        | Jan 2026          |
| May       | Feb           | 2026        | Feb 2026          |
| June      | Mar           | 2026        | Mar 2026          |
| .         | .             | .           | .                 |
| .         | .             | .           | .                 |
| Feb       | Nov           | 2026        | Nov 2026          | 
| Mar       | Dec           | 2026        | Dec 2026          |

![Fiscal Month Year](/static/assets/working-with-datasource/images/FiscalMonthYear.png)






