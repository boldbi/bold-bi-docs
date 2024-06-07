---
layout: post
title: Creating a Schedule – Embedded BI | Bold BI Learning
description: Learn how to open, create, and save views in Bold BI Embedded. Users without permission to create schedules cannot create schedules.
canonical: "/working-with-dashboards/dashboard-schedule/"
platform: bold-bi
documentation: ug

---

# Create Schedule in Dashboard View Mode

If the user has `Read` permission for a specific dashboard and the permission to create a schedule, then only the user can create a schedule in that dashboard.

### Steps to create a Schedule

1. Open the dashboard and click on `Schedule this view` option on the dashboard header to initiate the schedule creation process

    ![Contect Menu](/static/assets/working-with-dashboards/images/create_schedule.png#width=40%)

2. If a dashboard has no views, the schedule dialog box will not display a views dropdown menu when attempting to create a schedule.

    ![Default Dashboard](/static/assets/working-with-dashboards/images/default-dashboard.png#width=40%)

3. If the user applies a filter and saves it, and then attempts to create a schedule, the schedule dialog box will display a views dropdown. However, the dropdown will be `pre-selected` with the saved view and disabled to prevent any changes to the selected view.

    ![Saved View](/static/assets/working-with-dashboards/images/saved_view.png#width=40%)

4. If the user has an unsaved filter and attempts to create a schedule, an information dialog will appear and ask the user to save the current filtered view before scheduling.

    ![UnSaved Filter](/static/assets/working-with-dashboards/images/unsaved-filter.png)

5. If the user does not have permission to create schedule, a dialog box with specific content will be displayed instead of the schedule dialog box when attempting to create a schedule.

    ![WithoutScheduleCreatePermission](/static/assets/working-with-dashboards/images/without_schedulecreatepremission.png)

To know more about schedules, go through the following [link](/managing-resources/manage-schedules/)