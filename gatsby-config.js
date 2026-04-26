module.exports = {
  siteMetadata: {
    title: `Clinique Dentaire Allard et Associés`,
    description: `Centre dentaire familial et multidisciplinaire à Salaberry-de-Valleyfield.`,
    siteUrl: process.env.SITE_URL || `https://dentisteallard.com`,
    author: `Clinique Dentaire Allard et Associés`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          placeholder: `blurred`,
          quality: 82,
          breakpoints: [390, 768, 1180, 1366],
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Clinique Dentaire Allard et Associés`,
        short_name: `Dentiste Allard`,
        start_url: `/`,
        background_color: `#f6faf9`,
        theme_color: `#0b7a82`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        include: /svg/,
      },
    },
  ],
}
