---
layout: post
title: Dashboard iFrame Embedding Using SSO | Bold BI Documentation
description: Learn how to embed a dashboard in view mode using iFrame, with Single Sign-on authentication. Also, find a sample to download.
platform: bold-bi
documentation: ug
---

# Embed Dashboards using SSO in Bold BI

Bold BI supports embedding the dashboards to other web applications using Single Sign-On authentication. 

## Steps to embed dashboards

Below are the steps to embed dashboards into other web applications.

### Get embed secret code

1. Go to the settings page and click `Embed`. Enable the `Enable embed authentication` under that page.

    ![Enable embed authentication](/static/assets/embedded/iFrame-based/images/enable-embed-option.png)

2. Click `Generate Secret` button.

    ![Generate secret code](/static/assets/embedded/iFrame-based/images/generate-secret-code.png)

3. On clicking it, the secret code will be generated. Save the secret key safely, as it will not be able to retrieve or restore this generated secret.                    

    ![Copy secret code](/static/assets/embedded/iFrame-based/images/copy-secret-code.png)

4. Once the secret code is generated, it can be reset by clicking the `Reset Secret` button.

    ![Reset secret code](/static/assets/embedded/iFrame-based/images/reset-secret-code.png)

> **Warning :** Resetting this code will break the previously working embedded dashboards.

### Creating the embed URL

The embed URL should be in the below format,

`{dashboard URL}/{embed parameters}&embed_signature={signature}`

<table>
<tr><td>Example: http://test.boldbi.com/bi/en-us/site/site1/dashboards/8428c9d9-85db-418c-b877-ea4495dcddd7/Predictive%20Analytics/Personal%20Expense%20Analysis?embed_nonce=3e253410-1a82-4fb3-a337-122a8007dafc&embed_user_email=test@syncfusion.com&embeds=sdwd&embed_dashboard_views_edit=true&embed_dashboard_views=true&embed_dashboard_export=true&embed_dashboard_comments=true&embed_widget_comments=true&embed_dashboard_favorite=true&embed_timestamp=1583928213&embed_expirationtime=100&embed_signature=VYrDMVX4h85PrRBKX9mystRHYkU8z+HVC9bkVMc2qGY='</td></tr>
</table>

Please find the details of the parameter in the URL as below, 

<table>
<tr>
<td>Parameter</td>
<td>Description</td>
</tr>

<tr>
<td>dashboard URL</td>
<td>URL of the dashboard to be embed.</td>
</tr>

<tr>
<td>embed parameters</td>
<td>Parameters required to embed the dashboard with SSO.</td>
</tr>

<tr>
<td>signature</td>
<td>Authorized key for the dashboard to be embed.</td>
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
<td>embed_dashboard_views</td>
<td>No</td>
<td>This value makes you to check the views in the embedded dashboard.</td>
<td>true</td>
</tr>

<tr>
<td>embed_dashboard_views_edit</td>
<td>No</td>
<td>This value allows you to perform the actions such as save view, update view and delete views in the embedded dashboard.</td>
<td>true</td>
</tr>

<tr>
<td>embed_dashboard_export</td>
<td>No</td>
<td>The export option to various format of the dashboard and widget in embedded dashboard is displayed based on this value.</td>
<td>true</td>
</tr>

<tr>
<td>embed_dashboard_comments</td>
<td>No</td>
<td>The actions related to comments such as post, edit, delete, reply, watch, un-watch, posting the image and user mention list options can be performed in dashboard based on this value.</td>
<td>true</td>
</tr>

<tr>
<td>embed_widget_comments</td>
<td>No</td>
<td>The actions related to comments such as post, edit, delete, reply, posting the image and user mention list options can be performed in widgets based on this value.</td>
<td>true</td>
</tr>

<tr>
<td>embed_dashboard_favorite</td>
<td>No</td>
<td>The embedded dashboard can be marked as favorite based on this value.</td>
<td>true</td>
</tr>

<tr>
<td rowspan="3">embed_datasource_filter</td>
<td rowspan="3">No</td>
<td rowspan="3">The embedded dashboard can be filtered with passed Dashboard Parameter and URL Parameter.</td>
<td>`If you would like to pass Dashboard Parameter - embed_datasource_filter=&&Parameter1=Value1`</td>
</tr>

<tr>
<td>`If you would like to pass URL Parameter - embed_datasource_filter=&Parameter2=Value2`</td>
</tr>

<tr>
<td>`If you would like to pass both Dashboard and URL parameter - embed_datasource_filter=&&Parameter1=Value1&Parameter2=Value2`</td>
</tr>

