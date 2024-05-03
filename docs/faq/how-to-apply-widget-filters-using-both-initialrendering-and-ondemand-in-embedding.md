---
layout: post
title: Apply Widget Filters for Dashboard in JS Embedding | Bold BI Docs
description: Learn how to configure and apply widget filters for both the initial rendering and on-demand action of a dashboard in JavaScript embedding using Bold BI.
platform: bold-bi
documentation: ug
---

# How to apply filters for widgets using both initial rendering and on-demand in embedding

In JavaScript-based embedding, we have added support for applying filters to specific widgets. This page will explain how to apply filters to multiple widgets based on different formats such as string and date using the following two methods:

* Initial rendering
* On-demand

## Steps to follow for applying filters into widgets,

1. Please [download](https://github.com/boldbi/samples/tree/master/Scenario%20Based%20Samples/Widget%20Filtering%20Sample) the ASP.NET Core sample for a better understanding of the widget filtering support.

2. In the Bold BI Server, load the `Agent Activity Dashboard` from the Sample Dashboards.

    ![LoadSampleDashboard](/static/assets/faq/images/load_sample_dashboard_inserver.png)

3. By default, the `Agent Activity Dashboard` has one master widget (`Date`). For demonstration purposes, we need to designate the `Avg. Resolution Time by Event` as a master widget by using the [ActAsMasterWidget](/visualizing-data/visualization-widgets/bar-chart/#filter) property in the widget settings. Additionally, we need to enable the [MultiSelect](/visualizing-data/visualization-widgets/list-box/#basic-settings) property in the widget settings to allow for filtering multiple values in a single widget.

4. In the downloaded application, you can find the EmbedProperties class file in the Models folder. Provide your server details in the `EmbedProperties.cs` file, where you should set the `Agent Activity Dashboard` path to the DashboardPath property as shown in the image below.

    ![AddEmbedProperties](/static/assets/faq/images/embed_properties_widgetfilter.png)

    <meta charset="utf-8"/>
    <table>
    <tbody>
    <tr>
        <td align="left">RootUrl</td>
        <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, http://demo.boldbi.com/bi).</td>
    </tr>
    <tr>
        <td align="left">SiteIdentifier</td>
        <td align="left">For Bold BI Enterprise edition, it should be like site/site1. For Bold BI Cloud, it should be empty string.</td>
    </tr>
    <tr>
        <td align="left">Environment</td>
        <td align="left">For Bold BI application environment. (If Cloud, it should be like `cloud`, if Enterprise, it should be like `enterprise`).</td>
    </tr>
    <tr>
        <td align="left">UserEmail</td>
        <td align="left">UserEmail of the Admin in your Bold BI, which would be used to get the dashboards list.</td>
    </tr>
    <tr>
        <td align="left">Password</td>
        <td align="left">Password of the Admin in your Bold BI, which would be used to get the dashboards list.</td>
    </tr>
    <tr>
        <td align="left">DashboardPath</td>
        <td align="left">Dashboard Path which you want to render in the application.</td>
    </tr>
   <tr>
        <td align="left">EmbedSecret</td>
        <td align="left">Get your EmbedSecret key from the Embed tab by enabling the <code>Enable embed authentication</code> in the <a href='/site-administration/embed-settings/'>Administration page</a>.</td>
    </tr>
    </tbody>
    </table>

5. After running the application, the specific widgets on the dashboard are filtered by default rendering as shown below.

    ![WidgetFilterSample](/static/assets/faq/images/widget_filter_full_view_sample.png)

## How the sample works

1. Before rendering the dashboard, we retrieved the widget collection details of that dashboard using REST API in the GetWidgets() method in this application. Please check this [link](/server-api-reference/v4.0/api-reference/#operation/Dashboards_GetWidgets) for more details.

2. We could retrieve the widget details by conditioning with specific widget names (such as `Average Resolution Time by Event` and `Date`) from the widget collections as shown below.

    ```js
    function ListWidgets(data) {
    if (typeof (data) != "undefined" && data != null) {
        data.forEach(function (element) {
            if (element.WidgetInfo.DisplayName == "Date") {
                dateWidgetId = element.WidgetInfo.Id;
            }
            if (element.WidgetInfo.DisplayName == "Avg. Resolution Time by Agent") {
                dimensionWidgetId = element.WidgetInfo.Id;
            }
        });
    }
    renderDashboard(dimensionWidgetId, dateWidgetId);
    }
    ```

3. For the `initial rendering`, we could pass the specific widget ID in [getWidgetInstance()](/embedding-options/embedding-sdk/embedding-api-reference/methods/#getwidgetinstance) to retrieve the widget instance and the corresponding filter values in [setFilterParameters()](/embedding-options/embedding-sdk/embedding-api-reference/methods/#setfilterparameters) to filter the widgets with the specified filter values in renderDashboard().

4. The default string values for `Agent_1`, `Agent_5`, and `Agent_7`, along with the default date range of `1/1/2022` to `6/30/2022`, are filtered in the `Avg. Resolution Time by Agent` and `Date` widgets, respectively.
   ```js
    function renderDashboard(dimensionWidgetId, dateWidgetId) {
        this.dashboard = BoldBI.create({
            serverUrl: rootUrl + "/" + siteIdentifier,
            dashboardPath: dashboardPath, 
            embedContainerId: "dashboard",
            embedType: BoldBI.EmbedType.Component,
            environment: BoldBI.Environment.Enterprise,
            expirationTime: 100000,
            authorizationServer: {
                url: authorizationServerUrl
            }
        });
        this.dashboard.loadDashboard();
        /*Dimension type widget filter*/
        var dimensionFilterValues = ["Agent_1", "Agent_5", "Agent_7"];//values to be filtered in the dimension type widget.
        this.dashboard.getWidgetInstance(dimensionWidgetId).setFilterParameters(dimensionFilterValues);//filter the values while initial rendering.
        /*Date type widget filter*/
        var dateFilterValues = ["1/1/2022", "6/30/2022"];//date range to be filtered in the date type widget.
        this.dashboard.getWidgetInstance(dateWidgetId).setFilterParameters(dateFilterValues);//filter the values while initial rendering.
    };
    ```

    ![InitialRendering](/static/assets/faq/images/initial_action_widgetfilter.png)

5. For the `on-demand` case, we could pass the specific widget id in [getWidgetInstance()](/embedding-options/embedding-sdk/embedding-api-reference/methods/#getwidgetinstance) to retrieve the widget instance and pass the respective filter values in [setFilterParameters()](/embedding-options/embedding-sdk/embedding-api-reference/methods/#setfilterparameters) to set the filter values in the widget instance. Then, call the `updateWidgetFilters()` method to reflect the applied filter values in the dashboard using the dashboard instance.

6. By clicking the `Apply Dimension Filters` button, the on-demand new filter values `Agent_4`, `Agent_6`, and `Agent_8` are applied to the `Avg. Resolution Time by Agent` widget. The ondemandDimensionFilters() method below will be triggered to apply the dimension filters.

    ```js
    function ondemandDimensionFilters() {
        var instance = BoldBI.getInstance("dashboard");// "dashboard" -> embed container id.
        var dimensionValue = ["Agent_4", "Agent_6", "Agent_8"]; // values to be filtered in the widget.
        instance.getWidgetInstance(dimensionWidgetId).setFilterParameters(dimensionValue); 
        instance.updateWidgetFilters("dashboard"); 
    }
    ```

    ![DimensionFilterApply](/static/assets/faq/images/applied_dimension_filters_ondemand.png)

7. By clicking the Apply Date Filters button, the on-demand date range of `7/1/2022` to `12/31/2022` is applied to the `Date` widget. The ondemandDateFilters() method below will be triggered to apply the date filters.

    ```js
     function ondemandDateFilters() {
        var instance = BoldBI.getInstance("dashboard");// "dashboard" -> embed container id.
        var dateValue = ["7/1/2022", "12/31/2022"];// values to be filtered in the widget.
        instance.getWidgetInstance(dateWidgetId).setFilterParameters(dateValue);
        instance.updateWidgetFilters("dashboard");
    }
    ```
    ![DateFilterApply](/static/assets/faq/images/applied_date_filters_ondemand.png)