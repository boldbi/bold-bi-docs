---
layout: post
title: How to show a widget's detailed view in JavaScript | Bold BI Docs
description: This page summarizes about how to show a detailed view of a widget in dashboard embedded JavaScript application using Bold BI software.
platform: bold-bi
documentation: ug
---

# How to show a detailed view of a widget in JavaScript embedding application

You can display a detailed view of a widget in a JavaScript-based embedding application by utilizing [URL linking](/visualizing-data/working-with-widgets/linking-urls-and-dashboards/) support in the Bold BI application.

Follow the steps below to achieve this, 

1. First, you need to create and publish a main dashboard with the required widgets on the Bold BI server.

    ![Main Dashboard](/static/assets/faq/images/main-dashboard.png)

2. Next, create a detailed information dashboard with the necessary widgets and publish it. Once completed, copy the dashboard's ID and paste it into the `URL` text box of the `Link` Property for the corresponding widget in the main dashboard. Select `Pop up` as the `Target`.

    ![Detailed Dashboard Id](/static/assets/faq/images/detailed-dashboard-id.png)

3. Afterward, embed the main dashboard in your application using the Dashboard ID by following the steps mentioned in this [section](/getting-started/embedding-in-your-application/#embed-using-dashboard-id).

4. Next, you need to add the `beforeNavigateUrlinking` (/embedding-options/embedding-sdk/embedding-api-reference/events/#beforenavigateurllinking) event to handle and display detailed information of a widget in a pop-up window. This event will be triggered before the URL linking navigation is invoked.

Find the sample code below to display a detailed view of a widget in a pop-up window:

```js
var dashboard = BoldBI.create({ 
beforeNavigateUrlLinking: function (arg){
    $('body').find('#ulrLink_target').remove();
    arg.cancel = true;
    var targetContainer = $('<div id="ulrLink_target"></div>');
    var dlgDiv = $('<div id="sample_dialog"></div>');
    targetContainer.append(dlgDiv);
    $('body').append(targetContainer);
    var dialogHeaderName = arg.linkInfo.url === '7efc0299-90c1-46c5-b20b-3b1023d30387' ? 'Post Growth Analysis' : arg.linkInfo.url === 'dc6ea49d-a74b-448c-b272-e370b1376ab4' ? 'User Growth Analysis' : arg.linkInfo.url === '433636b5-df4a-4ba9-a854-e824b46ac434' ? 'Post Per User Analysis' : arg.model.dashboardName; // This code will set Title for the details information window based on the linked dashboard ID
    var dialog = new window.ejs.popups.Dialog({
        header: dialogHeaderName,
        width: window.innerWidth - 70 + 'px',
        showCloseIcon: true,
        isModal: true,
        target: document.getElementById('ulrLink_target'),
        height: '750px',
        content: '<div id="urlLinkDbrd"></div>'
    });
    dialog.appendTo('#sample_dialog');
    $('#ulrLink_target .e-dlg-content');
    var urlLinkDbrd = BoldBI.create({
        serverUrl: serverUrl,
        dashboardId: arg.linkInfo.url,
        embedContainerId: "urlLinkDbrd",
        embedType: BoldBI.EmbedType.Component,
        environment: BoldBI.Environment.Cloud,
        width: window.innerWidth - 100 + "px",
        height: '650px',
        expirationTime: 100000,
        authorizationServer: {
            url: authorizeUrl
        },
        dashboardSettings: {
            showHeader: false
        }
    });
    urlLinkDbrd.loadDashboard();
```

5. After completing this task, when you click on the corresponding widget, you can view the detailed information of the widget in a pop-up window with the assigned title, as shown in the screenshot below.

    ![Detailed Info Pop-up](/static/assets/faq/images/detailed-info-pop-up.png)