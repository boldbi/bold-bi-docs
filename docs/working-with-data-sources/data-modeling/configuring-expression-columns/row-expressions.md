---
layout: post
title: Configuring Row Expression Fields | Bold BI Embedded Docs
description: Learn how to configure expression fields comprising calculated row expressions using built-in functions in Bold BI Embedded.
platform: bold-bi
documentation: ug

---

# Configure Row expression

## Functions

### RUNNINGCOUNT

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>RUNNINGCOUNT(aggregate_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the running count of each row.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>RUNNINGCOUNT(MAX([OrderID]))</td>
    </tr>
</table>

### RUNNINGAVG

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>RUNNINGAVG(aggregate_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the running average of each row.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>RUNNINGAVG(MAX([UnitsInStock]))</td>
    </tr>
</table>

### RUNNINGMAX

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>RUNNINGMAX(aggregate_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the running maximum values of each row.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>RUNNINGMAX(SUM([UnitsInStock]))</td>
    </tr>
</table>

### RUNNINGMIN

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>RUNNINGMIN(aggregate_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the running minimum values of each row.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>RUNNINGMIN(SUM([UnitsInStock]))</td>
    </tr>
</table>

### RUNNINGSUM

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>RUNNINGSUM(aggregate_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the running sum values of each row.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>RUNNINGSUM(MAX([UnitsInStock]))</td>
    </tr>
</table>
