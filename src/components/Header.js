import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import '../styles/header.scss';
import { PageContext } from '../utils/context/index';
import { useContext } from 'react';

function Header() {
   const { page } = useContext(PageContext);

   return (
      <header className="header">
         <Link to="/">
            <img src={logo} alt="Logo Kasa"></img>
         </Link>
         <nav className="header--nav">
            <Link
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
               className={
                  page === 'apropos'
                     ? 'header--nav--link header--nav--apropos'
                     : 'header--nav--link'
               }>
               A propos
            </Link>
         </nav>
      </header>
   );
}

export default Header;
