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
//let releaseNotes = [/#(.*) Bug Fixes/, /#(.*) New Features/, /#(.*) Breaking Changes/, /#(.*) Upgrade/];

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
        if (parsedFilePath.name == "home" && parsedFilePath.dir == "") {
            slug = '/';
        } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
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
    })
}

let getHeader = (headers) => {
    var toc = '';
    if (headers && headers.length && headers.length !== 1) {
        toc = '<div id="doc-right-toc"><span>Contents</span>\n<ul>';
        for (var header of headers) {
            //if (!(isReleaseNotes && releaseNotes.some((exp) => header.match(exp)))) {
                var hLevel = header.match(/#/g) ? header.match(/#/g).length : 3;
                var hName = header.trim().replace(apiSpanRegex, '').replace(/[#]+ /, '').replace(apiLinkRegex, '').replace(apiTypeRegex, '')
                    .replace(apiAndRegex, '').replace(specialRegex, '').replace(mdLinkRegex, '').replace(typeRegex, '').replace(separateRegex, '').trim();
                var hId = hName.toLowerCase().replace(/[ ]+/g, '-');
                toc += `\n  <li class="doc-anchor-h${hLevel}"><a href="#${hId}">${hName}</a></li>`;
            //}
        }
        toc += '\n</ul></div>';
    }
    return toc;
}
