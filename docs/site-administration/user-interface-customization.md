---
layout: post
title: User Interface Customization – Embedded BI | Bold BI Docs
description: Learn how to customize Bold BI application user interface in terms of adding custom menus, menu items listing, showing preview, etc. with a configuration file.
platform: bold-bi
documentation: ug

---

# User Interface Customization in Bold BI Embedded Analytics

This section explains how to customize the Bold BI application user interface by adding custom menus, listing menu items, showing previews, etc. through a configuration file.

> **NOTE:** This feature is available in On-Premises Deployment, but not in Syncfusion Managed Cloud Server.

You can make your own selections about what you want to see or set preferences for how information is organized or displayed.

## Configuration for layout customization

Steps to open and edit the `custom_ui.json` file to customize the user interface:

1. Go to the UMS `Settings` page.

    `Example: http://{yourdomain}/ums/administration`

![UMS Settings](/static/assets/user-interface-customization/images/ums-settings.png)

2. Select the `Configuration` tab from the settings menu and choose `custom_ui.json` from the `Search your files` drop-down.

    ![Custom UI Json](/static/assets/user-interface-customization/images/custom-ui-json.png)

3. Fill in the required fields in the file and `Save.`

4. Restart the application and access the site. Please refer to the instructions on [how to restart the Bold BI](https://support.boldbi.com/kb/article/16634/how-to-restart-the-bold-bi-embedded-application) for more information.

**Custom UI JSON**

The Custom UI JSON file contains the following fields that are used to customize the UI in the Bold BI application:

1. Sites
2. Profiles
3. Preview pane
4. Schemes
5. Custom menus

### **Sites**

You need to provide the site name and matching profile name that you want to customize the UI for.

![Sites](/static/assets/user-interface-customization/images/sites-example.png#width=40%)

### **Profiles**

This section contains a list of default left side menu options and custom menus.

![profiles](/static/assets/user-interface-customization/images/profiles-example.png#width=40%)

**Profile syntax**

```json 
	  "Profiles": [
		{
		  "Name": "profile1",
		  "Dashboards": {
			"ShowMenu": true,
			"SamePagePreview": false,
			"Order": 1,
			"Scheme": ""
		  },
		  "Datasources": {
			"ShowMenu": true,
			"Order": 2,
			"Scheme": ""
		  },
		  "Schedules": {
			"ShowMenu": true,
			"Order": 3,
			"Scheme": ""
		  },
		  "Slideshows": {
			"ShowMenu": true,
			"Order": 4,
			"Scheme": ""
		  },
		  "Pinboards": {
			"ShowMenu": true,
			"Order": 5
		  },
		  "Publish": {
			"ShowMenu": true,
			"Order": 6
		  },
		  "Users": {
			"ShowMenu": true,
			"Order": 7
		  },
		  "Settings": {
			"ShowMenu": true,
			"Order": 8
		  },
		  "Notifications": {
			"ShowMenu": true,
		  },
          "Profile": { 
            "ShowMenu": true, 
            "ShowYourSites": true, 
            "ShowManageSite": true, 
            "ShowMyProfile": true, 
            "ShowLogout": true
          },
		  "Help": { 
			"ShowMenu": true 
		  },
		  "CustomMenu": [
			{
			  "Name": ""
			}
		  ]
		}
	  ]

```

* **Name:** Provide the name of the profile that will be used to specify the profile on the sites.

* **ShowMenu:** Determines whether that specific left side menu option should be shown or hidden.

* **Order:** Determines the position of the specific menu option.

* **Scheme:** Provide the matching scheme name. The scheme will be used to customize the options in the item listing and the context menu.

### **Preview pane**

You can preview the dashboards on the right side of the dashboard listing by using the `SamePagePreview` property in the configuration file.

![SamePagePreview](/static/assets/user-interface-customization/images/samepage-preview.png)

### **Schemes**

The scheme can be used to show or hide the context menu items in the item listing pages. These options are available on dashboards, slideshows, schedules, and data sources pages.

![Schemes](/static/assets/user-interface-customization/images/schemes.png#width=30%)

For example, you can display the `Get Link` option in the context menu by setting the `GetLink` property to true, and also mentioning the corresponding scheme name in the profile.

![Show context menu items](/static/assets/user-interface-customization/images/context-menu-show.png#width=30%)

![Show context menu items](/static/assets/user-interface-customization/images/context-menu.png#width=35%)

### **Navigation menu customization**

You can add new menu items that you want to display in the left side menu along with the default side menu items.

![Sample custom menus](/static/assets/user-interface-customization/images/custom-menu-example1.png)

![Custom menus](/static/assets/user-interface-customization/images/custom-menu.png#width=40%)

* **Name:** Specify the name of the scheme. This can be used to identify the scheme in the profiles.

* **Display:** Name that should be shown in the menu item.

* **Order:** Position of the menu item when displayed in the left side menu bar.

* **ImageLink:** URL of the image to be displayed in the menu item.

* **OpenLink:** URL of the site/page to navigate to when the menu item is clicked.

* **OpenBehavior:** Determines whether the custom menu page opens in the same page or in a new tab.

* **ShowMenu:** Determines whether the custom menu is visible or hidden.

## Sample UI customization

Let's customize `site1` using the profile `profile1` and scheme `scheme1`.

![Sample profile in config](/static/assets/user-interface-customization/images/sample-example1.png#width=35%)

Here, we have changed the order of each side menu and applied support for same page preview.

![Sample profile](/static/assets/user-interface-customization/images/sample-example2.png)

Different schemes have been provided for dashboards, datasources, schedules, and slideshows.

![Sample schemes](/static/assets/user-interface-customization/images/sample-example3.png#width=35%)

For example, the `Open` option will be visible in the dashboard context menu and hidden in the slideshow context menu.

![Dashboard scheme](/static/assets/user-interface-customization/images/dashboard-scheme.png#width=35%)

![Slideshow scheme](/static/assets/user-interface-customization/images/slideshow-scheme.png)

Two different custom menu options have been provided.

![Custom menu details](/static/assets/user-interface-customization/images/custom-menu-example2.png)

![Custom menu samples](/static/assets/user-interface-customization/images/custom-menu-samples.png#width=40%)