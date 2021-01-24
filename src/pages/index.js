import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import house3 from '../images/house3.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="index-container">
      <h1>Bienvenue chez nous</h1>
      <div style={{ maxWidth: `1000px`, marginBottom: `1.45rem` }}>
        <img src={house3} alt="les fresnaies" />
      </div>
    </div>

  </Layout>
)

export default IndexPage
