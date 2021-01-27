import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="header-container">
    <h1>
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
    <nav className="header-navbar">
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/photos/">Photos</Link></li>
        <li><Link to="/calendrier/">Calendrier</Link></li>
        <li><Link to="/contact/">Contact</Link></li>
      </ul>
    </nav>
  </header >
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
