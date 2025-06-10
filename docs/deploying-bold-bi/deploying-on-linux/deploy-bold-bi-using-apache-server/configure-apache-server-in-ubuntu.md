---
layout: post
title: Configure Bold BI with Apache server in Ubuntu | Bold BI Docs
description: Learn more about how to configure Bold BI with the Apache front-end server in Ubuntu with SSL termination.
documentation: ug
---

# Bold BI Installation and Deployment on Ubuntu 

## Deployment prerequisites

1. You must have access to a Linux server with a standard user account that has sudo privileges.

2. Install [Apache](https://www.digitalocean.com/community/tutorials/how-to-install-the-apache-web-server-on-ubuntu-20-04).

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
        sudo apt-get install python3-pip && sudo pip install duckdb===1.1.2 dlt===0.5.4 pymysql pyodbc pg8000 poetry pandas===2.2.2 "dlt[parquet]" "dlt[filesystem]"
        ~~~

7. If it does not exist, add an `openssl conf` path to the environment by running the following command:

	~~~shell
    export OPENSSL_CONF=/etc/ssl/
	~~~

## Configuring the Bold BI application

1. Please register and [download](https://www.boldbi.com/account) the Bold BI Linux package.

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
  sudo bash install-boldbi.sh -i {new} -u {user} -h {host URL} -s apache 
 ~~~ 

* **i:** Installation type: Specifies whether it is a new or upgrade installation.

* **u:** Specify the user or group that manages the service. 

* **h:** Domain or IP address of the machine with HTTP protocol. 

* **s:** Setting this to “apache” will automatically configure Bold BI with the Apache server.

	>**IMPORTANT:** If there are any existing applications running on the Linux machine using Apache, set the “-n” value to false and configure [Apache manually](/deploying-bold-bi/deploying-on-linux/deploy-bold-bi-using-apache-server/configure-apache-server-in-ubuntu/#manually-configure-apache).  

    Example for new installation:
	
    ~~~shell
     sudo bash install-boldbi.sh -i new -u www-data -h http://linux.example.com -s apache
    ~~~ 

Once the installation is completed, open the host URL in the browser and continue with the application startup.

## Manually Configure Apache

To configure Apache as a reverse proxy to forward requests to the Bold BI app, modify the `/etc/apache2/sites-available/000-default.conf` file. 

1. Open it in a text editor and add the following code.

~~~shell
<VirtualHost *:80>
	#ServerName localhost
	#Redirect / https://localhost/
#</VirtualHost>

#<VirtualHost *:443>
	#ServerName localhost
	ProxyRequests Off
	ProxyPreserveHost On
	Protocols h2 http/1.1
	LimitRequestBody 209715200
	Timeout 300
	ProxyTimeout 300

	#SSLEngine On
	#SSLCertificateFile /path/to/certificate/file/domain.crt
	#SSLCertificateKeyFile /path/to/key/file/domain.key

	<Location />
			ProxyPass http://localhost:6500/ Keepalive=On
			ProxyPassReverse http://localhost:6500/
			RewriteEngine on
			RewriteCond %{HTTP:UPGRADE} ^WebSocket$ [NC]
			RewriteCond %{HTTP:CONNECTION} Upgrade$ [NC]
			RewriteRule /(.*) ws://localhost:6500/$1 [P]
			RequestHeader set "X-Forwarded-Proto" expr=%{REQUEST_SCHEME}
	</Location>

	<Location /api>
			ProxyPass http://localhost:6501/api Keepalive=On
			ProxyPassReverse http://localhost:6501/api			
			RewriteEngine on
			RewriteCond %{HTTP:UPGRADE} ^WebSocket$ [NC]
			RewriteCond %{HTTP:CONNECTION} Upgrade$ [NC]
			RewriteRule /api/(.*) ws://localhost:6501/api/$1 [P]
			RequestHeader set "X-Forwarded-Proto" expr=%{REQUEST_SCHEME}
	</Location>

	<Location /ums>
			ProxyPass http://localhost:6502/ums Keepalive=On
			ProxyPassReverse http://localhost:6502/ums
			RewriteEngine on			
			RewriteCond %{HTTP:UPGRADE} ^WebSocket$ [NC]
			RewriteRule /ums/(.*) ws://localhost:6502/ums/$1 [P]
			RequestHeader set "X-Forwarded-Proto" expr=%{REQUEST_SCHEME}
	</Location>
	# Start of bi locations
	<Location /bi>
			ProxyPass http://localhost:6504/bi Keepalive=On
			ProxyPassReverse http://localhost:6504/bi
			RewriteEngine on
			RewriteCond %{HTTP:UPGRADE} ^WebSocket$ [NC]
			RewriteRule /bi/(.*) ws://localhost:6504/bi/$1 [P]
			RequestHeader set "X-Forwarded-Proto" expr=%{REQUEST_SCHEME}
	</Location>
	
	<Location /bi/api>
			ProxyPass http://localhost:6505/bi/api Keepalive=On
			ProxyPassReverse http://localhost:6505/bi/api
			RewriteEngine on
			RewriteCond %{HTTP:UPGRADE} ^WebSocket$ [NC]
			RewriteCond %{HTTP:CONNECTION} Upgrade$ [NC]
			RewriteRule /bi/api/(.*) ws://localhost:6505/bi/api/$1 [P]
			RequestHeader set "X-Forwarded-Proto" expr=%{REQUEST_SCHEME}
	</Location>

	<Location /bi/jobs>
			ProxyPass http://localhost:6506/bi/jobs Keepalive=On
			ProxyPassReverse http://localhost:6506/bi/jobs
			RewriteEngine on
			RewriteCond %{HTTP:UPGRADE} ^WebSocket$ [NC]
			RewriteCond %{HTTP:CONNECTION} Upgrade$ [NC]
			RewriteRule /bi/jobs/(.*) ws://localhost:6506/bi/jobs/$1 [P]
			RequestHeader set "X-Forwarded-Proto" expr=%{REQUEST_SCHEME}
	</Location>

	<Location /bi/designer>
			ProxyPass http://localhost:6507/bi/designer Keepalive=On
			ProxyPassReverse http://localhost:6507
			RewriteEngine on
			RewriteCond %{HTTP:UPGRADE} ^WebSocket$ [NC]
			RewriteRule /bi/designer/(.*) ws://localhost:6507/bi/designer/$1 [P]
			RequestHeader set "X-Forwarded-Proto" expr=%{REQUEST_SCHEME}
	</Location>
	
	<Location /bi/designer/helper>
			RewriteEngine on
			RewriteCond %{HTTP:UPGRADE} ^WebSocket$ [NC]
			RewriteCond %{HTTP:CONNECTION} Upgrade$ [NC]
			RewriteRule /bi/designer/helper(.*) ws://localhost:6507/bi/designer/helper$1 [P]
			RequestHeader set "X-Forwarded-Proto" expr=%{REQUEST_SCHEME}
	</Location>
	<Location /aiservice>
			ProxyPass http://localhost:6510/aiservice Keepalive=On
			ProxyPassReverse http://localhost:6510/aiservice
			RewriteEngine on
			RewriteCond %{HTTP:UPGRADE} ^WebSocket$ [NC]
			RewriteCond %{HTTP:CONNECTION} Upgrade$ [NC]
			RewriteRule /bi/designer/helper(.*) ws://localhost:6510/aiservice$1 [P]
			RequestHeader set "X-Forwarded-Proto" expr=%{REQUEST_SCHEME}
	</Location>
     # End of bi locations
</VirtualHost>

~~~

2. If you need to configure the `Bold Data Hub` along with the Bold BI, you need to add the below syntax to the `000-default.conf` file after aiservice block.

~~~shell
	<Location /etlservice/>
			ProxyPass http://localhost:6509/ Keepalive=On
			ProxyPassReverse http://localhost:6509/
			RewriteEngine on
			RewriteCond %{HTTP:UPGRADE} ^WebSocket$ [NC]
			RewriteRule /etlservice/(.*) ws://localhost:6509/etlservice/\$1 [P]
			RequestHeader set "X-Forwarded-Proto" expr=%{REQUEST_SCHEME}
    </Location>

    <Location /etlservice/_framework/blazor.server.js>
			ProxyPass http://localhost:6509/_framework/blazor.server.js Keepalive=On
			ProxyPassReverse http://localhost:6509/_framework/blazor.server.js
			RewriteEngine on
			RewriteCond %{HTTP:UPGRADE} ^WebSocket$ [NC]
			RewriteRule /etlservice/_framework/blazor.server.js(.*) ws://localhost:6509/etlservice/_framework/blazor.server.js\$1 [P]
			RequestHeader set "X-Forwarded-Proto" expr=%{REQUEST_SCHEME}
    </Location>

~~~

Once the Apache configuration is established, run `sudo apache2ctl configtest` to verify the syntax of the configuration files. If the configuration file test is successful, force Apache to pick up the changes by running `sudo systemctl restart apache2`.

## Configure SSL for Apache server 

If you have an SSL certificate for your domain and need to configure the site with it, follow these steps or you can skip this:

1. Navigate to the directory `/etc/apache2/sites-available/` and open the file `boldbi-apache-config.conf` in a text editor.

2. Uncomment the marked lines in the Apache config file.
   
    ![Before SSL Configure In Apache Server](/static/assets/installation-and-deployment/images/before-ssl-configure-for-apache-server.png)

3. Replace "localhost" with your domain.

4. Define the path of the SSL certificate: `ssl_certificate /etc/ssl/domain.crt`.

5. Specify the directory where the SSL certificate key is located: `ssl_certificate_key /etc/ssl/domain.key`.
	
	![After SSL Configure In Apache Server](/static/assets/installation-and-deployment/images/after-ssl-configure-for-apache-server.png)
    
6. Save the changes and run `sudo apache2ctl configtest` to verify the syntax of the configuration file. If the configuration file test is successful, force Apache to pick up the changes by running `sudo apache2ctl restart`.

> **NOTE:** If you are configuring the application with SSL, you need to update the URLs in the product.json file with `HTTPS`, located in `/var/www/bold-services/application/app_data/configuration`.
## Next steps

* [**Install Optional Libraries**](/deploying-bold-bi/deploying-on-linux/install-optional-libraries/)
* [**Application Startup**](/application-startup/)