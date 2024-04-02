---
title: Bulk Import Job Results Page in Bold BI | Bold BI Docs
description: Find out the functions of Bold BI's bulk import result page. Learn how to view, suspend, and delete the bulk import job details on the bulk import result page.
platform: bold-bi
documentation: ug
---

# Bulk Import result

The Bulk Import Result page displays the list of all completed and ongoing bulk user import jobs. You can access the Bulk Import Result page by clicking on the `Bulk Import Result` button from the user management page, as shown below.

![User Listing Page](/static/assets/managing-resources/manage-users/images/user-listing-page.png#width=55%)

After clicking the Bulk Import Result button, you will be directed to the Bulk Import Result page.

![User Listing Page](/static/assets/managing-resources/manage-users/images/bulk-import-result-page.png#width=55%)

## View Import Job Details

You can also view detailed information about the job, including total user imports, completed user imports, and failed user imports on the Job Details page. To do this, click on the context menu in the grid and select the `View` option to see the job.

![View Bulk Import Job Details](/static/assets/managing-resources/manage-users/images/view-bulk-import-job-detail.png#width=55%)

After clicking View, you will be taken to the Bulk Import Result page as shown below.

![Bulk User Import Job Details page](/static/assets/managing-resources/manage-users/images/import-job-details-page.png#width=70%)

You can verify the success of user additions in the Imported User tab. Any failed user additions, along with reasons such as invalid first name, last name, email, username, or duplicate users, can be viewed in the Failed Import tab.

![failed-import](/static/assets/managing-resources/manage-users/images/failed-import.png#width=70%)

## Delete Import Job

You can delete a job from the bulk import grid listing by clicking on the context menu in the grid and choosing the `Delete` option.

![Delete Bulk Import Job Details](/static/assets/managing-resources/manage-users/images/delete-bulk-import-job-details.png#width=55%)

> **NOTE:**  You can only delete jobs with a status of Suspended or Completed.

## Suspend Import Job

You can suspend an ongoing user import process from the bulk import grid listing. Simply click on the context menu in the grid and select the `Suspend` option.

![suspend Bulk Import Job Details toast](/static/assets/managing-resources/manage-users/images/suspend-bulk-user-import.png#width=55%)

> **NOTE:**  You can only suspend jobs with a status of In Progress or Yet to Start.