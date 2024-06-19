---
layout: post
title: Managing Multi-tabbed Dashboard – Embedded BI | Bold BI Docs
description: Learn how to create two or more dashboards in the same page, open, edit, share and delete a multi-tabbed dashboard in Bold BI Embedded.
canonical: "/cloud-bi/managing-resources/manage-dashboards/manage-multi-tabbed-dashboards/" 
platform: bold-bi
documentation: ug
---

# Multi-Tabbed Dashboards

Multi-tabbed dashboard feature enables the user to render two or more dashboards in the same page.

## Manage a Multi-Tabbed dashboards

* This section explains how to create, edit, render, and delete a multi-tabbed dashboard in the Bold BI.

* Multi-tabbed dashboards that are accessible by the user depending on the users permission will be displayed in the dashboard listing page.

![Manage multi-tab](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/manage-multi-tab.png)

## Create a Multi-Tabbed Dashboard

To create a multi-tabbed dashboard, the user should have dashboards. Admin user can use any dashboards for creating a multi-tab dashboard but other users can use only their own dashboards for creating a multi-tab dashboard.

### Steps to create a multi-tabbed dashboard

* Click the `+` icon in the left-side of menu area and choose the `multi-tabbed dashboard` option.

    ![Multi-tab sidebar option](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/multi-tab-sidebar-option.png#width=50%)

* Fill the form with Name of multi-tab dashboard and select the Category from `Select Category` drop-down.

    ![Create Category](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/add-new-category.png)

> **NOTE:**  Plus icon near `Select Category` drop-down only shows, if the user have create permission for category.

* After filled the form, click the `Add Dashboards` in the create multi-tabbed dashboard dialog box.

    ![Create multi-tab](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/multi-tab-create.png)

* Select the category from `Select Category` drop-down and corresponding dashboards under that selected category will be displayed in the `Select Dashboard` drop-down.

	![Add Dashboards in Category](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/add-dashboard-dropdown.png)

* After selecting the dashboards from Select Dashboard drop-down, `Add` button will enable and Click the `Add` button. 

    ![Add Button](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/add-button-multi-tab.png)

* Add a minimum of two or more dashboards for creating the multi-tabbed dashboard. It will display the added dashboards for the multi-tabbed dashboard as follows. Edit the tab name of the multi-tabbed dashboards by clicking the edit icon.
    
	![Display Added Dashboard](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/display-added-dashboard.png)

* Edit the tab name and click the tick icon to apply the edited tab name. Use the cancel icon to reset the tab name.

    ![Edit Tab Name](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/edit-tab-name.png)

* After adding dashboards for the multi-tabbed dashboard, click `Create`.

    ![Create Button](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/create-button-multi-tab.png)

## Open a Multi-Tabbed Dashboard

User can identify the created multi-tabbed dashboard with `multi-tab` batch icon in dashboard listing page.  
    ![Multi-tab Identifier](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/multi-tab-listing.png)

1. Click the respective multi-tabbed dashboard in the list to open it.  

    ![Multi-tab Rendering](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/render-multi-tab-dashboard.png)

2. User can switch the tabs to view the other dashboards.

    ![Multi-tab Switch](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/multi-tab-rendering.png)

## Edit a Multi-Tabbed Dashboard

1. User can edit the created multi-tabbed dashboards details by clicking the `Edit` option in context menu of the respective multi-tabbed dashboard.

    ![Multi-tab Edit](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/multi-tab-edit.png)

2. Edit any of the listed items.
    * Name
    * Category
    * Tab name
    * Order of tab
    * Add or Remove dashboards
    
   Once edited, click `Save`.

    ![Multi-tab Update](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/multi-tab-update.png)

## Share a Multi-tabbed Dashboard

* Multi-tabbed dashboard must be shared for the users or groups so that it can be accessed by them. 

* Click the share icon for sharing the particular multi-tabbed dashboard.

    ![Share multi-tab](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/share-multi-tab.png)

* If the multi-tabbed dashboard is public, it can be accessed anonymously.

## Delete a Multi-Tabbed Dashboard

* Multi-tabbed dashboard can also be deleted from the Bold BI when they are no longer required.

* Click the `Actions` button in the multi-tabbed dashboard grid context menu and select `Delete` option to delete the multi-tabbed dashboard.

    ![Delete multi-tab](/bold-bi-docs/static/assets/embedded/managing-resources/manage-dashboards/images/multi-tab-delete.png)

> **NOTE:**  Limitations of Multi-Tabbed Dashboard
> * Edit, Share, Favorite and Get Link options in the viewer are hidden.
> * User can't share the dashboard views to others.