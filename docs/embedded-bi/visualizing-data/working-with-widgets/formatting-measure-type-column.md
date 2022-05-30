---
layout: post
title: Measure Formatting – Embedded BI | Bold BI Learning
description: Learn how to apply formatting such as decimal places, number type, etc. to the numeric column in Bold BI Embedded dashboard.
canonical: "/cloud-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/"
platform: bold-bi
documentation: ug
---

# Formatting Measure Type Column

Measure type column values can be formatted based on the following different options:

**Type**

The value display type of measure column can be defined based on the displayed data. For example, if you display the sales amount column, then the type can be defined as `Currency`.

![Type](/static/assets/embedded/visualizing-data/working-with-widgets/images/formattingmeasuretypecolumn_type.PNG)

**Representation**

The value display format can be defined by the representation. For example, by selecting thousands, the value 10,000 will be displayed as 10K.

![Representation](/static/assets/embedded/visualizing-data/working-with-widgets/images/formattingmeasuretypecolumn_representation.PNG)

**Lakhs and Crores support**

Cultures from countries including India, Pakistan, Bangladesh, and Nepal have Lakhs and Crores support. For example, the value of 1,00,000 is displayed as 1L.

![Lakhs Selection](/static/assets/embedded/visualizing-data/working-with-widgets/images/lakhs-selection.png#max-width=50%)

![Lakhs in widget](/static/assets/embedded/visualizing-data/working-with-widgets/images/lakhs-reflected-in-grid.png#max-width=50%)

When support culture is selected, there will be a checkbox that is needed to enable lakhs and crores along with auto representation. This helps in handling existing value.

![Auto represenation checkbox](/static/assets/embedded/visualizing-data/working-with-widgets/images/lakhsandcrores-auto-representation.png#max-width=50%)

![Auto enable Lakhs and Crores](/static/assets/embedded/visualizing-data/working-with-widgets/images/auto-enable-lakhsandcrores.png#max-width=50%)

**Decimal places**

You can set the decimal places explicitly when the representation is set with options other than `Auto`.

![Decimal](/static/assets/embedded/visualizing-data/working-with-widgets/images/formattingmeasuretypecolumn_decimal.PNG)

**Currency culture**

You can set the currency value culture when the value display type is set as `Currency`.

![Currency](/static/assets/embedded/visualizing-data/working-with-widgets/images/formattingmeasuretypecolumn_currency.PNG)

**Append text**

You can append text, character, number, or symbol either at start or at the end of the values.

![Append text](/static/assets/embedded/visualizing-data/working-with-widgets/images/formattingmeasuretypecolumn_appendtext.PNG)

**Preview**

This field provides the preview of display value in the `Measure Formatting` dialog based on the settings.

![Preview](/static/assets/embedded/visualizing-data/working-with-widgets/images/formattingmeasuretypecolumn_preview.PNG)







