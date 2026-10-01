---
layout: post
title: Table Visual - BI Widget (Grid) | Bold BI Documentation
description: Learn how to configure data, columns, formatting, filters, summary rows, and interactions for the modern Grid widget in Bold BI dashboards.
canonical: "/visualizing-data/visualization-v2-widgets/relationship/grid/"
platform: bold-bi
control: Grid
documentation: ug
---

# Grid

The Grid presents data in rows and columns. Use it when viewers need detailed values, sorting, paging, summaries, or conditional formatting.

![Grid widget](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid.png)

## Configuring Data

| Data section | Requirement | Description |
|---|---|---|
| **Column** | Required | Measures and dimensions displayed as grid columns. |
| **Hidden Column** | Optional | Fields used for sorting, filtering, linking, or formatting without displaying them. |
| **Filters** | Optional | Fields used to restrict grid records. |

### Assigning Data

1. Add the **Grid** to the design canvas and open **ASSIGN DATA**.

   ![Adding the Grid widget](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-adding-grid.png)

2. Click **Assign Data** to open the data pane.

   ![Data pane](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-data-pane.png)

3. Click the **+** icon or drag fields into the **Column** section.

   ![Assign Data click](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-assign-data-click.png)

4. Add the required measures or dimensions to **Column**.

   ![Column section](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-column-section.png)

5. Optionally add fields to **Hidden Column** to use them for sorting, filtering, or formatting without displaying them.

   ![Hidden column](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-hidden-column.png)

6. The configured widget is ready for formatting.

   ![Configured widget](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-configured-widgets.png)

### Field Settings

Open a column's settings menu to rename it or configure supported aggregation, sorting, filtering, relative dates, and value formatting.

![Settings click](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-settings-click.png)

Use the **Rename** option to give the column a custom display name.

![Rename menu](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-rename-menu.png)

Select the **Aggregation type** to change how the column values are summarized.

![Aggregation type](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-aggregation-type.png)

See [Configuring Data](/visualizing-data/visualization-v2-widgets/properties/data-configuration/).

## Formatting the Grid

Open the properties panel by clicking the **Settings** icon on the widget.

![Designer properties button](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-designerpropertiesbutton.png)

### General Settings

