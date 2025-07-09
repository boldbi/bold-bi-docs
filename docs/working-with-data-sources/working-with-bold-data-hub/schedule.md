---
layout: post
title: Scheduling ETL/Data Hub Jobs – Embedded BI | Bold BI Learning
description: Learn how to Scheduling ETL Jobs in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Scheduling Bold Data Hub Jobs:

The Schedule page contains a list of pipeline names and allows you to configure On Demand or Interval based schedules.

![Source](/static/assets/working-with-etl/images/schedule_icon.png)

## On Demand Schedule:

Data refresh can be initiated on demand by selecting the **Run Now** option.

![Source](/static/assets/working-with-etl/images/schedule_runnow.png)

 > **Note:** ``Run Now`` option only works if we save the ``Pipeline`` in ``Extract`` tab.
 

## Interval Schedule:


1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.

![Zendesk Support - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)

2. Select the recurrence type, recurrence, start date, and end date in the Refresh Setting dialog box.

![Zendesk Support - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)

3. The Schedule history can be checked using the history option as well as logs.

![Zendesk Support - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)


## Mail Alert 

The **Mail Alert** feature enables users to configure email notifications for each pipeline. Upon completion of a pipeline's scheduled execution, an alert is sent to the specified recipients.

![Source](/static/assets/working-with-etl/images/schedule_mailalert.png)

 > **Note:** Configure the ``Sender mail`` in the ``Settings`` tab before scheduling/run the pipeline.
### Configuring Mail Alert Settings

To set up mail alerts for your pipelines, follow the steps below:

![Source](/static/assets/working-with-etl/images/mailalert_popup.png)

 1. **Add Recipients**
    - Enter one or more email addresses in the **Recipients** field.
    - Separate multiple email addresses with a **semicolon ( ; )**.

        **Example:** `user1@example.com;user2@example.com`

2. **Set Mail Subject**
    - Specify a clear and concise subject line for the alert email.

3. **Enable Mail Alerts**
    - Toggle the **Enable Mail Alert** option to activate the notification.

4. **Mail Alert Body**
    - A default email body is generated, containing pipeline execution details.
    - You may customize the content and remove unnecessary columns from the body if required.

Configure Sender mail settings in settings tab [Email Settings](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/email-settings/)