# Bold BI Documentation

This repository contains the source code of the Bold BI documentation.

* [Production Site](https://help.boldbi.com/)
* [Development Site](https://staginghelp.boldbi.com/)

# Table of Contents

* [Prerequisites](#prerequisites)
* [Setup the Application for Local Environment](#setup-the-application-for-local-environment)
* [CI Validations](#ci-validations)
* [File Structure](#file-structure)
* [Important Markdown Guidelines](#important-markdown-guidelines)
* [General Markdown Syntax Reference](#general-markdown-syntax-reference)

# Prerequisites

Bold BI documentation was built on [Gatsby](https://www.gatsbyjs.org/) application.

## Node.js Installation
Make sure to install [Node.js](https://nodejs.org/en/blog/release/v18.16.0/) `v18` series(This version of `nodejs` supports all the `Gatsby` plugin which is used in our application, higher version may not be supported all the plugins.) in your machine and run `node -v` to check whether it is installed properly or not.

## Gulp Installation
Install `gulp` package with global access and the version should be `v4.0.2` and then run `gulp -v` to check whether it is installed properly or not.

**To Run:**

  ```cmd
   npm install  gulp@4.0.2 -g
  ```
## Python Installation
Download and install [`python`](https://www.python.org/downloads/windows/) package.

## Gatsby Installation
Install `gatsby-cli` package with global access to build and serve the application.

**To Run:**

  ```cmd
   npm install gatsby-cli@5.11.0 -g
  ```

# Setup the Application for Local Environment

## NPM Installation
Initially, Run `npm install` from your cloned root folder.

**To Run:**

  ```cmd
   npm install
  ```

## Build your application
Run the below command to build the application. 

**To Run:**

  ```cmd
    gulp build
  ```

## View the application
Run the below command to serve the application. After running the command, Navigate to [localhost:8000](http://localhost:8000) to view the documentation in local browser.

**To Run:**

  ```cmd
    gulp serve
  ```
# CI Validations
Once we done the setup for local environment, we can follow the below commands to check the validations. Also, explained the solutions for the commonly raised validation errors.

* Run the below command to test typo error.

**To Run:**

  ```cmd
    gulp typo
  ```
  **Note:** This task will throw an error on using custom words like `dll, localhost`. For that, we need to include these words (need to have valid reason for using these custom names) in `spelling` file.

* Run the below command to test file name validation.

**To Run:**

  ```cmd
    gulp file-validation
  ```
  **Note:** This task will throw error on using custom file names. For that, we need to include these names(need to have valid reason for using these custom names) in `customNames` array in `config.json` file.

* Run the below command to test seo validation.

**To Run:**

  ```cmd
    gulp seo-validation
  ```

* Run the below command to test all the typo error, seo validation and file name validation.

**To Run:**

  ```cmd
    gulp test
  ```

# File Structure

Documents should have written in `markdown(.md)` format.

Refer the below document folder structure,

```cmd
    --> docs (1)
            --> getting-started 
                --> quick-start.md
                --> index.md
            --> index.md (4)
            --> summary.json (5)
        --> home.md (6)
``` 

(1) ---> Document `.md` files should be placed in **docs** folder.

(2) ---> Each parent folder should have `index.md` file that explains about the overview of child nodes.

(3) ---> `summary.json` file holds the title of each files presents in the parent folder. This will helps to show the titles in left pane of the documentation site. So, add the titles here with respect to each platform.

## Image Location

Image should be placed in this location `\static\assets\`. Same document folder structure should be followed here.
> Image name and Alt text should be unique and meaningful.

## Swagger File Structure

Swagger files should be placed in **api** folder and its respective index files should be placed in respective platform folders. Refer the *rest-api-reference* folder in `\api\server-api-reference\`.

# Important Markdown Guidelines

## File naming Convention:
* All files should have `.md` extension.
* Phrase title and description in a way that users can determine what questions the text will answer, and material that will be addressed, without reading the content. This eases the time spent looking for answers, and improvises search/scanning, and possibly **SEO**.

> For example, at the top section of each MD file,

> **title:** Dashboard Migration Utility - Embedded | Bold BI Learning

> **description:** Learn how to migrate the classic platform dashboards and data sources into Bold BI Embedded supported formats using migration utility.

## Canonical Path update for duplicated files

* For duplicated files, we should add `canonical` path (original file path). 

For example, `Migration Utility` support presents in both Cloud and Embedded BI Platform. So we need to add the `migration-utility` file in both platform folders(\docs\cloud-bi\migration-utility & \docs\embedded-bi\migration-utility). In this file, same details will be given. So need to add original file path in canonical tag like below in duplicated file.

> **canonical:** "/migration-utility/"

## Notes and Important Style

To add the notes and important type of predefined blockquote use the below syntax,

**Syntax** : `> **NOTE:** [Content]` and `> **IMPORTANT:** [Content]`

## See Also
[General Guidelines](/documentation-guidelines.md)

# General Markdown Syntax Reference

* Refer [General Markdown Syntax](https://kramdown.gettalong.org/syntax.html) here. 