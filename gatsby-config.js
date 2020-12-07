const toc = require('./left-toc.json');
module.exports = {
  pathPrefix: toc.pathPrefix ? toc.pathPrefix : '/',
  plugins: [
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-K73VBT8"
      }
    },
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
        features: [`String.prototype.startsWith`, `String.prototype.includes`, `Array.prototype.includes`]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
        ignore: [`templates/**/`, `**/summary.md`]
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases: { sh: "bash", cmd: "bash", cs: "csharp", "c#": "csharp", "cshtml": "html" }
            }
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_target",
              rel: "nofollow"
            }
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-autolink-headers'
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: '#2973b7'
      }
      },
      `gatsby-plugin-react-helmet`,
      {
          resolve: `gatsby-plugin-react-helmet-canonical-urls`,
          options: {
              siteUrl: `https://help.boldbi.com`,
          },
      },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-client-side-redirect`
	
  ]
}
