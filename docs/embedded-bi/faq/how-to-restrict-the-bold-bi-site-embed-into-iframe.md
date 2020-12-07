---
layout: post
title: Disable iFrame Embedding of Bold BI | Bold BI Documentation
description: Learn how to disable embedding Bold BI site or its dashboards into another application using iFrame.
platform: bold-bi
documentation: ug
---

# How to restrict embedding Bold BI site using an iFrame?

To restrict embedding Bold BI site into another application using an iFrame, we have to set the X-Frame-Options as Deny in the response header.

At present [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) Header is not added in the Bold BI Application as [iFrame based embedding](/embedded-bi/iframe-based/dashboard-view-mode/) is one of the types of embedding solutions in our [Embedded BI](/embedded-bi/overview/) to embed the dashboards into another application.

Follow the below step to add the X-Frame-Options in response headers of Bold BI server.

1. Open the Web.config file and add an X-Frame-Options header like below with in `system.webServer` module,

```js
    <system.webServer>
        <httpProtocol>
            <customHeaders>
                <add name="Access-Control-Allow-Origin" value="*" />
                <add name="X-Frame-Options" value="Deny" />
            </customHeaders>
        </httpProtocol>
    </system.webServer>
```

## Web.config Directories

Since we have various distributed applications in Bold BI, We have to set the X-Frame-Options response header in the below deployed applications.

> **NOTE:**  By default, the Bold BI is deployed in "C:\BoldBI".

| Applications       	| File Locations                                                  |
|-------------------	|-----------------------------------------------------------      |
| Identity Provider 	| **`{Deployed Location}`**\IDP\Web.config               	      |
| Identity Provider API	| **`{Deployed Location}`**\IDP\API\Web.config                    |
| BOLD BI Server  	    | **`{Deployed Location}`**\Dashboard Server\Web.config	          |
| BOLD BI Server API 	| **`{Deployed Location}`**\Dashboard Server\API\Web.config	      |
| Designer Service  	| **`{Deployed Location}`**\Dashboard Designer\Web.config 	      |
