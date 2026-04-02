const _ = require('lodash')
const Promise = require('bluebird')
const { updateContent } = require('./build/content.js');
const path = require('path')
var typeRegex = /`(`|)[^`]+(`|)`/;
var mdLinkRegex = /\[[^\)]+\)/;
var separateRegex = /\|/g;
var specialRegex = /[^A-Za-z0-9\- ]/g;
var apiLinkRegex = /\[[^\]]+\]\([^\)]+\)/g;
var apiTypeRegex = /`[^\`]+`/g;
var apiAndRegex = /&#124;/g;
var apiSpanRegex = /<span class='doc-prop-name'>/;
const redirects = require("./redirects.json")

exports.onCreateWebpackConfig = ({ actions, stage }) => {
    if (stage === 'build-javascript') {
        actions.setWebpackConfig({
            devtool: false
        })
    }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField, createRedirect } = actions
    let slug;

    if (node.internal.type === `MarkdownRemark`) {
        const fileNode = getNode(node.parent);
        const parsedFilePath = path.parse(fileNode.relativePath);
        if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
            slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
        } else if (parsedFilePath.dir === "") {
            slug = `/${parsedFilePath.name}/`;
        } else {
            slug = `/${parsedFilePath.dir}/`;
        }
        if (node.internal.content) {
            node.internal.content = updateContent(node.internal.content, slug, node.frontmatter);
        }
        createNodeField({ node, name: "slug", value: slug });
        var header = getHeader(node.rawMarkdownBody.match(/(#[#]+ [^\n]+|\<span class\=\'doc-prop-name\'\>[^\<]+)/g));
        createNodeField({ node, name: "header", value: header });
    }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const { createRedirect } = actions
   
        //const { createPage } = actions
  
    return new Promise((resolve, reject) => {
        const layout = path.resolve('./src/templates/layout.js')
        resolve(
            graphql(
                `
          {
            allMarkdownRemark {
              edges {
                node {
                      html
                      id
                      frontmatter {
                        description
                        title
                        keywords
                        canonical
                      }
                      fields {
                          slug
                          header
                      }
                  }
              }
            }
          }
        `
            ).then(result => {
                if (result.errors) {
                    console.log(result.errors)
                    reject(result.errors)
                }
                // Create blog posts pages.
                const posts = result.data.allMarkdownRemark.edges;
                _.each(posts, (post, index) => {
                    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
                    const next = index === 0 ? null : posts[index - 1].node;

                    createPage({
                        path: post.node.fields.slug,
                        component: layout,
                        context: {
                            slug: post.node.fields.slug,
                            previous,
                            next,
                            header: post.node.fields.header
                        },
                    })
                })
            })
        )
        redirects.forEach(redirect =>
            createRedirect({
              fromPath: redirect.fromPath,
              toPath: redirect.toPath,
              redirectInBrowser: true,
              isPermanent: true,
            })
          )
    })
}

let getHeader = (headers) => {
    if (!headers || headers.length <= 1) return '';

    const regexes = [apiSpanRegex, apiLinkRegex, apiTypeRegex, apiAndRegex, specialRegex, mdLinkRegex, typeRegex, separateRegex];
    let toc = ['<div id="doc-right-toc"><span>Contents</span>\n<ul>'];
    let levels = [1]; // Track open UL levels, starting with a dummy level 1
    let lastLevel = 2; // Last processed header level

    for (let header of headers) {
        let hLevel = header.match(/#/g)?.length || 3;
        if (hLevel >= 5) continue;

        let hName = header.trim();
        for (let regex of regexes) hName = hName.replace(regex, '');
        hName = hName.replace(/[#]+ /, '').trim();
        if (!hName) continue;

        let hId = hName.toLowerCase().replace(/\s+/g, '-');
        let capitalizedName = hName.charAt(0).toUpperCase() + hName.slice(1);

        if (hLevel > lastLevel) {
            toc.push('<ul>'.repeat(hLevel - lastLevel));
            for (let i = lastLevel; i < hLevel; i++) levels.push(i);
        } else if (hLevel < lastLevel) {
            toc.push('</li></ul>'.repeat(lastLevel - hLevel));
            levels.length = levels.findLastIndex(l => l < hLevel) + 1;
        } else {
            toc.push('</li>');
        }

        toc.push(`\n <li class="doc-anchor-h${hLevel}"><a href="#${hId}">${capitalizedName}</a>`);
        lastLevel = hLevel;
    }

    toc.push('</li></ul>'.repeat(levels.length - 1), '</ul>');
    // ⭐ Add Support block AFTER the TOC
    toc.push(`
        <div class="support-box">
            <p class="support-title">Having trouble getting help?</p>
            <a href="https://support.boldbi.com/create" class="support-btn">Contact Support</a>
        </div>
    `);

    toc.push('</div>'); // Close #doc-right-toc
    return toc.join('');
};