/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import Header from "./header"
import "./layout.css"
import './general.css'
import chair from '../images/chair.png'



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `150px 1.0875rem 1.45rem`,
        }}
      >
        <main style={{
          minHeight: `100vh`,
        }}>{children}</main>

      </div>
      <footer
        style={{
          margin: `10px auto 0px auto`,
          paddingTop: `10px`,
          textAlign: 'center',
          width: `100vw`,
          height: `10vh`,
          position: `absolute`,
          bottom: 0,
          color: `white`,
          textShadow: `1px 1px 10px rgb(0, 0, 0), 0 0 1em rgb(0, 0, 0), 0 0 0.2em rgb(88, 88, 88)`

        }}
      >
        <p className="footer-address">Les Fresnaies - 49290 Chalonnes Sur Loire</p>
        © {new Date().getFullYear()}, Made with <span><FontAwesomeIcon icon={faHeart} /></span>
      </footer>
      <img src={chair} alt="la chaise de papy" width="50" style={{ position: "relative", marginBottom: `2px`, }} />

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
