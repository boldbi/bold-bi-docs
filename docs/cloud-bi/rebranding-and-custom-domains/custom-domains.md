---
layout: post
title: Setting up Custom Vanity Domain in Cloud | Bold BI Documentation
description: Learn how to set up custom vanity domain in Bold BI Cloud. Using custom vanity domain support, you can set your custom vanity URL instead of the predefined URL.
platform: bold-bi
documentation: ug
---

# Custom Vanity Domain Setup for the Bold BI Cloud

When you create for a dashboard application, you will be given option to choose a site name of your choice and this name will be used in your application URL. For example, `your-site.boldbi.com`

Using custom vanity domain support, you can set your custom vanity URL instead of the predefined URL.

## Setup your Custom Vanity Domain

To setup your custom vanity URL, the following prerequisites are needed.

1.	You should own a domain from a DNS provider.
2.	You should have a valid SSL Certificate to secure the custom vanity domain name that you are planning to setup.

## Steps to setup Custom Vanity Domain

Follow these steps to setup the custom vanity domain.

### Setup the custom vanity domain

1. Click on the `gear` icon in the left panel to open the administration page as shown in the below image.
![Administration Page](/static/assets/cloud/rebranding-and-custom-domains/images/administration-page.png)  

2. You will see the domain module in the top as marked in the above image. The custom vanity URL, which you are using to open the application will be shown in the text box.

3. Click `Use custom domain` to start the custom vanity domain setup. Then, click `Next` to setup the custom vanity domain.
![Next](/static/assets/cloud/rebranding-and-custom-domains/images/setup-domain.png)  

### Update CNAME in your DNS records

1. In your DNS provider settings, add a new DNS record for your domain for the below value.  
CNAME value: `custom-domain.boldbi.com` 

2. Various DNS providers have their own DNS settings UI. The below table shows how the DNS record will be displayed in a typical DNS settings page.  
Record Type: CNAME  
Host: your-site  
Points To: Custom-domain.boldbi.com  
TTL: Automatic / 1 hour  

3. This DNS setting will be helpful for us to authorize the application with the domain name you choose.

4. Add the custom vanity domain in the site name text box and click “Validate and proceed”.
![Validate and Proceed](/static/assets/cloud/rebranding-and-custom-domains/images/validate-and-proceed.png)  

5. Dashboard application will verify the CNAME in the DNS records available and proceed to the SSL certificate module if the verification is successful.

6. There are chances that this validation fails which might happen due to the CNAME not setup correctly or you have to wait the TTL time for the changes to take effect.

### Secure your dashboards custom vanity domain app

1. After successful verification, you will see the SSL module where you must upload your `pfx` certificate for your vanity domain to secure your dashboard application.
![Update Certificate](/static/assets/cloud/rebranding-and-custom-domains/images/update-certificate.png)  

2. Upon clicking `Validate and proceed`, it will try to match the `pfx` certificate with the custom vanity domain you requested and add the SSL binding for your dashboard application.

3. You will see the following confirmation message, once the custom vanity domain and the SSL are properly set for your application.
![Confirmation Message](/static/assets/cloud/rebranding-and-custom-domains/images/confirmation-message.png)  

4. You will then be redirected to your vanity domain to view your dashboards.