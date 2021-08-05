import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Team from "../components/team"
import Services from "../components/services"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import theme from "../theme"

const IndexPage = () => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Accueil" />
        <Hero />
        <Team />
        <Services/>
      </Layout>
    </ThemeProvider>
  </React.Fragment>
)

export default IndexPage
