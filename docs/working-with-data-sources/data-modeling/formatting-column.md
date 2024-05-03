---
layout: post
title: Data Column Formatting – Embedded BI | Bold BI Docs
description: Learn how to handle data columns formatting such as, renaming column and changing data type in Bold BI Embedded.
platform: bold-bi
documentation: ug

---

# Formatting Columns

## Renaming column

   To rename a column, double click on the respective column to enable the edit mode, and type the modified name. Press the `<Enter>` key to confirm the changes.

   ![Column rename option](/static/assets/working-with-datasource/images/renamecolumn.PNG)

   Once the column has been renamed, the modifications will be reflected in the table.

   ![Renamed column](/static/assets/working-with-datasource/images/renamedcolumnrep.PNG)

   You can also rename the column by clicking on the `Settings` icon, which will be displayed as shown below.

   ![Settings icon](/static/assets/working-with-datasource/images/settings-icon.PNG)

   Click on this icon to open a dropdown menu with the option to `Rename Column`. Clicking on this option will enable the edit mode for that column.

   ![Rename option](/static/assets/working-with-datasource/images/selectrenamecolumn.PNG)

## Handling column type conversion

   Click on this icon to drop down the menu with the option to `Change Column Type`. Clicking on the `Change Column Type` option allows you to convert the column type.

   ![Select column](/static/assets/working-with-datasource/images/selectcolumn.PNG)

   The table below lists the column data types and their equivalent convertible types that are supported in Dashboard Designer.

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

## Show Value As

   Click on this icon to drop down the menu with the option `Show Value As`. Clicking on the `Show Value As` option allows you to convert the string column type into the desired string format.

   ![Select column](/static/assets/working-with-datasource/images/showvalueas.png)

   The table below illustrates the `Show Value As` types and their corresponding transformations.

   <table>
   <tr>
   <td>
   <b>Show Value As Type</b></td><td>
   <b>Transformation</b></td></tr>
   <tr>
   <td>
   Capitalize Each Word</td><td>
   Converts the first character in each word to uppercase and the remaining characters to lowercase of a string column.</td></tr>
   </table>
