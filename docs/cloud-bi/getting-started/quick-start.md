---
layout: post
title: Cloud BI – A Basic Walkthrough | Bold BI Documentation
description: Get a complete walkthrough of using Cloud BI from start to end. Know the features involved in-between the processes.
platform: bold-bi
documentation: ug
---

# Cloud BI – A Basic Walkthrough

This is a simple walkthrough to get you started with the Bold BI. Throughout this walkthrough, the **Northwind** database is used to demonstrate each feature of the Bold BI.

## Opening dashboard designer

Click on the below option to create a new dashboard in 'Bold BI'.

![Create Dashboard Option](/static/assets/cloud/getting-started/images/newdashboard.png)

You can start creating the dashboard from scratch or from templates as shown below.

![Ways of Creating Dashboards](/static/assets/cloud/getting-started/images/create-dashboard-options.png)

Open the Dashboard Designer by clicking the `Start from Scratch` option as highlighted below. 

![create dashboard using option in server](/static/assets/cloud/getting-started/images/createdashboard.png)

Enter the dashboard name and click `Add and Design` to open the Dashboard Designer.

![Dashboard name](/static/assets/cloud/getting-started/images/dashboard-name.png)

Now, the dashboard designer page opens as shown in the following image.

![new dashboard](/static/assets/cloud/getting-started/images/newdashboard.png)

## Scrollable Dashboard
Bold BI dashboard default canvas size is `48 columns x 24 rows`. Now we can add the additional number of rows using `Scrollable Dashboard` support. And also this allows to remove the added rows which exceed the default row size.

![scrollable info](/static/assets/cloud/getting-started/images/scrollableInfo.png)

To add new rows, increase the row count and then, click **Done** as shown in the following image.

![add rows](/static/assets/cloud/getting-started/images/update_rows.png)

On adding new rows, the dashboard will become scrollable, which can be used to add extra widgets as shown in the following image.

![scrollable dashboard](/static/assets/cloud/getting-started/images/scroll_created.png)

## Connecting to data

Add a new data source after establishing a data connection with one of the supported data connection types as follows.

### Setting up connection

Click `Data Source` button in the configuration panel.

![data source button in configuration panel](/static/assets/cloud/getting-started/images/databutton.png)

Click `CREATE NEW` to launch a new connection from the connection type panel or use the existing data source by clicking the `USE EXISTING` in the data source window.

![button for creating new connection](/static/assets/cloud/getting-started/images/datasourcebutton.png)

In the data sources list, click one (here, `Microsoft SQL` connection type is selected for demonstration) of the listed data source.

![list of available connections](/static/assets/cloud/getting-started/images/datasourcelist.png)

## Configuring tables and views

In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details.

![filling required details](/static/assets/cloud/getting-started/images/sqldatabase.png)

Click `Connect` in `NEW DATA SOURCE` configuration panel.

![button for connecting data source](/static/assets/cloud/getting-started/images/Connectbutton.png)

Now, the following view displays.

![tables and views for the connected database](/static/assets/cloud/getting-started/images/datadesignview.png)

The left pane holds the tables and views associated with the connected database. Drag the preferred table or view from the left pane and drop into the center pane labeled `Drag and Drop table here....` and then click `Update` in the bottom pane to view the data in data preview grid as follows.

![dropped table in canvas](/static/assets/cloud/getting-started/images/virtualtable.png)

Enable the Toggle Option, to update the data in the data preview grid automatically.

![dropped table in canvas](/static/assets/cloud/getting-started/images/datapreviewautoupdate.png)

The data type of each column will be represented nearby as follows.

![representing the datatype of each column](/static/assets/cloud/getting-started/images/datatypeicon.png)

Add more than one table, if you prefer, by following the same drag and drop operation. This is subjected to [joining](/cloud-bi/working-with-data-source/transforming-data/joining-table/) of tables.

## Transforming data

`Rename` the column as required either by selecting the options in the `Settings` drop-down menu or double-clicking the column to enable the edit mode.

![icon for column settings](/static/assets/cloud/getting-started/images/columnsettings.png)

Remove the unwanted column by clicking the icon at left side of the respective column.

![removing unwanted column using icon](/static/assets/cloud/getting-started/images/removecolumn.png)

