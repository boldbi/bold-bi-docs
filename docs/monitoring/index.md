---
layout: post
title:  Monitoring the Health of Bold BI Services | Bold BI Docs
description: Learn how to monitor the health of Bold BI application services and includes reference links for detailed steps
platform: bold-bi
documentation: ug
---
# Monitoring Bold BI Application

This documentation outlines how to monitor the health of Bold BI application services and includes reference links for detailed steps on enabling monitoring using tools such as Datadog, Prometheus, and Grafana. Follow the steps and guidelines provided in this documentation to effectively monitor your Bold BI application.

## Bold BI Services Health Check Endpoints

By default, Bold BI provides health information for its services through the `/api/health-check` endpoint at the hosted URL. These endpoints can be used to monitor the health of the services.

### Service Health Check Endpoints

Use the following endpoints to check the status of all services or individual services:

- **All Services Status:** 

  `https://your-domain.com/api/status`

For individual service health checks, use these endpoints:

- **IDP-WEB:**  

  `https://your-domain.com/health-check`

- **IDP-API:**  

  `https://your-domain.com/api/health-check`

- **IDP-UMS:** 

  `https://your-domain.com/ums/health-check`

- **BI-WEB:**  

  `https://your-domain.com/bi/health-check`

- **BI-API:** 

  `https://your-domain.com/bi/api/health-check`

- **BI-JOBS:**  

  `https://your-domain.com/bi/jobs/health-check`

- **BI-DESIGNER:** 

  `https://your-domain.com/bi/designer/health-check`

- **BI-ETL:**  

  `https://your-domain.com/etlservice/health-check`

By using the above endpoints, you can ensure that the services are online and functioning correctly.

### Documentation for Enabling Monitoring with Various Tools

To enable monitoring for the Bold BI application based on your specific use case, refer to the following articles:

- [How to Monitor and Alert Bold BI Using Grafana and Prometheus in Kubernetes](https://support.boldbi.com/agent/kb/624)
- [Configure Robusta for Alerting and Monitoring Bold BI](https://support.boldbi.com/agent/kb/590)
- [Monitoring Bold BI Application with Datadog](https://support.boldbi.com/agent/kb/16191)
- [Monitoring the Query Execution Performance of Bold BI with Grafana](https://support.boldbi.com/agent/kb/16393)
- [Monitoring and Alerting Bold BI in Windows Using Grafana and Prometheus](https://support.boldbi.com/agent/kb/592)

If you require integration with a specific monitoring tool that is not covered here, please reach out to our support team for assistance.
