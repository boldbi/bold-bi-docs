---
layout: post
title: Installation and deployment of Bold BI on Ubuntu | Bold BI Docs
description: Learn more about the prerequisites, installation and deployment of the Embedded Bold BI v4.1 or older Linux package on Ubuntu Linux server with Nginx.
platform: bold-bi
documentation: ug
---

# Bold BI Installation and Deployment on Ubuntu 

## Deployment prerequisites

1. You need access to a Linux server with a standard user account that has sudo privileges.

2. Install [Nginx](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-3.1#install-nginx) by running the following commands:

    ~~~shell
    sudo apt-get update 

    sudo apt-get install nginx
    ~~~ 

3. Install zip by running the command:

    ~~~shell
    sudo apt-get install zip 
    ~~~

4. Install the `GDIPlus` package using this command: 

    ~~~shell
    sudo apt-get install libgdiplus
    ~~~

5. If the `openssl conf` path does not exist, add it to the environment by running:

	~~~shell
    export OPENSSL_CONF=/etc/ssl/
	~~~

## Configuring the Bold BI application

1. Register and download the Bold BI Linux package from this [link](/deploying-bold-bi/overview/#registration-and-download).

2. Download the Bold BI Linux package by running the following command:

    ~~~shell
    sudo wget {Bold BI Linux package link}
    ~~~

3. Extract the zip file by running:

    ~~~shell
    sudo unzip {Bold BI Linux package zip file}
    ~~~ 

4. Change the directory to the `BoldBIEnterpriseEdition-Linux` with this command: 

    ~~~shell
    cd BoldBIEnterpriseEdition-Linux
    ~~~ 
 
5. Deploy Bold BI on your Linux machine by executing the following command: 
 
    ~~~shell
    sudo bash install-boldbi.sh -i {new} -u {user} -h {host URL} -n {true or false} 
    ~~~
 

* **i :** Installation type (new or upgrade)

* **u :** User or group managing the service (make sure the user exists on your Linux server) 

* **h :** Domain or IP address with HTTP protocol

* **n :** n: Set to "true" to automatically configure Bold BI with Nginx front-end server

    >**IMPORTANT:** If you have existing applications running on Nginx, set “-n” to false and configure the [Nginx manually](/deploying-bold-bi/deploying-on-linux/installation-and-deployment/bold-bi-on-ubuntu/#manually-configure-nginx). 

    Example for new installation:
    ~~~shell
    sudo bash install-boldbi.sh -i new -u www-data -h http://linux.example.com -n true
    ~~~ 

Once the installation is complete, open the host URL in your browser and continue with the application startup.

## Manually Configure Nginx

To configure Nginx as a reverse proxy for Bold BI, modify `/etc/nginx/sites-available/default`. Open the file in a text editor and add the following code.

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
        root               /var/www/boldbi-embedded/boldbi/idp/web/wwwroot;
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
        root               /var/www/boldbi-embedded/boldbi/idp/ums/wwwroot;
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
		root               /var/www/boldbi-embedded/boldbi/bi/web/wwwroot;
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
        root               /var/www/boldbi-embedded/boldbi/bi/designer/wwwroot;
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

After configuring Nginx, run `sudo nginx -t` to verify the syntax of the configuration files. If the test is successful, force Nginx to pick up the changes by running `sudo nginx -s reload`.

## Configure SSL
If you have an SSL certificate for your domain and want to configure the site with it, follow these steps (or skip if not applicable):

1. Uncomment the marked lines in the Nginx config file.

    ![ssl configuration uncomment](/static/assets/installation-and-deployment/images/linux-ssl-configuration-uncomment.png)

2. Comment the marked line in the Nginx config file.

    ![ssl configuration comment](/static/assets/installation-and-deployment/images/linux-ssl-configuration-comment.png)

3. Replace `example.com` with your domain name.

4. Define the path of the SSL certificate: `ssl_certificate /etc/ssl/domain.crt`.

5. Specify the directory where the SSL certificate key is located: `ssl_certificate_key /etc/ssl/domain.key`.

6. Save the changes and run `sudo nginx -t` to verify the syntax of the configuration file. If the test is successful, force Nginx to pick up the changes by running `sudo nginx -s reload`.

> **NOTE:** If you are configuring the application with SSL, update the URLs in product.json with `HTTPS` located in `/var/www/boldbi-embedded/boldbi/app_data/configuration`.

## Next steps

* [**Install Optional Libraries**](/deploying-bold-bi/deploying-on-linux/install-optional-libraries/v4.1-or-older/)
* [**Application Startup**](/application-startup/)