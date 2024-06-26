import { useState } from 'react';
import ArrowTop from '../assets/arrow-top.svg';
import ArrowBottom from '../assets/arrow-bottom.svg';
import '../styles/collapse.scss';
import PropTypes from 'prop-types';

function Collapse({ titre, description }) {
   const [isClose, setIsClose] = useState(true);
   return (
      <div className="collapse">
         <div className="collapse--haut">
            <h2 className="collapse--haut--titre">{titre}</h2>
            <img
               className="collapse--haut--img"
               onClick={() => setIsClose(isClose === true ? false : true)}
               alt="flèche pour ouvrir et fermer"
               src={isClose === true ? ArrowBottom : ArrowTop}></img>
         </div>
         {isClose === false && (
            <div className="collapse--bas">
               <p className="collapse--bas--desc">{description}</p>
            </div>
         )}
      </div>
   );
}

Collapse.propTypes = {
   titre: PropTypes.string,
   description: PropTypes.string,
};

export default Collapse;
