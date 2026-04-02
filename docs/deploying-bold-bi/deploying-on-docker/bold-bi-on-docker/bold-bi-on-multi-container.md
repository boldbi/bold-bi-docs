---
layout: post
title: Bold BI Deployment on Multi Container | Bold BI Documentation
description: This section explains about the installation and deployment of the Bold BI on Docker Multi Container.
platform: bold-bi
documentation: ug
---


# Deploy Bold BI on Docker Multiple Container

Bold BI can be deployed using Docker containers to simplify setup, enhance scalability, and streamline maintenance. A multi-container Docker setup enables you to run Bold BI in isolated containers that work together seamlessly.

1. Create an empty project directory.<br/>
  
   You can name the directory something easy for you to remember. This directory is the context for your application image. This project directory should contains a `docker-compose.yml` file which is complete in itself for a good starter BoldBI project.

2. Make and change into your project directory.
   For example, if you named your directory `my_boldbi`
   ```sh
    cd my_boldbi/
   ```

3. Download the docker-compose YML file and configuration file for Nginx files by running the below commands.

   ```sh
   curl -o docker-compose.yml "https://raw.githubusercontent.com/boldbi/boldbi-docker/refs/heads/main/deploy/multiple-container/docker-compose.yml"
   curl -o default.conf "https://raw.githubusercontent.com/boldbi/boldbi-docker/refs/heads/main/deploy/multiple-container/default.conf"  
   ```
  
5. Replace `<app_base_url>` with your DNS or IP address, by which you want to access the application.
   For example, <br/>
       `http://example.com` <br/>
       `https://example.com` <br/>
       `http://<public_ip_address>` <br/>
       `http://host.docker.internal` <br/>

   > **Note:** <br/>* If you are using the IP address for the Base URL, make sure you are using the public IP of the machine instead of internal IP or local IP address. Applications can communicate with each other using the public IP alone. Host machine IP will not be accessible inside the application container.<br/>* Use <http://host.docker.internal> instead of <http://localhost>. Host machine localhost DNS will not be accessible inside the container. So, docker desktop provides `host.docker.internal` and `gateway.docker.internal` DNS for communication between docker applications and host machine. Please make sure that the host.docker.internal DNS has your IPv4 address mapped in your hosts file on Windows(C:\Windows\System32\drivers\etc\hosts) or Linux (/etc/hosts).<br/>* Provide the HTTP or HTTPS scheme for APP_BASE_URL value.

6. You can also change the Port number other than `8085`

7. Provide the **default.conf** file path, which you have downloaded earlier in `<default_conf_path>` place.

   For example: <br><b>Windows:</b> `"D:/boldbi/docker/default.conf":"/etc/nginx/conf.d/default.conf"`<br> <b>Linux:</b> `"/var/boldbi/docker/default.conf:/etc/nginx/conf.d/default.conf"`
   ![docker-compose.yml](/static/assets/installation-and-deployment/images/default_conf_path.png)

8. Allocate a directory in your host machine to store the shared folders for applications usage. Replace the directory path with `<host_path_boldservices_data>` and `<host_path_db_data>` in **docker-compose.yml**   file.
   For example, <br><b>Windows:</b> `device: 'D:/boldbi/boldservices_data'` and `device: 'D:/boldbi/db_data'` <br><b>Linux:</b> `device: '/var/boldbi/boldservices_data'` and `device: '/var/boldbi/db_data'`

   > **Note:**
   > The docker volumes `boldservices_data` and `db_data` persists data of Bold BI and PostgreSQL respectively. [Learn more about docker volumes](https://docs.docker.com/storage/volumes/)

### Build the project

Now, run `docker-compose up -d` from your project directory.
<br />

This runs `docker-compose up` in detached mode, pulls the needed Docker images, and starts the boldbi and database containers, as shown in the example below.
> **Note:**
> To use the PostgreSQL server deployed with Bold BI using the `docker-compose.yaml` file, please use `pgdb` as the host name of the PostgreSQL server.

### Bring up BoldBI in a web browser

At this point, BoldBI should be running in `<app_base_url>:8085` (as appropriate)

> **Note:**
> The BoldBI site is not immediately available on port 8085 because the containers are still being initialized and may take a couple of minutes before the first load.

### Application Startup

Configure the Bold BI On-Premise application startup to use the application. Please refer the following link for more details on configuring the application startup.

<https://help.boldbi.com/embedded-bi/application-startup>


### Shutdown and cleanup

The command **docker-compose down** removes the containers and default network, but preserves the volumes of Bold BI and PostgreSQL. <br /><br />
The command **docker-compose down --volumes** removes the containers, default network, and all the volumes.