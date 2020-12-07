---
layout: post
title: Color Themes for Dashboards – Embedded BI | Bold BI Docs
description: Learn about the built-in color themes available in Bold BI Embedded. Also, know how to create a custom theme and apply to the dashboard.
platform: bold-bi
documentation: ug
---

# Dashboard Themes in Bold BI Enterprise edition

The dashboard theme option is now available as a `preview feature` in the Bold BI Enterprise edition.  This feature allows you to apply the light or dark theme to the published dashboards. 

## How to switch dashboard themes

By default, the dashboards are rendered in the `light mode` and the theme option is shown in the header panel of the published dashboards as shown in the following image. 

 ![Theme option](/static/assets/embedded/working-with-dashboards/images/DashboardTheme.png)

Click the `Theme` option and it will list out the available themes.

 ![Available themes](/static/assets/embedded/working-with-dashboards/images/Available-Themes.png)

You can switch the themes by clicking the required theme name and it will apply the theme to the dashboard. 

The following image shows the dashboard view after applied the dark theme. 

 ![Dark theme applied view](/static/assets/embedded/working-with-dashboards/images/custom-theme-dark.png)

> **NOTE:** Some parts of the dashboard will be applied with the dark theme, and you can refer the [limitations](/embedded-bi/working-with-dashboards/dashboard-theme/#limitations) section for details.

The selected theme will be automatically applied next time when you open any dashboards in the same browser. 

## How to enable or disable the dashboard theme option in the Bold BI Enterprise edition

By default, the dashboard theme is enabled in the Bold BI Enterprise edition dashboards. 

However, you can turn off the feature by changing the settings with the following mentioned steps. 

1.	Open the `Web.config` file from the following location. 
**[Installation Drive]: Bold BI \ Dashboard Designer\Web.config**
![web config](/static/assets/embedded/working-with-dashboards/images/web-config-file.png)

2.	You can find the key dashboard:theme:enable as shown in the following screenshot.
![Turn off theme](/static/assets/embedded/working-with-dashboards/images/off-theme.png)

3.	Change the value for the key `dashboard:theme:enable` to **false**, and restart your server. 

4.	Now, the theme option will not be displayed in the view mode. *By default, the light mode will be applied*. 

## Limitations
 
The dashboard theme is currently a preview feature. The following items are not supported with the dark theme. 

1.	Dialogs (`Export, View, Info, Share and Comments, Dashboard parameter, and newly implemented dialogs`). 

2.	Newly implemented widgets like `RTE, Spline Area chart, Period over Period Comparison, Miscellaneous, and Custom widgets`. 

3.	Deprecated widgets such as `Card and Maps`. –Syncfusion will not provide the support in the future.

## Custom Theme

Custom theme allows you to customize the appearance of the Bold BI dashboard viewer. You can achieve this by customizing the JSON settings file. Granular level customization can also be done using these settings.

## How to create and apply a new custom theme

Follow the steps to add a new custom theme in Bold BI Enterprise edition. 

1. Navigate to the Bold BI deployment location. 

    `[Installation Drive]:\Bold BI\Dashboard Designer\DashboardThemes`

2. By default, light and dark theme files will be available in the location. 

    *Dashboard themes folder:*
    
    ![Dashboard themes folder](/static/assets/embedded/working-with-dashboards/images/dashboard-themes-folder.png)

3. Open the theme file in any text editor to view the template and the color code values. 

    *Dashboard theme template json file:*

    ![Theme template](/static/assets/embedded/working-with-dashboards/images/light-theme-json.png)

4. Create a new theme file with the template shown in the above theme file. You can modify the color for the properties in the hex format.

    *Prepared custom blue theme file contents:*
    ![Custom theme template](/static/assets/embedded/working-with-dashboards/images/custom-theme-json.png)

    > **NOTE:** Set the custom theme name in the `name` property.

5.  Now save the newly prepared theme file with the `[ThemeName].json` format.

    ![Save custom theme template](/static/assets/embedded/working-with-dashboards/images/adding-theme-file.png)

6. Now open the dashboard in the browser and the theme will be list in the theme drop down. 

    ![Applying custom theme](/static/assets/embedded/working-with-dashboards/images/applying-custom-theme.png)

7. Select your custom theme and the theme will be applied to the dashboard. 

    The following image shows the dashboard view after applied the custom blue theme. 

    ![Dashboard with applied custom theme](/static/assets/embedded/working-with-dashboards/images/custom-theme-blue.png)


## Custom theme JSON file format

A valid JSON custom theme file needs at least the `name` property, as shown in the following code sample. 

```json

{
    "name": "Blue"
}

```


The other properties are optional and will be applied with the default color codes. 

For an example, If you want to change the widget color palette codes alone and use the light theme for other color codes, you can create a new theme file with the following code. 

```json

{
    "name": "Blue",
    "dataColorPalette": [
        "#826AF9",
        "#2D99FF",
        "#2CD9C5",
        "#FF6C40",
        "#FFE700",
        "#F29D38",
        "#FF4085"
    ]
}

```

You can find the list of classes that you can customize in the following sections:

### Theme name 

Defines the custom theme name. 

**Format**:

```json

{
    "name": "CustomTheme"
}

```

### Theme type

The type should be either `light` or `dark`.

**Note:** When any color value is `undefined`, the default color will be applied based on the type. 

**Format:**

```json

{
    "name": "CustomTheme",
    "type": "dark"
}
```

### Data color palette

Defines the color palette for the widgets. 

**Example:**

```json

{
    "name": "CustomTheme",
    "dataColorPalette": [
        "#826AF9",
        "#2D99FF",
        "#2CD9C5",
        "#FF6C40",
        "#FFE700",
        "#F29D38",
        "#FF4085"
    ]
}

```

### Dashboard banner

Allows you to customize the background color of the dashboard header panel, the dashboard header text, and icon colors. 

**Format:**

```json

{
    "name": "CustomTheme",
    "banner": {
        "background": "#240C84",
        "textStyle": {
            "color": "#e5ebf8"
        },
        "icon": {
            "font": {
                "color": "#3BBDFE"
            },
            "hover": {
                "font": {
                    "color": "#e5ebf8"
                },
                "background": "#4a536b"
            }
        }
    }
}

```


### Dashboard widgets

The `widgets` section allows you to configure the widget container properties like the container background, title or sub-title color, icon colors and the widget level properties like the axis properties, legend properties, and the data label properties.

#### Widget common level properties

The color codes defined under the `widgets` section will be applied to all the applicable widgets unless it has been overridden in the widget specific level. 

##### Background

Defines the widget container background.

**Format:**

```json

{
    "name": "CustomTheme",
    "widgets": {
        "background": "#32199B"
    }
}

```

##### Text style

Defines the widgets text color. 

**Format:**

```json

{
    "name": "CustomTheme",
    "widgets": {
        "textStyle": {
            "color": "#e5ebf8"
        }
    }
}

```

##### Icon

Defines the widget container icon style. 

**Format:**

```json

{
    "name": "CustomTheme",
    "widgets": {
        "icon": {
            "font": {
                "color": "#FF71FF"
            },
            "hover": {
                "font": {
                    "color": "#c6d0e8"
                },
                "background": "#374159"
            }
        }
    }
}

```

##### Axis

Defines the widget axis property color codes. 

Format:

```json

{
    "name": "CustomTheme",
    "widgets": {
        "axis": {
            "title": {
                "font": {
                    "color": "#c6d0e8"
                }
            },
            "label": {
                "font": {
                    "color": "#c6d0e8"
                }
            },
            "gridLines": {
                "color": "#4A2BC6"
            },
            "tickLines": {
                "color": "#4A2BC6"
            }
        }
    }
}

```

##### Legend

Defines the widget's legend color codes. 

**Format:**

```json

{
    "name": "CustomTheme",
    "widgets": {
        "legend": {
            "font": {
                "color": "#e5ebf8"
            }
        }
    }
}

```

##### Data label

Defines the widget's data label color codes. 

**Format:**

```json

{
    "name": "CustomTheme",
    "widgets": {
        "dataLabel": {
            "font": {
                "color": "#c6d0e8"
            }
        }
    }
}

```

##### Data value

Defines the widgets data text and background colors. 

**Format:**

```json

{
    "name": "CustomTheme",
    "widgets": {
        "dataValue": {
            "background": "#212634",
            "font": {
                "color": "#e5ebf8"
            },
            "hover": {
                "font": {
                    "color": "#e5ebf8"
                },
                "background": "#3e4658"
            }
        }
    }
}

```

#### Widget specific level properties

The `widgets.[widetName]` section allows you to customize the properties of a specific widget.

###### Chart

**Format:**

```json

{
    "name": "CustomTheme",
    "widgets": {
        "chart": {
            "axis": {
                "title": {
                    "font": {
                        "color": "#c6d0e8"
                    }
                },
                "gridLines": {
                    "color": "#4A2BC6"
                },
                "label": {
                    "font": {
                        "color": "#c6d0e8"
                    }
                },
                "tickLines": {
                    "color": "#4A2BC6"
                }
            },
            "dataLabel": {
                "font": {
                    "color": "#c6d0e8"
                }
            },
            "legend": {
                "font": {
                    "color": "#e5ebf8"
                }
            },
            "markerColor": "#32199B"
        }
    }
}

```


###### Map

**Format:**

```json

{
    "name": "CustomTheme",
    "widgets": {
        "map": {
            "dataLabel": {
                "font": {
                    "color": "#1a1a1a"
                }
            },
            "legend": {
                "font": {
                    "color": "#c6d0e8"
                }
            }
        }
    }
}

```

###### Tree map

**Format:**

```json

{
    "name": "CustomTheme",
    "widgets": {
        "treeMap": {
            "dataLabel": {
                "font": {
                    "color": "#e5ebf8"
                }
            },
            "legend": {
                "font": {
                    "color": "#e5ebf8"
                }
            }
        }
    }
}

```

###### Heat map

**Format:**

```json

{
    "name": "CustomTheme",
    "widgets": {
        "heatMap": {
            "dataLabel": {
                "font": {
                    "color": "#e5ebf8"
                }
            },
            "emptyFillColor": "#282f40",
            "legend": {
                "font": {
                    "color": "#e5ebf8"
                }
            }
        }
    }
}

```


###### Grid

**Format:**

```json

{
    "name": "CustomTheme",
    "widgets": {
        "grid": {
            "content": {
                "background": "#202635",
                "font": {
                    "color": "#e5ebf8"
                },
                "hover": {
                    "background": "#3e4658",
                    "font": {
                        "color": "#e5ebf8"
                    }
                },
                "selection": {
                    "background": "#465168",
                    "font": {
                        "color": "#e5ebf8"
                    }
                }
            },
            "filterBar": {
                "background": "#202635",
                "border": "#505a71",
                "font": {
                    "color": "#e5ebf8"
                }
            },
            "header": {
                "background": "#313c50",
                "font": {
                    "color": "#c6d0e8"
                }
            }
        }
    }
}

```

###### Pivot grid

**Format:**

```json

{
    "name": "CustomTheme",
    "widgets": {
        "pivotGrid": {
            "border": "#505a71",
            "content": {
                "background": "#212634",
                "font": {
                    "color": "#e5ebf8"
                },
                "hover": {
                    "background": "#3e4658",
                    "font": {
                        "color": "#e5ebf8"
                    }
                },
                "selection": {
                    "background": "#465168",
                    "font": {
                        "color": "#e5ebf8"
                    }
                }
            },
            "header": {
                "background": "#282f40",
                "font": {
                    "color": "#e5ebf8"
                }
            },
            "groupingButton": {
                "background": "#485166",
                "font": {
                    "color": "#e5ebf8"
                },
                "icon": {
                    "font": {
                        "color": "#c6d0e8"
                    },
                    "hover": {
                        "background": "#636e87",
                        "font": {
                            "color": "#e5ebf8"
                        }
                    }
                }
            },
            "groupingPanelBackground": "#282f40",
            "filterDialog": {
                "list": {
                    "background": "#2d3546",
                    "font": {
                        "color": "#e5ebf8"
                    },
                    "hover": {
                        "background": "#3e4658",
                        "font": {
                            "color": "#e5ebf8"
                        }
                    },
                    "selection": {
                        "background": "#0565ff",
                        "font": {
                            "color": "#ffffff"
                        }
                    }
                },
                "footerBackground": "#333c4e",
                "cancelButton": {
                    "background": "#485166",
                    "font": {
                        "color": "#e5ebf8"
                    },
                    "press": {
                        "background": "#636e87",
                        "font": {
                            "color": "#e5ebf8"
                        }
                    },
                    "hover": {
                        "background": "#636e87",
                        "font": {
                            "color": "#e5ebf8"
                        }
                    }
                },
                "okButton": {
                    "background": "#0565ff",
                    "font": {
                        "color": "#ffffff"
                    },
                    "press": {
                        "background": "#0655d4",
                        "font": {
                            "color": "#e5ebf8"
                        }
                    },
                    "hover": {
                        "background": "#0655d4",
                        "font": {
                            "color": "#e5ebf8"
                        }
                    }
                },
                "header": {
                    "background": "#333c4e",
                    "font": {
                        "color": "#e5ebf8"
                    }
                }
            }
        }
    }
}

```

###### List box

**Format:**

```json

{
    "name": "CustomTheme",
    "widgets": {
        "listbox": {
            "dropDownList": {
                "background": "#240c84",
                "font": {
                    "color": "#e5ebf8"
                },
                "hover": {
                    "background": "#3e4658",
                    "font": {
                        "color": "#e5ebf8"
                    }
                },
                "selection": {
                    "background": "#0565ff",
                    "font": {
                        "color": "#ffffff"
                    }
                }
            },
            "checkbox": {
                "tickColor": "#ffffff",
                "uncheckedBackground": "#2d3546",
                "uncheckedBorder": "#77839e",
                "checkedBackground": "#0565ff",
                "checkedBorder": "#0450cc"
            }
        }
    }
}

```

###### Combo box

**Format:**

```json

{
    "name": "CustomTheme",
    "widgets": {
        "combobox": {
            "dropDownList": {
                "background": "#240c84",
                "font": {
                    "color": "#e5ebf8"
                },
                "hover": {
                    "background": "#3e4658",
                    "font": {
                        "color": "#e5ebf8"
                    }
                },
                "selection": {
                    "background": "#0565ff",
                    "font": {
                        "color": "#ffffff"
                    }
                }
            },
            "checkbox": {
                "tickColor": "#ffffff",
                "uncheckedBackground": "#2d3546",
                "uncheckedBorder": "#77839e",
                "checkedBackground": "#0565ff",
                "checkedBorder": "#0450cc"
            }
        }
    }
}

```

###### Date picker

**Format:**

```json

{
    "name": "CustomTheme",
    "widgets": {
        "datepicker": {
            "textBox": {
                "background": "#212634",
                "font": {
                    "color": "#97a5c5"
                }
            },
            "calendar": {
                "background": "#2d3546",
                "borderColor": "#505a71",
                "weekHeader": {
                    "background": "#2d3546",
                    "font": {
                        "color": "#c6d0e8"
                    }
                },
                "availableDates": {
                    "background": "#2d3546",
                    "font": {
                        "color": "#e5ebf8"
                    },
                    "hover": {
                        "background": "#485166",
                        "font": {
                            "color": "#e5ebf8"
                        }
                    },
                    "selection": {
                        "background": "#0565ff",
                        "font": {
                            "color": "#e5ebf8"
                        }
                    }
                },
                "unavailableDays": {
                    "background": "#2d3546",
                    "font": {
                        "color": "#97a5c5"
                    }
                },
                "otherMonthDays": {
                    "background": "#2d3546",
                    "font": {
                        "color": "#e1e1e1"
                    }
                },
                "icon": {
                    "font": {
                        "color": "#c6d0e8"
                    },
                    "hover": {
                        "background": "",
                        "font": {
                            "color": ""
                        }
                    }
                },
                "footerBackground": "",
                "cancelButton": {
                    "background": "#485166",
                    "font": {
                        "color": "#e5ebf8"
                    },
                    "press": {
                        "background": "#636e87",
                        "font": {
                            "color": "#e5ebf8"
                        }
                    },
                    "hover": {
                        "background": "#636e87",
                        "font": {
                            "color": "#e5ebf8"
                        }
                    }
                },
                "okButton": {
                    "background": "#0565ff",
                    "font": {
                        "color": "#ffffff"
                    },
                    "press": {
                        "background": "#0655d4",
                        "font": {
                            "color": "#e5ebf8"
                        }
                    },
                    "hover": {
                        "background": "#0655d4",
                        "font": {
                            "color": "#e5ebf8"
                        }
                    }
                }
            }
        }
    }
}

```

###### KPI card

**Format:**

```json

{
    "name": "CustomTheme",
    "widgets": {
        "kpiCard": {
            "border": "#555961",
            "leftLabel": {
                "color": "#97a5c5"
            },
            "leftValue": {
                "color": "#97a5c5"
            },
            "rightLabel": {
                "color": "#97a5c5"
            },
            "rightValue": {
                "color": "#97a5c5"
            },
            "separatorColor": "#97a5c5",
            "sparkLine": {
                "background": "#494d57",
                "opacity": "1"
            },
            "title": {
                "color": "#c6d0e8"
            }
        }
    }
}

```

###### Number card

**Format:**

```json

{
    "name": "CustomTheme",
    "widgets": {
        "numberCard": {
            "border": "#555961",
            "rightValue": {
                "color": "#97a5c5"
            },
            "sparkLine": {
                "background": "#4cd766",
                "opacity": "0.2"
            },
            "title": {
                "color": "#c6d0e8"
            }
        }
    }
}

```

###### Range slider

**Format:**

```json

{
    "name": "CustomTheme",
    "widgets": {
        "rangeSlider": {
            "sliderBackground": "#465168",
            "rangeColor": "#826AF9",
            "handle": {
                "background": "#202635",
                "border": "#826AF9"
            },
            "label": {
                "background": "#212634",
                "font": {
                    "color": "#c6d0e8"
                }
            }
        }
    }
}

```

###### Circular gauge

**Format:**

```json

{
    "name": "CustomTheme",
    "widgets": {
        "circularGauge": {
            "background": "#4A2BC6",
            "needlePointerBackground": "#bbbcbb",
            "rangePointerBackground": "#f6727f",
            "scaleBackground": "#bbbcbb",
            "targetPointerBackground": "#9A9A9A",
            "label": {
                "color": "#e2e2e2"
            },
            "title": {
                "color": "#e5ebf8"
            },
            "value": {
                "color": "#e2e2e2"
            }
        }
    }
}

```

### Dashboard tooltip

Allows you to customize the look of the dashboard tooltip. 

**Format:** 

```json

{
    "name": "CustomTheme",
    "tooltip": {
        "background": "#240C84",
        "font": {
            "color": "#e5ebf8"
        },
        "border": "#a2aec9"
    }
}
```

### Dashboard menu

Allows you to customize the dashboard menu background and foreground properties. 

**Format**

```json

{
    "name": "CustomTheme",
    "menu": {
        "background": "#2d3546",
        "font": {
            "color": "#e5ebf8"
        },
        "border": "#505a71",
        "hover": {
            "font": {
                "color": "#e5ebf8"
            },
            "background": "#4a536b"
        }
    }
}

```

### Error alert dialog

Allows you to customize the dashboard error dialog background and foreground properties for the header, footer, and the error content.

**Format:**

```json

{
    "name": "CustomTheme",
    "alertDialog": {
        "footerBackground": "#333c4e",
        "content": {
            "background": "#2d3546",
            "font": {
                "color": "#c6d0e8"
            }
        },
        "error": {
            "background": "#313a50",
            "font": {
                "color": "#e5ebf8"
            }
        },
        "header": {
            "background": "#333c4e",
            "font": {
                "color": "#e5ebf8"
            }
        },
        "copyButton": {
            "background": "#485166",
            "font": {
                "color": "#e5ebf8"
            },
            "press": {
                "background": "#636e87",
                "font": {
                    "color": "#e5ebf8"
                }
            },
            "hover": {
                "background": "#636e87",
                "font": {
                    "color": "#e5ebf8"
                }
            }
        },
        "okButton": {
            "background": "#0565ff",
            "font": {
                "color": "#ffffff"
            },
            "press": {
                "background": "#0655d4",
                "font": {
                    "color": "#e5ebf8"
                }
            },
            "hover": {
                "background": "#0655d4",
                "font": {
                    "color": "#e5ebf8"
                }
            }
        }
    }
}

```

### Filter overview

Allows you to customize the filter overview dialog.

**Format:**

```json

{
    "name": "CustomTheme",
    "filterOverview": {
        "background": "#2d3546",
        "border": "#505a71",
        "font": {
            "color": "#e5ebf8"
        },
        "icon": {
            "font": {
                "color": "#aab7d4"
            },
            "hover": {
                "background": "#4a536b",
                "font": {
                    "color": "#e5ebf8"
                }
            }
        }
    }
}

```