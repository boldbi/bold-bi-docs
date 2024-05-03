---
layout: post
title: Add custom theme in Docker container application | Bold BI Docs
description: This page summarizes how to add custom themes in the Bold BI application deployed with the Docker container by creating a new Custom Theme file in JSON format. 
platform: bold-bi
documentation: ug
---

# How to add custom themes in the Bold BI application deployed with the Docker container application

Follow these steps to add a custom theme in the Bold BI application deployed with the Docker container.

1.	Refer to this [section](/working-with-dashboards/dashboard-theme/#how-to-create-and-apply-a-new-custom-theme) to create a new **Custom Theme file (JSON format)** according to your requirement.

2.	Run the following command to change the Docker container's application directory;

    `docker exec -it {Container Name} /bin/bash`

3.	Navigate to the deployment location for docker. By default, light and dark theme files will be available in the location below. Place the newly created custom theme file in this location, then open the dashboard in the browser. The theme will be listed in the theme drop-down.

    **Docker Deployment Location:** `bi/dataservice/dashboardthemes`

![Applying custom theme](/static/assets/faq/images/applying-custom-theme.png)