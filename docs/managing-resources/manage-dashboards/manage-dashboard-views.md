---
layout: post
title: Managing Dashboard Views – Embedded BI | Bold BI Docs
description: "Learn how to open, add, update, share, and delete dashboard views in Bold BI Embedded, mark a view as public, and create schedules with dashboard views."
canonical: "/managing-resources/manage-dashboards/manage-dashboard-views/" 
platform: bold-bi
documentation: ug

---

# Manage Dashboard Views

This section explains how to open, add, update, share, and delete dashboard views and create schedules with dashboard views in Bold BI.
Dashboard views that are accessible to the user, depending on the user’s permission, are displayed on the Dashboards page.

![Manage Dashboard Views](/static/assets/managing-resources/manage-dashboards/images/Launch-Dashboard-Views-From-Server.png)

## Open Dashboard Views
Dashboard views are opened in the embedded Dashboard Viewer itself as dashboards.
		
## Add Dashboard Views
* If the user has the permission to `Read specific dashboards`, then they can create dashboard views in that dashboard.
* The created dashboard views cannot be updated or deleted by other users.
* The owner of the dashboard view only has permission to share the dashboard view.
* The shared dashboard views can be modified and saved as another view, as users cannot modify the original ones.

### Steps to Add a Dashboard View

1. Filters applied in the dashboards are summarized in the `Filter Overview` section under `Applied Filters`.

    To save the filters, click on the `Save` icon. A popup opens to type the name for the dashboard view and submit it.

    ![Create Dashboard View](/static/assets/managing-resources/manage-dashboards/images/Add-Dashboard-View.png)    
    
    ![Created Dashboard View](/static/assets/managing-resources/manage-dashboards/images/Added-Dashboard-View.png#width=65%)

2. The views can be set as default while saving them by enabling the `Mark as Default` option in the save view dialog. Learn more about [Default Views](/site-administration/dashboard-settings/default-views/).

3. Saved dashboard views are shown in the Dashboard Views panel by clicking the `Views` icon.

   ![Views icon](/static/assets/managing-resources/manage-dashboards/images/views-icon.png)
  
   ![View Dashboard Views](/static/assets/managing-resources/manage-dashboards/images/View-Saved-Dashboard-Views.png)

4. Click on the `saved views` shown in the Dashboard Views panel to display the filters applied in that view as an accordion.
   ![View Dashboard Views](/static/assets/managing-resources/manage-dashboards/images/applied-filters-accordion.png)

> **NOTE:**
> 1. `Read, Write, and Delete` permissions for the `specific Dashboard View` are added to the users by the person who created the dashboard view.
> 2. Refer to this [link](/visualizing-data/working-with-widgets/saving-user-interacted-widgets/) to configure and save the `Interaction Widgets` to `Dashboard Views`.

## Create a Schedule with Dashboard Views

Dashboard views can be scheduled to export content based on time intervals or when certain threshold conditions are met. For more information on utilizing views in dashboard export scheduling, please refer [here] (/managing-resources/manage-schedules/)

## Share Dashboard Views
Dashboard views can be shared with users who have permission for the `specific dashboard`.

### Steps to Share a Dashboard View

1. Click on the `Share Permissions` option in the dashboard views list.

	![Manage View Permission](/static/assets/managing-resources/manage-dashboards/images/manage-view-permission-context.png)

2. Type the username or group name with whom you want to share the `dashboard view`.

	![Share View Dashboard](/static/assets/managing-resources/manage-dashboards/images/share-dashbaord-view.png#width=65%)

3. After selecting the users or groups, click on `Share`.

	![Add View Permission](/static/assets/managing-resources/manage-dashboards/images/add-view-permission.png#width=65%)
	
> **NOTE:** Only the user who created the dashboard view can share it with other Bold BI users.

### Remove Permission

Only the user who created the dashboard view can remove the shared dashboard view permissions.

1. Click the `Manage Access` button to see the users or groups and their permissions.

	![Manage Access View](/static/assets/managing-resources/manage-dashboards/images/manage-access-view.png#width=65%)

2. Then, remove the permissions using the `Remove` option in the `Actions` column of each permission.

    ![Remove View Permission](/static/assets/managing-resources/manage-dashboards/images/remove-view-permission.png#width=55%)
	
## Make Public

Dashboard views can be marked as public to allow anyone to access them. 

Click the `change` button to select the access permission. 


![Make Public Dashboard View](/static/assets/managing-resources/manage-dashboards/images/change-permission-access.png#width=65%)

After selecting the access permission, click the `Change` button.

![Make Public Dashboard View](/static/assets/managing-resources/manage-dashboards/images/Make-Public-Dashboard-View.png#width=65%)
		
## Delete Dashboard Views

Choose the `Delete` option to remove the dashboard view from Bold BI.

![Delete Dashboard View](/static/assets/managing-resources/manage-dashboards/images/Delete-Dashboard-View.png)

## Set a Default View for the Dashboard

The dashboard view can be set as the default view in two ways: while saving the view or from the views list for the dashboard by following these steps:

1. Select any view from the list of available dashboard views and click the `Set as Default` option.

    ![Set default View](/static/assets/managing-resources/manage-dashboards/images/set-default-icon.png#width=65%)

2. If the dashboard has no default views yet and you click the `Set as Default` option, then the respective view is set as the default view for the dashboard and a success message is displayed.

    ![Set default View](/static/assets/managing-resources/manage-dashboards/images/set-success.png)

3. If a default view already exists for the dashboard, a confirmation dialog box opens. Proceed with `Yes`.

    ![Set default View](/static/assets/managing-resources/manage-dashboards/images/multiple-default.png#width=65%)

4. After setting the dashboard view as the default for the dashboard, the text `(default)` is appended to the respective view in the views listing panel.

    ![Set default](/static/assets/managing-resources/manage-dashboards/images/default-view.png#width=65%)

> **NOTE:** To set a dashboard view as the default view for the dashboard, the `Default view` option in `Dashboard settings` must be enabled. Learn more about [Default Views](/site-administration/dashboard-settings/default-views/).

## Remove a Default View for the Dashboard

The default view of the dashboard can be removed to view the dashboard with its initial view by following these steps:

1. Click the `Remove as Default` option.

    ![Remove default View](/static/assets/managing-resources/manage-dashboards/images/remove-icon.png)

2. Proceed with `Yes` in the opened dialog box.

    ![Remove default View](/static/assets/managing-resources/manage-dashboards/images/remove-default.png#width=65%)