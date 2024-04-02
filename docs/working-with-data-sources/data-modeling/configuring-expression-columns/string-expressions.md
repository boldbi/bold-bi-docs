---
layout: post
title: Configuring String Expression Fields | Bold BI Embedded Docs
description: Learn how to configure expression fields comprising calculated string expressions using built-in functions in Bold BI Embedded.
platform: bold-bi
documentation: ug

---

# Configure String expression

## Functions

### LEN

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>LEN(string_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the number of characters in the given string expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>LEN([ShipPostalCode])</td>
    </tr>
</table>

### CHAR

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>CHAR(integer_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Converts the given integer ASCII code into a character.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>CHAR(70)</td>
    </tr>
</table>

### CONCAT

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>CONCAT(string_expression1, string_expression2,…, string_expressionN)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns a string value resulting from the concatenation of two or more string values.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>CONCAT('https://en.wikipedia.org/wiki/Main_Page', [ShipCity])</td>
    </tr>
</table>

### CONTAINS

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>CONTAINS(string_expression, substring_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns true if the given string expression contains the specified substring expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>CONTAINS([Shipping Address], [ShipCountry])</td>
    </tr>
</table>

### ENDSWITH

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>ENDSWITH(string_expression, substring_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns true if the given string expression ends with the specified substring expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>ENDSWITH([CustomerID], 'A')</td>
    </tr>
</table>

### INITCAP

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>INITCAP(string_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Converts the first character in each word to uppercase and the remaining characters to lowercase.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>INITCAP([ProductName])</td>
    </tr>
</table>

### LEFT

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>LEFT(string_expression, numeric_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the specified number of characters from the start of the given string expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>LEFT([ShipAddress], 6)</td>
    </tr>
</table>

### LOWER

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>LOWER(string_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns a lower case converted string value from a given string expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>LOWER([ShipCountry])</td>
    </tr>
</table>

### LTRIM

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>LTRIM(string_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the string value with any leading blanks from string expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>LTRIM('Removes trailing spaces.')</td>
    </tr>
</table>

### MAX

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>MAX(expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the maximum value in the given expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>MAX([ProductName])</td>
    </tr>
</table>

### MIN

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>MIN(expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the minimum value in the given expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>MIN([ProductName])</td>
    </tr>
</table>

### REPLACE

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>REPLACE(string_expression, substring, new_substring)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Replaces all occurrences of the substring within the given string expression, with the new_substring.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>REPLACE([ShipCountry],'France','India')</td>
    </tr>
</table>

### RIGHT

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>RIGHT(string_expression, numeric_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the specified number of characters from the end of the given string expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>RIGHT([ProductName], 6)</td>
    </tr>
</table>

### RTRIM

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>RTRIM(string_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the string value with any trailing blanks removed from a string expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>RTRIM('Remove trailing spaces.')</td>
    </tr>
</table>

### STARTSWITH

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>STARTSWITH(string_expression, substring_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns true if the given string expression starts with the specified substring expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>STARTSWITH([CustomerID], 'A')</td>
    </tr>
</table>

### SUBSTR

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>SUBSTR(string_expression, starting_index, length_of_the_string)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns a specific length of a string starting from a specific index from the given string expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>SUBSTR([CustomerID],1,3) - For example, to truncate 'user' from 'user@gmail.com' give value from 0 to 3.</td>
    </tr>
</table>

### TRIM

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>TRIM(string_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Removes the leading and trailing spaces from the string expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>TRIM('Remove trailing spaces.')</td>
    </tr>
</table>

### UPPER

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>UPPER(string_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns an upper case converted string value from a given string expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>UPPER([ShipCountry])</td>
    </tr>
</table>