Refer to [General Settings](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#general-settings) for information about configuring the widget type, unique name, title, subtitle, and description shown for the widget.

### Basic Settings

![Basic settings](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-basicsetting.png)

#### Show Tooltip

Displays the full cell value when a viewer points to it.

![Tooltip](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-tooltip.png)

#### Allow Sorting

Lets viewers sort columns.

![Allow sorting](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-allow-sorting.png)

#### Allow Resizing

Lets viewers resize columns.

![Resizing](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-resizing.png)

#### Allow Resize To Fit

Automatically sizes columns according to their content.

#### Horizontal Grid Lines

Shows or hides the horizontal separator lines between rows.

#### Vertical Grid Lines

Shows or hides the vertical separator lines between columns.

#### Show Border

Shows or hides the outer border around the grid.

#### Enable Alternative Row

Applies alternating row colors.

![Alternative row color](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-alternativerowcolor.png)

#### Enable Multi Row Select

Allows viewers to select more than one row.

#### Enable Column Chooser

Lets viewers show or hide columns at runtime.

![Column chooser property](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-column-chooser-property.png)

![Column chooser](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-column-chooser.png)

**Allow Column Reorder** lets viewers drag columns into a different order.

![Column reorder property](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-reorder-property.png)

![Column reorder](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-reorder.png)

### Frozen Settings

#### Enable Frozen

Keeps configured rows and columns visible while viewers scroll.

![Frozen property](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-frozen-property.png)

![Frozen enabled](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-frozen-enabled.png)

#### Frozen Columns

Sets the number of fixed columns from `0` through `5`.

#### Frozen Rows

Sets the number of fixed rows from `0` through `5`.

### Summary Row

#### Enable Summary Row

Displays aggregate information below the grid.

![Summary row](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-summary-row.png)

#### Background

Sets the summary-row background color.

#### Auto Height

Automatically sizes the summary row. Disable it to set **Height**, whose minimum is `10` pixels.

![Summary row height](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-summaryrow_height.png)

#### Auto Padding

Automatically determines spacing. Disable it to set **Padding**, whose minimum is `0`.

![Summary row padding](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-summaryrow_padding.png)

#### Auto Font Size

Automatically calculates and adjusts the summary-row font size based on the available space.

#### Font Size

Lets you manually set the summary-row font size from `1` through `60` pixels when **Auto Font Size** is disabled.

![Summary row font size](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-summaryrow_fontsize.png)

#### Summary Type

Select the aggregation type to display in each summary cell.

![Summary type](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-summary-type.png)

#### Customize

Opens the summary editor for selecting columns, aggregate types, labels, and formats.

![Summary row add](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-summary-rowadd.png)

![Summary row format](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-summary-rowformat.png)

![Summary row window](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-summary-rowwindow.png)

![Summary row apply](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-summary-rowapply.png)

![Summary row customize](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-summary-rowcustomize.png)

![Summary row Customize dialog](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-summary-row-Customize.png)

### Column Settings

#### Column Customize

Opens the editor for configuring the display, width, alignment, and data-type-specific behavior of individual columns.

#### KPI Columns

Configures KPI presentation for eligible grid columns.

### Page Settings

#### Allow Paging

Enables page navigation.

![Allow paging](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-allowpaging.png)

![Page settings](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-page-settings.png)

#### Disable Virtualization

Loads a conventional page of records instead of using virtual scrolling. It is available when paging is enabled.

#### Page Size

Sets the number of rows displayed on each page and accepts values of `1` or greater.

### Header Settings

![Header settings](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-headersettings.png)

#### Show Header

Controls header visibility.

![Header](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-header.png)

#### Allow Text Wrap

Wraps long column names.

![Header allow text wrap option](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-header-allow-text-wrap-option.png)

![Header wrapped text](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-header-wrapped-text.png)

#### Header Foreground

And **Header Background** set the header text and fill colors.

#### Row Height

Sets header height from `15` through `120` pixels and is disabled when text wrapping controls the height.

#### Auto Font Size

Automatically calculates and adjusts the header font size based on the available space.

#### Font Size

Lets you manually set the header font size from `1` through `60` pixels when **Auto Font Size** is disabled.

![Font size](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-font-size.png)

#### Padding

Sets the spacing inside header cells from `1` through `20` pixels.

![Grid padding change](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-padding-change.png)

![Grid padding value](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-padding-change-value.png)

### Content Settings

![Content settings](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-contentsetting.png)

#### Allow Text Wrap

Wraps long cell values.

![Content allow text wrap option](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-content-allow-text-wrap-option.png)

![Content wrapped text](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-content-wrapped-text.png)

#### Value Foreground

And **Value Background** set the standard cell text and fill colors.

#### Alternative Row Foreground

And **Alternative Row Background** set the colors used for alternating rows.

#### Row Height

Sets content-row height from `15` through `120` pixels and is disabled when text wrapping controls the height.

#### Auto Font Size

Automatically calculates and adjusts the cell font size based on the available space.

#### Font Size

Lets you manually set the cell font size from `1` through `60` pixels when **Auto Font Size** is disabled.

#### Padding

Sets the spacing inside data cells from `1` through `20` pixels.

After applying content customization, the grid reflects your changes.

![Content customized](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-contentcustomized.png)

![Content change applied](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-content-change.png)

### Font Settings

Refer to [Font Settings](/visualizing-data/visualization-v2-widgets/properties/font-settings/) for grid font properties.

### Formatting

Select a column under **Value**, then choose a representation type.

![Formatting radio field](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-formattingradiofield.png)

The available display representations are:

- **Value** — displays the raw numeric or text value
- **Data List** — shows values in a list format

  ![Formatting data list](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-formattingdatalist.png)

- **Data Bar** — renders a proportional bar inside the cell

  ![Formatting data bar](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-formattingdatabar.png)

  - **Bar** — configures data bar fill color

    ![Bar](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-bar.png)

  - **Bar Shape** — selects the bar style (rectangular, rounded, etc.)

    ![Bar shape](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-barshape.png)

- **Icons** — displays a configurable icon for each value

  ![Icons](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-icons.png)

- **Background** — applies a fill color to the cell based on the value

  ![Background](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-background.png)

#### Value Representation

Configure how the value is presented alongside the chosen representation.

![Value representation](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-value-representation.png)

#### Value Type

Determines whether the condition applies to the actual value or a percentage.

![Value type](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-value-type.png)

#### Measure Format

Applies a number format to the column values.

![Measure format](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-measure-format.png)

![Applied measure formatting](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-applied-measure-formatting.png)

#### Advanced Settings

Use **Advanced Settings** for gradient or rule-based colors.

![Enable advanced settings](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-enable-advanced-settings.png)

![Advanced settings panel](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-advanced-settings.png)

![Advanced settings customization](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-advancesettings-customization.png)

Configure rule-based conditions to apply different formatting to ranges of values.

![Condition name](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-condition-name.png)

![Condition value](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-condition-value.png)

![Condition values](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-condition-values.png)

Select the field to base conditions on and set case sensitivity for text comparisons.

![Based on field](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-based-on-field.png)

![Case sensitivity](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-case-sensitivity.png)

For text columns, use text-based conditions.

![Text conditions](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-text-conditions.png)

For numeric columns, use numeric conditions.

![Numeric condition](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-numeric-condition.png)

After applying formatting, the grid reflects the result.

![Formatted result](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-formatted-result.png)

Refer to [Conditional Formatting](/visualizing-data/visualization-v2-widgets/properties/conditional-formatting/) for details about the supported formatting modes.

### Filter

Configure filter behavior for the Grid.

![Filter settings](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-filter-settings.png)

![Filter option](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-filter-option.png)

![Allow filter types](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-allow-filter-types.png)

#### Allow Filtering

Enables column-level filtering in the Grid.

#### Filter Type

Determines how filter controls are shown in the Grid. The available filter types are **Bar**, **Menu**, and **Excel**.

#### Bar

Displays a filter input below each column header so viewers can type a filter value directly.

#### Menu

Displays a filter icon in the column header and lets viewers choose filter conditions from a menu.

#### Excel

Displays a filter icon in the column header and lets viewers filter using a list of available values.

Refer to [Filter Settings](/visualizing-data/visualization-v2-widgets/properties/filter-settings/) for master-widget behavior, ignore-filter behavior, and hierarchical filtering.

### Link

Configure row or cell navigation.

![Linking](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-linking.png)

Refer to [Linking](/visualizing-data/visualization-v2-widgets/properties/linking/) for row or cell navigation.

### Container Appearance

Configure widget-container styling, including background color and padding.

![Container appearance](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-container-appearance.png)

Refer to [Container Appearance](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#container-appearance) for widget-container styling.

### Container Actions

Configure viewer actions such as maximizing, exporting, and interacting with the widget.

![Container actions](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-container-actions.png)

Refer to [Container Actions](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#container-actions) for viewer actions.

### No Data Appearance

Refer to [No Data Appearance](/visualizing-data/working-with-widgets/customizing-container-appearance/#widgets-no-data-appearance-properties) for empty-state settings.

### Export Settings

Refer to [Export Options](/visualizing-data/visualization-v2-widgets/properties/export-options/) for export settings.

### View Underlying Data

Refer to [View Underlying Data](/visualizing-data/working-with-widgets/view-data/) for access to grid records.