The removed column will be represented like above. Clicking the same, will re-include that column for consideration.

To change the column type, click the `Settings` icon of the respective column and navigate to `Change Column Type`, and then select the preferred type to convert as shown in the following image.

![changing data type of column](/static/assets/cloud/getting-started/images/changecolumntype.png)

For supported column types and their equivalent convertible types, refer to [formatting columns](/cloud-bi/working-with-data-source/transforming-data/formatting-column/).

Add the required [expression columns](/cloud-bi/working-with-data-source/transforming-data/configuring-expression-columns/), by creating it using built-in functions and existing columns by clicking the option in the tools pane in data design view highlighted below.

![option for opening expression dialog](/static/assets/cloud/getting-started/images/expressiondialog.png)

Filter the data that is not required in the dashboard using the [data filters](/cloud-bi/working-with-data-source/transforming-data/configuring-data-filters/) option in the tools pane in data design view as highlighted in the following screenshot.

![option for opening the filter dialog](/static/assets/cloud/getting-started/images/addfilters.png)

Click `Save` in the tools pane in the data design view to navigate to the dashboard design view.

![button for saving the data source](/static/assets/cloud/getting-started/images/finishbutton.png)

## Creating dashboard

Now, the dashboard design view opens after configuring the table successfully.

![new dashboard](/static/assets/cloud/getting-started/images/newdashboardwithdatasource.png)

## Adding a widget to design view

The left toolbox pane consists of data visualization, filter, and miscellaneous widgets to design an interactive dashboard.

![list of widgets available for designing](/static/assets/cloud/getting-started/images/widgets.png)

Click and drag the preferred widget from the toolbox and drop it in the available space of the design area.

![types of comparison widgets](/static/assets/cloud/getting-started/images/comparisonwidgets.png)

The widget drop will happen only when you drop it in the appropriate region. In the above image, the blue border of the cell indicates that the targeted region is valid to drop.

The invalid region will be represented by a red border. This happens when you drop over a region where a widget or its part already exists.

![indication of error when dropping the widget in wrong region](/static/assets/cloud/getting-started/images/Errorindication.png)

If required, the dropped widget can be resized by placing the focus over the widget and dragging the widget corner as follows.

![resizing the widget using corners in widget](/static/assets/cloud/getting-started/images/resizingwidgets.png)

Doing so, will render the widget to the size you dragged. Here, the blue border indicates the occupied cell range of widget after resizing.

![resizing the widget using corners in widget](/static/assets/cloud/getting-started/images/resizedwidgets.png)

## Assigning data to widget

> **NOTE:**  This step is applicable only for the widget that do not belong to miscellaneous category except `Image` widget.

To bind data to a widget placed in the design area, focus that widget.

![configuring widgets with data](/static/assets/cloud/getting-started/images/databindtowidgets.png)

Click `Properties` button in the configuration panel, the property pane opens. Now, switch to `ASSIGN DATA` tab.

![tab for viewing the properties of widget](/static/assets/cloud/getting-started/images/propertiesbutton.png)

![tab for assigning data](/static/assets/cloud/getting-started/images/assigndata.png)

Here, the widget in the designer canvas will reflect the configuration changes made to the widget.

![Column chart](/static/assets/cloud/getting-started/images/columnchart.png)

The `ASSIGN DATA` tab holds data configuration view. The numeric columns and numeric expressions are listed under the `Measures` section; other type columns and dimension expressions are listed under the `Dimensions` section.

![available sections in data configuration pane](/static/assets/cloud/getting-started/images/sections.png)

Select and drag the numeric column (measure element) or the numeric expression column from the `Measure` section and drop it in the `Y Values` section.

![dropping dimennsion column in values section](/static/assets/cloud/getting-started/images/measuretovalues.png)

Now, the widget will look like this.

![rendering chart for Values](/static/assets/cloud/getting-started/images/datasrendering.png)

Click the `Settings` icon (highlighted) to open the [aggregation type](/cloud-bi/visualizing-data/working-with-widgets/aggregating-value-columns-based-on-type/) drop-down list.

![icon for displaying available settings](/static/assets/cloud/getting-started/images/settingsicon.png)

Set the preferred aggregation type to compute the dropped measure column.

