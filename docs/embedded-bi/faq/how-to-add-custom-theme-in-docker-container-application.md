---
layout: post
title: Add custom theme in Docker container application | Bold BI Docs
description: This page summarizes how to add custom themes in the Bold BI application deployed with the Docker container by creating a new Custom Theme file in JSON format. 
platform: bold-bi
documentation: ug
---

# How to add custom themes in the Bold BI application deployed with the Docker container application

Follow these steps to add a custom theme in the Bold BI application deployed with the Docker container application:

1.	Refer to this [section](https://help.boldbi.com/embedded-bi/working-with-dashboards/dashboard-theme/#how-to-create-and-apply-a-new-custom-theme) to create a new **Custom Theme file (JSON format)** as per your requirement.

2.	Run the following command to change the Docker container application directory;

    `docker exec -it {Container Name} /bin/bash`

3.	Navigate to the deployment location for docker. By default, light and dark theme files will be available in the below location. Place the newly created custom theme file in this location and open the dashboard in the browser, and the theme will be listed in the theme drop down.

    **Docker Deployment Location:** `bi/dataservice/dashboardthemes`

![Applying custom theme](/static/assets/embedded/faq/images/applying-custom-theme.png)