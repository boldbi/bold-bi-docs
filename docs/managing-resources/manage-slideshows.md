---
layout: post
title: Managing Slideshows – Embedded BI | Bold BI Documentation
description: Learn how to manage slideshows in Bold BI Embedded. Slideshow is presentation of dashboards organized in rotating manner at regular intervals.
canonical: "/managing-resources/manage-slideshows/"
platform: bold-bi
documentation: ug

---

# Slideshows - Present dashboards in slides

Slideshows are a presentation of dashboards that can rotate them with regular intervals.

## Manage Slideshows

This section explains on how to add, view, share, update and delete slideshows in the Bold BI.

Slideshows that are accessible by the user depending on the user’s permission will be displayed in the slideshows page.

![Manage Slideshow](/static/assets/managing-resources/images/manage-slideshow.png)

## Add Slideshows

This section explains on how to add a slideshow in the Bold BI Embedded. Slideshows can be added in the Bold BI only when you have `Create` permission for `All Slideshow`.

### Steps to add a slideshow

1. Click on the `Create` button in the left side menu and select `Slideshow` to add a slideshow.

	![Create Slideshow](/static/assets/managing-resources/images/create-slideshow.png#width=55%)

    Otherwise, Click `Create Slideshow` from slideshows page.

    ![Create Slideshow](/static/assets/managing-resources/images/slideshow-page-create.png)

2. Fill the form with Name and Duration for slideshow and click on the `Add Dashboards` in the Create Slideshow dialog box.
  
	![Add Dashboard Button](/static/assets/managing-resources/images/add-dashboard-button.png)

3. Select `Dashboards` from dropdown, then select the category from `Select Category` dropdown and corresponding dashboards under that selected category will be displayed in the `Select Dashboards` dropdown.

	![Add Dashboard-Dropdown](/static/assets/managing-resources/images/add-dashboard-dropdown.png)

	![Add Category-Dropdown](/static/assets/managing-resources/images/add-category-dropdown.png)

4. After selecting the dashboards from Select Dashboards dropdown, `Add` button will enable. In the `Select Dashboards`, if `All` type is chosen, it will add all dashboards in that category.
	   
	![All Dashboards in Category](/static/assets/managing-resources/images/all-dashboards-in-category.png)

5. Click on the `Add` button. 

    ![Add Button](/static/assets/managing-resources/images/add-button-slideshow.png)

6. Multiple Dashboards can be added for creating slideshow. It will display the added dashboards for slideshow as shown below,
    
	![Display Added Dashboard](/static/assets/managing-resources/images/display-added-dashboard.png)

7. After adding dashboards for slideshow. Click on the `Create` button, it will add the slideshow into Bold BI Embedded.

    ![Create Button](/static/assets/managing-resources/images/create-button-slideshow.png)

> **NOTE:**  `Read Write Delete` permission for that `Specific Slideshow` will be added for the user who created the slideshow.

## View Slideshows

This section explains on how to view slideshows in the Bold BI.

Created slideshows can be viewed by clicking on either the `Actions` button in the slideshow grid context menu and select `Open` or the name from slideshow listing page.

![Open Slideshow](/static/assets/managing-resources/images/open-slideshow.png)

![View Slideshow](/static/assets/managing-resources/images/view-slideshow.png)

Once it is opened, selected dashboards are viewed as presentation, changing one another in given time interval like below,

![Slideshow](/static/assets/managing-resources/images/slideshow.png)

Options to view the previous dashboard in presentation, to pause the presentation, to view the next dashboard in presentation and to view the presentation in full screen are provided.

## Share Slideshows

Slideshows must be shared for users or groups, so that it can be accessed by them.

If the slideshow contains only public dashboards, it can be accessed anonymously.

If the slideshow contains private dashboards, only users who have access to that slideshow can navigate to it using the link, but users with appropriate permissions alone will be able to view the items in slideshow.

This section explains on how to share slideshows with the other users in the Bold BI.

### Steps to share a Slideshow

1. Click the `Actions` button in the slideshows grid context menu and select `Sharing Permissions` option.

	![Sharing Permission Option](/static/assets/managing-resources/images/sharing-permission-option.png)

2. Select the permission access and type in user or a group name whom you want to share the slideshow with.
  
	![Share Slideshow](/static/assets/managing-resources/images/share-slideshow.png#width=60%)

3. After selecting the permission access and users or groups, click on the `Share` button.

	![Add Slideshow Permission](/static/assets/managing-resources/images/add-slideshow-permission.png#width=60%)
	
> **NOTE:**  Only the user who created the slideshow and the Administrator can share the slideshow with other Bold BI users.

### Remove Permission

The user who created the slideshow and the Administrator can remove the shared slideshow permissions.

1. Click the `Manage Access` button to see the users or groups and their permissions.
    
	![Manage Access Slideshow](/static/assets/managing-resources/images/manage-access-slideshow.png#width=60%)

2. Then remove the permissions using the `Remove` option in the `Actions` column of the each permissions.

    ![Remove Slideshow Permission](/static/assets/managing-resources/images/remove-slideshow-permission.png#width=45%)

## Information of Slideshow

You can see the information of respective Slideshow in dialog box. Click `Actions` in the grid context menu and select `Info`.

![Slideshow Info](/static/assets/managing-resources/images/slideshow-info.png#width=60%)

![Slideshow Info Popup](/static/assets/managing-resources/images/slideshow-info-popup.png#width=60%)
## Link to Slideshows

This section explains on how to get link to the Slideshows in the Bold BI Embedded.

These links are used to navigate to the slideshow and can be shared with others.

`Get Link` option is available for all the slideshows in the grid.

Follow the below steps to get the link of a slideshow.

1. Click on the context menu of the respective slideshow and choose `Get Link` option.

    ![Get Link Option](/static/assets/managing-resources/images/getlink-option.png#width=60%)

2. The `Get Link` dialog will be opened. Click `Copy` icon to get the link.

    ![Get Link](/static/assets/managing-resources/images/slideshow-getlink.png#width=60%)

## Update Slideshows

This section explains on how to modify existing slideshows in the Bold BI Embedded.

### Steps to update a slideshow

Name, Duration and the Dashboards listed for slideshow can be changed by using `Edit` option.

1. Click on the `Edit` option in the context menu of the respective Slideshow.

    ![Update Slideshow Option](/static/assets/managing-resources/images/update-slideshow-option.png#width=60%)

2. Dashboards for the slideshow can be added or removed.    

    * To remove the listed dashboards added for the slideshow, click icon as shown below,

       ![Remove Listed Dashboards](/static/assets/managing-resources/images/remove-listed-dashboards.png)

    * To add the Dashboard for the slideshow, click `Add Dashboards` in the Edit Slideshow dialog box.

	   ![Add Dashboard For Slideshow](/static/assets/managing-resources/images/add-dashboard-for-slideshow.png)

      * Select `Dashboards` from dropdown, then select the category from `Select Category` dropdown and corresponding dashboards under that selected category will be displayed in the `Select Dashboards` dropdown.

         ![Edit Dashboard-Dropdown](/static/assets/managing-resources/images/edit-dashboard-dropdown.png)

	     ![Edit Category-Dropdown](/static/assets/managing-resources/images/edit-category-dropdown.png)

      * After selecting the dashboards from Select Dashboards dropdown `Add` button will enable and click on the `Add` button. 

         ![Edit Add Button](/static/assets/managing-resources/images/edit-add-button.png)

3. After making changes to the Name, Duration and Dashboards listed for slideshow, Click on the `Save` button in the `Update Slideshow` dialog box .
    
    ![Save Button](/static/assets/managing-resources/images/save-button-slideshow.png)

## Delete Slideshows

Slideshow can also be deleted from the Bold BI when they are no longer required.

Click the `Actions` button in the slideshows grid context menu and select `Delete` to delete the Slideshow.

![Delete Slideshow](/static/assets/managing-resources/images/delete-slideshow.png)