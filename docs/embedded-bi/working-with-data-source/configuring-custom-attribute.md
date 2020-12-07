---
layout: post
title: Secured Data Access with Custom Attribute | Bold BI Docs
description: Learn how to access dashboard data based on custom attributes applied at user, group or site level in Bold BI Embedded.
canonical: "/cloud-bi/working-with-data-source/configuring-custom-attribute/"
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

![User Level Add Custom Attribute Button](/static/assets/embedded/working-with-datasource/custom-attribute/images/custom-attribute-add-button-user-level.png)

## Group level attribute

This attribute can be set by the site admin for a group in the group profile page. You can view the attributes inherited from the site level in the group’s attribute listing.

![Group Level Add Custom Attribute Button](/static/assets/embedded/working-with-datasource/custom-attribute/images/custom-attribute-add-button-group-level.png)

## Site level attribute

This attribute can be set by the UMS admin for a site in the site details page.

![Site Level Add Custom Attribute Button](/static/assets/embedded/working-with-datasource/custom-attribute/images/custom-attribute-add-button-tenant-level.png)

## Adding custom attribute

Attributes are name-value pairs that are associated with users, groups, and the sites (tenants).

![Custom Attribute Window](/static/assets/embedded/working-with-datasource/custom-attribute/images/add-custom-attribute.png)

Name – Name of the attribute.

Value – Value of the attribute.

Description – Explaining the purpose for this attribute.

Encrypt – Store it as encrypted one in database and the value will be shown as dots in the grid.


## Applying custom attribute for different users

Let us consider for the user **James** has the custom attribute value is configured as **Sectors IN ('Industrial', 'Traffic')** with the attribute name as **Sector**.

![Use custom attribute for user James](/static/assets/embedded/working-with-datasource/custom-attribute/images/custom-attribute-user-James.png)

For the user **Christ** , has the custom attribute value is configured as **Sectors IN ('Residential', 'Commercial')** with the attribute name as **Sector**.

![Use custom attribute for user Christ](/static/assets/embedded/working-with-datasource/custom-attribute/images/custom-attribute-user-Christ.png)

## Uses of custom attribute

The custom attribute can be used only in the custom query. It can be used in the query by manually providing the required custom attribute name in code view using the syntax.

Syntax: `${{:AttributeName}}`

![Use custom attribute in code view](/static/assets/embedded/working-with-datasource/custom-attribute/images/custom-attribute-in-code-view.png)


Here, created a simple dashboard for **James**, the data is retrieved based on the condition for the column `Sectors` as given in the custom attribute **Sectors**.

![Sample Dashboard for user James](/static/assets/embedded/working-with-datasource/custom-attribute/images/custom-attribute-sample-dashboard-James.png)


For **Christ**, the data is retrieved based on the condition for the column `Sectors` as given in the custom attribute **Sectors**.

![Sample Dashboard for user Christ](/static/assets/embedded/working-with-datasource/custom-attribute/images/custom-attribute-sample-dashboard-Christ.png)


