import { useContext, useState } from 'react';
import { PageContext } from '../utils/context/index';
import ArrowTop from '../assets/arrow-top.svg';
import ArrowBottom from '../assets/arrow-bottom.svg';
import '../styles/collapse.scss';

function Collapse({ titre, description }) {
   // On utilise le contexte pour savoir quelle page est consultée
   const { page } = useContext(PageContext);
   // Cette variable d'état vaut true lorsque le collapse est fermé et false lorsqu'il est ouvert
   const [isClose, setIsClose] = useState(true);

   return (
      <div
         className={
            page === 'housing'
               ? 'collapse collapse__housing'
               : 'collapse collapse__apropos'
         }>
         <div
            className={
               page === 'housing'
                  ? 'collapse--haut collapse--haut__housing'
                  : 'collapse--haut collapse--haut__apropos'
            }>
            <h2
               className={
                  page === 'housing'
                     ? 'collapse--haut--titre collapse--haut--titre__housing'
                     : 'collapse--haut--titre collapse--haut--titre__apropos'
               }>
               {titre}
            </h2>
            <img
               className="collapse--haut--img"
               // Au clic sur la flèche, on passe isClose à true s'il était false et inversement
               onClick={() => setIsClose(isClose === true ? false : true)}
               alt="flèche pour ouvrir et fermer"
               src={isClose === true ? ArrowBottom : ArrowTop}></img>
         </div>
         {
            // Si le collapse est ouvert alors on affiche sa partie basse
            isClose === false && (
               <div
                  className={
                     page === 'housing'
                        ? 'collapse--bas collapse--bas__housing'
                        : 'collapse--bas collapse--bas__apropos'
                  }>
                  {
                     // Si la props description est une chaîne de caractères, alors on utilise une balise p
                     typeof description === 'string' ? (
                        <p
                           className={
                              page === 'housing'
                                 ? 'collapse--bas--desc collapse--bas--desc__housing'
                                 : 'collapse--bas--desc collapse--bas--desc__apropos'
                           }>
                           {description}
                        </p>
                     ) : (
                        // Si la props description est un tableau, alors on utilise une balise ul et chaque élement est placé dans une balise li.
                        <ul
                           className={
                              page === 'housing'
                                 ? 'collapse--bas--desc collapse--bas--desc__housing'
                                 : 'collapse--bas--desc collapse--bas--desc__apropos'
                           }>
                           {description.map((element, index) => (
                              <li key={`equipements--${index}`}>{element}</li>
                           ))}
                        </ul>
                     )
                  }
               </div>
            )
         }
      </div>
   );
}

export default Collapse;
