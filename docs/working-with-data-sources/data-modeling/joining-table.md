---
layout: post
title: Joining Data Tables – Embedded BI | Bold BI Documentation
description: Learn how to join multiple tables based on one or more conditions while creating a data source in Bold BI Embedded.
platform: bold-bi
documentation: ug

---

# Joining Tables

Joining tables is necessary when using more than one table in your data source design. The join icon in the tools pane at data design view will be disabled if only one table is found in the table design view.

![Join table icon](/static/assets/working-with-datasource/images/clickjointableicon.PNG)

It will become enabled once you drop the second table.

![Join editor icon](/static/assets/working-with-datasource/images/joineditoricon.PNG)

## Adding a join condition

If the subsequent table being dropped has a column that is a foreign key in any of the already dropped tables, the joining will occur automatically. If not, the join editor will prompt you to define the keys to join between the new table and any of the previously dropped tables.

![New join editor wizard](/static/assets/working-with-datasource/images/NewJoinEditorWizardWindow.PNG)

In the screenshot above, `LeftTable` shows the list of tables already dropped, while `RightTable` shows the table you recently dropped that needs a relation with a previously dropped table. The drop-down list represents the join condition, and you can add multiple join conditions by clicking the `Add Field` button.

The join type, compare operator, and relational operator used to establish a relationship between two tables can be defined through the options available in the join editor.

**Join Types**

There are two types of joins that can be made between tables in the join editor: Left Outer Join and Inner Join.

![Join table relationship](/static/assets/working-with-datasource/images/JoinTableRelationship.PNG)

**Inner Join**

An `INNER JOIN` will return records from two or more tables where records match in both tables.

An inner join of Table1 and Table2 gives the result of Table1 intersect Table2, representing the inner part of a Venn diagram intersection.

![Inner join](/static/assets/working-with-datasource/images/InnerJoin.png)

For example, consider the two tables below.

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

If we perform an INNER JOIN on Table1 and Table2 based on the Supplier_Id column using the equals (=) comparison operator, then the Bold BI Dashboard will return the result as shown below.

| `Supplier_Id` | `Supplier_Name` | `Order_Id` | `Supplier_Id(Table2)` | `Order_Date` |
|---------------|-----------------|------------|-----------------------|--------------|
| 100           | James           | 20125      | 100                   | 09/21/2017   |
| 101           | John            | 20126      | 101                   | 09/22/2017   |

**Left outer join**

A `LEFT OUTER JOIN` will return all records from the left table and any matched records from the right table. If there is no match, the result will be NULL from the right table.

![Left outer join](/static/assets/working-with-datasource/images/LeftOuterJoin.png)

For example, consider the following two tables.

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

If we perform a LEFT OUTER JOIN on Table1 and Table2 using the Supplier_Id column as the basis and the equals (=) comparison operator, then the Bold BI Dashboard will display the result as shown below.

| `Supplier_Id` | `Supplier_Name`  | `Order_Id` | `Supplier_Id(Table2)` | `Order_Date` |
|---------------|------------------|------------|-----------------------|--------------|
| 100           | James            | 20125      | 100                   | 09/21/2017   |
| 101           | John             | 20126      | 101                   | 09/22/2017   |
| 102           | Robert           |            |                       |              |
| 103           | Michael          |            |                       |              |

**Right Outer Join**

`RIGHT OUTER JOIN` keyword return all record from the right table, and the matching records from the left table. The result is 0 records from the left side, if there is no match.

![Right outer join](/static/assets/working-with-datasource/images/RightJoin.png)


**Full Outer Join**

`FULL OUTER JOIN` will return all record when there is a match in left table1 or right table records.

![Full outer join](/static/assets/working-with-datasource/images/FullOuterJoin.png)

**Join Condition**

You can define a condition for joining two tables using any of the comparison operators to compare the values of two columns (one from each table) in order to establish a relationship between the tables.

![Select operator](/static/assets/working-with-datasource/images/selectoperator.PNG)

**Join Condition Relationship**

To define the relationship for joining with multiple conditions, you can do so in the condition selection block.

![Join table column relation](/static/assets/working-with-datasource/images/JoinTableColumnRelationship.PNG)

Additionally, you can create a condition using a constant value instead of selecting a column as the right operand to join tables.

![Join column value](/static/assets/working-with-datasource/images/JoinColumValue.PNG)

## Updating a join condition

To update an existing join condition, select it in the top table and then edit the mapping between columns by interacting with the columns list, join type, and comparison operator.

If you are not in the join editor, you can access it by clicking the highlighted icon below in the data design view.

![Join editor icon](/static/assets/working-with-datasource/images/joineditoricon.PNG)

> **NOTE:**  Updating an existing join condition will allow you to edit the column mapping only between those two tables.

Click `Save` and `Exit` to close the join editor.

![Save](/static/assets/working-with-datasource/images/save.PNG)