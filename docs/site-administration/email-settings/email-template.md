---
layout: post
title: Email Template Guide - Generate, use & Manage | Bold BI Docs
description: Learn to create, edit, and manage custom email templates on Bold BI, perfect for on-premises. Secure default templates for tailored notifications.
platform: bold-bi
documentation: ug
---

# Email Template

This section explains how to manage email templates within the email settings. Bold BI allows you to access system templates, create custom templates, and customize templates for sending email notifications.

![Email templates](/static/assets/site-administration/images/email-template-list.png#width=55%)

> **NOTE:** This setting is applicable only for On-Premises Deployment.

## Default Template Overview

Bold BI provides default templates for each module. These templates can be customized to meet specific requirements. However, system default templates cannot be edited, deleted, or set as default for custom use.

<table>
<tr>
<th>Template</th>
<th>Description</th>
</tr>

<tr>
<td>New Dashboard Comment</td>
<td>Notify when someone adds a new comment to a dashboard you have access to.<br>

**For Example:** If User A comments on a dashboard which is accessible to User B, then User B receives an email notification using this template.
</td>
</tr>

<tr>
<td>Dashboard Comment Deleted</td>
<td>Notify when any comment is removed from a dashboard you have access to.<br>

**For Example:** If User A deletes a comment on a dashboard which is accessible to User B, then User B receives an email notification using this template.
</td>
</tr>

<tr>
<td>My Dashboard Comment Deleted</td>
<td>Notify when someone else deletes a comment that you wrote on a dashboard.<br>

**For Example:** If you wrote a comment and an admin deletes it, you will receives an email notification using this template saying your comment was removed.
</td>
</tr>

<tr>
<td>Reply to Dashboard Comment</td>
<td>Notify when someone replies to a comment made on a dashboard you have access to.<br>

**For Example:** If User A replies to a comment on a dashboard accessible to User B, then User B receives email notification using this template.
</td>
</tr>

<tr>
<td>Reply to My Dashboard Comment</td>
<td>Notify when someone replies to a comment you made on a dashboard.<br>

**For Example:** If you commented on a dashboard and someone replies to it, you will be notified of the reply using this template.
</td>
</tr>

<tr>
<td>Edit Dashboard Comment</td>
<td>Notify when a comment is edited on a dashboard you have access to.<br>

**For Example:** If User A edits a comment on a dashboard accessible to User B, then User B receives a notification using this template.
</td>
</tr>

<tr>
<td>User Mention in Dashboard Comment</td>
<td>Notify when someone mentions you in a dashboard comment using '@'.<br>

**For Example:** If User A mentions User B in comments, then User B receives a notification using this template.
</td>
</tr>

<tr>
<td>Profile Update</td>
<td>Notify when an admin updates your profile details.<br>

**For Example:** If your role or email is changed by an admin, you will receive a notification using this template.
</td>
</tr>

<tr>
<td>Global Resources and Settings Share</td>
<td>Notify when admin shares access to all resources and settings with you.<br>

**For Example:** If admin gives you full access to dashboards and settings, you will be notified using this template.
</td>
</tr>

<tr>
<td>Specific Resource or Setting Share</td>
<td>Notify when admin shares access to specific resources or settings.<br>

**For Example:** If admin gives you access to anyone of resource, you will be notified using this template.
</td>
</tr>

<tr>
<td>Permission Delegation</td>
<td>Notify when admin allows you to manage permissions for resources or settings.<br>

**For Example:** If admin delegates permission control to you, you will receive a notification using this template.
</td>
</tr>

<tr>
<td>Alert-Driven Dashboard Export</td>
<td>Notify when a dashboard is exported automatically due to a condition met.<br>

**For Example:** If a threshold is met and export is triggered, then users added in dashboard schedule will be notified using this template.
</td>
</tr>

<tr>
<td>Timed Dashboard Export</td>
<td>Notify when a dashboard is exported at a scheduled time.<br>

**For Example:** If a dashboard is set to export every Monday, then users added in dashboard schedule will receive a notification using this template.
</td>
</tr>

<tr>
<td>Failed Timed Dashboard Export</td>
<td>Notify when a dashboard export fails at a scheduled time.<br>

**For Example:** If a dashboard is set to export every Monday ,but dashboard export is failed then users added in dashboard schedule will be notified using this template.
</td>
</tr>

<tr>
<td>Failed Alert-Driven Dashboard Export</td>
<td>Notify when an alert-based dashboard export fails.<br>

**For Example:** If a condition-based export fails, users added in dashboard schedule will receive a notification using this template.
</td>
</tr>

<tr>
<td>Failed Data Refresh</td>
<td>Notify when data refresh fails for a data source.<br>

**For Example:** If user enables automatic data source refresh, but if it fails then you will be notified using this template.
</td>
</tr>

<tr>
<td>Disabled Timed Dashboard Export</td>
<td>Notify when dashboard exports schedule disabled due to repeated failures.<br>

**For Example:** If a dashboard is set to export every Monday, but dashboard export is failed the system disables the export after some repeated failure occurrences, then users added in dashboard schedule will be notified using this template.
</td>
</tr>

<tr>
<td>Disabled Alert-Driven Dashboard Export</td>
<td>Notify when alert-based exports are disabled due to repeated failures.<br>

**For Example:** If alert-triggered exports fail repeatedly, the system disables them and then users added in dashboard schedule will be notified using this template.
</td>
</tr>

<tr>
<td>Disabled Data Refresh</td>
<td>Notify when automatic data refresh of data source is disabled due to repeated failures.<br>

**For Example:** If data refresh fails multiple times, the system disables it and notifies you using this template.
</td>
</tr>

<tr>
<td>Synchronization Azure AD</td>
<td>Notify when users or groups are successfully synchronized from Azure Active Directory.<br>

**For Example:** If you import users or groups from Azure AD and sync completes successfully, you will be notified using this template.
</td>
</tr>

<tr>
<td>Synchronized Windows AD</td>
<td>Notify when users or groups are successfully synchronized from Windows Active Directory.<br>

**For Example:** If you import users or groups from Windows AD and sync completes successfully, you will be notified using this template.
</td>
</tr>

<tr>
<td>Synchronized Database Users</td>
<td>Notify when users are successfully imported from a database.<br>

**For Example:** If you import users from database and sync completes successfully, you will be notified using this template.
</td>
</tr>

<tr>
<td>Failed Azure AD Synchronization</td>
<td>Notify when synchronization from Azure AD fails.<br>

**For Example:** If you import users or groups from Azure AD and sync fails due to an error, you will be notified using this template.
</td>
</tr>

<tr>
<td>Failed Windows AD Synchronization</td>
<td>Notify when synchronization from Windows AD fails.<br>

**For Example:** If you import users or groups from Windows AD and sync fails due to an error, you will be notified using this template.
</td>
</tr>

<tr>
<td>Failed Database User Synchronization</td>
<td>Notify when synchronization from a database fails.<br>

**For Example:** If you import users from database and sync fails due to an error, you will be notified using this template.
</td>
</tr>

<tr>
<td>User Activation</td>
<td>Notify when your account is activated by an admin.<br>

**For Example:** If you add your account and admin activates your user account, you will receive a notification using this template.
</td>
</tr>

<tr>
<td>User Invitation</td>
<td>Notify when you are invited to join the platform.<br>

**For Example:** If admin sends you an invitation, you will receive a notification using this template.
</td>
</tr>
</table>


## Managing Email Templates

### Create a New Template

1. Select a template to customize and click `View` from the grid.

   ![View templates](/static/assets/site-administration/images/view-template.png)

2. Click `Create Template` to create a custom template. Choose a base template to start your customization.

   ![Create template](/static/assets/site-administration/images/create-template.png)

   ![Create templates Dialog](/static/assets/site-administration/images/create-template-dialog.png)

### Edit Template

1. Click the `Actions` button in the template grid context menu and select `Edit`.

   ![Edit template](/static/assets/site-administration/images/edit-template.png)

2. Modify the content as needed, then click `Save` to update the template.

   ![Customize Email templates](/static/assets/site-administration/images/customize-email-template.png)

### Copy a Template

1. Click the `Actions` button in the template grid context menu and select `Copy`.

   ![Copy template](/static/assets/site-administration/images/copy-template.png)

2. A dialog will appear to confirm and proceed with copying the template.

   ![Copy templates Dialog](/static/assets/site-administration/images/copy-template-dialog.png)

### Mark a Template as Default

Click the `Actions` button in the context menu of the template grid and select `Mark as default` to set the selected template as the default.

![Mark as default](/static/assets/site-administration/images/mark-as-default-template.png)

### Delete Template

To delete the created template, click the `Actions` button in the context menu of the template grid, and select `Delete`.

![Delete template](/static/assets/site-administration/images/delete-template.png)

> **NOTE:** System default templates cannot be edited, deleted, or set as default.