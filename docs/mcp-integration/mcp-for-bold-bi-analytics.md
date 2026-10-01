---
layout: post
title: Bold BI MCP Tool User Guide for AI Assistants | Bold BI
description: Configure and use the Bold BI MCP Tool to access dashboards, data sources, users, schedules, exports, and analytics through AI assistants.
canonical: "/mcp-integration/mcp-for-bold-bi-analytics/"
platform: bold-bi
documentation: ug
---

# Bold BI MCP Tool

## Overview

The Bold BI MCP Tool is a Model Context Protocol (MCP) server that lets AI assistants and MCP-compatible applications interact with Bold BI through structured tools.

Model Context Protocol (MCP) is a standardized protocol that allows AI assistants to connect to external systems through structured tools over a Streamable HTTP endpoint. Instead of calling Bold BI's REST API directly, a user can ask a question in natural language, and the AI assistant invokes the matching MCP tool to retrieve information or perform an action on their behalf.

The Bold BI MCP Tool exposes **51 tools** across dashboards, data sources, users, groups, schedules, slideshows, pinboards, items, categories, published content, and webhooks. These are read-and-operate tools covering discovery, inspection, and export of Bold BI content.

Using an MCP-compatible client, users can:

- Discover available dashboards and content.
- Retrieve dashboard, data source, user, and group information.
- Export dashboards and data sources.
- Review permissions and access history.
- Monitor schedules and governance information.
- Integrate Bold BI operations into AI-powered workflows.

## How the MCP Tool Works

The Bold BI MCP Tool acts as a bridge between an MCP-compatible client and a Bold BI site.

1. The user submits a request through an AI assistant or MCP-compatible client.
2. The MCP client sends the request to the Bold BI MCP service.
3. The MCP service authenticates the request using the token supplied in the `Authorization` header.
4. The MCP service routes the request to the target Bold BI site specified in the `ServiceURL` header.
5. The Bold BI site API executes the requested operation.
6. The result is returned to the MCP service.
7. The MCP service returns the response to the MCP client.
8. The AI assistant presents the result to the user.

### Components

| Component | Description |
|---|---|
| MCP Client | An MCP-compatible application — such as Claude, VS Code, Cursor, or a custom AI agent — that supports Streamable HTTP transport. |
| MCP Service Endpoint | The hosted Bold BI MCP service that exposes the available tools (`https://mcp.boldbi.com/api/mcp`). |
| Authorization Header | Authenticates the request against the target Bold BI site. |
| ServiceURL Header | Identifies the target Bold BI site that should process the request. |
| Bold BI Site | Executes the requested operation and returns the result. |

## Prerequisites

Before configuring the Bold BI MCP Tool, make sure the following are in place.

**Bold BI requirements**
- A reachable Bold BI site Caller URL.
- A valid Bold BI user account or service account.
- A valid Bold BI authentication token (Bearer or Basic).
- Permissions required for the operations you want to perform.

**Required connection information**
- Bold BI MCP endpoint URL.
- Bold BI site API URL.
- A valid authentication token.

**Network requirements**
- Outbound HTTPS access to `https://mcp.boldbi.com/api/mcp`.
- Firewall rules that don't block access to the MCP endpoint.
- Proxy configurations that allow traffic to the hosted service.
- The target Bold BI site must be reachable from the MCP service.

**MCP client requirements**

Your client must support:
- Model Context Protocol (MCP)
- Streamable HTTP transport
- Custom HTTP headers

## Authentication

The MCP service forwards the `Authorization` header it receives to the Bold BI REST API. Authenticate requests using a Bold BI API key.

