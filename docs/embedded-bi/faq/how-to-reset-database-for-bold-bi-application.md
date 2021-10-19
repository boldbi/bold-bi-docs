---
layout: post
title: Resetting Bold BI Application Database | Bold BI Docs
description: Learn how to reset the Bold BI application database using the admin utility through the command line interface.
platform: bold-bi
documentation: ug
---

# How to reset the database of the Bold BI application?
Resetting the application database details in the Bold BI application requires updating the application database details in different places. 

1. Updating the database details for Bold BI Server.
2. Updating the database details for Bold BI tenants.
3. Updating the database details for data store in Bold BI (optional).

## Steps to reset the Bold BI application database

1.	Follow the steps in below link to reset the database of the Bold BI server.  
    * [**Update Application Database**](/embedded-bi/admin-utility/reset-application-database/)

2.	Once the database has been updated successfully, then restart the application in IIS and login to site management portal using the link `{host:port}/ums/sites`

3.  Now, update the existing tenants database details using edit option.  

    ![edit-site](/static/assets/embedded/faq/images/edit-site.png)  

4.  Enter the database details and Click the update button.  

    ![edit-site-db](/static/assets/embedded/faq/images/edit-site-db.png)    

    > **NOTE:**  You can only update the server name, user name and password in the tenant database details.

5.  Now, you can open your tenant site with updated database.

6.  Once logged into tenant application, you can update the data store settings if you have already configured (this is optional step).
    
    ![edit-datastore](/static/assets/embedded/faq/images/edit-datastore.png)  