---
layout: post
title: Configure a reverse proxy server in DMZ on Linux | Bold BI Docs
description: Learn the prerequisites and steps to configure Bold BI with a reverse proxy server in the DMZ environment on a Linux server.
canonical: "/faq/how-to-configure-bold-bi-with-reverse-proxy-server-in-dmz-environment/"
platform: bold-bi
documentation: ug
---

# How to Configure Bold BI with a reverse proxy server in the DMZ environment in Linux.

## Prerequisites

You need the following prerequisites to Configure Bold BI with a reverse proxy server in the DMZ environment to the Linux server.

1. Linux server.

2. Reverse proxy server (Nginx).

3. React front-end machine.


## Follow the given steps to configure the Bold BI with a reverse proxy server in the DMZ on a Linux server.
1. You need to  [Install](/deploying-bold-bi/deploying-in-linux/installation-and-deployment/bold-bi-on-ubuntu/) the Bold BI in the Linux server and after finishing the [Application Setup](/application-startup/) create a [dashboard](/getting-started/creating-dashboard/).


2. Need to proxy pass the Boldbi server to the reverse proxy server. Here you are considering the Nginx as a reverse proxy server. Follow the given steps to proxy pass the Bold BI to the Nginx server.
   
    1. Install [Nginx](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-centos-8).

    2. Move to the **Nginx** install directory by running the following command.
        
        ~~~shell
        cd /etc/nginx
        ~~~ 
    3. Edit the **Nginx** default sites-available file using the command shown.

        ~~~shell
        sudo nano sites-available/default
        ~~~

        ![nginx-proxy-pass](/static/assets/faq/images/nginx-proxy-pass.png)

    4. You can reload the **Nginx** using the given command.

        ~~~shell
        sudo nginx -s reload
        ~~~
    
    5. You can test the **Nginx** using the given command.

        ~~~shell
        sudo nginx -t
        ~~~

    6. Now, you can access the Bold BI using the reverse proxy IP inside the same network connection. 


3. Follow the given steps to set the inbound rule for the reverse proxy IP in the Bold BI server machine. Here you are using Ubuntu as a server machine so set the inbound rule In that machine using UFW.

    1. You need to install **UFW** by running the below command.
        ~~~shell
        sudo apt install ufw
        ~~~ 
    2. Run the below command to check **UFW** status. Initially, the output status shows inactive.
        ~~~shell
        sudo ufw status verbose
        ~~~ 
    3. You can enable the UFW by running the below command.
        ~~~shell
        sudo ufw enable
        ~~~

        >  **NOTE:** By default, UFW will block all the incoming connections and allow all outbound connections. This means that anyone trying to access your server will not be able to connect unless you specifically open the port, while all applications and services running on your server will be able to access the outside world.

    4. After enabling **UFW** You can’t access the server from anywhere, you need to set the inbound rule to access the Bold BI server only from the reverse proxy server by running the following commands.
        ~~~shell
        sudo ufw allow from {reverse proxy IP}
        
        sudo ufw status numbered
        ~~~

        ![add-inbound-rule-linux](/static/assets/faq/images/add-inbound-rule-linux.png)

        After running the command, you can access the Linux Bold BI server only from the reverse proxy server IP.


5. You need to embed the dashboards. Follow the given steps to run the embedded application in the react front-end machine.

    1. You can download the embedded sample [here](https://onpremise-demo.boldbi.com/getting-started/asp-net-core/sample.zip?_gl=1*6o0c72*_ga*NTYxNDY4NzE5LjE2NDczMjkxNDg.*_ga_SRXJZD7EME*MTY0NzM0MzA4OC4zLjAuMTY0NzM0MzA4OS4w).

    2. Open the solution file in visual studio and you need to set the following properties in the `EmbedProperties.cs` file as follows.

        ![set-embed-properties-vs](/static/assets/faq/images/set-embed-properties-vs.png)

        <meta charset="utf-8"/>
            <table>
            <tbody>
                <tr>
                    <td align="left">RootUrl</td>
                    <td align="left">Reverse Proxy server URL with IP (ex: http://10.0.0.31/bi)</td>
                </tr>
                <tr>
                    <td align="left">SiteIdentifier</td>
                    <td align="left">For Bold BI Enterprise edition, it should be like <code>site/site1</code>. For Bold BI Cloud, it should be empty string.</td>
                </tr>
                <tr>
                    <td align="left">UserEmail</td>
                    <td align="left">UserEmail of the Admin in your Bold BI, which will be used to get the dashboards list.</td>
                </tr>
                <tr>
                <td align="left">EmbedSecret</td>
                    <td align="left">You can get your EmbedSecret key from embed tab by enabling <code>Enable embed authentication</code> in Administration page as mentioned in next step. </td>
                </tr>    
            </tbody>
            </table>
    
        FYI: Here our reverse proxy IP is 10.0.0.31 and the site name is site1.
        
        ![set-embed-properties](/static/assets/faq/images/set-embed-properties.png)

    3. You can get your [Embed Secret key](/site-administration/embed-settings/) from the administrator setting section.

	4. Now, your application is ready to run, before running the application need to change the `applicationUrl` with your machine IP with the port number in the `lanchSetting.json` file as shown.

        FYI: Here our machine IP is 10.0.0.11:8082.

        ![change-applicationurl](/static/assets/faq/images/change-applicationurl.png)

	5. After running the application you can see the output in your default web browser shown below.

        ![embed-application-output](/static/assets/faq/images/embed-application-output.png)

         >**NOTE:** If you are facing the below issue while running the application with your machine IP, please open the command prompt in administered mode and run the given commands.

        ![iis-express-error](/static/assets/faq/images/iis-express-error.png)

        ~~~shell
        netsh http add urlacl url=http://{yourlocalhostIP:port}/ user=everyone

        netsh advfirewall firewall add rule name="IISExpressWeb" dir=in protocol=tcp localport={port} profile=private remoteip=localsubnet action=allow
        ~~~
        
        
6. You need to set the inbound rule for the react front end machine IP in the reverse proxy server by following the steps.

	1. Run the following command with the react front end machine IP.

        ~~~shell
        sudo ufw allow from {react front end IP}
        ~~~

    2. You can list the inbound rules, using the command shown as follows.

        ~~~shell
        sudo ufw status numbered
        ~~~

        ![add-inbound-rule](/static/assets/faq/images/add-inbound-rule.png)

        > **NOTE:** Make sure the react front end machine IP only accesses the reverse proxy machine.

    3. Finally, you can expose the react front-end server to the internet. In your case, you are exposing the private URL http://10.0.0.11:8082/ to Public URL http://182.72.161.150:58951/ as shown below.

        ![expose-server-to-internet](/static/assets/faq/images/expose-server-to-internet.png)
