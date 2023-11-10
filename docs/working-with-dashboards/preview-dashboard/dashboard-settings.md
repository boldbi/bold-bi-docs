---
layout: post
title: Exporting Dashboard to PDF, Image and Excel | Bold BI Docs
description: Learn how to enable settings to export a dashboard at runtime to PDF, Image or Excel files in Bold BI Embedded.
canonical: "/working-with-dashboards/preview-dashboard/dashboard-settings/"
platform: bold-bi
documentation: ug
---
# Allow dashboard exporting options

Dashboard allows you to enable or disable the specific dashboard exporting options in dashboard properties section. By default, all exporting options are enabled.

To disable export option, go to the Properties tab and disable the specific export options under the Allow Exporting section.

![Widget image](/static/assets/working-with-dashboards/preview-dashboards/images/allow-exporting-option.png)

The selected export options can be seen when previewing or viewing the dashboard.

![Widget image](/static/assets/working-with-dashboards/preview-dashboards/images/exporting-option-dashboard.png)

> **NOTE:** Exporting options have been provided in the dashboard properties section for Bold BI version 4.2.68 or later.

## Exporting dashboard to Image

   Export the current view of the dashboard in the form of image by clicking the `Export to Image` in the drop-down menu at right corner of the title section.
    
   ![Export to image](/static/assets/working-with-dashboards/preview-dashboards/images/exporttoimage.png)
   
   By clicking the `Export to Image`, the pop-up will be shown as follows.
   
   ![Image popup](/static/assets/working-with-dashboards/preview-dashboards/images/Imagepopup.png)
   
   Set the `File Name` field with preferred value to replace the default one.
   
   ![Image rename](/static/assets/working-with-dashboards/preview-dashboards/images/Imagerename.png)
   
   The default and minimum value for `Resolution` is 96 dpi (dots per inch). Maximum value allowed to set is 1790 dpi.
   
   ![Image format](/static/assets/working-with-dashboards/preview-dashboards/images/ImageFormat.png)
   
   You can choose the image `Format` as JPEG (*.jpg), PNG (*.png), or BMP (*.bmp).
   
   ![Image export](/static/assets/working-with-dashboards/preview-dashboards/images/ImageExport.png)
   
   Click `Export` to display the current view of the dashboard in the chosen image format with applied settings.
   
   ![Image reset](/static/assets/working-with-dashboards/preview-dashboards/images/ImageReset.png)
   
   Click `Reset` to restore the default values in the pop-up.
   
   > **NOTE:**  In Windows, Safari browser does not support `Export to Image` functionality. Since Mac OS or iOS have Safari browser version 6+, they support this functionality.
   
