import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageContext } from '../utils/context/index';
import QuatreCentQuatre from '../assets/404.svg';
import Header from '../components/Header';
import '../styles/error.scss';

function Error() {
   // On indique la page consultée dans le contexte
   const { setPage } = useContext(PageContext);
   useEffect(() => {
      setPage('error');
   }, []);

   return (
      <div>
         <Header />
         <main className="main--error">
            <div className="main--div">
               <img
                  className="main--div--img"
                  src={QuatreCentQuatre}
                  alt="404"></img>
               <p className="main--div--texte">
                  Oups! La page que <br className="main--div--texte--br"></br>
                  vous demandez n'existe pas.
               </p>
            </div>
            <Link className="main--link" to="/">
               Retourner sur la page d’accueil
            </Link>
         </main>
      </div>
   );
}

export default Error;
