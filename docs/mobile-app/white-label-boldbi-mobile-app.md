---
layout: post
title: White Labeling Mobile App – Embedded Analytics | Bold BI Docs
description:  This page discusses about creating a white label Bold BI mobile app, publishing it in Play Store and App Store and view your on-premises hosted site through it.
platform: bold-bi
documentation: UG

---

# White labeling the Bold BI Mobile App

You can white label the Bold BI mobile application by following these requirements:
* Application White Labeling 
* Play Store Publishing
* App Store Publishing

## Application White Labeling
Utilize the `Content` and `Images` to showcase the Bold BI branding in the mobile application, incorporating the following details.

### Required Content for White Labeling

| **Item**              | **Details**      | **Preview**           |
|---------------------|----------------|---------------------|
| Application Name    | -              | Bold BI Mobile      |
| Package Name / App ID | -            | com.syncfusion.dashboard |
| About the app content | <li>Content about the Bold BI mobile application. <li>Link to learn more about your product.| ![About the app content](/static/assets/accessing-through-mobile-app/images/content-about-the-app.png)|
| To display the Demo option at the Configuration page |To view your demo sample dashboards, please provide the server URL and demo account username and password. | ![Demo option at the configuration page](/static/assets/accessing-through-mobile-app/images/demo-option-at-configuration-page.png) |

### Required Image for White Labeling

| **Item**              | **Details**      | **Preview**           |
|---------------------|----------------|---------------------|
| App Icon | <strong>Android: (Size in pixels, format: PNG)</strong><br>48 x 48<br>72 x 72<br>96 x 96<br>144 x 144<br><br><strong>iOS: (Size in pixels, format: PNG)</strong><br>29 x 29<br>40 x 40<br>50 x 50<br>57 x 57<br>58 x 58<br>72 x 72<br>76 x 76<br>80 x 80<br>87 x 87<br>100 x 100<br>114 x 114<br>120 x 120<br>144 x 144<br>152 x 152<br>167 x 167<br>180 x 180<br><br><strong>Note:</strong> Image background should be colored. | ![Andriod App Logo](/static/assets/accessing-through-mobile-app/images/andriod-app-logo.png)<br> |
|Splash screen image | <strong>Android: (Size in pixels, format: PNG)</strong><br>227 x 60<br>340 x 90<br>452 x 118<br>679 x 178<br><br><strong>iOS: (Size in pixels, format: PNG)</strong><br>246 x 65<br>490 x 128<br>736 x 193<br> | ![Dashboard Mobile](/static/assets/accessing-through-mobile-app/images/dashboard-mobile.png)<br><br>![Syncfusion Dashboard Mobile](/static/assets/accessing-through-mobile-app/images/syncfusion-dashboard-mobile.png)
| Configuration and Login page background images | <strong>Android: (Size in pixels, format: PNG &amp; jpg</strong>)<br><strong>Portrait:</strong><br>360 x 640<br>540 x 960<br>720 x 1280<br>1080 x 1920<br><br><strong>Landscape:</strong><br>640 x 360<br>960 x 540<br>1280 x 720<br>1920 x 1080 <br><br><strong>iOS: (Size in pixels, format: jpg</strong>)<br><strong>Portrait:</strong><br>768 x 1024<br>320 x 568<br>375 x 667<br>414 x 736<br>1024 x 1366<br><br><strong>Landscape:</strong><br>1024 x 768<br>568 x 320<br>667 x 375<br>736 x 414<br>1366 x 1024<br><br><strong>iOS Tablet(Portrait):</strong><br>750 x 1334<br>1080 x 1920<br>320 x 480<br>640 x 960<br>640 x 1336<br>1536 x 2048 <br><br><strong>Note:</strong> App name should be included in the image itself and the label position should be top in the portrait mode and top left in the landscape mode.| ![Configuration Login Page](/static/assets/accessing-through-mobile-app/images/configuration-login-page.png)<br><br>![Configuration Login Page](/static/assets/accessing-through-mobile-app/images/configuration-login-page-landscape.png)|
| Company Logo | <strong>Android: (Size in pixels, format: PNG</strong>)<br>254 x 88<br>381 x 132<br>508 x 176<br>762 x 264<br><br><strong>iOS: (Size in pixels, format: PNG</strong>)<br>508 x 176<br>1016 x 352 <br><br><strong>Note:</strong>Image background should be transparent.| ![Company Logo](/static/assets/accessing-through-mobile-app/images/company-logo.png)<br><br>Preview in the app<br>![Company Logo Preview](/static/assets/accessing-through-mobile-app/images/company-logo-preview.png)

## Play Store Publishing

You need the following content and images to properly represent your branding when publishing it on the Play Store.

### Required Content for Publishing

