## 1. Edit the page

- [x] 1.1 Replace the opening sentence under the H1.
  - Current: "This article describes how to monitor the health of Bold BI application services and provides reference links with detailed steps for enabling monitoring using tools such as Datadog, Prometheus, and Grafana."
  - Replacement: "You can monitor the health of Bold BI application services by checking their health check endpoints. The support articles on this page explain how to set up monitoring with Datadog, Prometheus, and Grafana."
- [x] 1.2 Replace the description front matter value.
  - Current: "Learn how to monitor the health of Bold BI application services, check that each service is running, and find links to the detailed steps for each environment." (159 characters)
  - Replacement: "Learn how to monitor each Bold BI application service with health check endpoints, and find setup guides for Datadog, Prometheus, and Grafana." (142 characters)
- [x] 1.3 Replace the first health check sentence.
  - Current: "By default, Bold BI exposes health information for its services through health check endpoints at the hosted URL (for example, `/api/health-check`). These endpoints can be used to monitor service health."
  - Replacement: "Bold BI exposes health information for its services through health check endpoints at the hosted URL, for example `/api/health-check` for IDP-API. [NEEDS FACT: confirm whether these endpoints are enabled by default in each deployment.]"
- [x] 1.4 Replace the all-services lead-in.
  - Current: "Use the following endpoints to check the status of all services or individual services:"
  - Replacement: "Use the endpoint below to check the status of all services:"
- [x] 1.5 Replace the individual-services lead-in.
  - Current: "For individual service health checks, use these endpoints:"
  - Replacement: "Use these endpoints to check one service at a time:"
- [x] 1.6 Replace the closing sentence of the endpoint section.
  - Current: "By using the above endpoints, you can verify that the services are online and functioning correctly."
  - Replacement: "Use these endpoints to confirm whether each service is online. [NEEDS FACT: confirm the response each endpoint returns and what a healthy service returns.]"
- [x] 1.7 Replace the lead-in to the support articles.
  - Current: "To enable monitoring for the Bold BI application based on your use case, refer to the following articles:"
  - Replacement: "Use these support articles to set up monitoring for your Bold BI environment and monitoring tool:"
- [x] 1.8 Update the Datadog link address (same article, redirect target). Link text unchanged.
  - Current: `https://support.boldbi.com/kb/article/16191/monitoring-boldbi-application-with-datadog`
  - Replacement: `https://support.boldbi.com/kb/article/16191/monitoring-bold-bi-application-with-datadog`
- [x] 1.9 Replace the closing sentence.
  - Current: "If you require integration with a specific monitoring tool that is not covered here, contact the support team for assistance."
  - Replacement: "If your monitoring tool is not covered in these articles, contact Bold BI support for assistance."

## 2. Unchanged by design
- H1 "Monitoring Bold BI Application", title, all endpoint paths, the five KB link texts, and the front matter keys (layout, platform, documentation).

## 3. Checks
- [x] 3.1 Run `npx gulp typo` (943 files pass).
- [x] 3.2 Run `npx gulp file-validation` (pass).
- [ ] 3.3 Run `npx gulp seo-validation`: fails on the branch before and after this change (unused PNG files under working-with-dashboards and a task that does not signal completion). Not caused by this page.
- [ ] 3.4 Local preview audit at http://localhost:8002/monitoring/ on port 8002.

## 4. Review
- [ ] 4.1 Product owner confirms the three [NEEDS FACT] items (default exposure, response contract, healthy-service response).
- [ ] 4.2 Team decides the main search term and the title phrase versus H1 mismatch.
- [ ] 4.3 Staging review at staginghelp.boldbi.com before the PR is marked ready.
