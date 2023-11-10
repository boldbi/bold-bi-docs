---
layout: post
title: Joining Data Tables – Embedded BI | Bold BI Documentation
description: Learn how to join multiple tables based on one or more conditions while creating a data source in Bold BI Embedded.
platform: bold-bi
documentation: ug

---

# Joining Tables

Joining of tables is required when you are going to use more than one table in your data source design. The join icon (highlighted below) in the tools pane at data design view will be in disabled state, if there was only one table found dropped in table design view like below:

![Join table icon](/static/assets/working-with-datasource/images/clickjointableicon.PNG)

It will get enabled once you drop the 2nd table like below:

![Join editor icon](/static/assets/working-with-datasource/images/joineditoricon.PNG)

## Adding a join condition

If the subsequent table being dropped, has any of its column as foreign key in any of the already dropped tables, the joining will take place automatically. Else, it will prompt the join editor like below to let you define the keys (columns) to join between this table and any one of the already dropped tables.

![New join editor wizard](/static/assets/working-with-datasource/images/NewJoinEditorWizardWindow.PNG)

In the above screenshot, the `LeftTable` shows the list of tables dropped already. The `RightTable` shows the table, which you have dropped recently, and that requires setting up a relation with any of the previously dropped tables. The following drop-down list represents the join condition. You can add multiple join conditions for a single table relation just by clicking the `Add Field` button.

The join type, compare operator and relational operator to make relationship between the two tables, can be defined through the options available in join editor.

**Join Types**

Two types of joins can be made between tables in join editor. They are Left Outer Join and Inner Join.

![Join table relationship](/static/assets/working-with-datasource/images/JoinTableRelationship.PNG)

**Inner Join**

`INNER JOIN` will return the records from two or more tables, while records are matching in both the tables. 

An inner join of Table1 and Table2 gives the result of Table1 intersect Table2, i.e. the inner part of a Venn diagram intersection.

![Inner join](/static/assets/working-with-datasource/images/InnerJoin.png)

For example, consider the below two tables.

Table1

| `Supplier_Id` | `Supplier_Name` |
|---------------|-----------------|
| 100           | James           |
| 101           | John            |
| 102           | Robert          |
| 103           | Michael         |

Table2

| `Order_Id` | `Supplier_Id` | `Order_Date` |
|------------|---------------|--------------|
| 20125      | 100           | 09/21/2017   |
| 20126      | 101           | 09/22/2017   |
| 20127      | 104           | 09/23/2017   |

If we join (INNER JOIN) Table1 and Table2 based on Supplier_Id column and equals (=) as comparison operator, then Bold BI Dashboard will return the result like below.  

| `Supplier_Id` | `Supplier_Name` | `Order_Id` | `Supplier_Id(Table2)` | `Order_Date` |
|---------------|-----------------|------------|-----------------------|--------------|
| 100           | James           | 20125      | 100                   | 09/21/2017   |
| 101           | John            | 20126      | 101                   | 09/22/2017   |

**Left outer join**

`LEFT OUTER JOIN` will return all record from the left table and the matched records from the right table. The result is NULL from the right table, if there is no match.

![Left outer join](/static/assets/working-with-datasource/images/LeftOuterJoin.png)

For example, consider the below two tables.

Table1

| `Supplier_Id` | `Supplier_Name` |
|---------------|-----------------|
| 100           | James           |
| 101           | John            |
| 102           | Robert          |
| 103           | Michael         |

Table2

| `Order_Id` | `Supplier_Id` | `Order_Date` |
|------------|---------------|--------------|
| 20125      | 100           | 09/21/2017   |
| 20126      | 101           | 09/22/2017   |
| 20127      | 104           | 09/23/2017   |

If we join (LEFT OUTER JOIN) Table1 and Table2 based on Supplier_Id column and equals (=) as comparison operator, then Bold BI Dashboard will return the result like below. 

| `Supplier_Id` | `Supplier_Name`  | `Order_Id` | `Supplier_Id(Table2)` | `Order_Date` |
|---------------|------------------|------------|-----------------------|--------------|
| 100           | James            | 20125      | 100                   | 09/21/2017   |
| 101           | John             | 20126      | 101                   | 09/22/2017   |
| 102           | Robert           |            |                       |              |
| 103           | Michael          |            |                       |              |

**Join Condition**

You can define a condition for joining two tables through any of the compare operator for comparing the values of the two columns (one from each table) by which relation between tables need to be made.

![Select operator](/static/assets/working-with-datasource/images/selectoperator.PNG)

**Join Condition Relationship**

You can define the relationship for joining, with multiple condition, in the condition selection block.

![Join table column relation](/static/assets/working-with-datasource/images/JoinTableColumnRelationship.PNG)

You can also create condition using a constant value instead of choosing column as right operand to join tables.

![Join column value](/static/assets/working-with-datasource/images/JoinColumValue.PNG)

## Updating a join condition

Update an existing join condition through selecting that in the top table and then edit the mapping between columns through interacting with columns list, join type and compare operator.

If you are not at the join editor, it can be invoked through clicking the highlighted icon below in the data design view.

![Join editor icon](/static/assets/working-with-datasource/images/joineditoricon.PNG)

> **NOTE:**  Updating an existing join condition will allow you to edit the column mapping only between those two tables.

Click `Save and Exit` to close the join editor.

![Save](/static/assets/working-with-datasource/images/save.PNG)