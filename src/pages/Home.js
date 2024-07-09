import { useContext, useEffect } from 'react';
import { PageContext } from '../utils/context/index';
import BannerImg from '../assets/banner-home.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Banner from '../components/Banner';
import '../styles/home.scss';

function Home() {
   // On indique la page consultée dans le contexte
   const { setPage } = useContext(PageContext);
   useEffect(() => {
      setPage('home');
   }, []);

   return (
      <div className="App">
         <Header />
         <main className="main--home">
            <Banner image={BannerImg} />
            <Gallery />
         </main>
         <Footer />
      </div>
   );
}

export default Home;
