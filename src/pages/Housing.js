import Header from '../components/Header';
import Footer from '../components/Footer';
import SlideShow from '../components/SlideShow';
import { PageContext } from '../utils/context/index';
import { useContext, useEffect } from 'react';
import '../styles/housing.scss';

function Housing() {
   const { setPage } = useContext(PageContext);
   useEffect(() => {
      setPage('housing');
   }, []);

   return (
      <div>
         <Header />
         <main className="main--housing">
            <SlideShow />
         </main>
         <Footer />
      </div>
   );
}

export default Housing;
