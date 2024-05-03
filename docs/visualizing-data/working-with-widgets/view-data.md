---
layout: post
title: View Data of Widget – Embedded BI | Bold BI Documentation
description: Learn how to view raw data bounded to a widget in and use its different export options in Bold BI Embedded dashboard.
canonical: "/visualizing-data/working-with-widgets/view-data/"
platform: bold-bi
documentation: ug
---

# Viewing widgets underlying data

You can view the data bound to the widget by enabling the View data option under the Container Appearance section in the property panel.

![View data option](/static/assets/visualizing-data/working-with-widgets/images/viewdataoptionindesigner.png)

The selected widget will have a new menu for viewing data, along with the export menu, as shown in the following image.

![View data menu](/static/assets/visualizing-data/working-with-widgets/images/viewdataoptionincontrolmenu.png)

## View data

By default, the column values configured with the widget are displayed in view data. The **Select Column** button can be seen at the top right of the dialog.

![View data widget column](/static/assets/visualizing-data/working-with-widgets/images/viewdatadefaultcolumns.png)

When we click the **Select Column** button, a list box containing the columns in the data source configured in widgets will be displayed.

![Select column list box](/static/assets/visualizing-data/working-with-widgets/images/viewdataSelectColumnListBox.png)

We can select one or more specific columns in the list box, then click the **Apply** button.
 
 ![Select specific column in listbox ](/static/assets/visualizing-data/working-with-widgets/images/viewdataSelectSpecificColumn.png#max-width=50%)

The values of the selected columns will be shown in the view data grid once you click the **Apply** button.

![Selected columns](/static/assets/visualizing-data/working-with-widgets/images/viewdataSelectedColumns.png)

By checking the **Select All** field, we can display all column values in the data source.

![Select all columns](/static/assets/visualizing-data/working-with-widgets/images/viewdataSelectAllColumn.png#max-width=50%)

We can also export the selected/all column(s) value into a CSV or Excel file by clicking the **Export** options.

![View data export](/static/assets/visualizing-data/working-with-widgets/images/viewdataexportmenu.png)

You will be able to see the fetched records count out of the total records on the popup, as shown.

![Total records count in view underlying data](/static/assets/visualizing-data/working-with-widgets/images/viewdatacountmessage.png)

## View Data Customization
The `View Data Actions` section in the property panel provides options to enable or disable the exporting and column selection features inside the view data dialog using the `Allow Exporting` and `Allow Column Selection` settings. By default, both options are enabled.

When `Allow Exporting` and `Allow Column Selection` are disabled, the `Export` and `Select Column` options in the View underlying data will be hidden, as shown below.

![View data actions](/static/assets/visualizing-data/working-with-widgets/images/viewdataaction.png)

![View data actions Result](/static/assets/visualizing-data/working-with-widgets/images/viewdataactionresult.png)