![types of aggregation in settings popup](/static/assets/cloud/getting-started/images/aggregationtype.png)

Select and drag the non-numeric column (dimension element) from the `Dimensions` section against which you need to measure the numeric columns dropped, and drop it to the `Columns` section.

![dropping dimension column in column section](/static/assets/cloud/getting-started/images/draganddroptocolumns.png)

Now, the widget will look like this.

![configured widget](/static/assets/cloud/getting-started/images/dataconfiguredwidget.png)

To group the added column element by a column, add the respective non-numeric column (dimension element) into rows section.

![dropping dimension column in row section](/static/assets/cloud/getting-started/images/dimensiontorow.png)

![rendering chart with row data](/static/assets/cloud/getting-started/images/chartwithrowdata.png)

To format the measure column values, if required, click the `Settings` icon (highlighted) to open the drop-down list and click the `Format` option to open the `Measure Formatting` dialog.

![formatting option in settings popup](/static/assets/cloud/getting-started/images/formatvalues.png)

The `Measure Formatting` dialog will open as follows.

![dialog for formatting the measure](/static/assets/cloud/getting-started/images/measureformatting.png)

Make necessary changes and click `OK` to save the pending changes. Click `Cancel` to cancel the unsaved changes, and close the dialog.

You can filter the data for particular widget using `Measure Filter` or  `Dimension Filter`option shown in the `Settings` drop down menu.

### Measure Filter

![measure filtering option in settings popup](/static/assets/cloud/getting-started/images/widget-measure-filters.png)

The `Measure Filter` dialog will open as follows.

![dialog for applying measure filter](/static/assets/cloud/getting-started/images/measurefilters.png)

Refer to [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/) to make required changes and click `Apply` to save the changes.

### Dimension Filter

![filtering option in settings popup](/static/assets/cloud/getting-started/images/widget-dimension-filters.png)

The `Dimension Filter` dialog will open as follows.

![dialog for applying filter](/static/assets/cloud/getting-started/images/dimensionfilters.png)

Refer to [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) to make required changes and click `OK` to save the changes.

You can customize the sorting behavior of dimension and measure fields in each widget using `Sort` option shown in the `Settings` drop down menu.

### Dimension Sorting

![sorting option in settings popup](/static/assets/cloud/getting-started/images/widgetsorting-dimension.png)

The `Dimension Sorting` dialog will open as follows.

![window for advance sorting](/static/assets/cloud/getting-started/images/dimensionsort.png)

Refer to [sort](/cloud-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) to make required changes and click `Apply` to save the changes. 

## Configuring properties to widget

Navigate to the `PROPERTIES` pane in the properties tab.

![properties pane in design tab](/static/assets/cloud/getting-started/images/properties.png)

From the dashboard design tab, you can navigate to the properties pane by placing the focus in the widget like below.

Click the `Settings` icon at top right corner of the widget. Focus moves to the data design view tab and opens the `PROPERTIES` pane.

![button for view the properties of the selected widget](/static/assets/cloud/getting-started/images/settingsiconwithwidget.png)

This pane holds some general settings and some specific to the widget. Configure the desired settings and refer to the `Properties Configuration` widget-wise for more details.

You can add more widgets by following the same procedure to create a dashboard like below.

Once you are done with the dashboard, `Publish` the dashboard by clicking the `Publish As` button in the tools pane.

![button for saving the created dashboard](/static/assets/cloud/getting-started/images/savebutton.png)

Click `Publish` in the below dialog,

![Publish dashboard](/static/assets/cloud/getting-started/images/publish-dialog.png)

Click preview at the top-right of the tools pane to see the dashboard preview launched in the web browser page.

![button for launching preview in web browser](/static/assets/cloud/getting-started/images/previewbutton.png)

Now, the dashboard preview can be visualized like below.

![previewing dashboard in viewer](/static/assets/cloud/getting-started/images/webdashboardpreviewinviewer.png)

You can design any number of dashboards by following the steps given above.

## Related links
[Blog Post on Getting Started](https://www.boldbi.com/blog/create-business-dashboards-online-with-bold-bi)

[Blog Post on Features Overview](https://www.boldbi.com/blog/bold-bi-overview-a-complete-walkthrough-of-the-bold-bi-features-webinar-qa)





















































