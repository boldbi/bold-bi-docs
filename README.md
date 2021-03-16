
# Bold BI Documentation

This repository contains the source code of the Bold BI [documentation](https://help.boldbi.com/).

# Table of Contents

* [Prerequisites](#prerequisites)
* [Setup the Application for Local Environment](#setup-the-application-for-local-environment)
* [Generate Assets for Production Environment](#generate-assest-for-production-environment)
* [File Structure](#file-structure)
* [Markdown Guidelines](#markdown-guidelines)

# Prerequisites

Bold BI documentation was built on [Gatsby](https://www.gatsbyjs.org/) application.

## Node.js Installation
Make sure to install [Node.js](https://nodejs.org/en/blog/release/v10.18.0/) `v10` series(This version of `nodejs` supports all the `Gatsby` plugin which is used in our application, higher version may not be supported all the plugins.) in your machine and run `node -v` to check whether it is installed properly or not.

## Gulp Installation
Install `gulp` package with global access and the version should be `v3.9.1` and then run `gulp -v` to check whether it is installed properly or not.

**To Run:**

  ```cmd
   npm install  gulp@3.9.1 -g
  ```
## Gatsby Installation
Install `gatsby-cli` package with global access to build and serve the application.

**To Run:**

  ```cmd
   npm install gatsby-cli -g
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

# Generate Assets for Production Environment

Run the below command to generate publish assets and it will be generated in `public` folder. We can use this to launch the help documentation site.

**To Run:**

  ```cmd
    gulp production-build
  ```

To host the application other than root, we can pass the `--prefix-paths`. If this flag is not passed, Gatsby will ignore your `pathPrefix` and build the site as if hosted from the root domain.

**To Run:**

  ```cmd
    gulp production-build --prefix-paths
  ```

# File Structure

Documents should have written in `markdown(.md)` format.

Refer the below document folder structure,

```cmd
    --> docs (1)
        --> cloud-bi (2)
            --> getting-started 
                --> bold-bi-walk-through.md
                --> index.md
            --> index.md (4)
            --> summary.json (5)
        --> embedded-bi (3)
            --> getting-started 
                --> bold-bi-walk-through.md
                --> index.md
            --> index.md (4)
            --> summary.json (5)
        --> home.md (6)
``` 

(1) ---> Document `.md` files should be placed in **docs** folder.

(2) ---> Bold BI Cloud related files should be placed in **cloud-bi** folder.

(3) ---> Bold BI Embedded related files should be placed in **embedded-bi** folder.

(4) ---> Each parent folder should have `index.md` file that explains about the overview of child nodes.

(5) ---> `summary.json` file holds the title of each files presents in the parent folder like `cloud-bi` and `embedded-bi`. This will helps to show the titles in left pane of the documentation site. So, add the titles here with respect to each platform.

## Image Location

Image should be placed in this location `\static\assets\`. Same document folder structure should be followed here.
> Image name and Alt text should be unique and meaningful.

## Swagger File Structure

Swagger files should be placed in **api** folder and its respective index files should be placed in respective platform folders. Refer the *rest-api-reference* folder in `\api\cloud-bi\rest-api-reference` and `\docs\cloud-bi\rest-api-reference`.

## Notes and Important Style

To add the notes and important type of predefined blockquote use the below syntax,

**Syntax** : `> **NOTE:** [Content]` and `> **IMPORTANT:** [Content]`

# Markdown Guidelines

* Refer [General Markdown Syntax](https://kramdown.gettalong.org/syntax.html) here.


