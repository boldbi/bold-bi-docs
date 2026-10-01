---
layout: post
title: Bold BI MCP Server Setup Guide for AI Assistants | Bold BI
description: Connect GitHub Copilot, ChatGPT, Claude Desktop, and Cursor to Bold BI docs via MCP Server for guidance on dashboards, APIs, widgets, and integration.
canonical: "/mcp-server/"
platform: bold-bi
documentation: ug
---

# MCP Server

## Getting Started with the Bold BI MCP Server 

Connect MCP-compatible AI assistants like [GitHub Copilot](https://github.com/features/copilot?utm_source=chatgpt.com), ChatGPT, Claude Desktop, and Cursor to Bold BI documentation and development resources using the Bold BI MCP (Model Context Protocol) Server. 

The Bold BI MCP Server enables AI assistants to retrieve contextual information about Bold BI dashboards, widgets, APIs, embedding, datasource configuration, and implementation workflows directly within your IDE or AI workspace. This helps developers quickly access relevant guidance, reduce context switching, and improve productivity while working with Bold BI integrations and analytics applications. 

## Why Use the Bold BI MCP Server? 

Developers often spend significant time searching documentation, troubleshooting integrations, and validating implementation approaches while building analytics applications. The Bold BI MCP Server helps reduce that effort by enabling AI assistants to retrieve contextual Bold BI guidance directly inside the development workflow. 

With the Bold BI MCP Server, AI assistants can: 

- Retrieve contextual guidance for dashboards, widgets, APIs, and datasources 
- Surface relevant Bold BI documentation and implementation references 
- Assist with embedding, configuration, and integration-related questions 
- Provide troubleshooting guidance for common setup and connectivity issues   
- Improve developer productivity inside MCP-compatible IDEs and AI tools

The MCP Server acts as a contextual documentation and integration layer for AI assistants. It does not independently create dashboards or automate analytics workflows. Instead, it enables AI assistants to access and retrieve relevant Bold BI resources based on developer prompts and requests. 

## How the Bold BI MCP Server Works 

The MCP Server acts as a bridge between your AI assistant and Bold BI documentation resources. 

Typical workflow:

1. Configure the Bold BI MCP Server 

![ Configure the Bold BI MCP Server](/static/assets/overview/images/configure-mcp-server.png)

2. Connect your IDE or AI assistant 

![ Connect your IDE or AI assistant](/static/assets/overview/images/connect-your-ide-or-ai-assistant.png)

3. Enable Agent Mode or MCP support 

![ Enable Agent Mode or MCP support ](/static/assets/overview/images/enable-agent-mode-or-mcp-support.png)

4. Send natural language prompts 
5. Retrieve contextual Bold BI guidance and references directly inside your workflow 

This approach allows developers to access implementation guidance without leaving their coding environment. 

## Prerequisites 

Before getting started, ensure you have the following: 

### Supported IDEs and AI Tools 

- Visual Studio Code 
- Cursor 
- Claude Desktop 
- ChatGPT 
- [GitHub Copilot](https://github.com/features/copilot?utm_source=chatgpt.com)
- JetBrains Rider 
- Other MCP-compatible AI assistants 

### Requirements 

- Node.js v18 or later 
- MCP support enabled in your IDE or AI assistant 
- Access to the Bold BI MCP endpoint 

Verify your Node.js installation: 

`node -v`

## Manual Installation and Related

### Documentation

### Visual Studio 2022 

Create `.mcp.json` in the `%USERPROFILE%` directory. 

- [Visual Studio 2022 - Use MCP Servers](https://learn.microsoft.com/en-us/visualstudio/ide/mcp-servers?view=vs-2022)

- [Visual Studio 2022 - Agent Mode Setup ](https://learn.microsoft.com/en-us/visualstudio/ide/copilot-agent-mode?view=vs-2022)

### Visual Studio 2026  

Create `.mcp.json` in the `%USERPROFILE%` directory. 

- [Visual Studio 2026 - Use MCP Servers ](https://learn.microsoft.com/en-us/visualstudio/ide/mcp-servers?view=visualstudio)

- [Visual Studio 2026 - Agent Mode Setup ](https://learn.microsoft.com/en-us/visualstudio/ide/copilot-agent-mode?view=visualstudio)

### VS Code 

Use Command Palette → “MCP: Add Server” or create 

`<project>/.vscode/mcp.json.`

- [VS Code - Use MCP servers ](https://code.visualstudio.com/docs/copilot/customization/mcp-servers)

- [VS Code - Built-in agents ](https://code.visualstudio.com/docs/copilot/agents/local-agents#_builtin-agents)

### Cursor 

Create `<project>/.cursor/mcp.json` or use **Settings → Tools & Integrations → New MCP Server**. Use `"type": "sse"` in Cursor configuration.  

- [Cursor - Model Context Protocol (MCP) ](https://cursor.com/docs/mcp)

- [Cursor - Agent Overview  ](https://cursor.com/docs/agent/overview)

### JetBrains Rider  

Go to **Settings | Tools | AI Assistant | Model Context Protocol (MCP)** and follow the wizard. Select the HTTP protocol and supply JSON configuration. 

- [JetBrains Rider - Model Context Protocol (MCP) ](https://www.jetbrains.com/help/ai-assistant/mcp.html)

- [JetBrains Rider - AI Assistant Installation  ](https://www.jetbrains.com/help/ai-assistant/installation-guide-ai-assistant.html)

**GitHub Copilot Plugin**: Change chat mode to Agent and add tools. For additional information, see [Extending GitHub Copilot Chat with MCP servers / JetBrains IDEs](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/extend-copilot-chat-with-mcp?tool=jetbrains).

## Configure the Bold BI MCP Server in Visual Studio Code 

### Step 1: Open the MCP Configuration File 

In Visual Studio Code, open the global MCP configuration file: 

`%APPDATA%\Code\User\mcp.json`

Example path: 

`C:\Users\<username>\AppData\Roaming\Code\User\mcp.json` 

This file is used to register MCP servers that can be accessed by supported AI assistants inside VS Code.

### Step 2: Add the Bold BI MCP Server Configuration 

Add the following configuration: 

```js
{ 
  "servers": { 
    "boldbi-doc": { 
      "url": "https://mcp.boldbi.com/docs", 
      "type": "http" 
    } 
  }, 
  "inputs": [] 
} 
```

This configuration registers the Bold BI MCP documentation server and enables MCP-compatible AI assistants to retrieve contextual Bold BI guidance directly from the configured endpoint. 

### Step 3: Restart Visual Studio Code 

After saving the configuration: 

Restart Visual Studio Code 

Open: 

Agent Customizations → MCP Servers 

Verify the Bold BI MCP server status appears as: Running 
 

If the configuration is valid, the MCP server becomes available to supported AI assistants inside VS Code. 

## Using the Bold BI MCP Server in VS Code 

Once configured: 

1. Open your AI assistant chat panel 
2. Select the MCP-enabled assistant or agent 
3. Send prompts related to Bold BI documentation, APIs, dashboards, widgets, or integrations 

Example: 

- `boldbi_docs_assistant` how to create dashboard 
 

The AI assistant retrieves contextual guidance directly from the Bold BI MCP documentation server and returns relevant implementation information within the development workflow. 

## Example Prompts 

Use natural language prompts to retrieve implementation guidance and documentation references. 

### Dashboard Guidance 

How do I create a dashboard in Bold BI?

### Widget Configuration 

Show column chart widget configuration

### Datasource Configuration 

How do I configure a SQL datasource in Bold BI? 
 
### Embedding Guidance 

How do I embed dashboards using the Bold BI REST API? 
 
### Troubleshooting 

Why is my dashboard datasource connection failing? 
 
These prompts help developers quickly retrieve relevant guidance without manually searching across multiple documentation pages. 

## Best Practices 

To improve the quality and relevance of AI-generated responses: 

- Be specific about your request 
- Mention dashboards, widgets, APIs, or datasources explicitly 
- Request implementation examples when needed 
- Use Agent Mode or MCP-enabled workflows when supported 
- Review AI-generated responses before production use 

Providing clear prompts helps the AI assistant retrieve more accurate and contextual Bold BI guidance. 

## Troubleshooting

<meta charset="utf-8"/>
<table>
<tbody>
<tr>
<th align="left">Issue</th>
<th align="left">Solution</th>
</tr>
<tr>
<td align="left">MCP server not running</td>
<td align="left">Restart VS Code and verify the MCP configuration</td>
</tr>
<tr>
<td align="left">Invalid JSON configuration </td>
<td align="left">Validate the syntax in mcp.json</td>
</tr>
<tr>
<td align="left">MCP server not detected  </td>
<td align="left">Ensure the server URL and type are configured correctly</td>
</tr>
<tr>
<td align="left">No response from AI assistant</td>
<td align="left">Verify MCP support is enabled in the AI assistant </td>
</tr>
<tr>
<td align="left">Connection issues </td>
<td align="left">Check network access to <a href="https://mcp.boldbi.com/docs">https://mcp.boldbi.com/docs</a></td>
</tr>
<tr>
<td align="left">MCP tools unavailable </td>
<td align="left">Ensure Agent Mode or MCP support is enabled </td>
</tr>
</tbody>
</table>

## Security Considerations 

- The MCP server provides contextual access to documentation resources 
- Always review AI-generated responses before using them in production 
- Validate implementation guidance and configuration changes before deployment 
- Follow your organization’s security and compliance standards when using AI assistants 