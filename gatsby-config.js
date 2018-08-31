module.exports = {
  siteMetadata: {
    title: 'Giacomo Debidda',
    author: 'Giacomo Debidda',
    github: 'jackdbd',
    twitter: 'jackdbd',
    description: "Giacomo Debidda's Personal Blog",
    siteUrl: 'https://www.giacomodebidda.com',
    rssFeed: 'https://www.giacomodebidda.com/rss.xml',
  },
  /*
    Use pathPrefix if your site is hosted at something other than the root of
    the domain. E.g. example.com/blog/ instead of example.com
    https://www.gatsbyjs.org/docs/path-prefix/
  */
  // pathPrefix: '/blog',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          /*
            gatsby-remark-images processes images in markdown so they can be
            used in the production build.
          */
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-"
            }
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Giacomo Debidda`,
        short_name: `giacomodebidda`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-plugin-twitter',
  ],
}
