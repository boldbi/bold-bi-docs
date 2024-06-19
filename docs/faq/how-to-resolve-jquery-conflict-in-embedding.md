---
layout: post
title: Resolve jQuery version conflict issue in embedding | Bold BI
description: Learn how to resolve the jQuery version conflict issue when using a higher version of jQuery in your Web application with the Bold BI Embedded dashboard.
platform: bold-bi
documentation: ug
---

# jQuery conflict issue in embedding

Bold BI Embedded has a known issue when the jQuery version reference is greater than the recommended version `(v1.10.2)`. You can resolve this by using the `jQuery.noConflict()` function to render the dashboard rendered with the jQuery `v1.10.2`.

## Follow these steps to resolve the `jQuery conflict` issue

You have to use the following `jQuery.noConflict` function in your embed application instead of default reference mentioned on our Bold BI [help documentation](/embedded-bi/javascript-based/getting-started/#how-to-use-bold-bi-wrapper-inside-your-html-page).

```js
<head> 
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> <!--jQuery version recommended for Bold BI--> 
    <script type="text/javascript">window.bb$ = jQuery.noConflict();</script> 
    <script> 
        bb$(document).ready(function () { 
            bb$.getScript('https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js'); 
        }); 
    </script> 
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jsrender/1.0.0-beta/jsrender.min.js"></script> 
    <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v4.1.36/embed-js.js"></script> 
    
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> <!--3.6.0 version of jQuery -->
    <script type="text/javascript"> bb$.easing = $.easing = jQuery.easing </script>
</head>
```


