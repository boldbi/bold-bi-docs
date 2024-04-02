---
layout: post
title: Email Service Configuration – Self-Hosted BI | Bold BI Docs
description: Learn about the different mail service options such as, SMTP and Microsoft Office 365 that are supported in Bold BI.
platform: bold-bi
documentation: ug
---

# Email Account Settings

This section explains how to configure the email settings in the Bold BI Server to send emails using either SMTP or Microsoft Office 365 accounts, including OAuth authentication for the latter.
* [SMTP Account](/site-administration/email-settings/configuration/smtp-account/)

* [Microsoft Office 365 Account with OAuth authentication](/site-administration/email-settings/configuration/office-365-account/)

### Email Settings are required to perform the following operations:
<table>
<tr>
    <td>Dashboard export</td>
    <td>The exported dashboard is sent to the scheduled recipients via email.</td>
</tr>
<tr>
    <td>Data refresh failure</td>
    <td>Sends an email to the end user regarding the failure of data refresh.</td>
</tr>
<tr>
    <td>Profile edit</td>
    <td>An email is sent when a user profile is edited.</td>
</tr>
<tr>
    <td>Schedule synchronization</td>
    <td>Sends an email to the end user regarding the synchronization schedules for AD, Azure AD, and the database.</td>
</tr>
<tr>
    <td>Item share</td>
    <td>Sends email when a resource is shared.</td>
</tr>
<tr>
    <td>Comments</td>
    <td>Sends email for comment addition, editing, replying, and deletion to end user.</td>
</tr>
<tr>
    <td>User activation & invitation</td>
    <td>Sends an email for user account activation and invitation.</td>
</tr>
</table>

> **NOTE:** This email service configuration is only applicable for On-Premises Deployment.