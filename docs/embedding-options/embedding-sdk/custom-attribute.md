---
layout: post  
title: Custom Attribute – JavaScript Embedding | Bold BI Docs  
description: Learn how to securely apply custom attributes using the JavaScript-based embedding of Bold BI dashboards in any of your business or web applications.  
platform: bold-bi  
documentation: ug  
---

# Custom Attribute

A custom attribute is a parameter that functions as a piece of code and can be replaced by users in queries, custom expressions, or within the Data Source Connection window. These attributes are saved for each user and dynamically applied to render the dashboard.

## Adding custom attribute in Bold BI server

Attributes are name-value pairs associated with users, groups, and sites (tenants).

![Custom Attribute Window](/static/assets/javascript/images/custom-attribute-usecase.png)

Name – The name of the attribute.

Value – The value of the attribute

Description – An explanation of the purpose of this attribute.

Encrypt – Option to store the attribute as encrypted in the database, with the value displayed as dots in the grid.

## Uses of custom attribute

Custom attributes can be used in the following areas:

### 1. Custom Query

Custom attributes can be used in a custom query by manually providing the required custom attribute name in the code view using the syntax:

Syntax: `${{:AttributeName}}`

![Use custom attribute in code view](/static/assets/javascript/images/custom-attribute-usecase-query.png)

### 2. Data source Connection window

Custom attributes can be utilized within the Data Source Connection interface to set up the Dynamic Connection String interface for the External API.

**SQL Data Sources Configuration**

Configure the following properties:
1. Username.
2. Password.
3. Servername.
4. Port.
5. Database.
6. Maxrows.
7. CommandTimeout.
8. AdvancedSettings.

![WebCustom](/static/assets/working-with-datasource/custom-attribute/images/sqlCustom.png)

**External API Dynamic Connection String Interface**

Configure the following properties:
1. URL.
2. Header(s).
3. Username.
4. Password.

![Dynamic connection](/static/assets/working-with-datasource/custom-attribute/images/dynamicconnection.png)

IntelliSense support has been implemented for custom attributes, allowing users to type '$' within the All SQL data source properties or web data source properties to display the custom attributes.

![Intellisense Support](/static/assets/working-with-datasource/custom-attribute/images/intellisense.png)

>**Note** Custom attribute support is not available for connections using SSH or SSL modes.

### 3. Expression

