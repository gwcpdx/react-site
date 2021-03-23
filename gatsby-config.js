module.exports = {
  siteMetadata: {
    title: `Girls Who Code PDX`,
    description: `Portland, OR chapter of the national non-profit organization, Girls Who Code.`,
    author: `@rachelworthman`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-plugin-styled-components`,


    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
