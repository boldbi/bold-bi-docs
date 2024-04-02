---
layout: post
title: Managing Dashboard Views – Embedded BI | Bold BI Docs
description: Learn how to open, add, update, share, delete dashboard views and mark dashboard view as public in Bold BI Embedded.
canonical: "/managing-resources/manage-dashboards/manage-dashboard-views/" 
platform: bold-bi
documentation: ug

---

# Manage Dashboard Views

This section explains how to open, add, update, share, and delete Dashboard views in Bold BI.

Dashboard Views that are accessible to the user, depending on the user’s permission, are displayed on the Dashboards page.

![Manage Dashboard Views](/static/assets/managing-resources/manage-dashboards/images/Launch-Dashboard-Views-From-Server.png)

## Open Dashboard Views
Dashboard Views are opened in our embedded Dashboard Viewer itself as Dashboards.
		
## Add Dashboard Views
* If the user has the permission to `Read specific dashboards`, then they can create Dashboard Views in that dashboard.
* The created Dashboard Views cannot be updated or deleted by other users.
* The owner of the Dashboard View only has permission to share the Dashboard View.
* The shared Dashboard Views can be modified and saved as another view, as users cannot modify the original ones.

### Steps to add a Dashboard View

1. Filters applied in the dashboards are summarized in the `Filter Overview` section under `Applied Filters`.

    To save the filters, click on the `Save` icon. A popup will open to type the name for the Dashboard View and submit it.

    ![Create Dashboard View](/static/assets/managing-resources/manage-dashboards/images/Add-Dashboard-View.png)    
    
    ![Created Dashboard View](/static/assets/managing-resources/manage-dashboards/images/Added-Dashboard-View.png#width=65%)

2. The views can be set as default while saving them by enabling the `Mark as Default` option in the save view dialog. Learn more about default views [here](/site-administration/dashboard-settings/default-views/).

3. Saved Dashboard Views are shown in the Dashboard Views panel by clicking the `Views` icon.

   ![Views icon](/static/assets/managing-resources/manage-dashboards/images/views-icon.png)
  
   ![View Dashboard Views](/static/assets/managing-resources/manage-dashboards/images/View-Saved-Dashboard-Views.png)

4. Click on the `saved views` shown in the Dashboard Views panel to display the filters applied in that view as an accordion.
   ![View Dashboard Views](/static/assets/managing-resources/manage-dashboards/images/applied-filters-accordion.png)

> **NOTE:**  `Read, Write, and Delete` permissions for the `specific Dashboard View` are added to the users by the person who created the Dashboard View.

## Share Dashboard Views
Dashboard views can be shared with users who have permission for the `specific dashboard`.

### Steps to share a Dashboard View

1. Click on the `Share Permissions` option in the dashboard views list.

	![Manage View Permission](/static/assets/managing-resources/manage-dashboards/images/manage-view-permission-context.png)

2. Type the username or group name with whom you want to share the `dashboard view`.

	![Share View Dashboard](/static/assets/managing-resources/manage-dashboards/images/share-dashbaord-view.png#width=65%)

3. After selecting the users or groups, click on `Share`.

	![Add View Permission](/static/assets/managing-resources/manage-dashboards/images/add-view-permission.png#width=65%)
	
> **NOTE:**  Only the user who created the dashboard view can share it with other Bold BI users.

### Remove Permission

Only the user who created the dashboard view can remove the shared dashboard view permissions.

1. Click the `Manage Access` button to see the users or groups and their permissions.

	![Manage Access View](/static/assets/managing-resources/manage-dashboards/images/manage-access-view.png#width=65%)

2. Then, remove the permissions using the `Remove` option in the `Actions` column of each permission.

    ![Remove View Permission](/static/assets/managing-resources/manage-dashboards/images/remove-view-permission.png#width=55%)
	
## Make Public

Dashboard Views can be marked as public to allow anyone to access it. 

Click the `change` button to select the access permission.


![Make Public Dashboard View](/static/assets/managing-resources/manage-dashboards/images/change-permission-access.png#width=65%)

After selecting the access permission, click the `Change` button.

![Make Public Dashboard View](/static/assets/managing-resources/manage-dashboards/images/Make-Public-Dashboard-View.png#width=65%)
		
## Delete Dashboard Views

Choose the `Delete` option to remove the Dashboard View from Bold BI.

![Delete Dashboard View](/static/assets/managing-resources/manage-dashboards/images/Delete-Dashboard-View.png)

## Set a default view for the dashboard

The dashboard view can be set as the default view in two ways: while saving the view or from the views list for the dashboard by following these steps:

1. Select any view from the list of available dashboard views and click `Set as Default` option.

    ![Set default View](/static/assets/managing-resources/manage-dashboards/images/set-default-icon.png#width=65%)

2. If the dashboard has no default views yet and you click the `Set as Default` option, then the respective view will be set as the default view for the dashboard and a success message will be displayed.

    ![Set default View](/static/assets/managing-resources/manage-dashboards/images/set-success.png)

3. If a default view already exists for the dashboard, a confirmation dialog box will be opened and proceed with `Yes`.

    ![Set default View](/static/assets/managing-resources/manage-dashboards/images/multiple-default.png#width=65%)

4. After setting the dashboard view as the default for the dashboard, the text `(default)` will be appended with the respective view in the views listing panel.

    ![Set default](/static/assets/managing-resources/manage-dashboards/images/default-view.png#width=65%)

> **NOTE:** To set a dashboard view as the default view for the dashboard, the `Default view` option in `Dashboard settings` must be enabled. Learn more about default views [here](/site-administration/dashboard-settings/default-views/).

## Remove a default view for the dashboard

The default view of the dashboard can be removed to view the dashboard with its initial view by following these steps:

1. Click `Remove as Default` option.

    ![Remove default View](/static/assets/managing-resources/manage-dashboards/images/remove-icon.png)

2. Proceed with `Yes` in the opened dialog box.

    ![Remove default View](/static/assets/managing-resources/manage-dashboards/images/remove-default.png#width=65%)