---
layout: post
title: Bold BI SDK - Efficiently Embed Multiple Dashboards
description: Learn how to embed multiple dashboards efficiently using REST APIs and signed embed token, reducing server load and improving performance.
platform: bold-bi
documentation: ug
---

# Embedding list of Dashboards Efficiently with Bold BI SDK

Bold BI SDK allows you to efficiently embed multiple dashboards in your application by fetching the dashboard list once from the backend, generating reusable Embed Token, and rendering dashboards on demand. This approach reduces server calls, improves performance, and ensures a smooth user experience when switching between dashboards. The process involves:
<ul style="margin:0; padding-left:20px;">
  <li><b>Fetching dashboard list</b> from the Bold BI server via a secure REST API.</li>
  <li><b>Displaying the dashboard list</b> on the frontend UI with clickable items.</li>
  <li><b>Generating Embed Token</b> for dashboards, reusing them until expiration.</li>
  <li><b>Rendering dashboards</b> on demand using the Bold BI SDK and the Embed Token.</li>
</ul>

## Benefits
<ul style="margin:0; padding-left:20px;">
  <li>Dashboards are fetched <b>only once</b></li>
  <li>Embed Token are <b>reused until expiration</b></li>
  <li>Fewer server calls <b>faster performance</b></li>
  <li>Smooth <b>on-demand loading</b> for users</li>
</ul>

## Step 1: Fetch the Dashboard List from Backend

The backend application communicates with the Bold BI server using the REST API. It exchanges the embed secret for an access token, calls the `/v5.0/dashboards` API, and securely returns the dashboard list to the client application.

```js
/*
  backend/getDashboards.js
  Requires: express, crypto, https, http, url
  Install express: npm install express
*/
const express = require("express");
const bodyParser = require("body-parser");
const crypto = require("crypto"); // used when you implement signing for Embed Token
const fetch = require("node-fetch");
const path = require("path");

const app = express();
app.use(bodyParser.json());

// Config (server-side only — never expose embedSecret in the browser)
const serverUrl = "<Bold BI Server URL>";
const siteIdentifier = "<Site Identifier>";   
const embedSecret = "<Embed Secret>";
const userEmail = "<User Email>";

// Generate a REST API token (server-to-server) using the Embed Secret grant
async function getRestApiToken() {
  const url = `${serverUrl}/api/${siteIdentifier}/token`;
  const params = new URLSearchParams();
  params.append("grant_type", "embed_secret");
  params.append("username", userEmail);
  params.append("embed_secret", embedSecret);

  const response = await fetch(url, {
    method: "POST",
    body: params,
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  });

  if (!response.ok) {
    throw new Error(`Server token request failed: ${response.status}`);
  }
  return await response.json();
}

// ----------------- Dashboard List -----------------
// Exposes a safe API for the frontend to fetch available dashboards
app.get("/getDashboardList", async (req, res) => {
  try {
    const token = await getRestApiToken();
    const url = `${serverUrl}/api/${siteIdentifier}/v5.0/dashboards`;

    const response = await fetch(url, {
      headers: { Authorization: `${token.token_type} ${token.access_token}` }
    });

    if (!response.ok) throw new Error(`Dashboard request failed: ${response.status}`);

    const data = await response.json();
    // Return only the data array; do not leak server token to the client
    res.json(data.Data);
  } catch (err) {
    console.error("Error fetching dashboards:", err.message);
    res.status(500).send("Error fetching dashboards");
  }
});
```

## Step 2: Retrieve and Display Dashboards on the Frontend

This frontend calls the asynchronous backend API endpoint `/getDashboardList` using `async/await`. The backend itself is asynchronous because it fetches data from the Bold BI REST API before returning the dashboard list. On the client side, `async/await` ensures the network request completes without blocking the UI. After the response arrives, the JSON result is passed to `renderSidebar()`, which creates clickable items for each dashboard and wires their clicks to `requestDashboardToken(Id)`.

```js
// Call this function when the page loads to fetch dashboard list
async function Init() {
  try {
    const response = await fetch("/getDashboardList");
    const dashboards = await response.json();
    renderSidebar(dashboards);
  }catch(e){
    console.error('Failed to load dashboards:', e);
  }
}

function renderSidebar(dashboards) {
  const panel = document.getElementById('<your-sidebar-id>'); // replace with your sidebar panel id
  if (!panel) return;
  panel.innerHTML = "";

  dashboards.forEach(d => {
    const div = document.createElement("div");
    div.textContent = d.Name;
    div.className = "dashboard-item";
    div.onclick = () => requestDashboardToken(d.Id);
    panel.appendChild(div);
  });

  if (dashboards && dashboards.length) {
    requestDashboardToken(dashboards[0].Id);
  }
}
```

## Step 3: Generate Embed Token on the Backend

The backend application generates an Embed Token by calling the [Token Generation endpoint](/embedding-options/embedding-sdk/authorization-options/token-generation-lower-version/), which includes a code snippet demonstrating how to send a signed request using the Embed Secret. Bold BI validates the signature and returns a Embed Token with a defined expiry. It is recommended to implement caching and refresh logic on the backend application to reuse token until expiration and minimize repeated calls.

## Step 4: Request Token and Render Dashboard on the Frontend

When a dashboard is selected, the frontend application calls the backend `/tokenGeneration` API to request an Embed Token for the specific dashboard. The token is then used with the Bold BI SDK to render the dashboard in the target container.

```js
async function requestDashboardToken(dashboardId) {
  try {
    // Calls your backend endpoint that signs a request with the Embed Secret
    // and returns a Bold BI embed access_token for the specific dashboard
    const response = await fetch("/tokenGeneration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dashboardId })
    });
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);

    const { access_token } = await response.json();
    if (access_token) {
      renderDashboard(dashboardId, access_token);
    } else {
      alert("Access token not found");
    }
  } catch (error) {
    console.error("Error fetching token:", error.message);
    alert("Error fetching token: " + error.message);
  }
}

function renderDashboard(dashboardId, access_token) {
  const dashboard = BoldBI.create({
    serverUrl: "<Bold BI Server URL>",
    dashboardId: dashboardId,
    embedContainerId: "<Dashboard-Container>", // id of the div where the dashboard will render
    embedToken: access_token
  });
  dashboard.loadDashboard();
}
```
> **Note:** Ensure that the Bold BI JavaScript SDK is referenced in your frontend application before using the BoldBI.create() method.