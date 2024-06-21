---
layout: post
title: Dashboard Widget iFrame Embedding Using SSO | Bold BI Docs
description: Learn how to embed a dashboard widget in view mode using iFrame with Single Sign-on (SSO) authentication. Also, find a sample to download.
platform: bold-bi
documentation: ug
---

# Embed Widgets using SSO in Bold BI

Bold BI supports embedding the widgets to other web applications using Single Sign-On authentication. 

## Steps to embed widgets

Below are the steps to embed widgets into other web applications.

### Get a embed secret code

1. Go to the settings page and click `Embed`. Enable the `Enable embed authentication` under that page.

    ![Enable embed authentication](/static/assets/embedded/iFrame-based/images/enable-embed-option.png)

2. Click `Generate Secret` button.

    ![Generate secret code](/static/assets/embedded/iFrame-based/images/generate-secret-code.png)

3. On clicking it, the secret code will be generated. Save the secret key safely, as it will not be able to retrieve or restore this generated secret.                    

    ![Copy secret code](/static/assets/embedded/iFrame-based/images/copy-secret-code.png)

4. Once the secret code is generated, it can be regenerate by clicking the `Regenerate Secret` button.

    ![Regenerate secret code](/static/assets/embedded/iFrame-based/images/regenerate-secret-code.png)

> **Warning :** Resetting this code will break the previously working embedded dashboards.

## How to get the Embed Widget Url

1. Open the desired dashboard and select the `More` option under the widget you want to embed .Then, select `Get Embed Code` from the drop-down menu.
![InspectElement](/static/assets/embedded/iFrame-based/images/Widget-GetEmbedCode.png)

2. Copy the iframe code from the embed code pop-up page. 
![InspectElement](/static/assets/embedded/iFrame-based/images/WidgetId.png) 

### Creating the embed URL

The embed URL should be in the below format,

`{dashboard URL}/{embed parameters}&embed_signature={signature}`

<table>
<tr><td>Example: http://test.boldbi.com/bi/en-us/site/site1/dashboards/8428c9d9-85db-418c-b877-ea4495dcddd7/Predictive%20Analytics/Personal%20Expense%20Analysis?isWidgetMode=true&widgetId=0000aeab-3359-40c6-b014-1ea98e9a7ce9&embed_nonce=3e253410-1a82-4fb3-a337-122a8007dafc&embed_user_email=test@syncfusion.com&embeds=sdwd&embed_dashboard_views=true&embed_dashboard_export=true&embed_widget_comments=true&embed_timestamp=1583928213&embed_expirationtime=100&embed_signature=VYrDMVX4h85PrRBKX9mystRHYkU8z+HVC9bkVMc2qGY='</td></tr>
</table>

Please find the details of the parameter in the URL as below, 

<table>
<tr>
<td>Parameter</td>
<td>Description</td>
</tr>

<tr>
<td>dashboard URL</td>
<td>URL of the dashboard, in which the widget is present and will be embedded.</td>
</tr>

<tr>
<td>embed parameters</td>
<td>Parameters required to embed the particular widget of dashboard with SSO.</td>
</tr>

<tr>
<td>signature</td>
<td>The authorized key for the dashboard, in which the widget is present and will be embedded.</td>
</tr>
</table>

### Parameters to generate the signature in the embed URL

The below values are necessary to form the signature

<table>

<tr>
<td>Parameter</td>
<td>Mandatory</td>
<td>Description</td>
<td>Example</td>
</tr>

<tr>
<td>isWidgetMode</td>
<td>Yes</td>
<td>To enable the widget mode.</td>
<td>true</td>
</tr>

<tr>
<td>widgetId</td>
<td>Yes</td>
<td>Widget Id of the widget to be embedded. To know how to get widgetId from the dashboard, <a href="/embedded-bi/iframe-based/widget-embedding/">here</a>
</td>
<td>0fa8d95d-e262-4a89-0976-390e3a57ee50</td>
</tr>

