import '../styles/gallery.scss';
import kasaList from '../datas/kasaList.json';
import { Link } from 'react-router-dom';

function Gallery() {
   return (
      <section className="galerie">
         {kasaList.map((element, index) => (
            <Link to={`/logement/${element.id}`}>
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
         ))}
      </section>
   );
}

export default Gallery;
