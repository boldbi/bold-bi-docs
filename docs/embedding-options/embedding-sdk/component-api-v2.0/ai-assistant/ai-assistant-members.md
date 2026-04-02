---
layout: post
title: API Reference – AI Assistant Members | Bold BI Docs
description: Explore the AI Assistant SDK API reference for members used when embedding Bold BI in your deployed server environment.
platform: bold-bi
documentation: UG
---
# Members
<h2 class="doc-prop-wrapper" id="aisummaryintromessage" data-Path="aisummaryintromessage-aiSummaryIntroMessage">
<a href="#aisummaryintromessage" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>aiSummaryIntroMessage</span>

<span class="doc-prop-type"> `string`
</span>
</h2>

> **Note:** This **aiSummaryIntroMessage** member API is supported from v15.2.

Customize the description of AI-generated dashboard summaries in the AI Assistant.

- **Default**: `""` (empty)

**Example**
   
```js
var dashboard = BoldBI.create({
    mode: BoldBI.Mode.AIAssistant,
    settings: {
        aiAssistant: {
            aiSummaryIntroMessage: 'This is a custom description message on the dashboard summary in Embed AI.'
        }
    }
});
dashboard.loadAIAssistant();
```

<h2 class="doc-prop-wrapper" id="dashboards" data-Path="dashboards-dashboards">
<a href="#dashboards" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>dashboards</span>

<span class="doc-prop-type"> `[]`
</span>
</h2>
     
By default, all dashboards that a user has permission to access will appear in the AI Assistant’s suggestion list.
Use this member to specify which dashboards should be displayed in the suggestion list.

- **Default**: `[]` 

**Example** 
   
```js   
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.AIAssistant,
      settings: {
          aiAssistant: {
            dashboards: ['9a4c4002-d08e-41c5-b16d-4f219314d79d']
          }
      }    
});
dashboard.loadAIAssistant();
```

<h2 class="doc-prop-wrapper" id="datasources" data-Path="datasources-dataSources">
<a href="#datasources" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>dataSources</span>

<span class="doc-prop-type"> `[]`
</span>
</h2>
     
By default, all dataSources that a user has permission to access will appear in the AI Assistant’s suggestion list.
Use this member to specify which dataSources should be displayed in the suggestion list.

- **Default**: `[]` 

**Example** 
   
```js   
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.AIAssistant,
      settings: {
          aiAssistant: {
            dataSources: ['9a4c4002-d08e-41c5-b16d-4f219314d79d']
          }
      }    
});
dashboard.loadAIAssistant();
```

<h2 class="doc-prop-wrapper" id="exploremessage" data-Path="exploremessage-exploreMessage">
<a href="#exploremessage" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>exploreMessage</span>

<span class="doc-prop-type"> `string`
</span>
</h2>

> **Note:** This **exploreMessage** member API is supported from v15.1.

Customize the explore message title displayed in the AI Assistant Welcome section.

- **Default**: `""` (empty)

**Example**
   
```js
var dashboard = BoldBI.create({
    mode: BoldBI.Mode.AIAssistant,
    settings: {
        aiAssistant: {
            exploreMessage: 'This is explore message in Embed AI.'
        }
    }
});
dashboard.loadAIAssistant();
```

<h2 class="doc-prop-wrapper" id="headertextcolor" data-Path="headertextcolor-headerTextColor">
<a href="#headertextcolor" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>headerTextColor</span>

<span class="doc-prop-type"> `string`
</span>
</h2>
    
Specifies the color of the AI Assistant title text in the header.

- **Default**: `""` (empty)

**Example**
   
```js  
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.AIAssistant,
      settings: {
          aiAssistant: {
               headerTextColor: '#fff'
          }
      }    
});
dashboard.loadAIAssistant();
```

<h2 class="doc-prop-wrapper" id="hidebetatag" data-Path="hidebetatag-hideBetaTag">
<a href="#hidebetatag" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>hideBetaTag</span>

<span class="doc-prop-type"> `boolean`
</span>
</h2>
     
Specifies whether to hide the Beta tag in the AI Assistant header.

- **Default**: `false` 

**Example** 
   
```js   
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.AIAssistant,
      settings: {
          aiAssistant: {
            hideBetaTag: true,   
          }
      }    
});
dashboard.loadAIAssistant();
```

<h2 class="doc-prop-wrapper" id="hidedashboardtag" data-Path="hidedashboardtag-hideDashboardTag">
<a href="#hidedashboardtag" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>hideDashboardTag</span>

<span class="doc-prop-type"> `boolean`
</span>
</h2>
     
Specifies whether to hide the Dashboard suggestion in the AI Assistant chat interface.

- **Default**: `false` 

**Example** 
   
```js   
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.AIAssistant,
      settings: {
          aiAssistant: {
            hideDashboardTag: true,   
          }
      }    
});
dashboard.loadAIAssistant();
```

<h2 class="doc-prop-wrapper" id="hidedatasourcetag" data-Path="hidedatasourcetag-hideDatasourceTag">
<a href="#hidedatasourcetag" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>hideDatasourceTag</span>

<span class="doc-prop-type"> `boolean`
</span>
</h2>
     
Specifies whether to hide the Data Source suggestion in the AI Assistant chat interface.

- **Default**: `false` 

