---
layout: post
title: Transformation and Preview – Embedded BI | Bold BI Learning
description: Learn how to Transformation and preview in ETL application in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Transformation

In ``Tranformation`` page, convert extracted data into a suitable format for analysis. This stage includes data cleaning, filtering, aggregation, and normalization. Enrich data by integrating it with additional information.


1. Once the project data has been successfully transferred to the designated destination database, proceed by choosing a specific project and accessing the Transform tab located within the right side panel.

![Transform1](/static/assets/working-with-etl/images/datahub_t1.png)

2. To initiate the creation of a table in the designated location through SQL scripts, Click on the Add Table button. 

![Transform3](/static/assets/working-with-etl/images/plus-circle.png)

3. Input the desired table name into the field labeled "Table Name." If necessary, you can provide primary key values in a comma-separated format in the "Unique Column Name(s)" text box for further customization. 

### Drop Table and Unique Columns usage:

Check the 'Drop Table' checkbox if you want the existing table to be dropped and recreated during each extraction. This helps to avoid data duplication by recreating the transform table for every schedule. 
Click "Save" to apply changes or "Close" to cancel.

![Transform2](/static/assets/working-with-etl/images/transform_popup.png)

#### DATA DUPLICATION WARNING :

If the user does not select the "Drop Table" option and does not specify any Primary Key, the system will display a warning popup.
![Transform2](/static/assets/working-with-etl/images/duplication_warning.png)

##### OPTIONS:  
    Proceed: Continue with the current settings (duplicates may occur)
    Cancel: Go back and configure either Primary Key as Unique Column Name(s) or enable the "Drop Table" option to avoid duplication.

4. The data will initially be transferred to the `DuckDB` database within the designated `{project_name}` schema before undergoing transformation for integration into the target databases. As an illustration, in the case of a project named "datasync_pipeline", the data will be relocated to the `datasync_pipeline` table schema.

5. By default the select query will be formed and added in the transformation script based on the first table extracted in the pipeline. The script can be further modified based on the requirement.

6. The Extracted Tables list shows the list of tables extracted with its column and its data type.  Double clicking the table or column will allow to include them in the code editor for easy transformation.

![Transform4](/static/assets/working-with-etl/images/etl_extractedtables.png)


Sample Transformation scripts:

```SQL
select date_part('year', SalesDate) as "year", date_part('month',SalesDate) as "month", sum(Amount) as "TotalAmount" from datasync_pipeline.sales
group by date_part('year',SalesDate),date_part('month',SalesDate)
```

![Transform4](/static/assets/working-with-etl/images/etl_t6.png)

Note: The Transform Tables and Extracted Tables can be minimized to utilize the code editor area fully.

## Preview:

1. Click on **Run** button to view the results of the given query. 

![Transform5](/static/assets/working-with-etl/images/etl_t5.png)

> **Note:** The preview option only works after the source table data has been moved to destination database. Also, the preview can be minimized once utilized.

### Transformation Capabilities: 

1. In the Transform section, users have the capability to incorporate multiple tables into their projects.

![Transform5](/static/assets/working-with-etl/images/datahub_edit_transformtable.png)

2. Edit/Delete Table Confirmation Popup :

When a user clicks Edit or Delete, a confirmation popup appears: Deleting/Editing the table will affect dashboards and reports that depend on it. Are you sure you want to proceed?
    Proceed: Continue with edit or delete.    
    Cancel: Abort the action.
![Transform](/static/assets/working-with-etl/images/edit_warning.png)

3. Drag and drop the transform tables to reorder the sequence in which the transform tables should be executed, as well as reuse these tables for future analyses.

4. When users desire to incorporate Primary keys into the transform tables, they should input the primary key values during the process of adding or editing the tables.

![Transform5](/static/assets/working-with-etl/images/transform_popup.png)

> **IMPORTANT:** If a primary key is added, it must also be referenced in the SQL query.If the primary key is missing in the query, an error popup appears 

![Transform](/static/assets/working-with-etl/images/missing_primary_key.png)

5. After finishing the transformation, users should click the ``Save and Transform`` button. The tables will be transferred to the destination database during this process. Now the data will be transformed and moved to the destination
 
 ![Transform](/static/assets/working-with-etl/images/datahub_transform_save.png)
 
6. ``Save as Draft`` can be used to switch between transform and other tabs without losing the transformation query. 

> **IMPORTANT:** After finishing the transformation, users can see the results in Destination tab.

 ![Transform](/static/assets/working-with-etl/images/transform_results.png)
 
 ![Transform](/static/assets/working-with-etl/images/transform_results_destination.png)
 