---
layout: post
title: Create a Custom Theme for Cloud BI Application | Bold BI Docs
description: Learn how to create a custom theme by modifying the CSS3 variable in the template file at the basic or advanced customization levels for your Cloud BI apps.
platform: bold-bi
documentation: ug
---

# How to create custom application theme

Once you have extracted the template file downloaded from the link in the `Manage Application Theme` dialog, you can manually edit the CSS variables and assign color codes in the template file to customize the theme.

**Let's learn some basics on CSS3 variable and color code assignments.**

CSS3 variable syntax: `name:value;`

Here, the `name` represents the variable name and it should start with two dashes `(--)`. For example, `--primary-branding-color`.

The value represents the hexadecimal representation of the color code that you want to assign to this variable. For example, `#ffffff`. You can either assign a hex color code or use the already defined CSS3 variable name like below.

![CSS3 variable](/static/assets/site-administration/images/css-variable.png)

### **Points to be noted while editing and uploading custom theme file.**

* To avoid errors in color assignment, please use this [online color picker tool](https://www.google.com/search?si=AC1wQDAoyjQYg3jwXlqSN_ppczo9wBVbeISr-8vCGaPybowwliJXfryD9GkUWlNo3uTq29yH5Z2Khp5AXSpKSRTZXtkDq1HDAQ%3D%3D&hl=en-IN&kgs=4b27e3cf717a5fe4&shndl=21&source=sh/x/fbx/1&entrypoint=sh/x/fbx&fbxst=CgkKByM2ZTZhNjA) to get the hex value for the color you want to use in the template file.

* Make sure to use appropriate color codes that are suitable for the mode you are customizing. For example, use **light based colors** in **dark mode** and **dark based colors** in **light mode** to ensure clear visibility.

* A custom theme can only be created for either the dark or light mode, not both. Please select a custom theme based on your current application mode. To reset the custom theme, choose the default value.

* Once a theme is uploaded, you cannot change the color codes in the already uploaded theme file by deleting it. You must re-upload a new file with changes for further customization.

* Before uploading the custom theme file, make sure it is valid by using this [online validation helper](https://jigsaw.w3.org/css-validator/#validate_by_upload).

## Assign color code to variables in template file

### **Simple Customization**

You can customize the **branding color**, **primary text**, **secondary text**, **active text**, and **hyperlink colors** by changing the color codes for the variables mentioned below. These minimal changes will be enough to customize all components and elements.

<a>Branding Color</a>

Customize the **branding color** by changing the `--primary-branding-color` variable.
This will affect the areas and components shown in the image below.

<table>
    <tr>
        <td>
            <a>Branding color</a>
            <pre style="padding-left:20px;padding-top:15px;">--primary-branding-color</pre><br>
        </td>
        <td>
            <img alt="Branding color Image" src = "/static/assets/site-administration/images/branding-color-images.png">
        </td>
    </tr>
</table>

<a>Typography</a>

Customize **primary text**, **secondary text**, **hover text**, **active text**, and **hyperlink color** throughout the application by changing the color codes for the variables provided.

<table>
<tr>
    <td>
        <a>Primary text</a>
        <pre style="padding-left:20px;padding-top:15px;">--primary-text-normal-color</pre><br>
        <pre style="padding-left:20px;padding-top:15px;">--primary-text-hover-color</pre><br>
        <a>Secondary text</a>
        <pre style="padding-left:20px;padding-top:15px;">--secondary-text-normal-color</pre><br>
        <a>Hyperlink</a>
        <pre style="padding-left:20px;padding-top:15px;">--hyper-link-normal-color</pre><br>
        <pre style="padding-left:20px;padding-top:15px;">--hyper-link-hover-color</pre><br>
    </td>
    <td>
        <img alt="Typography Image" src = "/static/assets/site-administration/images/typography-images.png">
    </td>
</tr>
</table>

### **Advanced Customization**

You can also customize the **active** and **hover state colors**, the **primary button**, **secondary button**, and **link button** by assigning color code to their respective variables.

<a>State background</a>

You can customize the **hover background** and **active background** colors across the entire application by changing the color codes in the variables below.

<table>
    <tr>
        <td>
            <a>Active background</a>
            <pre style="padding-left:20px;padding-top:15px;">--active-bg-normal-color</pre><br>
            <a>Active state text</a>
            <pre style="padding-left:20px;padding-top:15px;">--active-text-normal-color</pre><br>
            <a>Hover background</a>
            <pre style="padding-left:20px;padding-top:15px;">--hover-bg-normal-color</pre><br>
        </td>
        <td>
            <img alt="State Background Image" src = "/static/assets/site-administration/images/state-bg-image.png">
        </td>
    </tr>
</table>

<a>Buttons Customization</a>

You can customize the **primary button**, **secondary button**, and **link button colors**, by changing the color codes on the below variables for normal, hover, and disabled state.

<table>
    <tr>
        <td>
            <a>Primary button normal</a>
            <pre style="padding-left:20px;padding-top:15px;">--primary-btn-bg-normal-color</pre><br>
            <pre style="padding-left:20px;padding-top:15px;">--primary-btn-text-normal-color</pre><br>
            <pre style="padding-left:20px;padding-top:15px;">--primary-btn-border-normal-color</pre><br>
            <a>Primary button hover</a>
            <pre style="padding-left:20px;padding-top:15px;">--primary-btn-bg-hover-color</pre><br>
            <pre style="padding-left:20px;padding-top:15px;">--primary-btn-text-hover-color</pre><br>
            <a>Primary button disable</a>
            <pre style="padding-left:20px;padding-top:15px;">--primary-btn-bg-disable-color</pre><br>
            <pre style="padding-left:20px;padding-top:15px;">--primary-btn-text-disable-color</pre><br>
            <pre style="padding-left:20px;padding-top:15px;">--primary-btn-border-disable-color</pre><br>
        </td>
        <td>
            <img alt="Primary Button" src = "/static/assets/site-administration/images/primary-btn-images.png">
        </td>
    </tr>
    <tr>
        <td>
            <a>Secondary button normal</a>
            <pre style="padding-left:20px;padding-top:15px;">--secondary-btn-bg-normal-color</pre><br>
            <pre style="padding-left:20px;padding-top:15px;">--secondary-btn-text-normal-color</pre><br>
            <pre style="padding-left:20px;padding-top:15px;">--secondary-btn-border-normal-color</pre><br>
            <a>Secondary button hover</a>
            <pre style="padding-left:20px;padding-top:15px;">--secondary-btn-bg-hover-color</pre><br>
            <pre style="padding-left:20px;padding-top:15px;">--secondary-btn-text-hover-color</pre><br>
            <a>Secondary button disable</a>
            <pre style="padding-left:20px;padding-top:15px;">--secondary-btn-bg-disable-color</pre><br>
            <pre style="padding-left:20px;padding-top:15px;">--secondary-btn-text-disable-color</pre><br>
            <pre style="padding-left:20px;padding-top:15px;">--secondary-btn-border-disable-color</pre><br>
        </td>
        <td>
            <img alt="Secondary Button" src = "/static/assets/site-administration/images/secondary-btn-images.png">
        </td>
    </tr>
    <tr>
        <td>
            <a>Link button normal</a>
            <pre style="padding-left:20px;padding-top:15px;">--link-btn-bg-normal-color</pre><br>
            <pre style="padding-left:20px;padding-top:15px;">--link-btn-text-normal-color</pre><br>
            <pre style="padding-left:20px;padding-top:15px;">--link-btn-border-normal-color</pre><br>
            <a>Link button hover</a>
            <pre style="padding-left:20px;padding-top:15px;">--link-btn-bg-hover-color</pre><br>
            <pre style="padding-left:20px;padding-top:15px;">--link-btn-text-hover-color</pre><br>
            <pre style="padding-left:20px;padding-top:15px;">--link-btn-border-hover-color</pre><br>
        </td>
        <td>
            <img alt="Link Button" src = "/static/assets/site-administration/images/link-btn-images.png">
        </td>
    </tr>
</table>

<a>Navigation menu customization</a>

You can customize the **normal background**, **hover background**, **active background**, **primary text**, and **hyperlink color** for the main navigation menu by changing the color codes in the variables below.

<table>
    <tr>
        <td>
            <a>Navigation menu main background</a>
            <pre style="padding-left:20px;padding-top:15px;">--nav-menu-main-color</pre><br>
            <a>Normal background</a>
            <pre style="padding-left:20px;padding-top:15px;">--nav-menu-bg-normal-color</pre><br>
            <a>Active background</a>
            <pre style="padding-left:20px;padding-top:15px;">--nav-menu-bg-active-color</pre><br>
            <a>Hover background</a>
            <pre style="padding-left:20px;padding-top:15px;">--nav-menu-bg-hover-color</pre><br>
            <a>Primary text</a>
            <pre style="padding-left:20px;padding-top:15px;">--nav-menu-pri-text-normal-color</pre><br>
            <pre style="padding-left:20px;padding-top:15px;">--nav-menu-pri-text-hover-color</pre><br>
            <pre style="padding-left:20px;padding-top:15px;">--nav-menu-pri-text-active-color</pre><br>
            <a>Hyperlink</a>
            <pre style="padding-left:20px;padding-top:15px;">--nav-menu-hyper-link-normal-color</pre><br>
            <pre style="padding-left:20px;padding-top:15px;">--nav-menu-hyper-link-hover-color</pre><br>
        </td>
        <td>
            <img alt="State Background Image" src = "/static/assets/site-administration/images/nav-bg-image.png#max-width=100%">
        </td>
    </tr>
</table>

Once you customize the template file with advanced customization, it will look like the image shown below.

![Customized template file](/static/assets/site-administration/images/customize-template-file.png)

<div style = "display:none">
![Branding color](/static/assets/site-administration/images/branding-color-images.png)
![Link button](/static/assets/site-administration/images/link-btn-images.png)
![Primary button](/static/assets/site-administration/images/primary-btn-images.png)
![Secondary button](/static/assets/site-administration/images/secondary-btn-images.png)
![Stage background](/static/assets/site-administration/images/state-bg-image.png)
![Typography](/static/assets/site-administration/images/typography-images.png)
![Navigation menu](/static/assets/site-administration/images/nav-bg-image.png)
</div>