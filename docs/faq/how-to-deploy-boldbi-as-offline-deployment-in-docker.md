---
layout: post
title: Bold BI Offline deployment in Docker | Bold BI Docs
description: Learn the steps to load docker container in offline server by manually importing the Bold BI image into the local docker and deploying it into the local docker.
documentation: ug
---

# How to do Bold BI offline deployment in Docker?

 Bold BI deployment in Docker can also be done offline by manually importing the Bold BI image into the local Docker and deploying it. Follow the steps provided in this topic to learn how to deploy Bold BI offline in Docker.

## Steps to deploy offline Bold BI in docker 

1. First, you need to save the container image to a file, so you can copy it to the offline server.

2. Let us pull the image to your <b>online</b> machine first by running this command in your command line interface:
  
    ~~~
     docker pull syncfusion/boldbi
    ~~~ 

3. When the download is complete, you can run this command to verify and find the container image name.

    ~~~
    docker images
    ~~~

4. Now, you need to save the downloaded image into a file using the **docker** save command.
 
     ~~~
    docker save -o <output path and filename> <docker image name:tag>
    ~~~
    ` Example: docker save -o C:\User\Boldbi.tar syncfusion/boldbi:latest`

    When the command is finished, you should see a container file created at the path you specified.

5. Now, you need to load the file using the **docker load** command. 
 
    ~~~
    docker load -i <path and filename>
    ~~~
   ` Example: docker load -i C:\User\Boldbi.tar`

 6. Once the loading is complete, you can now run docker images to verify that it has been loaded.

    ~~~
    docker images
    ~~~

   Now, the image has been loaded onto the **offline** machine.
7. Run the command to launch Bold BI on your machine.
     ~~~
     docker run --name boldbi -p 80:80 -d syncfusion/boldbi
     ~~~
     
     After running the command, you can access the Bold BI App by entering `http://localhost` in a browser.

## Application Startup

Configure the Bold BI On-Premise application start-up to utilize the application. Please refer to the following link for more details on configuring the application start-up:

[Application Startup](/application-startup/)
