---
layout: post
title: Dashboard Filtering – JavaScript Embedding | Bold BI Docs
description: Learn types of data filtering and Learn how to securely apply custom attributes in sdk-based embedding of Bold BI dashboard from v14.1.
platform: bold-bi
documentation: ug
---
# Row-Level Security(RLS)

Bold BI supports **Row-Level Security (RLS)** to ensure users only access data they are authorized to see. 

RLS can be implemented in two ways:
<ul style="margin:0; padding-left:20px;">
  <li><b>Data Filters</b> - Filter rows dynamically at the data source level.</li>
  <li><b>Custom Attributes</b> - Pass user/tenant attributes to dynamically tailor data access.</li>
</ul>

> **Note:** Only the filter details need to be added in the existing object model structure. These are the common required details needed to generate a token: serverurl, siteidentifier, useremail, and embedsecret, which you can refer to in the [Generate Embed Token](/embedding-options/embedding-sdk/token-generation/) page.

> **Note:** This is the enhanced approach of RLS to token generation. If you need a lower version below 14.1 of RLS, please refer to this [link](/embedding-options/embedding-sdk/embed-viewer-dashboard/#how-to-achieve-rls-below-bold-bi-v13).

## Data Filter

### What is it?
Row-level security can be enforced by passing an `datasourcefilters` parameter in the [embed details](/embedding-options/embedding-sdk/token-generation/).
This ensures filtering is applied server-side, securely, and without exposing filter logic to end users.

### Why use it?
<ul style="margin:0; padding-left:20px;">
  <li>Enforces per-user data access securely.</li>
  <li>Filters are hidden from users and no tampering possible.</li>
  <li>Supports `URL Parameters` and `Dashboard Parameters`.</li>
</ul>

**Example: Token Generation with Data Filter** 

Pass data filters via `datasourcefilters` in the token generation method to enforce row-level security by filtering data dynamically and use this token in frontend to render the dashboard.

:::TABS
:::TAB ['active'] ['Node.js'] ['tokengeneration.js']
```js
app.post('/tokenGeneration', function (request, response) {
  const embedDetails = {
    ...,  // Existing required details
    datasourcefilters: [
      {
          name: "shipCountry",
          value: "India",
          operator: "=" // optional
      },
      {
          name: "Region",
          value: ["North", "East"],
          operator: "IN" // optional
      }
    ],
    dashboardparameters: [
      {
          name: "CustomerId",
          value: [1001, 1002, 1003],
          operator: "NOT IN"
      }
    ]
  }
});
```
:::ENDTAB
:::TAB ['.NET'] ['TokenController.cs']
```cs
[HttpPost]
[Route("TokenGeneration")]
public string TokenGeneration()
{
  var embedDetails = new {
    ...,  // Existing required details
    datasourcefilters = new List<object>
    {
        new {
            name = "shipCountry",
            value = "India",
            @operator = "="  // Optional
        },
        new {
            name = "Region",
            value = new[] { "North", "East" },
            @operator = ""  // Optional
        }
    },
    dashboardparameters = new List<object>
    {
        new {
            name = "CustomerId",
            value = new[] {1001, 1002, 1003},
            @operator = "NOT IN"
        }
    }
  };
}
```
:::ENDTAB
<!-- ```py
@api_view(['POST'])
def TokenGeneration(request):
    embed_details = {
      ...,  # Existing required details
      "datasourcefilters": [
        {
          "name": "shipCountry",
          "value": "India",
          "operator": "="  # Optional
        },
        {
          "name": "Region",
          "value": ["North", "East"],
          "operator": "IN"  # Optional
        }
      ],
      "dashboardparameters": [
        {
          "name": "CustomerId",
          "value": [1001, 1002, 1003],
          "operator": "NOT IN"
        }
      ]
    }
``` -->
:::TAB ['PHP'] ['tokengeneration.php']
```php
<?php
echo getToken();

function getToken() {
  $embedDetails = [
    ...,  // Existing required details
    "datasourcefilters" => [
      [
        "name" => "shipCountry",
        "value" => "India",
        "operator" => "="  // optional
      ],
      [
        "name" => "Region",
        "value" => ["North", "East"],
        "operator" => ""  // optional
      ]
    ],
    "dashboardparameters" => [
      [
        "name" => "CustomerId",
        "value" => [1001, 1002, 1003],
        "operator" => "NOT IN"
      ]
    ]
  ];
}
:::ENDTAB
:::ENDTABS

>**Note**: You can also achieve RLS for custom columns using [dashboard parameters](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameter/).

## Custom Attribute

### What is it?
Custom Attributes are name–value pairs that can be defined at the user, group, or site level. It can be enforced by passing an `customattributes` parameter in the [embed details](/embedding-options/embedding-sdk/token-generation/).
They allow dashboards to dynamically adjust queries, expressions, or data source connections to enforce RLS.

### Why use it?
<ul style="margin:0; padding-left:20px;">
  <li>Tailor data access by user role, department, or tenant.</li>
  <li>Dynamically switch data source connections (e.g., multi-tenant databases).</li>
  <li>Use one dashboard template for multiple tenants.</li>
</ul>

**Learn More About Custom Attribute:** For detailed examples of configure and using custom attributes in dashboard, refer to [Custom Attribute Usage](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/).

**Example: Token Generation with Custom Attribute**

In this scenario, two users access the same dashboard with different databases sharing the same schema. We configured a custom attribute with the database name DB1 in the data source connection of the Bold BI server. In embedding, we dynamically assign a different database, DB2, using the embed_custom_attribute parameter, and the dashboard is rendered with the specified database details.
 
>Note: Explore our [demo](https://demos.boldbi.com/#/row-level-security) to see how RLS is achieved with custom attributes.

:::TABS
:::TAB ['active'] ['Node.js'] ['tokengeneration.js']
```js
app.post('/tokenGeneration', function (request, response) {
  const embedDetails = {
    ...,  // Existing required details
    customattributes: [
        {
            name: "database_name",
            value: "DB2",
            operator: ""  // optional
        },
        {
            name: "department",
            value: ["ECE", "IT"],
            operator: "IN"  // optional
        }
    ]
 }
});
```
:::ENDTAB
:::TAB ['.NET'] ['TokenController.cs']
```cs
[HttpPost]
[Route("TokenGeneration")]
public string TokenGeneration()
{
  var embedDetails = new {
    ...,  // Existing required details
    customattributes = new List<object>
    {
        new {
            name = "database_name",
            value = "DB2",
            @operator = ""  // optional
        },
        new {
            name = "department",
            value = new[] {"ECE", "IT"},
            @operator = "IN"  // optional
        }
    }
  };
}
```
:::ENDTAB
<!-- ```py
@api_view(['POST'])
def TokenGeneration(request):
    embed_details = {
      ...,  # Existing required details
      "customattributes": [
        {
          "name": "database_name",
          "value": "DB2",
          "operator: "="  # Optional
        },
        {
          "name": "department",
          "value": ["ECE", "IT"],
          "operator: "IN"  # Optional
        }
      ]
    }
``` -->
:::TAB ['PHP'] ['tokengeneration.php']
```php
<?php
echo getToken();

function getToken() {
  $embedDetails = [
    ...,  // Existing required details
    "customattributes" => [
      [
        "name" => "database_name",
        "value" => "DB2",
        "operator" = ""  // optional
      ],
      [
        "name" => "department",
        "value" => ["ECE", "IT"],
        "operator" = "IN"  // optional
      ]
    ]
  ];
}
:::ENDTAB
:::ENDTABS

### Benefits of Custom Attributes
<ul style="margin:0; padding-left:20px;">
  <li> <b>Secure Data Access</b>: Ensures tamper-proof, row-level security for user-specific data.</li>
  <li> <b>Dynamic Personalization</b>: Restrict data access based on user roles, departments, or tenants.</li>
  <li> <b>Multi-Tenant Efficiency</b>: Reuse a single dashboard template across multiple tenants with different databases.</li>
</ul>

> **Note:** As of now, we provide the following operator supports only: =, IN, and NOT IN. The operator property is optional for = and IN cases alone and is case-insensitive.

## Decision Matrix: Data Filters vs Custom Attributes
<table>
  <thead>
    <tr>
      <th style="width: 18%;">Scenario</th>
      <th>Use Data Filter</th>
      <th>Use Custom Attribute</th>
      <th>Recommendation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>User-Specific Data Filtering</td>
      <td>If you need to filter data for individual users based on static or dynamic criteria (e.g., user location, department), Data Filters are the best choice.</td>
      <td>Custom Attributes are more useful when tailoring data by user attributes (e.g., role, tier). Enables flexible, dynamic control.</td>
      <td>Use <b>Data Filters</b> if criteria map directly to fields. Use <b>Custom Attributes</b> if filtering depends on user identity metadata.</td>
    </tr>
    <tr>
      <td>Role-Based Access Control (RBAC)</td>
      <td>Works for simple, fixed role sets (e.g., Admin, User). Harder to scale for many roles or complex orgs.</td>
      <td>Great for dynamic role-based filtering. User attributes (roles, departments, groups) drive access automatically.</td>
      <td><b>Custom Attributes</b> are better for scalable RBAC. Data Filters only fit basic role checks.</td>
    </tr>
    <tr>
      <td>Complex User Groups</td>
      <td>Effective if groups can be predefined and filter values remain static.</td>
      <td>Handles dynamic, overlapping, or nested groups (e.g., contractors, multi-tenant groupings).</td>
      <td><b>Custom Attributes</b> are more flexible unless groups are small and static.</td>
    </tr>
    <tr>
      <td>Multi-Tenant Scenarios</td>
      <td>Requires manual filter management for each tenant, which is hard to scale.</td>
      <td>Ideal in multi-tenant environments where each tenant may have a different data or access control. Easily pass different values for each tenant.</td>
      <td><b>Custom Attributes</b> are the clear choice for clean, scalable isolation.</td>
    </tr>
    <tr>
      <td>Easier Implementation</td>
      <td>Straightforward for simple rules like filtering by department or country. Minimal setup required.</td>
      <td>Requires attribute infrastructure and more backend logic.</td>
      <td>Start with <b>Data Filters</b> for a quick prototype; move to <b>Custom Attributes</b> as complexity grows.</td>
    </tr>
  </tbody>
</table>
