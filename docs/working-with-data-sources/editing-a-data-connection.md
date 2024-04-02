---
layout: post
title: Editing a data connection – Embedded BI | Bold BI Learning
description: Learn how to edit a data connection associated with an existing data source in Bold BI Embedded application.
canonical: "/working-with-data-sources/editing-a-data-connection/"
platform: bold-bi
documentation: ug
---

# Editing a Data Connection

You can edit a data connection using the following steps:

1. Click the `Data Source` button in the configuration panel.

   ![Data button](/static/assets/working-with-datasource/images/databutton.png)

2. Select a data source listed in the data panel that you need to edit.

3. Click the highlighted icon to edit the selected data source connection.

   ![Edit data source icon](/static/assets/working-with-datasource/images/editdatasourceicon.png)

   Now, the respective data source will be opened in the data design view to handle the modification.

   ![Edit the datasource](/static/assets/working-with-datasource/images/editthedatasource.png)

4. Click the `Edit Connection` in the data design window toolbar.

   ![Edit connection button](/static/assets/working-with-datasource/images/editconnectionbutton.png)

    Now, the `Edit Connection` dialog opens.

   ![Edit connection schema](/static/assets/working-with-datasource/images/editconnectionretainschema.png)

5. Make the preferred changes and click `Reconnect`.

> **IMPORTANT:**  Reconnection will persist the dropped table(s), table relationships, data filters, and data configuration to widgets, unless the schema differs from the previous data connection. i.e., the reconnected database should have similar schema such as the previously connected database, which may exist in same or different location. If the reconnected database does not have a column that is available in previous one, reconnection will just ignore that column and its related settings and persist others. Beyond that level, reconnection will drop previous settings entirely.

> **NOTE:**  Cross-data source filter configuration handled in `Filters Configuration` window can not be maintained on reconnection even the schema is similar.
