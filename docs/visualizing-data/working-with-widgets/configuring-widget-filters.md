---
layout: post
title: Filtering Data in Widgets – Embedded BI | Bold BI Learning
description: Learn how to apply filter over data bounded to a specific widget based on condition and/or other field in Bold BI Embedded.
canonical: "/visualizing-data/working-with-widgets/configuring-widget-filters/"
platform: bold-bi
documentation: ug

---

# Configuring Widget Filters

## Configuring filter for measure column

   The filter for measure column can be configured by opening the `Measure Filter` dialog from the `Filter` option in the `Settings` drop-down menu.

   ![configuring filter for measure column in value section](/static/assets/visualizing-data/working-with-widgets/images/configuringfilterformeasurecolumn_valuesfilter.PNG)

   By clicking the `Edit…` menu item, the measure filter dialog will open as follows.

   ![configuring filter for measure colum](/static/assets/visualizing-data/working-with-widgets/images/configuringfilterformeasurecolumn_measurefilter.PNG#max-width=43%)

   ![showcasing measure filter window](/static/assets/visualizing-data/working-with-widgets/images/measurefilterwindow.PNG#max-width=62%)

   Configure the required aggregation from the dropdown to filter the widget based on the selected aggregation type. The dropped column aggregation type will be selected and listed in the dropdown by default.

   > **NOTE:** To perform [Raw data filtering](/visualizing-data/working-with-widgets/configuring-widget-filters/#raw-data-filter) in the widget, select the aggregation type as NONE from the dropdown.

   Configure the compare operator and the value to be compared against the selected column values. Click `Apply` to apply the filter settings to the widget. Now, the applied settings are saved, and these settings will be retained on reopening this dialog.

   Click `Reset` to reset the changes made in the dialog. This will also reset the filters applied before to that column.

   > **NOTE:**  `Reset` will be in enabled state only when the filter is applied already. `Apply` will be in enabled state only when there are pending changes in the dialog to save.

   ![resetting measure column filter](/static/assets/visualizing-data/working-with-widgets/images/configuringfilterformeasurecolumn_reseticon.PNG#max-width=62%)

   To clear the filter applied to the measure column, click `Clear` in the settings drop-down menu. This menu item will be in enabled state only when the filter is configured already to that column.

   ![option to clear to measure filter](/static/assets/visualizing-data/working-with-widgets/images/configuringfilterformeasurecolumn_clearfilter.PNG)

### Raw Data Filter
   The `None` aggregation type should be used in Filtering the widget to display the resultant value in raw data format. Once you configure the None type along with the required compare operator and value to be compared against the selected column, click `Apply` to apply the filter settings to the widget.

   The widget data will now be displayed with filtered Values based on non summarized data.
   
   ![Choose measure filter option](/static/assets/visualizing-data/working-with-widgets/images/MeasureFilterOption.png#max-width=55%)

   ![Set Raw data filter](/static/assets/visualizing-data/working-with-widgets/images/MeasureFilterAggregation.png#max-width=62%)

   The result will be shown in the following image.
   ![Raw data filter result](/static/assets/visualizing-data/working-with-widgets/images/MeasureFilterAggregationResult.png)

## Configuring filter for dimension column

   The filter for dimension column can be configured by opening the `Filters` dialog from the `Filters…` option in the `Settings` drop-down menu.

   ![configuring dimension filter for column](/static/assets/visualizing-data/working-with-widgets/images/configuringfilterfordimensioncolumn_columnsfilter.PNG)

   The filters dialog will open as follows.

   ![dimension filter wizard](/static/assets/visualizing-data/working-with-widgets/images/configuringfilterfordimensioncolumn_filterwizard.PNG)

   This dialog consists of three different filters that can be applied individually or in combined manner.

   **Item-based filtering**

   Through this filtering, you can filter the specific items from consideration.

   ![allow filtering option for dimension column](/static/assets/visualizing-data/working-with-widgets/images/configuringfilterfordimensioncolumn_allowfiltering.PNG)

   Click the `list` at top-right corner to drop-down the list holding the individual values of that column. You can check or uncheck each value or as a whole using the `CheckAll`.

   `Include` and `Exclude` options allow you to choose whether to consider checked items for inclusion or exclusion in filter respectively.

   The `Search` text box helps you to filter the items from the large list and search for specific one.

   Click `Apply` to save the changes made in the filter drop-down list.

   Click `Cancel` to cancel the changes made in the filter drop-down list, if required.

   Click `OK` in the filters dialog to save the changes made with respect to item-based filtering.

   Click `Cancel` to ignore the changes made in the filters dialog, if required.

   **Condition-based filtering**

   Through this filtering, you can impose a condition based on which the filter need to be applied. This filtering option is disabled, by default. You can enable it by clicking the `Condition` check box.

   ![showing condition filter option of dimension filter](/static/assets/visualizing-data/working-with-widgets/images/configuringfilterfordimensioncolumn_condition.PNG)

   Set the column near the `Column` label, by which the filter criteria need to be defined. Set the summary type near `Summary` label, based on which aggregation need to be applied over the selected column. Set the compare operator and the value to compare against the column values.

   Click `OK` in the filters dialog to save the changes made with respect to condition-based filtering.

   Click `Cancel` in the Filters dialog to ignore the changes, if required.

   **Rank-based Filtering**

   You can filter the `n` items by setting the mode, count, column, and summary fields through the rank-based filtering. You can enable it by clicking the `Rank` check box.

   ![rank filter option of dimension filter](/static/assets/visualizing-data/working-with-widgets/images/configuringfilterfordimensioncolumn_rank.PNG)

   Set the top or bottom mode in the `Mode` field, and set the number of records to filter in the `Count` field. Set the column name in the `Column` field based on which the filter need to be applied. 
   
   Set the summary type in the `Summary` field based on which aggregation need to be handled whose output should have been compared with corresponding value in widget bound data.

   For date `Column` field, you have additional option to format the `Column` field by enabling `Based On Date and Time`. Set the format type in the `Format` field need to be handled whose output should have been compared with corresponding value in widget bound data.

   ![rank based dimension filter with date option](/static/assets/visualizing-data/working-with-widgets/images/configuringfilterfordimensioncolumn_rankdate.PNG)

   Click `OK` in the filters dialog to save the changes made with respect to rank-based filtering.

   Click `Cancel` in the filters dialog to ignore the changes, if required.

   > **NOTE:**  When all these three filters are configured and applied, the records that satisfy the criteria of three filters will be considered by the widget.

## Configuring filter for date column

**Filtering based on Relative Dates**

**Relative date filters for non-filter widgets**

### Relative date filter

The relative date filter is applicable only for date-time type dimension columns. This is an added option for date-time columns, and hence it can be found only for them in the `Settings` drop-down menu

![relative date filter option](/static/assets/visualizing-data/working-with-widgets/images/relativedatefilteroption.png)

Click the` Relative Date Filter…` option in the `Settings` drop-down menu corresponding to that date-time column to open the   `Relative Date Filter` dialog.

![relative date filter dialog](/static/assets/visualizing-data/working-with-widgets/images/relativedatefilterdialog.png)

This dialog allows you to configure the filter for the date-time column. For example, if you configure `last week` as the filter, you will get the last week data in the widget. After a week, if you check, it will show you the last week from the start day to the end day. From this, you will no longer need to set the filter statically and change week by week to see the last week results.

In this dialog, set the range as year, month, or week, etc., like in the following `Range` label.

![relative date filter range selection](/static/assets/visualizing-data/working-with-widgets/images/relativedatefilterrangelabel.png)

Set the period in the `Period` label to see data in the defined range.

![relative date filter period selection](/static/assets/visualizing-data/working-with-widgets/images/relativedatefilterperiod.png)

You can pin the relative date filter to specific date to specify the data relative to it. For example, if users set last month in relative date filter and link the specific date to 22/Nov/2000, it will bring last month data relative to the specific date.

![relative date filter link option](/static/assets/visualizing-data/working-with-widgets/images/relativedatelinkdate.PNG)

You can see the preview date (highlighted below) in the dialog based on the values you set.

![relative date filter link to specific date option](/static/assets/visualizing-data/working-with-widgets/images/relativedatefilterspecificdate.PNG)

Click `OK` to save the changes and apply the filter.
Click `Cancel` if required, to ignore the changes made.






