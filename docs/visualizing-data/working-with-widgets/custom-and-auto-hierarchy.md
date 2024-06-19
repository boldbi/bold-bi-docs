---
layout: post
title: Setup Custom & Auto Hierarchy in Dashboard Widget | Bold BI Docs
description: Learn how to configure Custom & Auto Hierarchy that helps add multiple column fields into a single field for the user's visual needs using the Bold BI application.
platform: bold-bi
documentation: ug
---

# Custom and Auto Hierarchy in Dashboard Widget

Hierarchy allows you to add multiple fields into a single group. It helps to view a group of data fields that is bound in widgets in a single dragging. Hierarchy can be created through following ways:

1. Auto Hierarchy.
2. Custom Hierarchy.

> **NOTE:**  Custom and Auto hierarchy can be created from dimension field and applicable for grid widget alone.

## Auto Hierarchy

Auto hierarchy generates a hierarchy for all `Date` fields automatically along with its supported date formats.

For example, if the data source contains a date field, it generates one hierarchy field automatically in dimension section which contains default four child fields named as `Year, Quarter, Month, Day`.

![Create Auto Hierarchy](/bold-bi-docs/static/assets/embedded/visualizing-data/working-with-widgets/images/auto-hierarchy.png#max-width=55%)

You can drag and drop `auto hierarchy` into the `column` container and configure with `grid widget` as shown in following image.

![Bind Auto Hierarchy](/bold-bi-docs/static/assets/embedded/visualizing-data/working-with-widgets/images/bind-auto-hierarchy.png#max-width=95%)

> **NOTE:**  Auto hierarchy can be generated for Date field only.

## Custom Hierarchy

Custom Hierarchy helps to create own hierarchy field from `Dimensions` section. You can create a new hierarchy field with needed child fields. It is easy to view group of data and bind with widget by using single field.

### How to configure custom hierarchy

Custom hierarchy can be configured by following ways:
1. Create new custom hierarchy.
2. Add to hierarchy.

#### Create new custom hierarchy

`Create New Hierarchy` option helps to create a new hierarchy field for which field you want to create in `Dimension` section.

Follow the steps to create new hierarchy in `Dimension` section

1. When hover the dimension field, it shows `action` icon at the right end of the field.
2. By clicking `action` icon, menu popup will open as follows.

    ![Create Custom Hierarchy](/bold-bi-docs/static/assets/embedded/visualizing-data/working-with-widgets/images/create-custom-hierarchy.png#max-width=55%)

3. Select `Create New Hierarchy` option, custom hierarchy created for the selected field.

    For example, if creates a new hierarchy for `Address` field, a new custom hierarchy `Address hierarchy` created as `parent field` and `Address` created as child field.

    ![Created Custom Hierarchy](/bold-bi-docs/static/assets/embedded/visualizing-data/working-with-widgets/images/created-custom-hierarchy.png#max-width=55%)

#### Add to hierarchy

Add another field to the existing hierarchy is achieved through `Add to Hierarchy`.

Follow the steps to add any other field to the existing hierarchy.

1. When hover any other field, it shows `action` icon at the right end of the field.
2. By clicking `action` icon, menu popup will open along with `Add to Hierarchy` option.
3. When hover `Add to Hierarchy` option, it will be list all the created custom hierarchy fields as follows.

    ![Created Custom Hierarchy](/bold-bi-docs/static/assets/embedded/visualizing-data/working-with-widgets/images/add-custom-hierarchy.png#max-width=55%)

4. Select any one hierarchy in the listed custom hierarchy to add child field in it.
5. After child field added to existing hierarchy, the result as shown in the following image.

    ![Created Custom Hierarchy](/bold-bi-docs/static/assets/embedded/visualizing-data/working-with-widgets/images/Created-add-custom-hierarchy.png#max-width=55%)

6. You can drag and drop `custom hierarchy` into the `column` container and configure with `grid widget` as shown in following image.

    ![Bind Custom Hierarchy](/bold-bi-docs/static/assets/embedded/visualizing-data/working-with-widgets/images/bind-custom-hierarchy.png#max-width=95%)

### How to format custom hierarchy

**Rearrange child fields**

Rearrange child fields helps to change the order of child fields by dragging the field back and forth.

For example, drag the field `City` and drop above the field `Country`.

![Custom Hierarchy Rearrange](/bold-bi-docs/static/assets/embedded/visualizing-data/working-with-widgets/images/custom-hierarchy-rearrange.png#max-width=55%)

**Rename parent field**

This property allows you to edit a custom hierarchy parent field by using `Rename` option from the action icon list.

![Custom Hierarchy Rename](/bold-bi-docs/static/assets/embedded/visualizing-data/working-with-widgets/images/rename-custom-hierarchy.png#max-width=55%)

**Remove parent field**

This property allows you to remove all fields within custom hierarchy along with parent field. It should be done through `Remove` option from action icon list.

![Custom Hierarchy Remove Parent](/bold-bi-docs/static/assets/embedded/visualizing-data/working-with-widgets/images/remove-custom-hierarchy-parent.png#max-width=55%)

**Remove Child field**

This property allows you to remove a single child field by clicking `close icon` at the right end of the field.

![Custom Hierarchy Remove Child](/bold-bi-docs/static/assets/embedded/visualizing-data/working-with-widgets/images/remove-custom-hierarchy-child.png#max-width=55%)
