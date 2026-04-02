---
layout: post
title: Deploy Bold BI Evaluation on Docker | Bold BI Documentation
description: Learn how to deploy Bold BI application on Docker Environment and know its prerequisites, recommended specifications, and upgrading to the latest version.
platform: bold-bi
documentation: ug
---

# Deploy Bold BI Evaluation on Docker

The Bold BI Evaluation Image is specifically designed to streamline the Bold BI evaluation process by integrating a PostgreSQL server within the Bold BI container. Please note that this image tag is intended for evaluation purposes only and should not be used in production environments. Follow the below steps to deploy the Bold BI Evaluation Image.

1. Download the Docker Compose file by using the following command.

   ```sh
   curl -o docker-compose.yml "https://raw.githubusercontent.com/boldbi/boldbi-docker/main/deploy/single-container-eval-no-license/docker-compose.yml"    
   ```

2. Run the command below. This command will start the Bold BI application container and display the Bold BI container logs, providing information about the installation status of the Bold BI application.

   ```sh
   docker-compose up -d; docker-compose logs -f boldbi
   ```

   ![docker-compose-up](/static/assets/installation-and-deployment/images/docker-compose-up.png)

3. Now, access the Bold BI application by entering the URL as <http://localhost:8085> or <http://host-ip:8085> in the browser. When you open this URL, the application will configure its startup in the background   and   display the license activation page below within a few seconds. You can either activate your license using the available option or try the trial version by selecting the Proceed with 30 Days Trial    option.

   ![registration-page](/static/assets/installation-and-deployment/images/registration-page-docker.png)

   > **Note:** The default port number mentioned in the compose file is 8085. If you are making changes to the port number, then you need to use that port number for accessing the Bold BI application.

4. After selecting the license option, the application will redirect you to the dashboard listing page.

   > **Note:** </br> 1. The deployment steps above are recommended for evaluation purposes only. For a production use case, you will need to mount the volume to the host path location or online storage and utilize managed DB servers. </br>2. Don't use localhost IP (`http://127.0.0.1`) with `port` to access the application.

### Shutdown and cleanup

The command **docker-compose down** removes the containers and default network, but preserves the volumes of Bold BI and PostgreSQL. <br /><br />
The command **docker-compose down --volumes** removes the containers, default network, and all the volumes.