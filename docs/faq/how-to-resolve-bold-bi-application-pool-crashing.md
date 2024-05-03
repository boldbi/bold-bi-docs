---
layout: post
title: App Pool Crash with Brotli Compression – Fix | Bold BI Docs
description: Learn how to resolve Bold BI application pool crashing that occurred due to Brotli Compression scheme.
platform: bold-bi
documentation: ug
---

# How to resolve Bold BI application pool crashing?
In this post, we will explain how to resolve the issue of the Bold BI application pool crashing, which is caused by the Brotli Compression scheme.

Brotli is a compression algorithm developed by Google for text compression.

If you have installed the Brotli `Compression` HTTP module for IIS on your machine, the Brotli compression references will be added in the following three sections of your `ApplicationHost.config` file: 

* globalModules

* modules

* httpCompression

The `Brotli Compression` is a 64-bit dll and it could cause the `Bold BI` 32-bit application to crash due to the bit difference. Therefore, you need to exclude the Brotli references for the Bold BI application.

To remove the `Brotli Compression` references, follow the steps below:

1. Go to the location `C:\Windows\System32\inetsrv\Config\applicationHost.config`.

2. Open the `applicationHost.config` file and locate the Brotli compression references added in the sections mentioned above.

   **globalModules reference**

    ```xml
      </globalModules>

      <add name="BrotliCompressionModule" image="%Windir%\system32\inetsrv\IisBrotli.dll" preCondition="bitness64" />

      </globalModules>
    ```
   **modules reference**

      ```xml
      <location path="" overrideMode="Allow">

      <system.webServer>
	      <modules>
          <add name="BrotliCompressionModule" preCondition="managedHandler,runtimeVersionv4.0" />
	      </modules>        
      </system.webServer>

      </location>
    ```
    **httpCompression reference**

      ```xml

      <httpCompression      directory="%SystemDrive%\inetpub\temp\IIS Temporary Compressed Files">
      <scheme name="br" dll="%Windir%\system32\inetsrv\IisBrotli.dll" staticCompressionLevel="5" dynamicCompressionLevel="5" />
      </httpCompression>

      ```

3. Now, you need to remove those references from your file and save it before running the BOLD BI application without any issues.

4. Afterwards, manually start the `Application pool` in your IIS manager for the following,
![Application pool](/static/assets/faq/images/application-pool-in-iis.png)




