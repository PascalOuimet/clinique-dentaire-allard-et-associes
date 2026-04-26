import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <section className="section">
      <h1>Page introuvable</h1>
    </section>
  </Layout>
)

export const Head = () => <SEO title="404: Page introuvable" pathname="/404/" />

export default NotFoundPage