>Generate an API key form your Bold BI profile. For instructions, see [Generate a Bold BI API Key](https://help.boldbi.com/managing-resources/user-profile/#api-key).

| Form | Example | Notes |
|---|---|---|
| API key | `Authorization: <bold-bi-api-key>` | Use a valid API key generated form your Bold BI profile. |

### Required headers

| Header | Required | Description |
|---|---|---|
| `Authorization` | Yes | Authentication token used to access Bold BI. |
| `ServiceURL` | Yes | API URL of the target Bold BI site. |

## Configure an MCP Client

Use this MCP service endpoint:

```text
https://mcp.boldbi.com/api/mcp
```

Every tool call that reaches Bold BI must include the `Authorization` and `ServiceURL` headers described above.

**Example configuration using authorization token**

```json
{
  "servers": {
    "boldbi": {
      "type": "http",
      "url": "https://mcp.boldbi.com/api/mcp",
      "headers": {
        "Authorization": "${BOLDBI_TOKEN}",
        "ServiceURL": "http://your-boldbi-host/bi/api/site/site1"
      }
    }
  }
}
```

> Replace `http://your-boldbi-host/bi/api/site/site1` with your own Bold BI site's API base URL.

## Available MCP Tools

The Bold BI MCP service exposes **51 tools**, organized into 11 functional categories.

### Dashboard tools (15)

| Tool | Purpose | Type |
|---|---|---|
| `dashboard_list` | Returns dashboards available to the authenticated user. | Read |
| `dashboard_get` | Retrieves details for a specific dashboard. | Read |
| `dashboard_favorite_list` | Lists dashboards marked as favorites. | Read |
| `dashboard_public_list` | Lists dashboards published as public. | Read |
| `dashboard_draft_list` | Lists dashboard drafts. | Read |
| `dashboard_export` | Exports dashboard content. | Export |
| `dashboard_widgets_list` | Retrieves the widgets contained in a dashboard. | Read |
| `dashboard_view_list` | Lists views configured for a dashboard. | Read |
| `dashboard_view_get` | Retrieves details for a specific dashboard view. | Read |
| `dashboard_permissions_get` | Retrieves permissions configured on a dashboard. | Read |
| `dashboard_by_group_permissions_list` | Returns dashboards accessible to a specified group. | Read |
| `dashboard_access_history_get` | Retrieves access history for a dashboard. | Audit |
| `dashboard_download_prepare` | Prepares a dashboard export for download. | Export |
| `dashboard_download_status_get` | Retrieves the status of a prepared download. | Export |
| `dashboard_upload_status_get` | Retrieves the status of a dashboard upload. | Read |

### Dashboard settings tools (2)

| Tool | Purpose | Type |
|---|---|---|
| `dashboard_settings_get` | Retrieves global dashboard configuration settings. | Read |
| `deployment_dashboard_list` | Lists dashboards available in a deployment. | Read |

### Category tools (2)

| Tool | Purpose | Type |
|---|---|---|
| `category_list` | Lists available categories. | Read |
| `category_get` | Retrieves details for a specific category. | Read |

### Data source tools (6)

| Tool | Purpose | Type |
|---|---|---|
| `datasource_list` | Lists available data sources. | Read |
| `datasource_get` | Retrieves details for a specific data source. | Read |
| `datasource_columns_list` | Retrieves the columns exposed by a data source. | Read |
| `datasource_linked_dashboards_list` | Lists dashboards linked to a data source. | Read |
| `datasource_export` | Exports data source content. | Export |
| `datasource_activity_get` | Retrieves recent activity for a data source. | Audit |

### User tools (8)

| Tool | Purpose | Type |
|---|---|---|
| `user_list` | Lists users. | Read |
| `user_get` | Retrieves details for a specific user. | Read |
| `user_groups_list` | Lists groups a user belongs to. | Read |
| `user_attributes_get` | Retrieves attributes assigned to a user. | Read |
| `user_permissions_get` | Retrieves permissions assigned to a user. | Read |
| `user_csv_template_download` | Downloads the CSV template used for bulk user import. | Download |
| `user_import_job_status_get` | Retrieves the status of a user import job. | Read |
| `user_import_failed_list` | Lists records that failed during a user import. | Read |

### Group tools (5)

| Tool | Purpose | Type |
|---|---|---|
| `group_list` | Lists groups. | Read |
| `group_get` | Retrieves details for a specific group. | Read |
| `group_users_list` | Lists users assigned to a group. | Read |
| `group_attributes_get` | Retrieves attributes assigned to a group. | Read |
| `group_permissions_get` | Retrieves permissions assigned to a group. | Read |

### Item and pinboard tools (6)

| Tool | Purpose | Type |
|---|---|---|
| `item_list` | Lists items available on the site. | Read |
| `item_get` | Retrieves details for a specific item. | Read |
| `item_name_exists_check` | Checks whether an item name already exists. | Read |
| `pinboard_list` | Lists pinboards available on the site. | Read |
| `pinboard_get` | Retrieves details for a specific pinboard. | Read |
| `pinboard_name_exists_check` | Checks whether a pinboard name already exists. | Read |

### Published content tools (2)

| Tool | Purpose | Type |
|---|---|---|
| `published_item_list` | Lists items published externally. | Read |
| `external_publish_site_list` | Lists configured external publish sites. | Read |

### Schedule tools (2)

| Tool | Purpose | Type |
|---|---|---|
| `schedule_list` | Lists schedules configured on the site. | Read |
| `schedule_get` | Retrieves details for a specific schedule. | Read |

### Slideshow tools (2)

| Tool | Purpose | Type |
|---|---|---|
| `slideshow_list` | Lists slideshows configured on the site. | Read |
| `slideshow_get` | Retrieves details for a specific slideshow. | Read |

### Webhook tools (1)

| Tool | Purpose | Type |
|---|---|---|
| `webhook_list` | Lists webhooks configured on the site. | Read |

## Common Use Cases

### Explore and summarize dashboards

**Example prompts:** "List all dashboards." · "Get the widgets for this dashboard." · "Export the Sales Analysis dashboard as a PDF."

**Tools used:** `dashboard_list`, `dashboard_get`, `dashboard_widgets_list`, `dashboard_view_list`, `dashboard_export`

### Inspect dashboard output and downloads

**Example prompts:** "Show the access history for this dashboard." · "Prepare a downloadable copy of the export." · "Check the status of a dashboard upload."

**Tools used:** `dashboard_access_history_get`, `dashboard_download_prepare`, `dashboard_download_status_get`, `dashboard_upload_status_get`, `dashboard_draft_list`, `deployment_dashboard_list`

### Share content with users and groups

**Example prompts:** "Show which dashboards are accessible by the Operations group." · "List the groups a user belongs to." · "Show the permissions a user has on dashboards."

**Tools used:** `group_list`, `group_get`, `group_users_list`, `group_permissions_get`, `user_list`, `user_get`, `user_groups_list`, `user_permissions_get`, `dashboard_by_group_permissions_list`, `dashboard_permissions_get`

### Manage data sources

**Example prompts:** "List all data sources and identify which dashboards depend on each one." · "Export this data source as CSV with selected columns." · "Show recent activity on a data source."

**Tools used:** `datasource_list`, `datasource_get`, `datasource_columns_list`, `datasource_linked_dashboards_list`, `datasource_export`, `datasource_activity_get`

### Provision and audit users

**Example prompts:** "Look up a user and list the groups they belong to." · "Inspect the attributes assigned to a user or group." · "Download the CSV template for bulk user import and check job status."

**Tools used:** `user_list`, `user_get`, `user_attributes_get`, `user_groups_list`, `user_permissions_get`, `group_attributes_get`, `user_csv_template_download`, `user_import_job_status_get`, `user_import_failed_list`

### Schedule and monitor reports

**Example prompts:** "List the schedules configured for this site." · "Get the details of a specific schedule."

**Tools used:** `schedule_list`, `schedule_get`

### Audit activity and governance

**Example prompts:** "Show dashboard activity for the last 7 days." · "Show recent access history for a dashboard." · "Summarize data source activity for compliance review."

**Tools used:** `dashboard_access_history_get`, `datasource_activity_get`, `dashboard_public_list`, `dashboard_favorite_list`

### Discover content, pinboards, and published sites

**Example prompts:** "List pinboards available on this site." · "Find an item by name to avoid duplicates." · "List published items and the configured publish sites."

**Tools used:** `item_list`, `item_get`, `item_name_exists_check`, `pinboard_list`, `pinboard_get`, `pinboard_name_exists_check`, `published_item_list`, `external_publish_site_list`, `slideshow_list`, `slideshow_get`, `webhook_list`

### Inspect dashboard settings

**Example prompts:** "Show the current global dashboard settings."

**Tools used:** `dashboard_settings_get`, `category_list`, `category_get`

## Troubleshooting

| Problem | Likely cause | Fix |
|---|---|---|
| Hosted MCP service cannot be reached | Incorrect MCP service URL or network block | Use `https://mcp.boldbi.com/api/mcp` and verify outbound HTTPS access. |
| Tool call says a token is required | Missing `Authorization` header | Send the API key in the `Authorization` header: `Authorization: <bold-bi-api-key>`. |
| Tool call returns unauthorized | Expired or insufficient Bold BI token | Refresh the token or use an account with the required permission. |
| Tool call fails to reach the correct site | Missing or incorrect `ServiceURL` header | Include the `ServiceURL` header with the correct Bold BI site API URL. |

## Security and Best Practices

When using the Bold BI MCP Tool:

- Store authentication tokens in environment variables or a secure secret-management solution.
- Never commit tokens or credentials to source control.
- Use dedicated service accounts for automation scenarios whenever possible.
- Follow the principle of least privilege — grant only the permissions required for the operations being performed.
- Use HTTPS for all communication with the MCP service.
- Avoid including confidential business information or credentials in prompts.
- Rotate authentication tokens periodically, according to your organization's security policy.