import { Link } from 'react-router-dom';
import QuatreCentQuatre from '../assets/404.svg';
import Header from '../components/Header';
import '../styles/error.scss';
import { PageContext } from '../utils/context/index';
import { useContext, useEffect } from 'react';

function Error() {
   const { setPage, page } = useContext(PageContext);
   useEffect(() => {
      setPage(page === 'error');
   }, []);
   return (
      <div>
         <Header />
         <main className="main--error">
            <div className="main--div">
               <img src={QuatreCentQuatre} alt="404"></img>
               <p className="main--div--p">
                  Oups! La page que vous demandez n'existe pas.
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
