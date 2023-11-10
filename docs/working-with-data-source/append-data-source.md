---
layout: post
title: How to configure Append data source in Bold BI | Bold BI Docs
description: The Append Data Source allows users to append selected files to an existing data source table. Currently, this feature is available for file types such as Excel, JSON, CSV, and XML.
platform: bold-bi
documentation: ug
---

# Append Data Source in Bold BI:

This section explains how to use the `Append Data` option in Bold BI Enterprise.

![Append data icon](/static/assets/working-with-datasource/append-data-from-file/images/append-ds-icon.png)

### Configuring the Append Data Source:

The `Append Data Source` allows users to append the selected files to an existing data source table. Currently, this feature is available for file types such as Excel, JSON, CSV, and XML.

![Append data icon button](/static/assets/working-with-datasource/append-data-from-file/images/append-ds-append-btn.png)

To append data in an existing data source, click on the `append data` icon. The dialog will open, as seen in the following.

![Append data dialog](/static/assets/working-with-datasource/append-data-from-file/images/append-ds-dialog.png)

Choose the table name from the selected tables dropdown in which the data should be appended.

The `Append Data Source` allows users to append both single and multiple files.

Click the `Browse File` to select the files you want to append, as shown in the following image.

![Append data browse button](/static/assets/working-with-datasource/append-data-from-file/images/append-ds-browse-btn.png)

Once the selected files are uploaded, the schema comparison will be done, and the validation status will be updated as follows.

1. Single file upload

    ![Append data Ready to append status](/static/assets/working-with-datasource/append-data-from-file/images/append-ds-success.png)

2. Multiple files upload

    ![Append data Multiple file status](/static/assets/working-with-datasource/append-data-from-file/images/append-ds-multiple-file-success-status.png)

If the schema validation has failed, delete the file by clicking the `Delete` icon and browse with a valid file to append again, as shown in the following image.

![Append data Invalid schema status](/static/assets/working-with-datasource/append-data-from-file/images/append-ds-failure.png)

Once you see the success message `Ready to append`, the Append and Save As options will be enabled.

###  Save As:

The `Save As` option allows you to create a new data source with the selected files along with the existing data source data. 

![Append data Save as button](/static/assets/working-with-datasource/append-data-from-file/images/append-ds-save-as-btn.png)

Click the `Save As` button and provide the new data source name and click the `Save` button.

![Append data Save button](/static/assets/working-with-datasource/append-data-from-file/images/append-ds-save-btn.png)

### Append:

The `Append` button will move the selected files data to the existing data source table.

![Append data append button](/static/assets/working-with-datasource/append-data-from-file/images/append-ds-buttons.png)

Click the `Append` button. 

After clicking the `Save As` or `Append` button, the append process will be initiated, and the append status will be shown as follows.

### Waiting Status: 

The Waiting pop-up indicates that the append process has started, as shown in the following image.

![Append data waiting pop up](/static/assets/working-with-datasource/append-data-from-file/images/append-ds-waiting-pop-up.png)

### Success Status: 

The Success pop-up indicates that the append process has been completed successfully, as shown in the following image.

![Append data success pop up](/static/assets/working-with-datasource/append-data-from-file/images/append-ds-success-pop-up.png)

### Failure Status:

 The Failure pop-up indicates that the append process has failed, as shown in the following image.

 ![Append data failure pop up](/static/assets/working-with-datasource/append-data-from-file/images/append-ds-failure-pop-up.png)

### Close Icon:

Click the `Close` icon to close the notification pop-up after the process completion, as shown in the following image.

![Append data close icon](/static/assets/working-with-datasource/append-data-from-file/images/append-ds-close-icon.png)