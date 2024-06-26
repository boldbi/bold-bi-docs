---
layout: post
title: Enable access for custom JSON in data source | Bold BI
description: Learn the steps how a user to get access for the custom JSON data with the PostgreSql data source while preparing the dashboard using Bold BI.
canonical: "/faq/how-to-access-the-custom-json-data-using-postgresql-data-source/"
platform: bold-bi
documentation: ug
---

# How to give access for custom JSON using PostgreSql data source?

The Bold BI application allows you to access custom JSON data using a PostgreSQL data source by following these steps.

## Steps to access custom JSON data in Bold BI

1.	Refer to the [Connecting Bold BI to PostgreSQL data source documentation](/working-with-data-sources/data-connectors/postgresql/#connecting-bold-bi-to-postgresql-data-source) for successful connection.

2.	Drag and drop the table that has the JSONB data type in Bold BI, as displayed in the image below.

    ![Drag table](/static/assets/faq/images/drag-table.png)
	
    >**NOTE:** The JSONB data type will be hidden in the `data preview`, but it can be accessed by creating expressions in Bold BI.

3.	Click `Save` to save the data source with a relevant name in order to proceed with designing the dashboard.
    
	![Save option](/static/assets/faq/images/save-option.png)
	 
    >**Note:** You can also create expressions on the data source page itself: <br />
    [Configuring Expression Columns](/working-with-data-sources/data-modeling/configuring-expression-columns/)

4.	Drag and drop the `Grid` widget and click on the `Assign data` section to start creating expressions.

    ![Grid widget](/static/assets/faq/images/grid-widget.png)
	
5.	Click on the `Add Expression` button as shown in the following image.
 
    ![Expression button](/static/assets/faq/images/expressions-button.png)
	
6. Then add the JSON path value in the Expression editor as shown in the following image and click `Save.`

	![Adding expressions](/static/assets/faq/images/add-expressions.png#max-width=65%)

    <table>
    <tr>
    <th>
    <b>Operator</b>
    </th>
    <th>
    <b>Usage</b>
    </th>
    </tr>
    <tr>
    <td>
    -&gt;
    </td>
    <td>
    The operator -&gt; returns the JSON object field by key.
    </td>
    </tr>
    <tr>
    <td>
    -&gt;&gt;
    </td>
    <td>
    The operator -&gt;&gt; returns the JSON object field by key as text.
    </td>
    </tr>
    <tr>
    <td>
    Index
    </td>
    <td>
    Index(0) is used to filter data from array without using a key.
    </td>
    </tr>
    </table>
	
7.	Assign values to the widget as shown in the following image.

    ![Assign values to widget](/static/assets/faq/images/assign-values.png#max-width=45%)
	
8.	Now, you can view the JSONB data retrieved from the PostgreSQL server and visualize it in Bold BI as shown in the following image.

    ![View JSONB data in widget](/static/assets/faq/images/grid-jsonb-data.png)
	
9.  You can also access the JSONB data using queries in a code view mode. Switch to the code view by enabling the toggle option in the tools pane in the data design view, as shown in the following image.

    ![Code view toggle](/static/assets/faq/images/code-view-mode.png)

10. In the Query Editor Window, you can enter the query that helps access JSONB data. After entering your query, click the `Run` icon in the tools pane.

    ![Altered query](/static/assets/faq/images/altered-query.png)

11. You can view the data for your query at the bottom of the Query Editor by clicking `Update`.

    ![Preview data](/static/assets/faq/images/jsonb-data.png)
