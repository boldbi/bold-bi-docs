---
layout: post
title: Secured Data Access with Custom Attribute | Bold BI Docs
description: Learn how to access dashboard data based on custom attributes applied at user, group or site level in Bold BI Embedded.
canonical: "/working-with-data-sources/configuring-custom-attribute/"
platform: bold-bi
documentation: ug
keywords: Custom attribute, attribute, configure custom attribute

---

# Configuring Custom Attribute

A custom attribute is a piece of code that functions as a parameter and can be replaced by users in a query. The attribute name is replaced by the code, which is saved for each user and used to render the dashboard.

## Custom attribute hierarchy

Custom attributes can be defined at three levels:

1.	User level
2.	Group level
3.	Site level

The user level attribute takes precedence over the other levels. The group and site level attributes can be overridden at the user level. Additionally, the group level attribute can override the site level attribute.

## User level attribute

This attribute can be set by the site admin for a user on the user management profile page. The user's attribute listing will display the attributes inherited from the group and site levels.

![User Level Add Custom Attribute Button](/static/assets/working-with-datasource/custom-attribute/images/custom-attribute-add-button-user-level.png)

## Group level attribute

This attribute can be set by the site admin for a group on the group profile page. The group's attribute listing will display the attributes inherited from the site level.

![Group Level Add Custom Attribute Button](/static/assets/working-with-datasource/custom-attribute/images/custom-attribute-add-button-group-level.png)

## Site level attribute

This attribute can be set by the UMS admin for a site on the site details page.

![Site Level Add Custom Attribute Button](/static/assets/working-with-datasource/custom-attribute/images/custom-attribute-add-button-tenant-level.png)

## Adding custom attribute

Attributes are name-value pairs associated with users, groups, and sites (tenants).

![Custom Attribute Window](/static/assets/working-with-datasource/custom-attribute/images/add-custom-attribute.png#width=65%)

Name – The name of the attribute.

Value – The value of the attribute

Description – An explanation of the purpose of this attribute.

Encrypt – Option to store the attribute as encrypted in the database, with the value displayed as dots in the grid.


## Applying custom attribute for different users

Let's consider the user **James** with the custom attribute value configured as **Sectors IN ('Industrial', 'Traffic')** and the attribute name as **Sector**.

![Use custom attribute for user James](/static/assets/working-with-datasource/custom-attribute/images/custom-attribute-user-James.png#width=50%)

For the user **Christ**, the custom attribute value is configured as **Sectors IN ('Residential', 'Commercial')** with the attribute name as **Sector**.

![Use custom attribute for user Christ](/static/assets/working-with-datasource/custom-attribute/images/custom-attribute-user-Christ.png#width=50%)

## Uses of custom attribute
Custom attributes can be used in the following areas:

1. Custom Query.
2. Web Connection window.

### 1. Custom Query
Custom attributes can be used in a custom query by manually providing the required custom attribute name in the code view using the syntax:

Syntax: `${{:AttributeName}}`

![Use custom attribute in code view](/static/assets/working-with-datasource/custom-attribute/images/custom-attribute-in-code-view.png)


Here, a simple dashboard is created for **James**, and the data is retrieved based on the condition for the column `Sectors` as given in the custom attribute **Sectors**.

![Sample Dashboard for user James](/static/assets/working-with-datasource/custom-attribute/images/custom-attribute-sample-dashboard-James.png)


For **Christ**, the data is retrieved based on the condition for the column `Sectors` as given in the custom attribute **Sectors**.

![Sample Dashboard for user Christ](/static/assets/working-with-datasource/custom-attribute/images/custom-attribute-sample-dashboard-Christ.png)

>**Note**: Please refer to this [Datasource connector page](/working-with-data-sources/data-connectors/) for instructions on creating a datasource using a **custom attribute**.

### 2. Data source Connection window

Custom attributes can be utilized within the Data Source Connection interface to set up the Dynamic Connection String interface for the External API.

### SQL Data Sources Configuration
Configure the following properties:

1. Username.
2. Password.
3. Servername.
4. Port.
5. Database.
6. Maxrows.
7. CommandTimeout.
8. AdvancedSettings.

![WebCustom](/static/assets/working-with-datasource/custom-attribute/images/sqlCustom.png)

### External API Dynamic Connection String Interface
Configure the following properties:

1. URL.
2. Header(s).
3. Username.
4. Password.

![Dynamic connection](/static/assets/working-with-datasource/custom-attribute/images/dynamicconnection.png)

IntelliSense support has been implemented for custom attributes, allowing users to type '$' within the All SQL data source properties or web data source properties to display the custom attributes.

![Intellisense Support](/static/assets/working-with-datasource/custom-attribute/images/intellisense.png)

>**Note** Custom attribute support is not available for connections using SSH or SSL modes.

### WEB DataSources
Configure the following properties:

1. URL.
2. Header(s).
3. Parameter(s).
4. Raw.
5. Username.
6. Password.
7. Servername.
8. Database.
9. APItokenbearer.
10. Apikey.
11. Hostname.
12. Authtoken.
13. Accesstoken.
14. Authsecret.
15. Authid.
16. Accountid.
17. AppId.
18. Authentication.
19. Sitetoken.
20. Chainid.
21. Cloudtoken.

![WebCustom](/static/assets/working-with-datasource/custom-attribute/images/webdsCustom.png#max-width=52%)

IntelliSense support has been implemented for custom attributes, allowing users to type '$' within the web data source properties to display the custom attributes.

![Intellisense Support](/static/assets/working-with-datasource/custom-attribute/images/webintellisense.png)

>**Note** Custom attribute support has been incorporated for both internal and external site publishing of data sources. Additional features for downloading and uploading have also been enabled.

When uploading a dashboard to a different site with a custom attribute, ensure that you create the same custom attribute name and its corresponding value.

Use the following syntax for the custom attribute.

Syntax: `${{:AttributeName}}`

![Use custom attribute in web connection](/static/assets/working-with-datasource/custom-attribute/images/set-custom-attribute.png#max-width=52%)

When a simple dashboard is created, the data is retrieved based on the condition for the column `id` as given in the custom attribute sectors.

![Use custom attribute in widget](/static/assets/working-with-datasource/custom-attribute/images/widget-custom-attribute.PNG)

### 3. Expression

We have provided custom attribute support for **Expression**. please refer [Expression](https://help.boldbi.com/working-with-data-sources/data-modeling/configuring-expression-columns/) documentation.

Syntax: `${{:Custom Attribute Name}}`

![Use custom attribute in Expression](/static/assets/working-with-datasource/custom-attribute/images/EX1.png)

![Use custom attribute in Expression](/static/assets/working-with-datasource/custom-attribute/images/EX2.png)

>**Note**: Please refer to this [Datasource connector page](/working-with-data-sources/data-connectors/) to create a datasource using a **custom attribute**.
