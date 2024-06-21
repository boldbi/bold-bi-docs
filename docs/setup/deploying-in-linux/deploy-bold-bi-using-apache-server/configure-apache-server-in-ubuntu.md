---
layout: post
title: Configure Bold BI with Apache server in Ubuntu | Bold BI Docs
description: Learn more about how to configure Bold BI with the Apache front-end server in Ubuntu with SSL termination.
documentation: ug
---

# Deploy Bold BI on Ubuntu Using Apache Server

 Execute the following command to deploy Bold BI with apache server in your Linux machine: 
 
 ~~~shell
  sudo bash install-boldbi.sh -i {new} -u {user} -h {host URL} -s apache 
 ~~~ 

* **i:** Installation type: Specifies either it is a new or upgrade installation.

* **u:** Specify the user or group that manages the service. 

* **h:** Domain or IP address of the machine with HTTP protocol. 

* **s:** setting this to “apache” will automatically configure the Bold BI with the apache server.

	>**IMPORTANT:** If you have any existing applications running in that Linux machine using Apache, set “-n” value to false and configure the [Apache manually](/embedded-bi/setup/deploying-in-linux/deploy-bold-bi-using-apache-server/configure-apache-server-in-ubuntu/#manually-configure-apache).  

    Example for new installation,
	
    ~~~shell
     sudo bash install-boldbi.sh -i new -u www-data -h http://linux.example.com -s apache
    ~~~ 

Once the installation is completed, open the host URL in the browser and continue the application startup.

## Manually Configure Apache

To configure Apache as a reverse proxy to forward requests to the Bold BI app, modify `/etc/apache/sites-available/000-default.conf.` Open it in a text editor and add the following code.

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
	
	<Location /ums/signalr/progresshub>
			RewriteEngine on			
			RewriteCond %{HTTP:UPGRADE} ^WebSocket$ [NC]
			RewriteCond %{HTTP:CONNECTION} Upgrade$ [NC]			
			RewriteRule /ums/signalr/progresshub(.*) ws://localhost:6502/ums/signalr/progresshub$1 [P]
			RequestHeader set "X-Forwarded-Proto" expr=%{REQUEST_SCHEME}
	</Location>

	<Location /bi>
			ProxyPass http://localhost:6504/bi Keepalive=On
			ProxyPassReverse http://localhost:6504/bi
			RewriteEngine on
			RewriteCond %{HTTP:UPGRADE} ^WebSocket$ [NC]
			RewriteRule /bi/(.*) ws://localhost:6504/bi/$1 [P]
			RequestHeader set "X-Forwarded-Proto" expr=%{REQUEST_SCHEME}
	</Location>
	
	<Location /bi/messageHub>
			RewriteEngine on
			RewriteCond %{HTTP:UPGRADE} ^WebSocket$ [NC]
			RewriteCond %{HTTP:CONNECTION} Upgrade$ [NC]
			RewriteRule /bi/messageHub(.*) ws://localhost:6504/bi/messageHub$1 [P]
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
</VirtualHost>

~~~

Once the Apache configuration is established, run the `sudo apache2ctl configtest` to verify the syntax of the configuration files. If the configuration file test is successful, force the Apache to pick up the changes by running the `sudo systemctl restart apache2.`

## Configure SSL for Apache server 

If you have an SSL certificate for your domain and need to configure the site with your SSL certificate, follow these steps or you can skip this.

1. Uncomment the following marked lines in the Apache config file.
   
    ![Before SSL Configure In Apache Server](/static/assets/embedded/setup/images/before-ssl-configure-for-apache-server.png)

2. Replace the localhost with your domain.

3. Define the path of the SSL certificate:   
   `ssl_certificate /etc/ssl/domain.crt.`

4. Specify the directory where the SSL certificate key is located:
    `ssl_certificate_key /etc/ssl/domain.key.`
	
	![After SSL Configure In Apache Server](/static/assets/embedded/setup/images/after-ssl-configure-for-apache-server.png)
    
5. Save and run the sudo apache2ctl configtest to verify the syntax of the configuration file. If the configuration file test is successful, force the Apache to pick up the changes by running the sudo apache2ctl restart.

> **NOTE:** If you are configuring the application with SSL, you need to update the URL’s in the product.json file with `HTTPS` located in the `/var/www/boldbi-embedded/boldbi/app_data/configuration.`

## Next steps

* [**Install Optional Libraries**](/embedded-bi/setup/deploying-in-linux/install-optional-libraries/)
* [**Application Startup**](/embedded-bi/application-startup/)