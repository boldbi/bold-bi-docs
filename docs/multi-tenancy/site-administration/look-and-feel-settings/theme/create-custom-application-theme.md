---
layout: post
title: Custom Theme Settings in Site Administration | Bold BI Docs
description: Learn how to create a custom theme by modifying the CSS3 variable in the template in both the basic or advanced customization levels of Bold BI application.
platform: bold-bi
documentation: ug
---

# How to create custom application theme

Once you have extracted the template file downloaded from the link in the `Manage Application Theme` dialog, you can manually edit the CSS variables and assign color codes in the template file to customize the theme.

**Let's learn some basics on CSS3 variable and color code assignments.**

CSS3 variable syntax: `name:value;`

Here `name` represents the variable name, and it should starts with two dashes `(--)`. For example, `--primary-branding-color`.

The value represents the hexadecimal representation of the color code that you want to assign to this variable. For example, `#ffffff`. You can either assign a hex color code or use the already defined CSS3 variable name like the one below.

![CSS3 variable](/static/assets/multi-tenancy/images/look-and-feel/css-variable.png)

```css3

--primary-branding-color: #1ab394;
--primary-branding-border-color: var (--primary-branding-color); 
--primary-text-normal-color: #333333;
--primary-text-hover-color: var (--primary-text-normal-color);

```

### **Points to be noted while editing and uploading custom theme file.**

