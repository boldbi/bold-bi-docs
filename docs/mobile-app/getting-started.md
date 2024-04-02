---
layout: post
title: Getting Started with Mobile BI - Embedded | Bold BI Docs
description: Learn how to get started with Mobile BI to list and view the Bold BI Embedded dashboards through mobile app.
canonical: "/accessing-through-mobile-app/getting-started/"
platform: bold-bi
documentation: ug
---

# Getting Started

You need the Bold BI site URL to list and view the dashboards in the Bold BI Dashboard Mobile app.

## How to access Bold BI outside of Machine

### Bold BI Cloud

The Bold BI Cloud tenant can generally be accessed from anywhere. Please refer to the following section for instructions on connecting it to a mobile application.

### Bold BI Embedded

The Bold BI Embedded Analytics Server should be accessed from outside the machine using a public IP or a domain to connect with the mobile application. The mobile device and the Bold BI deployed machine should be on the same network if the connection is within an intranet. If the public IP or domain is available, please refer to [this](https://support.boldbi.com/kb/article/12442/) article on how to set it up in the Bold BI Embedded application. Then, refer to the following section for instructions on accessing the site in the mobile application.

**Note:** Please refer to [this](https://support.boldbi.com/kb/article/13254/) article for proper URL usage and protocol methods for the Bold BI Mobile application.

## Configure and Login in Bold BI Dashboard Mobile app

If this is your first time logging in, type in the server URL as shown below and then enter your username and password to login.
<table>
 <tr>
    <td>
       <span> </span>
    </td>
     <td>
        <span style="font-weight:bold">URL Pattern</span>
    </td>
    <td>
        <span style="font-weight:bold">Example</span>
    </td>
 </tr>
 <tr>
 <td> Bold BI Embedded Analytics Server </td>
 <td> {your_domain}/bi/site/{site identifier} </td>
 <td> <span>https://onpremise-demo.boldbi.com/bi/site/testing</span> 

 or

 <span>onpremise-demo.boldbi.com/bi/site/testing</span> </td>
 </tr>
 <tr>
 <td> Bold BI Cloud Analytics Server </td>
 <td> {your_domain}/bi </td>
 <td> <span>https://support-demo.boldbi.com/bi</span>

or

<span>support-demo.boldbi.com/bi</span></td>
 </tr>
 </table>

![configuration](/static/assets/accessing-through-mobile-app/images/configuration.png)

![login](/static/assets/accessing-through-mobile-app/images/login.png)

After successfully logging in, you can view the dashboards listed in different tabs.