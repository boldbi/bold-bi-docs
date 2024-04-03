---
layout: post
title: Export customization in server level | Bold BI Docs
description: Learn how to enable settings to custom export a dashboard or widget at runtime to PDF, Image, Excel, or CSV files in Bold BI Embedded.
canonical: "/working-with-dashboards/preview-dashboard/custom-export/"
platform: bold-bi
documentation: ug
---

# Export Customization

This section explains how to customize the dashboard or widget export for image, PDF, excel and CSV in Bold BI.
Here, you can make some of your customization, like below,

1. Add watermark text in image, pdf and Excel.

2. Add branding text with logo in image and pdf.

3. Change the name of the files being exported for image and pdf.

4. Change the format of the data points in the excel and csv file.

## Customization requirements

Create a class library using `C#` with base class of `CustomExportBase` using `BoldBI.Dashboard.Service.Extensions` dll that will hold the export file info to modify or customize the exported Excel, CSV, Image, and PDF files.

## How can we get BoldBI.Dashboard.Service.Extensions dll?

1. Go to your application installed location and navigate to `bi\dataservice` folder.

2. Here, you can see `BoldBI.Dashboard.Service.Extensions` dll.

   ![Custom export dll](/static/assets/working-with-dashboards/preview-dashboards/images/customexportdll.png)

3. Add that dll on you class library by right-clicking dependency on your class library project.

4. Now use `CustomExportBase` as your base class in your created class library and able to get exported Excel, CSV, Image and PDF file.

> **NOTE:** By default, Bold BI is deployed in `C:\BoldServices` for Windows and `/var/www/bold-services/application` for Linux.

## Where and what will be the exported file after base class inherited?

By using `BoldBI.Dashboard.Service.Extensions.CustomExport` namespace you can access custom export methods.

### Excel

After adding namespace, for excel customize you can use `CustomizeExcelAsync` method. In this, we have two parameters.

1. The first parameter contains file data in `Byte[]` format.

2. The second parameter contains export details like below in `Dictionary<string, object>` data type.

    ```csharp
    var exportDetails = new Dictionary<string, object>
    {
        {"widgetUniqueName", “”},
        {"hasExcelWithImage", “”}
        {"extension", “” },
        {"isFromViewData", “” },
        {"tenantInfo", “” }
    };
    ```

    **widgetUniqueName** – This property holds the unique name of the widgets present in the export file. And it will be in `List<string>` data type.

    **hasExcelWithImage** – This property holds the excel has image widget or not. And it will be in the `Boolean` data type.

    **extension** – This property holds extension of the export file extension like xlsx or xls. And it will be in the `String` data type.

    **isFromViewData** – This property holds the Boolean info like the export is from view underlying data or not. And it will be in the `Boolean` data type.

    **tenantInfo** – This property holds the exporting tenant ID and URL. And it will be in `CustomExportTenantInfo` class structure. Use the class by using `BoldBI.Dashboard.Service.Extensions.CustomExport.Model` namespace in your library.

### CSV

After adding namespace, for CSV customize you can use `CustomizeCsvAsync` method. In this, we have two parameters.

1. The first parameter contains file data in `Byte[]` format.

2. The second parameter contains export details like below in `Dictionary<string, object>` data type.

    ```csharp
    var exportDetails = new Dictionary<string, object>
    {
        {"widgetUniqueName", “” },
        {"extension", “” },
        {"isFromViewData", “” },
        {"tenantInfo", “”}
    };
    ```

    **widgetUniqueName** – This property holds the unique name of the widgets present in the export file. And it will be in `List<string>` data type.

    **extension** – This property holds extensions of the export file extension like csv or zip. And it will be in the `String` data type.

    **isFromViewData** – This property holds the boolean info like the export is from view underlying data or not. And it will be in the `Boolean` data type.

    **tenantInfo** – This property holds the exporting tenant ID and URL. And it will be in `CustomExportTenantInfo` class structure. Use the class by using `BoldBI.Dashboard.Service.Extensions.CustomExport.Model` namespace in your library.

### Image

After adding namespace, for Image customize you can use `CustomizeImageAsync` method. In this, we have two parameters.

1. The first parameter contains file data in `Byte[]` format.

