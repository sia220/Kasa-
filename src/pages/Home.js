import '../styles/home.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Banner from '../components/Banner';
import BannerImg from '../assets/banner-home.png';
import { PageContext } from '../utils/context/index';
import { useContext, useEffect } from 'react';

function Home() {
   const { page, setPage } = useContext(PageContext);
   useEffect(() => {
      setPage(page === 'apropos' ? 'home' : 'home');
   }, []);

   return (
      <div className="App">
         <Header />
         <main className="main">
            <Banner image={BannerImg} />
            <Gallery />
         </main>
         <Footer />
      </div>
   );
}

export default Home;
