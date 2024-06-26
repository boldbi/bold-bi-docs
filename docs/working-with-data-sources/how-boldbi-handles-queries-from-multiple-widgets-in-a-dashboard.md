---
layout: post
title: BoldBI handles queries from widgets in dashboard | Bold BI Docs
description: Learn about how Bold BI data service handles the queries from the multiple widgets in a dashboard page.
canonical: "/working-with-data-sources/how-boldbi-handles-queries-from-multiple-widgets-in-a-dashboard/"
platform: bold-bi
documentation: ug

---

# How Bold BI handles queries from multiple widgets in a dashboard

The Bold BI Data Source designer allows for creating a data model with columns from multiple tables/entities and additional calculated columns. A single data source model can be bound to multiple widgets in a dashboard. 

If we consider a data source model with 25 columns, as shown in the example below, and we have a widget that only uses 2 of the columns, the data service layer will generate a query for that widget with only the specific columns needed. This allows for a single data source model to be used optimally for multiple widgets in a dashboard.

## Example Master query used at the data source level

```
SELECT 
                            [Products].[ProductID] AS [ProductID], 
                            [Products].[ProductName] AS [ProductName], 
                            [Products].[SupplierID] AS [SupplierID], 
                            [Products].[CategoryID] AS [CategoryID], 
                            [Products].[QuantityPerUnit] AS [QuantityPerUnit], 
                            [Products].[UnitPrice] AS [UnitPrice], 
                            [Products].[UnitsInStock] AS [UnitsInStock], 
                            [Products].[UnitsOnOrder] AS [UnitsOnOrder], 
                            [Products].[ReorderLevel] AS [ReorderLevel], 
                            [Products].[Discontinued] AS [Discontinued], 
                            [Suppliers].[SupplierID] AS [SupplierID (Suppliers)], 
                            [Suppliers].[CompanyName] AS [CompanyName], 
                            [Suppliers].[ContactName] AS [ContactName], 
                            [Suppliers].[ContactTitle] AS [ContactTitle], 
                            [Suppliers].[Address] AS [Address], 
                             [Suppliers].[City] AS [City], 
                             [Suppliers].[Region] AS [Region], 
                            [Suppliers].[PostalCode] AS [PostalCode], 
                            [Suppliers].[Country] AS [Country], 
                             [Suppliers].[Phone] AS [Phone], 
                             [Suppliers].[Fax] AS [Fax], 
                             CAST( [Suppliers].[HomePage] AS VARCHAR(MAX) ) AS [HomePage], 
                            [Shippers].[ShipperID] AS [ShipperID], 
                            [Shippers].[CompanyName] AS [CompanyName (Shippers)], 
                             [Shippers].[Phone] AS [Phone (Shippers)] 
FROM 
              [dbo].[Products] AS [Products] INNER JOIN [dbo].[Suppliers] AS [Suppliers] ON  [Products].[SupplierID] = [Suppliers].[SupplierID]  INNER JOIN [dbo].[Shippers] AS [Shippers] ON  [Suppliers].[CompanyName] = [Shippers].[CompanyName] 
```

## Example query generated by the Bold BI data source layer for a specific widget

```
SELECT TOP 201 [Custom_Sort_Order_Table].[column1]  AS [column1] ,[Custom_Sort_Order_Table].[column2]  AS [column2] ,[Custom_Sort_Order_Table].[column4]  AS [column4] ,[Custom_Sort_Order_Table].[column5]  AS [column5]   FROM (SELECT 
                            [1Suppliers].[CompanyName] AS [column1], 
                            COUNT([Products].[ProductID]) AS [column2], 
                             SUM (CAST ([Products].[UnitsInStock] AS DECIMAL (38,0))) AS [column4], 
                             SUM (CAST ([Products].[UnitPrice] AS DECIMAL (38,4))) AS [column5] 
FROM 
              [dbo].[Products] INNER JOIN [dbo].[Suppliers]  ON  [Products].[SupplierID] = [Suppliers].[SupplierID]  INNER JOIN [dbo].[Shippers]  ON  [Suppliers].[CompanyName] = [Shippers].[CompanyName] 
GROUP BY [Suppliers].[CompanyName])  AS [Custom_Sort_Order_Table]   INNER JOIN(SELECT [Suppliers].[CompanyName] AS [T_0_column1],SUM (CAST ([Products].[ProductID] AS DECIMAL (38,0)))AS [Suppliers]  FROM  
               [dbo].[Products]  INNER JOIN [dbo].[Suppliers]  ON  [Products].[SupplierID] = [Suppliers].[SupplierID]  INNER JOIN [dbo].[Shippers] ON  [Suppliers].[CompanyName] = [Suppliers].[CompanyName] 
GROUP BY [Supplier].[CompanyName]) AS [T_0] ON [Custom_Sort_Order_Table].[column1] = [T_0]. [T_0_column1] OR (([Custom_Sort_Order_Table].[column1] IS NULL) AND ([T_0]. [T_0_column1] IS NULL))  ORDER BY  [column2] Desc 
```

You can see the specific query generated for a widget in your dashboards by looking at the Performance Metrics dashboard available in the Usage Analytics category of the Bold B server.