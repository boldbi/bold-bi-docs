---
layout: post
title: Managing Multi-tabbed Dashboard – Embedded BI | Bold BI Docs
description: Learn how to create two or more dashboards in the same page, open, edit, share and delete a multi-tabbed dashboard in Bold BI Embedded.
canonical: "/managing-resources/manage-dashboards/manage-multi-tabbed-dashboards/" 
platform: bold-bi
documentation: ug

---

# Multi-Tabbed Dashboards

The multi-tabbed dashboard feature enables the user to display two or more dashboards on the same page.

## Manage a Multi-Tabbed dashboards

* This section explains how to create, edit, render, and delete a multi-tabbed dashboard in Bold BI.

* Multi-tabbed dashboards that are accessible to the user, depending on their permissions, will be displayed on the dashboard listing page.

![Manage multi-tab](/static/assets/managing-resources/manage-dashboards/images/manage-multi-tab.png)

## Create a Multi-Tabbed Dashboard

To create a multi-tabbed dashboard, the user must have access to dashboards. An admin user can utilize any dashboard to create a multi-tabbed dashboard, while other users can only use their own dashboards or shared dashboards with write permission.

### Steps to create a multi-tabbed dashboard

* Click the `+` icon on the left side of the menu area and select the `multi-tabbed dashboard` option.

    ![Multi-tab sidebar option](/static/assets/managing-resources/manage-dashboards/images/multi-tab-sidebar-option.png#width=50%)

* Fill out the form with the name of the multi-tab dashboard and select the category from the `Select Category` drop-down menu.

    ![Create Category](/static/assets/managing-resources/manage-dashboards/images/add-new-category.png)

> **NOTE:**  The plus icon next to the `Select Category` drop-down will only appear if the user has permission to create categories.

* After filling out the form, click `Add Dashboards` in the Create Multi-Tabbed Dashboard dialog box.

    ![Create multi-tab](/static/assets/managing-resources/manage-dashboards/images/multi-tab-create.png)

* Select the category from the `Select Category` drop-down menu, and the corresponding dashboards under that category will be displayed in the `Select Dashboard` drop-down menu.

	![Add Dashboards in Category](/static/assets/managing-resources/manage-dashboards/images/add-dashboard-dropdown.png)

* After selecting the dashboards from the Select Dashboard drop-down menu, the `Add` button will become enabled. Click the `Add` button.

    ![Add Button](/static/assets/managing-resources/manage-dashboards/images/add-button-multi-tab.png)

* Add a minimum of two or more dashboards to create the multi-tabbed dashboard. The added dashboards will be displayed in the multi-tabbed dashboard. Edit the tab name of the multi-tabbed dashboards by clicking the edit icon.
    
	![Display Added Dashboard](/static/assets/managing-resources/manage-dashboards/images/display-added-dashboard.png)

* Edit the tab name and click the check icon to apply the edited tab name. Use the cancel icon to reset the tab name.

    ![Edit Tab Name](/static/assets/managing-resources/manage-dashboards/images/edit-tab-name.png)

* After adding dashboards to the multi-tabbed dashboard, click `Create`.

    ![Create Button](/static/assets/managing-resources/manage-dashboards/images/create-button-multi-tab.png)

## Open a Multi-Tabbed Dashboard

Users can identify the created multi-tabbed dashboard with the `multi-tab` badge icon in the dashboard listing page.  
    ![Multi-tab Identifier](/static/assets/managing-resources/manage-dashboards/images/multi-tab-listing.png)

1. Click on the respective multi-tabbed dashboard in the list to open it. 

    ![Multi-tab Rendering](/static/assets/managing-resources/manage-dashboards/images/render-multi-tab-dashboard.png)

2. Users can switch between tabs to view the other dashboards.

    ![Multi-tab Switch](/static/assets/managing-resources/manage-dashboards/images/multi-tab-rendering.png)

## Edit a Multi-Tabbed Dashboard

1. Users can edit the details of the created multi-tabbed dashboard by clicking on the `Edit` option in the context menu of the respective multi-tabbed dashboard.

    ![Multi-tab Edit](/static/assets/managing-resources/manage-dashboards/images/multi-tab-edit.png)

2. Edit any of the listed items.
    * Name
    * Category
    * Tab name
    * Order of tab
    * Add or Remove dashboards
    
   Once edited, click `Save`.

    ![Multi-tab Update](/static/assets/managing-resources/manage-dashboards/images/multi-tab-update.png)

## Share a Multi-tabbed Dashboard

* The multi-tabbed dashboard must be shared with users or groups so that they can access it.

* Click on the share icon to share the specific multi-tabbed dashboard.

    ![Share multi-tab](/static/assets/managing-resources/manage-dashboards/images/share-multi-tab.png)

* If the multi-tabbed dashboard is public, it can be accessed anonymously.

## Delete a Multi-Tabbed Dashboard

* Multi-tabbed dashboards can be deleted from Bold BI when they are no longer needed.

* Click the `Actions` button in the multi-tabbed dashboard grid context menu and select the `Delete` option to remove the multi-tabbed dashboard.

    ![Delete multi-tab](/static/assets/managing-resources/manage-dashboards/images/multi-tab-delete.png)

> **NOTE:**  Limitations of Multi-Tabbed Dashboard
> * The edit, share, favorite, and get link options in the viewer are hidden.
> * Users are unable to share the dashboard views with others.