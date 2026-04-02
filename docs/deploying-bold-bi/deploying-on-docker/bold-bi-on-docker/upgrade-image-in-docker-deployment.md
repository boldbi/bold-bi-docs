---
layout: post
title: Bold BI Upgrade on Multi Container | Bold BI Documentation
description: This section explains about how to upgrade the Bold BI single and multi container application using Docker compose.
platform: bold-bi
documentation: ug
---

# Upgrade Bold BI on Docker Deployment.

1. Navigate to the location of the Docker Compose deployment file.

2. Back up the **app_data** and **database** data from the same volumes you previously used in the current container to avoid any data loss.
   ![docker-compose-up](/static/assets/installation-and-deployment/images/backup-appdata.png)

   ``` bash
   docker-compose down
   ```
3. Replace the new image tag in your Docker Compose file and save the changes. This is applicable for both the single-compose and multi-compose YAML files.
   
   **For Single docker-compose yaml file:**
   ![docker-compose-up](/static/assets/installation-and-deployment/images/single-container-upgrade.png)

   **For Multi docker-compose yaml file:**
   ![docker-compose-up](/static/assets/installation-and-deployment/images/multi-container-upgrade.png)

   > **Note:** For multiple containers, you can use the latest image in your deployment YAML for all services such as (id-web, id-api, id-ums, bi-web, bi-api, bi-jobs, and bi-dataservice).

4. Use the following command to start your container with the new image tag.
   
   ``` bash
   docker-compose up -d
   ```

