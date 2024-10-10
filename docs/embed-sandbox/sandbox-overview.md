---
layout: post
title: Bold BI Sandbox Getting started | Bold BI Documentation
description: Bold BI Embed sand box is an evaluation playground to experience the embedding concepts like design, view and edit the dashboards also about permission entity in Bold BI server.
platform: bold-bi
documentation: ug
---

# Getting Started with Embed Sandbox - Bold BI

## Embed Sandbox Overview

The [Embed Sandbox](https://www.boldbi.com/account/embed-sandbox) is an evaluation playground designed to allow users to explore Bold BI dashboards and their concepts within an embedded environment. In this sandbox, users can perform the following actions:

- **Create Dashboard:** Users can create their own dashboards using the Create button in the sidebar.
- **Edit Dashboard:** Users have the ability to modify and customize the available dashboards to better match their needs.
- **Create Data Source:** Users can create new data sources to import and manage the data they wish to display in their dashboards.

When a user signs up for the trial, we will create a user account using their email address and add 5 default dashboards and 6 sample data sources for them to explore. Users can edit the sample dashboards, but they cannot edit the data sources. Instead, they can create their own data sources.

## Actions That Can Be Performed in the Embed Sandbox

1. **View Mode:**
   - When a user first accesses the sandbox, the dashboard will be displayed in [viewer](https://help.boldbi.com/embedding-options/embedding-sdk/embedding-using-javascript/) mode.
   ![Sandbox Viewer](/static/assets/embed-sandbox/images/sandbox-viewer.png)

2. **Editing a Dashboard:**
   
   To edit a dashboard:
   - Hover over the respective dashboard name in the sidebar to see the edit icon.
   ![Dashboard Edit Button](/static/assets/embed-sandbox/images/sandbox-edit-button.png)

   - When you click the edit icon, the sidebar will collapse, and the dashboard will open in [designer mode](https://help.boldbi.com/embedding-options/embedding-sdk/embedding-dashboard-designer/).
   ![Sandbox Designer](/static/assets/embed-sandbox/images/embed-designer.png)

   - In designer mode, users can add data sources by either creating new ones or utilizing the existing data sources provided.
   ![Sandbox Data Source](/static/assets/embed-sandbox/images/sandbox-datasource.png)

   - By default, five data source connections are available for creating new data sources.
   ![Sandbox Connections](/static/assets/embed-sandbox/images/sandbox-datasource-create.png)

   - On the Existing Data Source Page, users can view the six default data sources provided.
   ![Sandbox Existing Datasource](/static/assets/embed-sandbox/images/sandbox-existing-datasource.png)

   - For a detailed explanation of data source connections, refer to [working with data sources](https://help.boldbi.com/working-with-data-sources/).

3. **Saving a Dashboard:**

   There are two ways to save a dashboard from designer mode:
   1. **Using the Publish Button:** This button is located in the designer toolbar and allows you to save the dashboard.
   ![Sandbox Designer Publish](/static/assets/embed-sandbox/images/sandbox-designer-publish.png)

   2. **Using the Save Icon:** The save icon is located next to the dashboard name. To access the icon, users need to expand the sidebar, where the save icon will be visible for the respective dashboard.
   ![Sandbox Sidebar Expand](/static/assets/embed-sandbox/images/sandbox-sidebar-expand.png)
   ![Sandbox Designer Save Button](/static/assets/embed-sandbox/images/sandbox-designer-save-button.png)

   After saving the dashboard, it will be rendered in viewer mode.
   ![Sandbox Viewer](/static/assets/embed-sandbox/images/sandbox-viewer.png)

4. **Creating a New Dashboard:**

   To create a new dashboard:
   - Use the create button in the sidebar menu.
   ![Sandbox Create Button](/static/assets/embed-sandbox/images/sandbox-create-button.png)
   - Enter a name for the new dashboard and click the `Add and Design` button to proceed to design view.
   ![Sandbox Draft Dashboard Name](/static/assets/embed-sandbox/images/sandbox-draft-dashboardname.png)
   - After clicking the `Add and Design` button, the user will navigate to design mode, where they can start designing the dashboard.
   ![Sandbox Draft Dashboard](/static/assets/embed-sandbox/images/sandbox-draft-dashboard.png)

   - For guidance on designing a dashboard, refer to the [user guide](https://help.boldbi.com/getting-started/creating-dashboard/).

   - To learn about available widgets and their features, see the [user guide](https://help.boldbi.com/visualizing-data/).

5. **Deleting a Dashboard:**

   To delete a dashboard:
   - Hover over the respective dashboard name to see the delete icon. Then click the delete icon to remove the dashboard.
   ![Dashboard Delete Icon](/static/assets/embed-sandbox/images/sandbox-delete-icon.png)

## Bold BI Sandbox Server

We also have an option called the Bold BI Sandbox Server. When users click on it, they will be navigated to the [Sandbox Server](https://sandbox.boldbi.com/bi/), where they can experience the dashboard and its features on the Bold BI server itself.  
![Bold BI Sandbox Server](/static/assets/embed-sandbox/images/launch-sandbox.png)

## Limitations in the Embed Sandbox

1. **Dashboard Limitations**
    - Users can create a maximum of 15 dashboards in this environment. To add more beyond this limit, they need to delete existing dashboards before adding new ones.
  
2. **Data Source Limitations**
    - Users can set up to 10 data sources, excluding the default sample data sources. To add more, existing data sources must be deleted to create new ones. However, default data sources cannot be deleted.
    - The following connections are available in the embed sandbox:
        - MSSQL
        - PostgreSQL
        - Excel
        - CSV
        - Web API
    - As an evaluation playground, only limited connection types are provided. For [specific connections](https://www.boldbi.com/integrations/), users can opt for product installation or a dedicated tenant for trial.

## Permissions Granted to Users

1. **Dashboard Permissions:**
    - Users can edit and delete the 5 default sample dashboards initially provided, as well as dashboards created within the specified category.
    - Users can create and save new dashboards within an existing category, but they are not allowed to create new categories.

2. **Data Source Permissions:**
    - Users can create new data sources with specified connection types.
    - Users are not permitted to edit or delete the 6 default data sources provided.

## Sample Dashboards
- Users can add sample dashboards to the [sandbox server](https://sandbox.boldbi.com/bi/) and can edit them both on the server and within the embedded environment.  
![Sample Dashboards](/static/assets/embed-sandbox/images/sandbox-sample-dashboard.png)
