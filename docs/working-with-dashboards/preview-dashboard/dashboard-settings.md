---
layout: post
title: Exporting Dashboard to PDF, Image and Excel | Bold BI Docs
description: Learn how to enable settings to export a dashboard at runtime to PDF, Image, PowerPoint or Excel files in Bold BI Embedded.
canonical: "/working-with-dashboards/preview-dashboard/dashboard-settings/"
platform: bold-bi
documentation: ug
---
# Allow dashboard exporting options

The Dashboard allows you to enable or disable specific dashboard exporting options in the dashboard properties section. By default, all exporting options are enabled.

To disable the export option, go to the Properties tab and disable the specific export options under the Allow Exporting section.

![Widget image](/static/assets/working-with-dashboards/preview-dashboards/images/allow-exporting-option.png)

The selected export options can be seen when previewing or viewing the dashboard.

![Widget image](/static/assets/working-with-dashboards/preview-dashboards/images/exporting-option-dashboard.png)

> **NOTE:** Exporting options have been provided in the dashboard properties section for Bold BI version 4.2.68 or later.

## Exporting dashboard to Image

   Exporting the dashboard to Image can be done by clicking the `Export to Image` option in the drop-down menu at the right corner of the title section.
    
   ![Export to image](/static/assets/working-with-dashboards/preview-dashboards/images/exporttoimage.png)
   
   By clicking `Export to Image`, a pop-up will be shown as follows.
   
   ![Image popup](/static/assets/working-with-dashboards/preview-dashboards/images/Imagepopup.png)
   
   Set the `File Name` field with the preferred value to replace the default one.
   
   ![Image rename](/static/assets/working-with-dashboards/preview-dashboards/images/Imagerename.png)
   
   The default and minimum value for `Resolution` is 96 dpi (dots per inch), with the maximum value allowed to be set at 1790 dpi.
   
   ![Image format](/static/assets/working-with-dashboards/preview-dashboards/images/ImageFormat.png)
   
   You can choose the image `Format` as JPEG (*.jpg), PNG (*.png), or BMP (*.bmp).
   
   ![Image export](/static/assets/working-with-dashboards/preview-dashboards/images/ImageExport.png)
   
   Click `Export` to display the current view of the dashboard in the chosen image format with applied settings.
   
   ![Image reset](/static/assets/working-with-dashboards/preview-dashboards/images/ImageReset.png)
   
   Click `Reset` to restore the default values in the pop-up.
   
   > **NOTE:**  In Windows, the Safari browser does not support the `Export to Image` functionality. However, Mac OS or iOS with Safari browser version 6+ do support this functionality.
   
