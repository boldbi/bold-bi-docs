---
layout: post
title: How to Install and Deploy Bold BI on RHEL Linux Using RPM Package
description: Learn how to install Bold BI using an RPM package with this step-by-step guide. Follow the instructions to set up and configure Bold BI seamlessly.
platform: bold-bi
documentation: ug
---

# Installing and Upgrading Bold BI<sup>®</sup> Using an RPM Package

Starting from Bold BI<sup>®</sup> version 11.3.24, we now provide support for installing and upgrading Bold BI<sup>®</sup> using an RPM package.

## Installation Steps

* Before installing Bold BI<sup>®</sup>, ensure that the **EPEL (Extra Packages for Enterprise Linux)** repository is installed on your machine. If it is not installed, run the following command:

    ```sh
    sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
    ```

* Run the following command to configure the Bold BI<sup>®</sup> YUM repository:

    ```sh
    dnf install https://rpm.boldbi.com/RPM/repo/boldbi-repo-1.0-1.noarch.rpm
    ```

* Once the repository is configured, install the Bold BI<sup>®</sup> package using the following command:

    ```sh
    dnf install boldbi
    ```

* After the package is installed, ensure that Nginx is enabled and started by running the following commands.

    ```sh
    systemctl  enable nginx
    systemctl start nginx
    ```

* Then, navigate to **/opt/boldbi/boldbi-package/** and run the following command to install Bold BI<sup>®</sup>.

    ```sh
    sudo bash install-boldbi.sh -i {new} -u {user} -h {host URL} -n {true or false}
    eg : sudo bash install-boldbi.sh -i new -u root -h http://linux.example.com -n true
    ```

>**IMPORTANT:** If there are any existing applications running on the Linux machine using Nginx, set the “-n” value to false and configure [Nginx manually](/deploying-bold-bi/deploying-on-linux/installation-and-deployment/bold-bi-on-centos/#manually-configure-nginx).

## Steps to Upgrade Bold BI

* Run the following command to upgrade Bold BI<sup>®</sup> and wait until the script completes the upgrade process:

    ```sh
    dnf upgrade or dnf upgrade boldbi
    ```

* Once the package is successfully upgraded, a confirmation message will be displayed. After that, you can log in to the site.

* The above command checks the Bold BI<sup>®</sup> repository and upgrades the application if an updated version is available. If no upgrade is available, it will display a message stating: Nothing to do. Complete!

> **Note:** To clear the DNF package cache and refresh the repository metadata, run the following commands:<br>
> sudo dnf clean all<br>
> sudo dnf makecache --refresh