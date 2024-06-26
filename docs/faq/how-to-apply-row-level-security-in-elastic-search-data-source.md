---
layout: post
title: Apply row level security in Elasticsearch | Embedded Bold BI Docs
description: Learn the steps how to apply row-level security in the Elasticsearch data source and create dashboards with user based filters in Embedded Bold BI Web designer.
canonical: "/faq/how-to-apply-row-level-security-in-elastic-search-data-source/"
platform: bold-bi
documentation: ug
---

# How to apply Row-level Security in Elastic search data source

Bold BI application allows you to apply row-level security using user filters in the Elastic search data source by following these steps.

## Row-level security in Elastic search data source

1.	Refer to the [Connecting Bold BI to Elastic search data source](/working-with-data-sources/data-connectors/elastic-search/#connecting-bold-bi-to-elastic-search-data-source) for successful connection.

2.	Drag and drop the required table onto the data design view page in Bold BI, as shown in the following image.             

    ![Drag table](/static/assets/faq/images/drag-table-elasticsearch.png)

3.	Click on the `Configure User Filters` icon, as shown in the following image, to filter data based on the users.

    ![Configure User Filters](/static/assets/faq/images/configure-user-filters.png)
	
4.  Select the column that will be used as the filter. In this case, we will choose the **COUNTRY** column. We can also assign a name to the filter for better user understanding when multiple filters are created. 

    ![Data column](/static/assets/faq/images/data-column.png#max-width=60%) 
	
5.	Once the Data column is selected, the Users or Groups section and the Fields section will be enabled. You can select the field values that will be visible for the selected user, as shown in the following image, and click `Save`.
    
	![Select fields](/static/assets/faq/images/select-fields.png#max-width=60%) 
	
6.  Click `Save` to save the data source with a relevant name in order to proceed with [designing a dashboard.](/working-with-dashboards/)

    ![Save option](/static/assets/faq/images/save-option-elasticsearch.png) 
	
7.	You can preview the currently created dashboard by clicking `Preview` in the right corner of the tools pane.

    ![Preview dashboard option](/static/assets/faq/images/preview-dashboard.png)

8.	You can select the user as shown in the following dashboard image which limits the data based on the selected users for row-level security.

    **Dashboard for User 1:**

    ![Preview dashboard for user 1](/static/assets/faq/images/user-dashboard1.png)

    **Dashboard for User 2:**

    ![Preview dashboard for user 2](/static/assets/faq/images/user-dashboard2.png)
