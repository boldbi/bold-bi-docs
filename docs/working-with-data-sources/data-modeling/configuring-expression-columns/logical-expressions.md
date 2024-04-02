---
layout: post
title: Configuring Logical Expression Fields | Bold BI Embedded Docs
description: Learn how to configure expression fields comprising calculated logical expressions using built-in functions in Bold BI Embedded.
platform: bold-bi
documentation: ug

---

# Configure Logical expression

## Functions

### AND

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>(expression1) AND (expression2)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns true if both the expressions evaluate to true.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>IF([CustomerID]='VINET' AND [OrderID]='10248', [Discount], [Discount]+0.1)</td>
    </tr>
</table>

### NOT

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>NOT(expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the reversed logical value of the expression being evaluated.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>IF(NOT [CustomerID]='VINET', [Freight], [Freight]-100)</td>
    </tr>
</table>

### OR

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>(expression1) OR (expression2)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns true if any of the expressions evaluate to true.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>IF([CustomerID]='VINET' OR [OrderID]='10248', [Discount], [Discount]+0.1)</td>
    </tr>
</table>
