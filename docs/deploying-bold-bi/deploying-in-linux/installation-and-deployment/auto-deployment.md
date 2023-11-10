---
layout: post
title: Bold BI Auto Deployment on Linux Environment | Bold BI Docs
description: Read here to learn about how to auto deploy a Bold BI in Linux by activating licensing and configuring startup from the browser and customize the branding.
platform: bold-bi
documentation: ug
---

# Auto deploy Bold BI in Linux
 
 This section helps you to deploy Bold BI in Linux without manually activating licensing and configuring startup from the browser. This also helps us to customize the branding using environment variables.

## Deployment prerequisites

   <table>
    <tr>
      <td>
       <b>Steps</b>
      </td>
      <td>
       <b>Ubuntu</b>
      </td>
      <td>
       <b>Centos</b>
      </td>
    </tr>
    <tr>
      <td>
       1.
      </td>
      <td>
       Install <a href="https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-3.1#install-nginx">Nginx</a></br> </br>
       <b>sudo apt-get update </b></br> </br>
       <b>sudo apt-get install nginx</b>
      </td>
      <td>
      Install <a href="https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-centos-8">Nginx</a>
      </td>
    </tr>
    <tr>
      <td>
       2. 
      </td>
      <td>
      Install zip.</br> </br>
       <b>sudo apt-get install zip </b>
      </td>
      <td>
      Install zip.</br> </br>
       <b>sudo yum install zip </b>
      </td>
    </tr>
    <tr>
      <td>
       3.
      </td>
      <td>
      Install <b>GDIPlus</b> package using the following command. </br> </br>
      <b>sudo apt-get install libgdiplus</b>
      </td>
      <td>
      Install <b>GDIPlus</b> package using the following command. </br> </br>
      <b>sudo yum install libgdiplus</b>
      </td>
    </tr>
    <tr>
      <td>
       4.
      </td>
      <td>
      Install <b>pv</b> tool by running below command. </br> </br>
      <b>sudo apt-get install pv</b>
      </td>
      <td>
      Install <b>pv</b> tool by running below command. </br> </br>
      <b>sudo yum install pv</b>
      </td>
    </tr> 
    <tr>
      <td>
       5.
      </td>
      <td>
      Add an <b>openssl conf</b> path in the environment, if does not exist. </br> </br>
      <b>export OPENSSL_CONF=/etc/ssl/</b>
      </td>
      <td>
      Add an <b>openssl conf</b> path in the environment, if does not exist. </br> </br>
      <b>export OPENSSL_CONF=/etc/ssl/</b>
      </td>
    </tr>     
    </table>

## Configuring the Bold BI application

