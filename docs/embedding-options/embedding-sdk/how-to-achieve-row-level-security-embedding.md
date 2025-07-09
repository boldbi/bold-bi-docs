---
layout: post  
title: Row-level Security – JavaScript Embedding | Bold BI Docs  
description: Learn how to use row level security for both Bold BI and anonymous users in the JavaScript-based embedding of Bold BI dashboards in any of your business or web applications.  
platform: bold-bi  
documentation: ug  
---

# Exploring Row-Level Security for Both Bold BI Users and Anonymous Users in SDK-Based Embedding

This document explores **Row-Level Security (RLS)** in Bold BI and demonstrates how to implement RLS for both authenticated Bold BI users and anonymous users accessing dashboards through embedding. 

For **authenticated users**, we will discuss how RLS can be configured within Bold BI, ensuring that users see only the data relevant to their roles or user permissions. 

For **anonymous users**, we will explain how RLS can be configured at the embedding level, ensuring that users see only the data relevant to their roles or group permissions.

Here we explain some of the approaches that can achieve row-level security for both Bold BI users and anonymous users.

## Bold BI Users

### Custom Attribute

1. **Configure a custom attribute for authenticated users in the Bold BI Server:**

    Configure custom attributes on the Bold BI server for each authenticated user to enable filtering based on specific attribute values.

    ![Custom Attribute for Bold BI User2](/static/assets/javascript/images/custom-attribute-configureuser2.png)

2. **Create a dashboard in Bold BI using a custom attribute database:**

    Create a dashboard using the data source that includes the custom attribute database, which contains the custom attributes set during the creation of the data source.

    ![Custom Attribute in datasource](/static/assets/javascript/images/custom-attribute-configureDatasource.png)
    
    ![Design a dashboard](/static/assets/javascript/images/custom-attribute-design-dashbord.png)

