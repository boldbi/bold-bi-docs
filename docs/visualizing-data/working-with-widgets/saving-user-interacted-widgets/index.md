---
layout: post
title: Widget Interacted Actions in Visuals – Embedded BI | Bold BI Docs
description: Learn about applicable options and how to save the user widget interaction to views through Bold BI Embedded dashboard
canonical: "/visualizing-data/working-with-widgets/saving-user-interacted-widgets/"
platform: bold-bi
documentation: ug

---

# Saving User Interacted Widgets to Views

Allows users to save widget customizations such as column order, visibility, and filters as named views that persist even after the dashboard is reloaded.

### Applied Filters

Filters configured within the dashboard are summarized in the `Filter Overview` panel under the `Applied Filters` section.

![Applied Filters](/static/assets/visualizing-data/working-with-widgets/images/saving-interaction-widgets-data/applied-filters.png)

### Interaction Widgets

User interactions within widgets are captured and displayed in the `Filter Overview` panel under the `Interaction Widgets` section.

![Interaction Widgets](/static/assets/visualizing-data/working-with-widgets/images/saving-interaction-widgets-data/interaction-widgets.png)

### Both Filter Types Applied

When both `Applied Filters` and `Interaction Widgets` are active, a dropdown menu appears in the panel, allowing users to toggle between the respective sections.

![Both Filters](/static/assets/visualizing-data/working-with-widgets/images/saving-interaction-widgets-data/applied-and-interaction-widgets.png)

>**Note:**
>1. If both `Applied Filters` and `Interaction Widgets` are applied, saving the view will preserve both settings as part of the saved view.
>2. Currently, `Interaction Widgets` are supported only for the [Grid](/visualizing-data/working-with-widgets/saving-user-interacted-widgets/grid/) widget.

