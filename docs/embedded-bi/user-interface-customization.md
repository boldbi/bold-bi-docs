---
layout: post
title: User Interface Customization – Embedded BI | Bold BI Docs
description: Learn how to customize Bold BI application user interface in terms of adding custom menus, menu items listing, showing preview, etc. with a configuration file.
platform: bold-bi
documentation: ug
---

# User Interface Customization

This section explains how to customize Bold BI application user interface in terms of adding custom menus, menu items listing, showing preview, etc. with a configuration file.

You can make your own selections, about what you want to see or set preferences for how information is to be organized or displayed.

## Configuration for layout customization

1. Open `custom_ui` json file from this location. 

    <table>
        <tr>
            <td>
                <span style="font-weight:bold">Hosted Environment</span>
            </td>
            <td>
                <span style="font-weight:bold">Location</span>
            </td>
        </tr>
        <tr>
            <td>
            Windows
            </td>
            <td>
                Check this location for Bold BI version 4.1.36 or later "{application-installed-drive}\BoldServices\app_data\data".<br/>
                Check this location for Bold BI version below 4.1.36 "{application-installed-drive}\Bold BI\app_data\data".<br/>
            </td>
        </tr>
        <tr>
            <td>
                Linux
            </td>
            <td>
                /var/www/bold-services/application/app_data/data
            </td>
        </tr>
    </table>

2. Fill the required fields in the same file and save.

3. Restart the application, now you can see the changes reflecting in the UI.

**Custom UI JSON**

CustomUI json file contains the following fields, which is used to customize UI in Bold BI application.

1. Sites
2. Profiles
3. Preview pane
4. Schemes
5. Custom menus

**Sites**

You need to provide the site name and matching profile name, which you want to customize UI.

![Sites](/static/assets/embedded/user-interface-customization/images/sites-example.png)

**Profiles**

This section contains list of default left side menu options and custom menus.

![profiles](/static/assets/embedded/user-interface-customization/images/profiles-example.png)

* **Name:** Provide the name of the profile which will be used to specify the profile in the sites.

* **ShowMenu:** Decides whether that particular left side menu option is to be shown or hidden.

* **Order:** It decides the position of the particular menu option.

* **Scheme:** Provide the matching scheme name. The scheme will be used to customize the options in the item listing and the context menu.

**Preview pane**

You can preview the dashboards on the right side of the dashboard listing by using the `SamePagePreview` property in the configuration file.

![SamePagePreview](/static/assets/embedded/user-interface-customization/images/samepage-preview.png)

**Schemes**

The scheme can be used to show or hide the context menu items in the item listing pages. These options are available in dashboards, slideshows, schedules, and data sources page.

![Schemes](/static/assets/embedded/user-interface-customization/images/schemes.png)

For example, you can show the `Get Link` option in the context menu by setting the `GetLink` property as true, and also the corresponding scheme name needs to be mentioned in the profile.

![Show context menu items](/static/assets/embedded/user-interface-customization/images/context-menu-show.png)

![Show context menu items](/static/assets/embedded/user-interface-customization/images/context-menu.png)

**Navigation menu customization**

You can add new menu items which you want to show in the left side menu with the default side menu items.

![Sample custom menus](/static/assets/embedded/user-interface-customization/images/custom-menu-example1.png)

![Custom menus](/static/assets/embedded/user-interface-customization/images/custom-menu.png)

* **Name:** Specify the name of the scheme. This can be used to specify the scheme in the profiles.

* **Display:** Name that needs to be displayed in the menu item.

* **Order:** Position of the menu item while displaying in the left side menu bar.

* **ImageLink:** URL of the image that needs to be shown in the menu item.

* **OpenLink:** URL of the site/page that needs to be navigated on clicking the menu item.

* **OpenBehavior:** Decides whether the custom menu page can be opened on the same page or in a new tab.

* **ShowMenu:** Decides whether the custom menu is to be shown or hidden.

## Sample UI customization

Let us customize the `site1` using the profile `profile1` and scheme `scheme1`.

![Sample profile in config](/static/assets/embedded/user-interface-customization/images/sample-example1.png)

Here, changed order of each side menu and applied same page preview support.

![Sample profile](/static/assets/embedded/user-interface-customization/images/sample-example2.png)

Here, we provided different schemes for dashboards, datasources, schedules and slideshows.

![Sample schemes](/static/assets/embedded/user-interface-customization/images/sample-example3.png)

For example, `Open` option will be shown in dashboard context menu and hidden in slideshow context menu.

![Dashboard scheme](/static/assets/embedded/user-interface-customization/images/dashboard-scheme.png)

![Slideshow scheme](/static/assets/embedded/user-interface-customization/images/slideshow-scheme.png)

Provided two different custom menu options:

![Custom menu details](/static/assets/embedded/user-interface-customization/images/custom-menu-example2.png)

![Custom menu samples](/static/assets/embedded/user-interface-customization/images/custom-menu-samples.png)