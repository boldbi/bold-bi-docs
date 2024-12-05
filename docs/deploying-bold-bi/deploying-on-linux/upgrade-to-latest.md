---
layout: post
title: Upgrading Bold BI Linux Server - On-Premises | Bold BI Docs
description: Read this guide to know how to upgrade the existing Bold BI Linux package in your machine to latest version.
platform: bold-bi
documentation: ug
---

# Upgrading the Bold BI Linux package to the Latest Version

This section explains the process of upgrading the Bold BI Linux package to the latest version from any previous version.

> **NOTE:** Upgrading to the latest version does not require a license key. However, our services will retrieve the license from the backend after the upgrade is completed.

1. Register and download the latest Bold BI Linux package from this [link](/deploying-bold-bi/overview/#registration-and-download).

2. Install the `pv` tool by executing the following command:

    | Ubuntu                                               | CentOS                                               |
    |------------------------------------------------------|------------------------------------------------------|
    | `sudo apt-get install pv`                            | `sudo yum install pv`                                |

3. If you want to install the ETL application while upgrading the Bold BI, follow these steps. Otherwise, skip this step and proceed with step 4.
    * Install the `python 3.9` or `later` by executing the following command:

        | Ubuntu                                               | CentOS                                               |
        |------------------------------------------------------|------------------------------------------------------|
        | **Ubuntu Version:22.04** : `sudo apt-get install -y python3` <br> <br> **Ubuntu Version:20.04** :  `sudo apt update && sudo apt install wget software-properties-common && sudo add-apt-repository ppa:deadsnakes/ppa && sudo apt update && sudo apt install python3.9`                  | `sudo dnf groupinstall 'development tools' && sudo dnf install wget openssl-devel bzip2-devel libffi-devel && sudo curl https://www.python.org/ftp/python/3.9.2/Python-3.9.2.tgz -O && sudo tar -xvf Python-3.9.2.tgz && cd Python-3.9.2 && sudo ./configure --enable-optimizations && sudo make install`                           |

    * Install `python pip` and following pip packages by running the below command.

        | Ubuntu                                               | CentOS                                               |
        |------------------------------------------------------|------------------------------------------------------|
        | `sudo apt-get install python3-pip` <br> <br>  `sudo pip install duckdb===1.0.0 dlt===0.5.4 pymysql pyodbc pg8000 poetry pandas===2.2.2 "dlt[parquet]" "dlt[filesystem]` | `sudo yum -y install python3-pip` <br> <br> `python3.9 -m pip install duckdb===1.0.0 dlt===0.5.4 pymysql pyodbc pg8000 poetry pandas===2.2.2 "dlt[parquet]" "dlt[filesystem]"`                    |
        > Note: If ETL is already installed, there is no need to follow this step.
4. Download the latest Bold BI Linux package by running this command:

    ~~~shell
    sudo wget {Bold BI Linux package link}
    ~~~

5. Extract the zip file:

    ~~~shell
    sudo unzip {Bold BI Linux package zip file}
    ~~~ 

6. Change the directory to `BoldBIEnterpriseEdition-Linux` by running this command:

    ~~~shell
    cd BoldBIEnterpriseEdition-Linux
    ~~~ 
 
7. Execute the following command to deploy Bold BI on your Linux machine:
 
    ~~~shell
    sudo bash install-boldbi.sh -i {upgrade}
    ~~~
 

* **i :** Installation type - Specifies either it is a new or upgrade installation. 

* **u :** Specify the user or group that manages the service. Please ensure that this user exists on your Linux server. 

* **h :** Domain or IP address of the machine with http protocol.  

    Example for upgrading the installation:

    ~~~shell
    sudo bash install-boldbi.sh -i upgrade
    ~~~ 

7. Refer to this [Install Optional Libraries](/deploying-bold-bi/deploying-on-linux/install-optional-libraries/) and install the optional client libraries, after the installation completed.

8. Now, you can open the host URL in the browser and enjoy the latest features of Bold BI.

>**NOTE:** The backup file for the Bold BI Linux package will be available in the following location: `/var/www/`
