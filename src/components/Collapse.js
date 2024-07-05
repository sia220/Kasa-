import { useState } from 'react';
import ArrowTop from '../assets/arrow-top.svg';
import ArrowBottom from '../assets/arrow-bottom.svg';
import '../styles/collapse.scss';
import PropTypes from 'prop-types';
import { PageContext } from '../utils/context/index';
import { useContext } from 'react';

function Collapse({ titre, description }) {
   const { page } = useContext(PageContext);
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
            <h2 className="collapse--haut--titre">{titre}</h2>
            <img
               className="collapse--haut--img"
               onClick={() => setIsClose(isClose === true ? false : true)}
               alt="flèche pour ouvrir et fermer"
               src={isClose === true ? ArrowBottom : ArrowTop}></img>
         </div>
         {isClose === false && (
            <div
               className={
                  page === 'housing'
                     ? 'collapse--bas collapse--bas__housing'
                     : 'collapse--bas collapse--bas__apropos'
               }>
               {
                  // Si la props description est une chaîne de caractères, alors on utilise une balise p
                  typeof description === 'string' ? (
                     <p className="collapse--bas--desc">{description}</p>
                  ) : (
                     // Si la props description est un tableau, alors on utilise une balise ul et chaque élement est placé dans une balise li.
                     <ul className="collapse--bas--desc">
                        {description.map((element, index) => (
                           <li key={`equipements--${index}`}>{element}</li>
                        ))}
                     </ul>
                  )
               }
            </div>
         )}
      </div>
   );
}

Collapse.propTypes = {
   titre: PropTypes.string,
};

export default Collapse;
