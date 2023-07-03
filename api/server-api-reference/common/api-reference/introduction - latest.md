# Introduction
Bold BI is a powerful business intelligence dashboard software that helps you gain meaningful insights from your business data and make better decisions.

Bold BI provides a RESTful web API that allows other third-party applications to interact with Embedded BI programmatically. It supports read, create, edit, and delete operations, which are usually in JSON format. Users, groups, dashboards, data sources, and settings, among other items, can be handled using REST APIs.

If `https://<yourdomain>/bi/site/<site_identifier>` is your Bold BI site URL, then API end of this site will be accessed by `https://{yourdomain}/bi/api/site/<site_identifier>`

If you are using a cloud analytics server, then `https://<yourdomain>/bi` is your bold BI site URL, and the API end of this site will be accessed by `https://{yourdomain}/bi/api`.

**Follow the below steps to get started,**
- [HTTP methods](#section/Getting-Started/HTTP-Methods)
- [Response Status](#section/Getting-Started/Response-Status)
- [Content Header](#section/Getting-Started/Content-Header)
- [Conventions](#section/Getting-Started/Conventions)
- [Pagination](#section/Getting-Started/Pagination)

# Getting Started
## HTTP Methods
HTTP defines a collection of request methods that can be used to determine the action to be taken. The following HTTP methods are used to manipulate and retrieve data in Bold BI.

|    Method    |      Description                     |
| ------------ | ------------------------------------ |
| GET          |  Retrieve Data                       |
| POST         |  Create resources and perform actions|
| PUT          |  Update Data                         |
| DELETE       |  Delete Data                         |


## Response Status
Response status codes are used by Bold BI to indicate whether API calls were successful or unsuccessful. This will assist you in determining the error or message type.

The following table shows the HTTP status codes used in the Bold BI.

| **Status Code** | **Message**                | **Details**                                                                                                                                                      |
| --------------- | -------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 200             | Success                    | This indicates that the processing was completed successfully.                                                                                                   |
| 201             | Success                    | This indicates that the item was successfully created.                                                                                                           |
| 202             | Accepted                   | The request was approved, but it will be processed later.                                                                                                        |
| 204             | Success                    | It indicates that a request was successful, but that the client does not need to navigate away from its current page.                                            |
| 400             | Client or Validation Error | It indicates that the server is unable to process the request due to a client error (for example, invalid request message framing or malicious request routing). |
| 401             | Authentication Failure     | As indicated by this value, the Authorization header is either missing or incorrect.                                                                             |
| 403             | Access Denied              | It indicates that the server has received the request but was denied due to insufficient permission.                                                             |
| 404             | API/Item Not Found         | Either the API URL or the object id we are trying to load is invalid.                                                                                            |
| 405             | Invalid method type        | It indicates invalid method type is passed.                                                                                                                      |
| 500             | Unexpected Server Error    | The error occurred in the application while processing your request. To resolve this issue, please contact us and submit a support ticket.                       |

## Content Header
The Content-Type HTTP header must be set in request headers to make a Post/Put request with JSON. In Bold BI, the following Content-Types are supported:

 - **Content-Type:** application/json
 - **Content-Type:** application/x-www-form-urlencoded


The Content-Type header in the response headers specifies the type of content returned by the server. In Bold BI, the following Content-Type header will be present.

 - **Content-Type:** application/json

## Conventions
The JSON format is used in Bold BI for API requests and responses, which can include different data types. The following is a list of data types that are used in Bold BI for API operations.

| **Type** | **Description** |
| --------- | -----------------|
| String    | String type with Unicode support.     |
| Guid      | 128 bit integer unique identifier.    |
| Long      | Signed 64 bit integral number.        |
| Integer   | Signed 32 bit integral number.        |
| Byte      | Unsigned 8 bit integral number.       |
| Boolean   | True/False type.                      |
| Datetime  | **YYYY-MM-DD THH:MM:SSZ** is the combined date and time format. API's uses the UTC Time-Zone for all Date-time values<br><br>or <br> <br> Should mention the user TimeZone like this **YYYY-MM-DDTHH:MM:SS+00:00**<br><br>**Find the example for IST TimeZone:** <br>2017-05-09T15:04:40.331 +05:30 |
| Date      | **YYYY-MM-DD** is the Date format.    |
| Tuple     | It is a data structure that contains the sequence of elements of different data types. |
| Array     | Sequential collection of elements of the same data type. |

## Pagination
Multiple List API calls in Bold BI, such as [Get Data sources](../../v4.0/api-reference/#operation/DataSource_GetDataSources), will return more results. Because you will not be able to return them all at once, so you must return them one page at a time, called pagination.

**These parameters can be passed to list APIs for pagination.**

| Parameters | Description           |
| ---------- | --------------------- |
| page       | It indicates the current page number. |
| page_size  | It denotes the number of data lists per page.<br><br> - Page size default value is 25. <br> - Page size maximum value is 100. |