<table>
<tbody>
<tr>
<td colspan="2">
<p><strong>Localizable Information</strong></p>
</td>
</tr>
<tr>
<td>
<p>Default language</p>
</td>
<td>
<p>English (United State) en-US</p>
</td>
</tr>
<tr>
<td>
<p>Title</p>
</td>
<td>
<p>Ex: Bold BI Dashboard</p>
</td>
</tr>
<tr>
<td colspan="2">
<p><strong>Product Details</strong></p>
</td>
</tr>
<tr>
<td>
<p>Title</p>
</td>
<td>Ex: Bold BI Dashboard</td>
</tr>
<tr>
<td>
<p>Short description (80 max)</p>
</td>
<td>
<p>Bold BI Dashboard mobile app lets you access your Bold BI dashboards on the go.</p>
</td>
</tr>
<tr>
<td>
<p>Full description</p>
</td>
<td>
<p>Bold BI Dashboard mobile app lets you access your Bold BI dashboards on the go. Get insights into your data by navigating through your dashboards and stay up to date with the latest data.</p>
</td>
</tr>
<tr>
<td>
<p>Promo video URL link</p>
</td>
<td>
<p>Please add YouTube link to the promo video.</p>
</td>
</tr>
<tr>
<td colspan="2">
<p><strong>Contact Details</strong></p>
</td>
</tr>
<tr>
<td width="312">
<p>Website</p>
</td>
<td>
<p>Ex: boldbi.com</p>
</td>
</tr>
<tr>
<td>
<p>Email (Please provide an email address where you may be contacted. This address will be publicly displayed with your app).</p>
</td>
<td>
<p>Please provide an email address where you may be contacted. This address will be publicly displayed with your app</p>
</td>
</tr>
<tr>
<td>
<p>Phone</p>
</td>
<td>
<p>Please provide a contact number.</p>
</td>
</tr>
<tr>
<td colspan="2">
<p><strong>Privacy Policy</strong></p>
</td>
</tr>
<tr>
<td>
<p>Privacy Policy URL</p>
</td>
<td>
<p>Company’s privacy policy URL link.</strong></p>
</td>
</tr>
<tr>
<td colspan="2">
<p><strong>Pricing and Distribution</p>
</td>
</tr>
<tr>
<td>
<p>This application is paid or free.</p>
</td>
<td>Please mention whether your application is paid or free.
</td>
</tr>
<tr>
<td>
<p>Countries</p>
</td>
<td>
<p>All</p>
</td>
</tr>
<tr>
<td>
<p>Contains ads</p>
</td>
<td>
<p>No</p>
</td>
</tr>
</tbody>
</table>

### Required Image for Publishing

| **Images**              | **Image Size**      | **Sample**           |
|---------------------|----------------|---------------------|
| Screenshots for Phones (Minimum 2 and maximum 8 screenshots). | <li>JPEG or 24-bit PNG (no alpha)<li>Minimum dimension: 320px<li>Maximum dimension: 3840px<li>The maximum dimension of your screenshot cannot be more than twice, if the dimension is minimum. | ![Screenshot for Phone](/static/assets/accessing-through-mobile-app/images/screenshot-for-phone.png) |
| Screenshots for tablet <br>(Minimum 2 and maximum 8 screenshots). | <li>7-inch screenshot<li>10-inch screenshot | ![Screenshot for Phone](/static/assets/accessing-through-mobile-app/images/screenshot-for-tablet.png)|
| Hi-res icon (App icon) | <li>512 x 512<li>32-bit PNG (with alpha) |  ![Hi Res Icon](/static/assets/accessing-through-mobile-app/images/hi-res-icon.png)|

