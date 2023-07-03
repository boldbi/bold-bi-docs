---
layout: post
title: Upload Dashboards Offline to Tenants - Cloud BI | Bold BI
description: Discover how to utilize Bold BI's upload functionality for the seamless uploading of dashboards to other tenants, with Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Upload dashboards in the Bold BI application

In Bold BI Cloud, You can upload dashboards to any tenants using the bbix file. Here is a step-by-step guide on how to upload dashboards to sites in Bold BI:

## Prepare dashboards for uploading

To upload the dashboard(s) from site(s), follow these steps:

1. Click on the below option to upload dashboard in ‘Bold BI’. 

   ![Upload Plus](/static/assets/resource-migration/migrate-dashboards-offline/images/upload-plus.png)

2. Click the `Upload Dashboards` button to open the UI where you can upload the dashboards. This action will open the dashboard upload interface, where you can upload the desired dashboards

   ![Upload Dashboards](/static/assets/resource-migration/migrate-dashboards-offline/images/upload-dashboards.png)

3. In the upload interface follow the instructions to select the dashboard files you wish to upload.

    * After the dashboard uploads, the interface will be rendered and displayed on the user interface. 
    * Click on the `Browse` option to navigate to the downloaded file location.
    * The dashboard files can be either with `bbix` or `zip` extension.

    ![Upload Browse](/static/assets/resource-migration/migrate-dashboards-offline/images/upload-browse.png)

4. After selecting the required dashboard files to upload, wait for the upload process to complete.

5. You will receive a message indicating that the files have been successfully uploaded. 

6. Once you see this message, you can proceed to the next step by clicking the `Next` button.

    ![Upload Next](/static/assets/resource-migration/migrate-dashboards-offline/images/upload-first-next.png)

> **NOTE:** Only files that have been successfully uploaded will be considered for the uploading process. If any files do not display the message 'Uploaded successfully,' they will not be uploaded and will be discarded. Therefore, ensure that all dashboard files have been successfully uploaded before proceeding to the next step.

## Updating the dashboard files for uploading.

After successfully uploading the required dashboard files, a new user interface will be displayed to update the details of the uploaded dashboards. The updated interface will appear as shown below

![Upload Second](/static/assets/resource-migration/migrate-dashboards-offline/images/upload-second.png)

### Updating the dashboard information

The following information can be updated in the uploaded dashboards,

1. Updating the category.

    On clicking the `Category` the category can be changed.
    Also there is option to create a new category as shown below.

    ![Upload Category](/static/assets/resource-migration/migrate-dashboards-offline/images/upload-create-category.png)

    On clicking the `Create new Category` the new category will be created.
	
2. Name and Description.

    You can update the name and description of the selected dashboard using the below inputs.

    ![Upload NameDesc](/static/assets/resource-migration/migrate-dashboards-offline/images/upload-name-desc.png)

## Updating the data source information

1. The uploaded dashboard will have data sources that will be having `Pending` or `Completed` state based on the configuration completed for that particular data source.
The following are two data sources with different configuration states:

    ![Upload DsCompleted](/static/assets/resource-migration/migrate-dashboards-offline/images/upload-ds-complete.png)
    ![Upload DsPending](/static/assets/resource-migration/migrate-dashboards-offline/images/upload-ds-pending.png)

    > **NOTE:** Dashboards downloaded by enabling the `Include sensitive information` will be having all data sources in the `Completed` state, if not they all will be in `Pending` state.

2. To change the Pending state, you need to click the data source list as shown below.
    ![Upload DsList](/static/assets/resource-migration/migrate-dashboards-offline/images/upload-ds-list.png)
    
3. A dialog will render, which provides two options to update the configuration of the data source as follows:

    * [Configure the data source](#configure-the-data-source)

   * [Map to an existing data source](#map-to-an-existing-data-source)

### Configure the data source

This will provide an option to alter the details of the data source, as shown below.

![Upload DsConfig](/static/assets/resource-migration/migrate-dashboards-offline/images/upload-ds-config.png)

After the details are updated and the `Done` button is clicked the data source will be validated.
The data source configuration status will be updated as `Completed` as shown below.

![Upload DsConfigCompleted](/static/assets/resource-migration/migrate-dashboards-offline/images/upload-ds-configcompleted.png)

### Map to an existing data source

This will provide the option to link the current data source to a data source that is already present in the same tenant, as shown below.

![Upload DsExisting](/static/assets/resource-migration/migrate-dashboards-offline/images/upload-ds-existing.png)

After selecting the data source and clicking on the `Done` button the data source will be validated.
The data source configuration status will be updated as `Completed` as shown below.

> **NOTE:** The data source schemas should match in both of the above options.

### User interface indications

You may find that in the left side of the user interface within the `Dashboard List` one of the dashboards is in the `Needs Attention` state and `Configuration Completed` state, as shown below.

![Upload Second](/static/assets/resource-migration/migrate-dashboards-offline/images/upload-second.png)

After all of the data sources present in a dashboard are configured and updated as `Completed`, then only the dashboard listing will be updated as `Configuration Completed`.

For example in the above image, you have `HR Dashboard` in `Needs Attention` state, since the only data source present in the dashboard is still in pending state. If the dashboard has more than one data source, all of them should be in `Completed` state so that the dashboard will be updated as `Configuration Completed`.

Similarly, You will be updating the bottom of the page with the updated information regarding the dashboard status as shown below.

![Upload Bottom Footer](/static/assets/resource-migration/migrate-dashboards-offline/images/upload-bottom-footer.png)

You have the option to filter the dashboards based on the Configuration State, as shown below.

![Upload Listing Filter](/static/assets/resource-migration/migrate-dashboards-offline/images/upload-listing-filter.png)

After completion of the data source configuration, the user interface will look as follows:

![Upload Configuration Completed](/static/assets/resource-migration/migrate-dashboards-offline/images/upload-configuration-completed.png)



### Working with upload drafts

During any moment of this process, you may close the dialog by clicking on the close button or cross icon as shown below.

![Upload Dialog Close](/static/assets/resource-migration/migrate-dashboards-offline/images/upload-dialog-close.png)

 After clicking, you will get a message to close along with an option to navigate to the **Upload Drafts** page as shown below.

![Upload Dialog Close Confirm](/static/assets/resource-migration/migrate-dashboards-offline/images/upload-dialog-closeconfirm.png)

The uploaded files will be present on the upload-drafts page, once redirected to the page the user interface will be shown as follows:

![Upload Drafts Page](/static/assets/resource-migration/migrate-dashboards-offline/images/upload-drafts-page.png)

You can select multiple dashboards from the upload-drafts page to continue where you left off. To continue, select the multiple dashboards and click the `Complete Upload` button, as shown below.

![Upload Drafts Continue](/static/assets/resource-migration/migrate-dashboards-offline/images/upload-drafts-continue.png)

This will render the user interface to upload the dashboards.

### Uploading the dashboards.

> **NOTE:** The dashboards that have been marked as `Configuration Completed` will be only considered for uploading.

After clicking the `Upload` button the dashboards will be uploaded and the user interface will look as shown once it is completed.

![Upload Completed](/static/assets/resource-migration/migrate-dashboards-offline/images/upload-completed.png)

You may find the uploaded dashboards present in the tenant along with other dashboards present if any.