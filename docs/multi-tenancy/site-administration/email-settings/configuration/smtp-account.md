---
layout: post
title: Use the SMTP Email Service Configuration – UMS | Bold BI Doc
description: Learn how to use the SMTP mail service in the User Management for email notifications on account activation, password reset, and forgotten passwords
platform: bold-bi
documentation: ug
---

# SMTP Account in User Management Server

This section explains how to configure the [SMTP](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol) details in the User Management Server to send emails.

**The User Management Server requires the following SMTP details in order to send emails.**

<table>
<tr>
    <td>SMTP Server</td>
    <td>The SMTP server specifies the public IP address or provider which delivers the emails to the end user mail box.</td>
</tr>
<tr>
    <td>SMTP Port</td>
    <td>The port number of the SMTP server may vary depending on the SMTP server and the connection type (SSL/TLS).</td>
</tr>
<tr>
    <td>Sender Name</td>
    <td>The name displayed on the email as the "From" name.</td>
</tr>
<tr>
    <td>Sender Email Address</td>
    <td>The email address, which is displayed as the "From" email address in the recipient's email.</td>
</tr>
<tr>
<td>Authentication type</td>
<td>
We support two types of authentications:

1. Basic Authentication: This is the default authentication type that requires a username and password.
2. Anonymous authentication: You can choose this option if you have disabled authentication on your SMTP server.
</td>
</tr>
<tr>
    <td>Username</td>
    <td>The username of the sender's email account with send mail access.</td>
</tr>
<tr>
    <td>Password</td>
    <td>The password of the sender's email account.</td>
</tr>
<tr>
    <td>Enable SSL</td>
    <td>If SSL is enabled, it will be used to connect with your SMTP server. Otherwise, the connection will be made using TLS.</td>
</tr>
</table>

## Steps to configure SMTP account settings in User Management:

1. Go to `http://{domain}/ums/administration/e-mail-settings` and select `SMTP` from the `Email Account` drop-down menu.

2. Fill in the respective fields with the SMTP Server, SMTP port, Sender Name, Sender Email Address, Authentication Type, Username, and Password.

3. After entering the email settings connection details, test the settings by using the `Test Connection` option and then save the settings.
![Email Settings](/static/assets/multi-tenancy/images/email-settings.png)

4. Enter an email address and click on `Send` to ensure that the SMTP configuration is correct.
![Send Email](/static/assets/multi-tenancy/images/send-email-smtp.png)