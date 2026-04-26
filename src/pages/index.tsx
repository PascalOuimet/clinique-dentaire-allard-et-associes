import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Team from "../components/team"
import Services from "../components/services"

const IndexPage = () => (
  <Layout>
    <Hero />
    <Team />
    <Services />
  </Layout>
)

export const Head = () => <SEO title="Accueil" pathname="/" />

export default IndexPage
