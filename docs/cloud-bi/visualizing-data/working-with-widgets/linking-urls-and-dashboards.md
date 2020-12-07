---
layout: post
title: Linking Dashboards and URLs – Cloud BI | Bold BI Learning
description: Learn how to link dashboard and URL to a widget and show it as drill-down report in Bold BI Cloud dashboard.
platform: bold-bi
documentation: ug
---

# Linking URLs in dashboards

URL linking allows you to link the dashboard with valid web URLs. 

You can link URLs to a visualization widget by enabling the `Enable Link` property.

The `Enable Link` option is available in the `Properties` tab of the widgets.

![Link](/static/assets/cloud/visualizing-data/working-with-widgets/images/Link.PNG) 

By default `Enable Link` property will remain unchecked.

![Unchecked link property](/static/assets/cloud/visualizing-data/working-with-widgets/images/link1.PNG)

To enable linking select the `Enable Link` checkbox.

![Checked link property](/static/assets/cloud/visualizing-data/working-with-widgets/images/Link1a.PNG)

Enter the Web URL in the `URL` text box. If you click on the column names listed in the `Append Column` name list , it will be appended to the URL entered in the URL text box.

![URL](/static/assets/cloud/visualizing-data/working-with-widgets/images/Linking06.PNG)

For `Grid widget`, you can get `URL` based on `Row` and `Column`.

### Row

Enter the Web URL in the `URL` text box. If you click on the column names listed in the
`Append Column` name list , it will be appended to the URL entered in the URL text box.

![Linking for grid](/static/assets/cloud/visualizing-data/working-with-widgets/images/Linking07.PNG)

You can preview the linked URL using the `URL preview` option. If you click the preview URL link,it will be opened in a browser.

### Column

You can select the column.

![Select column](/static/assets/cloud/visualizing-data/working-with-widgets/images/Linking08.PNG)

 Choose the field from `Choose Field` property listed in the combo box.

![Choose field property](/static/assets/cloud/visualizing-data/working-with-widgets/images/Linking09.PNG)

Add the web `Url` in the URL text box. 

![Linking URL](/static/assets/cloud/visualizing-data/working-with-widgets/images/LinkingURL.PNG)

![Add URL](/static/assets/cloud/visualizing-data/working-with-widgets/images/LinkingURL1.PNG)

Click Add button shown as below to add the field.

![Add button](/static/assets/cloud/visualizing-data/working-with-widgets/images/Linkingadd.PNG)

Now, the field will be added with URL.

![Field added](/static/assets/cloud/visualizing-data/working-with-widgets/images/Linking10.PNG)

## Advanced Url Linking

The linked url's target can be changed with the help of a drop down as shown in the following image.
![Advanced target](/static/assets/cloud/visualizing-data/working-with-widgets/images/LinkingAdvancedTarget.png)

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
This target type helps you to open the linked document inside a pop up window. The title of the same pop window can also be set in the input box provided as shown in the following image.

![Advanced title](/static/assets/cloud/visualizing-data/working-with-widgets/images/LinkingAdvancedTitle.png)

On opening the linked document, it will open as shown in following image.

![Advanced popup](/static/assets/cloud/visualizing-data/working-with-widgets/images/LinkingAdvancedPopup.png)

### New Window
This target type helps you to open the linked document in a separate browser window. The specific `Height` and `Width` of the required window can be updated as shown in the following image.

![Advanced dimensions](/static/assets/cloud/visualizing-data/working-with-widgets/images/LinkingAdvancedDimensions.png)

On opening the linked document with the above dimensions, it will open as show in in the following image.

![Advanced window](/static/assets/cloud/visualizing-data/working-with-widgets/images/LinkingAdvancedWindow.png)


