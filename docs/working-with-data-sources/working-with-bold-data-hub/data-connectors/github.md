---
layout: post
title: GitHub Data Hub Connector – Embedded BI | Bold BI Learning
description: Learn how to use the GitHub Data Hub connector in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
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

## Configure the DataHub to connect GitHub

  1. To start, Click the `Bold Data Hub` icon on the Navigation Pane.

  ![GitHub Data Hub - BoldBI](/static/assets/working-with-etl/images/boldbi_panel.png#max-width=100%)

  2. Click `Add Project` and provide the name for the new project.
  
   ![GitHub](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)
  
  3. Select the newly created project and add the `GitHub` template.

  ![GitHub Data Hub - BoldBI](/static/assets/working-with-etl/images/githubaddtemplate.png#max-width=100%)
  
  4. Update the access token and repo in the template and save it to the BoldBI Data Store.

  ![GitHub Data Hub - BoldBI](/static/assets/working-with-etl/images/github_template.png#max-width=100%)
  
  5. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/).

   ![FileSystem - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)


>**Warning:**
    1. The `Encrypt_Credentials` property should be set to false when updating the new access token on the template. If you have modified other properties, such as 'select' or 'account id', the `Encrypt_Credentials` property must be set to true.  
    2. The default lifetime of the access token is 1 hour. Therefore, you need to convert it to a long-lived access token in order to use the same token for 60 days. Existing tables should be maintained even if the token has expired or is being used as an invalid token. 

### Schedule Data Hub Job

1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.

![GitHub - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)

![GitHub - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)

2. For on-demand refresh, click `Run Now` button.

![GitHub - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%).

3. The Schedule history can be checked using the history option as well as logs.

![GitHub - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)

4. Click on Logs to see if the run is completed and data source is created in Bold BI. 

![GitHub - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)


5. Click `Edit DataSource` Option to view the created tables.