const _ = require('lodash')
const Promise = require('bluebird')
const { execSync } = require('child_process');
const { updateContent } = require('./build/content.js');
const path = require('path')
const redirects = require("./redirects.json")

exports.onCreateWebpackConfig = ({ actions, stage }) => {
    if (stage === 'build-javascript') {
        actions.setWebpackConfig({
            devtool: false
        })
    }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
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

        let lastUpdated = null;
        try {
            lastUpdated = execSync(
                `git log -1 --format=%cI -- docs/"${fileNode.relativePath}"`
            ).toString().trim();
        } catch (e) {
            console.log("Git error:", e);
        }

        createNodeField({ node, name: "slug", value: slug });
        createNodeField({ node, name: "lastUpdated", value: lastUpdated });
    }
};

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const { createRedirect } = actions

    return new Promise((resolve, reject) => {
        const layout = path.resolve('./src/templates/Layout.js')
        resolve(
            graphql(
            `{
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
                                lastUpdated
                            }
                        }
                    }
                }
            }`
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
                            html: post.node.html,
                            frontmatter: post.node.frontmatter,
                            lastUpdated: post.node.fields.lastUpdated,
                            previous,
                            next,
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