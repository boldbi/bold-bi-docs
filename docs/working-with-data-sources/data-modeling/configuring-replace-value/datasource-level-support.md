---
layout: Post
title: Configuring the Replace Value Support in Datasource Level
description: This page demonstrates how to configure the replace value support at Datasource level in Bold BI Embedded
platform: bold-bi
documentation: ug
---

# Replace Value Support in Data Source Level

Replace Value support at the datasource level allows you to modify all column values in the datasource that are null or blank.

  ![Replace icon](/static/assets/working-with-datasource/configuring-replace-value/images/sshot1.png)

The replace value option should be provided on the Data Source Designer page. Here, you can only edit null and blank values by clicking on the replace value icon.

![Replace value icon](/static/assets/working-with-datasource/configuring-replace-value/images/sshot-2.png)

The dialogue will open as shown.

  ![Edit icon](/static/assets/working-with-datasource/configuring-replace-value/images/sshot-3.png)

By using the edit icon, you can replace any value instead of null or blanks.

  ![Null value replace](/static/assets/working-with-datasource/configuring-replace-value/images/sshot-4.png)

Please click the Apply button.
 
  ![Save button](/static/assets/working-with-datasource/configuring-replace-value/images/sshot-5.png)

After saving the datasource, the changes will be updated in the dashboard as follows.

 ![Null value replace output](/static/assets/working-with-datasource/configuring-replace-value/images/sshot-6.png)

 **NOTE:** This feature is applicable to only string columns in the datasource.