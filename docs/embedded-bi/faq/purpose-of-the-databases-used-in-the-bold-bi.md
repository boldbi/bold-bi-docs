---
layout: post
title: Purpose of Configuration and Extract Databases | Bold BI
description: Learn the purpose, need of configuration and extract databases and their load in Bold BI. Also know when to go with one common database for all.
platform: bold-bi
documentation: ug
---

# Purpose of Configuration and Extract Databases in Bold BI

<meta charset="utf-8"/>
<table>
  <thead>
    <tr>
    <th scope="col"></th>
    <th scope="col">Bold ID database</th>
    <th scope="col">Bold BI database</th>
    <th scope="col">Bold BI Data store database</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td align="left">Purpose</td>
        <td align="left">
          This database stores the Bold BI sites, which you have created and the users you are adding in the Bold BI sites. This database needs to be setup only once during the application startup.
        </td>
        <td align="left">
            This is BI application database and it will store the below information.
            <ul>
              <li>
                  Users and groups information.
              </li>
              <li>
                  Resource like dashboard, data source, schedules etc.
              </li>
              <li>
                  Users and groups permission to access the resources.
              </li>
              <li>
                  Authentication details, Email configuration, dashboard settings.
              </li>
            </ul>
            <b>Note:</b> Each Bold BI site requires separate database.
        </td>
        <td align="left">This database needs to be set up only when you are targeting the data source, which is extract type like file data source, web API data source, etc.
        </td>
    </tr>
    <tr>
        <td align="left">Need</td>
        <td align="left">Mandatory</td>
        <td align="left">Mandatory</td>
        <td align="left">Optional</td>
    </tr>
    <tr>
        <td align="left">Database Load</td>
        <td align="left">Less load, since it is only used for site management and user login.
        </td>
        <td align="left">Load based on traffic in the Bold BI site.
        </td>
        <td align="left">The database will get loaded, if you use the extract type data source. The load to the database depends on data and traffic to the dashboard, which uses the extract type data source.</td>
    </tr>
  </tbody>
</table>

## Can we use same database for both configuration and extract data storage?

Yes, you can use a single database for low traffic sites, which will be cost-effective. But you may face difficulties in scalability. So, it is recommended to use the single database for both Bold ID, site, and a separate database for data store.