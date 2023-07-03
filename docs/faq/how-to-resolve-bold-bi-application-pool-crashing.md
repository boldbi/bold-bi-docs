---
layout: post
title: App Pool Crash with Brotli Compression – Fix | Bold BI Docs
description: Learn how to resolve Bold BI application pool crashing that occurred due to Brotli Compression scheme.
platform: bold-bi
documentation: ug
---

# How to resolve Bold BI application pool crashing?
In this post, we are going to explain how to resolve Bold BI application pool crashing which occurred due to Brotli Compression scheme.

Brotli is the compression algorithm developed by Google for text compressions.

If you installed the `Brotli Compression` HTTP module for IIS in your machine, the brotli compression references would be added in below three sections in your `ApplicationHost.config` file, 

* globalModules

* modules

* httpCompression

The `Brotli Compression` is a 64bit dll and it could stop the `Bold BI` 32bit application due to its bit difference. So you need to exclude the Brotli references for Bold BI application.

Follow the below steps to remove the `Brotli Compression` references,

1. Go to the `C:\Windows\System32\inetsrv\Config\applicationHost.config` location.

2. Open the `applicationHost.config` file and you can see the brotli compression references which are added in the below sections,

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

3. Now, you have to remove those references from your file and then save it for running the BOLD BI application without any issues.

4. Then manually start the `Application pool` in your IIS manager for the below,
![Application pool](/static/assets/faq/images/application-pool-in-iis.png)