1. Register and download the Bold BI Linux package from [here](/deploying-bold-bi/overview/#registration-and-download).

2. Download the Bold BI Linux package by running the following command.

    ~~~cmd
    sudo wget {Bold BI Linux package link}
    ~~~

3. Extract the zip file.

    ~~~cmd
    sudo unzip {Bold BI Linux package zip file}
    ~~~ 

4. Change the directory to the `BoldBIEnterpriseEdition-Linux` by running the following command. 

    ~~~cmd
    cd BoldBIEnterpriseEdition-Linux
    ~~~ 

5. Execute the following command to deploy Bold BI in your Linux machine.

 
    ~~~cmd
    sudo bash install-boldbi.sh -i {new} -u {user} -h {host URL} -n {true} -license {License Key} -databasetype {databasetype} -databasehost {Database server name} -databaseport {database port} -maintaindb {default database} -databaseuser {database username} -databasepwd {database password} -databasename {database name} -email {email address} -emailpwd {Password} -mainlogo {main logo} -loginlogo {login logo} -emaillogo {email logo} -favicon {header logo} -footerlogo {footer logo} -sitename {site name} -siteidentifier {site identifier}
    ~~~


### Environment Variable and It's Usage

The following variable is necessary to configure a startup application on the backend.

   <table>
    <tr>
      <td>
       <b>Name</b>
      </td>
      <td>
       <b>Requried</b>
      </td>
      <td>
       <b>Description</b>
      </td>
    </tr>
    <tr>
      <td>
       <b> i </b>
      </td>
      <td>
       Yes
      </td>
      <td>
      Installation type - Specifies either it is a new or upgrade installation.
      </td>
    </tr>
    <tr>
      <td>
       <b> u </b> 
      </td>
      <td>
       Yes 
      </td>
      <td>
        Installation type - Specifies either it is a new or upgrade installation.
      </td>
    </tr>
    <tr>
      <td>
       <b> h </b>
      </td>
      <td>
      Yes
      </td>
      <td>
      Domain or IP address of the machine with http protocol.
      </td>
    </tr>
    <tr>
      <td>
       <b> n </b>
      </td>
      <td>
      Yes
      </td>
      <td>
      Setting this to “true” will automatically configure the Bold BI with Nginx front-end server.
      </td>
    </tr> 
    <tr>
      <td>
       <b>license</b>  
      </td>
      <td>
       Yes
      </td>
      <td>
      License key of Bold BI
      </td>
    </tr> 
    <tr>
      <td>
       <b>databasetype</b> 
      </td>
      <td>
       Yes
      </td>
      <td>
      Type of database server can be used for configuring the Bold BI.</br>
      The following DB types are accepted:</br>
     1. mssql – Microsoft SQL Server/Azure SQL Database </br>
     2. postgresql – PostgreSQL Server</br>
     3. mysql – MySQL/MariaDB Server</br>
      </td>
    </tr> 
    <tr>
      <td>
       <b>databasehost</b> 
      </td>
      <td>
       Yes
      </td>
      <td>
      Name of the Database Server
      </td>
    </tr> 
        <tr>
      <td>
       <b>databaseport</b> 
      </td>
      <td>
       No
      </td>
      <td>
      The system will use the following default port numbers based on the database server type.
      PostgrSQL – 5234 </br>
      MySQL -3306</br>
      Please specify the port number for your database server if it is configured on a different port.</br>
      For MS SQL Server, this parameter is not necessary.</br>
      </td>
    </tr> 
        <tr>
      <td>
       <b>maintaindb</b> 
      </td>
      <td>
       No
      </td>
      <td>
      For PostgreSQL DB Servers, this is an optional parameter.<br />
      The system will use the database name <b>postgres</b> by default.<br />If your database server uses a different default database, please provide it here.
      </td>
    </tr> 
    <tr>
      <td>
       <b>databaseuser</b> 
      </td>
      <td>
       Yes
      </td>
      <td>
      Username for the database server<br /></br>Please refer to <a href=/faq/what-are-the-database-permissions-required-to-set-up-bold-bi-embedded/>this documentation</a> for information on the user's permissions.
      </td>
    </tr>  
    <tr>
      <td>
       <b>databasepwd</b> 
      </td>
      <td>
       Yes
      </td>
      <td>
      The database user's password
      </td>
    </tr> 
        <tr>
      <td>
       <b>databasename</b> 
      </td>
      <td>
       No
      </td>
      <td>
      If the database name is not specified, the system will create a new database called bold services.</br>
      If you specify a database name, it should already exist on the server.
      </td>
    </tr>  
    <tr>
      <td>
       <b>email</b> 
      </td>
      <td>
       Yes
      </td>
      <td>
      It should be a valid email.
      </td>
    </tr> 
    <tr>
      <td>
       <b>emailpwd</b> 
      </td>
      <td>
       Yes
      </td>
      <td>
      It should meet our password requirements.
      </td>
    </tr> 
    <tr>
      <td>
       <b>usesiteidentifier</b> 
      </td>
      <td>
       Yes
      </td>
      <td>
      The variable is optional, and the default value is TRUE. By default, all sites in Bold BI require a site identifier, which differentiates sites on the same domain. That is https://example.com/bi/site/ You can ignore the site identifier by setting the value as FALSE. If the site identifier is disabled, each site requires a unique domain.
      </td>
    </tr> 
    <tr>
      <td>
       <b>mainlogo</b>
       <b>loginlogo</b>
       <b>emaillogo</b>
       <b>favicon</b>
       <b>footerlogo</b>
      </td>
      <td>
       Yes
      </td>
      <td>
      If you want to upload the custom image as a logo of the site, you can use these variables. If this environment variable is not present, Bold BI will use its default logo.<br /><br /> Type : URL <br /> <br /> Example : https://cdn.boldbi.com/wp/pages/boldbi-header-menu-logo.svg <br /> <br /> Format : png, svg, jpg, jpeg <br /> <br /> <b>Note:</b> Enter the image URL for all the variables. If the value is given to any of the variables, you must consider other variables also a required field.
      </td>
    </tr>
        <tr>
      <td>
       <b>sitename</b> 
      </td>
      <td>
       Yes
      </td>
      <td>
      If you want to customize the site name, enter the site name as a value. The default site name is <b> Bold BI Enterprise Dashboards</b>
      </td>
    </tr> 
        <tr>
      <td>
       <b>siteidentifier</b> 
      </td>
      <td>
       Yes
      </td>
      <td>
      If you want to customize the identifier name, enter the identifier name as a value. The default identifier name is <b>site1</b>
      </td>
    </tr> 
    </table>

Example for silent installation,

~~~cmd 
sudo bash install-boldbi.sh -i new -u root -h http://linux.example.com -n true -license Bold_BI_license_key -databasetype postgresql localhost -maintaindb defaultdb -databaseuser doadmin -databasepwd boldbi@123 -databasename testing -databaseport 25060 -email admin@boldbi.com -emailpwd Admin@123 -mainlogo https://cdn.boldbi.com/wp/pages/boldbi-header-menu-logo.svg -loginlogo https://cdn.boldbi.com/wp/pages/boldbi-header-menu-logo.svg -emaillogo https://cdn.boldbi.com/wp/pages/boldbi-header-menu-logo.svg -favicon https://cdn.boldbi.com/wp/pages/boldbi-header-menu-logo.svg -footerlogo https://cdn.boldbi.com/wp/pages/boldbi-header-menu-logo.svg -sitename Autodeployment -siteidentifier Branding
~~~
