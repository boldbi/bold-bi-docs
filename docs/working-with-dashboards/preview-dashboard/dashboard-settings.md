---
layout: post
title: Exporting Dashboard to PDF, Image and Excel | Bold BI Docs
description: Learn how to enable settings to export a dashboard at runtime to PDF, Image or Excel files in Bold BI Embedded.
canonical: "/cloud-bi/working-with-dashboards/preview-dashboard/dashboard-settings/"
platform: bold-bi
documentation: ug
---
# Allow dashboard exporting options

Dashboard allows you to enable or disable the specific dashboard exporting options in dashboard properties section. By default, all exporting options are enabled.

To disable export option, go to the Properties tab and disable the specific export options under the Allow Exporting section.

![Widget image](/bold-bi-docs/static/assets/embedded/working-with-dashboards/preview-dashboards/images/allow-exporting-option.png)

The selected export options can be seen when previewing or viewing the dashboard.

![Widget image](/bold-bi-docs/static/assets/embedded/working-with-dashboards/preview-dashboards/images/exporting-option-dashboard.png)

> **NOTE:** Exporting options have been provided in the dashboard properties section for Bold BI version 4.2.68 or later.

## Exporting dashboard to Image

   Export the current view of the dashboard in the form of image by clicking the `Export to Image` in the drop-down menu at right corner of the title section.
    
   ![Export to image](/bold-bi-docs/static/assets/embedded/working-with-dashboards/preview-dashboards/images/exporttoimage.png)
   
   By clicking the `Export to Image`, the pop-up will be shown as follows.
   
   ![Image popup](/bold-bi-docs/static/assets/embedded/working-with-dashboards/preview-dashboards/images/Imagepopup.png)
   
   Set the `File Name` field with preferred value to replace the default one.
   
   ![Image rename](/bold-bi-docs/static/assets/embedded/working-with-dashboards/preview-dashboards/images/Imagerename.png)
   
   The default and minimum value for `Resolution` is 96 dpi (dots per inch). Maximum value allowed to set is 1790 dpi.
   
   ![Image format](/bold-bi-docs/static/assets/embedded/working-with-dashboards/preview-dashboards/images/ImageFormat.png)
   
   You can choose the image `Format` as JPEG (*.jpg), PNG (*.png), or BMP (*.bmp).
   
   ![Image export](/bold-bi-docs/static/assets/embedded/working-with-dashboards/preview-dashboards/images/ImageExport.png)
   
   Click `Export` to display the current view of the dashboard in the chosen image format with applied settings.
   
   ![Image reset](/bold-bi-docs/static/assets/embedded/working-with-dashboards/preview-dashboards/images/ImageReset.png)
   
   Click `Reset` to restore the default values in the pop-up.
   
   > **NOTE:**  In Windows, Safari browser does not support `Export to Image` functionality. Since Mac OS or iOS have Safari browser version 6+, they support this functionality.
   
## Exporting dashboard to PDF

   You can obtain the data showcased in the dashboard by exporting it as PDF format. This can be achieved by clicking the `Export to PDF` in the drop-down menu at right corner of the title section.
   
   ![Export to PDF](/bold-bi-docs/static/assets/embedded/working-with-dashboards/preview-dashboards/images/ExporttoPDF.png)
   
   By clicking the `Export to PDF`, the pop-up will be shown as follows.
   
   ![Export PDF popup](/bold-bi-docs/static/assets/embedded/working-with-dashboards/preview-dashboards/images/ExportPDFpopup.png)
   
   Set the `File Name` field with preferred value to replace the default one.
   
   ![Export PDF rename](/bold-bi-docs/static/assets/embedded/working-with-dashboards/preview-dashboards/images/ExportPDFRename.png)
   
   Set the preferred `Page Size` of the PDF File.
   
   ![Export PDF page](/bold-bi-docs/static/assets/embedded/working-with-dashboards/preview-dashboards/images/ExportPDFpage.png)
   
   Choose the `Orientation` of the page as either Portrait or Landscape mode.
   
   ![Export PDF orientation](/bold-bi-docs/static/assets/embedded/working-with-dashboards/preview-dashboards/images/ExportPDFOrientation.png)
   
   By clicking the `Export`, the data in the dashboard will get displayed in the PDF file format.
   
   ![PDF export](/bold-bi-docs/static/assets/embedded/working-with-dashboards/preview-dashboards/images/PDFExport.png)
   
   By clicking the `Reset`, the default values get restored in the pop-up.
   
   ![PDF reset](/bold-bi-docs/static/assets/embedded/working-with-dashboards/preview-dashboards/images/PDFReset.png) 
   
## Exporting dashboard to Excel

   You can obtain the aggregated data showcased in the dashboard by exporting it as Excel format. This can be achieved by clicking the `Export to Excel` in the drop-down menu at right corner of the title section.
    
   ![Export to excel](/bold-bi-docs/static/assets/embedded/working-with-dashboards/preview-dashboards/images/exporttoexcel.png)
   
   By clicking the `Export to Excel`, the pop-up will be shown as follows.
   
   ![Excel popup](/bold-bi-docs/static/assets/embedded/working-with-dashboards/preview-dashboards/images/Excelpopup.png)  
   
   Set the `File Name` field with preferred value to replace the default one.
   
   Choose the `Format` as either Excel Workbook (*.xlsx) or Excel 97-2003 Workbook (*.xls).
   
   ![Excel export](/bold-bi-docs/static/assets/embedded/working-with-dashboards/preview-dashboards/images/Excelexport.png)
   
   Click `Export` to display the data in the dashboard in chosen Excel format.
   
   ![Excel reset](/bold-bi-docs/static/assets/embedded/working-with-dashboards/preview-dashboards/images/Excelreset.png)
   
   Click `Reset` to restore the default values in the pop-up.
   
## Updating dashboard

   You can update the dashboard manually by clicking the `Update Dashboard` at right corner of the title section.
    
   ![Update dashboard in viewer](/bold-bi-docs/static/assets/embedded/working-with-dashboards/preview-dashboards/images/updatedashboardinviewer.png)
    
   This updates the dashboard with the browser cached data view, which will remain for 10 minutes. After updated the dashboard, the updated data will be fetched from the data server and stored in the cache.