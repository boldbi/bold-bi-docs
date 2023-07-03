---
layout: post
title: Nested key-values in Snowflake data source | Bold BI Docs
description: Learn how to access nested key-values in Snowflake data source and bind to the dashboard embedded in your application.
platform: bold-bi
documentation: ug
---

# Accessing nested key-values in Snowflake data source

1.	Drag and drop the table which has the **Object** data type field in Bold BI as shown in the below image. 

    ![Object Field](/static/assets/faq/images/object-data-type-field.png)  
    > **NOTE:**  The object datatype will be hidden on data preview but can be accessed by creating expressions in Bold BI.

2.	Save the data source and continue to create dashboard in Bold BI.

    ![Save Datasource](/static/assets/faq/images/save-datasource.png)

3.	Drag and drop the grid widget and click on the assign data section to start creating expressions.   
  
    ![Create Expression](/static/assets/faq/images/create-expression.png)
   
4.	Press on the expressions button and add the JSON path value as shown in the below image.

    ![Expression Button](/static/assets/faq/images/expression-button.png)
  
    To remove double quotes from the parsed JSON values, you need to cast a data type along with the JSON path as shown in the following image.
    
    ![JSON Path](/static/assets/faq/images/json-path.png)  

5.	Assign values to the widget as shown in the below image.
    
    ![Widget Value](/static/assets/faq/images/widget-assign-value.png)
    

6.	The final rendered widget on dashboard is as shown in the below image.
  
    ![Render Widget](/static/assets/faq/images/render-widget.png)

## References:

   [Json Basic Query](https://docs.snowflake.com/en/user-guide/json-basics-tutorial-query.html)

   [Json Data Types](https://w3schools.com/js/js_json_datatypes.asp)