**Example** 
   
```js   
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.AIAssistant,
      settings: {
          aiAssistant: {
            hideDatasourceTag: true,   
          }
      }    
});
dashboard.loadAIAssistant();
```

<h2 class="doc-prop-wrapper" id="hidelogo" data-Path="hidelogo-hideLogo">
<a href="#hidelogo" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>hideLogo</span>

<span class="doc-prop-type"> `boolean`
</span>
</h2>
     
Specifies whether to hide the logo in the AI Assistant header, Welcome message, and each chat conversation.

- **Default**: `false` 

**Example** 
   
```js   
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.AIAssistant,
      settings: {
          aiAssistant: {
            hideLogo: true,   
          }
      }    
});
dashboard.loadAIAssistant();
```  


<h2 class="doc-prop-wrapper" id="hidewelcomenote" data-Path="hidewelcomenote-hideWelcomeNote">
<a href="#hidewelcomenote" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>hideWelcomeNote</span>

<span class="doc-prop-type"> `boolean`
</span>
</h2>
     
Specifies whether to hide the welcome note in the AI Assistant interface.

- **Default**: `false` 

**Example** 
   
```js   
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.AIAssistant,
      settings: {
          aiAssistant: {
            hideWelcomeNote: true,   
          }
      }    
});
dashboard.loadAIAssistant();
```

<h2 class="doc-prop-wrapper" id="name" data-Path="name-name">
<a href="#name" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>name</span>

<span class="doc-prop-type"> `string`
</span>
</h2>
    
Specifies the title displayed in the AI Assistant header and Welcome section.

- **Default**: `""` (empty)

**Example**
   
```js  
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.AIAssistant,
      settings: {
          aiAssistant: {
               name: 'Embed AI',   
          }
      }    
});
dashboard.loadAIAssistant();
``` 

<h2 class="doc-prop-wrapper" id="querydisplaylimit" data-Path="querydisplaylimit-queryDisplayLimit">
<a href="#querydisplaylimit" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>queryDisplayLimit</span>

<span class="doc-prop-type"> `number`
</span>
</h2>
     
Defines the number of query suggestions displayed in the AI Assistant.
By default, six suggestions are shown, and you can customize this value to display fewer than six, but not more.

- **Default**: `6` 

**Example** 
   
```js   
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.AIAssistant,
      settings: {
          aiAssistant: {
            queryDisplayLimit: 4,   
          }
      }    
});
dashboard.loadAIAssistant();
```

<h2 class="doc-prop-wrapper" id="welcomemessage" data-Path="welcomemessage-welcomeMessage">
<a href="#welcomemessage" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>welcomeMessage</span>

<span class="doc-prop-type"> `string`
</span>
</h2>

> **Note:** This **welcomeMessage** member API is supported from v15.1.

Customize the welcome message title displayed in the AI Assistant Welcome section.

- **Default**: `""` (empty)

**Example**
   
```js
var dashboard = BoldBI.create({
    mode: BoldBI.Mode.AIAssistant,
    settings: {
        aiAssistant: {
            welcomeMessage: 'This is welcome message in Embed AI.'
        }
    }
});
dashboard.loadAIAssistant();
```

## HideIcons

<h2 class="doc-prop-wrapper" id="helplink" data-Path="helplink-helpLink">
<a href="#helplink" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>helpLink</span>

<span class="doc-prop-type"> `boolean`
</span>
</h2>
     
Specifies whether to hide the Help Link in the AI Assistant header.

- **Default**: `false` 

**Example** 
   
```js   
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.AIAssistant,
      settings: {
        aiAssistant: {
          hideIcons: {
            helpLink: false,
          }
        }
      }    
});
dashboard.loadAIAssistant();
```

<h2 class="doc-prop-wrapper" id="history" data-Path="history-history">
<a href="#history" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>history</span>

<span class="doc-prop-type"> `boolean`
</span>
</h2>
     
Specifies whether to hide the History in the AI Assistant header.

- **Default**: `false` 

**Example** 
   
```js   
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.AIAssistant,
      settings: {
        aiAssistant: {
          hideIcons: {
            history: false,
          }
        }
      }    
});
dashboard.loadAIAssistant();
```

<h2 class="doc-prop-wrapper" id="newsession" data-Path="newsession-newSession">
<a href="#newsession" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>newSession</span>

<span class="doc-prop-type"> `boolean`
</span>
</h2>
     
Specifies whether to hide the New Session in the AI Assistant header.

- **Default**: `false` 

**Example** 
   
```js   
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.AIAssistant,
      settings: {
        aiAssistant: {
          hideIcons: {
            newSession: false,
          }
        }
      }    
});
dashboard.loadAIAssistant();
```

<h2 class="doc-prop-wrapper" id="usageAnalytics" data-Path="usageAnalytics-usageAnalytics">
<a href="#usageAnalytics" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>usageAnalytics</span>

<span class="doc-prop-type"> `boolean`
</span>
</h2>
     
Specifies whether to hide the Usage Analytics in the AI Assistant header.

- **Default**: `false` 

**Example** 
   
```js   
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.AIAssistant,
      settings: {
        aiAssistant: {
          hideIcons: {
            usageAnalytics: false,
          }
        }
      }    
});
dashboard.loadAIAssistant();
```