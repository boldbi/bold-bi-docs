---
layout: post
title: Managing Slideshows – Embedded BI | Bold BI Documentation
description: Learn how to manage slideshows in Bold BI Embedded. Slideshow is presentation of dashboards organized in rotating manner at regular intervals.
canonical: "/managing-resources/manage-slideshows/"
platform: bold-bi
documentation: ug

---

# Slideshows - Present dashboards in slides

Slideshows are a presentation of dashboards that can rotate with regular intervals.

## Manage Slideshows

This section explains how to add, view, share, update, and delete slideshows in Bold BI.

Slideshows that are accessible by the user, depending on the user's permission, will be displayed on the slideshows page.

![Manage Slideshow](/static/assets/managing-resources/images/manage-slideshow.png)

## Add Slideshows

This section explains how to add a slideshow in Bold BI Embedded. Slideshows can only be added in Bold BI if you have `Create` permission for `All Slideshows`.

### Steps to add a slideshow

1. Click on the `Create` button in the left side menu and select `Slideshow` to add a slideshow. 

	![Create Slideshow](/static/assets/managing-resources/images/create-slideshow.png#width=55%)

    Otherwise, click `Create Slideshow` from the slideshows page.

    ![Create Slideshow](/static/assets/managing-resources/images/slideshow-page-create.png)

2. Fill out the form with Name and Duration for the slideshow, then click on the `Add Dashboards` in the Create Slideshow dialog box.
  
	![Add Dashboard Button](/static/assets/managing-resources/images/add-dashboard-button.png)

3. Select `Dashboards` from the dropdown, then select the category from the `Select Category` dropdown. Corresponding dashboards under that selected category will be displayed in the `Select Dashboards` dropdown.

	![Add Dashboard-Dropdown](/static/assets/managing-resources/images/add-dashboard-dropdown.png)

	![Add Category-Dropdown](/static/assets/managing-resources/images/add-category-dropdown.png)

4. After selecting the dashboards from the Select Dashboards dropdown, the `Add` button will be enabled. If `All` type is chosen in `Select Dashboards`, it will add all dashboards in that category.
	   
	![All Dashboards in Category](/static/assets/managing-resources/images/all-dashboards-in-category.png)

5. Click on the `Add` button. 

    ![Add Button](/static/assets/managing-resources/images/add-button-slideshow.png)

6. Multiple dashboards can be added for creating a slideshow. It will display the added dashboards for the slideshow.
    
	![Display Added Dashboard](/static/assets/managing-resources/images/display-added-dashboard.png)

7. After adding dashboards for the slideshow, click on the `Create` button to add the slideshow into Bold BI Embedded.

    ![Create Button](/static/assets/managing-resources/images/create-button-slideshow.png)

> **NOTE:**  `Read Write Delete` permission for that `Specific Slideshow` will be added for the user who created the slideshow.

## View Slideshows

This section explains how to view slideshows in Bold BI.

Created slideshows can be viewed by clicking on either the `Actions` button in the slideshow grid context menu and selecting `Open`, or by clicking on the name from the slideshow listing page.

![Open Slideshow](/static/assets/managing-resources/images/open-slideshow.png)

![View Slideshow](/static/assets/managing-resources/images/view-slideshow.png)

Once the slideshow is opened, selected dashboards are viewed as a presentation, changing from one to another at a given time interval.

![Slideshow](/static/assets/managing-resources/images/slideshow.png)

Options to view the previous dashboard in the presentation, pause the presentation, view the next dashboard in the presentation, and view the presentation in full screen are provided.

## Share Slideshows

Slideshows must be shared with users or groups so that they can access them.

If the slideshow contains only public dashboards, it can be accessed anonymously.

If the slideshow contains private dashboards, only users who have access to that slideshow can navigate to it using the link. Users with appropriate permissions alone will be able to view the items in the slideshow.

This section explains how to share slideshows with other users in Bold BI.

### Steps to share a Slideshow

1. Click the `Actions` button in the slideshows grid context menu and select `Sharing Permissions` option.

	![Sharing Permission Option](/static/assets/managing-resources/images/sharing-permission-option.png)

2. Select the permission access and type in the user or group name you want to share the slideshow with.
  
	![Share Slideshow](/static/assets/managing-resources/images/share-slideshow.png#width=60%)

3. After selecting the permission access and users or groups, click on the `Share` button.

	![Add Slideshow Permission](/static/assets/managing-resources/images/add-slideshow-permission.png#width=60%)
	
> **NOTE:**  Only the user who created the slideshow and the Administrator can share the slideshow with other Bold BI users.

### Remove Permission

The user who created the slideshow and the Administrator can remove shared slideshow permissions.

1. Click the `Manage Access` button to see the users or groups and their permissions.
    
	![Manage Access Slideshow](/static/assets/managing-resources/images/manage-access-slideshow.png#width=60%)

2. Then remove the permissions using the `Remove` option in the `Actions` column for each permission.

    ![Remove Slideshow Permission](/static/assets/managing-resources/images/remove-slideshow-permission.png#width=45%)

## Information of Slideshow

You can view the information of the respective slideshow in a dialog box. Click `Actions` in the grid context menu and select `Info`.

![Slideshow Info](/static/assets/managing-resources/images/slideshow-info.png#width=60%)

![Slideshow Info Popup](/static/assets/managing-resources/images/slideshow-info-popup.png#width=60%)
## Link to Slideshows

This section explains how to get a link to the Slideshows in Bold BI Embedded.

These links are used to navigate to the slideshows and can be shared with others.

The `Get Link` option is available for all slideshows in the grid.

Follow the steps below to get the link of a slideshow:

1. Click on the context menu of the respective slideshow and choose the `Get Link` option.

    ![Get Link Option](/static/assets/managing-resources/images/getlink-option.png#width=60%)

2. The `Get Link` dialog will open. Click on the `Copy` icon to get the link.

    ![Get Link](/static/assets/managing-resources/images/slideshow-getlink.png#width=60%)

## Update Slideshows

This section explains how to modify existing slideshows in Bold BI Embedded.

### Steps to update a slideshow

Name, duration, and the dashboards listed for the slideshow can be changed using the `Edit` option.

1. Click on the `Edit` option in the context menu of the respective Slideshow.

    ![Update Slideshow Option](/static/assets/managing-resources/images/update-slideshow-option.png#width=60%)

2. Dashboards can be added or removed for the slideshow.   

    * To remove the listed dashboards added for the slideshow, click icon as shown below,

       ![Remove Listed Dashboards](/static/assets/managing-resources/images/remove-listed-dashboards.png)

    * To add a dashboard, click on `Add Dashboards` in the Edit Slideshow dialog box.

	   ![Add Dashboard For Slideshow](/static/assets/managing-resources/images/add-dashboard-for-slideshow.png)

      * Select dashboards from the dropdown menu, then select the category from the `Select Category` dropdown. Corresponding dashboards under the selected category will be displayed in the `Select Dashboards` dropdown.

         ![Edit Dashboard-Dropdown](/static/assets/managing-resources/images/edit-dashboard-dropdown.png)

	     ![Edit Category-Dropdown](/static/assets/managing-resources/images/edit-category-dropdown.png)

      * After selecting the dashboards, the `Add` button will enable. Click on the `Add` button.

         ![Edit Add Button](/static/assets/managing-resources/images/edit-add-button.png)

3. After making changes to the name, duration, and dashboards listed for the slideshow, click on the `Save` button in the `Update Slideshow` dialog box.
    
    ![Save Button](/static/assets/managing-resources/images/save-button-slideshow.png)

## Delete Slideshows

Slideshows can also be deleted from Bold BI when they are no longer required.

Click on the `Actions` button in the slideshows grid context menu and select `Delete` to delete the slideshow.

![Delete Slideshow](/static/assets/managing-resources/images/delete-slideshow.png)