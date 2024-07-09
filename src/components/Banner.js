// Importation du hook useContext
import { useContext } from 'react';
// Importation du contexte créé
import { PageContext } from '../utils/context/index';
import '../styles/banner.scss';

function Banner({ image }) {
   // On utilise le contexte pour savoir quelle page est consultée
   const { page } = useContext(PageContext);
   return (
      <section
         // Le className de la balise dépend de la page consultée
         className={
            page === 'home' ? 'banner banner__home' : ' banner banner__apropos'
         }>
         <img className="banner--img" src={image} alt="Nature" />
         {
            // Si la page consultée est la page d'accueil, alors on ajoute une balise h1
            page === 'home' && (
               <h1 className="banner--titre">
                  {' '}
                  Chez vous, <br className="banner--titre--br"></br> partout et
                  ailleurs
               </h1>
            )
         }
         <div className="banner--background"></div>
      </section>
   );
}

export default Banner;
