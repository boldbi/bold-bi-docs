---
layout: post
title: Upgrading BoldBI Server in AWS EC2 instance | Bold BI Docs
description: Learn how to upgrade the Bold BI Server in AWS EC2 instance to the latest version to benefit from new features and fix updates.
platform: bold-bi
documentation: ug
---

# Upgrade to latest Bold BI Enterprise Edition latest version

To upgrade the Bold BI Server VM to the latest source from older versions, follow these steps:

1. Open the downloaded .rdp file and click on **Connect** when prompted with the unknown publisher warning.

    ![RDP Warning](/static/assets/installation-and-deployment/images/rdp-warn.png)

2. Enter the credentials provided when deploying the VM and click `OK`.

    ![VM Credentials.png](/static/assets/installation-and-deployment/images/vm-credentials.png)

3. Upon successful connection, an identity verification window will appear. Click Yes to accept the certificate problems and connect to the virtual machine.

    ![verify the identity of the virtual machine](/static/assets/installation-and-deployment/images/cert-warning.png)

4. Once connected to the virtual machine, follow the provided [steps](/deploying-bold-bi/deploying-on-windows/upgrade-to-latest/) to upgrade the Bold BI Server to the latest version. 