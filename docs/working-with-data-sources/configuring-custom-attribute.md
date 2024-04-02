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

Custom attribute is a piece of code that acts like a parameter, which is replaced anywhere in the query varied by the users. The attribute name is replaced by the code, which is saved for each user that makes the dashboard to get rendered based on it.

## Custom attribute hierarchy

Custom attribute can be defined in three levels:

1.	User level
2.	Group level
3.	Site level

The user level attribute has high priority than the other levels. The group and site level attribute can be override in the user level. Also, the site level attribute can be override by the group level attribute.

## User level attribute

This attribute can be set by the site admin for a user in the user management profile page. You can view the attributes inherited from the group and site level in the user’s attribute listing.

![User Level Add Custom Attribute Button](/static/assets/working-with-datasource/custom-attribute/images/custom-attribute-add-button-user-level.png)

## Group level attribute

This attribute can be set by the site admin for a group in the group profile page. You can view the attributes inherited from the site level in the group’s attribute listing.

![Group Level Add Custom Attribute Button](/static/assets/working-with-datasource/custom-attribute/images/custom-attribute-add-button-group-level.png)

## Site level attribute

This attribute can be set by the UMS admin for a site in the site details page.

![Site Level Add Custom Attribute Button](/static/assets/working-with-datasource/custom-attribute/images/custom-attribute-add-button-tenant-level.png)

## Adding custom attribute

Attributes are name-value pairs that are associated with users, groups, and the sites (tenants).

![Custom Attribute Window](/static/assets/working-with-datasource/custom-attribute/images/add-custom-attribute.png#width=65%)

Name – Name of the attribute.

Value – Value of the attribute.

Description – Explaining the purpose for this attribute.

Encrypt – Store it as encrypted one in database and the value will be shown as dots in the grid.


## Applying custom attribute for different users

Let us consider for the user **James** has the custom attribute value is configured as **Sectors IN ('Industrial', 'Traffic')** with the attribute name as **Sector**.

![Use custom attribute for user James](/static/assets/working-with-datasource/custom-attribute/images/custom-attribute-user-James.png#width=50%)

For the user **Christ** , has the custom attribute value is configured as **Sectors IN ('Residential', 'Commercial')** with the attribute name as **Sector**.

![Use custom attribute for user Christ](/static/assets/working-with-datasource/custom-attribute/images/custom-attribute-user-Christ.png#width=50%)

## Uses of custom attribute
The custom attribute can be used in the following areas:

1. Custom Query.
2. Web Connection window.

### 1. Custom Query
The custom attribute can be used in custom query by manually providing the required custom attribute name in code view using syntax.

Syntax: `${{:AttributeName}}`

![Use custom attribute in code view](/static/assets/working-with-datasource/custom-attribute/images/custom-attribute-in-code-view.png)


Here, created a simple dashboard for **James**, the data is retrieved based on the condition for the column `Sectors` as given in the custom attribute **Sectors**.

![Sample Dashboard for user James](/static/assets/working-with-datasource/custom-attribute/images/custom-attribute-sample-dashboard-James.png)


For **Christ**, the data is retrieved based on the condition for the column `Sectors` as given in the custom attribute **Sectors**.

![Sample Dashboard for user Christ](/static/assets/working-with-datasource/custom-attribute/images/custom-attribute-sample-dashboard-Christ.png)

>**Note**: Please refer to this [Datasource connector page](/working-with-data-sources/data-connectors/) to create a datasource using a **custom attribute**.

### 2. Data source Connection window

Utilize the custom attribute within the Data Source Connection interface to set up the Dynamic Connection String interface for the External API detailed as follows:

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

We have implemented IntelliSense support for custom attributes, allowing users to type '$' within the
All SQL data source properties to display the custom attributes.

![Intellisense Support](/static/assets/working-with-datasource/custom-attribute/images/intellisense.png)

>**Note**
Custom attribute support is not available for connections using SSH or SSL modes.

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

We have implemented IntelliSense support for custom attributes, allowing users to type '$' within the
web data source properties to display the custom attributes.

![Intellisense Support](/static/assets/working-with-datasource/custom-attribute/images/webintellisense.png)

>**Note** Custom attribute support has been incorporated for both internal and external site publishing of data sources. Additionally, we have enabled features for downloading and uploading.

When uploading a dashboard to a different site with a custom attribute, ensure that you Create the same custom attribute name and its corresponding value.

Use the following syntax for the custom attribute.

Syntax: `${{:AttributeName}}`

![Use custom attribute in web connection](/static/assets/working-with-datasource/custom-attribute/images/set-custom-attribute.png#max-width=52%)

When simple dashboard is created here, data is retrieved based on the condition for column `id` as given in the custom attribute sectors.

![Use custom attribute in widget](/static/assets/working-with-datasource/custom-attribute/images/widget-custom-attribute.PNG)

### 3. Expression

We have provided custom attribute support for **Expression**. please refer [Expression](https://help.boldbi.com/working-with-data-sources/data-modeling/configuring-expression-columns/) documentation.

Syntax: `${{:Custom Attribute Name}}`

![Use custom attribute in Expression](/static/assets/working-with-datasource/custom-attribute/images/EX1.png)

![Use custom attribute in Expression](/static/assets/working-with-datasource/custom-attribute/images/EX2.png)

>**Note**: Please refer to this [Datasource connector page](/working-with-data-sources/data-connectors/) to create a datasource using a **custom attribute**.
