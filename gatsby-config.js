module.exports = {
  siteMetadata: {
    title: `Natiivo 2704 Vacation Rental Condo`,
    description: `Breathtaking vistas await at this luxe 27th-floor corner condo, highlighted by a private, river-view balcony. The Live Music Capital of the World is at your doorstep, with downtown hot spots just an elevator ride away. Book now!`,
    author: `@seanli.io`,
    siteUrl: `https://natiivo2704.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/gallery`,
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
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/manifest.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Raleway",
              variants: ["400", "600", "800"],
            },
            {
              family: "Permanent Marker",
              variants: ["400"],
            },
          ],
        },
      },
    },
  ],
}
