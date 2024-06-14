import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

   const { logementId } = useParams();

   const logementConsulte = kasaList.find(
      (logement) => logement.id === logementId
   );

   const range = [1, 2, 3, 4, 5];

   return (
      <div>
         <Header />
         <main className="main--housing">
            <SlideShow />
            <section
               style={{
                  display: 'flex',
                  justifyContent: 'space-between',
               }}>
               <div>
                  <h1>{logementConsulte.title}</h1>
                  <p>{logementConsulte.location}</p>
                  <div
                     style={{
                        display: 'flex',
                     }}>
                     {logementConsulte.tags.map((element, index) => (
                        <div
                           style={{
                              border: 'solid black 1px',
                              background: '#FF6060',
                              color: 'white',
                              borderRadius: '10px',
                              padding: ' 4px 20px',
                           }}>
                           {element}
                        </div>
                     ))}
                  </div>
               </div>
               <div>
                  <div style={{ display: 'flex' }}>
                     <p>{logementConsulte.host.name}</p>
                     <div
                        style={{
                           borderRadius: '50%',
                           background: '#C4C4C4',
                           height: '64px',
                           width: '64px',
                        }}></div>
                  </div>
                  <div>
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
            <section>
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
