---
layout: post
title: Connecting to Stored Procedures – Embedded BI | Bold BI Docs
description: Learn how to connect to the stored procedures in the SQL Server database with Bold BI Embedded Dashboard.
canonical: /working-with-data-sources/connecting-to-stored-procedures/
platform: bold-bi
documentation: ug
---

# Connecting to Stored Procedures in SQL Server database

Bold BI allows you to use the stored procedure defined in the SQL Server database using the `Microsoft SQL` connection.

> **NOTE:** You can connect to a database hosted in the Microsoft SQL Server whose version should be 2012 or above.

Bold BI supports the following connection modes for the stored procedure connection.
1. OpenQuery
2. Internal Cache

## OpenQuery
In this OpenQuery mode, Bold BI executes the stored procedure queries on the specified linked server for every execution in the stored procedure data source.

### Prerequisites
 
Enable the Data Access for the stored procedure in SQL Server by executing the following query.
 
`EXEC sp_serveroption 'SQLServerName', 'DATA ACCESS', TRUE`

> **NOTE:** If you did not enable the Data Access in SQL Server, you cannot access the stored procedure with the OpenQuery option in Bold BI.

### Supported server

This OpenQuery only supports the Microsoft SQL Server and Azure SQL Database (Managed Instance only). All other servers like Azure SQL Database, Azure SQL Data Warehouse (Azure Synapse Analytics), and Parallel Data Warehouse do not support this OpenQuery.

## Internal Cache
In Internal Cache mode, Bold BI executes the stored procedure completely and moves the result into a temporary table. After that, Bold BI uses the created temporary table for every action execution in the stored procedure's data source.

## Connecting to SQL Server database
1. To connect to the SQL Server database, refer to this link [Microsoft SQL](/working-with-data-sources/data-connectors/ms-sql-server/).
     
2. If it succeeds, you can get into the data design view with the available stored procedure displayed on the left pane of the tree view. The available parameters can also be displayed while expanding the procedures.

   ![Stored procedure treeview](/static/assets/working-with-datasource/images/storedprocedure_treeview.png)

3. You can drag the desired stored procedure into the canvas area to create a table view with the supplied parameters.

   ![Stored procedure parameters](/static/assets/working-with-datasource/images/storedprocedure_parameters.png)

    Here, you can choose either OpenQuery or Internal Cache for your stored procedure connection.

4. The Dashboard Designer allows you to edit the supplied parameters by using the edit parameters available in the created table.

   ![Stored procedure settings](/static/assets/working-with-datasource/images/storedprocedure_settings.png)

## Understanding Stored Procedure Execution Modes

Bold BI supports two execution modes for stored procedures—**OpenQuery Mode** and **Internal Cache Mode**. Understanding these modes helps you optimize dashboard performance and manage MSSQL server load effectively.

---
## 1. OpenQuery Mode

In **OpenQuery Mode**, Bold BI® executes the stored procedure **directly on the linked MSSQL server** for **every widget query**.

Each widget generates its own query based on the widget configuration, and Bold BI executes these queries on the MSSQL server.  
As a result, every dashboard load or user interaction triggers a **fresh execution** of the stored procedure on the server.


### Example

If the dashboard contains **20 widgets**:

* On dashboard load → **20 individual stored procedure executions** occur.
* If the user applies sorting or Top N filtering → additional stored procedure executions are triggered for the affected widgets.
* Each interaction (filters, sorting, refresh, parameter changes) re-executes the stored procedure on the MSSQL server.


### When to Use OpenQuery Mode

Use OpenQuery Mode when:

* You need real-time/live data for every interaction.
* The number of users accessing the dashboard is limited.
* The MSSQL server can handle multiple stored procedure executions.
* Data must be accurate and refreshed up-to-the-second.

---
## 2. Internal Cache Mode

In **Internal Cache Mode**, Bold BI® executes the stored procedure **once during dashboard load**.  
The result is then stored in a **temporary table** inside the Bold BI® data store (MSSQL, PostgreSQL, or MySQL).

All widget interactions—such as filtering, sorting, and grouping—operate on this temporary table instead of re-executing the stored procedure on the MSSQL server.

### Example

If your dashboard contains **20 widgets**:

* The stored procedure runs **only once** on the MSSQL server during the initial load.
* All 20 widgets retrieve data from the cached temporary table.
* This drastically reduces the load on the MSSQL server.


### When to Use Internal Cache Mode

Use Internal Cache Mode when:

* Many users access the dashboard simultaneously.
* You want to reduce load on the MSSQL server.
* Real-time data is not required for every interaction.
* The dataset can be safely stored in the Bold BI® internal database.

---


## 3. Choosing the Right Mode

### Choose OpenQuery Mode If:

* You need live data during filtering or interactions.
* The number of users is limited.
* Database load is not a concern.
* You need up-to-date data for every action.

### Choose Internal Cache Mode If:

* Your dashboard has high user traffic.
* You want to reduce MSSQL database load.
* Fetching fresh data only during initial load is acceptable.
* Faster user interactions (sorting/filtering) are required.

---

## 4. Performance Considerations

### OpenQuery Mode

**Pros**

* Real-time data for every request  
* Always reflects the most updated values  

**Cons**

* High load on the MSSQL server  
* Not suitable for dashboards with many concurrent users  

---

### Internal Cache Mode

**Pros**

* Significantly reduces database load  
* Faster widget interactions since operations occur within Bold BI®  
* Ideal for dashboards with heavy traffic  

**Cons**

* Data is refreshed only during initial load  
* Initial dashboard load time may be higher due to temp table creation  
* Requires temporary storage in Bold BI® data store  

---


## 5. Summary Table

<table>
    <tr>
        <th>Feature / Requirement</th>
        <th>OpenQuery Mode</th>
        <th>Internal Cache Mode</th>
    </tr>
    <tr>
        <td>Live data on every interaction</td>
        <td>Yes</td>
        <td>No</td>
   </tr>
    <tr>
        <td>Best for high user load</td>
        <td>No</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td>DB server utilization</td>
        <td>High</td>
        <td>Low</td>
    </tr>
    <tr>
        <td>Interaction performance</td>
        <td>High (few users)</td>
        <td>High (many users)</td>
    </tr>
    <tr>
        <td>Data refreshed</td>
        <td>Every action</td>
        <td>Initial load only</td>
    </tr>
    <tr>
        <td>Source Connection Hit</td>
        <td>Yes (Every widget rendering)</td>
        <td>Yes (Initial dashboard loading only)</td>
    </tr>
</table>

---

Selecting the correct mode impacts both performance and data freshness:

* **Choose OpenQuery** when real-time data is required.
* **Choose Internal Cache** when scalability and reduced DB load are the priorities.

Both modes serve different needs—select the one that best aligns with your dashboard usage and performance expectations.
