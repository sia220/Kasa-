import { Link } from 'react-router-dom';
// Importation du tableau de données JSON
import kasaList from '../datas/kasaList.json';
import '../styles/gallery.scss';

function Gallery() {
   return (
      <section className="galerie">
         {
            // Pour chaque objet (logement) du tableau kasaList on crée un article
            kasaList.map((element, index) => (
               <Link to={`/logement/${element.id}`} key={`logement--${index}`}>
                  <article className="article" id={index}>
                     <img
                        className="article--img"
                        src={element.cover}
                        alt="Logement"
                     />
                     <p className="article--titre">{element.title}</p>
                     <div className="article--background"></div>
                  </article>
               </Link>
            ))
         }
      </section>
   );
}

export default Gallery;
