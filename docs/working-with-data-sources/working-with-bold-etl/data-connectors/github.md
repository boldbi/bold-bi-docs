---
layout: post
title: GigHub ETL Connector – Embedded BI | Bold BI Learning
description: Learn how to use the GigHub ETL connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# GitHub

This verified source can be used to load data on issues or pull requests from any GitHub repository onto a destination of your choice using GitHub API.

## Grab Credentials

To obtain the API token, follow these steps:

1. Click on your profile picture located in the top right corner.
2. Choose "Settings".
3. Select "Developer settings" from the left panel.
4. Under "Personal access tokens", click on "Generate a personal access token (preferably under Tokens (classic))".
5. Check the following scopes to grant permissions to the token:

   - `public_repo`: Limits access to public repositories.
   - `read:repo_hook`: Grants read and ping access to hooks in public or private repositories.
   - `read:org`: Read-only access to organization membership, organization projects, and team membership.
   - `read:user`: Grants access to read a user's profile data.
   - `read:project`: Grants read-only access to user and organization projects.
   - `read:discussion`: Allows read access for team discussions.

6. Click on "Generate token".
7. Copy the token and remember to save it for future use.

## Connection Properties

The `config` section in a YAML file includes the following properties:

```yaml
Connector name: GitHub
Access_token: Access token
Type: Reactions/repo_events
Owner: Owner
Repo: Repository Name
Items_per_page: Items per page
Max_items: Maximum number of items
```


## Example Configuration

**`Repo_events:`**

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: Github
      connectorname: Github
      config:
        access_token: <ACCESS TOKEN>
      properties:
        type: <REPO EVENTS>
        owner: <OWNER>
```
**`Reactions:`**

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: Github
      connectorname: Github
      config:
        access_token: <ACCESS TOKEN>
      properties:
        type: <REACTIONS>
        owner: <OWNER>
        repo: <REPO NAME>
        items_per_page: <ITEMS PER PAGE>
        max_items: <MAX NO OF ITEMS>
        max_items_age_seconds: <MAX ITEM AGE SECONDS>
```