<tr>
<td>embed_timestamp</td>
<td>Yes</td>
<td>The current time as UNIX time stamp. The embed URL formed is valid for 5 minutes from this embed time stamp.</td>
<td>1583934776</td>
</tr>

<tr>
<td>embed_expirationtime</td>
<td>No</td>
<td>Set the duration for the token to be alive. It must be represented in seconds. The default time is 86400 s and the maximum is 604800 s.</td>
<td>604800</td>
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
<td>A signature generated using the secret code to authenticate the embed URL.</td>
<td>VYrDMVX4h85PrRBKX9mystRHYkU8z+HVC9bkVMc2qGY=</td>
</tr>

</table>

The embed parameter should be formed as in the below format.

<table>
<tr>
<td>
embed_nonce=55a1c8f4-5015-487d-8463-d3ebeae655fd&embed_user_email=test@syncfusion.com&embed_dashboard_views_edit=true&embed_dashboard_views=true&embed_dashboard_export=true&embed_dashboard_comments=true&embed_widget_comments=true&embed_dashboard_favorite=true&embed_timestamp=1583935418&embed_expirationtime=100
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
> We have provided the code snippet to generate the signature in C#. You can write the equivalent code in your platform language.

## Available parameter
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th> 
      <th>In Dashboards</th> 
      <th>In Widgets</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>embed_dashboard_comments</code></td>
      <td><code>boolean</code></td>
      <td>Show/hide dashboard comments</td>
      <td>NA</td>
    </tr>
    <tr>
      <td><code>embed_widget_comments</code></td>
      <td><code>boolean</code></td>
      <td>NA</td>
      <td>Show/hide widget comments</td>
    </tr>
    <tr>
      <td><code>views</code></td>
      <td><code>boolean</code></td>
      <td>Show/hide dashboard views</td>
      <td>NA</td> 
    </tr>
    <tr>
      <td><code>export</code></td>
      <td><code>boolean</code></td>
      <td>Show/hide dashboard export option</td>
      <td>Show/hide widget export option</td> 
    </tr>
    <tr>
      <td><code>hide_header</code></td>
      <td><code>boolean</code></td>
      <td>Show/hide dashboard header</td>
      <td>NA</td> 
    </tr>
    <tr>
      <td><code>hide_tool</code></td>
      <td><code>string</code></td>
      <td>Predefined values: tm-Theme,dp-Dashboard Parameter,fo-Filter Overview,fs-FullScreen,rf-Refresh,om-Option Menu</td>
      <td>NA</td>
    <tr>
    <tr>
      <td><code>hide_widget_tool</code></td>
      <td><code>string</code></td>
      <td>NA</td>
      <td>Predefined values: fr-Filter,fs-FullScreen,om-Option Menu</td>      
    <tr>
  </tbody> 
</table>

### How to pass the dashboard parameter and URL parameter filters in embed URL

In embed URL, you can pass both types of filters(Dashboard Parameter/URL Filter Parameter) values at the same time.

Pass your filters to the `embed_datasource_filter` URL parameter in the embed URL as follows.

<table>
<tr><td>Example: http://test.boldbi.com/bi/en-us/site/site1/dashboards/8428c9d9-85db-418c-b877-ea4495dcddd7/Predictive%20Analytics/Personal%20Expense%20Analysis?embed_nonce=3e253410-1a82-4fb3-a337-122a8007dafc&embed_user_email=test@syncfusion.com&embeds=sdwd&embed_dashboard_views_edit=true&embed_dashboard_views=true&embed_dashboard_export=true&embed_dashboard_comments=true&embed_widget_comments=true&embed_dashboard_favorite=true&embed_timestamp=1583928213&embed_expirationtime=100&embed_datasource_filter=&&dashboardparameter1=value1&urlparameter1=value1&embed_signature=VYrDMVX4h85PrRBKX9mystRHYkU8z+HVC9bkVMc2qGY=</td></tr>
</table>


* In the embed URL, the dashboard parameter filter must be started with a double ampersand `&&`. For more details, Refer to this [link](/embedded-bi/working-with-data-source/configuring-dashboard-parameters/).    

* In the embed URL, the URL filter parameter must be started with a single ampersand `&`. For more details, refer to this [link](/embedded-bi/working-with-dashboards/preview-dashboard/urlparameters/) .

## Sample to embed dashboard using SSO authentication

You can download the sample [here](https://www.syncfusion.com/downloads/support/directtrac/general/ze/EmbedDashboardUsingSSO-1689837049).