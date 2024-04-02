---
layout: post
title: How to migrate the custom widgets for v5.2.48+ | Bold BI Docs
description: Find the steps to migrate the custom widgets from lower versions to Bold BI v5.2.48 or later using the custom widget upgrader utility is available in Bold BI.
platform: bold-bi
control: Custom Widget
documentation: ug
---

# Migration of Custom Widgets from lower versions to v5.2.48 or later

When the Bold BI is upgraded from the lower version to v5.2.48 or later, custom widgets available in the Bold BI build will be upgraded automatically. To upgrade the custom widgets(created in the version lower than 5.2) which is placed manually in the below mentioned location after the v5.2.48 migration run the custom widget upgrader utility mentioned below:

> **NOTE:** This feature is available in On-Premises Deployment but not in Syncfusion Managed Cloud Server.

* Place the Custom Widgets as mentioned in the <a href="/visualizing-data/visualization-widgets/custom-widget/v4.2.68-or-later/#importing-widget-in-designer">link</a>.

* Now run the custom widget upgrader utility by following the steps below:
  <table>
        <tr>
        <td>Environment</td>
        <td>Steps for running Utility</td>
        </tr>
        <tr>
          <td rowspan="2">Linux</td>
          <td>Navigate to the custom widget upgrader utility folder <b>cd /var/www/bold-services/application/utilities/customwidgetupgrader/. </b></td>
        </tr>
         <tr>
           <td>Run the utility with the dotnet command <b>/var/www/bold-services/dotnet/dotnet CustomWidgetUpgrader.dll.</b></td>
         </tr>
         <tr>
           <td>Windows</td>
           <td>Run the <b>CustomWidgetUpgrader.exe</b> which is available in the below location <b>C:\BoldServices\utilities\customwidgetupgrader\.</b> </td>
         </tr>
    </table>