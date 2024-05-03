---
layout: post
title: Customizing publish dialog in designer embedding | Bold BI Docs
description: Learn how to customize the publish dialogs for getDashboardCategories, createDashboardCategory and saveDashboard in JavaScript embedding for Bold BI Designer.
platform: bold-bi
documentation: ug
---

# How to create your own Save or Publish dialog for Designer in Javascript embedding
In Javascript-based embedding, there are methods for creating categories, getting categories, and saving dashboard actions. With the help of these methods, you can design your prompt and bind actions to your UI. This section explains how to create your own Publish or Save prompt with the necessary steps to use in your designer embedding.

A Publish or Save dialog has been created and used in the dashboard designer embedding. Follow the provided steps to apply it in your environment.

## Steps to follow for customizing the publish dialog in designer embedding
1. Please [download](https://github.com/boldbi/samples/tree/master/Scenario%20Based%20Samples/Custom%20Publish%20Dialog%20in%20Designer%20Embedding) the ASP.NET Core Sample.

2. Provide the details of your embed properties in the `EmbedProperties.cs` file, and then proceed to run your application.

    ![AddEmbedProperties](/static/assets/faq/images/add_embed_properties.png)

    <meta charset="utf-8"/>
    <table>
    <tbody>
    <tr>
        <td align="left">RootUrl</td>
        <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, http://demo.boldbi.com/bi)</td>
    </tr>
    <tr>
        <td align="left">SiteIdentifier</td>
        <td align="left">For Bold BI Enterprise edition, it should be like site/site1. For Bold BI Cloud, it should be empty string.</td>
    </tr>
    <tr>
        <td align="left">Environment</td>
        <td align="left">For Bold BI application environment (if Cloud, it should be like `cloud`, if Enterprise, it should be like `enterprise`)</td>
    </tr>
    <tr>
        <td align="left">DashboardId</td>
        <td align="left">Dashboard id which you want to render in the applciation.</td>
    </tr>
    <tr>
        <td align="left">UserEmail</td>
        <td align="left">UserEmail of the Admin in your Bold BI, which would be used to get the dashboards list.</td>
    </tr>
   <tr>
        <td align="left">EmbedSecret</td>
        <td align="left">Get your EmbedSecret key from the Embed tab by enabling the <code>Enable embed authentication</code> in the <a href='/site-administration/embed-settings/'>Administration page</a> </td>
    </tr>
    </tbody>
    </table>

3. To open your own Publish dialog, use the `actionBegin` event when creating the Bold BI object as shown below.

    ![DefineActionBegin](/static/assets/faq/images/actionbegin_define.png)

4. When clicking the `Publish` button in the designer, the actionBegin event will be triggered with the type value set as `PublishAsAction`. The dialog has been created using EJ2 controls such as Dropdown, Textbox, and Button.

    ![ClickPublishDropdown](/static/assets/faq/images/click_publish_dropdown.png)

 5. To retrieve the categories information, including the category name and category ID, the `getDashboardCategories()` method is called as shown below. For further details, refer to  [getDashboardCategories()](/embedding-options/embedding-sdk/embedding-api-reference/methods/#getdashboardcategories).

    ![CreatePublishPanel](/static/assets/faq/images/call_get_dashboard_category.png)

6. Once you receive the category list, bind it to the Drop Down List of the `Select Category`, and it will be displayed as a selection option.

    ![SelectCategoryDropDown](/static/assets/faq/images/popup_select_category_dropdown.png)

    ![ShowListCategory](/static/assets/faq/images/select_category_dropdown.png)

7. A new pop-up has been created for creating a new category, which will appear when clicking the `add` icon in the publish dialog.

     ![CreateNewpopup](/static/assets/faq/images/click_add_button.png)
         
8. Get the inputs for the `category Name` and `Description` from the create category dialog when creating a new category using the `createDashboardCategory()` method available in Bold BI. For more information, refer to [createDashboardCategory()](/embedding-options/embedding-sdk/embedding-api-reference/methods/#createdashboardcategory).

    ![ClickSaveCategory](/static/assets/faq/images/save_new_category.png)

    ![SaveNewCategory](/static/assets/faq/images/popup_add_category.png)

9. To save or publish the dashboard with the provided details, you should call the `saveDashboard()` method and pass the `dashboardName`, `categoryId`, `categoryName`, and `description` as parameters. For additional information, refer to the  [saveDashboard()](/embedding-options/embedding-sdk/embedding-api-reference/methods/#savedashboard).

    ![SaveDashboard](/static/assets/faq/images/popup_publish_button.png)

    ![ClickPublish](/static/assets/faq/images/publish_dashboard.png)

10. Now, your new dashboard will be published in a respective category. The same method will be used to `publish` the existing dashboard and to `publishAs` the new dashboard as an extension of the existing one.

    ![OpenPublishDialog](/static/assets/faq/images/publish_dialog_open.png)