## Exporting dashboard to PDF

   You can obtain the data showcased in the dashboard by exporting it as PDF format. This can be achieved by clicking the `Export to PDF` in the drop-down menu at right corner of the title section.
   
   ![Export to PDF](/static/assets/working-with-dashboards/preview-dashboards/images/ExporttoPDF.png#max-width=70%)
   
   By clicking the `Export to PDF`, the pop-up will be shown as follows.
   
   ![Export PDF popup ](/static/assets/working-with-dashboards/preview-dashboards/images/dashboardPDFExportDialog.png#max-width=70%)

   Set the `File Name` field with preferred value to replace the default one.
   
   ![Export PDF File Name](/static/assets/working-with-dashboards/preview-dashboards/images/dashboardPDFExportFileName.png#max-width=70%)
   
   When the `include filter information` is switched on, the dashboard exported PDF file will contain the applied filter information.

   ![Export PDF Filter Information](/static/assets/working-with-dashboards/preview-dashboards/images/dashboardPDFExportFilterToggle.png#max-width=70%)

   ### Export all widgets on a single page as a PDF
   
   The `Dashboard` option is selected by default. All the widgets in the dashboard will be exported as a one-page PDF file.
   
   ![Export PDF in Dashboard option](/static/assets/working-with-dashboards/preview-dashboards/images/dashboardPDFExportDashboardOption.png#max-width=70%)

   ### Export all widgets on a separate page as a PDF

   By choosing the `Widgets` option, the user can export all the widgets present in the dashboard on an individual page as a PDF.

   ![Export PDF in Widget Option](/static/assets/working-with-dashboards/preview-dashboards/images/dashboardPDFExportWidgetOption.png#max-width=70%)

   The exported PDF file will look like the one below.

   ![Exported PDF file](/static/assets/working-with-dashboards/preview-dashboards/images/dashboardPDFExport.png)

   >**NOTE:** If the dashboard has Grid and Card (with series) type widgets. It will export all the records in those widgets.

   ![Series type Widget PDF file](/static/assets/working-with-dashboards/preview-dashboards/images/dashboardPDFExportSeriesWidget.png)

   ### Export the user selected widgets as PDFs

   By choosing the widget option, the Dropdown will be displayed on the right side of the popup.

   ![Dropdown Option](/static/assets/working-with-dashboards/preview-dashboards/images/dashboardPDFExportWidgetOptionAll.png#max-width=70%)

   By click the dropdown, all widgets in the dashboard will be displayed[excluding Filter Widgets]. Users can choose the widgets required and click on Export to Export selected widgets in a PDF.

   ![Widget list dropdown](/static/assets/working-with-dashboards/preview-dashboards/images/dashboardPDFExportWidgetListbox.png#max-width=70%)

   Exported PDF will be downloaded with each widget on an individual Page.
   
   Set the preferred `Page Size` of the PDF File.
   
   ![Export PDF Page Size](/static/assets/working-with-dashboards/preview-dashboards/images/dashboardPDFExportPageSize.png#max-width=70%)
   
   Choose the `Orientation` of the page as either Portrait or Landscape mode.
   
   ![Export PDF Orientation](/static/assets/working-with-dashboards/preview-dashboards/images/dashboardPDFExportOrientation.png#max-width=70%)
   
   By clicking the `Export`, the data in the dashboard will get displayed in the PDF file format.
   
   ![Export PDF Export](/static/assets/working-with-dashboards/preview-dashboards/images/dashboardPDFExportButton.png#max-width=70%)
   
   By clicking the `Reset`, the default values get restored in the pop-up.
   
   ![Export PDF Reset](/static/assets/working-with-dashboards/preview-dashboards/images/dashboardPDFExportReset.png#max-width=70%) 
   
## Exporting dashboard to Excel

   You can obtain the aggregated data showcased in the dashboard by exporting it as Excel format. This can be achieved by clicking the `Export to Excel` in the drop-down menu at right corner of the title section.
    
   ![Export to excel](/static/assets/working-with-dashboards/preview-dashboards/images/exporttoexcel.png)
   
   By clicking the `Export to Excel`, the pop-up will be shown as follows.
   
   ![Excel popup](/static/assets/working-with-dashboards/preview-dashboards/images/Excelpopup.png)  
   
   Set the `File Name` field with preferred value to replace the default one.
   
   Choose the `Format` as either Excel Workbook (*.xlsx) or Excel 97-2003 Workbook (*.xls).
   
   ![Excel export](/static/assets/working-with-dashboards/preview-dashboards/images/Excelexport.png)
   
   Click `Export` to display the data in the dashboard in chosen Excel format.
   
   ![Excel reset](/static/assets/working-with-dashboards/preview-dashboards/images/Excelreset.png)
   
   Click `Reset` to restore the default values in the pop-up.

## Exporting dashboard to CSV

   You can obtain the aggregated data showcased in the dashboard by exporting it as CSV format. This can be achieved by clicking the `Export to CSV` in the drop-down menu at the right corner of the title section.
    
   ![Export to Csv](/static/assets/working-with-dashboards/preview-dashboards/images/ExportToCsv.png)
   
   By clicking the `Export to CSV`, the pop-up will be shown as follows:
   
   ![CSV Popup](/static/assets/working-with-dashboards/preview-dashboards/images/CsvExportPopup.png)  
   
   Set the `File Name` field with preferred value to replace the default one.
   
   ![CSV export](/static/assets/working-with-dashboards/preview-dashboards/images/CsvExport.png)
   
   Click `Export` to display the data in the dashboard in the chosen csv format
   
   ![CSV reset](/static/assets/working-with-dashboards/preview-dashboards/images/CsvReset.png)
   
   Click `Reset` to restore the default File name values in the pop-up.

   >**NOTE:** When initiating a CSV export, a dashboard with a single widget will directly produce the data in CSV format. In contrast, dashboards with multiple widgets will generate a zip file, encompassing CSV files tailored to each widget item.

## Updating dashboard

   You can update the dashboard manually by clicking the `Update Dashboard` at right corner of the title section.
    
   ![Update dashboard in viewer](/static/assets/working-with-dashboards/preview-dashboards/images/updatedashboardinviewer.png)
    
   This updates the dashboard with the browser cached data view, which will remain for 10 minutes. After updated the dashboard, the updated data will be fetched from the data server and stored in the cache.