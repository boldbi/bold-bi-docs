---
layout: post
title: Linking Dashboards and URLs – Embedded BI | Bold BI Learning
description: Learn how to link dashboard and URL to a widget and show it as drill-down report in Bold BI Embedded dashboard.
canonical: "/visualizing-data/working-with-widgets/linking-urls-and-dashboards/"
platform: bold-bi
documentation: ug

---

# Linking URLs in dashboards

URL linking allows you to link the dashboard with valid web URLs. 

You can link URLs to a visualization widget by enabling the `Enable Link` property. 

The `Enable Link` option is available in the `Properties` tab of the widgets.

![Link](/static/assets/visualizing-data/working-with-widgets/images/Link.PNG) 

By default, the `Enable Link` property will remain unchecked.

![Unchecked link property](/static/assets/visualizing-data/working-with-widgets/images/link1.PNG)

To enable linking, select the `Enable Link` checkbox.

![Checked link property](/static/assets/visualizing-data/working-with-widgets/images/Link1a.PNG)

Enter the Web URL in the `URL` text box. If you click on the column names listed in the `Append Column` name list, it will be appended to the URL entered in the URL text box.

![URL](/static/assets/visualizing-data/working-with-widgets/images/Linking06.PNG)

For the `Grid widget`, you can get a `URL` based on `Row` and `Column`.

### Row

Enter the Web URL in the `URL` text box. If you click on the column names listed in the `Append Column` name list, it will be appended to the URL entered in the URL text box.

![Linking for grid](/static/assets/visualizing-data/working-with-widgets/images/Linking07.PNG)

You can preview the linked URL using the `URL preview` option. If you click the preview URL link, it will be opened in a browser. 

### Column

You can select the column.

![Select column](/static/assets/visualizing-data/working-with-widgets/images/Linking08.PNG)

 Choose the field from the `Choose Field` property listed in the combo box.

![Choose field property](/static/assets/visualizing-data/working-with-widgets/images/Linking09.PNG)

Add the web `Url` in the URL text box. 

![Linking URL](/static/assets/visualizing-data/working-with-widgets/images/LinkingURL.PNG)

![Add URL](/static/assets/visualizing-data/working-with-widgets/images/LinkingURL1.PNG)

Click the Add button shown below to add the field.

![Add button](/static/assets/visualizing-data/working-with-widgets/images/Linkingadd.PNG)

Now, the field will be added with the URL.

![Field added](/static/assets/visualizing-data/working-with-widgets/images/Linking10.PNG)

## Dashboard Parameter support in URL Linking
URL Linking allows you to use both the [Dashboard Parameter](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameters/) and [Default Parameter](/working-with-data-sources/dashboard-parameter/change-the-dashboard-parameter-value-in-url/#default-parameters). You can create a dynamic link based on the current domain, dashboard, and category by referring to the info icon placed at the right side of the URL text box.

**Syntax** : `@{{:CURRENT.SITEURL}}/dashboards?dashboardName={dashboard_name}&categoryName={category_name}`

  - `@{{:CURRENT.SITEURL}}` - This `Default parameter` will automatically populate the URL of the current site.
  - `{dashboard_name}` - Specify the name of the dashboard you want to link.
  - `{category_name}` - Specify the name of the category under which the dashboard has been published.

For Example, the dynamic URL can be created as `@{{:CURRENT.SITEURL}}/dashboards?dashboardName=Sales Analysis Dashboard&categoryName=Sales`.

Refer the URL info as shown in following image.

![Dynamic URL](/static/assets/visualizing-data/working-with-widgets/images/LinkingURLInfo.png)

Based on the above syntax, create the dynamic linking URL using the `Default parameter` and `Dashboard Parameter` as shown in the image.

![Dashboard Parameter](/static/assets/visualizing-data/working-with-widgets/images/LinkingParametersInURL.png)

## Advanced Url Linking

The linked url's target can be changed with the help of a drop down as shown in the following image.
![Advanced target](/static/assets/visualizing-data/working-with-widgets/images/LinkingAdvancedTarget.png)

The target can be changed from the `New tab`, `Same page`, `Current frame`, `Parent frame`, `Pop up` and  `New Window`.
<table>
<tr>
<td><b>Target</b></td>
<td><b>Description</b></td>
</tr>
<tr>
<td>New tab</td>
<td>Opens the linked document in a new tab or window.</td>
</tr>
<tr>
<td>Same page</td>
<td>Opens the linked document in the full body of the window in which it is clicked.</td>
</tr>
<tr>
<td>Current frame</td>
<td>Opens the linked document in the same iframe as it was clicked.</td>
</tr>
<tr>
<td>Parent frame</td>
<td>Opens the linked document in the parent iframe from which the current frame is generated.</td>
</tr>
</table>

### Pop up
This target type helps you to open the linked document inside a pop-up window. The title of the same pop-up window can also be set in the input box provided as shown in the following image.

![Advanced title](/static/assets/visualizing-data/working-with-widgets/images/LinkingAdvancedTitle.png)

When you open the linked document, it will appear as shown in the following image.

![Advanced popup](/static/assets/visualizing-data/working-with-widgets/images/LinkingAdvancedPopup.png)

### New Window
This target type helps you to open the linked document in a separate browser window. The specific `Height` and `Width` of the required window can be updated as shown in the following image.

![Advanced dimensions](/static/assets/visualizing-data/working-with-widgets/images/LinkingAdvancedDimensions.png)

When you open the linked document with the above dimensions, it will appear as shown in the following image.

![Advanced window](/static/assets/visualizing-data/working-with-widgets/images/LinkingAdvancedWindow.png)

## Encryption query Parameter

This property, `Encrypt Parameters`, allows you to encrypt the filter parameter that will be used in the URL text area under the `Link` category in the `Properties` tab of the widget.

To enable this property, select the `Encrypt Parameters` checkbox as shown in the following image.

![Advanced window](/static/assets/visualizing-data/working-with-widgets/images/encryption-parameter.png#max-width=50%)

Preview the dashboard, then click the `Link` option from the widget. After opening the linked dashboard, it will appear as shown in the following image.

![Advanced window](/static/assets/visualizing-data/working-with-widgets/images/linking-encryption.png#max-width=100%)

![Advanced window](/static/assets/visualizing-data/working-with-widgets/images/encryption-result.png#max-width=100%)