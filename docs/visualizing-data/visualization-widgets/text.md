---
layout: post
title: Text (Rich Text Editor) Visual – Embedded BI | Bold BI Docs
description: Learn how to utilize a Text (Rich Text Editor) visual in Bold BI Embedded dashboard, configure, formatting text and other settings.
canonical: "/cloud-bi/visualizing-data/visualization-widgets/text/"
platform: bold-bi
control: Text (Rich Text Editor)
documentation: ug
---

# Text (Rich Text Editor)

Text editor allows you to edit and visualize the content of the formatted texts, tables, hyperlinks, and source code.

![text_overview](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/text/text-overview.png)

## How to configure text editor ?

Drag and drop the `Text` control icon from the toolbox to the design panel. You can find control by searching in the toolbox.

![text_dragDrop](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/text/text-dragdrop.png)

 Click the `Properties` button in the configuration panel property pane opens. 

![Designer properties](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

![properties](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/text/propertiesbutton.png)

### Container Appearance

### Show Background Image

This option allows you to enable the image for the background.

![Background Image](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/text/background-image.png)

### Image Type

This option allows you to handle the type of the image.

### Local

You can browse the image from your `local` system.

![Background Image Local](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/text/textimage-local.png)

### URL

You can give the `URL` of the image which must be a valid URL.

Ex: http://flagpedia.net/data/flags/normal/in.png

![Background Image URL](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/text/textimage-url.png)

### Image Fit

You can customize the image showcase style through the `Image Fit` settings in the Design Tools pane or properties pane.

#### Default

The image will be displayed in its original size.
![Background Image Default](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/text/textimage-url.png)

### Fill

The image will be filled in the available space.

![Background Image Fill](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/text/textimage-fit.png)

#### Uniform to Fill

The image will be uniformly occupying the space but gets clipped if it is larger than control.

![Background Image UniformtoFill](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/text/textimage-uniformtofill.png)

#### Uniform 

The image sizes proportionally (without clipping) to best fit to the widget area.

![Background Image Uniform](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/text/textimage-uniform.png)

#### Background color

You can customize the color of the background by enabling the `background color.` Only when the `Background image` is not enabled.

![Background color](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/text/background-color.png)

#### Transparency

This property allows you to specify the **transparency** for the `background color.`

![Background Transparency](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/text/background-transparency.png)

By default, the text editor in the `read-only` mode, click the `edit` icon to interact with the widget.

![text-editIcon](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/text/text-editicon.png)

Click the `tick` icon to save the `Text.`

![text-tickIcon](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/text/text-tickicon.png)

`Text` editor property panel is disabled by default because it does not have any items in the property panel. It contains all properties in the toolbar.

### Toolbar Classification

Toolbar contains the property which used in `Text`. Based on the size of text editor, toolbar mode can be classified as `floating` and `inline toolbar`. 

**Inline Toolbar**

`Text` editor contains an inline toolbar by default because of its smaller size. The inline toolbar can be enabled by selecting the text content. This mode is active when the text editor does not have enough space to enable a floating toolbar.

![text_inline](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/text/text-inline.png)

**Floating Toolbar**

It can be enabled by increasing widget size to the required size based on the resolution. This mode is active when the text editor has enough space to display a floating toolbar.

![text_floating](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/text/text-floating.png)

### Properties

Text editors have support to format the font, paragraph, and other functionalities.


### Font Formatting

You can format the text by applying font style, family, and color. The available font formats are bold, italic, underline, strikethrough, font size, font color, highlight color, superscript, and subscript.


![text_fontFormatting](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/text/text-fontformatting.png)


***Bold*** - It allows you to Bold the text.   

***Italic*** -  It allows you to Italicize the text.    

***Underline*** - It allows you to underline the text.  

***Strikethrough*** - It allows you to strikeout the text.   

***Font Family*** - `Roboto` is the default font family, it allows to change the font family of selected text. Available font families are `Roboto, Segoe UI, Arial, Georgia, Impact, Tahoma, Times New Roman, Verdana`.   

***Font Size*** - Size of the selected text can be modified as pixels(px). Available font size are 8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36 and 48px.  

***Font Color*** - Color of the font can be change using this item.  

***Highlight Color*** - It allows you to highlight the selected text.    

***SuperScript*** - It allows you to add superscript text.  

***SubScript*** - It allows you to add subscript text.

### Paragraph Formatting

You can format the paragraph in the text widget. The available paragraph formats are paragraph formats, alignments, numbered and bulleted list. 

![text_paraFormatting](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/text/text-paraformatting.png)

***Formats*** - This allows you to apply the formatting for the paragraph. Available formatting options are paragraph, code, quotation, and headings. By default, the `paragraph` type is formatted.

***Alignments*** - Used to align the paragraph as left, right, center, and justify.

***Numbered and Bulleted List*** - It allows you to add numbers and bullets before the selected lines of paragraph. 

### Vertical Alignments

This allows you to align the paragraph by vertically.

There are three options in the menu for vertical-align as follows.

![text_verticalAlign](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/text/text-verticalalign.png)

***Align Top***    - Allows you to align the paragraph by vertically top of the container.

***Align middle*** - Allows you to align the paragraph by vertically centered.

***Align Bottom*** - Allows you to align the paragraph by vertically bottom of the container.

### Insert Table

Text editor's table can be created by clicking the `create table`![text_table](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/text/text-table.png)icon on the toolbar.

To create table, do one of the following,

* Choose the number of rows and columns by hovering the pointer over the cell.

    ![text_tablecell](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/text/text-tablecell.png)

* Open Insert Table dialog by clicking the `InsertTable` button. Enter the number of rows and columns required in the numeric textbox.

    ![text_tableinsert](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/text/text-tableinsert.png)

Created table is shown like below and it can be resized based on row and column.

![text_tableCreate](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/text/text-tablecreate.png)

**Quick Toolbar**

Quick toolbar is opened by clicking the table. It has different sets of commands to be performed on the table which increases the feasibility to edit the table easily.

![text_tableProp](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/text/text-tableprop.png)

***Table Header*** - This command is available with quick toolbar option through which the header row can be added or removed from the inserted table.  

***Table Rows and Columns*** - Additional row/column in table can be added before/after selected row/column element or delete unwanted row/column.  

***Background Color*** - The background color can be set for each table cell.   

***Table Remove*** - Using the delete item in the quick toolbar, users can delete the entire table.   

***Alignments*** - Used to align the cell content as left, right, center and justify.   

***Table Cell Vertical Align*** - Cell can be aligned vertically in top, middle and bottom.     

***Styles*** - It has two properties, `Dashed Borders` used to style table border as dashed and `Alternate Rows` used to highlight a selected row.

### Insert Hyperlink

Point the cursor anywhere within the editor where you would like to insert the link. It is also possible to select a text within the editor and can be converted to a hyperlink. Click the `Insert HyperLink`![text_link](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/text/text-link.png)icon on the toolbar.

The insert link dialog has the following options,

***Web Address*** - Type or paste the destination for the link you are creating.  

***Display Text*** - Type or edit the required text that you want to display text for the link.   

***Tooltip*** - To display additional helpful information when you place the pointer on the hyperlink, type the required text in the “Tooltip” field.   

***Open Link in New Window*** - Specify whether the given link will be open in the new window or not.

![text_linkDialog](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/text/text-linkdialog.png)

**Quick Toolbar**

Hyperlink contains quick toolbar which can be enable by clicking link. 

![text_linkToolbar](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/text/text-linktoolbar.png)

The quick toolbar for the link has the following options,   

***Open*** - The given link page, will be open in new window.   

***Edit Link*** - Used to edit the link in the Rich Text Editor content.  
  
***Remove Link*** - Used to remove link from the content of Rich Text Editor.

### Code View

Text Editor includes the ability for users to directly edit HTML code via `Source Code` in the text area. If you made any modifications in the Source view directly, the changes will be reflected in the Text Editor’s content.

Click the `Source Code ` ![text_sourceCode](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/text/text-sourcecode.png) icon on the toolbar to switch code view as shown in below,

![text_sampleSourceView](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/text/text-samplesource-view.png)

Clicking the `preview` icon will switch to the editor view.

#### IFrame

The code view allows you to pass `<iframe>` tag to embed external web page as below,

![text-iframeCode](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/text/text-framecode.png)

![text-iframePreview](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/text/iframepreview.png)

### Undo/Redo Manager
 
Undo and redo tools allow you to edit the text by disregard/cancel the recently made changes and restore it to previous state. It is a useful tool to restore the performed action which got changed by mistake. By default, upto 30 actions can be undo/redo in the editor.

To undo and redo operations, do one of the following:

* Press the `undo/redo` button on the toolbar.

    ![text_undoRedo](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/text/text-undoredo.png)

* Press the `Ctrl + Z/Ctrl + Y` combination on the keyboard.

