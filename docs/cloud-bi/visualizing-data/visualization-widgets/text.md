---
layout: post
title: Text (Rich Text Editor) Visual – Cloud BI | Bold BI Docs
description: Learn how to utilize a Text (Rich Text Editor) visual in Bold BI Cloud dashboard, configure, formatting text and other settings.
platform: bold-bi
control: Text (Rich Text Editor)
documentation: ug
---

# Text (Rich Text Editor)

Text editor allows you to edit and visualize content of formatted texts, tables, hyperlinks and source code.

![text_overview](/static/assets/cloud/visualizing-data/visualization-widgets/images/text/text_overview.PNG)

## How to configure text editor ?

Drag and drop `Text` control icon from the tool box to design panel. You can find control by searching in tool box.

![text_dragDrop](/static/assets/cloud/visualizing-data/visualization-widgets/images/text/text_dragDrop.PNG)

By default, text editor in `read-only` mode, click `edit` icon to interact with widget.

![text_editIcon](/static/assets/cloud/visualizing-data/visualization-widgets/images/text/text_editIcon.PNG)

Click `tick` icon to save the `Text`.

![text_tickIcon](/static/assets/cloud/visualizing-data/visualization-widgets/images/text/text_tickIcon.PNG)

`Text` editor property panel is disabled by default because it doesn't have any items in property panel. It contains all property in toolbar. 

### Toolbar Classification

Toolbar contains the property which used in `Text`. Based on the size of text editor, toolbar mode can be classified as `floating` and `inline toolbar`. 

**Inline Toolbar**

`Text` editor contains inline toolbar by default because of its smaller size. Inline toolbar can be enabled by selecting the text content. This mode is active, when text editor doesn't have enough space to enable floating toolbar.

![text_inline](/static/assets/cloud/visualizing-data/visualization-widgets/images/text/text_inline.PNG)

**Floating Toolbar**

It can be enabled by increasing widget size to required size based on the resolution. This mode is active, when text editor have enough space to display floating toolbar.

![text_floating](/static/assets/cloud/visualizing-data/visualization-widgets/images/text/text_floating.PNG)

## Properties

Text editors have support to format the font, paragraph and other functionalities.


### Font Formatting

You can format the text by applying font style, family and color. The available font formats are bold, italic, underline, strikethrough, font size, font color, highlight color, superscript and subscript.


![text_fontFormatting](/static/assets/cloud/visualizing-data/visualization-widgets/images/text/text_fontFormatting.PNG)


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

![text_paraFormatting](/static/assets/cloud/visualizing-data/visualization-widgets/images/text/text_paraFormatting.PNG)

***Formats*** - Allows you to apply the formatting for the paragraph. Available formatting are paragraph, code, quotation and headings. By default `paragraph` type is formatted.  
***Alignments*** - Used to align the paragraph as left, right, center and justify.  
***Numbered and Bulleted List*** - It allows you to add numbers and bullets before the selected lines of paragraph. 

### Vertical Alignments

This allows you to align the paragraph by vertically.

There are three options in the menu for vertical-align as follows.

![text_verticalAlign](/static/assets/cloud/visualizing-data/visualization-widgets/images/text/text_verticalalign.PNG)

***Align Top***    - Allows you to align the paragraph by vertically top of the container.

***Align middle*** - Allows you to align the paragraph by vertically centered.

***Align Bottom*** - Allows you to align the paragraph by vertically bottom of the container.

### Insert Table

Text editor's table can be created by clicking `create table` ![text_table](/static/assets/cloud/visualizing-data/visualization-widgets/images/text/text_table.PNG) icon on the toolbar.

To create table, do one of the following,

* Choose number of rows and columns by hovering pointer over the cell.

    ![text_tablecell](/static/assets/cloud/visualizing-data/visualization-widgets/images/text/text_tablecell.PNG)

* Open Insert Table dialog by clicking `InsertTable` button. Enter the number of rows and columns required in the numeric textbox.

    ![text_tableinsert](/static/assets/cloud/visualizing-data/visualization-widgets/images/text/text_tableinsert.PNG)

