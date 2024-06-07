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

You need the following prerequisites to configure Bold BI with a reverse proxy server in the DMZ environment for the Linux server.

1. Linux server.

2. Reverse proxy server (Nginx).

3. React front-end machine.


## Follow the given steps to configure the Bold BI with a reverse proxy server in the DMZ on a Linux server.
1. You need to  [Install](/deploying-bold-bi/deploying-on-linux/installation-and-deployment/bold-bi-on-ubuntu/) Bold BI on the Linux server. After finishing the [Application Setup](/application-startup/) create a [dashboard](/getting-started/creating-dashboard/).


2. You need to proxy pass the Bold BI server to the reverse proxy server. In this case, you are using Nginx as the reverse proxy server. Follow the provided steps to proxy pass Bold BI to the Nginx server.
   
    1. Install [Nginx](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-centos-8).

    2. Move to the **Nginx** installation directory by executing the following command.
        
        ~~~shell
        cd /etc/nginx
        ~~~ 
    3. Edit the **Nginx** default sites-available file using the command that is shown.

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

    6. Now, you can access Bold BI using the reverse proxy IP within the same network connection. 


3. Follow the provided steps to set the inbound rule for the reverse proxy IP on the Bold BI server machine. Since you are using Ubuntu as the server machine, set the inbound rule on that machine using UFW.

    1. You need to install **UFW** by running the below command.
        ~~~shell
        sudo apt install ufw
        ~~~ 
    2. Run the command below to check the **UFW** status. Initially, the output status will show as inactive.
        ~~~shell
        sudo ufw status verbose
        ~~~ 
    3. You can enable the UFW by running the command below.
        ~~~shell
        sudo ufw enable
        ~~~

        >  **NOTE:** By default, UFW will block all incoming connections and allow all outbound connections. This means that anyone attempting to access your server will not be able to connect unless you specifically open the port, while all applications and services running on your server will be able to access the outside world.

    4. After enabling **UFW**, you cannot access the server from anywhere. You need to set the inbound rule to access the Bold BI server only from the reverse proxy server by running the following commands.
        ~~~shell
        sudo ufw allow from {reverse proxy IP}
        
        sudo ufw status numbered
        ~~~

        ![add-inbound-rule-linux](/static/assets/faq/images/add-inbound-rule-linux.png)

        After running the command, you can access the Linux Bold BI server only from the reverse proxy server IP.


5. You need to embed the dashboards. Follow the given steps to run the embedded application on the React front-end machine.

    1. You can download the embedded sample [here](https://onpremise-demo.boldbi.com/getting-started/asp-net-core/sample.zip?_gl=1*6o0c72*_ga*NTYxNDY4NzE5LjE2NDczMjkxNDg.*_ga_SRXJZD7EME*MTY0NzM0MzA4OC4zLjAuMTY0NzM0MzA4OS4w).

    2. Open the solution file in Visual Studio and then set the following properties in the `EmbedProperties.cs` file as instructed.

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
    
        FYI: Our reverse proxy IP is 10.0.0.31 and the site name is site1.
        
        ![set-embed-properties](/static/assets/faq/images/set-embed-properties.png)

    3. You can obtain your [Embed Secret key](/site-administration/embed-settings/) from the administrator setting section.

	4. Now, your application is ready to run. Before running the application, you need to change the `applicationUrl` to your machine's IP address with the port number in the `launchSettings.json` file as shown.

       FYI: Our machine's IP address is 10.0.0.11 and the port number is 8082.

        ![change-applicationurl](/static/assets/faq/images/change-applicationurl.png)

	5. After running the application you can see the output in your default web browser shown below.

        ![embed-application-output](/static/assets/faq/images/embed-application-output.png)

         >**NOTE:** If you are facing the issue below while running the application with your machine's IP, please open the command prompt in administrator mode and run the provided commands.

        ![iis-express-error](/static/assets/faq/images/iis-express-error.png)

        ~~~shell
        netsh http add urlacl url=http://{yourlocalhostIP:port}/ user=everyone

        netsh advfirewall firewall add rule name="IISExpressWeb" dir=in protocol=tcp localport={port} profile=private remoteip=localsubnet action=allow
        ~~~
        
        
6. You need to set the inbound rule for the React front-end machine IP in the reverse proxy server by following the steps.

	1. Run the following command with the IP address of the react front end machine.

        ~~~shell
        sudo ufw allow from {react front end IP}
        ~~~

    2. You can list the inbound rules by using the command shown below.

        ~~~shell
        sudo ufw status numbered
        ~~~

        ![add-inbound-rule](/static/assets/faq/images/add-inbound-rule.png)

        > **NOTE:** Ensure that the React front-end machine's IP only has access to the reverse proxy machine.

    3. Finally, you can expose the React front-end server to the internet. In this case, you are exposing the private URL http://10.0.0.11:8082/ to the public URL http://182.72.161.150:58951/ as shown below.

        ![expose-server-to-internet](/static/assets/faq/images/expose-server-to-internet.png)
