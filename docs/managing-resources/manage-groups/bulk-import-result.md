---
title: Bulk Import Group Job Result Page in Bold BI | Bold BI Docs
description: Learn how the bulk import result page works in Bold BI Embedded. Also know how to view, suspend, and delete bulk import job details from the bulk import result page.
platform: bold-bi
documentation: ug
---

# Bulk Import result

The bulk import result page displays the list of all completed and ongoing bulk group import jobs. You can access the bulk import result page by clicking on the `Bulk Import Result` button from the group management page, as shown below.

![Group Listing Page](/static/assets/managing-resources/manage-groups/images/bulk-import-result.png#width=55%)

After clicking the bulk import result button, you will be directed to the bulk import result page.

![Group Listing Page](/static/assets/managing-resources/manage-groups/images/group-import-listing-page.png#width=55%)

## View Import Job Details

You can also view detailed information about the job, including total group imports, completed group imports, and failed group imports, on the Job Details page. To do this, click on the context menu in the grid and select the `View` option to see the job.

![View Bulk Import Job Details](/static/assets/managing-resources/manage-groups/images/view-group-import-result.png#width=55%)

After clicking View, you will be taken to the bulk import result page as shown below.

![Bulk User Import Job Details page](/static/assets/managing-resources/manage-groups/images/group-import-result-active-directory.png#width=70%)

You can verify the success of group additions in the `Imported Groups` tab. The import group tab also displays the number of users import from the group and failed users. Any failed group additions, along with reasons can be viewed in the `Failed Import` tab.

![failed-import](/static/assets/managing-resources/manage-groups/images/failed-group-import-tab.png#width=70%)

Importing groups process will create the background jobs to import users from that group. The details of user import job can be viewed by clicking on the user count shown next to the group name for each group import.

![imported groups](/static/assets/managing-resources/manage-groups/images/imported-groups-tab.png#width=55%)

## Delete Import Job

You can delete a job from the bulk import grid listing by clicking on the context menu in the grid and choosing the `Delete` option.

![Delete Bulk Import Job Details](/static/assets/managing-resources/manage-groups/images/delete-group-import.png#width=55%)

> **NOTE:**  You can only delete jobs with a status of Suspended or Completed.

## Suspend Import Job

You can suspend an ongoing group import process from the bulk import grid listing. Simply click on the context menu in the grid and select the `Suspend` option.

![suspend Bulk Import Job Details toast](/static/assets/managing-resources/manage-groups/images/suspend-group-import.png#width=55%)

> **NOTE:**  You can only suspend jobs with a status of In Progress or Yet to Start.