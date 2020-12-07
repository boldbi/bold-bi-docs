---
layout: post
title: Setting up Custom Domain in Cloud | Bold BI Documentation
description: Learn how to set up custom domain in Bold BI Cloud. Using custom domain support, you can set your own domain name instead of the predefined URL. 
platform: bold-bi
documentation: ug
---

# Custom Domain Setup for the Bold BI Cloud

When you create for a dashboard application, you will be given option to choose a site name of your choice and this name will be used in your application URL. For example, `your-site.boldbi.com`

Using custom domain support, you can set your own domain name instead of the predefined URL.

## Setup your Custom Domain

To setup your own custom domain name, you will need the below prerequisites.

1.	You should own a domain from a DNS provider.  
2.	You should have a valid SSL Certificate to secure the custom domain name you are planning to setup  

## Steps to setup Custom Domain

Follow the below steps to setup the Custom Domain.

### Setup the Custom Domain 

1. Click on the `gear` icon in the left panel to open the administration page as shown in the below image.  
![Administration Page](/static/assets/cloud/rebranding-and-custom-domains/images/administration-page.png)  

2. You will see the domain module in the top as marked in the image above. The URL which you are using to open the application will be shown in the text box.  

3. Click on `Use custom domain` to start the custom domain setup. Click on `Next` to set up the custom domain.
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

4. Add the custom domain in the site name text box and click on “Validate and proceed”.  
![Validate and Proceed](/static/assets/cloud/rebranding-and-custom-domains/images/validate-and-proceed.png)  

5. Dashboard application will verify the CNAME in the DNS records available and proceed to the SSL certificate module if the verification is successful.  

6. There are chances that this validation fails which might happen due to the CNAME not setup correctly or you have to wait the TTL time for the changes to take effect.  

### Secure your dashboards custom domain app

1. After successful verification, you will see the SSL module where you must upload your `pfx` certificate for your domain to secure your dashboards application.
![Update Certificate](/static/assets/cloud/rebranding-and-custom-domains/images/update-certificate.png)  

2. Upon clicking on `Validate and proceed`, we will try matching the `pfx` certificate with the custom domain you requested and add the SSL binding for your dashboards application.  

3. You will see the below confirmation message once the custom domain and the SSL are properly set for your application.  
![Confirmation Message](/static/assets/cloud/rebranding-and-custom-domains/images/confirmation-message.png)  

4. You will then be redirected to your own domain to view your dashboards.