---
layout: post
title: Custom Widget – Embedded BI | Bold BI Documentation
description: Learn how to create and configure Custom visual in Bold BI Embedded dashboard and know about requirements for developing the custom widget.
platform: bold-bi
control: Custom Widget
documentation: ug
---

# Configuring and Formatting Custom Widget

The Syncfusion Dashboard custom widget allows you to add any user-defined widget, d3 controls, Syncfusion controls, or any JS widgets in a dashboard, and it can perform like the normal widget.


Prerequisites and knowledge required for handling the custom widget authoring

This section covers the mandatory requirements to develop the custom widget.

<table class="params">
<thead>
<tr>
<td><b>Development Environment</b></td>
<td><b> Bold BI Enterprise Edition and any web browser as mentioned in the <a href="/embedded-bi/setup/overview/#software-requirements">link</a></b> <br/> </td>
            
</tr>
<tr>
<td><b> Knowledge Required</b> </td>
<td><b> Basic knowledge about the HTML and JavaScript</b> </td>
</tr>
</thead>
</table>


## Creating new widget

### Step 1: Download the below attached custom widget template for developing.

Custom Widget Template : [Template](https://www.syncfusion.com/downloads/support/directtrac/general/ze/WidgetName-1194581910.zip)

### Step 2:  Modify the settings as per the widget requirement. In the below steps we have provided steps to configure the widget through the configuration file(`widgetconfig.json`).

## Configuring widget using manifest file

![custom widget package](/static/assets/embedded/visualizing-data/visualization-widgets/images/custom-widget/Customwidget_Package.png)

You can configure the widget by using the manifest file.

The manifest file is used to specify the widget’s configuration. This file has to be placed in the custom widgets root directory with the name `widgetconfig.json`.

Custom widget can be configured using the following settings. Refer the structure of `widgetconfig.json`

```js

{
	"widgetName" : "Name of the widget.",

	"displayName" : "Display name of the widget to be displayed in designer toolbox.",

	"guid": "Unique GUID for the widget.",

	"category" : "Category in which the widget should be displayed in the designer.",

	"description" : "Description of the widget.",

	"srcFile"  : "Path of the source file through which widget can be embedded to
 		       dashboard",

	"dependencies" : "Specify the dependency scripts and CSS files to be referred for 
                                              the widget",

	"dataFields" : " Specifies the widget fields required for binding data from a data
                                          source. Each field can be bound to single or multiple
                                          measure/dimension fields in a data source. When dataFields is not
                                          specified, this widget acts as a non-data bound widget. ",
										  

	"filterSettings": "Filter settings are used to configure whether the widget can take
                                           part in filter interactions between the widgets."
}

```

### Setting name for the widget

Name for the widget can be set and specified through the widgetName API.

#### Format

**widgetName**: "name of widget"

#### Example

**widgetName**: "sunburst"

#### Rules

* It is a mandatory field for the widget.
* It should not contain any special characters and wide spaces.

### Setting display name for the widget

Display name for the widget in the designer toolbar can be set through the displayName API.

![Custom_widget toolbar](/static/assets/embedded/visualizing-data/visualization-widgets/images/custom-widget/Customwidget_toolbar.png)

#### Format

**displayName**: "display name of the widget in designer toolbar"

#### Example

**displayName**: "Sunburst Chart"

#### Rules

* It is not a mandatory field for the custom widget.
* It can contain special character and wide spaces.

### Setting category for the widget

This allows you to specify the category in which widget should be displayed.

![Custom_widget category](/static/assets/embedded/visualizing-data/visualization-widgets/images/custom-widget/Customwidget_Category.png)

#### Format

**category**: "name of the category in which the widget should be displayed"

#### Example

**category**: "Relationship"

#### Rules

* It is not a mandatory field for the custom widget.

### Setting description for the widget

You can describe the widget. The following message will be shown on hovering the widget icon in the expander toolbox of the designer.

![Custom_widget description](/static/assets/embedded/visualizing-data/visualization-widgets/images/custom-widget/Customwidget_Description.png)

#### Format

**description**: "description about the widget"

#### Example

**description**: "Sunburst Chart is used to visualize the hierarchical data. The center circle represents the root level of the hierarchy and outer circles represents higher levels of the hierarchy."

#### Rules

* It is not a mandatory field for the custom widget.

### Setting source file location

Source file location should be specified here. Refer the use of source file in its module.

#### Format

**srcFile**: "location of the source file"

#### Example

**srcFile**: `src/sunburst.js`

#### Rules

* It is a mandatory field for the widget.

### Setting GUID for the widget

GUID is used to set unique identification for the custom widget, and it can be set through the guid API.

#### Format

**guid**: "used for unique identify the widget"

#### Example

**guid**: "74926583-8493-3333-6382-863428678492"

#### Rules:
* It is a mandatory API for the widget.
* Should satisfy the GUID format.

### Setting dependency files for the widget

Dependency script and CSS files, which have to be referred for the widget, and should be specified in the dependencies section.

#### Format

```js

"dependencies": {
    "scripts": [
      "src/dependency1.js",
      "src/ dependency2.js",
      ….
      ….
    ],
    "styles": [
      "style/ dependency1.css",
      " style / dependency2.css",
      ….
      ….
    ]
  }

```    

#### Example

```js

"dependencies": {
    "scripts": [
      "src/ej.sunburstchart.js",
      "src/ej.helper.js"
    ],
    "styles": [
      "style/ej.sunburstchart.css"
    ]
  }

```

#### Rules

* It is not the mandatory API for the widget.
* Files should be specified in the reference order.

#### Limitation

jQuery reference (`jquery-1.10.2.min.js`) will be added as built-in reference for the custom widget, So that you are not allowed to specify the jQuery files in dependencies.

## Importing widget in designer

Place the custom widgets folder with in the location `"C:\Bold BI\Dashboard Designer\CustomWidgets"` after installing Bold BI Enterprise build as like in below image to get displayed in the Dashboard Designer after the browser refresh. 

![Custom_widget category](/static/assets/embedded/visualizing-data/visualization-widgets/images/custom-widget/Customwidget_Import.png)

## Debugging the widget through Designer

You can debug the custom widget by dragging and dropping it in the design canvas after placing 'debugger' in `src/sourcefile.js`. Now you debug the widget in following cases:

### Init method

Widget can initialized through the init method, will be called initially when the widget is drag and dropped in design canvas with all the widget configuration details without data.  

### Update method

Once your widget is initialized through the init method, update method will called for widget updation like data update, widget resizing etc.

## Rendering widget through the source file

Source file is used to embed the user defined widget within the dashboard. Refer the below API available in the source file.

#Format

```js

ej.dashboard.registerWidget(
{
		
	guid : `Specifies the GUID used in widgetconfig.json`, 
 
	widgetName : `Specifies the name of the widget used in widgetconfig.json`,
 
	init : function () {
 	/* init method will be called when the widget is initialized. */
	},
 
	update : function (option) {
		update method will be called when any update needs to be performed in the widget. */
		if (option.type == "resize") {
 		/* update type will be 'resize' if the widget is being resized. */
		}
		else if (option.type == "refresh") {
 		/* update type will be 'refresh' when the data is refreshed. */
		}
	}
});

```

#Example

```js

ej.dashboard.registerWidget(
         {
 
guid : "b0d5348d-f625-4b78-8db9-c5ed9d38eb45",
 
widgetName : "SunburstChart",
 
init : function () {
var widget =  document.createElement("div").setAttribute("id", this.element.getAttribute("id") + "_widget");
widget.innerHTML = "Widget is created successfully";
this.element.appendChild(widget);
},
 
update : function (option) {

var widget = document.getElementById(this.element.getAttribute("id") + "_widget");
if(option.type == "resize") {
 widget.innerHtml = "Widget is resized."
}
else if (option.type == "refresh") {
 	widget.innerHtml = "Widget data need to be refreshed."
}
}
   }
);

```

The following information will be available in this scope.

<table>
<thead>
<tr>
<th> Syntax</th>
<th> Uses </th>
</tr>
</thead>
<tbody>
<tr>
<td class = "syntax"> <b>this.element</b> </td>
<td class = "uses"> this.element Container div element in which the custom widget should be embedded.</td>
</tr>
 <tr>
 <td class ="syntax" ><b>this.model.dataSource</b> </td>
 <td class ="uses" > Holds the datasource for the custom widget in JSON format </td>
 </tr>
 <tr>
 <td class ="syntax" ><b>this.model.boundColumns</b> </br>
 <table>
 <tr> <b>this.model.boundColumns</b>.datafield[columnIndex].columnName </tr>
 <tr> <b>this.model.boundColumns</b>.datafield[columnIndex].uniqueColumnName </tr>
 </table>
 </td>
 <td class ="uses" > Holds the information about the bounded column to the control.
<ul>
<li> <b>columnName</b> denotes the actual column name in the data source.</li>

<li> <b>uniqueColumnName</b> should be used at the time of interaction.</li>

</ul>
 </td>
 </tr>
 </tbody>
</table>

## Samples

* [SunburstChart](https://www.syncfusion.com/downloads/support/directtrac/general/ze/SunburstChart905078238.zip)

## Adding Syncfusion ejSunburstChart as custom widget

* Follow the below steps to add the Sunburst Chart as custom widget for the dashboard. 

### Step 1: Download the below attached custom widget template for developing.

Custom Widget Template : [Template](https://www.syncfusion.com/downloads/support/directtrac/general/ze/WidgetName-1194581910.zip)

### Step 2: Configure the widget through the `widgetconfig.json` file.

`description` - You can provide the Description about the Sunburst chart.

`srcFile` - Path of the source file which is required for the Sunburst Chart.

`dependencies` - Dependency script and CSS files should be specified in the dependencies section.

`ej.sunburstchart.js` dependency file can be downloaded from this [link](https://csg.syncfusion.com/).

```js

"description": "Sunburst Chart is useful for visualizing hierarchical data.",
    "srcFile": "src/sunburst.js",
    "dependencies": {"scripts": [ "src/ej.sunburstchart.js"] },

```

* As Sunburst Chart requires two data fields, so we have configured Values and Levels as shown below.

```js

"dataFields": [
        {
            "displayName": "Value",
            "valueType": "measure",
            "name": "Value",
            "min": 1,
            "max": 1,
            "optional": false
        },
        {
            "displayName": "Levels",
            "valueType": "dimension",
            "name": "Levels",
            "min": 1,
            "max": 4,
            "optional": false
        }
    ],

```


* After configuring the widgets, place the custom widget folder into **C:\Bold BI\Dashboard Designer\CustomWidgets**

![Custom_widget category](/static/assets/embedded/visualizing-data/visualization-widgets/images/custom-widget/Customwidget_location.png)

* Then, configure the widget with the necessary data.

![Custom_widget category](/static/assets/embedded/visualizing-data/visualization-widgets/images/custom-widget/Customwidget_Data_Panel.png)

* Place the debugger in `SunburstChart/src/sunburst.js`, and then you can start rendering sunburst through the init method in the source file.

![Custom_widget category](/static/assets/embedded/visualizing-data/visualization-widgets/images/custom-widget/Customwidget_Debugger.png)

* this.element is the container(div) provided to render the actual widget.

* So, we are creating our sunburst chart in this.element by using the data in this.model.datasource .

* In renderSunburstChartWidthDefaultData(), We are creating a new space (div) for rendering our sunburst chart custom widget with default data and appending into the container as you can see in the below code.

```js

renderSunburstChartWidthDefaultData : function () {
			this.widget = document.createElement("div");
			this.widget.setAttribute("id", this.element.getAttribute("id") + "_widget");
			this.element.appendChild(this.widget);

```

* The width and height of the widget is assigned from the container’s width and height respectively.

```js

* $(this.widget).css({"width":$(this.element).width(), "height":$(this.element).height()});

```

* Configure the datasource with some default values for initial rendering of Sunburst Chart. groupMemberPath and levels are the API’s of ejSunburstChart where we have to configure the uniqueColumnName of the columns that we bind in the levels section.

```js

var dataSource = [{ Item: "Item1", Value: 50 },{ Item: "Item2", Value: 60 },{ Item: "Item3", Value: 70 },{ Item: "Item4", Value: 80 },{ Item: "Item5", Value: 90 },{ Item: "Item6", Value: 90 },{ Item: "Item7", Value: 90 },{ Item: "Item8", Value: 90 },{ Item: "Item9", Value: 90 },{ Item: "Item10", Value: 90 },{ Item: "Item11", Value: 90 }];
			var levels = [];
			var valueMember = "Value";
			levels = [ { groupMemberPath: "Item" }];

```

* Sunburst chart is rendered by configuring the required API'S and assign the values

```js

$(this.widget).ejSunburstChart({ dataSource: dataSource, 
							valueMemberPath: valueMember, levels: levels, 
							tooltip: { visible: true},
							margin: (this.marginVisibility())? { left: 10, top: 10, bottom: 10, right: 10} :{ left: 0, top: 0, bottom: 0, right: 0} ,
							border: { width: (this.marginVisibility())? 2:0 },
							load: $.proxy(this.sunburstChartLoad),
							enableAnimation: false,
							animationType: 'Rotation',
							innerRadius: 0.2,							
							dataLabelSettings:{visible:false},
							size: { height: $(this.element).height(), width: $(this.element).width()},	 
							legend: { visible:  (this.legendVisibility()) , position: this.legendPosition() },
							highlightSettings: {enable: true},
							selectionSettings: {enable: true, mode : "parent"}
							});	

```

* Update method will be triggered for below operations,so here we are performing the operations based on the update type(resize, refresh) by invoking the respective API of the widget.

  1) Resize

  2) Refresh


```js

update : function (option) {
			if(option.type == "resize") {
				this.resizeWidget(option.size);
			}
			else if (option.type == "refresh") {
				var widgetObj = $(this.widget).data("ejSunburstChart");	
				if(this.model.boundColumns.Value.length > 0){
					for (var i=0; i<this.model.dataSource.length; i++) {
						this.model.dataSource[i][this.model.boundColumns.Value[0].uniqueColumnName] =  parseInt( this.model.dataSource[i][this.model.boundColumns.Value[0].uniqueColumnName]);     	
					}
					var valueMember = this.model.boundColumns.Value[0].uniqueColumnName;
					if (this.model.boundColumns.Levels.length > 0) {
						var levels = [];				
						for (var level = 0; level < this.model.boundColumns.Levels.length; level++) {
							levels.push({ groupMemberPath : this.model.boundColumns.Levels[level].uniqueColumnName });
						}
						widgetObj.model.levels= levels;
					}
					widgetObj.model.dataSource = this.model.dataSource;
					widgetObj.model.valueMemberPath = valueMember;
					widgetObj.redraw();
				} else {
					this.renderSunburstChartWithDefaultData();
				}
			}			
}

```

* For ejSunburstChart related API references, refer the [link.](https://help.syncfusion.com/api/js/ejsunburstchart) 

* Sunburst widget will be rendered as follows:

![Custom_widget category](/static/assets/embedded/visualizing-data/visualization-widgets/images/custom-widget/Customwidget_render.png)

## Adding C3 chart as a custom widget

Here we are creating a C3 Chart using the D3 Library.

Note: The C3 Chart is open-source and it is under MIT license.

Follow these steps to add the third party widget(C3 Chart) as a custom widget for the dashboard.

* Refer to this [link](/embedded-bi/visualizing-data/visualization-widgets/custom-widget/#creating-new-widget) to create a new custom widget files.

![Custom_widget C3 chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/custom-widget/custom_widget_c3chart_folder.png)

* Configure the widget using the `widgetconfig.json` file.

* As a C3 Chart requires two data fields, we have configured **column** and **values** as shown below and the properties section contains the properties related to the C3 Chart. Refer to this [link](/embedded-bi/visualizing-data/visualization-widgets/custom-widget/#configuring-widget-using-manifest-file) for configuring the `widgetconfig.json`.

```js

    "widgetName": "C3Chart",
    "displayName": "C3 Chart",
    "guid": "b0d5348d-f625-4b78-8db9-c5ed9d38eb45",
    "category": "Comparison",
    "description": "Compare values for a set of unordered items across categories",
    "srcFile": "src/sourcefile.js",
    "dependencies": {
	"scripts": [ 
	     "src/d3.js",
	     "src/c3.js"
		 ] 
		 },
    "dataFields": [
        {
            "displayName": "Value",
            "valueType": "measure",
            "name": "Value",
            "min": 1,
            "max": 1,
            "optional": false
        },
        {
            "displayName": "Column",
            "valueType": "dimension",
            "name": "Column",
            "min": 1,
            "max": 1,
            "optional": false
        }
    ],
    "functionalities": [
        {
            "header": "Basic Settings",
            "properties": [
                {
                    "displayName": "Show Tooltip",
                    "controlType": "bool",
                    "name": "showTooltip",
                    "defaultValue": "true"
                },
				{
                    "displayName": "Show Label",
                    "controlType": "bool",
                    "name": "showLabel",
                    "defaultValue": "true"
                },
                {
                    "displayName": "Color",
                    "controlType": "color",
                    "name": "barColor",
                    "defaultValue": "#2196F3"
                }
            ]
        },
      ],
    "filterSettings": {
        "masterFilter": {
            "visible": true,
            "defaultValue": true

        },
        "ignoreMasterFilter": {
            "visible": true,
            "defaultValue": false
        }
    }

```

* The d3.js dependency file can be downloaded from the D3 [website](https://github.com/d3/d3/releases).

* The c3.js dependency file can be downloaded from the C3 [website](https://github.com/c3js/c3).

* [import](/embedded-bi/visualizing-data//visualization-widgets/custom-widget/#importing-widget-in-designer) the custom widget into the designer.

* Then, configure the widget with the necessary data.

![Custom_widget C3 chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/custom-widget/C3_Chart_Custom_widget_schema.png)

* You can debug the custom widget by dragging and dropping it into the design canvas after placing the ‘debugger’ in `src/sourcefile.js`.

* **this.element** is the container(div) provided to render our actual widget.

* So, we are creating our C3 Chart in **this.element** by using the data in **this.model.dataSource**. 

* In Init(), We are creating a new space (div) for rendering our C3 Chart custom widget and appending into the container as you can see in the following code.

* The width and height of the widget are assigned from the container's width and height respectively.  

```js

     init: function () { /* init method will be called when the widget is initialized */
	 this.widget = document.createElement("div");
	 this.widget.setAttribute('id', 'chart');
	 var width = document.getElementById('container').style.width;
	 var height = document.getElementById('container').style.height;
	 this.element.appendChild(this.widget);
	 var that = this;

```

* Configure the datasource with some default values for initial rendering of C3 Chart. 

```js

	var columns =[];
	columns =[{column:'Item1',values: '50'},{column:'Item2',values: '20'},{column:'Item3',values: '30'}];

```

* this.model.boundColumns.Value and this.model.boundColumns.length contains the columns bounded in the columns and values respectively. By checking the following condition, we can find whether the widget is configured with columns or not. 

* Converting the datasource structure required by C3 Chart. 

```js

    if (this.model.boundColumns.Value.length > zero) {
     for (var i = 0; i < this.model.dataSource.length; i++) {
	  columns.push({column: this.model.dataSource[i][this.model.boundColumns.Column[0].uniqueColumnName], values: this.model.dataSource[i][this.model.boundColumns.Value[0].uniqueColumnName]});
			}
```

* To render the C3 Chart, configure the required API's and assign the data to it.

```js

    var chart = c3.generate({
		data:
		{
		  type: 'bar',
		  json: columns,
		  keys:
			{
			 x: 'column',
			 value: ['values']
			},
			labels: true,
			selection:
			{
			 enabled: true,
			 multiple: false,
			 draggable: true
			},
			onclick: function(d) {
								that.selectionChange(d)
							},
		},
		axis: 
		{
		 x:
		  {
		   type: 'category'
		  }
		},
		grid:
		{
		   x: {show: false},
		   y: {show: true}
		},
		bar:
	      {
		  width:
		   { 
			ratio: 0.5
		   }
	      },
		interaction: {enabled: true}
	   });
	this.widget = chart;


```

* The C3 Chart widget will be rendered as follows:

![Custom widget C3 chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/custom-widget/custom_widget_C3_chart.png)


* Update method will be triggered for the following operations and we have to do the required changes by checking the update types(resize, refresh, and propertyChange), and the widget will be updated accordingly by invoking the respective API of the widget. 

	1) Resize

	2) Refresh

	3) property change

```js

    update: function (option) {
        var widget = this.widget;

        /* update method will be called when any update needs to be performed in the widget. */

        if (option.type == "resize") {
            /* update type will be 'resize' if the widget is being resized. */
			widget.resize(option.size);
        }
        else if (option.type == "refresh") {
            /* update type will be 'refresh' when the data is refreshed. */
			this.refreshChart();
        }
        else if (option.type == "propertyChange") {
            /* update type will be 'propertyChange' when any property value is changed in the designer. */

            switch (option.property.name) {
                case "showTooltip":
                    widget.internal.config.tooltip_show = option.property.value;
                    break;
                case "showLabel":
                    widget.internal.config.data_labels = option.property.value;
					widget.flush();
                    break;
                case "barColor":
                    widget.internal.config.data_colors.values = option.property.value;
					widget.flush();
                    break;
                }
        }
    }

```


```js

    refreshChart : function (e) {
		var columns =[];
		if (this.model.boundColumns.Value.length > 0)
		{
			for( var i=0; i< this.model.dataSource.length; i++)
			 {
			  columns.push({column:this.model.dataSource[i][this.model.boundColumns.Column[0].uniqueColumnName],values:this.model.dataSource[i][this.model.boundColumns.Value[0].uniqueColumnName]});
			 }
	    } else {
				columns =[{column:'A',values: '50'},{column:'B',values: '20'},{column:'C',values: '30'}];
			   }
	    var chart = c3.generate({
                    data: {                
                         type : 'bar',
                         json: columns,
                         keys: {
						      x: 'column',
						      value: ['values']
						       },
						 labels:this.model.properties.show label,
		                 selection:
						 {
                         enabled: true,
						 multiple: false,
						 draggable:true
						 },
						 onclick: function(d) {
								that.selectionChange(d)
							},
						 },
			        axis:
						 { 
						    x: {
                            type: 'category'
						       }
						 },
				    grid:
						 {
							 x:{ show : true},
							 y:{show: false}
						 },						 
					bar: 
						 { 
						  width: { ratio: 0.5 }
						 },
                    interaction: {enabled: true}
					}); 
                this.widget = chart;
				},
```