<tr>
<td>embed_nonce</td>
<td>Yes</td>
<td>Random string that restricts the URL reconstruction or attacks from the hackers.</td>
<td>0fa8d95d-e262-4a89-0976-390e3a57ee50</td>
</tr>

<tr>
<td>embed_user_email</td>
<td>Yes</td>
<td>The email id of the user.</td>
<td>test@syncfusion.com</td>
</tr>

<tr>
<td>embed_dashboard_export</td>
<td>No</td>
<td>The export option to the various formats of the dashboard and widget in the embedded dashboard is displayed based on this value.</td>
<td>true</td>
</tr>

<tr>
<td>embed_widget_comments</td>
<td>No</td>
<td>The actions related to comments such as post, edit, delete, reply, posting the image and user mention list options can be performed in widgets based on this value.</td>
<td>true</td>
</tr>

<tr>
<td>embed_timestamp</td>
<td>Yes</td>
<td>The current time as UNIX time stamp. The embed URL formed is valid for 604800 sec(7 days as maximum) from this embed time stamp.</td>
<td>Example for embed_timestamp is 1583934776.</td>
</tr>

<tr>
<td>embed_expirationtime</td>
<td>No</td>
<td>Set the duration for the token to be alive. It must be represented in seconds. The minimum time is 86400 sec (1 day) and the maximum time is 604800 sec(7 days).</td>
<td>Example for embed_expirationtime is 604800</td>
</tr>

</table>

### Generating the signature for the embed URL

<table>

<tr>
<td>Parameter</td>
<td>Mandatory</td>
<td>Description</td>
<td>Example</td>
</tr>

<tr>
<td>embed_signature</td>
<td>Yes</td>
<td>A signature is generated using the secret code to authenticate the embed URL.</td>
<td>VYrDMVX4h85PrRBKX9mystRHYkU8z+HVC9bkVMc2qGY=</td>
</tr>

</table>

The embed parameter should be formed as in the below format.

<table>
<tr>
<td>
isWidgetMode=true&widgetId=0000aeab-3359-40c6-b014-1ea98e9a7ce9&embed_nonce=55a1c8f4-5015-487d-8463-d3ebeae655fd&embed_user_email=test@syncfusion.com&embed_dashboard_export=true&embed_widget_comments=true&embed_timestamp=1583935418&embed_expirationtime=100
</td></tr>
</table>

  To obtain the signature for the embed URL, pass the query parameters as an argument to the below <code>GetSignatureUrl</code> method. It will return the hashed signature, which you must append to the existing query parameters with the query parameter name as <strong>'embed_signature'</strong>.

```js  
        
        public string GetSignatureUrl(string queryString)
        {
            // Get the embedSecret key from Bold BI.
            var embedSecret = "8apLLNabQisvriG2W1nOI7XWkl2CsYY";
            var encoding = new System.Text.UTF8Encoding();
            var keyBytes = encoding.GetBytes(embedSecret);
            var messageBytes = encoding.GetBytes(queryString);
            using (var hmacsha1 = new HMACSHA256(keyBytes))
            {
                var hashMessage = hmacsha1.ComputeHash(messageBytes);
                return Convert.ToBase64String(hashMessage);
            }
        }
```
>Provided the code sample to generate the signature in C#. You can write the equivalent code in your platform language.

## Available parameter
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th> 
      <th>In Widgets</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>embed_widget_comments</code></td>
      <td><code>boolean</code></td>
      <td>Show/hide widget comments</td>
    </tr>
    <tr>
      <td><code>embed_dashboard_export</code></td>
      <td><code>boolean</code></td>
      <td>Show/hide widget export option</td> 
    </tr>
    <tr>
      <td><code>hide_widget_tool</code></td>
      <td><code>string</code></td>
      <td>Predefined values: fr-Filter,fs-FullScreen,om-Option Menu</td>      
    <tr>
  </tbody> 
</table>

## Sample to embed widget of dashboard using SSO authentication

You can download the sample [here](https://www.syncfusion.com/downloads/support/directtrac/general/ze/EmbedDashboardUsingSSO-1689837049).