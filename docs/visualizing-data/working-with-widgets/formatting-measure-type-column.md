---
layout: post
title: Measure Formatting – Embedded BI | Bold BI Learning
description: Learn how to apply formatting such as decimal places, number type, etc. to the numeric column in Bold BI Embedded dashboard.
canonical: "/visualizing-data/working-with-widgets/formatting-measure-type-column/"
platform: bold-bi
documentation: ug

---

# Formatting Measure Type Column

The values in the Measure Type column can be formatted based on various options available:

**Type**

The display type of the measure column value can be determined by the type of data being displayed. For example, if you are displaying the sales amount column, then the type can be defined as `Currency`.

![Type](/static/assets/visualizing-data/working-with-widgets/images/formattingmeasuretypecolumn_type.PNG)

**Representation**

The format of the displayed value can be defined by the representation. For instance, by selecting thousands, the value 10,000 will be shown as 10K.

![Representation](/static/assets/visualizing-data/working-with-widgets/images/formattingmeasuretypecolumn_representation.PNG)

**Lakhs and Crores support**

Cultures from countries such as India, Pakistan, Bangladesh, and Nepal offer support for Lakhs and Crores. For example, the value of 1,00,000 is displayed as 1L.

![Lakhs Selection](/static/assets/visualizing-data/working-with-widgets/images/lakhs-selection.png#max-width=50%)

![Lakhs in widget](/static/assets/visualizing-data/working-with-widgets/images/lakhs-reflected-in-grid.png#max-width=50%)

When the support culture is selected, there will be a checkbox that needs to be enabled to utilize lakhs and crores along with auto representation. This helps in managing existing values.

![Auto represenation checkbox](/static/assets/visualizing-data/working-with-widgets/images/lakhsandcrores-auto-representation.png#max-width=50%)

![Auto enable Lakhs and Crores](/static/assets/visualizing-data/working-with-widgets/images/auto-enable-lakhsandcrores.png#max-width=50%)


**Decimal places**

You have the option to set the decimal places explicitly when the representation is set with options other than `Auto`.

![Decimal](/static/assets/visualizing-data/working-with-widgets/images/formattingmeasuretypecolumn_decimal.PNG)

**Currency culture**

You can specify the currency value culture when the value display type is set as `Currency`.

![Currency](/static/assets/visualizing-data/working-with-widgets/images/formattingmeasuretypecolumn_currency.PNG)

**Append text**

You can add text, characters, numbers, or symbols either at the start or end of the values.

![Append text](/static/assets/visualizing-data/working-with-widgets/images/formattingmeasuretypecolumn_appendtext.PNG)

**Preview**

This field shows a preview of the display value in the `Measure Formatting` dialog based on the settings chosen.

![Preview](/static/assets/visualizing-data/working-with-widgets/images/formattingmeasuretypecolumn_preview.PNG)







