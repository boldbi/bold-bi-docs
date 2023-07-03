# Documentation Guidelines

This section contains guidelines on naming files, sections, documents and other document elements.

## File naming Convention:
* All files should have `.md` extension.
* Phrase title and description in a way that users can determine what questions the text will answer, and material that will be addressed, without reading the content. This eases the time spent looking for answers, and improvises search/scanning, and possibly **SEO**.

> For example, at the top section of each MD file,

> **Title:** Dashboard Migration Utility - Embedded | Bold BI Learning

> **Description:** Learn how to migrate the classic platform dashboards and data sources into Bold BI Embedded supported formats using migration utility.

## Canonical Path update for duplicated files

* For duplicated files, we should add `canonical` path (original file path). 

  For example, `Migration Utility` support presents in both Cloud and Embedded BI Platform. So we need to add the `migration-utility` file in both platform folders(\docs\cloud-bi\migration-utility & \docs\embedded-bi\migration-utility). In this file, same details will be given. So need to add original file path in canonical tag like below in duplicated file.

> **canonical:** "/cloud-bi/migration-utility/"

## Markdown Syntax Guideline
* Follow the syntax mentioned in this [link](http://kramdown.gettalong.org/syntax.html) for most of the elements. There are some elements which need special styling or additional settings to do. Those have been described in the below topics.

## General
* Do not bold the words unnecessarily.
* Use [inline code style](http://kramdown.gettalong.org/quickref.html#inline-code) wherever it is possible to highlight the keywords, variables or one line code examples that come within the paragraph.

### Cross-reference
* Link within the page (if you have a title with space, use hyphen (-))

>	**Syntax**: \[Link name](#title-name)

>	**Example**: \[User Guide] (#user-guide)

* Link to the other page within the same platform documentation (using relative path). Tooltip text is optional.

> **Syntax**: \[Link name](relative path "Tooltip text")

> **Example**: \[Getting Started](/docs/cloud-bi/Getting-Started "Cloud BI Getting Started")

### Table
* Use the [Syntax](http://kramdown.gettalong.org/syntax.html#tables) for creating the tables.
* **Advanced tables**: If you want to create an advanced tables with row span or column span or with code snippets, you can go with the standard html table syntax as described below.

> 1. start with `<table>` tag. Tag should be left indented and should have empty space in left side. 

> 2. Provide `TH` tag for table headers.

> 3. Code snippet can include within `<td> [code snippet] </td>`. Follow the same pattern like code snippet. 

* Do not provide table captions.

### Image

* Make sure image is not resized or blurred. 
* Caption is not necessary to provide for all images except for the case where we will have displayed more than one image.

* Adding Image : General markdown [syntax](http://kramdown.gettalong.org/syntax.html#images) will work.

> **Syntax**: \!\[Alt text](image path)

> **Example**: \!\[Alt text](/path/to/image.png)

* Adding image with caption:

> **Syntax**: \{% include image.html url="image path" caption="caption text"%}

> **Example**: \{% include image.html url="/js/DatePicker/Appearance-and-Styling_images/Appearance-and-Styling_img2.png" caption="caption text"%}

* Image format should be either `.jpeg` or `.png` format 
* Size of the image should not exceed  100 KB  
* If you are including the image to show an output of a code block, make sure the exact output can see the user also when he executes the same code snippet.

### Bullet style
* Refer the syntax provided in the [site](http://kramdown.gettalong.org/syntax.html#lists).
* Do not provide a line gap between the bullet points.

### Notes style

* To add the different type of predefined blockquote use the below syntax.

**Information** or **Notes**
> **Syntax**: > **NOTE:** [Content]

**Warning**
> **Syntax**: > **WARNING:** [Content]

**Errors**
> **Syntax**: > **ERRORS:** [Content]

**Tips**
> **Syntax**: > **TIPS:** [Content]

### Notes multiple paragraph style
* Use the BR tag between the content to enable multiple paragraph style.  


**Tips**
> **Syntax**: > **TIPS:** [Content]

> **Example**:  The contents downloaded from the online link should be blocked by windows. **<BR>**So, we need to unblock those downloaded contents.

### Keyboard shortcuts
* Enclose the each keys with `<kbd>` tag to display the keys with different styling. For ex, <kbd>Ctrl</kbd>+<kbd>A</kbd> .

## API Reference Guideline

### Naming Standards
* Use the JS API naming standards mentioned in the following page - [API Naming Standards](https://syncfusion.atlassian.net/wiki/display/JS/API+Naming+Standards)

# See Also
[Style Guide](/style-guide.md)