---
layout: post
title: Azure AD Users Synchronization – Embedded BI | Bold BI
description: Learn how to synchronize imported user details such as, first name, last name, email address, and contact number from Azure Active Directory in Bold BI Embedded.
canonical: "/managing-resources/manage-users/synchronize-azure-active-directory-users/"
platform: bold-bi
documentation: ug
---

# Azure Active Directory User Synchronization

This section explains how to synchronize the imported Azure Active Directory user details with the Azure Active Directory.

> **NOTE:**  Before synchronizing the Azure Active Directory users, follow the given steps:
> 1. Configure [Azure Active Directory Settings](/site-administration/user-directory-settings/azure-active-directory/).
> 2. Import users from the Azure Active Directory to Bold BI by referring to the following link: [Active Directory User Import](/managing-resources/manage-users/import-azure-active-directory-users/).

You can navigate to the user synchronization page from the users page as shown in the figure below.

![Azure Active Directory Synchronization Link](/static/assets/managing-resources/manage-users/images/azure-user-synchronisation-navigation-button.png#width=65%)

## Synchronize Users

Bold BI will list the Azure Active Directory users that are already imported, as shown in the figure below.

![Azure Active Directory Imported user list](/static/assets/managing-resources/manage-users/images/imported-azure-user-list.png)

> **NOTE:**  Only users imported from the Azure AD configured in this organization are listed here.

Choose the users you want to synchronize and click on `Synchronize` at the top.

![Synchronize button](/static/assets/managing-resources/manage-users/images/Azure-Synchronize-button.png)

### Synchronization procedure

* Bold BI will synchronize the user details - username, first name, last name, email address, and contact number with the Azure Active Directory Server.

* Bold BI will delete the user if the user has been deleted from the Azure Active Directory Server.

After synchronization completes, the number of users modified, deleted, duplicated will be shown in the success message box as shown in the figure below.

![Synchronization confirmation window](/static/assets/managing-resources/manage-users/images/Azure-Synchronization-Confirmation-window.png#width=60%)

## Duplicate Users

Azure Active Directory users who have the same username or email address as that of the Bold BI users (who are already present) will be marked as duplicate users and will not be allowed to synchronize into Active Directory.

![Display Duplicated users](/static/assets/managing-resources/manage-users/images/display-azure-duplicate-message.png#width=50%)