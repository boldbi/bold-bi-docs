---
layout: post
title: Embedded BI – A Basic Walkthrough | Bold BI Documentation
description: Get a complete walkthrough of using Embedded BI from start to end. Know the features involved in-between the processes.
canonical: "/getting-started/creating-dashboard/"
platform: bold-bi
documentation: ug
---

# Bold BI – A Basic Walkthrough

This is a simple walkthrough that will help you get started with Bold BI. Throughout this walkthrough, we will be using the **Northwind** database to demonstrate each feature of Bold BI.

You may watch this video first. This video describes how to create a marketing performance dashboard with key metrics.<br/>

<iframe class="helpsite-video-section" src="https://www.youtube.com/embed/k6yeUz0NqQ4?start=708" frameborder="0" allowfullscreen></iframe>

## Opening dashboard designer

To create a new dashboard in `Bold BI`, click on the option below.

![Create Dashboard Option](/static/assets/getting-started/images/newdashboard.png)

You can either start creating the dashboard from scratch or use templates, as shown below.

![Ways of Creating Dashboards](/static/assets/getting-started/images/create-dashboard-options.png#width=30%)

To open the Dashboard Designer, click on the `Start from Scratch` option highlighted below.

![create dashboard using option in server](/static/assets/getting-started/images/createdashboard.png#width=30%)

Please enter the dashboard name and click `Add and Design` to open the Dashboard Designer.

![Dashboard name](/static/assets/getting-started/images/dashboard-name.png)

Now, the dashboard designer page will open, as shown in the image below.

![new dashboard](/static/assets/getting-started/images/newdashboard.png)

## Scrollable Dashboard
The default canvas size for a Bold BI dashboard is `48 columns x 24 rows`. You can add additional rows using the `Scrollable Dashboard` feature. Moreover, you can remove added rows that exceed the default row size.

![scrollable info](/static/assets/getting-started/images/scrollableInfo.png)

To add new rows, increase the row count and then click **Done**. If you attempt to add 40 or more rows, it may potentially impact the performance of the dashboard. In such cases, an alert message will be displayed, as shown in the image below.

![add rows](/static/assets/getting-started/images/update_rows.png)

When new rows are added, the dashboard will become scrollable, allowing for the addition of extra widgets, as shown in the following image.

![scrollable dashboard](/static/assets/getting-started/images/scroll_created.png)

## Connecting to data

To establish a data connection, you need to add a new data source using one of the supported data connection types, as described below.

### Setting up connection

Click the `Data Source` button in the configuration panel.

![data source button in configuration panel](/static/assets/getting-started/images/databutton.png)

Click `CREATE NEW` to create a new connection or use an existing data source by clicking `USE EXISTING` in the data source window.

![button for creating new connection](/static/assets/getting-started/images/datasourcebutton.png)

In the list of data sources, click on one of the listed data sources. For demonstration purposes, we have selected the `Microsoft SQL` connection type.

![list of available connections](/static/assets/getting-started/images/datasourcelist.png)

## Configuring tables and views

In the `NEW DATA SOURCE` configuration panel, please provide the connection type and its related details.

![filling required details](/static/assets/getting-started/images/sqldatabase.png)

Click on the `Connect` button in the `NEW DATA SOURCE` configuration panel.

![button for connecting data source](/static/assets/getting-started/images/Connectbutton.png)

Now, the following view will be displayed.

![tables and views for the connected database](/static/assets/getting-started/images/datadesignview.png)

The left pane displays the tables and views associated with the connected database. Drag the preferred table or view from the left pane and drop it into the center pane labeled `Drag and Drop table here....` Then, click `Update` in the bottom pane to view the data in the data preview grid, as shown below.

![dropped table in canvas](/static/assets/getting-started/images/virtualtable.png)

To automatically update the data in the data preview grid, enable the Toggle Option.

![dropped table in canvas](/static/assets/getting-started/images/datapreviewautoupdate.png)

The data type of each column will be represented nearby, as shown below.

![representing the datatype of each column](/static/assets/getting-started/images/datatypeicon.png)

Add more than one table, if you prefer, by following the same drag and drop operation. This is subjected to [joining](/working-with-data-sources/data-modeling/joining-table/) of tables.

## Transforming data

You can `Rename` a column as required by selecting the options in the `Settings` drop-down menu or by double-clicking the column to enable edit mode.

![icon for column settings](/static/assets/getting-started/images/columnsettings.png)

To remove an unwanted column, click the icon located on the left side of the respective column.

![removing unwanted column using icon](/static/assets/getting-started/images/removecolumn.png)

The column that has been removed will be represented as shown above. Clicking on it again will re-include that column for consideration.

To change the column type, click on the `Settings` icon of the corresponding column, navigate to `Change Column Type`, and select the preferred type for conversion.

![changing data type of column](/static/assets/getting-started/images/changecolumntype.png)

For supported column types and their equivalent convertible types, refer to the [formatting columns](/working-with-data-sources/data-modeling/formatting-column/) section.

You can add required [expression columns](/working-with-data-sources/data-modeling/configuring-expression-columns/) by creating them using built-in functions and existing columns. Click the option in the tools pane in data design view to open the expression dialog.

![option for opening expression dialog](/static/assets/getting-started/images/expressiondialog.png)

To filter the data that is not required in the dashboard, use the [data filters](/working-with-data-sources/data-modeling/configuring-data-filters/) option in the tools pane in data design view. Click the option to open the filter dialog.

![option for opening the filter dialog](/static/assets/getting-started/images/addfilters.png)

Click `Save` in the tools pane in the data design view to save the changes and navigate to the dashboard design view.

![button for saving the data source](/static/assets/getting-started/images/finishbutton.png)

## Creating dashboard

Now, the dashboard design view will open after the table has been successfully configured.

![new dashboard](/static/assets/getting-started/images/newdashboardwithdatasource.png)

## Adding a widget to design view

The left toolbox pane consists of data visualization, filtering, and miscellaneous widgets to design an interactive dashboard.

![list of widgets available for designing](/static/assets/getting-started/images/widgets.png)

Please click and drag the preferred widget from the toolbox, then drop it into the available space of the design area.

![types of comparison widgets](/static/assets/getting-started/images/comparisonwidgets.png)

The widget will only drop if you place it in the appropriate region. A blue border around the cell indicates that the targeted region is valid for dropping.

If you drop the widget in an invalid region where a widget or part of it already exists, a red border will be displayed to indicate the error.

![indication of error when dropping the widget in wrong region](/static/assets/getting-started/images/Errorindication.png)

If needed, you can resize the dropped widget by placing the focus over it and dragging the widget corner.

![resizing the widget using corners in widget](/static/assets/getting-started/images/resizingwidgets.png)

This will adjust the size of the widget. The blue border indicates the occupied cell range of the widget after resizing.

![resizing the widget using corners in widget](/static/assets/getting-started/images/resizedwidgets.png)

## Assigning data to widget

> **NOTE:**  This step is only applicable to widgets that do not belong to the miscellaneous category, except for the `Image` widget.

To bind data to a widget placed in the design area, focus on that widget.

![configuring widgets with data](/static/assets/getting-started/images/databindtowidgets.png)

Click the `Properties` button in the configuration panel to open the property pane. Switch to the `ASSIGN DATA` tab.

![tab for viewing the properties of widget](/static/assets/getting-started/images/propertiesbutton.png)

![tab for assigning data](/static/assets/getting-started/images/assigndata.png)

Here, you can configure the data for the widget in the designer canvas.

![Column chart](/static/assets/getting-started/images/columnchart.png)

The `ASSIGN DATA` tab displays the data configuration view. The numeric columns and numeric expressions are listed under the `Measures` section, while other column types and dimension expressions are listed under the `Dimensions` section.

![available sections in data configuration pane](/static/assets/getting-started/images/sections.png)

To assign data, select and drag a numeric column (measure element) or a numeric expression column from the `Measure` section and drop it in the `Y Values` section.

![dropping dimennsion column in values section](/static/assets/getting-started/images/measuretovalues.png)

The widget will then render the chart for the assigned values.

![rendering chart for Values](/static/assets/getting-started/images/datasrendering.png)

Click the `Settings` icon (highlighted) to open the [aggregation type](/visualizing-data/working-with-widgets/aggregating-value-columns-based-on-type/) drop-down list.

![icon for displaying available settings](/static/assets/getting-started/images/settingsicon.png)

Set the preferred aggregation type to compute the dropped measure column.

![types of aggregation in settings popup](/static/assets/getting-started/images/aggregationtype.png)

Select and drag a non-numeric column (dimension element) from the `Dimensions` section and drop it into the `Columns` section. This column will be used to measure the numeric columns that were dropped.

![dropping dimension column in column section](/static/assets/getting-started/images/draganddroptocolumns.png)

The widget will update accordingly.

![configured widget](/static/assets/getting-started/images/dataconfiguredwidget.png)

To group the added column element by a column, add the respective non-numeric column (dimension element) into the Rows section.

![dropping dimension column in row section](/static/assets/getting-started/images/dimensiontorow.png)

![rendering chart with row data](/static/assets/getting-started/images/chartwithrowdata.png)

If needed, you can format the measure column values by clicking the `Settings` icon and selecting the `Format` option to open the Measure `Measure Formatting` dialog.

![formatting option in settings popup](/static/assets/getting-started/images/formatvalues.png)

The `Measure Formatting` dialog will open as follows.

![dialog for formatting the measure](/static/assets/getting-started/images/measureformatting.png)

In the Measure Formatting dialog, make the necessary changes and click `OK` to save the changes or `Cancel` to discard them.

You can also filter the data for a particular widget using the `Measure Filter` or  `Dimension Filter`option in the `Settings` drop down menu.

### Measure Filter

![measure filtering option in settings popup](/static/assets/getting-started/images/widget-measure-filters.png)

The `Measure Filter` dialog will open as follows:

![dialog for applying measure filter](/static/assets/getting-started/images/measurefilters.png)

Refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/) to make required changes and click `Apply` to save the changes.

### Dimension Filter

![filtering option in settings popup](/static/assets/getting-started/images/widget-dimension-filters.png)

The `Dimension Filter` dialog will open as follows:

![dialog for applying filter](/static/assets/getting-started/images/dimensionfilters.png)

Refer to [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) to make required changes and click `OK` to save the changes.

You can customize the sorting behavior of dimension and measure fields in each widget using the `Sort` option shown in the `Settings` drop down menu.

### Dimension Sorting

![sorting option in settings popup](/static/assets/getting-started/images/widgetsorting-dimension.png)

The `Dimension Sorting` dialog will open as follows:

![window for advance sorting](/static/assets/getting-started/images/dimensionsort.png)

Refer to the [sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) to make required changes and click `Apply` to save the changes. 

## Configuring properties to widget

Navigate to the `PROPERTIES` pane in the properties tab.

![properties pane in design tab](/static/assets/getting-started/images/properties.png)

From the dashboard design tab, you can navigate to the properties pane by placing the focus on the widget as shown below.

Click the `Settings` in the top right corner of the widget. The focus moves to the data design view tab and opens the `PROPERTIES` pane.

![button for view the properties of the selected widget](/static/assets/getting-started/images/settingsiconwithwidget.png)

This pane holds some general settings and some specific to the widget. Configure the desired settings and refer to the `Properties Configuration` widget-wise for more details.

You can add more widgets by following the same procedure to create a dashboard as shown below.

Once you are done with the dashboard, `Publish` it by clicking the `Publish As` button in the tools pane.

![button for saving the created dashboard](/static/assets/getting-started/images/savebutton.png)

Click `Publish` in the dialog below.

![Publish dashboard](/static/assets/getting-started/images/publish-dialog.png)

Click preview at the top right of the tools pane to see the dashboard preview launched in the web browser page.

![button for launching preview in web browser](/static/assets/getting-started/images/previewbutton.png)

Now, the dashboard preview can be visualized like below.

![previewing dashboard in viewer](/static/assets/getting-started/images/webdashboardpreviewinviewer.png)

You can design any number of dashboards by following the steps given above.

### Publishing Dashboards with Comments
Once the datasource and widget are configured in the dashboard, there are two primary methods to publish the dashboard with comments.

#### Publish and Publish AS
When adding the dashboard using the `Publish` or `Publish As` option, you can provide comments in the designated comments text area. This allows you to include relevant notes or updates regarding the dashboard at the time of its initial publication.

![Publish As](/static/assets/getting-started/images/publish-as.png)

#### Publish With Comment
If you need to update an existing dashboard and wish to modify the comments, you can use the `Publish With Comment` option. This allows you to add new comments or update existing ones associated with the dashboard.

![Publish with comment](/static/assets/getting-started/images/publish-with-comment.png)

![Publish with comment Dialog](/static/assets/getting-started/images/publish-comment-dialog.png)

> **NOTE:**   If you choose to publish while updating the dashboard without using the `Publish With Comment` option, the previous version's comments will automatically be included in the version history comments.

## Related links
[Blog Post on Getting Started](https://www.boldbi.com/blog/create-business-dashboards-online-with-bold-bi)

[Blog Post on Features Overview](https://www.boldbi.com/blog/bold-bi-overview-a-complete-walkthrough-of-the-bold-bi-features-webinar-qa)