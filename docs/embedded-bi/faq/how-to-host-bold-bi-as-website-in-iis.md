---
layout: post
title: Hosting Bold BI as Website in IIS | Bold BI Documentation
description: Learn how to host Bold BI as website in different port number in the IIS service at your on-premise or cloud server through DeployIIS executable file.
platform: bold-bi
documentation: ug
---

# How to host Bold BI as website in IIS

1. Run the program `DeployIIS.exe` from the following installed location to host the dashboard server in IIS

    `{Installed_Location}\Bold BI Enterprise Edition\Utilities\DeployIIS\DeployIIS.exe`

   ![Bold BI IIS Configuration](/static/assets/embedded/faq/images/bold-bi-iis-configuration.png)

2. Type in an unused port for the Dashboard Server as shown in the above image. This program will host the application in the IIS and the Dashboard Server can be opened from the browse button in the IIS.

   ![IIS Manager](/static/assets/embedded/faq/images/iis-manager.png)