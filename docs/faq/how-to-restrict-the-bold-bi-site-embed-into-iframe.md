---
layout: post
title: Disable iFrame Embedding of Bold BI | Bold BI Documentation
description: Learn how to disable embedding Bold BI site or its dashboards into another application using iFrame.
platform: bold-bi
documentation: ug
---

# How to restrict embedding Bold BI site using an iFrame?

In order to prevent embedding a Bold BI site into another application using an iFrame, the X-Frame-Options must be set to Deny in the response header.

 Currently, the [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) Header is not added in the Bold BI Application as [iFrame based embedding](/embedding-options/iframe-embedding/embedding-a-dashboard/) is one of the types of embedding solutions in our [Embedded BI](/overview/) to embed the dashboards into another application.

Follow the steps below to add the X-Frame-Options in the response headers of the Bold BI server.

1. Open the Web.config file and add an X-Frame-Options header as shown below within the `system.webServer` module.

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

Since we have various distributed applications in Bold BI, we have to set the X-Frame-Options response header in the deployed applications below.

> **NOTE:** By default, the Bold BI is deployed in  "C:\BoldServices" for Windows.

| Applications       	| File Locations                                                  |
|-------------------	|-----------------------------------------------------------      |
| Identity Provider 	| **`{Deployed Location}`**\idp\web\Web.config               	  |
| Identity Provider API	| **`{Deployed Location}`**\idp\api\Web.config                    |
| BOLD BI Server  	    | **`{Deployed Location}`**\bi\Web.config	                      |
| BOLD BI Server API 	| **`{Deployed Location}`**\bi\api\Web.config	                  |
| Designer Service  	| **`{Deployed Location}`**\bi\dataservice\Web.config 	          |