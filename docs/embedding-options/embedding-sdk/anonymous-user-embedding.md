---
layout: post  
title: Anonymous User – JavaScript Embedding | Bold BI Docs  
description: Learn how to use anonymous user in the JavaScript-based embedding of Bold BI dashboards in any of your business or web applications.  
platform: bold-bi  
documentation: ug  
---

# Anonymous User

When embedding Bold BI dashboards into your application for users who are not directly provisioned within the Bold BI platform, you can still maintain secure and personalized access using Row-Level Security (RLS). RLS allows you to dynamically filter the data users see, ensuring they only access information relevant to their role, organization, or identity — without requiring them to be explicitly added to the Bold BI system.

Managing thousands of users directly in Bold BI would be time-consuming and unnecessary. Instead, you use anonymous embedding to embed dashboards seamlessly into your application — and enforce Row-Level Security (RLS) rules based on the user’s identity.

## Steps to Implement in SDK-based Embedding

To embed the dashboard using SDK-based embedding for an anonymous user, please follow these steps:

1. Enable the system user option on the UMS Accounts page to work with anonymous users. Once enabled, save the changes. This user will be added only to the Bold BI server database and will not be visible in the Bold BI users list.

    ![Systemuser](/static/assets/javascript/images/enable-systemuser-ums.png)

2. Create a new group without adding any users and provide the necessary permissions.  

    ![grouplist](/static/assets/javascript/images/grouplist-site.png)

    ![grouppermission](/static/assets/javascript/images/grouppermission.png)

3. You can enable anonymous user support using any of our [embedding samples](https://help.boldbi.com/embedding-options/embedding-sdk/samples/). For this demonstration, we’ll use the [ASP.NET Core](https://help.boldbi.com/embedding-options/embedding-sdk/samples/asp-net-core/) sample.

4.  In the `Index.cshtml` file, the provided div container can be used to display the dashboard. Additionally, a URL action method for the authorization server, which is defined in the `HomeController.cs` file, is called from the JavaScript code.

    ```js
    <script type="text/javascript">
        var authorizationServerUrl = "@Url.Action("AuthorizationServer", "Home")";
    </script>

    <body onload="renderDashboard(dashboardId)"> 
        <div id="viewer-section">
            <div id="dashboard"></div>
        </div>
    </body>
    ```

5. In `Index.js` file, the **renderDashboard()** method will be used to render the dashboard in the specified container by creating a Bold BI instance and calling the **loadDashboard()** method.

    ```js
    function renderDashboard(dashboardId) {
        this.dashboard = BoldBI.create({
            serverUrl: rootUrl + "/" + siteIdentifier, // Bold BI Server URL with site identifier (Eg: http://localhost:5000/bi/site/site1).
            dashboardId: dashboardId, // Provide the dashboard id of the dashboard you want to embed here.
            embedContainerId: "dashboard", // dashboard container id.
            width: "100%",
            height: "100%",
            authorizationServer: {
                url: authorizationServerUrl
            }
        });

        this.dashboard.loadDashboard();
    };
    ```

6. Use the parameters below to check the functionality of the anonymous user in the authorization server section, which can be found in the `HomeController.cs` file.

    <table>
    <thead>
        <tr>
        <th>Parameter</th>
        <th>Description</th>
        <th>Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>embed_user_email</code></td>
            <td>Provide an anonymous user email who are not available in the Bold BI Server</td>
            <td>&embed_user_email=anonymoususer@domain.com</td>
        </tr>
        <tr>
            <td><code>embed_anonymous_token</code></td>
            <td>Provide true or false to allow the anonymous user can embed the dashboard in embedding.</td>
            <td>&embed_anonymous_token=true</td>
        </tr>
        <tr>
            <td><code>embed_authorize_group</code></td>
            <td>Provide the group name which will access by the anonymous user.</td>
            <td>&embed_authorize_group=Alpha</td>
        </tr>
    </tbody>
    </table>

    ```C#
    [HttpPost]
    [Route("AuthorizationServer")]
    public string AuthorizationServer([FromBody] object embedQuerString)
    {
        var embedClass = Newtonsoft.Json.JsonConvert.DeserializeObject<EmbedClass>(embedQuerString.ToString());

        var embedQuery = embedClass.embedQuerString;

        // Use any anonymous user-email as embed_user_email
        embedQuery += "&embed_user_email=anonymoususer@domain.com";
        
        embedQuery += "&embed_anonymous_token=true&embed_authorize_group=Alpha";

        //To set embed_server_timestamp to overcome the EmbedCodeValidation failing while different timezone using at client application.
        double timeStamp = (int)DateTime.UtcNow.Subtract(new DateTime(1970, 1, 1)).TotalSeconds;
        embedQuery += "&embed_server_timestamp=" + timeStamp;
        var embedDetailsUrl = "/embed/authorize?" + embedQuery + "&embed_signature=" + GetSignatureUrl(embedQuery);

        using (var client = new HttpClient())
        {
            client.BaseAddress = new Uri(embedClass.dashboardServerApiUrl);
            client.DefaultRequestHeaders.Accept.Clear();

            var result = client.GetAsync(embedClass.dashboardServerApiUrl + embedDetailsUrl).Result;
            string resultContent = result.Content.ReadAsStringAsync().Result;
            return resultContent;
        }
    }
    ```

7. Render the dashboard viewer. The dashboard is being rendered using the anonymous user.

    ![dashboard](/static/assets/javascript/images/anonymoususer-dashboard.png)

8. You can also see the details of anonymous users in the [Dashboard Usage Analytics](https://help.boldbi.com/site-administration/usage-analytics-dashboard/) dashboard.

    ![usageanalytics-dashboard](/static/assets/javascript/images/usage-analytics-dashboard.png)

>**Note:** Support for anonymous users is provided only for the single dashboard viewer from the Bold BI Version 10.1.18.