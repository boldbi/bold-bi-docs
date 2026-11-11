---
layout: post
title: Monitoring the Health of Bold BI Services | Bold BI Docs
description: "Learn how to monitor each Bold BI application service with health check endpoints, and find setup guides for Datadog, Prometheus, and Grafana."
platform: bold-bi
documentation: ug
---

# Monitoring Bold BI Application

You can monitor the health of Bold BI application services by checking their health check endpoints. The support articles on this page explain how to set up monitoring with Datadog, Prometheus, and Grafana.

## Bold BI Services Health Check Endpoints

Bold BI exposes health information for its services through health check endpoints at the hosted URL, for example `/api/health-check` for IDP-API. [NEEDS FACT: confirm whether these endpoints are enabled by default in each deployment.]

### Service Health Check Endpoints

Use the endpoint below to check the status of all services:

- **All Services Status:**
  
  `https://your-domain.com/api/status`

Use these endpoints to check one service at a time:

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
  
Use these endpoints to confirm whether each service is online. [NEEDS FACT: confirm the response each endpoint returns and what a healthy service returns.]

### Documentation for Enabling Monitoring with Various Tools

Use these support articles to set up monitoring for your Bold BI environment and monitoring tool:

- [How to Monitor and Alert Bold BI Using Grafana and Prometheus in Kubernetes](https://support.boldbi.com/kb/article/624/how-to-monitor-and-alert-bold-bi-using-grafana-and-prometheus-in-kubernetes)
- [Configure Robusta for Alerting and Monitoring Bold BI](https://support.boldbi.com/kb/article/590/configure-robusta-for-alerting-and-monitoring-bold-bi)
- [Monitoring Bold BI Application with Datadog](https://support.boldbi.com/kb/article/16191/monitoring-bold-bi-application-with-datadog)
- [Monitoring the Query Execution Performance of Bold BI with Grafana](https://support.boldbi.com/kb/article/16393/monitoring-the-query-execution-performance-of-bold-bi-with-grafana)
- [Monitoring and Alerting Bold BI in Windows Using Grafana and Prometheus](https://support.boldbi.com/kb/article/592/monitoring-and-alerting-bold-bi-in-windows-using-grafana-and-prometheus)

If your monitoring tool is not covered in these articles, contact Bold BI support for assistance.
