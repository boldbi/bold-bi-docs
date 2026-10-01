const _ = require('lodash')
const Promise = require('bluebird')
const { execSync } = require('child_process');
const { updateContent } = require('./build/content.js');
const path = require('path')
const fs = require('fs')
const redirects = require("./redirects.json")

function getApiDirectoryRedirects(dir = path.resolve('./api')) {
    if (!fs.existsSync(dir)) {
        return []
    }

    const redirects = []

    function walk(currentDir) {
        fs.readdirSync(currentDir, { withFileTypes: true }).forEach(entry => {
            const fullPath = path.join(currentDir, entry.name)

            if (entry.isDirectory()) {
                walk(fullPath)
                return
            }

            if (entry.isFile() && entry.name === 'index.html') {
                const relativeDir = path.relative(dir, currentDir).split(path.sep).join('/')

                if (relativeDir) {
                    redirects.push({
                        fromPath: `/${relativeDir}`,
                        toPath: `/${relativeDir}/`,
                    })
                }
            }
        })
    }

    walk(dir)
    return redirects
}

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

                    const postSlug = (post.node.fields && post.node.fields.slug) ? post.node.fields.slug : '/';
                    const component = (postSlug === '/' || postSlug === '/index/') ? path.resolve('./src/index.js') : layout;

                    createPage({
                        path: postSlug,
                        component: component,
                        context: {
                            slug: postSlug,
                            html: post.node.html,
                            frontmatter: post.node.frontmatter,
                            lastUpdated: post.node.fields.lastUpdated,
                            previous,
                            next,
                        },
                    })
                })

                 // Ensure a root page exists at '/' — render with our src/index.js component
                try {
                    createPage({
                        path: '/',
                        component: path.resolve('./src/index.js'),
                        context: { slug: '/' }
                    });
                } catch (e) {
                    console.warn('createPage for root failed', e);
                }
            })
        )
        redirects.concat(getApiDirectoryRedirects()).forEach(redirect =>
            createRedirect({
                fromPath: redirect.fromPath,
                toPath: redirect.toPath,
                redirectInBrowser: true,
                isPermanent: true,
            })
        )
    })
}
