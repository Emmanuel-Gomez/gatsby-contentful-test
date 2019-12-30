module.exports = {
  siteMetadata: {
    title: `Gatsby <3 Contentful`,
    description: `Experimental tutorial for setting up Gatsby page with content from Contenful`,
    author: `@Emmanuel-Gomez`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'qzdfmleomfg6',
        accessToken: 'dx2BSfIg1brueCz2WdhvWhYR2K_6hXIimb_-UsPtPlc'
      }
    },
    `gatsby-transformer-remark`
  ],
}
