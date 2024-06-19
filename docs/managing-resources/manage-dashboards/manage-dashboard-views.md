---
layout: post
title: Managing Dashboard Views – Embedded BI | Bold BI Docs
description: Learn how to open, add, update, share, delete dashboard views and mark dashboard view as public in Bold BI Embedded.
canonical: "/cloud-bi/managing-resources/manage-dashboards/manage-dashboard-views/" 
platform: bold-bi
documentation: ug
---

# Manage Dashboard Views

This section explains on how to open, add, update, share, delete Dashboard views in the Bold BI.

Dashboard Views that are accessible by the user depending on the user's permission is displayed in the Dashboards page.

![Manage Dashboard Views](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/Launch-Dashboard-Views-From-Server.png)

## Open Dashboard Views
Dashboard Views are opened in our embedded Dashboard Viewer itself as Dashboards.
		
## Add Dashboard Views
* If the user has `Read Specific Dashboards` permission, then the user can create Dashboard Views in that dashboard.
* The created Dashboard Views cannot be updated/deleted by other users.
* The owner of the Dashboard View only has share permission on the Dashboard View.
* The shared Dashboard Views can be modified and saved as another view as the users cannot modify the actual ones.  

### Steps to add a Dashboard View

1. Filters applied in the dashboards are summarized in the `Filter Overview` section under `Applied Filters`.

    To save the filters, click on `Save` icon, a popup is opened to type the name for the Dashboard View and submit it.

    ![Create Dashboard View](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/Add-Dashboard-View.png)    
    
    ![Created Dashboard View](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/Added-Dashboard-View.png#width=65%)

2. The views can be set as default while saving the views by enabling the `Mark as Default` option in the save view dialog. Learn more about default views [here](/embedded-bi/site-administration/dashboard-settings/default-views/).

3. Saved Dashboard Views are shown in Dashboard Views panel by clicking the `Views` icon as follows.

   ![Views icon](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/views-icon.png)
  
   ![View Dashboard Views](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/View-Saved-Dashboard-Views.png)

4. Click `saved views`, shown in Dashboard Views panel, filters applied in that view is displayed as an accordion.
   ![View Dashboard Views](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/applied-filters-accordion.png)

> **NOTE:**  `Read Write Delete` permission for the `Specific Dashboard View` is added to the users by the person who created the Dashboard View.

## Share Dashboard Views
Dashboard Views can be shared to the users, who have permission for the `Specific Dashboard`.

### Steps to share a Dashboard View

1. Click the `Share Permissions` option in the dashboard views list.

	![Manage View Permission](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/manage-view-permission-context.png)

2. Type the user or a group name with whom you want to share the `Dashboard View`.

	![Share View Dashboard](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/share-dashbaord-view.png#width=65%)

3. After selecting the users or groups, click `Share`.

	![Add View Permission](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/add-view-permission.png#width=65%)
	
> **NOTE:**  Only the user who created the dashboard view can share the dashboard view with other Bold BI users.

### Remove Permission

Only the user who created the dashboard view can remove the shared dashboard view permissions.

1. Click the `Manage Access` button to see the users or groups and their permissions.

	![Manage Access View](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/manage-access-view.png#width=65%)

2. Then remove the permissions using the `Remove` option in the `Actions` column of the each permissions.

    ![Remove View Permission](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/remove-view-permission.png#width=55%)
	
## Make Public

Dashboard Views can be marked as public to let anyone access it.

Click the `change` button to select the access permission. 

![Make Public Dashboard View](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/change-permission-access.png#width=65%)

After selecting the access permission click `Change` button.

![Make Public Dashboard View](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/Make-Public-Dashboard-View.png#width=65%)
		
## Delete Dashboard Views

Choose the `Delete` option to delete the Dashboard View from Bold BI.

![Delete Dashboard View](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/Delete-Dashboard-View.png)

## Set a default view for the dashboard

The dashboard view can be set as default view in two ways either while saving the view or from the views list for the dashboard by the following steps:

1. Select any view from the list of available dashboard views and click `Set as Default` option.

    ![Set default View](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/set-default-icon.png#width=65%)

2. If the dashboard has no default views yet and if you click the `Set as Default` option, then respective view will be set as default view for the dashboard and success message will be displayed.

    ![Set default View](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/set-success.png)

3. If a default view already exists for the dashboard, then confirmation dialog box will be opened and proceed with `Yes`.

    ![Set default View](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/multiple-default.png#width=65%)

4. After setting the dashboard view as default for the dashboard, the text `(default)` will be appended with the respective view in the views listing panel.

    ![Set default](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/default-view.png#width=65%)

> **NOTE:** To set a dashboard view as default view for the dashboard, the `Default view` option in `Dashboard settings` must be enabled. Learn more about default views [here](/embedded-bi/site-administration/dashboard-settings/default-views).

## Remove a default view for the dashboard

The default view of the dashboard can be removed to view the dashboard with their initial view by the following steps:

1. Click `Remove as Default` option.

    ![Remove default View](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/remove-icon.png)

2. Proceed with `Yes` in the opened dialog box.

    ![Remove default View](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/remove-default.png#width=65%)