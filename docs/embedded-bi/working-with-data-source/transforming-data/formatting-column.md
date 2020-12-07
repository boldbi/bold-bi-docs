---
layout: post
title: Data Column Formatting – Embedded BI | Bold BI Docs
description: Learn how to handle data columns formatting such as, renaming column and changing data type in Bold BI Embedded.
canonical: "/cloud-bi/working-with-data-source/formatting-column/"
platform: bold-bi
documentation: ug
---

# Formatting Columns

## Renaming column

   Rename the column, if required, through double clicking the respective column to enable the edit mode and typing the modified name. Press `<Enter>` key to commit the modification done.

   ![Column rename option](/static/assets/embedded/working-with-datasource/images/renamecolumn.PNG)

   Once modified, the changes will be reflected in the column in the table.

   ![Renamed column](/static/assets/embedded/working-with-datasource/images/renamedcolumnrep.PNG)

   You can also rename the column through the `Settings` icon which will be displayed like below.

   ![Settings icon](/static/assets/embedded/working-with-datasource/images/settings-icon.PNG)

   Click this icon to drop down the menu with `Rename Column`, clicking which the edit mode will be enabled in that column.

   ![Rename option](/static/assets/embedded/working-with-datasource/images/selectrenamecolumn.PNG)

## Handling column type conversion

   Click this icon to drop down the menu with `Change Column Type`, clicking `Change Column Type` option allows to convert the column type.

   ![Select column](/static/assets/embedded/working-with-datasource/images/selectcolumn.PNG)

   The following table represents the column types and their equivalent convertible types that are supported in Dashboard Designer.

   <table>
   <tr>
   <td>
   <b>Column Data Type</b></td><td>
   <b>Equivalent Convertible Types</b></td></tr>
   <tr>
   <td>
   Date</td><td>
   String</td></tr>
   <tr>
   <td>
   Integer</td><td>
   Date, String</td></tr>
   <tr>
   <td>
   String</td><td>
   Date</td></tr>
   </table>
