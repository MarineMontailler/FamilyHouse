import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import house3 from '../images/house3.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="index-container">
      <h1>Bienvenue chez nous</h1>
      <p>Nous sommes heureux de vous accueillir dans la maison de nos arrières-arrières-grands-parents.</p>
      <p>Un lieu chargé de souvenir pour notre famille, nous n'allions quand même pas vous priver d'un si bel endroit pour vous en créer de nouveaux, rien qu'à vous !</p>
      <p>Que cela soit pour une mise au vert en cette période, ou pour quelques jours de vacances à la campagne, nous pouvons accueillir jusqu'à 8 personnes.</p>
      <p>      La région est pleine de merveilles pour vos mirettes, et la maison est pleine de chaleur pour vos petits coeurs.
      </p>

      <p>Nous vous attendons...</p>
      <div style={{ maxWidth: `1000px`, marginBottom: `1.45rem` }}>
        <img src={house3} alt="les fresnaies" />
      </div>
    </div>

  </Layout>
)

export default IndexPage
