import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const Login = () => {
    const [pseudo, setPseudo] = useState('');
    const [mdp, setMdp] = useState('');
    const [logged, setLogged] = useState(false);

    function handleChangePseudo(e) {
        e.preventDefault()
        setPseudo(e.target.value)
    }
    function handleChangeMdp(e) {
        e.preventDefault()
        setMdp(e.target.value)
        if (mdp === 'famill' && pseudo === 'famille') {
            setLogged(true);
        }
    }

    return (
        <Layout>
            <SEO title="Login" />
            <div className="login-container">
                <form className="login-form">
                    <label htmlFor="pseudo">Identifiant : <input type="text" id="pseudo" name="pseudo" value={pseudo} onChange={handleChangePseudo} /></label>
                    <br />
                    <label htmlFor="pass">Mot de passe : <input type="password" id="pass" name="pass" value={mdp} onChange={handleChangeMdp} /></label>
                </form>
                <div>
                    <Link to={logged ? "/private" : "/login"}><button>Login</button></Link>
                </div>

            </div>

        </Layout >
    )

}

export default Login