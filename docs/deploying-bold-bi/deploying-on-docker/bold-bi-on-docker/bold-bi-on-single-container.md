---
layout: post
title: Bold BI Deployment on Single container | Bold BI Documentation
description: This section explains about the installation and deployment of the Bold BI on Docker Single Container.
platform: bold-bi
documentation: ug
---


# Deploy Bold BI on Docker Single Container

Recommended for production sites, in the Bold BI Production Image you can store the application data on your host machine to make the Bold BI container a stateful application. The Bold BI application will read and write the data on your host machine. Follow the below steps to deploy the Bold BI Production Image.

1. Download the Docker Compose file by using the following command.  

   ```sh
   curl -o docker-compose.yml "https://raw.githubusercontent.com/boldbi/boldbi-docker/main/deploy/single-container-with-host-path/docker-compose.yml"
   ```
2. Allocate a directory in your host machine to store the shared folders for applications usage. Replace the directory path with `<host_path_boldbi_data>` and `<host_path_db_data>` in **docker-compose.yml** file.

   For example, <br><b>Windows:</b> `device: 'D:/boldbi/boldbi_data'` and `device: 'D:/boldbi/db_data'` <br><b>Linux:</b> `device: '/var/boldbi/boldbi_data'` and `device: '/var/boldbi/db_data'`
   ![docker-host-path](/static/assets/installation-and-deployment/images/host-path-volume.png)
   > **Note:** The docker volumes **boldbi_data** and **db_data** persists data of Bold BI and PostgreSQL respectively. [Learn more about docker volumes](https://docs.docker.com/storage/volumes/)

3. Run the command below. This command will start the Bold BI and Postgres SQL containers and display the Bold BI logs to provide information about the installation status of the Bold BI application.

   ```sh
   docker-compose up -d; docker-compose logs -f boldbi
   ```
   ![docker-compose-up](/static/assets/installation-and-deployment/images/docker-compose-up.png)
   > **Note:**
   > To use the PostgreSQL server deployed with Bold BI using the `docker-compose.yaml` file, please use `pgdb` as the host name of the PostgreSQL server.

4. Now, access the Bold BI application by entering the URL as `http://localhost:8085` or `http://host-ip:8085` in the browser. When opening this URL in the browser, it will configure the application startup in the   background and display the page below within a few seconds.
   > **Note:** The default port number mentioned in the compose file is 8085. If you are making changes to the port number, then you need to use that port number for   accessing the Bold BI application.

   ![registration-page](/static/assets/installation-and-deployment/images/registration-page-docker.png)

   > **Note:** Don't use `http://127.0.0.1` with `port` to access the application.

### Shutdown and cleanup

The command **docker-compose down** removes the containers and default network, but preserves the volumes of Bold BI and PostgreSQL. <br /><br />
The command **docker-compose down --volumes** removes the containers, default network, and all the volumes.