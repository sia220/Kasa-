import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/footer.scss';

function Footer() {
   return (
      <footer className="footer">
         <Link to="/">
            <img src={logo} className="footer--logo" alt="Logo Kasa"></img>
         </Link>
         <p className="footer--texte">© 2020 Kasa. All rights reserved</p>
      </footer>
   );
}

export default Footer;
