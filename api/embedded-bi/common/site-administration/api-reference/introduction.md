# Introduction
Our application provides a RESTful web API that allows other third-party applications to interact with the embedded BI programmatically. It supports read, create, edit, and delete operations, which are usually in JSON format. Application startup, tenants, and users among other items, can be handled using REST APIs. 

If `https://<yourdomain>` is your Bold BI or Bold Reports URL, then the API of this site will be accessed by `https://{yourdomain}/api/`  

**Follow these steps to get started:**
- [HTTP methods](#section/Getting-Started/HTTP-Methods)
- [Response Status](#section/Getting-Started/Response-Status)
- [Content Header](#section/Getting-Started/Content-Header)
- [Conventions](#section/Getting-Started/Conventions)
- [Pagination](#section/Getting-Started/Pagination)
- [Keywords](#section/Getting-Started/Keywords)

# Getting Started
## HTTP Methods
HTTP defines a collection of request methods that can be used to determine the action to be taken. The following HTTP methods are used to manipulate and retrieve data in our application.

|    Method    |      Description                     |
| ------------ | ------------------------------------ |
| GET          |  Retrieve Data                       |
| POST         |  Create resources and perform actions|
| PUT          |  Update Data                         |
| DELETE       |  Delete Data                         |


## Response Status
Response status codes are used by our application to indicate whether API calls were successful or unsuccessful. This will assist you in determining the error or message type.

The following table shows the HTTP status codes used in our application.

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
The content-type HTTP header must be set in request headers to make a POST/PUT request with JSON. In our application, the following content types are supported:

 - **Content-Type:** application/json
 - **Content-Type:** application/x-www-form-urlencoded


The content type header in the response headers specifies the type of content returned by the server. In our application, the following content-type header will be present.

 - **Content-Type:** application/json

## Conventions
The JSON format is used in our application for API requests and responses, which can include different data types. The following data types are used in our application for API operations.

| **Type** | **Description** |
| --------- | -----------------|
| String    | String type with Unicode support.     |
| Guid      | 128-bit integer unique identifier.    |
| Long      | Signed 64-bit integral number.        |
| Integer   | Signed 32-bit integral number.        |
| Byte      | Unsigned 8-bit integral number.       |
| Boolean   | True/False type.                      |
| Datetime  | **YYYY-MM-DD THH:MM:SSZ** is the combined date and time format. APIs use the UTC standard for all date-time values<br><br>or <br> <br> Should mention the user's time zone like this **YYYY-MM-DDTHH:MM:SS+00:00**<br><br>**Find the example for IST TimeZone:** <br>2017-05-09T15:04:40.331 +05:30 |
| Date      | **YYYY-MM-DD** is the Date format.    |
| Tuple     | This is a data structure that contains the sequence of elements of different data types. |
| Array     | A sequential collection of elements of the same data type. |

## Pagination
Multiple List API calls in our application, such as [Get Users](../../v2.0/api-reference/#operation/get_user_list), will return more results. Because you will not be able to return them all at once, you must return them one page at a time, called pagination.

**These parameters can be passed to list APIs for pagination.**

| Parameters | Description           |
| ---------- | --------------------- |
| page       | Indicates the current page number. |
| page_size  | Denotes the number of data lists per page.<br><br> - Page size default value is 25. <br> - Page size maximum value is 100. |