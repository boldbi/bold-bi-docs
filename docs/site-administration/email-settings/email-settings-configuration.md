---
layout: post
title: SMTP Email Settings – Embedded BI | Bold BI Documentation
description: Learn how to configure the SMTP details in Bold BI server to send emails for account activation, forgot/reset password, scheduled dashboards.
platform: bold-bi
documentation: ug
---

# Email Settings

This section explains on how to configure the [SMTP](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol) details in the Bold BI Server to send emails. 

> **NOTE:** This settings option is available in Bold BI Embedded Analytics but not in Cloud Analytics Server.

* SMTP Email Settings are required to perform the following operations:

    1. **Account Activation** --- Sends user account activation email.
    
    2. **Forgot Password** --- Sends request links to reset the password when the user has forgotten the password.
        
    3. **Reset Password** --- Sends links to reset the password.
        
    4. **Scheduled Dashboards** --- Sends the exported dashboard to the scheduled recipients.

* The following SMTP details are required to send email from the Bold BI Server.

<table>
<tr>
    <td>SMTP Server</td>
    <td>The SMTP server specifies the public IP address or provider which delivers the emails to the end user mail box.</td>
</tr>
<tr>
    <td>SMTP Port</td>
    <td>Port number of the SMTP server. It should be vary based on the SMTP server and the connection type(SSL/TLS).</td>
</tr>
<tr>
    <td>Sender Name</td>
    <td>The name which is displayed on the email as From name.</td>
</tr>
<tr>
    <td>Sender Email</td>
    <td>The Email address which is displayed as From Email address in the user email.</td>
</tr>
<tr>
<td>Authentication type</td>
<td>
We support two type of Authentications,

1. Basic Authentication – This is the default authentication type which requires the username and password.
2. Anonymous authentication – You can chose this option if you have disabled the authentication on your SMTP server.
</td>
</tr>
<tr>
    <td>Username</td>
    <td>Username of the user who has access to send the email.</td>
</tr>
<tr>
    <td>Password</td>
    <td>Password of the user.</td>
</tr>
<tr>
    <td>Enable SSL</td>
    <td>If enabled, SSL will be used to connect with your SMTP server. Else, the connection will be made with TLS connection.</td>
</tr>
</table>	


* Once filled the email settings connection details, click the `Test Connection` option.
![Email Settings](/static/assets/site-administration/images/email-settings.png#width=45%)

* Enter an email address and click `Send` to ensure that the SMTP configuration is correct.
![Send Email](/static/assets/site-administration/images/send-email.png#width=35%)