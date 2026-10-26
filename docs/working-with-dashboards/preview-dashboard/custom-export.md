---
layout: post
title: Export Customization in Server Level | Bold BI Docs
description: "Learn how to enable custom export settings in Bold BI, so users can customize how a dashboard or widget is exported at runtime to PDF, image, Excel, or CSV."
canonical: "/working-with-dashboards/preview-dashboard/custom-export/"
platform: bold-bi
documentation: ug
---

# Export Customization

This section explains how to customize the dashboard or widget export for image, PDF, Excel, and CSV in Bold BI.
Here, you can make some of your customization, like below,

1. Add watermark text in image, PDF, and Excel.

2. Add branding text with logo in image and PDF.

3. Change the name of the files being exported for image and PDF.

4. Change the format of the data points in the Excel and CSV file.

## Customization requirements

Create a class library using `C#` with base class of `CustomExportBase` using `BoldBI.Dashboard.Service.Extensions` DLL that will hold the export file info to modify or customize the exported Excel, CSV, image, and PDF files.

## How Can We Get BoldBI.Dashboard.Service.Extensions DLL?

1. Go to your application installed location and navigate to `bi\dataservice` folder.

2. Here, you can see `BoldBI.Dashboard.Service.Extensions` DLL.

   ![Custom export dll](/static/assets/working-with-dashboards/preview-dashboards/images/customexportdll.png)

3. Add that DLL to your class library by right-clicking the dependency on your class library project.

4. Now use `CustomExportBase` as your base class in your created class library and you are able to get exported Excel, CSV, image, and PDF files.

> **NOTE:** By default, Bold BI is deployed in `C:\BoldServices` for Windows and `/var/www/bold-services/application` for Linux.

## Where and What Will Be the Exported File After Base Class Inherited?

By using `BoldBI.Dashboard.Service.Extensions.CustomExport` namespace you can access custom export methods.

### Excel

After adding namespace, for Excel customization, you can use `CustomizeExcelAsync` method. In this, we have two parameters.

1. The first parameter contains file data in `Byte[]` format.

2. The second parameter contains export details like below in `Dictionary<string, object>` data type.

    ```csharp
    var exportDetails = new Dictionary<string, object>
    {
        {"widgetUniqueName", ""},
        {"hasExcelWithImage", ""},
        {"extension", "" },
        {"isFromViewData", "" },
        {"tenantInfo", "" }
    };
    ```

    **widgetUniqueName** – This property holds the unique name of the widgets present in the export file. And it will be in `List<string>` data type.

    **hasExcelWithImage** – This property holds the Excel has image widget or not. And it will be in the `Boolean` data type.

    **extension** – This property holds the extension of the export file extension like xlsx or xls. And it will be in the `String` data type.

    **isFromViewData** – This property holds the Boolean info like the export is from view underlying data or not. And it will be in the `Boolean` data type.

    **tenantInfo** – This property holds the exporting tenant ID and URL. And it will be in `CustomExportTenantInfo` class structure. Use the class by using `BoldBI.Dashboard.Service.Extensions.CustomExport.Model` namespace in your library.

### CSV

After adding namespace, for CSV customization, you can use `CustomizeCsvAsync` method. In this, we have two parameters.

1. The first parameter contains file data in `Byte[]` format.

2. The second parameter contains export details like below in `Dictionary<string, object>` data type.

    ```csharp
    var exportDetails = new Dictionary<string, object>
    {
        {"widgetUniqueName", "" },
        {"extension", "" },
        {"isFromViewData", "" },
        {"tenantInfo", ""}
    };
    ```

    **widgetUniqueName** – This property holds the unique name of the widgets present in the export file. And it will be in `List<string>` data type.

    **extension** – This property holds extensions of the export file extension like csv or zip. And it will be in the `String` data type.

    **isFromViewData** – This property holds the boolean info like the export is from view underlying data or not. And it will be in the `Boolean` data type.

    **tenantInfo** – This property holds the exporting tenant ID and URL. And it will be in `CustomExportTenantInfo` class structure. Use the class by using `BoldBI.Dashboard.Service.Extensions.CustomExport.Model` namespace in your library.

