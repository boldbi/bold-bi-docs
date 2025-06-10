---
layout: post
title: Installation of Bold BI on CentOS | Bold BI Documentation
description: Learn more about the installation and deployment of the Bold BI Linux package on CentOS Linux server with Nginx.
platform: bold-bi
documentation: ug
---

# Bold BI Installation and Deployment on CentOS Environment 

## Deployment prerequisites

1. Install [Nginx](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-centos-8).

2. Install the `GDIPlus` package using the following command:

    ~~~shell
    sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
    sudo yum install epel-release
    sudo yum install libgdiplus
    ~~~ 

3. If you want to install the ETL application with Bold BI, follow these steps. Otherwise, skip this step and proceed with step 4.
    * Check and install `Python 3.9` by executing the following command:

        ~~~shell
        sudo dnf groupinstall 'development tools' && sudo dnf install wget openssl-devel bzip2-devel libffi-devel && sudo curl https://www.python.org/ftp/python/3.9.2/Python-3.9.2.tgz -O && sudo tar -xvf Python-3.9.2.tgz && cd Python-3.9.2 && sudo ./configure --enable-optimizations && sudo make install
        ~~~

    * Install `python pip` and the following pip packages by running the following command.
        ~~~shell
        sudo yum -y install python3-pip && python3.9 -m pip install duckdb===1.1.2 dlt===0.5.4 pymysql pyodbc pg8000 poetry pandas===2.2.2 "dlt[parquet]" "dlt[filesystem]"
       ~~~
4. Add an `openssl conf` path to the environment if does not exist:

	~~~shell
    export OPENSSL_CONF=/etc/ssl/
	~~~

## Configuring the Bold BI application

