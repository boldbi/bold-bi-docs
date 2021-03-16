---
layout: post
title: Color Themes for Dashboards – Embedded BI | Bold BI Docs
description: Learn about the built-in color themes available in Bold BI Embedded. Also, know how to create a custom theme and apply to the dashboard.
platform: bold-bi
documentation: ug
---

# Dashboard Themes in Bold BI Enterprise edition

The dashboard theme option is now available as a `preview feature` in the Bold BI Enterprise edition.  This feature allows you to apply different theme for the dashboard. Currently we have provided light and dark theme.

## How to switch dashboard themes

By default, the dashboards are rendered in the `light mode` and the theme option is shown in the header panel of the published dashboards as shown in the following image. 

 ![Theme option](/static/assets/embedded/working-with-dashboards/images/DashboardTheme.png)

Clicking the `Theme` option will list out the available themes.

 ![Available themes](/static/assets/embedded/working-with-dashboards/images/Available-Themes.png)

You can switch the themes by clicking the required theme name from the list.

The following image shows the dashboard view after applying the dark theme. 

 ![Dark theme applied view](/static/assets/embedded/working-with-dashboards/images/custom-theme-dark.png)

> **NOTE:** Theming will not be applied in few areas in the dashboard. Please check the  [limitations](/embedded-bi/working-with-dashboards/dashboard-theme/#limitations) section for details.

The browser will be remembering the last applied theme and all the dashboards will be rendered with the theme. 

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

Starting from `v3.3.88` you can customize the following,

1. Color Customization
2. Font Customization

```json

{
    "background": "#FFFFFF",
    "textStyle": {
      "color": "#000000",
      "fontSettings": {
        "autoFontSettings": true,
        "fontSize": "",
        "fontWeight": "",
        "fontFamily": "",
        "fontSrc": ""
      }
    }
}

```

## Color Customization

Allows you to customize the color and background css property for the dashboard.

- `color` customizes the foreground color of the dashboard elements.
- `background` customizes the background of the dashboard elements.

## Font Customization

Allows you to customize the font property for the text elements in the dashboard banner, widgets, tooltips, menus, alert and filter overview dialog. It encloses the below properties to customize the text elements in the dashboard.

- `autoFontSettings` validates the customized value for the property overrides or not. 
- `fontSize` customizes the `font-size` css property. 
- `fontFamily` customizes the `font-family` css property.
- `fontWeight` customizes the `font-weight` css property.
- `fontSrc` includes the new custom font, only as base64 string.

Font source can be applied by converting the font file to base64 string and use as specified below. The value for font source property can be applied once and it can be referred to its `fontFamily` value given.

```json

{
    "fontSettings": {
        "autoFontSettings": false,
        "fontSize": "",
        "fontWeight": "",
        "fontFamily": "MyFontFamily",
        "fontSrc": "url(data:font/truetype;charset=utf-8;base64, AAEAAAATAQAABAAwRkZUTVyddG4AAScUAAAAHEdERUYBFwAkAAEmQAAAAChHUE9T2CzomQABJogAAACM/8ZwZ20PtC+nAAAH3AAAAmVnYXNw format('truetype')"
    }
}

```

> **NOTE:**
    1. If value for the property is left blank, then default value is taken.
    2. The customized font values are applied only when the `autoFontSettings` property is set false, by default it is set true.
    3. The font size measurement can be given in any units (px, pt, em, rem).
    4. The font weight can be given either in numerical notation (100 to 900) or string values as `normal`, `bold`, `bolder`, `lighter`.

**Example:**

Here is an example to show how the dashboard banner is color and font customized,

```json

"banner": {
    "background": "#ff4801",
    "textStyle": {
      "color": "#ffffff",
      "fontSettings": {
        "autoFontSettings": false,
        "fontSize": "30px",
        "fontWeight": "900",
        "fontFamily": "Garamond, serif",
        "fontSrc": ""
      }
    },
    "icon": {
      "font": {
        "color": "#ffffff",
        "fontSettings": {
          "autoFontSettings": false,
          "fontSize": "12px",
          "fontWeight": "bold",
          "fontFamily": "Garamond, serif",
          "fontSrc": ""
        }
      },
      "hover": {
        "font": {
          "color": "#283A5E",
          "fontSettings": {
            "autoFontSettings": false,
            "fontSize": "17px",
            "fontWeight": "bolder",
            "fontFamily": "Lucida Console",
            "fontSrc": ""
          }
        },
        "background": "#f1f9ff"
      }
    }
  }

```
   ![Font customization dashboard banner](/static/assets/embedded/working-with-dashboards/images/font-customization-banner.png)

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
### Theme Font

Allows you to customize the font size, family and weight for the overall dashboard.

**Format:**

```json

{
    "fontSettings": {
        "autoFontSettings": false,
        "fontFamily": "'Brush Script MT', cursive",
        "fontSrc": ""
    }
}

```

> **NOTE:** The customized font value is applied only when the `autoFontSettings` property is set false, by default it is set true.

### Data color palette

Defines the color palette for the widgets. 

**Format:**

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

Allows you to customize the color and font of the dashboard header panel, the dashboard header text, and icons. 

**Format:**

```json

{
    "name": "CustomTheme",
    "banner": {
        "background": "#240C84",
        "textStyle": {
            "color": "#e5ebf8",
            "fontSettings": {
                "autoFontSettings": true,
                "fontSize": "",
                "fontWeight": "",
                "fontFamily": "",
                "fontSrc": ""
            }
        },
        "icon": {
            "font": {
                "color": "#3BBDFE",
                "fontSettings": {
                    "autoFontSettings": true,
                    "fontSize": "",
                    "fontWeight": "",
                    "fontFamily": "",
                    "fontSrc": ""
                }
            },
            "hover": {
                "font": {
                    "color": "#e5ebf8",
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                },
                "background": "#4a536b"
            }
        }
    }
}

```


### Dashboard widgets

The `widgets` section allows you to configure the widget container properties like the container background, title or sub-title color and font, icon color and font and the widget level properties like the axis properties, legend properties, and the data label properties.

#### Widget common level properties

The color codes and font settings are defined under the `widgets` section will be applied to all the applicable widgets unless it has been overridden in the widget specific level. 

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

Defines the widgets text color and font styles. 

**Format:**

```json

{
    "name": "CustomTheme",
    "widgets": {
        "textStyle": {
            "color": "#e5ebf8",
            "title": {
                "autoFontSettings": true,
                "fontSize": "",
                "fontWeight": "",
                "fontFamily": "",
                "fontSrc": ""
            },
            "subTitle": {
                "autoFontSettings": true,
                "fontSize": "",
                "fontWeight": "",
                "fontFamily": "",
                "fontSrc": ""
            }
        }
    }
}

```

##### Icon

Defines the widget container icon color and font styles. 

**Format:**

```json

{
    "name": "CustomTheme",
    "widgets": {
        "icon": {
            "font": {
                "color": "#FF71FF",
                "fontSettings": {
                    "autoFontSettings": true,
                    "fontSize": "",
                    "fontWeight": ""
                }
            },
            "hover": {
                "font": {
                    "color": "#c6d0e8",
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": ""
                    }
                },
                "background": "#374159"
            }
        }
    }
}

```

##### Axis

Defines the widget axis property color codes and font settings. 

Format:

```json

{
    "name": "CustomTheme",
    "widgets": {
        "axis": {
            "title": {
                "font": {
                    "color": "#c6d0e8",
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                }
            },
            "label": {
                "font": {
                    "color": "#c6d0e8",
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
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

Defines the widget's legend color codes and font settings. 

**Format:**

```json

{
    "name": "CustomTheme",
    "widgets": {
        "legend": {
            "font": {
                "color": "#e5ebf8",
                "fontSettings": {
                    "autoFontSettings": true,
                    "fontSize": "",
                    "fontWeight": "",
                    "fontFamily": "",
                    "fontSrc": ""
                }
            }
        }
    }
}

```

##### Data label

Defines the widget's data label color codes and font settings. 

**Format:**

```json

{
    "name": "CustomTheme",
    "widgets": {
        "dataLabel": {
            "font": {
                "color": "#c6d0e8",
                "fontSettings": {
                    "autoFontSettings": true,
                    "fontSize": "",
                    "fontWeight": "",
                    "fontFamily": "",
                    "fontSrc": ""
                }
            }
        }
    }
}

```

##### Data value

Defines the widgets data text and background colors and fonts. 

**Format:**

```json

{
    "name": "CustomTheme",
    "widgets": {
        "dataValue": {
            "background": "#212634",
            "font": {
                "color": "#e5ebf8",
                "fontSettings": {
                    "autoFontSettings": true,
                    "fontSize": "",
                    "fontWeight": "",
                    "fontFamily": "",
                    "fontSrc": ""
                }
            },
            "hover": {
                "font": {
                    "color": "#e5ebf8",
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
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
            "widgetHeader": {
                "title": {
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                },
                "subTitle": {
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                }
            },
            "axis": {
                "title": {
                    "font": {
                        "color": "#c6d0e8",
                        "fontSettings": {
                            "autoFontSettings": true,
                            "fontSize": "",
                            "fontWeight": "",
                            "fontFamily": "",
                            "fontSrc": ""
                        }
                    }
                },
                "gridLines": {
                    "color": "#4A2BC6"
                },
                "label": {
                    "font": {
                        "color": "#c6d0e8",
                        "fontSettings": {
                            "autoFontSettings": true,
                            "fontSize": "",
                            "fontWeight": "",
                            "fontFamily": "",
                            "fontSrc": ""
                        }
                    }
                },
                "tickLines": {
                    "color": "#4A2BC6"
                }
            },
            "dataLabel": {
                "font": {
                    "color": "#c6d0e8",
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                }
            },
            "legend": {
                "font": {
                    "color": "#e5ebf8",
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                }
            },
            "legendTitle": {
                "title": {
                    "font": {
                        "fontSettings": {
                            "autoFontSettings": true,
                            "fontSize": "",
                            "fontWeight": "",
                            "fontFamily": "",
                            "fontSrc": ""
                        }
                    }
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
            "widgetHeader": {
                "title": {
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                },
                "subTitle": {
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                }
            },
            "dataLabel": {
                "font": {
                    "color": "#1a1a1a",
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                }
            },
            "legend": {
                "font": {
                    "color": "#c6d0e8",
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                }
            },
            "legendTitle": {
                "title": {
                    "font": {
                        "fontSettings": {
                            "autoFontSettings": true,
                            "fontSize": "",
                            "fontWeight": "",
                            "fontFamily": "",
                            "fontSrc": ""
                        }
                    }
                }
            },
            "fillColor": "#f67280"
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
            "widgetHeader": {
                "title": {
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                },
                "subTitle": {
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                }
            },
            "dataLabel": {
                "font": {
                    "color": "#e5ebf8",
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                }
            },
            "legend": {
                "font": {
                    "color": "#e5ebf8",
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                }
            },
            "legendTitle": {
                "title": {
                    "font": {
                        "fontSettings": {
                            "autoFontSettings": true,
                            "fontSize": "",
                            "fontWeight": "",
                            "fontFamily": "",
                            "fontSrc": ""
                        }
                    }
                }
            },
            "fillColor": "#f6727f"
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
            "widgetHeader": {
                "title": {
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                },
                "subTitle": {
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                }
            },
            "axis": {
                "title": {
                    "font": {
                        "color": "#c6d0e8",
                        "fontSettings": {
                            "autoFontSettings": true,
                            "fontSize": "",
                            "fontWeight": "",
                            "fontFamily": "",
                            "fontSrc": ""
                        }
                    }
                },
                "label": {
                    "font": {
                        "color": "#c6d0e8",
                        "fontSettings": {
                            "autoFontSettings": true,
                            "fontSize": "",
                            "fontWeight": "",
                            "fontFamily": "",
                            "fontSrc": ""
                        }
                    }
                }
            },
            "dataLabel": {
                "font": {
                    "color": "#e5ebf8",
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                }
            },
            "fillColor": "#f6727f",
            "emptyFillColor": "#282f40",
            "legend": {
                "font": {
                    "color": "#e5ebf8",
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
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
            "widgetHeader": {
                "title": {
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                },
                "subTitle": {
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                }
            },
            "content": {
                "background": "#202635",
                "font": {
                    "color": "#e5ebf8",
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                },
                "hover": {
                    "background": "#3e4658",
                    "font": {
                        "color": "#e5ebf8",
                        "fontSettings": {
                            "autoFontSettings": true,
                            "fontSize": "",
                            "fontWeight": "",
                            "fontFamily": "",
                            "fontSrc": ""
                        }
                    }
                },
                "selection": {
                    "background": "#465168",
                    "font": {
                        "color": "#e5ebf8",
                        "fontSettings": {
                            "autoFontSettings": true,
                            "fontSize": "",
                            "fontWeight": "",
                            "fontFamily": "",
                            "fontSrc": ""
                        }
                    }
                }
            },
            "filterBar": {
                "background": "#202635",
                "border": "#505a71",
                "font": {
                    "color": "#e5ebf8",
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                }
            },
            "header": {
                "background": "#313c50",
                "font": {
                    "color": "#c6d0e8",
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
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
            "widgetHeader": {
                "title": {
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                },
                "subTitle": {
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                }
            },
            "border": "#505a71",
            "content": {
                "background": "#212634",
                "font": {
                    "color": "#e5ebf8",
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                },
                "hover": {
                    "background": "#3e4658",
                    "font": {
                        "color": "#e5ebf8",
                        "fontSettings": {
                            "autoFontSettings": true,
                            "fontSize": "",
                            "fontWeight": "",
                            "fontFamily": "",
                            "fontSrc": ""
                        }
                    }
                },
                "selection": {
                    "background": "#465168",
                    "font": {
                        "color": "#e5ebf8",
                        "fontSettings": {
                            "autoFontSettings": true,
                            "fontSize": "",
                            "fontWeight": "",
                            "fontFamily": "",
                            "fontSrc": ""
                        }
                    }
                }
            },
            "header": {
                "background": "#282f40",
                "font": {
                    "color": "#e5ebf8",
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                }
            },
            "groupingButton": {
                "background": "#485166",
                "font": {
                    "color": "#e5ebf8",
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                },
                "icon": {
                    "font": {
                        "color": "#c6d0e8",
                        "fontSettings": {
                            "autoFontSettings": true,
                            "fontSize": "",
                            "fontWeight": ""
                        }
                    },
                    "hover": {
                        "background": "#636e87",
                        "font": {
                            "color": "#e5ebf8",
                            "fontSettings": {
                                "autoFontSettings": true,
                                "fontSize": "",
                                "fontWeight": ""
                            }
                        }
                    }
                }
            },
            "groupingPanelBackground": "#282f40",
            "filterDialog": {
                "list": {
                    "background": "#2d3546",
                    "font": {
                        "color": "#e5ebf8",
                        "fontSettings": {
                            "autoFontSettings": true,
                            "fontSize": "",
                            "fontWeight": "",
                            "fontFamily": "",
                            "fontSrc": ""
                        }
                    },
                    "hover": {
                        "background": "#3e4658",
                        "font": {
                            "color": "#e5ebf8",
                            "fontSettings": {
                                "autoFontSettings": true,
                                "fontSize": "",
                                "fontWeight": "",
                                "fontFamily": "",
                                "fontSrc": ""
                            }
                        }
                    },
                    "selection": {
                        "background": "#0565ff",
                        "font": {
                            "color": "#ffffff",
                            "fontSettings": {
                                "autoFontSettings": true,
                                "fontSize": "",
                                "fontWeight": "",
                                "fontFamily": "",
                                "fontSrc": ""
                            }
                        }
                    }
                },
                "footerBackground": "#333c4e",
                "cancelButton": {
                    "background": "#485166",
                    "font": {
                        "color": "#e5ebf8",
                        "fontSettings": {
                            "autoFontSettings": true,
                            "fontSize": "",
                            "fontWeight": "",
                            "fontFamily": "",
                            "fontSrc": ""
                        }
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
                            "color": "#e5ebf8",
                            "fontSettings": {
                                "autoFontSettings": true,
                                "fontSize": "",
                                "fontWeight": "",
                                "fontFamily": "",
                                "fontSrc": ""
                            }
                        }
                    }
                },
                "okButton": {
                    "background": "#0565ff",
                    "font": {
                        "color": "#ffffff",
                        "fontSettings": {
                            "autoFontSettings": true,
                            "fontSize": "",
                            "fontWeight": "",
                            "fontFamily": "",
                            "fontSrc": ""
                        }
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
                            "color": "#e5ebf8",
                            "fontSettings": {
                                "autoFontSettings": true,
                                "fontSize": "",
                                "fontWeight": "",
                                "fontFamily": "",
                                "fontSrc": ""
                            }
                        }
                    }
                },
                "header": {
                    "background": "#333c4e",
                    "font": {
                        "color": "#e5ebf8",
                        "fontSettings": {
                            "autoFontSettings": true,
                            "fontSize": "",
                            "fontWeight": "",
                            "fontFamily": "",
                            "fontSrc": ""
                        }
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
            "widgetHeader": {
                "title": {
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                },
                "subTitle": {
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                }
            },
            "dropDownList": {
                "background": "#240c84",
                "font": {
                    "color": "#e5ebf8",
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                },
                "hover": {
                    "background": "#3e4658",
                    "font": {
                        "color": "#e5ebf8",
                        "fontSettings": {
                            "autoFontSettings": true,
                            "fontSize": "",
                            "fontWeight": "",
                            "fontFamily": "",
                            "fontSrc": ""
                        }
                    }
                },
                "selection": {
                    "background": "#0565ff",
                    "font": {
                        "color": "#ffffff",
                        "fontSettings": {
                            "autoFontSettings": true,
                            "fontSize": "",
                            "fontWeight": "",
                            "fontFamily": "",
                            "fontSrc": ""
                        }
                    }
                },
                "downArrowColor": "#cbd2e0"
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
            "widgetHeader": {
                "title": {
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                },
                "subTitle": {
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                }
            },
            "dropDownList": {
                "background": "#240c84",
                "font": {
                    "color": "#e5ebf8",
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                },
                "hover": {
                    "background": "#3e4658",
                    "font": {
                        "color": "#e5ebf8",
                        "fontSettings": {
                            "autoFontSettings": true,
                            "fontSize": "",
                            "fontWeight": "",
                            "fontFamily": "",
                            "fontSrc": ""
                        }
                    }
                },
                "selection": {
                    "background": "#0565ff",
                    "font": {
                        "color": "#ffffff",
                        "fontSettings": {
                            "autoFontSettings": true,
                            "fontSize": "",
                            "fontWeight": "",
                            "fontFamily": "",
                            "fontSrc": ""
                        }
                    }
                },
		        "downArrowColor": "#cbd2e0"
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
            "widgetHeader": {
                "title": {
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                },
                "subTitle": {
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                }
            },
            "textBox": {
                "background": "#212634",
                "font": {
                    "color": "#97a5c5",
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                }
            },
            "calendar": {
                "background": "#2d3546",
                "borderColor": "#505a71",
                "weekHeader": {
                    "background": "#2d3546",
                    "font": {
                        "color": "#c6d0e8",
                        "fontSettings": {
                            "autoFontSettings": true,
                            "fontSize": "",
                            "fontWeight": "",
                            "fontFamily": "",
                            "fontSrc": ""
                        }
                    }
                },
                "availableDates": {
                    "background": "#2d3546",
                    "font": {
                        "color": "#e5ebf8",
                        "fontSettings": {
                            "autoFontSettings": true,
                            "fontSize": "",
                            "fontWeight": "",
                            "fontFamily": "",
                            "fontSrc": ""
                        }
                    },
                    "hover": {
                        "background": "#485166",
                        "font": {
                            "color": "#e5ebf8",
                            "fontSettings": {
                                "autoFontSettings": true,
                                "fontSize": "",
                                "fontWeight": "",
                                "fontFamily": "",
                                "fontSrc": ""
                            }
                        }
                    },
                    "selection": {
                        "background": "#0565ff",
                        "font": {
                            "color": "#e5ebf8",
                            "fontSettings": {
                                "autoFontSettings": true,
                                "fontSize": "",
                                "fontWeight": "",
                                "fontFamily": "",
                                "fontSrc": ""
                            }
                        }
                    }
                },
                "unavailableDays": {
                    "background": "#2d3546",
                    "font": {
                        "color": "#97a5c5",
                        "fontSettings": {
                            "autoFontSettings": true,
                            "fontSize": "",
                            "fontWeight": "",
                            "fontFamily": "",
                            "fontSrc": ""
                        }
                    }
                },
                "otherMonthDays": {
                    "background": "#2d3546",
                    "font": {
                        "color": "#e1e1e1",
                        "fontSettings": {
                            "autoFontSettings": true,
                            "fontSize": "",
                            "fontWeight": "",
                            "fontFamily": "",
                            "fontSrc": ""
                        }
                    }
                },
                "icon": {
                    "font": {
                        "color": "#c6d0e8",
                        "fontSettings": {
                            "autoFontSettings": true,
                            "fontSize": "",
                            "fontWeight": ""
                        }
                    },
                    "hover": {
                        "background": "",
                        "font": {
                            "color": "",
                            "fontSettings": {
                                "autoFontSettings": true,
                                "fontSize": "",
                                "fontWeight": ""
                            }
                        }
                    }
                },
                "footerBackground": "",
                "cancelButton": {
                    "background": "#485166",
                    "font": {
                        "color": "#e5ebf8",
                        "fontSettings": {
                            "autoFontSettings": true,
                            "fontSize": "",
                            "fontWeight": "",
                            "fontFamily": "",
                            "fontSrc": ""
                        }
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
                            "color": "#e5ebf8",
                            "fontSettings": {
                                "autoFontSettings": true,
                                "fontSize": "",
                                "fontWeight": "",
                                "fontFamily": "",
                                "fontSrc": ""
                            }
                        }
                    }
                },
                "okButton": {
                    "background": "#0565ff",
                    "font": {
                        "color": "#ffffff",
                        "fontSettings": {
                            "autoFontSettings": true,
                            "fontSize": "",
                            "fontWeight": "",
                            "fontFamily": "",
                            "fontSrc": ""
                        }
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
                            "color": "#e5ebf8",
                            "fontSettings": {
                                "autoFontSettings": true,
                                "fontSize": "",
                                "fontWeight": "",
                                "fontFamily": "",
                                "fontSrc": ""
                            }
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
            "widgetHeader": {
                "title": {
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                },
                "subTitle": {
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                }
            },
            "border": "#555961",
            "leftLabel": {
                "color": "#97a5c5",
                "fontSettings": {
                    "autoFontSettings": true,
                    "fontSize": "",
                    "fontWeight": "",
                    "fontFamily": "",
                    "fontSrc": ""
                }
            },
            "leftValue": {
                "color": "#97a5c5",
                "fontSettings": {
                    "autoFontSettings": true,
                    "fontSize": "",
                    "fontWeight": "",
                    "fontFamily": "",
                    "fontSrc": ""
                }
            },
            "rightLabel": {
                "color": "#97a5c5",
                "fontSettings": {
                    "autoFontSettings": true,
                    "fontSize": "",
                    "fontWeight": "",
                    "fontFamily": "",
                    "fontSrc": ""
                }
            },
            "rightValue": {
                "color": "#97a5c5",
                "fontSettings": {
                    "autoFontSettings": true,
                    "fontSize": "",
                    "fontWeight": "",
                    "fontFamily": "",
                    "fontSrc": ""
                }
            },
            "separatorColor": "#97a5c5",
            "sparkLine": {
                "background": "#494d57",
                "opacity": "1"
            },
            "title": {
                "color": "#c6d0e8",
                "fontSettings": {
                    "autoFontSettings": true,
                    "fontSize": "",
                    "fontWeight": "",
                    "fontFamily": "",
                    "fontSrc": ""
                }
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
            "widgetHeader": {
                "title": {
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                },
                "subTitle": {
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                }
            },
            "border": "#555961",
            "rightValue": {
                "color": "#97a5c5",
                "fontSettings": {
                    "autoFontSettings": true,
                    "fontSize": "",
                    "fontWeight": "",
                    "fontFamily": "",
                    "fontSrc": ""
                }
            },
            "sparkLine": {
                "background": "#4cd766",
                "opacity": "0.2"
            },
            "title": {
                "color": "#c6d0e8",
                "fontSettings": {
                    "autoFontSettings": true,
                    "fontSize": "",
                    "fontWeight": "",
                    "fontFamily": "",
                    "fontSrc": ""
                }
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
            "widgetHeader": {
                "title": {
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                },
                "subTitle": {
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                }
            },
            "sliderBackground": "#465168",
            "rangeColor": "#826AF9",
            "handle": {
                "background": "#202635",
                "border": "#826AF9"
            },
            "label": {
                "background": "#212634",
                "font": {
                    "color": "#c6d0e8",
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                }
            }
        }
    }
}

```

###### Range Navigator

**Format:**

```json

{
    "name": "CustomTheme",
    "widgets": {
        "rangeNavigator": {
            "widgetHeader": {
                "title": {
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                },
                "subTitle": {
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                }
            },
            "background": "#212634",
            "border": "#3e4658",
            "selectedRegionColor": "#212634",
            "unselectedRegionColor": "#232a3b",
            "content": {
                "fontSettings": {
                    "autoFontSettings": true,
                    "fontSize": "",
                    "fontWeight": "",
                    "fontFamily": "",
                    "fontSrc": ""
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
            "widgetHeader": {
                "title": {
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                },
                "subTitle": {
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                }
            },
            "background": "#4A2BC6",
            "needlePointerBackground": "#bbbcbb",
            "rangePointerBackground": "#f6727f",
            "scaleBackground": "#bbbcbb",
            "targetPointerBackground": "#9A9A9A",
            "label": {
                "color": "#e2e2e2",
                "fontSettings": {
                    "autoFontSettings": true,
                    "fontSize": "",
                    "fontWeight": "",
                    "fontFamily": "",
                    "fontSrc": ""
                }
            },
            "title": {
                "color": "#e5ebf8",
                "fontSettings": {
                    "autoFontSettings": true,
                    "fontSize": "",
                    "fontWeight": "",
                    "fontFamily": "",
                    "fontSrc": ""
                }
            },
            "value": {
                "color": "#e2e2e2",
                "fontSettings": {
                    "autoFontSettings": true,
                    "fontSize": "",
                    "fontWeight": "",
                    "fontFamily": "",
                    "fontSrc": ""
                }
            }
        }
    }
}

```

###### Radar Polar

**Format:**

```json

{
    "name": "CustomTheme",
    "widgets": {
        "radarPolar": {
            "widgetHeader": {
                "title": {
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                },
                "subTitle": {
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                }
            },
            "axis": {
                "label": {
                    "font": {
                        "color": "#c6d0e8",
                        "fontSettings": {
                            "autoFontSettings": true,
                            "fontSize": "",
                            "fontWeight": "",
                            "fontFamily": "",
                            "fontSrc": ""
                        }
                    }
                },
                "gridLines": {
                    "color": "#465168"
                },
                "tickLines": {
                    "color": "#465168"
                }
            },
            "dataLabel": {
                "font": {
                    "color": "#c6d0e8",
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                }
            },
            "legend": {
                "font": {
                    "color": "#e5ebf8",
                    "fontSettings": {
                        "autoFontSettings": true,
                        "fontSize": "",
                        "fontWeight": "",
                        "fontFamily": "",
                        "fontSrc": ""
                    }
                }
            },
            "markerColor": "#212634"
        }
    }
}

```

###### Combo Chart

**Format:**

```json

{
	"name": "CustomTheme",
	"widgets": {
		"comboChart": {
			"widgetHeader": {
				"title": {
					"fontSettings": {
						"autoFontSettings": true,
						"fontSize": "",
						"fontWeight": "",
						"fontFamily": "",
						"fontSrc": ""
					}
				},
				"subTitle": {
					"fontSettings": {
						"autoFontSettings": true,
						"fontSize": "",
						"fontWeight": "",
						"fontFamily": "",
						"fontSrc": ""
					}
				}
			},
			"axis": {
				"title": {
					"font": {
						"color": "#c6d0e8",
						"fontSettings": {
							"autoFontSettings": true,
							"fontSize": "",
							"fontWeight": "",
							"fontFamily": "",
							"fontSrc": ""
						}
					}
				},
				"gridLines": {
					"color": "#465168"
				},
				"label": {
					"font": {
						"color": "#c6d0e8",
						"fontSettings": {
							"autoFontSettings": true,
							"fontSize": "",
							"fontWeight": "",
							"fontFamily": "",
							"fontSrc": ""
						}
					}
				},
				"tickLines": {
					"color": "#465168"
				}
			},
			"dataLabel": {
				"font": {
					"color": "#c6d0e8",
					"fontSettings": {
						"autoFontSettings": true,
						"fontSize": "",
						"fontWeight": "",
						"fontFamily": "",
						"fontSrc": ""
					}
				}
			},
			"legend": {
				"font": {
					"color": "#e5ebf8",
					"fontSettings": {
						"autoFontSettings": true,
						"fontSize": "",
						"fontWeight": "",
						"fontFamily": "",
						"fontSrc": ""
					}
				}
			},
			"legendTitle": {
				"title": {
					"font": {
						"fontSettings": {
							"autoFontSettings": true,
							"fontSize": "",
							"fontWeight": "",
							"fontFamily": ""
						}
					}
				}
			},
			"markerColor": "#212634"
		}
	}
}

```

###### Period Over Period

**Format:**

```json

{
	"name": "CustomTheme",
	"widgets": {
		"pop": {
			"widgetHeader": {
				"title": {
					"fontSettings": {
						"autoFontSettings": true,
						"fontSize": "",
						"fontWeight": "",
						"fontFamily": "",
						"fontSrc": ""
					}
				},
				"subTitle": {
					"fontSettings": {
						"autoFontSettings": true,
						"fontSize": "",
						"fontWeight": "",
						"fontFamily": "",
						"fontSrc": ""
					}
				}
			},
			"widgetContainer": {
				"dateRangeLabel": {
					"font": {
						"color": "#505D6F",
						"fontSettings": {
							"autoFontSettings": true,
							"fontSize": "",
							"fontWeight": "",
							"fontFamily": "",
							"fontSrc": ""
						}
					}
				},
				"compareRangeLabel": {
					"font": {
						"color": "#505D6F",
						"fontSettings": {
							"autoFontSettings": true,
							"fontSize": "",
							"fontWeight": "",
							"fontFamily": "",
							"fontSrc": ""
						}
					}
				},
				"vsLabel": {
					"font": {
						"color": "#505D6F",
						"fontSettings": {
							"autoFontSettings": true,
							"fontSize": "",
							"fontWeight": "",
							"fontFamily": "",
							"fontSrc": ""
						}
					}
				}
			},
			"dialog": {
				"headerBackground": "#181e2b",
				"dateRange": {
					"relativeHeader": {
						"background": "#333842",
						"label": {
							"font": {
								"color": "#ffffff",
								"fontSettings": {
									"autoFontSettings": true,
									"fontSize": "",
									"fontWeight": "",
									"fontFamily": "",
									"fontSrc": ""
								}
							}
						}
					},
					"relativeLabel": {
						"font": {
							"color": "#e2e2e2",
							"fontSettings": {
								"autoFontSettings": true,
								"fontSize": "",
								"fontWeight": "",
								"fontFamily": "",
								"fontSrc": ""
							}
						}
					},
					"relativeComboBox": {
						"background": "#181e2b",
						"textBox": {
							"font": {
								"color": "#ffffff",
								"fontSettings": {
									"autoFontSettings": true,
									"fontSize": "",
									"fontWeight": "",
									"fontFamily": "",
									"fontSrc": ""
								}
							}
						},
						"popup": {
							"background": "#181e2b",
							"text": {
								"font": {
									"color": "#ffffff",
									"fontSettings": {
										"autoFontSettings": true,
										"fontSize": "",
										"fontWeight": "",
										"fontFamily": "",
										"fontSrc": ""
									}
								}
							}
						}
					},
					"calender": {
						"highlightColor": "#333842",
						"selectionColor": "#0565ff",
						"weekHeader": {
							"font": {
								"color": "#ffffff",
								"fontSettings": {
									"autoFontSettings": true,
									"fontSize": "",
									"fontWeight": "",
									"fontFamily": "",
									"fontSrc": ""
								}
							}
						},
						"content": {
							"hoverColor": "#7B838E",
							"dateText": {
								"font": {
									"color": "#ffffff",
									"fontSettings": {
										"autoFontSettings": true,
										"fontSize": "",
										"fontWeight": "",
										"fontFamily": "",
										"fontSrc": ""
									}
								}
							}
						}
					}
				},
				"compareRange": {
					"relativeHeader": {
						"background": "#333842",
						"label": {
							"font": {
								"color": "#ffffff",
								"fontSettings": {
									"autoFontSettings": true,
									"fontSize": "",
									"fontWeight": "",
									"fontFamily": "",
									"fontSrc": ""
								}
							}
						}
					},
					"relativeLabel": {
						"font": {
							"color": "#e2e2e2",
							"fontSettings": {
								"autoFontSettings": true,
								"fontSize": "",
								"fontWeight": "",
								"fontFamily": "",
								"fontSrc": ""
							}
						}
					},
					"relativeComboBox": {
						"background": "#181e2b",
						"textBox": {
							"font": {
								"color": "#ffffff",
								"fontSettings": {
									"autoFontSettings": true,
									"fontSize": "",
									"fontWeight": "",
									"fontFamily": "",
									"fontSrc": ""
								}
							}
						},
						"popup": {
							"background": "#181e2b",
							"text": {
								"font": {
									"color": "#ffffff",
									"fontSettings": {
										"autoFontSettings": true,
										"fontSize": "",
										"fontWeight": "",
										"fontFamily": "",
										"fontSrc": ""
									}
								}
							}
						}
					},
					"calender": {
						"highlightColor": "#333842",
						"selectionColor": "#36c44e",
						"weekHeader": {
							"font": {
								"color": "#ffffff",
								"fontSettings": {
									"autoFontSettings": true,
									"fontSize": "",
									"fontWeight": "",
									"fontFamily": "",
									"fontSrc": ""
								}
							}
						},
						"content": {
							"hoverColor": "#7B838E",
							"dateText": {
								"font": {
									"color": "#ffffff",
									"fontSettings": {
										"autoFontSettings": true,
										"fontSize": "",
										"fontWeight": "",
										"fontFamily": "",
										"fontSrc": ""
									}
								}
							}
						}
					}
				},
				"vsLabel": {
					"font": {
						"color": "#ffffff",
						"fontSettings": {
							"autoFontSettings": true,
							"fontSize": "",
							"fontWeight": "",
							"fontFamily": "",
							"fontSrc": ""
						}
					}
				},
				"footer": {
					"footerBackground": "#333842",
					"okButton": {
						"background": "#0565ff",
						"hoverColor": "#2e7eff",
						"text": {
							"font": {
								"color": "#ffffff",
								"fontSettings": {
									"autoFontSettings": true,
									"fontSize": "",
									"fontWeight": "",
									"fontFamily": "",
									"fontSrc": ""
								}
							}
						}
					},
					"cancelButton": {
						"background": "#565F6A",
						"hoverColor": "#7B838E",
						"text": {
							"font": {
								"color": "#ffffff",
								"fontSettings": {
									"autoFontSettings": true,
									"fontSize": "",
									"fontWeight": "",
									"fontFamily": "",
									"fontSrc": ""
								}
							}
						}
					}
				}
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
			"color": "#e5ebf8",
			"fontSettings": {
				"autoFontSettings": true,
				"fontSize": "",
				"fontWeight": "",
				"fontFamily": "",
				"fontSrc": ""
			}
		},
		"border": "#a2aec9"
	}
}

```

### Dashboard menu

Allows you to customize the dashboard menu background, foreground and font properties. 

**Format**

```json

{
	"name": "CustomTheme",
	"menu": {
		"background": "#2d3546",
		"font": {
			"color": "#e5ebf8",
			"fontSettings": {
				"autoFontSettings": true,
				"fontSize": "",
				"fontWeight": "",
				"fontFamily": "",
				"fontSrc": ""
			}
		},
		"border": "#505a71",
		"hover": {
			"font": {
				"color": "#e5ebf8",
				"fontSettings": {
					"autoFontSettings": true,
					"fontSize": "",
					"fontWeight": "",
					"fontFamily": "",
					"fontSrc": ""
				}
			},
			"background": "#4a536b"
		}
	}
}

```

### Error alert dialog

Allows you to customize the dashboard error dialog background, foreground and font properties for the header, footer, and the error content.

**Format:**

```json

{
	"name": "CustomTheme",
	"alertDialog": {
		"footerBackground": "#333c4e",
		"content": {
			"background": "#2d3546",
			"font": {
				"color": "#c6d0e8",
				"fontSettings": {
					"autoFontSettings": true,
					"fontSize": "",
					"fontWeight": "",
					"fontFamily": "",
					"fontSrc": ""
				}
			}
		},
		"error": {
			"background": "#313a50",
			"font": {
				"color": "#e5ebf8",
				"fontSettings": {
					"autoFontSettings": true,
					"fontSize": "",
					"fontWeight": "",
					"fontFamily": "",
					"fontSrc": ""
				}
			}
		},
		"header": {
			"background": "#333c4e",
			"font": {
				"color": "#e5ebf8",
				"fontSettings": {
					"autoFontSettings": true,
					"fontSize": "",
					"fontWeight": "",
					"fontFamily": "",
					"fontSrc": ""
				}
			}
		},
		"copyButton": {
			"background": "#485166",
			"font": {
				"color": "#e5ebf8",
				"fontSettings": {
					"autoFontSettings": true,
					"fontSize": "",
					"fontWeight": "",
					"fontFamily": "",
					"fontSrc": ""
				}
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
					"color": "#e5ebf8",
					"fontSettings": {
						"autoFontSettings": true,
						"fontSize": "",
						"fontWeight": "",
						"fontFamily": "",
						"fontSrc": ""
					}
				}
			}
		},
		"okButton": {
			"background": "#0565ff",
			"font": {
				"color": "#ffffff",
				"fontSettings": {
					"autoFontSettings": true,
					"fontSize": "",
					"fontWeight": "",
					"fontFamily": "",
					"fontSrc": ""
				}
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
					"color": "#e5ebf8",
					"fontSettings": {
						"autoFontSettings": true,
						"fontSize": "",
						"fontWeight": "",
						"fontFamily": "",
						"fontSrc": ""
					}
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
			"color": "#e5ebf8",
			"title": {
				"fontSettings": {
					"autoFontSettings": true,
					"fontSize": "",
					"fontWeight": "",
					"fontFamily": "",
					"fontSrc": ""
				}
			},
			"content": {
				"widgetTitle": {
					"fontSettings": {
						"autoFontSettings": true,
						"fontSize": "",
						"fontWeight": "",
						"fontFamily": "",
						"fontSrc": ""
					}
				},
				"columnName": {
					"fontSettings": {
						"autoFontSettings": true,
						"fontSize": "",
						"fontWeight": "",
						"fontFamily": "",
						"fontSrc": ""
					}
				},
				"values": {
					"fontSettings": {
						"autoFontSettings": true,
						"fontSize": "",
						"fontWeight": "",
						"fontFamily": "",
						"fontSrc": ""
					}
				}
			}
		},
		"icon": {
			"font": {
				"color": "#aab7d4",
				"fontSettings": {
					"autoFontSettings": true,
					"fontSize": "",
					"fontWeight": ""
				}
			},
			"hover": {
				"background": "#4a536b",
				"font": {
					"color": "#e5ebf8",
					"fontSettings": {
						"autoFontSettings": true,
						"fontSize": "",
						"fontWeight": ""
					}
				}
			}
		}
	}
}

```