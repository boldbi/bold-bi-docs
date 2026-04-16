---
layout: post
title: Exploring Bold BI - An Overview | Bold BI Documentation
description: Study the overview of Bold BI and learn about its two embedding methods, JavaScript-based embedding and iframe-based embedding.
canonical: "/overview/"
platform: bold-bi
documentation: ug
---

# Overview of Bold BI

Bold BI is an analytics solution designed to help organizations transform raw data into actionable insights. Whether you need self-service dashboards or an embedded analytics experience, Bold BI provides deployment options and [security](https://www.boldbi.com/legal/security/) features for teams of all sizes.

The platform uses a modern data architecture model and includes inbuilt capabilities. With Bold BI, you can [**connect to your data**](/working-with-data-sources/data-connectors/), modify it to suit your requirements, [**construct dashboards**](/getting-started/creating-dashboard/) with relevant KPIs, and share them with your users for collaboration. Depending on your use case requirements, several other features can be enabled throughout these processes.

Bold BI also offers [**flexible deployment options**](/deploying-bold-bi/). You can use the Syncfusion Cloud Managed service, or deploy Bold BI in your own cloud environment or on-premises servers.

Whichever deployment you choose, integration is supported through two methods: [**JavaScript Embedding**](/embedding-options/embedding-sdk/) and [**iframe Embedding**](/embedding-options/iframe-embedding/). JavaScript Embedding is recommended for website integration and is delivered through the [**Embedded SDK APIs**](/embedding-options/embedding-sdk/component-api-v2.0/). This method supports a consistent user experience for embedded analytics.

## Bold BI: Designed for Everyone

Bold BI supports self-service and embedded analytics for teams across industries, including developers and business users.

**Businesses of All Sizes** - From startups to large enterprises, Bold BI supports data-driven decision-making. The analytics experience can be used for scaling operations or optimizing processes based on business needs.

**Developers and IT Professionals** - Bold BI provides APIs, sample code, and integration options to embed analytics directly into applications with control and customization.

**Data Analysts and Business Users** - Data analysts, data scientists, and business users can use self-service analytics features to explore data, generate insights, and share findings.

## Key Features

### Effortless Dashboard Creation

- [**Build Dashboards in Minutes**](/getting-started/creating-dashboard/) - Support non-technical users in creating or modifying dashboards and reduce IT dependency. Use interactive visuals to support decision-making.

- [**Data Visualization**](/visualizing-data/visualization-widgets/) - Create dashboards using an intuitive drag-and-drop designer with 40+ interactive charts, maps, and graphs. Present data in a format suitable for analysis and reporting.

- **Interactive and Drill-Down Capabilities** - Explore data using dashboards to review updates and trends. You can [drill down](https://www.boldbi.com/blog/unlocking-insights-mastering-drill-down-analysis/), [apply filters](/working-with-dashboards/configuring-cross-filters/), and analyze results for decision-making.

- **Dashboard Customization** - Design dashboards with flexible or fixed layouts to support usage across devices and maintain consistency.

- [**Slideshows**](/managing-resources/manage-slideshows/) / **TV Mode** - Display dashboards in full-screen slideshow mode for monitoring. Rotate through dashboards automatically in environments such as command centers and office displays.

- [**Export Options**](/working-with-dashboards/preview-dashboard/exporting-reports-from-widgets/exporting-options/) - Support multiple export formats, including **PDF**, **PowerPoint**, **Excel**, or **CSV**, for sharing and offline analysis.

- [**Mobile-Friendly Dashboards**](/mobile-app/) - Access dashboards on devices with responsive design.

- **Prebuilt Dashboard Examples** - Use ready-to-use dashboard templates across industries, including sales, marketing, finance, healthcare, and operations. Customize templates to match your requirements.

### Seamless Data Connectivity

- [**Extensive Data Sources**](/working-with-data-sources/data-connectors/) - Connect data from files, databases, APIs, or cloud storage. Integrate and blend data from over **150 sources**, including [**SQL Server**](/working-with-data-sources/data-connectors/ms-sql-server/), [**PostgreSQL**](/working-with-data-sources/data-connectors/postgresql/), [**MySQL**](/working-with-data-sources/data-connectors/mysql/), [**Google Analytics**](/working-with-data-sources/data-connectors/google-analytics-4/), [**Salesforce**](/working-with-data-sources/data-connectors/salesforce/), [**HubSpot**](/working-with-data-sources/data-connectors/hubspot/), and [**Zendesk**](/working-with-data-sources/data-connectors/zendesk/). Support is also available for [**custom connectors**](/working-with-data-sources/custom-connector/).

- [**Data Modeling**](/working-with-data-sources/data-modeling/) - Prepare data using built-in features such as [**filters**](/working-with-data-sources/data-modeling/configuring-data-filters/), [**joins**](/working-with-data-sources/data-modeling/joining-table/), [**expression support**](/working-with-data-sources/data-modeling/configuring-expression-columns/), and **data type** transformations. Unify, transform, and blend multiple data sources to maintain a consistent view without additional integration software.

- [**Inbuilt ETL Capabilities**](/working-with-data-sources/working-with-bold-data-hub/) - **Bold Data Hub** supports data transformation, visual modeling, calculated fields, and multi-source integration without separate add-ons or tools.

- **Data Processing Modes** - Choose between [live or extract mode](/working-with-data-sources/) based on your data needs. Live mode supports real-time updates, while extract mode can improve performance by storing optimized snapshots.

### AI-Powered Insights

- [**AI-Powered Analytics**](/artificial-intelligence-and-machine-learning/) - Use AI to create widgets or explore data through conversational chat. Ask questions, generate visualizations, and refine results. You can also use AI-generated summaries of dashboards and widgets to review trends, anomalies, and insights.

- [**Predictive Analytics**](/artificial-intelligence-and-machine-learning/time-series-forecasting/) - Use forecasting and trend analysis to support planning and decision-making.

### Team Collaboration & Sharing

- [**Version Control**](/managing-resources/manage-dashboards/version-history-of-dashboards/) - Maintain a history of dashboard changes with built-in versioning. Restore previous versions and track modifications.

- [**Collaboration Options**](/working-with-dashboards/share-dashboards/collaboration/) - Share, comment, and co-author dashboards. Use collaboration features to support team workflows.

- [**Automated Dashboard Delivery**](/managing-resources/manage-schedules/) - Set up scheduled deliveries of dashboards as PDFs, images, or Excel files.

- [**Data Alerts**](/working-with-dashboards/data-alerts/) - Configure alerts for anomalies, threshold breaches, or KPI changes through email, SMS, or push notifications.

### Enterprise-Grade Security & Access Control

- **Robust Security and Governance** - Use [**multi-factor authentication**](/multi-tenancy/two-factor-authentication/), role-based access control, and [**single sign-on (SSO)**](/security-configuration/single-sign-on/) options, including Office 365, OpenID, OAuth 2.0, and [**Active Directory**](/site-administration/user-directory-settings/active-directory/). You can also use row-level security and a [**granular permission model**](/managing-resources/manage-permissions/).

- [**Multi-Tenant Support**](/multi-tenancy/) - Use multi-tenant architecture to manage separate departments or clients from one portal while enforcing role-based access, data isolation, and compliance requirements.

- **Role-Based Access** - Control user permissions using row-level security. Define user roles and enforce dynamic access restrictions. Refer to [How to Implement Role-Based Access Control for Dashboards in Bold BI?](https://support.boldbi.com/kb/article/16436/how-to-implement-role-based-access-control-for-dashboards-in-bold-bi)

### Seamless Embedding & API Integration

- [**Embedded Analytics SDK**](/embedding-options/embedding-sdk/) - Integrate dashboards into applications using [**iframe**](/embedding-options/iframe-embedding/), [**JavaScript**](/embedding-options/embedding-sdk/token-generation/), or [**full server-side embedding**](). Use the SDK to embed dashboard designers, viewers, or specific widgets into applications built with [**Angular**](/embedding-options/embedding-sdk/samples/angular-with-core/), [**React**](/embedding-options/embedding-sdk/samples/react-core/), [**.NET Core**](/embedding-options/embedding-sdk/samples/asp-net-core/), and other [popular frameworks](/embedding-options/embedding-sdk/samples/).

- [**Powerful API Integration**](/server-api-reference/interact-with-rest-api/) - Use APIs, SDKs, and code samples for application integration.

### Branding & Customization

- [**White Labeling**](/white-labeling-in-bold-bi/) - Rebrand the interface with custom logos, fonts, and color schemes.

- [**Custom Theme**](/multi-tenancy/site-administration/look-and-feel-settings/theme/) - Configure themes including colors, typography, and layout styles.

- [**Localization**](/multi-tenancy/site-administration/manage-localization/) - Configure language support, date-time formats, and regional settings.

- [**Custom Domain**](/site-administration/custom-domain-in-cloud-bi/) - Use your own domain to provide a branded experience.

### Performance & Optimization

- [**Data Caching**](/working-with-dashboards/data-cache/) - Use caching to reduce load times and optimize data retrieval.

- [**Incremental Data Refresh**](/working-with-data-sources/data-connectors/ms-sql-server/#incremental-update) - Fetch only new or updated data instead of reloading entire datasets.

- [**Virtual Loading**](/visualizing-data/working-with-widgets/virtual-scrolling/) - Load data dynamically in chunks as users scroll or interact.

### Flexible Deployment & Scalability

- [**Flexible Deployment Options**](/deploying-bold-bi/) - Set up your analytics environment with support for [**Windows**](/deploying-bold-bi/deploying-on-windows/), [**Linux**](/deploying-bold-bi/deploying-on-linux/), [**Docker**](/deploying-bold-bi/deploying-on-docker/), [**Kubernetes**](/deploying-bold-bi/deploying-on-kubernetes/), and [**Azure App Service**](/deploying-bold-bi/deploying-on-azure-app-service/) deployment options to suit your infrastructure needs.

### Pricing

- [**Pricing**](https://www.boldbi.com/pricing) - Simple, predictable pricing with no per-user fees, ensuring cost-effective scaling. Get analytics at a flat rate with no hidden fees or per-user charges.