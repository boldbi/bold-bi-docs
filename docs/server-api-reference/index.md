---
layout: post
title: REST API Reference – Embedded BI | Bold BI Documentation
description: Explore the REST APIs to programmatically handle Bold BI Embedded server operations. It lets you access the functionality behind the resources on your site.
canonical: "/server-api-reference/"
platform: bold-bi
documentation: ug
lang: en
---

# Bold BI Server API References

Using the Bold BI REST API, you can manage and change resources in your site programmatically using HTTP. The API gives you simple access to the functionality behind the resources on your site. You can use this access to create your own custom applications or to script interactions with your site.

For Bold BI Enterprise, the API path will be `https://{Domain}/bi/api/site/{TenantIdentifier}/{ApiEndpoint}`

For example, `https://onpremise-demo.boldbi.com/bi/api/site/site1/token`

## API Versions 

<table>
<tr>
    <td>
       <span style="font-weight:bold">API References</span>
    </td>
    <td>
        <span style="font-weight:bold">Try It Now</span>
    </td>
    <td>
        <span style="font-weight:bold">Description</span>
     </td>
  </tr>
  <tr>
    <td>
        <a href="/server-api-reference/v1.0/api-reference/">Rest API-v1.0</a>
    </td>
    <td>
        <a href="/server-api-reference/v1.0/try-it-now/">Try It Now-v1.0</a>
    </td>
    <td>
        Manage(retrieve, add, update and delete) groups and users in your Bold BI site.
     </td>
  </tr>
  <tr>
    <td>
        <a href="/server-api-reference/v2.0/api-reference/">Rest API-v2.0</a>
    </td>
    <td>
        <a href="/server-api-reference/v2.0/try-it-now/">Try It Now-v2.0</a>
    </td>
    <td>
        Manage(retrieve, add, update, delete and export) items and permissions, also can perform special operations of groups and users in your Bold BI site.
     </td>
  </tr>
  <tr>
    <td>
        <a href="/server-api-reference/v3.0/api-reference/">Rest API-v3.0</a>
    </td>
    <td>
        <a href="/server-api-reference/v3.0/try-it-now/">Try It Now-v3.0</a>
    </td>
    <td>
        Manage(add and update) schedules in your Bold BI site.
	</td>
  </tr>
  <tr>
    <td>
        <a href="/server-api-reference/v4.0/api-reference/">Rest API-v4.0</a>
    </td>
    <td>
        <a href="/server-api-reference/v4.0/try-it-now/">Try It Now-v4.0</a>
    </td>
    <td>
        Manage(retrieve, add, update and delete) dashboard views, also can copy the dashboards and data sources in your Bold BI site.
	</td>
  </tr>
</table>

## Site Administration REST API References

Using the Site Administration REST API, you can manage and change resources in your site programmatically using HTTP. The API gives you simple access to the functionality behind the resources on your site. You can use this access to create your own custom applications or to script interactions with your site.

For our application, the API path will be `https://{Domain}/api/{ApiEndpoint}`

For example, `https://onpremise-demo.boldbi.com/api/token`

### API Versions 

<table>
<tr>
    <td>
       <span style="font-weight:bold">API References</span>
    </td>
    <td>
        <span style="font-weight:bold">Try It Now</span>
    </td>
    <td>
        <span style="font-weight:bold">Description</span>
     </td>
  </tr>
  <tr>
    <td>
        <a href="/server-api-reference/site-administration/v1.0/api-reference/">Rest API-v1.0</a>
    </td>
    <td>
        <a href="/server-api-reference/site-administration/v1.0/try-it-now/">Try It Now-v1.0</a>
    </td>
    <td>
        Configure application startup and create a tenant in your Bold BI or Bold Reports applications.
     </td>
  </tr>
  <tr>
    <td>
        <a href="/server-api-reference/site-administration/v2.0/api-reference/">Rest API-v2.0</a>
    </td>
    <td>
        <a href="/server-api-reference/site-administration/v2.0/try-it-now/">Try It Now-v2.0</a>
    </td>
    <td>
        Manage your sites and users in your Bold BI or Bold Reports applications.
     </td>
  </tr>
</table>
