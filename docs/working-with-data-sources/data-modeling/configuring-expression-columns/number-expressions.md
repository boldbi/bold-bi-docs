---
layout: post
title: Configuring Number Expression Fields | Bold BI Embedded Docs
description: Learn how to configure expression fields comprising calculated number expressions using built-in functions in Bold BI Embedded.
platform: bold-bi
documentation: ug

---

# Configure Number expression

## Functions

### ABS

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>ABS(numeric_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the absolute value of a given expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>ABS([Freight])</td>
    </tr>
</table>

### ACOS

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>ACOS(numeric_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the inverse cosine (also known as arccosine) of the given numeric expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>ACOS(0.25)</td>
    </tr>
</table>

### ASIN

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>ASIN(numeric_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the inverse sine (also known as arcsine) of the given numeric expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>ASIN(0.25)</td>
    </tr>
</table>

### ATAN

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>ATAN(numeric_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the inverse tangent (also known as arctangent) of the given numeric expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>ATAN(0.25)</td>
    </tr>
</table>

### CEIL

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>CEIL(numeric_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the smallest integer value that is greater than or equal to the given numeric expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>CEIL([Freight])</td>
    </tr>
</table>

### COS

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>COS(numeric_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the cosine of the angle specified in radians in the given expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>COS(0.25)</td>
    </tr>
</table>

### COT

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>COT(numeric_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the cotangent of the angle specified in radians in the given expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>COT(0.25)</td>
    </tr>
</table>

### DEGREES

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>DEGREES(numeric_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the angle in degrees for the one specified in radians in the given numeric expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>DEGREES(1.5708)</td>
    </tr>
</table>

### EXP

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>EXP(numeric_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the exponential value of the given expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>EXP([UnitsInStock])</td>
    </tr>
</table>

### FLOOR

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>FLOOR(numeric_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the largest integer value that is less than or equal to the given numeric expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>FLOOR([Freight])</td>
    </tr>
</table>

### MOD

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>MOD(numeric_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the remainder of the first numeric expression divided by the second numeric expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>MOD(36,6)</td>
    </tr>
</table>

### LOG

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>LOG(numeric_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the logarithm of the given expression to the specified base.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>LOG(DEGREES(PI()))</td>
    </tr>
</table>

### PI

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>PI()</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the constant value of PI.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>EXP(PI())</td>
    </tr>
</table>

### POWER

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>POWER(expression1, expression2)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the value of the given expression (expression1) to the specified power (expression2).</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>POWER(EXP(1), SIN(90))</td>
    </tr>
</table>

### RADIANS

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>RADIANS(numeric_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the angle in radians for the one specified in degrees in the given numeric expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>RADIANS(90)</td>
    </tr>
</table>

### ROUND

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>ROUND(numeric_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns a rounded value.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>ROUND([Freight])</td>
    </tr>
</table>

### SIGN

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>SIGN(numeric_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns a value representing the positive (+1), zero (0), or negative (-1) sign of the given numeric expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>SIGN([UnitsOnOrder])</td>
    </tr>
</table>

### SIN

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>SIN(numeric_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the sine of the angle specified in radians in the given expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>SIN(0.25)</td>
    </tr>
</table>

### SQRT

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>SQRT(numeric_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the square root of the given numeric expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>SQRT([UnitsInStock])</td>
    </tr>
</table>

### TOTALPERCENTAGE

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>TOTALPERCENTAGE(numeric_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the percentage value for each row from the grand total of the given column.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>TOTALPERCENTAGE([Freight])</td>
    </tr>
</table>

### TAN

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>TAN(numeric_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the tangent of the given numeric expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>TAN(0.25)</td>
    </tr>
</table>



