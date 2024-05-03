---
layout: post
title: Restart Embedded Bold BI analytical apps | Bold BI Docs
description: In this section, learn the steps about how to restart the Bold BI Embedded application in the different hosting environments.
platform: bold-bi
documentation: ug
---
# Restart Application
Please refer to the documentation of your hosting environment for instructions on how to restart the Bold BI Embedded application.

* [Windows](/faq/how-to-restart-the-bold-bi-embedded-application/#windows)
* [Linux](/faq/how-to-restart-the-bold-bi-embedded-application/#linux)
* [Kubernetes](/faq/how-to-restart-the-bold-bi-embedded-application/#kubernetes)
* [Docker](/faq/how-to-restart-the-bold-bi-embedded-application/#docker)
* [Azure App Service](/faq/how-to-restart-the-bold-bi-embedded-application/#azure-app-service)

## Windows

1. Open the IIS Manager and use the site's dropdown to locate the Bold BI Embedded app. 
![IIS Manager](/static/assets/faq/images/iis-manager-site.png)

2. In the IIS Manager's Manage Websites section, you can stop and start the application.
![IIS Manager](/static/assets/faq/images/iis-manager-restart.png)  

> **NOTE:** If both the Bold BI Embedded and Bold Reports enterprise apps are installed using a common login, the site name will be `BoldAppsEnterpriseEdition`.

## Linux
  
1. Please run the following command to restart all of the Bold BI Embedded services.   
~~~
sudo systemctl restart bold-*
~~~

2. Please run the following command to restart the specific service in Bold BI Embedded.   
~~~
sudo systemctl restart bold-id-web - IDP Web service 
~~~
~~~ 
sudo systemctl restart bold-id-api - IDP API service  
~~~
~~~ 
sudo systemctl restart bold-ums-web - UMS Web service 
~~~
~~~ 
sudo systemctl restart bold-bi-web - BI Web service   
~~~
~~~ 
sudo systemctl restart bold-bi-api - BI API service  
~~~
~~~  
sudo systemctl restart bold-bi-job - BI Web job service
~~~
~~~ 
sudo systemctl restart bold-bi-designer - BI designer service      
~~~

## Kubernetes

1. Please run the following command to restart all of the Bold BI Embedded services.   
~~~
kubectl rollout restart deploy -n {namespace}
~~~

2. Please run the following command to restart the specific service in Bold BI Embedded.  
~~~
kubectl rollout restart deploy/id-web-deployment -n {namespace} - IDP Web service 
~~~
~~~ 
kubectl rollout restart deploy/id-api-deployment -n {namespace} - IDP API service  
~~~
~~~ 
kubectl rollout restart deploy/id-ums-deployment -n {namespace} - UMS Web service 
~~~
~~~ 
kubectl rollout restart deploy/bi-web-deployment -n {namespace} - BI Web service   
~~~
~~~ 
kubectl rollout restart deploy/bi-api-deployment -n {namespace} - BI API service  
~~~
~~~  
kubectl rollout restart deploy/bi-jobs-deployment -n {namespace} - BI Web job service
~~~
~~~ 
kubectl rollout restart deploy/bi-dataservice-deployment -n {namespace} - BI designer service      
~~~


## Docker

1. Please run the following command to restart all of the Bold BI Embedded services.  
~~~
docker restart {container name}
~~~

## Azure App Service

1. Go to the Azure Portal home page and select `App Services`.
![App Service Home](/static/assets/faq/images/azure-app-home.png)

2. Select the hosted Bold BI Embedded application and use `Restart` as shown below. 
![App Service Restart](/static/assets/faq/images/azure-app-restart.png)
