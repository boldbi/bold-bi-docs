---
layout: post
title: Installation & deployment of Bold BI on CentOS | Bold BI Docs
description: Learn more about the prerequisites, installation and deployment of the Embedded Bold BI v4.1 or older Linux package on CentOS Linux server with Nginx.
platform: bold-bi
documentation: ug
---

# Bold BI Installation and Deployment on CentOS

## Deployment prerequisites

1. Install [Nginx](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-centos-8).

2. Install the `GDIPlus` package using the following command:

    ~~~shell
    sudo yum install libgdiplus 
    ~~~ 

3. Add an `openssl conf` path in the environment, if does not exist:

	~~~shell
    export OPENSSL_CONF=/etc/ssl/
	~~~

## Configuring the Bold BI application

1. Register and download the Bold BI Linux package from this [link](/deploying-bold-bi/overview/#registration-and-download).

2. Update the highlighted URLs in the `product.json` file, located in `{extracted location}/boldbi/app_data/configuration/`. 

    ![Product Json](/static/assets/installation-and-deployment/images/product-json.png)

   | Application       	| Url                                                         	|
   |-------------------	|-----------------------------------------------------------	|
   | Idp 	            | `https://{Domain or IP address of the machine}`               |
   | Bi  	            | `https://{Domain or IP address of the machine}/bi`            |
   | BiDesigner  	    | `https://{Domain or IP address of the machine}/bi/designer`  	|

3. Create a `boldbi-embedded` folder in the Linux Server inside the `/var/www/` directory and place the extracted files.

    > **NOTE:** Please create the `/var/www` folder, if doesn’t exist.
 
4. Provide executable permission to dotnet file, located in `/var/www/boldbi-embedded/dotnet/`:

    ~~~shell
    sudo chmod +x /var/www/boldbi-embedded/dotnet/dotnet  
    ~~~
 
5. Once the libraries are installed, please make the following changes in all service files. 
    
    a. Update the user account that manages the service.
    
    ![Update User Account](/static/assets/installation-and-deployment/images/update-user-account.png)

    b. Add the following line: `Environment=LD_LIBRARY_PATH=/usr/local/lib`. 

    ![Add Environment](/static/assets/installation-and-deployment/images/environment.png)

6. Change the ownership of all directories to user or group:

    ~~~shell
    sudo chown -R {{username or group}} /var/www/boldbi-embedded/   
    ~~~

7. Copy the service files to the `/etc/systemd/system` folder.

8. Enable all the services by running the following commands: 

    ~~~shell
    sudo systemctl enable bold-id-web
    sudo systemctl enable bold-id-api
    sudo systemctl enable bold-ums-web
    sudo systemctl enable bold-bi-web
    sudo systemctl enable bold-bi-api
    sudo systemctl enable bold-bi-jobs
    sudo systemctl enable bold-bi-designer
    ~~~

9. Start all the services by running the following commands: 

    ~~~shell
    sudo systemctl start bold-id-web
    sudo systemctl start bold-id-api
    sudo systemctl start bold-ums-web
    sudo systemctl start bold-bi-web
    sudo systemctl start bold-bi-api
    sudo systemctl start bold-bi-jobs
    sudo systemctl start bold-bi-designer
    ~~~

10.	Run the following commands to check the status of the services:

    ~~~shell
    sudo systemctl status bold-id-web
    sudo systemctl status bold-id-api
    sudo systemctl status bold-ums-web
    sudo systemctl status bold-bi-web
    sudo systemctl status bold-bi-api
    sudo systemctl status bold-bi-jobs
    sudo systemctl status bold-bi-designer
    ~~~

## Configure Nginx 
 
1.	 To configure Nginx as a reverse proxy to forward requests to the Bold BI app, copy the Nginx configuration file from the `{extracted location}/boldbi-nginx-config to /etc/nginx/conf.d` folder.

2.	Rename the Nginx configuration file to `boldbi-nginx-config.conf`.  

3.	Once the Nginx configuration is established, run the `sudo nginx -t` to verify the syntax of the configuration files.  

4.	If the configuration file test is successful, force the Nginx to pick up the changes by running the `sudo nginx -s reload`. 

5.	If this is the first site you are configuring in the server, then please run the following command to allow `httpd` to make connections to modules.

    ~~~shell
    sudo setsebool -P httpd_can_network_connect 1   
    ~~~

## Next steps

* [**Install Optional Libraries**](/deploying-bold-bi/deploying-in-linux/install-optional-libraries/v4.1-or-older/)
* [**Application Startup**](/application-startup/)