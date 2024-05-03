---
layout: post
title: Setup Custom & Auto Hierarchy in Dashboard Widget | Bold BI Docs
description: Learn how to configure Custom & Auto Hierarchy that helps add multiple column fields into a single field for the user's visual needs using the Bold BI application.
platform: bold-bi
documentation: ug
---

# Custom and Auto Hierarchy in Dashboard Widget

Hierarchy allows you to add multiple fields into a single group, making it easier to view a group of data fields that are bound in widgets with a single drag. Hierarchy can be created in the following ways:

1. Auto Hierarchy.
2. Custom Hierarchy.

> **NOTE:**  Custom and Auto hierarchy can be created from dimension fields and are applicable for grid widgets alone.

## Auto Hierarchy

Auto hierarchy generates a hierarchy for all `Date` fields automatically, along with its supported date formats.

For example, if the data source contains a date field, it generates one hierarchy field automatically in the dimension section, which contains default four child fields named `Year, Quarter, Month, Day`.

![Create Auto Hierarchy](/static/assets/visualizing-data/working-with-widgets/images/auto-hierarchy.png#max-width=55%)

You can drag and drop `auto hierarchy` into the `column` container and configure it with a `grid widget`, as shown in the following image.

![Bind Auto Hierarchy](/static/assets/visualizing-data/working-with-widgets/images/bind-auto-hierarchy.png#max-width=95%)

> **NOTE:**  Auto hierarchy can be generated for Date fields only.

## Custom Hierarchy

Custom Hierarchy helps to create your own hierarchy field from the `Dimensions` section. You can create a new hierarchy field with the needed child fields, making it easy to view groups of data and bind with widgets using a single field.

### How to configure custom hierarchy

Custom hierarchy can be configured by following ways:
1. Create new custom hierarchy.
2. Add to hierarchy.

#### Create new custom hierarchy

The `Create New Hierarchy` option helps to create a new hierarchy field for the field you want to create in the `Dimension` section. 

Follow these steps to create a new hierarchy in the `Dimension` section:

1. When hovering over the dimension field, an `action` icon will appear at the right end of the field.
2. By clicking the `action` icon, a menu popup will open as follows.

    ![Create Custom Hierarchy](/static/assets/visualizing-data/working-with-widgets/images/create-custom-hierarchy.png#max-width=55%)

3. Select the `Create New Hierarchy` option, and a custom hierarchy will be created for the selected field.

    For example, if you create a new hierarchy for the `Address` field, a new custom hierarchy called `Address hierarchy` will be created as the `parent field`, with `Address` as the child field.

    ![Created Custom Hierarchy](/static/assets/visualizing-data/working-with-widgets/images/created-custom-hierarchy.png#max-width=55%)

#### Add to hierarchy

Adding another field to an existing hierarchy is achieved through the `Add to Hierarchy` option.

Follow these steps to add any other field to an existing hierarchy:

1. When hovering over any other field, an `action` icon will appear at the right end of the field.
2. By clicking the `action` icon, a menu popup will open along with the `Add to Hierarchy` option.
3. Hover over the `Add to Hierarchy` option to see a list of all the created custom hierarchy fields.

    ![Created Custom Hierarchy](/static/assets/visualizing-data/working-with-widgets/images/add-custom-hierarchy.png#max-width=55%)

4. Select any one hierarchy in the listed custom hierarchy to add a child field to it.
5. After the child field is added to the existing hierarchy, the result will be shown in the following image.

    ![Created Custom Hierarchy](/static/assets/visualizing-data/working-with-widgets/images/Created-add-custom-hierarchy.png#max-width=55%)

6. You can drag and drop c`ustom hierarchy` into the `column` container and configure it with a `grid widget`, as shown in the following image.

    ![Bind Custom Hierarchy](/static/assets/visualizing-data/working-with-widgets/images/bind-custom-hierarchy.png#max-width=95%)

### How to format custom hierarchy

**Rearrange child fields**

Rearranging child fields helps to change the order of child fields by dragging the fields back and forth.

For example, you can drag the `City` field and drop it above the `Country` field.

![Custom Hierarchy Rearrange](/static/assets/visualizing-data/working-with-widgets/images/custom-hierarchy-rearrange.png#max-width=55%)

**Rename parent field**

This feature allows you to edit a custom hierarchy parent field by using the `Rename` option from the action icon list.

![Custom Hierarchy Rename](/static/assets/visualizing-data/working-with-widgets/images/rename-custom-hierarchy.png#max-width=55%)

**Remove parent field**

This feature allows you to remove all fields within a custom hierarchy, including the parent field. This action should be completed through the `Remove` option in the action icon list.

![Custom Hierarchy Remove Parent](/static/assets/visualizing-data/working-with-widgets/images/remove-custom-hierarchy-parent.png#max-width=55%)

**Remove Child field**

This feature allows you to remove a single child field by clicking the `close icon` at the right end of the field.

![Custom Hierarchy Remove Child](/static/assets/visualizing-data/working-with-widgets/images/remove-custom-hierarchy-child.png#max-width=55%)
