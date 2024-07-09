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
         {
            // Si le logement a plusieurs photos à afficher
            NbPictures !== 1 && (
               <img
                  className="slideShow--arrowLeft"
                  src={ArrowLeft}
                  alt="précedent"
                  onClick={() => {
                     // On parcourt les photos du logement présentes dans le fichier JSON
                     logementConsulte.pictures.map((element, index) =>
                        element === img[0]
                           ? // Si l'image affichée n'est pas la première du caroussel
                             index > 0
                              ? // Alors on affiche l'image précédente
                                setImg([logementConsulte.pictures[index - 1]])
                              : // Sinon, on affiche la dernière image du caroussel
                                setImg([
                                   logementConsulte.pictures[NbPictures - 1],
                                ])
                           : null
                     );
                  }}></img>
            )
         }

         {
            // Si le logement a plusieurs photos à afficher
            NbPictures !== 1 && (
               <img
                  className="slideShow--arrowRight"
                  src={ArrowRight}
                  alt="suivant"
                  onClick={() => {
                     // On parcourt les photos du logement présentes dans le fichier JSON
                     logementConsulte.pictures.map((element, index) =>
                        element === img[0]
                           ? // Si l'image affichée n'est pas la dernière du caroussel
                             index !== NbPictures - 1
                              ? // Alors on affiche l'image suivante
                                setImg([logementConsulte.pictures[index + 1]])
                              : // Sinon, on affiche la première image du caroussel
                                setImg([logementConsulte.pictures[0]])
                           : null
                     );
                  }}></img>
            )
         }
         {
            // On parcourt les photos du logement présentes dans le fichier JSON
            logementConsulte.pictures.map((element, index) =>
               element === img[0] ? (
                  // Si le logement a plusieurs photos à afficher
                  NbPictures !== 1 ? (
                     <p
                        key={`compteur--${index}`}
                        className="slideShow--compteur">
                        {index + 1} / {NbPictures}
                     </p>
                  ) : null
               ) : null
            )
         }
      </div>
   );
}

export default SlideShow;