* To avoid errors in the color assignment, please check this [online color picker tool](https://www.google.com/search?si=AC1wQDAoyjQYg3jwXlqSN_ppczo9wBVbeISr-8vCGaPybowwliJXfryD9GkUWlNo3uTq29yH5Z2Khp5AXSpKSRTZXtkDq1HDAQ%3D%3D&hl=en-IN&kgs=4b27e3cf717a5fe4&shndl=21&source=sh/x/fbx/1&entrypoint=sh/x/fbx&fbxst=CgkKByM2ZTZhNjA) to get the hex value for the color you wish to use in the template file.

* Make sure that you use appropriate color codes that will be suitable for the mode you prefer to customize. For example, use **light based colors** in **dark mode** and **dark based colors** in **light mode** so that the visibility will be clear.

* A custom theme can only be created for either the dark or light mode. A single custom theme will not work for both. Please choose a custom theme based on your current application mode. To reset the custom theme, please select the default value.

* Once a theme is uploaded, you can't change the color codes in the already uploaded theme file with the same name or by deleting the theme file. You need to re-upload a new file with changes for further customization.

* Before uploading the custom theme file, please ensure your custom theme file is valid by uploading it into this [online validation helper](https://jigsaw.w3.org/css-validator/#validate_by_upload).

## Assign color code to variables in template file

### **Simple Customization**

You can customize the **branding color**, **primary text**, **secondary text**, **active text**, and **hyper link colors** by changing color codes for the below-mentioned variables. These minimal changes will be enough to customize all components and elements.

#### Branding Color

You can customize the **branding color** by changing the `--primary-branding-color` variable.
This will reflect in the areas and components shown in the below image.

<table>
    <tr>
        <td>
            <a>Branding color</a>
            <pre style="padding-left:20px;padding-top:15px;">--primary-branding-color</pre><br>
        </td>
        <td>
            <img alt="Branding color Image" src = "/static/assets/multi-tenancy/images/look-and-feel/branding-color-images.png">
        </td>
    </tr>
</table>

#### Typography

You can customize **primary text**, **secondary text**, **hover text**, **active text**, and **hyperlink color** over the entire application by changing the color codes of the below variables.

<table>
<tr>
    <td>
        <a>Primary text</a>
        <pre style="padding-left:20px;padding-top:15px;">--primary-text-normal-color</pre><br>
        <pre style="padding-left:20px;padding-top:15px;">--primary-text-hover-color</pre><br>
        <a>Secondary text</a>
        <pre style="padding-left:20px;padding-top:15px;">--secondary-text-normal-color</pre><br>
        <a>Hyper link</a>
        <pre style="padding-left:20px;padding-top:15px;">--hyper-link-normal-color</pre><br>
        <pre style="padding-left:20px;padding-top:15px;">--hyper-link-hover-color</pre><br>
    </td>
    <td>
        <img alt="Typography Image" src = "/static/assets/multi-tenancy/images/look-and-feel/typography-images.png">
    </td>
</tr>
</table>

### **Advanced Customization**

You can customize the **active** and **hover state colors**, as well as the **primary button**, **secondary button**, and **link button** by assigning color codes to their respective variables.

#### State background

You can customize the **hover background** and **active background** color across the entire application by changing the color codes in the variables below.

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
            <img alt="State Background Image" src = "/static/assets/multi-tenancy/images/look-and-feel/state-bg-image.png">
        </td>
    </tr>
</table>

#### Buttons Customization

You can customize the **primary button**, **secondary button**, and **link button colors** by changing the color codes of the variables below for the normal, hover, and disabled states.

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
            <img alt="Primary Button" src = "/static/assets/multi-tenancy/images/look-and-feel/primary-btn-images.png">
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
            <img alt="Secondary Button" src = "/static/assets/multi-tenancy/images/look-and-feel/secondary-btn-images.png">
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
            <img alt="Link Button" src = "/static/assets/multi-tenancy/images/look-and-feel/link-btn-images.png">
        </td>
    </tr>
</table>

Once you customize the template file with advanced customization, it will resemble the image shown below.

![Customized template file](/static/assets/multi-tenancy/images/look-and-feel/customize-template-file.png)

```css3

:root {
    --primary-branding-color: #9c63ff;
    --primary-branding-border-color: var (--primary-branding-color);
    --primary-text-normal-color: #ffffff;
    --primary-text-hover-color: #eeeeee;
    --secondary-text-normal-color: var (--grey-700);
    --hyper-link-normal-color: #9c63ff;
    --hyper-link-hover-color: #9c63ff;
    --primary-btn-bg-normal-color: #9c63ff;
    --primary-btn-bg-hover-color: #9c63ff99;
    --primary-btn-bg-disable-color: #333842;
    --primary-btn-border-normal-color: var (--primary-btn-bg-normal-color);
    --primary-btn-border-disable-color: #56546a;
    --primary-btn-text-normal-color: #fff;
    --primary-btn-text-hover-color: #fff;
    --primary-btn-text-disable-color: #7b828e;
    --secondary-btn-bg-normal-color: #303038;
    --secondary-btn-bg-hover-color: #393943;
    --secondary-btn-bg-disable-color: #333842;
    --secondary-btn-border-normal-color: #9e9ec54d;
    --secondary-btn-border-disable-color: #56546a;
    --secondary-btn-text-normal-color: #fff;
    --secondary-btn-text-hover-color: #fff;
    --secondary-btn-text-disable-color: #7b828e;
    --link-btn-bg-normal-color: #222733;
    --link-btn-bg-hover-color: #9c63ff;
    --link-btn-text-normal-color: #fff;
    --link-btn-text-hover-color: #fff;
    --link-btn-border-normal-color: #9c63ff;
    --link-btn-border-hover-color: #9c63ff;
    --hover-bg-normal-color: #414152;
    --active-bg-normal-color: #9c63ff75;
    --active-text-normal-color: #ffffff;
    --nav-menu-main-color: #9c63££;
    --nav-menu-bg-normal-color: #4C545F;
    --nav-menu-bg-hover-color: #0000001a;
    --nav-menu-bg-active-color: #cccccc;
    --nav-menu-pri-text-normal-color: #cccccc;
    --nav-menu-pri-text-hover-color: #ffffff;
    --nav-menu-pri-text-active-color: #9c63££; 
    --nav-menu-hyper-link-normal-color: #9c63ff;
    --nav-menu-hyper-link-hover-color: #ffffff;
}

```

<div style = "display:none">
![Branding color](/static/assets/multi-tenancy/images/look-and-feel/branding-color-images.png)
![Link button](/static/assets/multi-tenancy/images/look-and-feel/link-btn-images.png)
![Primary button](/static/assets/multi-tenancy/images/look-and-feel/primary-btn-images.png)
![Secondary button](/static/assets/multi-tenancy/images/look-and-feel/secondary-btn-images.png)
![Stage background](/static/assets/multi-tenancy/images/look-and-feel/state-bg-image.png)
![Typography](/static/assets/multi-tenancy/images/look-and-feel/typography-images.png)
</div>