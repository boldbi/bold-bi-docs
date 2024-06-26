---
layout: post
title:  How to avoid deployment issues in site creation | Bold BI Docs
description: This page summarizes how to avoid deployment pending problem(s) during or after site creation in Bold BI on-premises application(s).
platform: bold-bi
documentation: ug
---

# How to Avoid Deployment Pending Problem after the Site Creation in Bold BI On-Premises

If you failed to enable the necessary features needed to run the Bold BI server, you may encounter deployment issues in the Bold BI on-premises application after creating a new site. To prevent this, verify and enable the IIS and features listed in the following Windows OS to run the Bold BI server:

* [**Windows Client OS**](/faq/features-needed-to-enable-in-iis-to-run-bold-bi-in-win-client-os/)
* [**Windows Server OS**](/faq/features-needed-to-enable-in-iis-to-run-bold-bi-in-win-server-os/)

Once the features are enabled, restart the Bold BI application in IIS and then create a [new site](/multi-tenancy/create-new-site/) in Bold BI