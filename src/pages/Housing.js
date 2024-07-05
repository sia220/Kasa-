import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import kasaList from '../datas/kasaList.json';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SlideShow from '../components/SlideShow';
import Collapse from '../components/Collapse';
import { PageContext } from '../utils/context/index';
import StarActive from '../assets/star-active.svg';
import StarInactive from '../assets/star-inactive.svg';
import '../styles/housing.scss';

function Housing() {
   const { setPage } = useContext(PageContext);
   useEffect(() => {
      setPage('housing');
   }, []);

   // On récupère l'id du logement depuis l'URL
   const { logementId } = useParams();

   // On récupère l'objet du logement consulté depuis le fichier JSON
   const logementConsulte = kasaList.find(
      (logement) => logement.id === logementId
   );

   // Si l'id de l'URL ne correspond pas à l'id d'un logement du ficher JSON alors on redirige vers la page d'erreur
   const navigate = useNavigate();
   useEffect(() => {
      logementConsulte === undefined
         ? navigate('*')
         : console.log('on reste sur la page');
   }, [logementConsulte]);

   // Variable qui permet de parcourir les étoiles
   const range = [1, 2, 3, 4, 5];

   // On place la string du nom et prenom dans un tableau où chacun represente un element
   const name = logementConsulte.host.name.split(' ');

   return logementConsulte === undefined ? (
      <Link to="*"></Link>
   ) : (
      <div>
         <Header />
         <main className="main--housing">
            <SlideShow />
            <section className="infos">
               <div className="partie1">
                  <h1 className="partie1--titre">{logementConsulte.title}</h1>
                  <p className="partie1--localisation">
                     {logementConsulte.location}
                  </p>
                  <div className="partie1--tags">
                     {logementConsulte.tags.map((element, index) => (
                        <div
                           key={`etoile--${index}`}
                           className="partie1--tags--tag">
                           {element}
                        </div>
                     ))}
                  </div>
               </div>
               <div className="partie2">
                  <div className="partie2--proprio">
                     <p className="partie2--proprio--nom">
                        {name[0]} <br></br>
                        {name[1]}
                     </p>
                     <div className="partie2--proprio--photo"></div>
                  </div>
                  <div className="partie2--etoiles">
                     {range.map((rangeElem) =>
                        logementConsulte.rating >= rangeElem ? (
                           <img src={StarActive}></img>
                        ) : (
                           <img src={StarInactive}></img>
                        )
                     )}
                  </div>
               </div>
            </section>
            <section className="section_collapses">
               <Collapse
                  titre="Description"
                  description={logementConsulte.description}
               />
               <Collapse
                  titre="Equipements"
                  description={logementConsulte.equipments}
               />
            </section>
         </main>
         <Footer />
      </div>
   );
}

export default Housing;
