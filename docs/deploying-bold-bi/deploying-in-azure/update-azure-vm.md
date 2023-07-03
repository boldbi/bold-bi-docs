---
layout: post
title: Upgrading Bold BI Server in Azure VM | Bold BI Documentation
description: Learn how to upgrade Bold BI Server in Azure VM to the latest version to get benefited with new feature and fix updates.
platform: bold-bi
documentation: ug
---

# Upgrade to latest Bold BI Enterprise Edition latest version

Follow these steps to upgrade the Bold BI Server VM to the latest source from older versions:

1. Connect Bold BI Server VM using a Remote Desktop Connection (RDP) by clicking **Connect** in the virtual machine window. A Remote Desktop Protocol (`.rdp`) file will be downloaded from the Azure portal.

    ![Connect](/static/assets/installation-and-deployment/images/vm-connect.png)

2. Open the .rdp file and click **Connect** for the unknown publisher warning.

    ![RDP Warning](/static/assets/installation-and-deployment/images/rdp-warn.png)

3. Enter the credentials given when deploying the VM as follows, and then click **OK**.

    ![VM Credentials.png](/static/assets/installation-and-deployment/images/vm-credentials.png)

4. On successful connection, the identity verification window will be displayed as follows. Click **Yes** to accept the certificate problems and connect to the virtual machine.

    ![verify the identity of the virtual machine](/static/assets/installation-and-deployment/images/cert-warning.png)

5. After connected to the virtual machine, follow the steps given [here](/deploying-bold-bi/deploying-in-windows/upgrade-to-latest/) to upgrade the Bold BI Server to latest version. 