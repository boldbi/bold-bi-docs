---
layout: post
title: Comparison of Embedding SDK Vs. iFrame Embedding | Bold BI Docs
description: Explore the differences between SDK and iFrame embedding to determine the option that best suits your needs.
platform: bold-bi
documentation: ug
---

# Comparison between Embedding SDK vs iFrame Embedding

This section allows to explore the difference between embedding SDK and iFrame embedding with Bold BI and choose the appropriate one that suit your business need.

<meta charset="utf-8"/>
<table>
  <thead>
    <tr>
        <th scope="col"></th>
        <th scope="col">Embedding SDK</th>
        <th scope="col">iFrame Embedding</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td align="left">Language/FrameWork</td>
        <td align="left">Javascript</td>
        <td align="left">Basic HTML</td>
    </tr>
    <tr>
        <td align="left">Deploymnet</td>
        <td align="left">Requires coding knowledge.</td>
        <td align="left">Simple ifrmae embedding doesn't require the coding knowledge whereas token based iframe embedding requires coding knowledge.</td>
    </tr>
    <tr>
        <td align="left">Token Based Embedding</td>
        <td align="left">Yes</td>
        <td align="left">Yes</td>
    </tr>
    <tr>
        <td align="left">Security</td>
        <td align="left">Yes</td>
        <td align="left">Yes</td>
    </tr>
        <tr>
        <td align="left">Supported embedding module </td>
        <td align="left">  
We can embed below modules seamlessly,
<ol>
<li>Dashboard</li>
<li>Widgets</li>
<li>Designer</li>
<li>Pinboard</li>
<li>Connection</li>
<li>Datasource</li>
</ol>
</td>
        <td align="left">
We can embed below modules,
<ol>
<li>Dashboard</li>
<li>Widgets</li>
<li>Designer</li>
<li>Connection</li>
<li>Datasource</li>
<li>Entire server UI</li>
</ol>
</td>
    </tr>
    <tr>
        <td align="left">Customization</td>
        <td align="left">It offers customizations like
<ul>
<li>Style</li>
<li>Appearance</li>
<li>Event handling and Methods</li>
<li>Theme</li>
<li>Filters</li>
</ul>

<B>Reference:</B>
<a href= "/embedding-options/embedding-sdk/embedding-api-reference/">https://help.boldbi.com/embedding-options/embedding-sdk/embedding-api-reference</a>
</td>
                <td align="left">It offers limited customizations like
<ul>
<li>Appearance</li>
<li>Theme</li>
<li>Filters</li>
</ul>
</td>
    </tr>
    <tr>
        <td align="left">Embedding sample</td>
        <td align="left">Component based sample <a href="/embedding-options/embedding-sdk/samples">here</a></td>
        <td align="left">iFrame based sample <a href="/embedding-options/iframe-embedding/sample/">here</a></td>
    </tr>
  </tbody>
</table>

