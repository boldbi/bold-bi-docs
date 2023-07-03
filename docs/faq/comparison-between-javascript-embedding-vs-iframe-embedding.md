---
layout: post
title: JavaScript Embedding Vs. iFrame Embedding | Bold BI Docs
description: Explore the differences between JavaScript embedding and iFrame embedding with Bold BI and choose the appropriate one that suit your business need.
platform: bold-bi
documentation: ug
---

# Comparison between JavaScript Embedding vs iFrame Embedding

<meta charset="utf-8"/>
<table>
  <thead>
    <tr>
        <th scope="col">         </th>
        <th scope="col">JavaScript Embedding</th>
        <th scope="col">iFrame Embedding</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td align="left">Security</td>
        <td align="left">Allow embedding application to add more security control by implementing your own authorization server. 

<a href="https://help.boldbi.com/embedded-bi/javascript-based/authorize-server">https://help.boldbi.com/embedded-bi/javascript-based/authorize-server</a></td>
        <td align="left">Uses the Bold BI login by default. Hence have to create user accounts in Bold BI too.</td>
    </tr>
    <tr>
        <td align="left">SSO Embedding</td>
        <td align="left">Yes</td>
        <td align="left">Yes. 
Also, supports anonymous embedding for public dashboards which is not the preferable case every time. 
</td>
    </tr>
    <tr>
        <td align="left">Performance</td>
        <td align="left">Renders faster as it is embedded as part of the application using JavaScript.</td>
        <td align="left">Will be slower when compared to JavaScript embedding.</td>
    </tr>
    <tr>
        <td align="left">Implementation</td>
        <td align="left">Requires coding knowledge.</td>
        <td align="left">Anonymous embedding doesn't require the coding knowledge whereas SSO embedding requires coding knowledge.</td>
    </tr>
    <tr>
        <td align="left">Customization</td>
        <td align="left">It offers customizations like
<ul>
<li>Style</li>
<li>Appearance</li>
<li>Event handling</li>
<li>Filters</li>
</ul>

<B>Reference:</B>
<a href= "https://help.boldbi.com/embedded-bi/javascript-based/api-reference">https://help.boldbi.com/embedded-bi/embedded-bi/javascript/api-reference</a>  
</td>
        <td align="left">Not supported.</td>
    </tr>
    <tr>
        <td align="left">User interaction</td>
        <td align="left">Allows user interaction with the help of events and filters.</td>
        <td align="left">Not supported.</td>
    </tr>
    <tr>
        <td align="left">Supported embedding module </td>
        <td align="left">  
We can embed below modules seamlessly,
<ol>
<li>Dashboard</li>
<li>Widgets</li>
<li>Designer</li>
</ol>
</td>
        <td align="left">
We can embed below modules but user need to login each time due to cross site cookie blocked in most of the browsers. 
<ol>
<li>Dashboard</li>
<li>Widgets</li>
<li>Designer</li>
</ol>
</td>
    </tr>
    <tr>
        <td align="left">Bold BI Pricing </td>
        <td align="left">Requires embedding plans - Check the <a href="https://www.boldbi.com/pricing">pricing plans</a></td>
        <td align="left">Anonymous embedding works on all plans whereas secure embedding works only on embedding plans.</td>
    </tr>
    <tr>
        <td align="left">Embedding sample</td>
        <td align="left">Component based sample <a href="https://help.boldbi.com/embedded-bi/javascript-based/samples">here</a></td>
        <td align="left">iFrame based sample <a href="https://help.boldbi.com/embedded-bi/iframe-based/sample">here</a></td>
    </tr>
  </tbody>
</table>