2. The second parameter contains export details like below in `Dictionary<string, object>` data type.

    ```csharp
    var exportDetails = new Dictionary<string, object>
    {
        {"fileName", “” },
        {"widgetDetails", “” },
        {"isWidgetExport", “” },
        {"dpi", “” },
        {"extension", “” },
        {"hasBingMapsConfigured", “” },
        {"hasCustomWidgetConfigured", “” },
        {"tenantInfo", “” }
    };
    ```

    **filename** – This property holds an export file name you can change. And it will be in the `String` data type.

    **widgetDetails** – This property holds the widget's unique name and widget title of the widgets present in the export file. It will be in the `List<CustomExportWidgetInfo>` class structure type. Use the class using `BoldBI.Dashboard.Service.Extensions.CustomExport.Model` namespace in your library.

    **isWidgetExport** – This property holds the widget or dashboard that was exported. And it will be in the `String` data type.

    **dpi** – This property holds the dpi info of the image. And it will be in the `Double` data type.

    **extension** – This property holds extension of the export file extension like png or jpg. And it will be in the `String` data type.

    **hasBingMapsConfigured** – This property holds the Boolean info like the export file contains Bing map widget or not. And it will be in the `Boolean` data type.

    **hasCustomWidgetConfigured** – This property holds the Boolean info like the export file contains custom widget or not. And it will be in the `Boolean` data type.

    **tenantInfo** – This property holds the exporting tenant ID and URL. And it will be in `CustomExportTenantInfo` class structure. Use the class by using `BoldBI.Dashboard.Service.Extensions.CustomExport.Model` namespace in your library.

### PDF

After adding namespace, for Image customize you can use `CustomizePdfAsync` method. In this, we have two parameters.

1. The first parameter contains file data in `Byte[]` format.

2. The second parameter contains export details like below in `Dictionary<string, object>` data type.

    ```csharp
    var exportDetails = new Dictionary<string, object>
    {
        {"fileName", “” },
        {"widgetDetails", “” },
        {"pageSize", “” },
        {"pageLayout", “” },
        {"numberOfPages", “” },
        {"isWidgetExport", “” },
        {"exportMode", “” },
        {"isCurrentView", “” },
        {"hasBingMapsConfigured", “” },
        {"hasCustomWidgetConfigured", “” },
        {"tenantInfo", “” }
    };
    ```

    **filename** – This property holds an export file name you can change. And it will be in the `String` data type.

    **widgetDetails** – This property holds the widget's unique name and widget title of the widgets present in the export file. It will be in the `List<CustomExportWidgetInfo>` class structure type. Use the class using `BoldBI.Dashboard.Service.Extensions.CustomExport.Model` namespace in your library.

    **pageSize** – This property holds the size of the pdf page export like A3, A4, A5 or Letter. And it will be in the `String` data type.

    **pageLayout**  – This property holds the pdf export layout like portrait or landscape. And it will be in the `String` data type.

    **numberOfPages** – This property holds the number of pages in the pdf export. And it will be in the `Float` data type.

    **isWidgetExport** – This property holds the widget or dashboard that was exported. And it will be in the `String` data type.

    **exportMode** – This property holds info of Dashboard or Widget page wise export in dashboard pdf export. And it will be in the `String` data type.

    **isCurrentView** – This property holds that info of widget current view was exported or not. And it will be in the `Boolean` data type.

    **hasBingMapsConfigured** – This property holds the boolean info like the export file contains Bing map widget or not. And it will be in the `Boolean` data type.

    **hasCustomWidgetConfigured** – This property holds the boolean info like the export file contains custom widget or not. And it will be in the `Boolean` data type.

    **tenantInfo** – This property holds the exporting tenant ID and URL. And it will be in `CustomExportTenantInfo` class structure. Use the class by using `BoldBI.Dashboard.Service.Extensions.CustomExport.Model` namespace in your library.

> **NOTE:** After export file customized, need to return modified file data as `Byte array`.

## How to add class library with BOLD BI? 

1. Create a `handlers` folder in the following `app_data/bi/dataservice` folder.

2. After export customization, the generated library needs to be compiled and moved as `DLL` to the the `handlers` folder.

3. And also need to move the DLL of the packages used in the class library to customize the export.

4. Create `handler_config.json` in the handlers folder.

4. And in the handler_config.json file, add the below code to register the newly created library with the export event.

    ```json
    [{
    "feature":"export",
    "handler":"export_handler_name.dll",
    "tenants":[]
    }]
    ```

> **NOTE:** After dll moved and handler_config.json added in handlers folder, need to `restart` the `IIS` to reflect the changes in `BoldBI`.