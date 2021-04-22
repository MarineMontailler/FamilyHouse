import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import garden2 from '../images/garden2i.jpg'
import house1 from '../images/house1.jpg'
import house3 from '../images/house3.jpg'
import house4 from '../images/house4.jpg'
import house6 from '../images/house6.jpg'
import chenille from '../images/chenille.jpg'
import portail from '../images/portail.jpg'



const Photos = () => (
    <Layout>
        <SEO title="Photos" />
        <div className="photo-layout">
            <div className="photo-container"><img src={house1} alt="la vue de la maison" /></div>
            <div className="photo-container"><img src={house3} alt="la vue du jardin" /></div>
            <div className="photo-container"><img src={house6} alt="la vue du jardin" /></div>
            <div className="photo-container"><img src={chenille} alt="la vue du jardin" /></div>
            <div className="photo-container"><img src={garden2} alt="la vue du jardin" /></div>
            <div className="photo-container"><img src={portail} alt="le portail du jardin" /></div>
            <div className="photo-container"><img src={house1} alt="le chenille" /></div>
            <div className="photo-container"><img src={house4} alt="la vue du jardin" /></div>
            <div className="photo-container"><img src={house6} alt="la vue du jardin" /></div>
        </div>

    </Layout>
)

export default Photos