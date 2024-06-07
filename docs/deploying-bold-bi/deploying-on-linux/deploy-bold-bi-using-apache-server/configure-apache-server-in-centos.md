---
layout: post
title: Configure Bold BI with Apache server in CentOS | Bold BI Docs
description: Learn more about how to configure Bold BI with the Apache front-end server in CentOS with SSL termination.
documentation: ug
---

# Deploy Bold BI  on CentOS Using Apache Server

To deploy Bold BI with the Apache server on your Linux machine, execute the following command:
 
~~~shell
  sudo bash install-boldbi.sh -i {new} -u {user} -h {host URL} -s apache 
~~~
 
* **i:** Installation type: Specifies whether it is a new or upgrade installation.

* **u:** Specify the user or group that manages the service. 

* **h:** Domain or IP address of the machine with HTTP protocol.

* **s:** Setting this to “Apache” will automatically configure the Bold BI with the Apache front-end server.

	>**IMPORTANT:** If you have any existing applications running on the Linux machine using Apache, configure the [Apache manually](/deploying-bold-bi/deploying-on-linux/deploy-bold-bi-using-apache-server/configure-apache-server-in-centos/#manually-configure-apache). 
	 
    Example for new installation:

    ~~~shell
     sudo bash install-boldbi.sh -i new -u www-data -h http://linux.example.com -s apache
    ~~~ 

Once the installation is completed, open the host URL in the browser and continue with the application startup.

## Manually Configure Apache

To configure Apache as a reverse proxy to forward requests to the Bold BI app, modify the file `/etc/httpd/sites-available/000-default.conf`.Open it in a text editor and add the following code.

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

Once the Apache configuration is established, run the command `sudo apache2ctl configtest` to verify the syntax of the configuration files. If the configuration file test is successful, force Apache to pick up the changes by running `sudo systemctl restart apache2`.

## Configure SSL in Apache server 

If you have an SSL certificate for your domain and need to configure the site with it, follow these steps or you can skip this:

1. Uncomment the marked lines in the Apache config file.
   
    ![Before SSL Configure In Apache Server](/static/assets/installation-and-deployment/images/before-ssl-configure-for-apache-server.png)
   
2. Replace "localhost" with your domain.

3. Define the path of the SSL certificate: `ssl_certificate /etc/ssl/domain.crt`.

4. Specify the directory where the SSL certificate key is located: `ssl_certificate_key /etc/ssl/domain.key`.
	
	![After SSL Configure In Apache Server](/static/assets/installation-and-deployment/images/after-ssl-configure-for-apache-server.png)
    
5. Save the changes and run `sudo apache2ctl config test` to verify the syntax of the configuration file. If the configuration file test is successful, force Apache to pick up the changes by running `sudo apache2ctl restart`.

> **NOTE:** If you are configuring the application with SSL, you need to update the URLs in the product.json file with `HTTPS` located in `/var/www/boldbi-embedded/boldbi/app_data/configuration`.

## Next steps

* [**Install Optional Libraries**](/deploying-bold-bi/deploying-on-linux/install-optional-libraries/)
* [**Application Startup**](/application-startup/)