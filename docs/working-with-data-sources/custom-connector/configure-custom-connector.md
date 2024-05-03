---
layout: post
title: How to configure Custom Connector in Bold BI | Bold BI Docs
description: Learn how to configure the custom connector by creating a custom connector and you need to prepare a simple JSON file and upload it into Bold BI application.
platform: bold-bi
documentation: ug
---

# Custom Connector

A custom connector allows you to create a BoldBI connector by yourself. You can create a BoldBI connector for your REST API without having to wait for it to be implemented. 
To create a custom connector, you need to prepare a JSON file and upload it to Bold BI.

> **Note:** This feature is available in On-Premises Deployment but not in Syncfusion Managed Cloud Server.

## Configuring Custom connector 

This section explains how to configure a custom connector using a [JSON file](/working-with-data-sources/custom-connector/create-custom-connector/) in Bold BI enterprises.

  [Add](#add-custom-connector)
  
  [Edit/Manage](#edit-custom-connector)
  
  [Delete](#delete-custom-connector)
 
>**NOTE :** A custom connector can be  **Only modified**  by the **Administrator** of the site.

### Add Custom connector

Add a custom connector JSON file by following the given steps:

  1. Click the **Settings** icon in the left panel.

  2. Select the **Connectors** tab. This tab lists the available data sources and custom connectors in Bold BI.

     ![Settings](/static/assets/working-with-datasource/data-connectors/images/Customconnector/settingandconnector.png)

  3. Scroll down the Data Source panel and navigate to the **Custom connector panel**.
    
  4. Click **Add new Connector**.

     ![Addnewconnector](/static/assets/working-with-datasource/data-connectors/images/Customconnector/Addcustomconnector.png)
    
    
  5. Upload and Save the custom connector by clicking the **Save** button in the popup.
     
     ![Save](/static/assets/working-with-datasource/data-connectors/images/Customconnector/Saveicon.png)
    
  6. Click the **Save** button at the end of the custom connector panel. If you proceed without saving the configuration, you will not be able to see your connector(s) in the data source panel.
  
     ![ConformSave](/static/assets/working-with-datasource/data-connectors/images/Customconnector/Confirmsave.png)

  7. You can create a data source by assuming your custom connector as a data source on the server or designer page.

### Edit Custom connector

 Edit a custom connector by uploading a new or updated JSON file by following the given steps.

  1. Click the **Edit icon** on the custom connector that needs to be edited.
    
     ![Edit](/static/assets/working-with-datasource/data-connectors/images/Customconnector/EditConnector.png)
 
  2. Re-upload the new or updated custom connector JSON file using the corresponding custom connector JSON file upload window.
 
  3. Upload and save your new custom connector by clicking the **Save** button in the popup.
    
     ![Save](/static/assets/working-with-datasource/data-connectors/images/Customconnector/Saveicon.png)
  4. Click the **Save** button at the end of the custom connector panel. If you proceed without saving the configuration, your new JSON file will not be uploaded.

     ![conformSave](/static/assets/working-with-datasource/data-connectors/images/Customconnector/Confirmsave.png)

### Delete Custom Connector

 You can delete the added Custom connector JSON file by following the given steps:

  1. To delete the specified custom connector, click the **Delete Icon**.
    
     ![Delete](/static/assets/working-with-datasource/data-connectors/images/Customconnector/DeleteConnector.png)
 
  2. A confirmation popup will open. Click the **Yes** button to delete the custom connector.

     ![Conformdelete](/static/assets/working-with-datasource/data-connectors/images/Customconnector/confirmdelete.png)
