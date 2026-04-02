---
layout: post
title: How to configure SSL for Bold BI | Bold BI Documentation
description: This section explains about how to configure the SSL for Docker single and Multi container Deployment.
platform: bold-bi
documentation: ug
---

# How to configure SSL for Bold BI application.

* [Single container deployment](#single-container-deployment)
* [Multi container deployment](#multi-container-deployment)

## Single container deployment

1. From the docker-compose yaml file add below line under volume in the `boldbi` service.

   ~~~ bash
   - nginx_data:/etc/nginx/sites-available
   ~~~
   ![docker-compose.yml](/static/assets/installation-and-deployment/images/nginx-volume.png)


2. Add below block for `nginx` in volume and allocate a directory in your host machine to store the shared folders for applications usage. Replace the directory path with `<host_path_nginx_data>`in docker-compose.yml file and up a container.
   ~~~sh
   nginx_data:
     driver: local
     driver_opts:
       type: 'none'
       o: 'bind'
       device: '<host_path_nginx_data>'
   ~~~
  
    For example, <br><b>Windows:</b> `device: 'D:/boldbi/nginx_data'` and `device: 'D:/boldbi/nginx_data'` <br><b>Linux:</b> `device: '/var/boldbi/nginx_data'` and `device: '/var/boldbi/nginx_data'`

3. Copy the SSL certificate `.key` and `.crt` format and paste inside the `nginx` mount folder.

4. Refer below document for SSL changes in `nginx` file .

   https://github.com/boldbi/boldbi-docker/blob/main/docs/ssl-termination.md
5. Add `- 443:443` in ports section from docker-compose.yaml file.   
6. Restart the Bold BI container using below command.
   ~~~sh
   docker restart <container-name or container ID>
   ~~~

## Multi container deployment

1. Add a SSL certificate path with `.key` and `.crt` file in docker-compose yaml file.
   ![docker-compose.yml](/static/assets/installation-and-deployment/images/nginx-certificate.png)

2. Refer below document for SSL changes in `nginx` file .

   https://github.com/boldbi/boldbi-docker/blob/main/docs/ssl-termination.md
3. Uncomment the `- "443:443"` in  reverse-proxy service.
   ![docker-compose-up](/static/assets/installation-and-deployment/images/uncomment-ssl-multi.png)
4. Restart the Nginx container using below command.
   ~~~sh
   docker restart <container-name or container ID>
   ~~~