### Image

After adding namespace, for image customization, you can use `CustomizeImageAsync` method. In this, we have two parameters.

1. The first parameter contains file data in `Byte[]` format.

2. The second parameter contains export details like below in `Dictionary<string, object>` data type.

    ```csharp
    var exportDetails = new Dictionary<string, object>
    {
        {"fileName", "" },
        {"widgetDetails", "" },
        {"isWidgetExport", "" },
        {"dpi", "" },
        {"extension", "" },
        {"hasBingMapsConfigured", "" },
        {"hasCustomWidgetConfigured", "" },
        {"tenantInfo", "" }
    };
    ```

    **filename** – This property holds an export file name you can change. And it will be in the `String` data type.

    **widgetDetails** – This property holds the widget's unique name and widget title of the widgets present in the export file. It will be in the `List<CustomExportWidgetInfo>` class structure type. Use the class using `BoldBI.Dashboard.Service.Extensions.CustomExport.Model` namespace in your library.

    **isWidgetExport** – This property holds the widget or dashboard that was exported. And it will be in the `String` data type.

    **dpi** – This property holds the dpi info of the image. And it will be in the `Double` data type.

    **extension** – This property holds the extension of the export file extension like png or jpg. And it will be in the `String` data type.

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
        {"fileName", "" },
        {"widgetDetails", "" },
        {"pageSize", "" },
        {"pageLayout", "" },
        {"numberOfPages", "" },
        {"isWidgetExport", "" },
        {"exportMode", "" },
        {"isCurrentView", "" },
        {"hasBingMapsConfigured", "" },
        {"hasCustomWidgetConfigured", "" },
        {"tenantInfo", "" }
    };
    ```

    **filename** – This property holds an export file name you can change. And it will be in the `String` data type.

    **widgetDetails** – This property holds the widget's unique name and widget title of the widgets present in the export file. It will be in the `List<CustomExportWidgetInfo>` class structure type. Use the class using `BoldBI.Dashboard.Service.Extensions.CustomExport.Model` namespace in your library.

    **pageSize** – This property holds the size of the PDF page export like A3, A4, A5 or Letter. And it will be in the `String` data type.

    **pageLayout**  – This property holds the PDF export layout like portrait or landscape. And it will be in the `String` data type.

    **numberOfPages** – This property holds the number of pages in the PDF export. And it will be in the `Float` data type.

    **isWidgetExport** – This property holds the widget or dashboard that was exported. And it will be in the `String` data type.

    **exportMode** – This property holds info of Dashboard or Widget page wise export in dashboard PDF export. And it will be in the `String` data type.

    **isCurrentView** – This property holds that info of widget current view was exported or not. And it will be in the `Boolean` data type.

    **hasBingMapsConfigured** – This property holds the boolean info like the export file contains Bing map widget or not. And it will be in the `Boolean` data type.

    **hasCustomWidgetConfigured** – This property holds the boolean info like the export file contains custom widget or not. And it will be in the `Boolean` data type.

    **tenantInfo** – This property holds the exporting tenant ID and URL. And it will be in `CustomExportTenantInfo` class structure. Use the class by using `BoldBI.Dashboard.Service.Extensions.CustomExport.Model` namespace in your library.

> **NOTE:** After the export file is customized, you need to return modified file data as `Byte array`.

## How to Add Class Library with Bold BI? 

1. Create a `handlers` folder in the following `app_data/bi/dataservice` folder.

2. After export customization, the generated library needs to be compiled and moved as `DLL` to the `handlers` folder.

3. You also need to move the DLL of the packages used in the class library to customize the export.

4. Create `handler_config.json` in the handlers folder.

4. And in the handler_config.json file, add the following code to register the newly created library with the export event.

    ```json
    [{
    "feature":"export",
    "handler":"export_handler_name.dll",
    "tenants":[]
    }]
    ```

> **NOTE:** After the DLL is moved and handler_config.json is added in the handlers folder, you need to `restart` the `IIS` to reflect the changes in `BoldBI`.