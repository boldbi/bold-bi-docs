---
layout: post
title: Setting up Custom Vanity Domain in Cloud | Bold BI Documentation
description: Learn how to set up custom vanity domain in Bold BI Cloud. Using custom vanity domain support, you can set your custom vanity URL instead of the predefined URL.
platform: bold-bi
documentation: ug

---

# Custom Vanity Domain Setup for the Cloud Analytics Server

When you create a dashboard application, you are given the option to choose a site name of your choice, and this name is used in your application URL. For example, `your-site.boldbi.com`.

Using custom vanity domain support, you can set your custom vanity URL instead of the predefined URL.

## Setup Your Custom Vanity Domain

To set up your custom vanity URL, you should own a domain from a DNS provider.

### Setup the Custom Vanity Domain

Follow these steps to set up the custom vanity domain:

1. Go to the `Site` settings page as shown in the following image. You will see the domain module at the top, as indicated in the image. The custom vanity URL you use to access the application is displayed in the text box.
![Administration Page](/static/assets/site-administration/images/administration-page.png)  

2. Click `Use custom domain` to start the custom vanity domain setup.

3. Add the custom vanity domain in the site name text box and click `Add`. You need to [update the CNAME in your DNS records](/site-administration/custom-domain-in-cloud-bi/#update-cname-in-your-dns-records). The dashboard application will verify the CNAME in the DNS records available. There is a possibility that this validation may fail, which could occur if the CNAME is not set up correctly or if you need to wait for the TTL time for the changes to take effect. Once verification is successful, you are redirected to your vanity domain to view your dashboards.
![Administration Page](/static/assets/site-administration/images/add-custom-domain.png)  

## Update CNAME in Your DNS Records

1. In your DNS provider settings, add a new DNS record for your domain with the following value:

    CNAME value: `custom-domain.boldbi.com` 

2. Various DNS providers have their own DNS settings UI. The following table shows how the DNS record is displayed in a typical DNS settings page. This DNS setting will help us authorize the application with the domain name you choose.

    Record Type: CNAME  
    Host: your-site  
    Points To: custom-domain.boldbi.com
    TTL: Automatic / 1 hour