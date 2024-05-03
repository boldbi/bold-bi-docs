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
          This database stores the Bold BI sites that you have created and the users you are adding to the Bold BI sites. It needs to be set up only once during the application startup.
        </td>
        <td align="left">
           This is a BI application database, and it will store the following information.
            <ul>
              <li>
                  Users and groups information.
              </li>
              <li>
                  Resources such as dashboard, data source, schedules, etc.
              </li>
              <li>
                  Users and groups permission to access the resources.
              </li>
              <li>
                  Authentication details, Email configuration, dashboard settings.
              </li>
            </ul>
            <b>Note:</b> Each Bold BI site requires a separate database.
        </td>
        <td align="left">This database needs to be set up only when you are targeting a data source, such as a file data source, web API data source, etc.
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
        <td align="left">There is less load, as it is only used for site management and user login.
        </td>
        <td align="left">The load on the Bold BI site is based on traffic.
        </td>
        <td align="left">The database will be loaded if you use the extract type data source. The loading of data into the database depends on the data and traffic to the dashboard, which utilizes the extract type data source.</td>
    </tr>
  </tbody>
</table>

## Can we use same database for both configuration and extract data storage?

Yes, you can use a single database for low-traffic sites, which will be cost-effective. However, you may face difficulties in scalability. Therefore, it is recommended to use a single database for both Bold ID and the site, and a separate database for data store.