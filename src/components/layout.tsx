import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"
import Footer from "./footer"

interface Props {
  children?: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <React.Fragment>
    <Header />
    <main className="siteShell">{children}</main>
    <Footer />
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
