---
layout: post
title: How to create Custom Connector in Bold BI | Bold BI Docs
description: Learn how to create custom connector by preparing the simple JSON file for your REST API or Web service. Also, learn JSON file preparation for custom connector.
platform: bold-bi
documentation: ug
---

# Custom Connector
A custom connector allows you to create a Bold BI connector on your own. Now, you can create a Bold BI connector for your REST API without having to wait for us to implement it. Creating a custom connector is simple - you just need to prepare a JSON file and upload it into BoldBI.

> **Note:** This feature is available in On-Premises Deployment, but not in Syncfusion Managed Cloud Server.

The following documentation will provide instructions on how to create the JSON file for the Custom Connector.

 ## Create Custom Connector in Bold BI
 
 ### JSON Template Syntax : 

    {
        "Name": {connector_name},
        "Description": {connector_description},
        “ConnectorInfo”:{
        “Tags”: [{search_tag_name1},{search_tag_name2}],
        "Template": {
            "Method": {
                "value": "GET/POST",
                "isHidden": true/false
            },
            “Authentication”:{Basic/none},
            “Username”:{
                “isHidden”: {true/false},
                “value”: {username_vale}
            },
            “Password”:{
                “isHidden”: {true/false},
                “value”: {password_value}
            },
            "DataFormat":{
            "value": "{JSON/CSV/XML}",
            "isHidden": {true/false}
            },
            "URL": {
                “value”: {default URL},
                “isHidden”: {true/false}
            },
            “Raw”: {
                “value”: {JSON_content},
                “isHidden”: {true/false}
            },
            "Parameters": [{
                "key": {parameter1_name},
                "value": {parameter1_value},
                "isHidden": {true/false}
            },
            {
                "key": {parameter2_name},
                "value": {parameter2_value},
                "isHidden": {true/false}
            }
            ],
            "Headers": [{
                "key": {header1_name},
                "value":{header1_value},
                "isHidden": {true/false}
            },
            {
                "key": {header2_name},
                "value":{header2_value},
                "isHidden": {true/false}
            }
            ],
            
            "Pagination":{
                "Type": {Nexturl/Nexttoken/NextPage/Offset},
                {param1}:{value1},
                {param2}:{value2}

            }
        }
    }
>**Note** : **false** is the default value if you don’t provide **isHidden** property.

## Syntax Explanation 

### Name

The name of the Custom connector should be provided in this property. 
The **name** should not contain any special characters.

### Description

A description for the custom connector should be provided in this property.

### Connector-Info

All other properties should be within this connector info, except for the name and description.

### Tags

* Tags will be used as search terms to locate your added connector on the data source page.
* Multiple tags can be added for searching your added connector.

### Template

The template property should contain an API method, authentication type, data format, URL, parameters, and headers.

### Method

An API method can be either GET or POST.

**Sample** 

    “Method”:{ 
        “value”:”POST”, 
        “isHidden”:true       
    } 

>**Note :** This is an optional parameter, and the default method attribute will be **Get**.

### Authentication

Currently, two modes of authentication are supported: Basic and None.

### None:
    
     "AuthenticationType": "None"    

### Basic Authentication:

You can provide values for Username and Password for basic authentication using the JSON format provided in the Template category.

**Sample**  
    "AuthenticationType":{
        "value": "basic",

        "isHidden": true
      },
    "Username":{
            "value": "<: assign value for username>",

            "isHidden": true  
        },
    "Password":{
            "value": “<: assign value for password>”,

            "isHidden": true   
        }

> **Note:** This is an optional parameter, and the default authentication will be **none** if no value is given.

### DataFormat 
The data format can be JSON, CSV, or XML.

**Sample**
 
    "DataFormat":{
          “value”:"JSON",

          “isHidden”:true 
        } 
>**Note :** This is an optional parameter, and the default format will be **JSON** if no value is given.

### URL 

The URL should be provided in this property. The URL can be hidden by setting the isHidden property to true.

**Sample** 

    "URL":{ 
            “value":“https://services.odata.org/V4/Northwind/Northwind.svc/Order_Details”, 

            “isHidden”: true 
        } 

### Raw 

* The Raw option allows passing a raw query JSON string via a custom connector configuration file.
* This property is only applicable when the method attribute is set to **POST**.

* The Raw option can be hidden by setting the isHidden property to true.
* Setting the isHidden property to true will hide the request body UI along with the title label.

>**Note :** 
>* It is an optional parameter with a default value of **None** if no value is provided.
>* Ensure that the JSON content is properly **stringified**.

**Sample** 

    "Raw" :{ 
        “value” :  
                "{\"until\":\"2020-11-01T15:30:00Z\",\"window\":\"P7D\",\"data\":[{\"resources\":\"testresource\",\"metric\":\"temperature\"}]}", 

        “isHidden” : false 
    } 


### Parameters 

* Parameters can have multiple items in a JSON array. 
* This property is applicable only when the method type is **POST**. 
* Key, value, and isHidden should be provided for the Parameters property.
    <table width="1000">
    <tr>
    <td>
    Key
    </td>
    <td>
    The name of the parameter should be provided in this property. 
    </td>
    </tr>
    <tr>
    <td>
    value 
    </td>
    <td>
    The default value of the parameter should be given in this property. 
    </td>
    </tr>
    <tr>
    <td>
    isHidden
    </td>
    <td>
    Set true in this property to make this parameter hidden.

    Set false to visible this parameter in the data source creation.   
    </td>
    </tr>
    <tr>
    <td></td>
    <td>
    </td>
    </tr>
    </table>

**Sample** 

    "Parameters":[{ 
            "key": "token", 

            "value": "sk234234534”, 

            "isHidden": false 

            }, 
            { 

            "key": "Connections", 

            "value": "de4edw98cds#23", 

            "isHidden": true 
        }
    ]

>**Note :** This is an optional parameter, and the default will be **none** if no value is given.

### Header:  
* Headers can have multiple items in a JSON array.
* Key, value, and isHidden should be provided for the Headers property.

    <table width="900">
    <tr>
    <td>key</td>
    <td>The name of the header should be provided on this property. </td>
    </tr>
    <tr>
    <td>value</td>
    <td>
    The default value of the header should be given in this property. 
    </td>
    </tr>
    <tr>
    <td>isHidden</td>
    <td>Set true in this property to make this header hidden.  

    Set false to visible this header in the data source creation. </td>
    </tr>
    <table>
    </table>

**Sample** 

    "Headers":[{
            "key": "Content-Type",
            "value": "application/x-www-form-urlencoded"
            },
            {
            "key": "Caller",
            "value": "google.com",
            "isHidden": false
        }   
    ]


>**Note :** This is an optional parameter, and the default value will be **none** for the header if no value is given.

### Pagination 

The custom connector has support for 4 types of pagination. 
Each pagination differs with the JSON properties.

* Nexturl 

* Nexttoken 

* Nextpage 

* Offset 
    <table width="900">
    <tr></tr>
    <td>
    Type
    </td>
    <td>
    Description
    </td>
    <td>
    Sample
    </td>
    <tr>
    <td>Nexturl</td>
    <td>The Nexturl pagination properties can be referred in the WEB API connector.
    It iterate next set of records using url obtained from response.
    </td>
    <td>
        
        "Pagination":{ 
                
                "Type": "Nexturl", 

                "MaxIteration": 2, 

                "NextURLPath": "link",  

                "LookInHeader": true 
            } 

    </td>
    </tr>
    <tr>
    <td>Next token</td>
    <td>The Next token pagination properties can be referred in Web API connector
    It iterate next set of records using token.
    </td>
    <td>

        "Pagination":{ 
                "Type": "Nexttoken", 

                "MaxIteration": 2, 

                "NextTokenFieldName": "pageToken", 

                "NextTokenPath": "nextPageToken" 
            } 
    </td>
    </tr>
    <tr>
    <td>Nextpage</td>
    <td>
    The Next page pagination properties can be referred in the Web API connector.
    Number of Pages to be fetched with specific number of records per page.
    </td>
    <td>

        "Pagination":{ 
                "Type": "NextPage", 

                "MaxIteration": 2, 

                "NextPageParamName": "page", 

                "NextPageValue": "1", 

                "NextPagePassViaHeader": false, 

                "PageSizeParamName": "pageSize", 

                "PageSizeValue": "2", 

                "PageSizePassViaHeader": false, 

                "TotalPagesPath": "totalPages", 

                "LookInHeader": false, 

                "DataIndicatorPath": "" 
            } 
    </td>
    </tr>
    <tr>
    <td>Offset</td>
    <td>The Offset pagination properties can be referred in Web API connector.
    Number of records to be skipped before start paginating.
    </td>
    <td>

        "Pagination":{ 

                "Type": "Offset", 

                "MaxValue": 7, 

                "StartParamName": "$skip", 

                "StartValue": "2", 

                "StartPassViaHeader": false, 

                "CountParamName": "$top", 

                "CountValue": "3", 

                "CountPassViaHeader": false, 

                "TotalRecordsPath": "", 

                "LookInHeader": false, 

                "DataIndicatorPath": "value" 
            } 

    </td>
    </tr>
    <table>
    </table>

>**Note :** It is an optional parameter, with the default value being **none** for Pagination if no value is given.

### Icon

We have support for icons in the custom connector, and the value should be in base64.

**Sample**
    
    "Icon": <:base64 value>

>**Note :** The default icon will be displayed as the **WEB API Icon** if the icon value is empty.

### Sample JSON template for custom connector, 

    {
    "Name": "New Custom connector",
    "Description": "Sample for custom connector",
    "ConnectorInfo": {
        "Tags": [ "Connector" ],
        "Template": {
        "Method": "get",
        "AuthenticationType": "none",
        "DataFormat": {
            "value": "json",
            "isHidden": false
        },
        "URL": {
            "value": "https://services.odata.org/V4/Northwind/Northwind.svc/Order_Details",
            "isHidden": false
        }
        },
        "Pagination": {
        "Type": "Nexturl",

        "MaxIteration": 10,

        "NextURLPath": "result.metadata.nextUrl",

        "LookInHeader": true
        }
    }
    }