import kasaList from '../datas/kasaList.json';
import { useParams } from 'react-router-dom';
import ArrowLeft from '../assets/arrow-left.svg';
import ArrowRight from '../assets/arrow-right.svg';
import { useState } from 'react';
import '../styles/slideShow.scss';

function SlideShow() {
   const { logementId } = useParams();

   const logementConsulte = kasaList.find(
      (logement) => logement.id === logementId
   );

   const [img, setImg] = useState([logementConsulte.pictures[0]]);
   const NbPictures = logementConsulte.pictures.length;

   return (
      <div className="slideShow">
         <img className="slideShow--background" src={img} alt="logement"></img>
         <img
            className="slideShow--arrowLeft"
            src={ArrowLeft}
            alt="précedent"
            onClick={() => {
               logementConsulte.pictures.map((element, index) =>
                  element === img[0]
                     ? index > 0
                        ? setImg([logementConsulte.pictures[index - 1]])
                        : null
                     : null
               );
            }}></img>
         <img
            className="slideShow--arrowRight"
            src={ArrowRight}
            alt="suivant"
            onClick={() => {
               logementConsulte.pictures.map((element, index) =>
                  element === img[0]
                     ? index !== NbPictures - 1
                        ? setImg([logementConsulte.pictures[index + 1]])
                        : null
                     : null
               );
            }}></img>
         {logementConsulte.pictures.map(
            (element, index) =>
               element === img[0] && (
                  <p className="slideShow--compteur">
                     {index + 1} / {NbPictures}
                  </p>
               )
         )}
      </div>
   );
}

export default SlideShow;