3. **Embed the Bold BI Dashboard Using JavaScript:**

    Embed the Bold BI dashboard into your application using JavaScript. This allows for seamless integration and interaction with your application. Please refer to [Embedding using JavaScript](/embedding-options/embedding-sdk/embedding-using-javascript/) to learn how to embed a dashboard using JavaScript.

    In the AuthorizeAPI, pass the logged-in user's email using the following query parameter: `embed_user_email`. The dashboard will then render based on the user's information and permissions.

    ```C#
    [HttpPost]
    [Route("AuthorizationServer")]
    public string AuthorizationServer([FromBody] object embedQuerString)
    {
        var embedClass = Newtonsoft.Json.JsonConvert.DeserializeObject<EmbedClass>(embedQuerString.ToString());

        var embedQuery = embedClass.embedQuerString;
        // User your user-email as embed_user_email
        embedQuery += "&embed_user_email=lily@betaenterprise.com"; // Bold BI user email
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

    ![Lily user dashboard](/static/assets/javascript/images/lily-dashboard-ca-rls.png)

### User Filter

1. **Configure the user filter for Bold BI users in the Bold BI Server:**

    Configure the Row-Level Security user filter for the Bold BI user based on their roles in the "Configure User Filters" option.

    ![User filter for user1](/static/assets/javascript/images/rls-configurefilteruser1.png)

2. **Embed the Bold BI Dashboard Using JavaScript:**

    Embed the Bold BI dashboard into your application using JavaScript. This allows for seamless integration and interaction with your application. Please refer to [Embedding using JavaScript](/embedding-options/embedding-sdk/embedding-using-javascript/) to learn how to embed a dashboard using JavaScript.

    In the AuthorizeAPI, pass the logged-in user's email using the following query parameter: `embed_user_email`. The dashboard will then render based on the user's information and permissions.

    ```C#
    [HttpPost]
    [Route("AuthorizationServer")]
    public string AuthorizationServer([FromBody] object embedQuerString)
    {
        var embedClass = Newtonsoft.Json.JsonConvert.DeserializeObject<EmbedClass>(embedQuerString.ToString());

        var embedQuery = embedClass.embedQuerString;
        // User your user-email as embed_user_email
        embedQuery += "&embed_user_email=grace@alphaelectronics.com"; //Bold BI user email
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
   
    ![grace user dashboard](/static/assets/javascript/images/grace-dashboard-uf-rls.png)

## Anonymous Users

An anonymous user who is not available on our Bold BI Server can embed a dashboard based on group-based authorization using SDK-based embedding.

**Note:** To learn more about support for anonymous users, please refer to this [link](https://help.boldbi.com/embedding-options/embedding-sdk/anonymous-user-embedding/).

### Custom Attribute

1. **Embed the Bold BI Dashboard Using JavaScript:**

    Embed the Bold BI dashboard into your application using JavaScript. This allows for seamless integration and interaction with your application. Please refer to [Embedding using JavaScript](/embedding-options/embedding-sdk/embedding-using-javascript/) to learn how to embed a dashboard using JavaScript.

    In the AuthorizeAPI, pass the anonymous user's details and custom attribute values using the following query parameters: `embed_anonymous_token`, `embed_authorize_group`, and `embed_custom_attribute`. These parameters ensure that the dashboard renders data filtered based on the user's information and permissions.

    Below is a modified implementation example for row-level filtering using a custom attribute:
    
    ```C#
    [HttpPost]
    [Route("AuthorizationServer")]
    public string AuthorizationServer([FromBody] object embedQuerString)
    {
        var embedClass = Newtonsoft.Json.JsonConvert.DeserializeObject<EmbedClass>(embedQuerString.ToString());

        var embedQuery = embedClass.embedQuerString;
        // User your user-email as embed_user_email
        embedQuery += "&embed_user_email=eric@gammaindustries.com"; // Anonymous user email
        embedQuery += "&embed_anonymous_token=true&embed_authorize_group=Accounts_Team&embed_custom_attribute=[{'sales_analysis_db':'gamma_industries_sales_analysis'}]";
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

    ![Eric user dashboard](/static/assets/javascript/images/eric-dashboard-ca-rls.png)

    When custom attributes are applied to an embedded Bold BI dashboard, the dashboard is rendered based on the attribute database values provided. This ensures that the displayed data is personalized according to the custom attribute values for anonymous users.

### User Filter

1. **Embed the Bold BI Dashboard Using JavaScript:**

    Embed the Bold BI dashboard into your application using JavaScript. This allows for seamless integration and interaction with your application. Please refer to [Embedding using JavaScript](/embedding-options/embedding-sdk/embedding-using-javascript/) to learn how to embed a dashboard using JavaScript.

    In the AuthorizeAPI, pass the anonymous user's details, and user filter values using the following query parameters: `embed_anonymous_token`, `embed_authorize_group`, and `embed_datasource_filter`. These parameters ensure that the dashboard renders data filtered based on the user's information and group permissions.

    Below is a modified implementation example for row-level filtering using a datasource filter:

    ```C#
    [HttpPost]
    [Route("AuthorizationServer")]
    public string AuthorizationServer([FromBody] object embedQuerString)
    {
        var embedClass = Newtonsoft.Json.JsonConvert.DeserializeObject<EmbedClass>(embedQuerString.ToString());

        var embedQuery = embedClass.embedQuerString;
        // User your user-email as embed_user_email
        embedQuery += "&embed_user_email=amy@deltaindustries.com"; // Anonymous user email
        embedQuery += "&embed_anonymous_token=true&embed_authorize_group=Business_Development_Team&embed_datasource_filter=[{region=IN(South,West)}]";
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

    ![Amy user dashboard](/static/assets/javascript/images/amy-dashboard-uf-rls.png)

    When user data source filters are applied to an embedded Bold BI dashboard, the dashboard is rendered according to the user-specific filter provided. This ensures that the displayed data is personalized based on the data access permissions assigned to the anonymous user, according to group permissions.

## Sample Application for Row-Level Security Demo

A [demo site](https://demo-filters.boldbidemo.com/row-level-security) has been provided to showcase the use of custom attributes with data filtering based on whether the user is a logged-in Bold BI user or an anonymous user. On the login page, you will find a list of user credentials. By logging in with any of these credentials, the dashboard will dynamically render according to the value of the custom attribute and data source filter configured for Bold BI users, and will be dynamically passed for anonymous users at the embedding level.