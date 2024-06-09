import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import BannerImg from '../assets/apropos.png';
import { PageContext } from '../utils/context/index';
import { useContext, useEffect } from 'react';

function Apropos() {
   const { setPage, page } = useContext(PageContext);
   useEffect(() => {
      setPage(page === 'home' ? 'apropos' : 'apropos');
   }, []);

   return (
      <div className="App">
         <Header />
         <main className="main">
            <Banner image={BannerImg} />
         </main>
         <Footer />
      </div>
   );
}

export default Apropos;
