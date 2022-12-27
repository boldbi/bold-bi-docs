---
layout: post
title: View Data of Widget – Embedded BI | Bold BI Documentation
description: Learn how to view raw data bounded to a widget in and use its different export options in Bold BI Embedded dashboard.
canonical: "/cloud-bi/visualizing-data/working-with-widgets/view-data/"
platform: bold-bi
documentation: ug
---

# Viewing widgets underlying data

You can view the data bound to the widget by enabling the View data option under the Container Appearance section in the property panel.

![View data option](/static/assets/embedded/visualizing-data/working-with-widgets/images/viewdataoptionindesigner.png)

The selected widget will get a new menu for view data along with the export menu as shown in the following image.

![View data menu](/static/assets/embedded/visualizing-data/working-with-widgets/images/viewdataoptionincontrolmenu.png)

## View data

By default, the column values which is configured with the widget are displayed in view data. The **select column** button can be seen on the top right of the dialog.

![View data widget column](/static/assets/embedded/visualizing-data/working-with-widgets/images/viewdatadefaultcolumns.png)

When we click the **Select Column** button, a list box containing the list of the columns in the data source that is configured in widgets will be displayed.

![Select column list box](/static/assets/embedded/visualizing-data/working-with-widgets/images/viewdataSelectColumnListBox.png)

We can select one or more specific columns in the list box, then click the **Apply** button.
 
 ![Select specific column in listbox ](/static/assets/embedded/visualizing-data/working-with-widgets/images/viewdataSelectSpecificColumn.png#max-width=50%)

The values of the selected columns will be shown in the view data grid once you click the **Apply** button.

![Selected columns](/static/assets/embedded/visualizing-data/working-with-widgets/images/viewdataSelectedColumns.png)

By checking the **Select All** field, we can display all column values in the data source.

![Select all columns](/static/assets/embedded/visualizing-data/working-with-widgets/images/viewdataSelectAllColumn.png#max-width=50%)

We can also export the selected/all column(s) value into CSV or excel file by clicking the **Export** options.

![View data export](/static/assets/embedded/visualizing-data/working-with-widgets/images/viewdataexportmenu.png)

You will be able to see the fetched records count out of the total records on the popup, as shown.

![Total records count in view underlying data](/static/assets/embedded/visualizing-data/working-with-widgets/images/viewdatacountmessage.png)