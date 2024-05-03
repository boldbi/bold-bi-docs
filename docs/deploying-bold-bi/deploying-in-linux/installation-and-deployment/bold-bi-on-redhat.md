---
layout: post
title: Installation of Bold BI on RHEL | Bold BI Documentation
description: Learn more about the installation and deployment of the Bold BI Linux package on the RHEL Linux server with Nginx.
platform: bold-bi
documentation: ug
---

# Bold BI Installation and Deployment on RHEL Linux

## Deployment Prerequisites

1. Install [Nginx](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-centos-8).
2. Install `zip`.
    ```cmd
     sudo dnf install zip
    ```  
3. Install `wget`.
    ```cmd
     sudo dnf install wget
    ```   
4. Install the `GDIPlus` package using the following command.

    ```cmd
    sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
    sudo yum install epel-release
    sudo yum install libgdiplus
    ```
    
5.  If you want to install the ETL application with Bold BI, follow the steps below. Otherwise, skip this step and proceed with the step 6.
    * Install `python pip` and following pip packages by running the below command.
        ```cmd
        sudo yum -y install python3-pip && python3.9 -m pip install duckdb===0.9.2 dlt===0.4.2 pymysql pyodbc pg8000 poetry pandas===2.0.0 "dlt[parquet]" "dlt[filesystem]"
        ```
      > Note: Python 3.9 must be installed on that machine.
6. Install the `pv` tool by running the following command.
    ```cmd
    sudo dnf install pv
    ``` 

7. Add an **openssl** conf path in the environment if it does not exist.

    ```cmd
    export OPENSSL_CONF=/etc/ssl/
    ```
8. Change the SELinux mode from targeted to permissive.
     ```cmd
    sudo setenforce 0
    ```   
## Deploying Bold BI Application

1. Register and copy the Bold BI Linux package link from [here](/deploying-bold-bi/overview/).
2. Download the Bold BI Linux package by running the following command.

    ```cmd
    sudo wget {Bold BI Linux package link}
    ```
3. Extract the zip file.
     ```cmd
     sudo unzip {Bold BI Linux package zip file}
     ```
4. Change the working directory to **BoldBIEnterpriseEdition-Linux** by running the following command.
     ```cmd
     cd BoldBIEnterpriseEdition-Linux
     ```
5. Execute the following command to deploy Bold BI on your Linux machine.
    
    **Command Syntax:**
      ```cmd
      sudo bash install-boldbi.sh -i {new} -u {user} -h {host URL} -n {true or false} 
      ```
      **Example command:**
   ```cmd
   sudo bash install-boldbi.sh -i new -u root -h http://linux.example.com -n true
   ```
       
   * **i :** Installation type - Specify whether it is a new or upgrade installation.

    * **u :** Specify the user or group that manages the service. Make sure this user exists on your Linux server. 

    * **h :** Domain or IP address of the machine with HTTP protocol. 

    * **n :** Setting this to “true” will automatically configure Bold BI with Nginx front-end server.

    >**IMPORTANT:** If there are any existing applications running on the Linux machine using Nginx, set the “-n” value to false and configure [Nginx manually](/deploying-bold-bi/deploying-in-linux/installation-and-deployment/bold-bi-on-centos/#manually-configure-nginx).  

    Example for new installation:
    ~~~shell
    sudo bash install-boldbi.sh -i new -u www-data -h http://linux.example.com -n true
    ~~~ 
## Next steps

* [**Install Optional Libraries**](/deploying-bold-bi/deploying-in-linux/install-optional-libraries/)
* [**Application Startup**](/application-startup/)