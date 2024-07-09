import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ArrowLeft from '../assets/arrow-left.svg';
import ArrowRight from '../assets/arrow-right.svg';
import kasaList from '../datas/kasaList.json';
import '../styles/slideShow.scss';

function SlideShow() {
   // On récupère l'id du logement indiquée dans l'URL
   const { logementId } = useParams();

   // On récupère l'objet du logement consultée depuis kasaList
   const logementConsulte = kasaList.find(
      (logement) => logement.id === logementId
   );

   // Cette variable correspond à l'image à afficher sur le caroussel
   const [img, setImg] = useState([logementConsulte.pictures[0]]);

   // NbPictures stocke le nombre d'images que ce logement possède
   const NbPictures = logementConsulte.pictures.length;

   return (
      <div className="slideShow">
         <img className="slideShow--img" src={img} alt="logement"></img>
         {
            // Si le logement a plusieurs photos à afficher
            NbPictures !== 1 && (
               // Alors on ajoute la flèche (gauche) pour naviguer entre les images
               <img
                  className="slideShow--arrow slideShow--arrowLeft"
                  src={ArrowLeft}
                  alt="précedent"
                  // Au clic sur la flèche gauche
                  onClick={() => {
                     // On parcourt les photos du logement
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
               // Alors on ajoute la flèche (droite) pour naviguer entre les images
               <img
                  className="slideShow--arrow slideShow--arrowRight"
                  src={ArrowRight}
                  alt="suivant"
                  // Au clic sur la flèche droite
                  onClick={() => {
                     // On parcourt les photos du logement
                     logementConsulte.pictures.map((element, index) =>
                        // On recherche l'image affichée parmi les images de l'objet
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
            // On parcourt les photos du logement présentes dans l'objet logementConsulte
            logementConsulte.pictures.map((element, index) =>
               // On recherche l'image affichée parmi les images de l'objet
               element === img[0] ? (
                  // Si le logement a plusieurs photos à afficher
                  NbPictures !== 1 ? (
                     // Alors on affiche un compteur
                     <p
                        key={`compteur--${index}`}
                        className="slideShow--compteur">
                        {index + 1} / {NbPictures}
                     </p>
                  ) : // Si le logement n'a qu'une seule image alors nous n'affichons pas de compteur
                  null
               ) : null
            )
         }
      </div>
   );
}

export default SlideShow;