We have provided custom attribute support for **Expression**. please refer [Expression](https://help.boldbi.com/working-with-data-sources/data-modeling/configuring-expression-columns/) documentation.

Syntax: `${{:Custom Attribute Name}}`

![Use custom attribute in Expression](/static/assets/working-with-datasource/custom-attribute/images/EX1.png)

![Use custom attribute in Expression](/static/assets/working-with-datasource/custom-attribute/images/EX2.png)

To know more about custom attributes, please refer [Configure Custom Attribute](/working-with-data-sources/configuring-custom-attribute/).

## How to use Custom Attribute in embedding:

Custom attributes are applied to an embedded Bold BI dashboard, the rendered output dynamically adapts based on the provided attribute values. These attributes function as filters or parameters that influence the displayed data, ensuring that the dashboard is tailored to the user's requirements.

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Syntax</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3"><code>embed_custom_attribute</code></td>
      <td>"[{\"Attribute_Name\":\"Value\"}]"</td>
      <td>embed_custom_attribute=[{\"sales_analysis_db\":\"alpha_electronics_sales_analysis\"}]</td>
    </tr>
    <tr>
      <td>"[{\"Attribute_Name\":\"IN('Value1','Value2')\"}]"</td>
      <td>embed_custom_attribute=[{\"department\":\"IN('CSE','EEE')\"}]</td>
    </tr>
    <tr>
      <td>"[{\"Attribute_Name1\":\"Value1\",\"Attribute_Name2\":\"Value2\"}]"</td>
      <td>"&embed_custom_attribute=[{\"department\":\"IT\",\"name\":\"David\"}]";</td>
    </tr>
  </tbody>
</table>

## How to Load User-Based Data Using Custom Attributes Without Importing Users into Bold BI

Bold BI simplifies user management by using a single read-permission user to access the data source linked to the dashboard.

When a user logs into the embedded application, their details, including custom attributes (embed_custom_attribute) and data source filters (embed_datasource_filter), are sent to Bold BI. This approach eliminates the need to create separate accounts for every user in Bold BI, streamlining data access while maintaining security and personalized filtering.

## How custom attributes can be dynamically replaced, it is passed in Authorization code along with other parameters.

In the AuthorizeAPI, pass the custom attributes from the embedding application using the `embed_custom_attribute` query parameters. These parameter ensure that the dashboard renders data filtered based on the specified custom attributes, such as user roles, departments, or tenant information.
   
```C#
[HttpPost]
[Route("embeddetail/get")]
public string GetEmbedDetails(string embedQueryString, string dashboardServerApiUrl)
{
    // Use your user email as embed_user_email
    // This is the read-permission user in Bold BI, which has access to the data source linked to the dashboard.
    embedQueryString += "&embed_user_email=user@domain.com";

    // Adding custom attributes for the logged-in user.
    embedQueryString += "&embed_custom_attribute=" + "[{\"Attribute_Name\":\"Value\"}]";

    // To set embed_server_timestamp to overcome EmbedCodeValidation failures when using different time zones in the client application.
    double timeStamp = (int)DateTime.UtcNow.Subtract(new DateTime(1970, 1, 1)).TotalSeconds;
    embedQueryString += "&embed_server_timestamp=" + timeStamp;

    var embedSignature = "&embed_signature=" + GetSignatureUrl(embedQueryString);

    var embedDetailsUrl = "/embed/authorize?" + embedQueryString + embedSignature;

    using (var client = new HttpClient())
    {
        client.BaseAddress = new Uri(dashboardServerApiUrl);
        client.DefaultRequestHeaders.Accept.Clear();

        var result = client.GetAsync(dashboardServerApiUrl + embedDetailsUrl).Result;
        string resultContent = result.Content.ReadAsStringAsync().Result;
        return resultContent;
    }
}
```

## Exploring Dynamic User Sessions with Custom Attributes and Filter Parameters in detail:

Please follow these steps to use custom attributes in the embedded dashboard:

1. **Ensure the Data Source Includes User Information Columns:**

   Ensure the data source on the Bold BI server includes columns containing user information, such as user email, necessary for dashboard filtering..

   ![Datasource](/static/assets/javascript/images/custom-attribute-datasource.png)

2. **Configure the Custom Attribute on the Bold BI Server:**

   Configure custom attributes on the Bold BI server to enable filtering based on specific attribute values.

 ![Add Attribute](/static/assets/javascript/images/custom-attribute-add-attribute.png)

3. **Create a Dashboard in Bold BI:**

   Create a dashboard using the data source, which includes the custom attributes set during its creation.

   ![Design a dashboard](/static/assets/javascript/images/custom-attribute-design-dashbord.png)

   Initially, the dashboard will render data based on the database assigned during the custom attribute configuration.

4. **Embed the Bold BI Dashboard Using JavaScript:**

   Embed the Bold BI dashboard into your application using JavaScript. This enables seamless integration and interaction with your application. Please refer to [Embedding using JavaScript](/embedding-options/embedding-sdk/embedding-using-javascript/) to learn how to embed a dashboard using JavaScript.

   ```js
    <body onload="embedSample();">
        <div id="dashboard"></div>
        <script>
            function embedSample() {
                var boldbiEmbedInstance = BoldBI.create({
                    serverUrl: `${this.boldbisettings?.ServerUrl ?? ''}/${this.boldbisettings?.SiteIdentifier ?? ''}`,
                    dashboardId: this.boldbisettings?.DashboardId,
                    embedContainerId: "dashboard",
                    embedType: BoldBI.EmbedType.Component,
                    environment: this.boldbisettings?.Environment,
                    mode: BoldBI.Mode.View,
                    width: "100%",
                    height: "100%",
                    authorizationServer: {
                        url:this.authorizationApi,
                        headers: {
                            "Authorization": "Bearer " + localStorage.getItem('token')
                        }
                    }
                });
                boldbiEmbedInstance.loadDashboard();
            }
        </script>
    </body>
    ```

5. **Implement Data Filtering with Custom Attributes:**

   In the AuthorizeAPI, pass the logged-in user's details and custom attributes from the embedding application using the `embed_datasource_filter` and `embed_custom_attribute` query parameters. These parameters ensure that the dashboard renders data filtered based on the user's information and permissions.
   
   Below is a modified implementation example for row-level filtering with custom attributes:

   ```C#
   [HttpPost]
   [Route("embeddetail/get")]
   public string GetEmbedDetails(string embedQueryString, string dashboardServerApiUrl)
   {
       // Use your user email as embed_user_email
       // This is the read-permission user in Bold BI, which has access to the data source linked to the dashboard.
       embedQueryString += "&embed_user_email=user@domain.com";

       // Adding custom attributes for the logged-in user.
       embedQueryString += "&embed_custom_attribute=" + "[{\"department\":\"EEE\"}]";

       // Use the logged-in user's information for filtering.
       // This ensures data is filtered dynamically based on the login user.
       embedQueryString += "&embed_datasource_filter=[{userEmail=john@abc.com}]";

       // To set embed_server_timestamp to overcome EmbedCodeValidation failures when using different time zones in the client application.
       double timeStamp = (int)DateTime.UtcNow.Subtract(new DateTime(1970, 1, 1)).TotalSeconds;
       embedQueryString += "&embed_server_timestamp=" + timeStamp;

       var embedSignature = "&embed_signature=" + GetSignatureUrl(embedQueryString);

       var embedDetailsUrl = "/embed/authorize?" + embedQueryString + embedSignature;

       using (var client = new HttpClient())
       {
           client.BaseAddress = new Uri(dashboardServerApiUrl);
           client.DefaultRequestHeaders.Accept.Clear();

           var result = client.GetAsync(dashboardServerApiUrl + embedDetailsUrl).Result;
           string resultContent = result.Content.ReadAsStringAsync().Result;
           return resultContent;
       }
   }
   ```

When custom attributes and user data source filters are applied to an embedded Bold BI dashboard, the dashboard is rendered based on both the attribute values and the user-specific filter criteria provided. This ensures that the displayed data is personalized according to the custom attributes and the data access permissions of the logged-in user.

The following examples illustrate how the embedded Bold BI dashboard would be rendered differently based on the custom attributes and user-specific data source filters (using different tenants and user emails):

### Alpha Electronics - Emily (`emily@alphaelectronics.com`)
- **Custom Attribute**: `"sales_analysis_db": "alpha_electronics_sales_analysis"`
- **User Data Source Filter**: None

In this case, the dashboard displays data specific to Alpha Electronics and does not apply any data source filter, giving the user full access to all data associated with that tenant.

![Alpha](/static/assets/javascript/images/custom-attribute-alpha.png)

### Alpha Electronics - John (`john@alphaelectronics.com`)
- **Custom Attribute**: `"sales_analysis_db": "alpha_electronics_sales_analysis"`
- **User Data Source Filter**: `useremail = "john@alphaelectronics.com"`

Here, the dashboard displays data for Alpha Electronics with only the user-specific data, meaning the user will have access to their own data within the tenant.

![Alpha-John](/static/assets/javascript/images/custom-attribute-alpha-john.png)

### Beta Enterprises - Lisa (`lisa@betaenterprises.com`)
- **Custom Attribute**: `"sales_analysis_db": "beta_enterprises_sales_analysis"`
- **User Data Source Filter**: `useremail = "lisa@betaenterprises.com"`

In this case, the dashboard displays data for Beta Enterprises with only the user-specific data, meaning the user will have access to their own data within the tenant.

![Beta](/static/assets/javascript/images/custom-attribute-beta.png)

## Sample Application for Custom Attribute Demo

A demo [site](https://demo-filters.boldbidemo.com/customattribute/) has been provided to showcase the use of custom attributes for data filtering based on the logged-in user. On the login page, you will find a list of user credentials. By logging in with any of these credentials, the dashboard will dynamically render based on the value of the custom attribute and the user's permissions defined in the DataSource.