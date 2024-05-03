---
layout: post
title: Customizing the Start Day of the Week in Bold BI | Bold BI Docs
description: Learn the steps for Customizing the Start Day of the Week in relative date filter, Expression and Widget Aggregation in Bold BI | Bold BI Docs.
canonical: "/faq/customizing-the-start-day-of-the-week-in-bold-bi/"
platform: bold-bi
documentation: ug
---

# Customizing the Start Day of the Week in Bold BI

## Introduction

This guide outlines the steps required to customize the start day of the week in the relative date filter, Expression, and Widget Aggregation using the Data language option in the language settings.

## Steps to Customize Start Day of Week

### I. Relative Date Filter

#### Step 1: Set Language

- Navigate to the site settings.

- Choose `English (United Kingdom)` for Monday or `English (United States)` for Sunday as the start day of the week.
- Every language setting will reflect the cultural norm for the starting day of the week.
- Save the changes and refresh the application in order to apply the new language settings.
  
  ![Customize week start](/static/assets/faq/images/CWS-uk.png#max-width=100%)

   ![Customize week start](/static/assets/faq/images/CWS-us.png#max-width=100%)

#### Step 2: Create a Data Source

- Establish a data source within your application.
- Add a grid widget to your workspace.
- Drag the Date field into the Column Box of the grid widget.
- Click on ‘Week of Year’ and choose the relative date filter option.

![Customize week start](/static/assets/faq/images/CWS-relativedateedit.png#max-width=100%)

#### Step 3: Configure Relative Date Filter

- In the Range Box, select `Week`.
- In the Period Box, choose `Current Week`.

For Monday’s configuration:

![Customize week start](/static/assets/faq/images/CWS-relativedate.png#max-width=100%)

For Sunday configuration:

![Customize week start](/static/assets/faq/images/CWS-us_filter.png#max-width=100%)

#### Step 4: Result

- For Monday configuration, the grid widget will display the date range from Monday to Sunday (e.g., 29/01/2024 to 04/02/2024)

![Customize week start](/static/assets/faq/images/CWS-grid2.png#max-width=100%)

- For Sunday configuration, the grid widget will show the date range from Sunday to Saturday (e.g., 01/28/2024 to 02/03/2024).

![Customize week start](/static/assets/faq/images/CWS-us_grid2.png#max-width=100%)

### II. In Expression

#### Step 1: Set Language

- Follow the same language setting steps as outlined in the previous sections.

#### Step 2: Create a Data Source with an Expression

- Establish a data source within your application.
- Add an Expression of `DATEPART (WEEK, [Date])`.

Note: Use `DATENAME (WEEK, [DATE])` in some plugins.

![Customize week start](/static/assets/faq/images/CWS-DP-EXP.png#max-width=100%)

- Save and preview the table for Monday – English (United Kingdom).

![Customize week start](/static/assets/faq/images/CWS-UK-EXP.png#max-width=100%)

#### Step 3: Reset the Language and Preview

- Change the Language to the appropriate setting and save.
- Refresh the application to apply the new language settings.
- Re-save the existing expression with a `DATEPART` week and preview the table for Sunday – English (United States).

![Customize week start](/static/assets/faq/images/CWS-US-EXP.png#max-width=100%)

### III. In Widget Aggregation

#### Step 1: Set Language

- Follow the same language setting steps as outlined in the previous sections.

#### Step 2: Create a Dashboard

- Establish a data source within your application.
- Create a dashboard with the above data source.
- Add a grid widget to your workspace.
- Drag the Date field into the Column Box of the grid widget.
- Click on ‘Week of Year’ or ‘Week year’.

![Customize week start](/static/assets/faq/images/CWS-WA.png#max-width=100%)

![Customize week start](/static/assets/faq/images/CWS-ADD-COLS.png#max-width=100%)

![Customize week start](/static/assets/faq/images/CWS-grid-WA.png#max-width=100%)

- Publish the Dashboard `Monday – English (United Kingdom)`
- Week Of the year of 10/03/2024 (Sunday) – 10, Week Year - Week 10 2024
- Week Of the year of 11/03/2024 (Monday) – 11, Week Year - Week 11 2024

![Customize week start](/static/assets/faq/images/CWS-uk-WA.png#max-width=100%)

#### Step 3: Reset the Language and Republish

- Change the Language to the appropriate setting and save.
- Refresh the application to apply the new language settings.
- Republish the Dashboard for `Sunday – English (United States)`
- Week Of the year of 10/03/2024 (Sunday) – 11, Week Year - Week 11 2024
- Week Of the year of 11/03/2024 (Monday) – 11, Week Year - Week 11 2024

![Customize week start](/static/assets/faq/images/CWS-US-WA.png#max-width=100%)

## Related Links

- [Working with Relative Date Filters in Bold BI](https://www.boldbi.com/documentation/working-with-relative-date-filters)
- [Configuring Expression Columns in Bold BI](https://www.boldbi.com/documentation/configuring-expression-columns)

Please note that the images used in this guide are for illustrative purposes only and may not directly correspond to actual screens in Bold BI.
