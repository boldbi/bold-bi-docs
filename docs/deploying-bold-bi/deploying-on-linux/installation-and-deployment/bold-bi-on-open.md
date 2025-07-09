---
layout: post
title: Installation of Bold BI on SUSE-15  | Bold BI Documentation
description: Learn more about the installation and deployment of the Bold BI Linux package on SUSE-15 Linux server with Nginx.
platform: bold-bi
documentation: ug
---

# Bold BI Installation and Deployment on SUSE-15 

## Deployment prerequisites

1. You must have access to a Linux server with a standard user account that has sudo privileges.

2. Install [Nginx](https://en.opensuse.org/Nginx) by running the following commands:

    ~~~shell
    sudo zypper refresh 

    sudo zypper install nginx 
    ~~~ 

2. Install the `pv` tool by running the following command:

    ~~~shell
    sudo zypper install pv
    ~~~
    
3. If you want to install the ETL application with Bold BI, follow these steps. Otherwise, skip this step and proceed with step 5.

    * Install pip dependency packages for ETL service by running the following command:
        ~~~shell
        sudo pip install duckdb===1.1.2 dlt===0.5.4 pymysql pyodbc pg8000 poetry pandas===2.2.2 "dlt[parquet]" "dlt[filesystem]"
        ~~~
    > Note: Python 3.9 must be installed on that machine.

5. If it does not exist, add an `openssl conf` path to the environment by running the following command:

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
    sudo bash install-boldbi.sh -i {new} -u {user} -h {host URL} -n {true or false} 
    ~~~

* **i :** Installation type - Specify whether it is a new or upgrade installation.

* **u :** Specify the user or group that manages the service. Make sure this user exists on your Linux server. 

* **h :** Domain or IP address of the machine with HTTP protocol. 

* **n :** Setting this to “true” will automatically configure Bold BI with Nginx front-end server.  

    Example for new installation:
    ~~~shell
    sudo bash install-boldbi.sh -i new -u www-data -h http://linux.example.com -n true
    ~~~ 

Once the installation is completed, open the host URL in your browser and proceed with the application startup.

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
