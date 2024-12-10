---
layout: post
title: Embedding Analytics with React and Python | Bold BI Docs
description: Learn how to embed an analytics dashboard with a Python and React application using Bold BI Embed SDK and try it yourself.
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards embedding in React with Python using Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/react-with-python) the sample application, which demonstrates the dashboard rendering in your Bold BI server and followed by steps to create a new embedding application in `React` with `Python` on your own.

> **NOTE:** The best way to get started would be to read the [Getting Started](/getting-started/embedding-in-your-application/) section of the documentation first. The Getting Started guide provides enough information that you need to know before working on the sample.      

## Prerequisites

 * [Python installer](https://www.python.org/downloads/)
 * [Visual Studio Code](https://code.visualstudio.com/download)
 * [Python extension in VS code](https://marketplace.visualstudio.com/items?itemName=ms-python.python)

 ## How to run the sample

 1. Please get the [React with Python](https://github.com/boldbi/react-with-python)  sample from GitHub.

 2. The React application acts as a client, and the Python application acts as a server. In the `models.py` file of the Python application, you need to set the User Email and User Password properties.

    <meta charset="utf-8"/>
    <table>
    <tbody>
        <tr>
            <td align="left">UserEmail</td>
            <td align="left">UserEmail of the Admin in your Bold BI, which would be used to get the dashboard list.</td>
        </tr>
        <tr>
            <td align="left">User Password</td>
            <td align="left">Password of the Admin in Bold BI, which will be used to get the dashboards list.</td>
        </tr>
    </tbody>
    </table>

 3. Once you have provided the details, run the application using the command "python manage.py runserver." The application will be running on port number 8000.

 4. Then, once you run your Python application, you will see results similar to those of the React application.

    ![Python Backend API](/static/assets/javascript/sample/images/react-with-python-backend.png)

 5. To run the React application, we need to set the following properties in the DashboardListing.js file:

    ![DashboardListing](/static/assets/javascript/sample/images/react-with-python-dashboardlisting.png)

    <meta charset="utf-8"/>
    <table>
    <tbody>
    <tr>
        <td align="left">SiteIdentifier</td>
            <td align="left">For the Bold BI Enterprise edition, it should be like `site/site1`. For Bold BI Cloud, it should be an empty string.</td>
        </tr>
        <tr>
            <td align="left">RootUrl</td>
            <td align="left">Dashboard Server URL (Eg: http://localhost:5000/bi, http://demo.boldbi.com/bi).</td>
        </tr>
        <tr>
            <td align="left">Authorization URL</td>
            <td align="left">Provide the API end point(get_embed_details) of python application.</td>
        </tr>
        <tr>
            <td align="left">Environment</td>
            <td align="left">Your Bold BI application environment. (If Cloud, you should use `cloud,` if Enterprise, you should use `onpremise`).</td>
        </tr>
        <tr>
            <td align="left">API Host</td>
            <td align="left">URL of python application(example: http://localhost:8000/).</td>
        </tr>
        <tr>
            <td align="left">UserEmail</td>
            <td align="left">UserEmail of the Admin in your Bold BI, which would be used to get the dashboard list.</td>
        </tr>
        <tr>
            <td align="left">User Password</td>
            <td align="left">Password of the Admin in Bold BI, which will be used to get the dashboards list.</td>
        </tr>
    </tbody>
    </table>

 6. Once you provide these details, run the command “npm install.” After all the packages are installed, run the command “npm start.”

    ![React with Python](/static/assets/javascript/sample/images/react-with-python-alldashboard.png)

## How this sample works

 1. In the React application, we use the `BoldBI.create()` method, which includes the dashboard details and server information. The `authorizationServerURL` API member has been provided with a Python application that uses the `get_embed_details` method.

    ![Render dashboard](/static/assets/javascript/sample/images/react-with-python-renderdashboard.png)

 2. The get_embed_details API is the intermediary that contacts the Bold BI application to retrieve the dashboard details. Once the details are retrieved, they are sent to the Embed SDK for rendering the dashboard.

    ![Get Embed Details](/static/assets/javascript/sample/images/react-with-python-getembeddetails.png)  

 3. In the above authorization, the Signature URL has been generated using the provided Embed Secret key, and the embed details have been validated in Bold BI. Once the details are validated, the dashboard begins to render.

    ![Get Signature Url](/static/assets/javascript/sample/images/react-with-python-getsignatureurl.png)