Created table is shown like below and it can be resized based on row and column.

![text_tableCreate](/static/assets/cloud/visualizing-data/visualization-widgets/images/text/text_tableCreate.PNG)

**Quick Toolbar**

Quick toolbar is opened by clicking the table. It has different sets of commands to be performed on the table which increases the feasibility to edit the table easily.

![text_tableProp](/static/assets/cloud/visualizing-data/visualization-widgets/images/text/text_tableProp.PNG)

***Table Header*** - This command is available with quick toolbar option through which the header row can be added or removed from the inserted table.  
***Table Rows and Columns*** - Additional row/column in table can be added before/after selected row/column element or delete unwanted row/column.  
***Background Color*** - The background color can be set for each table cell.   
***Table Remove*** - Using the delete item in the quick toolbar, users can delete the entire table.   
***Alignments*** - Used to align the cell content as left, right, center and justify.   
***Table Cell Vertical Align*** - Cell can be aligned vertically in top, middle and bottom.     
***Styles*** - It has two properties, `Dashed Borders` used to style table border as dashed and `Alternate Rows` used to highlight a selected row.

### Insert Hyperlink

Point the cursor anywhere within the editor where you would like to insert the link. It is also possible to select a text within the editor and can be converted to the hyperlink. Click the `Insert HyperLink` ![text_link](/static/assets/cloud/visualizing-data/visualization-widgets/images/text/text_link.PNG) icon on the toolbar.

The insert link dialog has the following options,

***Web Address*** - Type or paste the destination for the link you are creating.       
***Display Text*** - Type or edit the required text that you want to display text for the link.     
***Tooltip*** - To display additional helpful information when you place the pointer on the hyperlink, type the required text in the “Tooltip” field.   
***Open Link in New Window*** - Specify whether, the given link will be open in new window or not

![text_linkDialog](/static/assets/cloud/visualizing-data/visualization-widgets/images/text/text_linkDialog.PNG)

**Quick Toolbar**

Hyperlink contains quick toolbar which can be enable by clicking link. 

![text_linkToolbar](/static/assets/cloud/visualizing-data/visualization-widgets/images/text/text_linkToolbar.PNG)

The quick toolbar for the link has the following options,   

***Open*** - The given link page, will be open in new window.   
***Edit Link*** - Used to edit the link in the Rich Text Editor content.    
***Remove Link*** - Used to remove link from the content of Rich Text Editor.

### Code View

Text Editor includes the ability for users to directly edit HTML code via `Source Code` in the text area. If you made any modification in Source view directly, the changes will be reflected in the Text Editor’s content.

Click the `Source Code ` ![text_sourceCode](/static/assets/cloud/visualizing-data/visualization-widgets/images/text/text_sourceCode.PNG) icon on the toolbar to switch code view as shown in below,

![text_sampleSourceView](/static/assets/cloud/visualizing-data/visualization-widgets/images/text/text_sampleSourceView.PNG)

Clicking `preview` icon will switch to editor view.

**IFrame**

The code view allows you to pass `<iframe>` tag to embed external web page as below,

![text_iframeCode](/static/assets/cloud/visualizing-data/visualization-widgets/images/text/text_iframeCode.PNG)

![text_iframePreview](/static/assets/cloud/visualizing-data/visualization-widgets/images/text/text_iframePreview.PNG)

### Undo/Redo Manager
 
Undo and redo tools allow you to edit the text by disregard/cancel the recently made changes and restore it to previous state. It is a useful tool to restore the performed action which got changed by mistake. By default, upto 30 actions can be undo/redo in the editor.

To undo and redo operations, do one of the following:

* Press the `undo/redo` button on the toolbar

    ![text_undoRedo](/static/assets/cloud/visualizing-data/visualization-widgets/images/text/text_undoRedo.PNG)

* Press the `Ctrl + Z/Ctrl + Y` combination on the keyboard
