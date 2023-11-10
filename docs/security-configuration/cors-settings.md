---
layout: post
title:  Configure Cross-Origin Resource Sharing (CORS) | Bold BI Docs
description: Learn about how to configure CORS(Cross-Origin Resource Sharing) settings and how to customize it in Bold BI embedded application.
platform: bold-bi
documentation: ug
---

# Cross Origin Resource Sharing Configuration

Think about a situation where you want to update the user information in Bold BI using a web app that is hosted in a different domain. To accomplish this, you must make an API request from your web app, which is hosted in a different domain, to the Bold BI API domain. However, what if a fraudster uses an application interface that is identical to yours and uses this API to access user data? Right CORS configuration will stop this kind of attack and secure your application.

COSR is a browser security feature called cross-origin resource sharing (CORS) that limits cross-origin HTTP requests made by a browser. Whenever an HTTP request is sent to a different domain, sub-domain, port, or protocol, it is referred to as a cross-origin request.

## How its works?

Browsers limit cross-origin HTTP requests for security concerns. For instance, cross-origin requests, are made by the browser when it requests data from one site to another. The browser sends a **pre-flight** HTTP request with the **OPTIONS** method to the resource on the other domain before the actual request is sent, in order to check whether it is safe to submit the actual request or not. For the pre-flight request, the server includes some headers in the responses it provides.

These are the pre-flight response headers:
    
* Access-Control-Allow-Origin
* Access-Control-Allow-Methods
* Access-Control-Allow-Headers
* Access-Control-Allow-Credentials
* Access-Control-Expose-Headers
* Access-Control-Max-Age

Based on the header values, the browser decides whether to send the actual request or not. Otherwise, the browser will throw a CORS error and not send the actual request.

> **Important:** Bold BI uses CORS for `XMLHttpRequest` or `Fetch` requests to avoid the risks of cross-origin HTTP requests. This will not affect the iFrame based embedding since this request will be consider as the document request not `XMLHttpRequest` or `Fetch` request.

## Default CORS policy in Bold BI

The default CORS policy automatically allows all cross-origin requests from cross-domains with different origins, methods, and headers.

## Enabling CORS in Bold BI

The default CORS policy is used until you enable and customize the CORS settings in Bold BI. Please follow the steps below to enable CORS and customize it in Bold BI.

### Steps to enable CORS

1. Go to the administration page in the Bold BI site and click the `CORS Policy` tab. Here you can configure CORS settings headers.

    ![CORS settings](/static/assets/security-configuration/images/cors-settings.png#width=45%)

2. By default it is disabled. You should enable the `Customize CORS Policy` option if you want to configure a custom CORS policy.

    ![Cistomize CORS policy](/static/assets/security-configuration/images/customize-cors-policy.png#width=45%)

3. The application will include the value from the `Allowed Origins` field in the pre-flight response Access-Control-Allow-Origin header. The application will check the incoming origin value and include this origin in the `Access-Control-Allow-Origin` header like `Access-Control-Allow-Origin: <origin>` if it is added to the Allowed Origins field. If no value is updated in this field, then it will include a wildcard origin value in the header like `Access-Control-Allow-Origin: *`.<br/><br/>A web browser will grant access to the actual request response if the `Access-Control-Allow-Origin` and the origin of the requesting website match or the `Access-Control-Allow-Origin` header has a wildcard origin value.

      ![Allowed Origins](/static/assets/security-configuration/images/allowed-origins.png#width=45%)

4. The application will include the value from the `Allowed Methods` field in the pre-flight response Access-Control-Allow-Methods header like `Access-Control-Allow-Methods: <method>, <method>`. If no value is updated in this field, then it will include a wildcard method value in the header like `Access-Control-Allow-Methods: *`.<br/><br/> A web browser will grant access to the actual request response if the `Access-Control-Allow-Methods` header has the requesting method or the `Access-Control-Allow-Methods` header has a wildcard allow method value.

    ![Allowed Methods](/static/assets/security-configuration/images/allowed-methods.png#width=45%)

5. The application will include the value from the `Allowed Headers` field in the pre-flight response Access-Control-Allow-Headers header like `Access-Control-Allow-Headers: <header name>, <header name>`. If no value is updated in this field, then it will include a wildcard method value in the header like `Access-Control-Allow-Headers: *`.<br/><br/>If you send a custom request header with the request, the web browser will grant access to the actual request response if the `Access-Control-Allow-Headers` has the custom request headers or the `Access-Control-Allow-Headers` header has a wildcard allow header value.

    ![Allowed Headers](/static/assets/security-configuration/images/allowed-headers.png#width=45%)

6. CORS excludes cookies from cross-origin requests by default. Unlike other cross-origin methods like JSON-P, this is unique. JSON-P always sends cookies along with the request, and this practice exposes systems to a category of security flaws known as cross-site request forgery, or CSRF.<br/><br/>When we set allow credentials as true, the CORS response will be sent with the header `Access-Control-Allow-Credentials: true`, and this tells the browser that both the server and the client must agree to include cookies in the request. By doing this, cookies become a conscious choice rather than an uncontrollable, passive event.

    ![Allow Crdentials](/static/assets/security-configuration/images/allow-credentials.png#width=45%)

7. Application will include the value from the `Expose Headers` field in the pre-flight response Access-Control-Expose-Headers header like `Access-Control-Expose-Headers: <header name>, <header name>`. If no value is updated in this field, then it will include a wildcard header value in the header like `Access-Control-Expose-Headers: *`.<br/><br/>If `Access-Control-Expose-Headers` contains response headers or a wildcard expose header value, the web browser can access or read the response header at the script level. Only the CORS safe listed response headers are exposed by default.(**example:Cache-Control, Content-Type**).

    ![Expose Headers](/static/assets/security-configuration/images/expose-headers.png#width=45%)

8. The application will include the value from the pre-flight Max-Age field in the pre-flight response `Access-Control-Max-Age` header like `Access-Control-Max-Age: <delta-seconds>`. If no value is updated in this field, then it will include a default value in the header like `Access-Control-Max-Age: 5`.<br/><br/>The response header value indicates how long the results of a pre-flight request (that is the information contained in the Access-Control-Allow-Methods and Access-Control-Allow-Headers) can be cached in the browser.

    ![Preflight max-age](/static/assets/security-configuration/images/preflight-max-age.png#width=45%)