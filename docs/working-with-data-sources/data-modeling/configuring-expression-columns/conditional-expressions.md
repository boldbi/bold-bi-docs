---
layout: post
title: Configuring Conditional Expression Fields | Bold BI Embedded Docs
description: Learn how to configure expression fields comprising calculated conditional expressions using built-in functions in Bold BI Embedded.
platform: bold-bi
documentation: ug

---

# Configure Conditional expression

## Functions

### COALESCE

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>COALESCE(exp1,exp2,...exp(n))</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the first non-NULL expression among its arguments or NULL if all its arguments are NULL.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>COALESCE(3+NULL, 2*NULL, 5*2*7)</td>
    </tr>
</table>

### IF

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>IF(expression, true_part, false_part)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns either the true part or the false part, depending on the evaluation of the expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>IF([CustomerID]='VINET' AND [OrderID]='10248', [Discount], [Discount]+0.1)</td>
    </tr>
</table>

### ELSE IF

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>IF(expression,1,IF(expression,0,1))</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns either the true part or the evaluated if expression in the false part, depending on the evaluation of the expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>IF([id] >5,1,IF([id] <5,0,1))</td>
    </tr>
</table>

### IFNULL

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>IFNULL(expression1, expression2)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns expression1 if the expression1 evaluates to be not null.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>IFNULL([ShipRegion],'Region not specified')</td>
    </tr>
</table>

### ISNOTNULL

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>ISNOTNULL(expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns true if the given expression evaluates to be not null.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>ISNOTNULL([ShipRegion])</td>
    </tr>
</table>

### ISNULL

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>ISNULL(expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns true if the given expression evaluates to null.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>ISNULL([ShipRegion])</td>
    </tr>
</table>