1. Please register and [download](https://www.boldbi.com/account) the Bold BI Linux package.

2. Download the Bold BI Linux package by running the following command:

    ~~~shell
    sudo wget {Bold BI Linux package link}
    ~~~

3. Extract the zip file:

    ~~~shell
    sudo unzip {Bold BI Linux package zip file}
    ~~~ 

4. Change the working directory to `BoldBIEnterpriseEdition-Linux` by running the following command:

    ~~~shell
    cd BoldBIEnterpriseEdition-Linux
    ~~~ 
 
5. Execute the following command to deploy Bold BI in your Linux machine:
 
    ~~~shell
    sudo bash install-boldbi.sh -i {new} -u {user} -h {host URL} -n {true or false} 
    ~~~
 

* **i :** Installation type: Specifies whether it is a new or upgrade installation.

* **u :** Specifies the user or group that manages the service. Please ensure that this user exists on your Linux server. 

* **h :** Domain or IP address of the machine with HTTP protocol. 

* **n :** Setting this to “true” will automatically configure Bold BI with the Nginx front-end server. 

    >**IMPORTANT:** If you have any existing applications running on the Linux machine using Nginx, set “-n” value to false and configure [Nginx manually](/deploying-bold-bi/deploying-on-linux/installation-and-deployment/bold-bi-on-ubuntu/#manually-configure-nginx).

    Example for new installation:
    ~~~shell
    sudo bash install-boldbi.sh -i new -u www-data -h http://linux.example.com -n true
    ~~~ 

> **NOTE:** You can also [configure Bold BI with Apache server](/deploying-bold-bi/deploying-on-linux/deploy-bold-bi-using-apache-server/configure-apache-server-in-centos/) in CentOS.

Once the installation is completed, open the host URL in the browser and continue with the application startup.

## Manually Configure Nginx

To configure Nginx as a reverse proxy to forward requests to the Bold BI app, modify `/etc/nginx/nginx.conf` file.

1. Open it in a text editor and add the following code.

~~~shell
#server {
#listen 80;
#server_name example.com;
#return 301 https://example.com$request_uri;
#}

server {
		listen       80 default_server;
		listen       [::]:80 default_server;
		
		#server_name   example.com;
		
		#listen 443 ssl;
		#ssl_certificate /path/to/certificate/file/domain.crt;
		#ssl_certificate_key /path/to/key/file/domain.key;
		
		proxy_buffer_size   128k;
		proxy_buffers   4 256k;
		proxy_busy_buffers_size   256k;
		large_client_header_buffers 4 16k;		
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
        proxy_set_header   Host $http_host;
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
        proxy_set_header   Host $http_host;
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
        proxy_set_header   Host $http_host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
	# Start of bi locations
	location /bi { 
		root               /var/www/bold-services/application/bi/web/wwwroot;
        proxy_pass         http://localhost:6504/bi;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $http_host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
	location /bi/api {
        proxy_pass         http://localhost:6505/bi/api;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $http_host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
	location /bi/jobs {
        proxy_pass         http://localhost:6506/bi/jobs;
		proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $http_host;
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
        proxy_set_header   Host $http_host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
	location /bi/designer/helper {
        proxy_pass http://localhost:6507/bi/designer/helper;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $http_host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
    location /aiservice {
        proxy_pass http://localhost:6510/aiservice;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $http_host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
	# End of bi locations
}
~~~

2. If you need to configure the `Bold Data Hub` along with the Bold BI, you need to add the below syntax to the `nginx.conf` file after aiservice block.

~~~shell
    location /etlservice/ {
	    root               /var/www/bold-services/application/etl/etlservice/wwwroot;
	    proxy_pass http://localhost:6509/;
	    proxy_http_version 1.1;
	    proxy_set_header   Upgrade \$http_upgrade;
	    proxy_set_header   Connection "upgrade";
	    proxy_set_header   Host \$http_host;
	    proxy_cache_bypass \$http_upgrade;
	    proxy_set_header   X-Forwarded-For \$proxy_add_x_forwarded_for;
	    proxy_set_header   X-Forwarded-Proto \$scheme;
    }
    location /etlservice/_framework/blazor.server.js {
	    root               /var/www/bold-services/application/etl/etlservice/wwwroot;
	    proxy_pass http://localhost:6509/_framework/blazor.server.js;
	    proxy_http_version 1.1;
	    proxy_set_header   Upgrade \$http_upgrade;
	    proxy_set_header   Connection "upgrade";
	    proxy_set_header   Host \$http_host;
	    proxy_cache_bypass \$http_upgrade;
	    proxy_set_header   X-Forwarded-For \$proxy_add_x_forwarded_for;
	    proxy_set_header   X-Forwarded-Proto \$scheme;
    }

~~~

Once the Nginx configuration is established, run `sudo nginx -t` to verify the syntax of the configuration files. If the configuration file test is successful, force Nginx to pick up the changes by running `sudo nginx -s reload`.

## Configure SSL
If you have an SSL certificate for your domain and need to configure the site with it, follow these steps or you can skip this:

1. Navigate to `/etc/nginx/conf.d`. Open the `boldbi-nginx-config.conf` file in a text editor.

2. Uncomment the following marked lines in the Nginx config file.

    ![ssl configuration uncomment](/static/assets/installation-and-deployment/images/linux-ssl-configuration-uncomment.png)

3. Comment the following marked line in the Nginx config file.

    ![ssl configuration comment](/static/assets/installation-and-deployment/images/linux-ssl-configuration-comment.png)

4. Replace `example.com` with your domain name.

5. Define the path of the SSL certificate: `ssl_certificate /etc/ssl/domain.crt`.

6. Specify the directory where the SSL certificate key is located: `ssl_certificate_key /etc/ssl/domain.key`.

7. Save and run `sudo nginx -t` to verify the syntax of the configuration file. If the configuration file test is successful, force Nginx to pick up the changes by running `sudo nginx -s reload.`

> **NOTE:** If you are configuring the application with SSL, you need to update the URLs in the product.json with `HTTPS` located in `/var/www/bold-services/application/app_data/configuration.

## Next steps

* [**Install Optional Libraries**](/deploying-bold-bi/deploying-on-linux/install-optional-libraries/)
* [**Application Startup**](/application-startup/)
