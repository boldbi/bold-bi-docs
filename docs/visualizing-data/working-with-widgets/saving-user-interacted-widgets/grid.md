---
layout: post
title: Grid Interacted Actions in Visuals – Embedded BI | Bold BI Docs
description: Learn about applicable options and how to save the Grid widget interaction to views through Bold BI Embedded dashboard
canonical: "/visualizing-data/working-with-widgets/saving-user-interacted-widgets/grid/"
platform: bold-bi
documentation: ug

---

# Configuring Interaction For Grid Widget

The following options allow the widget state to be preserved after the dashboard page is reloaded.
1. Allow Column Reorder
2. Enable Column Chooser

## Allow Column Reorder

You can configure the `Allow Column Reorder` option through the widget properties. For detailed instructions, refer to this [link](/visualizing-data/visualization-widgets/grid/#allow-column-reorder).

### Steps to save the reordered columns to views

1. Reorder the columns as desired on the widget.

![Reordered Columns](/static/assets/visualizing-data/working-with-widgets/images/saving-interaction-widgets-data/after-reorder.png)

2. The changes will be indicated as `Column reorder applied` beneath the widget name in the `Filter Overview` panel, located under the `Interaction Widgets` section.

3. Click the Save icon, enter a name for the dashboard view in the `Save View` popup, and then save the view.

![Save Reorder](/static/assets/visualizing-data/working-with-widgets/images/saving-interaction-widgets-data/save-reorder.png)

![Save Views](/static/assets/visualizing-data/working-with-widgets/images/saving-interaction-widgets-data/view.png)

4. After reloading the dashboard, the reordered columns will be retained.

![Reordered Dashboard](/static/assets/visualizing-data/working-with-widgets/images/saving-interaction-widgets-data/reorder-dashboard.png)

## Enable Column Chooser

You can configure the `Enable Column Chooser` option through the widget properties. For detailed instructions, refer to this [link](/visualizing-data/visualization-widgets/grid/#enable-column-chooser).

### Steps to save the unselected columns to Views 

1. Use the Column Chooser to modify column visibility.

![Columns Selection](/static/assets/visualizing-data/working-with-widgets/images/saving-interaction-widgets-data/column-chooser.png)

2. The changes will be indicated as `Column exclusion applied` beneath the widget name in the `Filter Overview` panel, located under the `Interaction Widgets` section.

3. Click the Save icon, enter a name for the dashboard view in the `Save View` popup, and then save the view.

![Save Columns](/static/assets/visualizing-data/working-with-widgets/images/saving-interaction-widgets-data/column-chooser-fields.png)

![Save Views](/static/assets/visualizing-data/working-with-widgets/images/saving-interaction-widgets-data/view.png)

4. After reloading the dashboard, the column visibility settings will be retained.

![Retained Columns](/static/assets/visualizing-data/working-with-widgets/images/saving-interaction-widgets-data/column-selection.png)