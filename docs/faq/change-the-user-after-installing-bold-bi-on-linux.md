---
layout: post
title: Change the username on Linux - Embedded BI | Bold BI Docs
description: Learn how to change the username after installation of embedded Bold BI, an analytical software on Linux machine using the instructions described in this page.
canonical: "/faq/Change-the-user-after-installing-Bold-BI-on-Linux/"
platform: bold-bi
documentation: ug
---

# How to Change the user after installing Bold Bi On Linux?
1. Edit the service of Bold BI apps using following command.
    
    `systemctl edit --full <boldbi-service-name>`
 
        Ex: 
        systemctl edit --full bold-id-web 
        systemctl edit --full bold-id-api 
        systemctl edit --full bold-ums-web 
        systemctl edit --full bold-bi-web 
        systemctl edit --full bold-bi-api 
        systemctl edit --full bold-bi-jobs 
        systemctl edit --full bold-bi-designer 
 
2. Change the username, you want to run your application in the user value and save the service file.

    ![Change User After Installation](/static/assets/faq/images/change-user-after-installation.png)

3. You can also change the user in the service files by running the following command. 

    `find "/etc/systemd/system/" -type f -name "*.service" -print0 | xargs -0 sed -i"s|$existing_user|$user_to_replace|g"`

4. Check and provide read and write or owner permission for the Bold BI installed directory `(/var/www/boldbi-embedded)` to the newly updated user.
 
5. Run the following command. 

    `sudo systemctl daemon-reload`

6. Restart the services using the following command. 

    `systemctl restart bold-*` 

7. Now, the Bold BI application will run using the changed user.