## Exporting dashboard to PDF

   You can obtain the data showcased in the dashboard by exporting it as a PDF format. This can be achieved by clicking `Export to PDF` in the drop-down menu at the right corner of the title section.
   
   ![Export to PDF](/static/assets/working-with-dashboards/preview-dashboards/images/ExporttoPDF.png#max-width=70%)
   
   By clicking `Export to PDF`, a pop-up will be shown as follows.
   
   ![Export PDF popup ](/static/assets/working-with-dashboards/preview-dashboards/images/dashboardPDFExportDialog.png#max-width=70%)

   Set the `File Name` field with a preferred value to replace the default one.
   
   ![Export PDF File Name](/static/assets/working-with-dashboards/preview-dashboards/images/dashboardPDFExportFileName.png#max-width=70%)
   
   When the `include filter information` is switched on, the exported PDF file of the dashboard will contain the applied filter information.

   ![Export PDF Filter Information](/static/assets/working-with-dashboards/preview-dashboards/images/dashboardPDFExportFilterToggle.png#max-width=70%)

   ### Export all widgets on a single page as a PDF
   
   The `Dashboard` option is selected by default, and all the widgets in the dashboard will be exported as a one-page PDF file.
   
   ![Export PDF in Dashboard option](/static/assets/working-with-dashboards/preview-dashboards/images/dashboardPDFExportDashboardOption.png#max-width=70%)

   ### Export all widgets on a separate page as a PDF

   By choosing the `Widgets` option, the user can export all the widgets present in the dashboard on individual pages as a PDF.

   ![Export PDF in Widget Option](/static/assets/working-with-dashboards/preview-dashboards/images/dashboardPDFExportWidgetOption.png#max-width=70%)

   The exported PDF file will look like the one below.

   ![Exported PDF file](/static/assets/working-with-dashboards/preview-dashboards/images/dashboardPDFExport.png)

   >**NOTE:** If the dashboard has Grid and Card (with series) type widgets, it will export all the records in those widgets.

   ![Series type Widget PDF file](/static/assets/working-with-dashboards/preview-dashboards/images/dashboardPDFExportSeriesWidget.png)

   ### Export the user selected widgets as PDFs

   By choosing the widget option, the dropdown will be displayed on the right side of the popup.

   ![Dropdown Option](/static/assets/working-with-dashboards/preview-dashboards/images/dashboardPDFExportWidgetOptionAll.png#max-width=70%)

   By clicking the dropdown, all widgets in the dashboard will be displayed (excluding Filter Widgets). Users can choose the widgets required and click on Export to export selected widgets in a PDF.

   ![Widget list dropdown](/static/assets/working-with-dashboards/preview-dashboards/images/dashboardPDFExportWidgetListbox.png#max-width=70%)

   The exported PDF will be downloaded with each widget on an individual page. 
   
   Set the preferred `Page Size` of the PDF File.
   
   ![Export PDF Page Size](/static/assets/working-with-dashboards/preview-dashboards/images/dashboardPDFExportPageSize.png#max-width=70%)
   
   Choose the `Orientation` of the page as either Portrait or Landscape mode.
   
   ![Export PDF Orientation](/static/assets/working-with-dashboards/preview-dashboards/images/dashboardPDFExportOrientation.png#max-width=70%)
   
   By clicking `Export`, the data in the dashboard will be displayed in PDF file format.
   
   ![Export PDF Export](/static/assets/working-with-dashboards/preview-dashboards/images/dashboardPDFExportButton.png#max-width=70%)
   
   By clicking `Reset`, the default values will be restored in the pop-up.
   
   ![Export PDF Reset](/static/assets/working-with-dashboards/preview-dashboards/images/dashboardPDFExportReset.png#max-width=70%)

### Customizing the PDF Page Size and Orientation option in the PDF export

Bold BI dashboards offer a feature that allows users to customize the Page Size and Orientation while exporting a PDF file through the PDF export options to meet their specific needs. This customization can be done directly from the design mode of the dashboard. The customized design mode settings will be reflected in the dashboard viewer when exporting a dashboard or individual widgets.

The following steps explain how to customize the Page Size and Orientation in the PDF export options through the dashboard properties section:

   1.	Go to the properties panel of the widget. By default, all the Page Size options are selected for Page Size, and similarly, the "Both Portrait and Landscape" option is selected for Orientation.
   ![design page size](/static/assets/working-with-dashboards/preview-dashboards/page-size/designmode.png)

   2.	To enable the Page Size options, go to the Properties tab and enable the specific Page Size options to meet your specific needs under the Allow PDF Exporting option.
   ![enable](/static/assets/working-with-dashboards/preview-dashboards/page-size/designpagesize.png)

   3. Similarly, use the dropdown menu to select your preferred `Orientation`. These Page Size and Orientation selections will determine how your dashboard will appear when exported to a PDF.    
   ![enable output](/static/assets/working-with-dashboards/preview-dashboards/page-size/designorientation.png)

   4.	The selected Page Size options and Orientation can be seen when previewing or viewing the dashboard.
   ![enable output](/static/assets/working-with-dashboards/preview-dashboards/page-size/enableoutput.png)

## Exporting dashboard to PowerPoint

   Exporting the dashboard to PowerPoint can be done by clicking the `Export to PowerPoint` option in the drop-down menu at the right corner of the title section.
   
   ![Export to PowerPoint](/static/assets/working-with-dashboards/preview-dashboards/images/exporttopowerpoint.png)

   By clicking `Export to PowerPoint`, a pop-up will be shown as follows. Set the `File Name` field with a preferred value to replace the default one.
   
   ![Export to PowerPoint Dialog](/static/assets/working-with-dashboards/preview-dashboards/images/exporttopowerpointdialog.png)
   
   ### Export all widgets on a single slide as a PowerPoint
   
   The `Dashboard` option is selected by default, and all the widgets in the dashboard will be exported as a single slide PowerPoint file.
   
   ![PowerPoint Dashboard Option](/static/assets/working-with-dashboards/preview-dashboards/images/dashboardpowerpointexport.png)

   ### Export all widgets on a separate slides as PowerPoint

   By choosing the `Widgets` option, the user can export each widget present in the dashboard onto individual slides in a PowerPoint presentation.

   ![PowerPoint Widget option](/static/assets/working-with-dashboards/preview-dashboards/images/widgetspowerpointexport.png)

   The exported PowerPoint file will look like the one below.

   ![PowerPoint Exported File](/static/assets/working-with-dashboards/preview-dashboards/images/exportedpptfile.png)

   ### Export the user selected widgets as PowerPoint

   By choosing the `Widgets` option, the dropdown will be displayed on the right side of the popup. By clicking the dropdown, all widgets in the dashboard will be displayed (excluding Filter Widgets). Users can choose the widgets required and click on Export to export selected widgets into a PowerPoint presentation.

   ![PowerPoint Specific Widgets](/static/assets/working-with-dashboards/preview-dashboards/images/specificwidgetspowerpointexport.png)
   
   By clicking `Export`, the data in the dashboard will be downloaded with each widget on an separate slide. 
   
   ![PowerPoint Export Option](/static/assets/working-with-dashboards/preview-dashboards/images/powerpointexportoption.png)
   
   By clicking `Reset`, the default values will be restored in the pop-up.

   ![PowerPoint Reset](/static/assets/working-with-dashboards/preview-dashboards/images/powerpointexportreset.png)

## Exporting dashboard to Excel

   You can obtain the aggregated data showcased in the dashboard by exporting it as Excel format. This can be achieved by clicking `Export to Excel` in the drop-down menu at the right corner of the title section.
    
   ![Export to excel](/static/assets/working-with-dashboards/preview-dashboards/images/exporttoexcel.png)
   
   By clicking `Export to Excel `, the pop-up will be shown as follows:
   
   ![Excel popup](/static/assets/working-with-dashboards/preview-dashboards/images/Excelpopup.png)  
   
   Set the `File Name` field with a preferred value to replace the default one.
   
   Choose the `Format` as either Excel Workbook (*.xlsx) or Excel 97-2003 Workbook (*.xls).
   
   ![Excel export](/static/assets/working-with-dashboards/preview-dashboards/images/Excelexport.png)
   
   Click `Export` to display the data in the dashboard in the chosen Excel format.
   
   ![Excel reset](/static/assets/working-with-dashboards/preview-dashboards/images/Excelreset.png)
   
   Click `Reset` to restore the default values in the pop-up.

## Exporting dashboard to CSV

   You can obtain the aggregated data showcased in the dashboard by exporting it as CSV format. This can be achieved by clicking `Export to CSV` in the drop-down menu at the right corner of the title section.
    
   ![Export to Csv](/static/assets/working-with-dashboards/preview-dashboards/images/ExportToCsv.png)
   
   By clicking `Export to CSV`, the pop-up will be shown as follows:
   
   ![CSV Popup](/static/assets/working-with-dashboards/preview-dashboards/images/CsvExportPopup.png)  
   
   Set the `File Name` field with a preferred value to replace the default one.
   
   ![CSV export](/static/assets/working-with-dashboards/preview-dashboards/images/CsvExport.png)
   
   Click `Export` to display the data in the dashboard in the chosen CSV format.
   
   ![CSV reset](/static/assets/working-with-dashboards/preview-dashboards/images/CsvReset.png)
   
   Click `Reset` to restore the default File name values in the pop-up.

   >**NOTE:** When initiating a CSV export, a dashboard with a single widget will directly produce the data in CSV format. In contrast, dashboards with multiple widgets will generate a zip file, encompassing CSV files tailored to each widget item.

## Updating dashboard

   You can update the dashboard manually by clicking `Update Dashboard` at the right corner of the title section.
    
   ![Update dashboard in viewer](/static/assets/working-with-dashboards/preview-dashboards/images/updatedashboardinviewer.png)
    
   This updates the dashboard with the browser cached data view, which will remain for 10 minutes. After updating the dashboard, the updated data will be fetched from the data server and stored in the cache.

## Exporting restriction

   We have limitations on exporting files of each format at a time when there are ongoing exports of the same format.

   For example, if we choose to export a dashboard in PDF format, we must wait for the ongoing PDF export to finish before starting another export.

   If an attempt is made to export another PDF file while one is already in progress, a toast message will be displayed, exhibiting the relevant message.

   Additionally, it is possible to export other formats, such as images, Excel, and CSV files, while a PDF export is ongoing.

   Also, note that when exporting a dashboard in PDF format or any other format, if you make changes to the filter configuration or apply filters, you will be able to export the PDF format or any other format in both the dashboard and widget levels.

   ![Export restriction](/static/assets/working-with-dashboards/preview-dashboards/images/export_restriction.png)