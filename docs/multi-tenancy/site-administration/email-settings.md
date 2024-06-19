---
layout: post
title: SMTP Email Settings – User Management Server | Bold BI Docs
description: Learn how to configure the SMTP settings user management server to send emails for account activation, forgot or reset password.
platform: bold-bi
documentation: ug
---

# Email Settings in User Management Server

This section explains how to configure the [SMTP](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol) details in the User Management Server to send emails. 

SMTP Email Settings are required to perform the following operations:

**Account Activation** --- Sends user account activation email.
   
**Forgot Password** --- Sends request links to reset the password when the user has forgotten the password.
	
**Reset Password** --- Sends links to reset the password.

The following SMTP details are required to send email from the User Management Server.

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
Support two types of Authentications:

1. Basic authentication – This is the default authentication type, which requires the username and password.
2. Anonymous authentication – You can choose this option, if you have disabled the authentication on your SMTP server.
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
	
![Email Settings page](/bold-bi-docs/static/assets/embedded/multi-tenancy/images/email-settings-page.png)