Please click on [this documentation](https://support.google.com/googleplay/android-developer/answer/1078870) for more details about screenshots and images.

## App Store Publishing

You will need the following content and images to represent your branding when publishing it in the App Store.

### Required Content for Publishing

<table>
<tbody>
<tr>
<td colspan="2">
<p><strong>Localizable Information</strong></p>
</td>
</tr>
<tr>
<td>
<p>Name</p>
</td>
<td>Ex: Bold BI Dashboard</td>
</tr>
<tr>
<td>
<p>Privacy Policy URL</p>
</td>
<td>Company’s privacy policy URL link.</td>
</tr>
<tr>
<td colspan="2">
<p><strong>General Information</strong></p>
</td>
</tr>
<tr>
<td>
<p>Primary language</p>
</td>
<td>Ex: en-us</td>
</tr>
<tr>
<td colspan="2">
<p><strong>Version Information</strong></p>
</td>
</tr>
<tr>
<td>
<p>Description (4000 max)</p>
</td>
<td>
<p>Bold BI Dashboard mobile app lets you access your Bold BI dashboards on the go. Get insights into your data by navigating through your dashboards and stay up to date with the latest data.</p>
</td>
</tr>
<tr>
<td>
<p>Keywords</p>
</td>
<td width="278">
<p>Bold BI, Dashboard, Analytics, etc.</p>
</td>
</tr>
<tr>
<td>
<p>Support URL</p>
</td>
<td>
<p>Please provide your company’s support URL link.</p>
</td>
</tr>
<tr>
<td>
<p>Marketing URL (optional)</p>
</td>
<td>
<p>Please provide your company’s support URL link but it is optional.</p>
</td>
</tr>
<tr>
<td colspan="2">
<p><strong>General App Information</strong></p>
</td>
</tr>
<tr>
<td>
<p>Copyright</p>
</td>
<td>The name of the person or entity that owns the exclusive rights to your app, preceded by the year the rights were obtained (for example, "2008 Acme Inc."). Do not provide a URL</td>
</tr>
</tbody>
</table>

### Required Image for Publishing

| **Device**              | **Image Size**      | **Sample**           |
|---------------------|----------------|---------------------|
| 3.5-inch retina display screenshots (may use 5.5, 4.7, or 4-inch display).<br><br><strong>Note:</strong><br>Need maximum 5 screenshots. | <li>72 dpi, RGB, flattened, no transparency.<li>High-quality JPEG or PNG image file format.<li>Any of the following sizes:<ul><li>640 x 920 pixels for minimum hi-res portrait (without status bar).<li>640 x 960 pixels for maximum hi-res portrait (full screen).<li>960 x 600 pixels for minimum hi-res landscape (without status bar).<li>960 x 640 pixels for maximum hi-res landscape (full screen). | ![App Store Publising Phone](/static/assets/accessing-through-mobile-app/images/app-store-publishing-phone.png) |
| 4-inch retina display screenshots (may use 5.5- or 4.7-inch display)<br><br><strong>Note:</strong><br>Need maximum 5 screenshots | <li>72 dpi, RGB, flattened, and no transparency.<li>High-quality JPEG or PNG image file format.<li>Any of the following sizes:<ul><li>640 x 1096 pixels for minimum portrait (without status bar).<li>640 x 1136 pixels for maximum portrait (full screen).<li>1136 x 600 pixels for minimum landscape (without status bar).<li>1136 x 640 pixels for minimum landscape (full screen). |  |
|4.7-inch retina display screenshots (may use 5.5-inch display)<br><br><strong>Note:</strong><br>Need maximum 5 screenshots | <li>72 dpi, RGB, flattened, and no transparency.<li>High-quality JPEG or PNG image file format.<li>750 x 1334 pixels for hi-res portrait.<li>1334 x 750 pixels for hi-res landscape. | |
| 5.5-inch retina display screenshots.<br><br><strong>Note:</strong><br>Need maximum 5 screenshots. | <li>72 dpi, RGB, flattened, and no transparency.<li>High-quality JPEG or PNG image file format.<li>1242 x 2208 pixels for hi-res portrait.<li>2208 x 1242 pixels for hi-res landscape. | |
| 9.7-inch retina display screenshots (may use 12.9-inch Display)<br><br><strong>Note:</strong><br>Need maximum 5 screenshots. | <li>72 dpi, RGB, flattened, and no transparency.<li>High-quality JPEG or PNG image file format.<li>Any of the following sizes:<ul><li>1024 x 748 pixels for minimum landscape (without status bar).<li>1024 x 768 pixels for maximum landscape (full screen).<li>2048 x 1496 pixels for minimum hi-res (without status bar).<li>2048 x 1536 pixels for maximum hi-res landscape (full screen).<li>768 x 1004 pixels for minimum portrait (without status bar).<li>768 x 1024 pixels for maximum portrait (full screen).<li>1536 x 2008 pixels for minimum hi-res portrait (without status bar).<li>1536 x 2048 pixels for maximum hi-res portrait (full screen). | ![App Store Publising Tablet](/static/assets/accessing-through-mobile-app/images/app-store-publishing-tablet.png) |
| App Icon | 1024 x 1024 pixels (do not scale up smaller artwork, because this could appear pixelated and blurry).<br><br>72 dpi, RGB, flattened, no transparency, and no rounded corners.<br><br>High-quality JPEG or PNG image file format.<br><br><strong>Note:</strong><br> The small icon (57 x 57 pixels for iPhone and iPod touch, 50 x 50 and 72 x 72 pixels for iPad) that you include inside the build, is used on the device Home screen when installed. | ![App Store Publising App Icon](/static/assets/accessing-through-mobile-app/images/app-store-publishing-app-icon.png) |

Please click on the [link](https://developer.apple.com/library/content/documentation/LanguagesUtilities/Conceptual/iTunesConnect_Guide/Chapters/Properties.html#//apple_ref/doc/uid/TP40011225-CH26-SW10) for more information about screenshots and images.
> **NOTE:**<br>
> •	Screenshots must be in the JPG or PNG format, and in the RGB color space.<br>
> •	App previews must be in the M4V, MP4, or MOV format and cannot exceed 500 MB.

