---
layout: post
title:  Configure Cross-Origin Resource Sharing (CORS) | Bold BI Docs
description: Learn about how to configure CORS(Cross-Origin Resource Sharing) settings and how to customize it in Bold BI embedded application.
platform: bold-bi
documentation: ug
---

# Cross Origin Resource Sharing Configuration

Think about a situation in which you want to update user information in Bold BI using a web app that is hosted in a different domain. To achieve this, you must make an API request from your web app, which is hosted in a different domain, to the Bold BI API domain. However, what if a fraudster uses an application interface that is identical to yours and utilizes this API to gain access to user data? The correct CORS configuration will prevent this type of attack and protect your application.

CORS is a browser security feature known as cross-origin resource sharing (CORS), which restricts cross-origin HTTP requests made by a browser. When an HTTP request is sent to a domain, sub-domain, port, or protocol different from the one it originated from, it is considered a cross-origin request.

## How its works?

Browsers limit cross-origin HTTP requests due to security concerns. For example, when a browser requests data from one site to another, it makes cross-origin requests. The browser sends a **pre-flight** HTTP request with the **OPTIONS** method to the resource on the other domain before sending the actual request. This is done to ensure the safety of submitting the actual request. In the pre-flight request, the server includes headers in the responses it provides.

These headers are the pre-flight response:
    
* Access-Control-Allow-Origin
* Access-Control-Allow-Methods
* Access-Control-Allow-Headers
* Access-Control-Allow-Credentials
* Access-Control-Expose-Headers
* Access-Control-Max-Age

Based on the header values, the browser determines whether to send the actual request or not. Otherwise, the browser will throw a CORS error and will not send the actual request.

> **Important:** Bold BI uses CORS for `XMLHttpRequest` or `Fetch` requests to avoid the risks of cross-origin HTTP requests. This will not affect the iFrame-based embedding since this request will be considered as a document request, not an `XMLHttpRequest` or `Fetch` request.

## Default CORS policy in Bold BI

The default CORS policy automatically allows all cross-origin requests from cross-domains with different origins, methods, and headers.

## Enabling CORS in Bold BI

The default CORS policy is used until you enable and customize the CORS settings in Bold BI. Please follow the steps below to enable CORS and customize it in Bold BI.

### Steps to enable CORS

1. Please go to the administration page on the Bold BI site and click on the `CORS Policy` tab. Here, you can configure the CORS settings headers.

    ![CORS settings](/static/assets/security-configuration/images/cors-settings.png#width=45%)

2. By default, it is disabled. You should enable the `Customize CORS Policy` option if you want to configure a custom CORS policy.

    ![Cistomize CORS policy](/static/assets/security-configuration/images/customize-cors-policy.png#width=45%)

3. The application will include the value from the `Allowed Origins` field in the pre-flight response Access-Control-Allow-Origin header. The application will check the incoming origin value and include this origin in the `Access-Control-Allow-Origin` header like `Access-Control-Allow-Origin: <origin>` if it is added to the Allowed Origins field. If no value is updated in this field, then it will include a wildcard origin value in the header like `Access-Control-Allow-Origin: *`.<br/><br/>A web browser will grant access to the actual request response if the `Access-Control-Allow-Origin` and the origin of the requesting website match or the `Access-Control-Allow-Origin` header has a wildcard origin value.

      ![Allowed Origins](/static/assets/security-configuration/images/allowed-origins.png#width=45%)

4. The application will include the value from the `Allowed Methods` field in the pre-flight response Access-Control-Allow-Methods header like `Access-Control-Allow-Methods: <method>, <method>`. If no value is updated in this field, then it will include a wildcard method value in the header like `Access-Control-Allow-Methods: *`.<br/><br/> A web browser will grant access to the actual request response if the `Access-Control-Allow-Methods` header contains the requesting method or if the `Access-Control-Allow-Methods` header has a wildcard allow method value.

    ![Allowed Methods](/static/assets/security-configuration/images/allowed-methods.png#width=45%)

5. The application will include the value from the `Allowed Headers` field in the pre-flight response Access-Control-Allow-Headers header like `Access-Control-Allow-Headers: <header name>, <header name>`. If no value is updated in this field, then it will include a wildcard method value in the header like `Access-Control-Allow-Headers: *`.<br/><br/>If you send a custom request header with the request, the web browser will grant access to the actual request response if the `Access-Control-Allow-Headers` contains the custom request headers or if the `Access-Control-Allow-Headers` header has a wildcard allow header value.

    ![Allowed Headers](/static/assets/security-configuration/images/allowed-headers.png#width=45%)

6. CORS automatically excludes cookies from cross-origin requests as a default behavior. This sets it apart from other cross-origin methods such as JSON-P, which always includes cookies in the request. This practice of including cookies in JSON-P requests exposes systems to a type of security vulnerabilities called cross-site request forgery (CSRF).<br/><br/>When we set "allow credentials" to true, the CORS response will be sent with the header `Access-Control-Allow-Credentials: true`. This informs the browser that both the server and the client must agree to include cookies in the request. As a result, cookies become a deliberate choice rather than an uncontrollable, passive event.

    ![Allow Crdentials](/static/assets/security-configuration/images/allow-credentials.png#width=45%)

7. Application will include the value from the `Expose Headers` field in the pre-flight response Access-Control-Expose-Headers header like `Access-Control-Expose-Headers: <header name>, <header name>`. If no value is updated in this field, then it will include a wildcard header value in the header like `Access-Control-Expose-Headers: *`.<br/><br/>If the `Access-Control-Expose-Headers` contains response headers or a wildcard value for the exposed header, the web browser is able to access and read the response header at the script level. By default, only the response headers that are deemed safe according to CORS guidelines are exposed, such as `Cache-Control` and `Content-Type`.

    ![Expose Headers](/static/assets/security-configuration/images/expose-headers.png#width=45%)

8. The application will include the value from the pre-flight Max-Age field in the pre-flight response's `Access-Control-Max-Age` header, like `Access-Control-Max-Age: <delta-seconds>`. If no value is updated in this field, then it will include a default value in the header, like `Access-Control-Max-Age: 5`.<br/><br/>The value in the response header indicates the duration for which the results of a pre-flight request (specifically the information in the Access-Control-Allow-Methods and Access-Control-Allow-Headers) can be cached in the browser.

    ![Preflight max-age](/static/assets/security-configuration/images/preflight-max-age.png#width=45%)