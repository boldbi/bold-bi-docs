---
layout: post
title: Configure Data Relationship in Embedded BI | Bold BI Docs
description: Learn how to create relationships between multiple tables based on one or more conditions when configuring a data source in Bold BI Embedded.
platform: bold-bi
documentation: ug

--- 

# Configuring Data Relationship

In data modeling, relationships between tables are essential for organizing and analyzing data effectively. A `Data Relationship` defines how data in one table connects to data in another, enabling seamless integration and accurate reporting. By configuring relationships such as One-to-Many, Many-to-One, and Many-to-Many, users can build more dynamic and scalable dashboards. These relationships eliminate the need for complex joins and improve query performance, making it easier to visualize and interpret data across multiple sources

## Data Relationships
In addition to traditional joins, Bold BI Embedded now supports One-to-Many, Many-to-One and Many-to-Many relationships between tables.

  ![Relation toggle disable](/static/assets/working-with-datasource/images/relationToggleIcon.png)
 

If the Relation toggle is enabled and two tables are dragged and dropped, the Join icon will act as a Relation icon.

  ![Relation toggle enable](/static/assets/working-with-datasource/images/relationToggleEnabled.png)

In the Data Design View, the Join icon in the tools pane will be disabled if only one table is present in the Table Design View.
 
  ![Relation single table](/static/assets/working-with-datasource/images/relationSingleTableDrag.png)

 Once a second table is added (dragged and dropped), the Join icon becomes enabled and functions as a Relation icon.

 ![Relation double table](/static/assets/working-with-datasource/images/twoTablesRelationIcon.png)


> **NOTE:** If the Relation toggle is disabled, dragging and dropping two tables will allow the Join icon to function as a Join tool, not a Relation tool.

### Why Use Relationships in Tables?

Relationships help:

* Avoid data duplication
* Maintain data integrity
* Enable complex queries (e.g., join tables)
* Organize data logically (e.g., students in departments)

Currently Bold BI supports Relationship
* One-to-Many Relationship
* Many-to-One Relationship
* Many-to-Many Relationship

### One-to-Many Relationship

In a One-to-Many relationship:

One record in Table A can be related to many records in Table B, But each record in Table B is related to only one record in Table A

* One Department has many Students
* Each Student belongs to one Department

 ![Relation sample data](/static/assets/working-with-datasource/images/relationOneToManyEx.png)

 ### How to configure the One to Many relationship in Bold BI

* After enabling the Relation icon and dragging and dropping two relationship-supported tables (as discussed above), click on the Join icon. A popup window will appear to manage the relationship.

  ![Relation Manage](/static/assets/working-with-datasource/images/manageRelation.png)

* Click on the "New Relationship" button to begin creating a relationship between tables.

* Choose the "From Table" and "To Table" to define the direction of the relationship.

* Validate the relationship columns by selecting the appropriate key columns from each table that define the connection.

* Choose the cardinality (e.g., One-to-Many, Many-to-One, Many-to-Many) based on the nature of the data.

  ![Relation create](/static/assets/working-with-datasource/images/onetomanyCreateDialog.png)


  ![Relation cardinality](/static/assets/working-with-datasource/images/relationCardinality.png)

* Click the "Save" button to confirm and create the relationship.

* The relationship will then be saved and managed within the Manage Relationships window.

* From there, you can edit, or delete existing relationships as needed.

  ![Relation status](/static/assets/working-with-datasource/images/savedRelationsOneToMany.png)

* Save the data source after configuring relationships.

* Proceed to design the dashboard using appropriate widgets.

* Use the related tables to bind data to widgets and visualize meaningful insights.

### Demonstrating Data Differences: Join vs Relationship

* The data differences between Join and Relationship have been demonstrated using the following images.

* We used the same column from both tables to highlight how:

* Joins may result in duplicate or mismatched records if not properly configured.

* Relationships help maintain data integrity and eliminate duplicates through structured linking.

  ![Relation One to Many Data](/static/assets/working-with-datasource/images/relationJoinOneToManyCompare.png)

### How to configure the Many to One relationship in Bold BI

A many-to-one relationship occurs when multiple records in one table are associated with a single record in another table.

* Many records in Table A can be related to one record in Table B 
* But saying each record in Table B is related to many records in Table A 

 From Table A to Table B: Many-to-One
(e.g., many students belong to one department)

  ![Relation Many to One](/static/assets/working-with-datasource/images/ManytoOneRelation.png)

### How to configure the Many to Many relationship in Bold BI using Bridge Table

To set up a Many-to-Many relationship in Bold BI using the example of Students, Departments, and a bridge table StudentDepartment, follow these steps:

### Tables Involved
* Students
* Departments
* StudentDepartment (Bridge table)

Steps to Set Up in Bold BI

1. Load the Tables
Import all three tables (Students, Departments, StudentDepartment) into Bold BI.
  ![Relation three table](/static/assets/working-with-datasource/images/manytoManythreeTables.png)

2. Define Relationships
Go to Manage relationship by clicking the join icon in Bold BI BI and create the following relationships:

Column : Students[StudentID] → StudentDepartment[StudentID]

Cardinality: One-to-Many

  ![Relation Bridge table 1](/static/assets/working-with-datasource/images/stdToStdDepartment.png)

Column : Departments[DepartmentID] → StudentDepartment[DepartmentID]

Cardinality: One-to-Many

  ![Relation Bridge table 2](/static/assets/working-with-datasource/images/dptToDptDepartment.png)

> **NOTE:** This setup creates a Many-to-Many relationship between Students and Departments through the bridge table StudentDepartment.

The data differences between Join and Relationship have been demonstrated using the following images.

  ![Relation many to many widget](/static/assets/working-with-datasource/images/manyToManyWidgets.png)

### How to Edit and Delete Relationships in Bold BI

* Click on the Join icon to open the Manage Relationships dialog.
* To edit a relationship, click the Edit icon next to the relationship entry.
* To delete a relationship, click the Delete icon (trash bin) next to the relationship entry.

  ![Relation delete icon](/static/assets/working-with-datasource/images/deleteEditIcon.png)


### How to Switch the Relationships in Bold BI

During configuration, if you need to exit Relationship Mode, you can either remove the dragged and dropped tables one by one from the design view, or
Click the Relation Toggle bar to switch it to the disabled state.

  ![Relation swicth](/static/assets/working-with-datasource/images/switchRelationToNormal.png)

A confirmation popup will appear with two options:

* Yes:

All dragged and dropped tables will be removed.
All relationships will be deleted.
The view will return to its initial state.

* No:

The popup will be closed.
All existing relationships and tables will remain unchanged, preserving the current configuration.

### Limitations

* Currently, Bold BI does not support expression creation directly based on data relationships. Users cannot build calculated fields or expressions that rely on relational logic between tables.

* Bold BI does not support direct many-to-many relationships. However, this can be achieved manually using the Join option in the data design view.

* Bold BI does not auto-detect cardinality between tables. Users must manually define the cardinality (e.g., one-to-many, many-to-one) when configuring relationships. This requires careful attention to the structure and uniqueness of key columns in each table.

* Relationship has been not supported for the code view mode.

> **NOTE:** Based on the relationships, data can be fetched from the server. For example, if there are three tables and two relationships among them, and a widget is configured with three aggregation columns from each table, then distinct related columns can be fetched separately, and multiple columns can be retrieved independently. As a result, two or more queries will be executed.