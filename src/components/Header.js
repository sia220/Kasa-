import logo from "../assets/logo.svg"
import { Link } from 'react-router-dom'
import "../styles/header.scss"

function Header() {
    return(
        <header className="header">
            <Link to="/">
            <img src={logo} alt="Logo Kasa"></img>
            </Link>
            <nav className="header--nav">
                <Link to="/" className="header--nav--link">
                    Accueil
                </Link>
                <Link to="/a-propos" className="header--nav--link">
                    A propos
                </Link>
            </nav>
        </header>
    )
}

export default Header