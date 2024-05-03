---
layout: post
title: Installation of Bold BI on Ubuntu | Bold BI Documentation
description: Learn more about the installation and deployment of the Bold BI Linux package on Ubuntu Linux server with Nginx.
platform: bold-bi
documentation: ug
---

# Bold BI Installation and Deployment on Ubuntu 

## Deployment prerequisites

1. You must have access to a Linux server with a standard user account that has sudo privileges.

2. Install [Nginx](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-3.1#install-nginx) by running the following commands:

    ~~~shell
    sudo apt-get update 

    sudo apt-get install nginx
    ~~~ 

3. Install zip by running the following command:

    ~~~shell
    sudo apt-get install zip 
    ~~~

4. Install the `GDIPlus` package using the following command:

    ~~~shell
    sudo apt-get install libgdiplus
    ~~~

5. Install the `pv` tool by running the following command:

    ~~~shell
    sudo apt-get install pv
    ~~~

6. If you want to install the ETL application with Bold BI, follow these steps. Otherwise, skip this step and proceed with step 7.
    * Install the `python 3.9` or `later` by executing the following command:
   
        **Ubuntu Version:22.04** :
        ~~~shell
        sudo apt-get install -y python3
        ~~~

        **Ubuntu Version:20.04** :

        ~~~shell
        sudo apt update && sudo apt install wget software-properties-common && sudo add-apt-repository ppa:deadsnakes/ppa && sudo apt update && sudo apt install python3.9
        ~~~
    
    * Install pip dependency packages for ETL service by running the following command:
        ~~~shell
        sudo apt-get install python3-pip && sudo pip install duckdb===0.9.2 dlt===0.4.2 pymysql pyodbc pg8000 poetry pandas===2.0.0 "dlt[parquet]" "dlt[filesystem]"
        ~~~

7. If it does not exist, add an `openssl conf` path to the environment by running the following command:

	~~~shell
    export OPENSSL_CONF=/etc/ssl/
	~~~

## Configuring the Bold BI application

1. Register and download the Bold BI Linux package from [here](https://www.boldbi.com/account/).

2. Download the Bold BI Linux package by running the following command:

    ~~~shell
    sudo wget {Bold BI Linux package link}
    ~~~

3. Extract the zip file by running the following command:

    ~~~shell
    sudo unzip {Bold BI Linux package zip file}
    ~~~ 

4. Change the directory to `BoldBIEnterpriseEdition-Linux` by running the following command:

    ~~~shell
    cd BoldBIEnterpriseEdition-Linux
    ~~~ 
 
5. Execute the following command to deploy Bold BI on your Linux machine:
 
    ~~~shell
    sudo bash install-boldbi.sh -i {new} -u {user} -h {host URL} -n {true or false} 
    ~~~

* **i :** Installation type - Specify whether it is a new or upgrade installation.

* **u :** Specify the user or group that manages the service. Make sure this user exists on your Linux server. 

* **h :** Domain or IP address of the machine with HTTP protocol. 

* **n :** Setting this to “true” will automatically configure Bold BI with Nginx front-end server.

    >**IMPORTANT:** If there are any existing applications running on the Linux machine using Nginx, set the “-n” value to false and configure [Nginx manually](/deploying-bold-bi/deploying-in-linux/installation-and-deployment/bold-bi-on-ubuntu/#manually-configure-nginx).  

    Example for new installation:
    ~~~shell
    sudo bash install-boldbi.sh -i new -u www-data -h http://linux.example.com -n true
    ~~~ 

> **NOTE:** You can also [configure Bold BI with Apache server](/deploying-bold-bi/deploying-in-linux/deploy-bold-bi-using-apache-server/configure-apache-server-in-ubuntu/) on Ubuntu.

Once the installation is completed, open the host URL in your browser and proceed with the application startup.

## Manually Configure Nginx

To configure Nginx as a reverse proxy to forward requests to the Bold BI app, modify the file `/etc/nginx/sites-available/default`. Open it in a text editor and add the following code.

~~~shell
#server {
#listen 80;
#server_name example.com;
#return 301 https://example.com$request_uri;
#}

server {
		listen        80 default_server;
		
		#server_name   example.com;
		
		#listen 443 ssl;
		#ssl on;
		#ssl_certificate /path/to/certificate/file/domain.crt;
		#ssl_certificate_key /path/to/key/file/domain.key;
		
		proxy_read_timeout 300;
		proxy_connect_timeout 300;
		proxy_send_timeout 300;
		send_timeout 300;
		client_max_body_size 200M;

	location / { 
        root               /var/www/bold-services/application/idp/web/wwwroot;
        proxy_pass         http://localhost:6500/;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
		fastcgi_buffers    16 16k;
		fastcgi_buffer_size 32k;
    }
	location /api {
        proxy_pass         http://localhost:6501/api;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
		proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
	location /ums {
        root               /var/www/bold-services/application/idp/ums/wwwroot;
        proxy_pass         http://localhost:6502/ums;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
	location /ums/signalr/progresshub { 
        proxy_pass         http://localhost:6502/ums/signalr/progresshub;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection "upgrade";
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
	location /bi { 
		root               /var/www/bold-services/application/bi/web/wwwroot;
        proxy_pass         http://localhost:6504/bi;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
	location /bi/messageHub { 
        proxy_pass         http://localhost:6504/bi/messageHub;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection "upgrade";
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
	location /bi/api {
        proxy_pass         http://localhost:6505/bi/api;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
	location /bi/jobs {
        proxy_pass         http://localhost:6506/bi/jobs;
		proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
	location /bi/designer {
        root               /var/www/bold-services/application/bi/designer/wwwroot;
        proxy_pass         http://localhost:6507;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
	location /bi/designer/helper {
        proxy_pass http://localhost:6507/bi/designer/helper;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
}
~~~

Once the Nginx configuration is set up, run the command `sudo nginx -t` to verify the syntax of the configuration files. If the configuration file test is successful, force Nginx to pick up the changes by running `sudo nginx -s reload`.

## Configure SSL
If you have an SSL certificate for your domain and need to configure the site with it, follow these steps. Otherwise, you can skip this section.

1. Navigate to the directory `/etc/nginx/sites-available/` and open the file `boldbi-nginx-config` in a text editor.
2. Uncomment the marked lines in the Nginx config file.

    ![ssl configuration uncomment](/static/assets/installation-and-deployment/images/linux-ssl-configuration-uncomment.png)

3. Comment the marked line in the Nginx config file.

    ![ssl configuration comment](/static/assets/installation-and-deployment/images/linux-ssl-configuration-comment.png)

4. Replace `example.com` with your domain name.

5. Define the path of the SSL certificate: `ssl_certificate /etc/ssl/domain.crt`.

6. Specify the directory where the SSL certificate key is located: `ssl_certificate_key /etc/ssl/domain.key`.

7. Save the changes and run `sudo nginx -t` to verify the syntax of the configuration file. If the configuration file test is successful, force Nginx to pick up the changes by running `sudo nginx -s reload`.

> **NOTE:** If you are configuring the application with SSL, you need to update the URLs in the product.json file with `HTTPS`, located in the directory `/var/www/bold-services/application/app_data/configuration`.

## Next steps

* [**Install Optional Libraries**](/deploying-bold-bi/deploying-in-linux/install-optional-libraries/)
* [**Application Startup**](/application-startup/)
