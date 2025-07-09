---
layout: post
title: Mail Settings ETL/Data Hub – Embedded BI | Bold BI Learning
description: Learn how to configure the smptp settings for sender email in Bold BI Data Hub. Discover simple steps to provide details for microsoft and google account.
platform: bold-bi
documentation: ug

---


# Email Settings

To enable **mail alerts** for your pipelines, SMTP settings must be configured under the **Settings** tab in **Email settings** section.

> **Note:** Sender mail configuration is mandatory if mail alerting needs to be enabled.

![Email Settings](/static/assets/working-with-etl/images/email-settings.png)

---

## SMTP Configuration Fields

| Field            | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| **Provider Type**| Select the email service provider. Currently supports `SMTP`.               |
| **Sender Name**  | Name displayed as the sender in the recipient’s inbox.                      |
| **Sender Email** | The email address used to send notifications.                               |
| **Host**         | The SMTP server host (e.g., `smtp.gmail.com`, `smtp.office365.com`).        |
| **Port**         | Port used for SMTP transmission. Typically `587` for TLS.                   |
| **UserName**     | SMTP username (usually the same as the sender email address).               |
| **Password**     | App-specific password if using MFA/2FA.                                     |
| **SSL**          | Enable this option if your provider requires SSL instead of TLS.            |

> **TLS vs SSL:** Port `587` typically uses **STARTTLS**, while port `465` uses **SSL**. Ensure the correct port and SSL setting are chosen based on your provider.

---

## App Password

If multi‑factor authentication (MFA) is enabled, generate an [App Password](https://myaccount.google.com/apppasswords) from your **Google Account**.

If MFA is enabled, generate an [App Password](https://docs.microsoft.com/en-us/azure/active-directory/user-help/multi-factor-authentication-end-user-app-passwords) from your **Microsoft Account**.

---

## Saving the Configuration

After filling in all required fields and checking the SSL option (if necessary), click **Save** to store your SMTP settings. A confirmation message will appear near the Save button, indicating that the provided credentials are correct.

> SMTP needs to be configured only once. These settings will be reused for all pipelines with mail alerting enabled. 

Configure email recipients for pipeline alerts in schedule tab [Mail Alert](https://help.boldbi.com/working-with-data-sources/working-with-bold-etl/schedule/#mail-alert)

