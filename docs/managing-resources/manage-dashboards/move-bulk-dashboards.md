---
layout: post
title: Moving Bulk Dashboards – Manage Dashboards | Bold BI Docs
description: Learn how to move multiple dashboards between categories, including required permissions, renaming rules, and bulk move error handling.
canonical: "/managing-resources/manage-dashboards/move-bulk-dashboards/" 
platform: bold-bi
documentation: ug
---

# Moving bulk Dashboards
This section explains how to move multiple dashboards from one category to another. It covers the prerequisites, required permissions, and step-by-step instructions for completing the bulk dashboard move process.

## Bulk Move Requirements
To move dashboards between categories, ensure the following requirements are met:

1. The user must have permission to create dashboards and manage categories.

2. At least two categories must be available in the system to perform the bulk move operation and user should have access for those categories.

3. The source category must contain at least one dashboard. If no dashboards are available, the **Move Dashboards** option will be disabled.


## Steps to Move Bulk Dashboards

Follow the steps below to move dashboards in bulk:

1. In the **Category List** section, click the **Action** button for the required category. This will display the available actions for that category.

![Category Options](/static/assets/managing-resources/manage-dashboards/images/Category-Options.png#width=55%)

2. Select the **Move Dashboards** option. This will open the dialog box where you can choose the destination category and dashboards to be moved.

![Move Bulk Dashboards Option](/static/assets/managing-resources/manage-dashboards/images/Move-BULK-Dashboards.png#width=55%)

3.	In the dialog box, select the **Destination Category** where the dashboards should be moved.

![Destination Category](/static/assets/managing-resources/manage-dashboards/images/Choose-Destination_Category.png#width=55%)

4.	Select the dashboards you want to move.

![Choose Dashboards](/static/assets/managing-resources/manage-dashboards/images/Choose-Dashboards.png#width=55%)

> **Note :** You can select any number of dashboards available in the source category.

5. To manage your selected dashboards, open the Choose Dashboard dropdown and select the dashboards you want to add or deselect the ones you want to remove. You can also click the **X** icon next to a dashboard name to remove it individually, or use the **Clear** option to remove all selected dashboards at once.

![Choose Dashboard DropDown](/static/assets/managing-resources/manage-dashboards/images/Selected-dashboard-dropdown.png#width==55%)

![Remove Dashboard](/static/assets/managing-resources/manage-dashboards/images/remove-dashboard.png#width=55%)

![Clear Option](/static/assets/managing-resources/manage-dashboards/images/clear-option.png#width=55%)

6.	To rename a selected dashboard before moving, click **Edit**. The dashboard name becomes editable. Enter a new name and save the changes.

![Edit Dashboard Name](/static/assets/managing-resources/manage-dashboards/images/edit-dashboard-name.png#width=55%)

> **Note :** The dashboard name must be unique in the destination category.

![Error For Duplicate Names](/static/assets/managing-resources/manage-dashboards/images/Move-Bulk-Error.png#width=55%)

> **Note :** If another user has renamed a dashboard to the same name during your operation, an error message will appear: **Name already exists in destination. Please rename and move. Another user may have just used this name.**

![Error For Duplicate Names](/static/assets/managing-resources/manage-dashboards/images/Dashboard-Name_Error-msg.png#width=55%)

7. Click **Move** to move the selected dashboards to the destination category.

![Move Dashboard](/static/assets/managing-resources/manage-dashboards/images/Move-bulk-Dashboard-button.png#width=55%)

8. If the dashboard move process fails or is only partially completed, an error pop-up will appear. It will display the number of dashboards successfully moved and the number of dashboards that failed. A downloadable CSV file will also be provided, containing failed dashboard details and the corresponding failure messages.

![Error Pop Up](/static/assets/managing-resources/manage-dashboards/images/Error-popup-BulkMove.png#width=55%)

![CSV file](/static/assets/managing-resources/manage-dashboards/images/Error-popup-CSV-file.png#width=55%)


## Create Dashboard

For more information on how to create dashboards, refer to the [Add Dashboards](/managing-resources/manage-dashboards/add-dashboards/) documentation.
