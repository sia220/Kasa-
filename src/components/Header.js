import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PageContext } from '../utils/context/index';
import logo from '../assets/logo.svg';
import '../styles/header.scss';

function Header() {
   // On utilise le contexte pour savoir quelle page est consultée
   const { page } = useContext(PageContext);

   return (
      <header className="header">
         <Link to="/">
            <img className="header--img" src={logo} alt="Logo Kasa"></img>
         </Link>
         <nav className="header--nav">
            <Link
               // Le className dépend de la page consultée afin de pouvoir souligner Acceuil si c'est cette page qui est consultée
               to="/"
               className={
                  page === 'home'
                     ? 'header--nav--link header--nav--accueil'
                     : 'header--nav--link'
               }>
               Accueil
            </Link>
            <Link
               to="/a-propos"
               // Le className dépend de la page consultée afin de pouvoir souligner A propos si c'est cette page qui est consultée
               className={
                  page === 'apropos'
                     ? 'header--nav--link header--nav--apropos'
                     : 'header--nav--link'
               }>
               À propos
            </Link>
         </nav>
      </header>
   );
}

export default Header;
