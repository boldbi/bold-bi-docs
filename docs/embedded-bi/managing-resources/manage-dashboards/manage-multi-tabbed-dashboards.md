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

![Manage multi-tab](/static/assets/embedded/managing-resources/manage-dashboards/images/manage-multi-tab.png)

## Create a Multi-Tabbed Dashboard

To create a multi-tabbed dashboard, the user should have dashboards. Admin user can use any dashboards for creating a multi-tab dashboard but other users can use only their own dashboards for creating a multi-tab dashboard.

### Steps to create a multi-tabbed dashboard

* Click the `+` icon in the left-side of menu area and choose the `multi-tabbed dashboard` option.

    ![Multi-tab sidebar option](/static/assets/embedded/managing-resources/manage-dashboards/images/multi-tab-sidebar-option.png)

* Fill the form with Name of multi-tab dashboard and select the Category from `Select Category` drop-down.

    ![Create Category](/static/assets/embedded/managing-resources/manage-dashboards/images/add-new-category.png)

> **NOTE:**  Plus icon near `Select Category` drop-down only shows, if the user have create permission for category.

* After filled the form, click the `Add Dashboards` in the create multi-tabbed dashboard dialog box.

    ![Create multi-tab](/static/assets/embedded/managing-resources/manage-dashboards/images/multi-tab-create.png)

* Select the category from `Select Category` drop-down and corresponding dashboards under that selected category will be displayed in the `Select Dashboard` drop-down.

	![Add Category-Dropdown](/static/assets/embedded/managing-resources/manage-dashboards/images/add-category-dropdown.png)

	![Add Dashboards in Category](/static/assets/embedded/managing-resources/manage-dashboards/images/add-dashboard-dropdown.png)

* After selecting the dashboards from Select Dashboard drop-down, `Add` button will enable and Click the `Add` button. 

    ![Add Button](/static/assets/embedded/managing-resources/manage-dashboards/images/add-button-multi-tab.png)

* Should add minimum two or more dashboards for creating multi-tabbed dashboard. It will display the added dashboards for multi-tabbed dashboard as follows.
    
	![Display Added Dashboard](/static/assets/embedded/managing-resources/manage-dashboards/images/display-added-dashboard.png)

* After adding dashboards for multi-tabbed dashboard. Click the `Create` button.

    ![Create Button](/static/assets/embedded/managing-resources/manage-dashboards/images/create-button-multi-tab.png)

## Open a Multi-Tabbed Dashboard

User can identify the created multi-tabbed dashboard with `multi-tab` batch icon in dashboard listing page.  
    ![Multi-tab Identifier](/static/assets/embedded/managing-resources/manage-dashboards/images/multi-tab-listing.png)

1. Click the respective multi-tabbed dashboard in the list to open it.  

    ![Multi-tab Rendering](/static/assets/embedded/managing-resources/manage-dashboards/images/render-multi-tab-dashboard.png)

2. User can switch the tabs to view the other dashboards.

    ![Multi-tab Switch](/static/assets/embedded/managing-resources/manage-dashboards/images/multi-tab-rendering.png)

## Edit a Multi-Tabbed Dashboard

1. User can edit the created multi-tabbed dashboards details by clicking the `Edit` option in context menu of the respective multi-tabbed dashboard.

    ![Multi-tab Edit](/static/assets/embedded/managing-resources/manage-dashboards/images/multi-tab-edit.png)

2. Change the Name or Category or Adding / Removing dashboards will enable the `save` button.

    ![Multi-tab Update](/static/assets/embedded/managing-resources/manage-dashboards/images/multi-tab-update.png)

## Share a Multi-tabbed Dashboard

* Multi-tabbed dashboard must be shared for the users or groups so that it can be accessed by them. 

* Click the share icon for sharing the particular multi-tabbed dashboard.

    ![Share multi-tab](/static/assets/embedded/managing-resources/manage-dashboards/images/share-multi-tab.png)

* If the multi-tabbed dashboard is public, it can be accessed anonymously.

## Delete a Multi-Tabbed Dashboard

* Multi-tabbed dashboard can also be deleted from the Bold BI when they are no longer required.

* Click the `Actions` button in the multi-tabbed dashboard grid context menu and select `Delete` option to delete the multi-tabbed dashboard.

    ![Delete multi-tab](/static/assets/embedded/managing-resources/manage-dashboards/images/multi-tab-delete.png)

> **NOTE:**  Limitations of Multi-Tabbed Dashboard
> * Edit, Share, Favorite and Get Link options in the viewer are hidden.
> * User can't share the dashboard views to others.