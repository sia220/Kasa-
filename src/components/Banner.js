import '../styles/banner.scss';
import { PageContext } from '../utils/context/index';
import { useContext } from 'react';

function Banner({ image }) {
   const { page } = useContext(PageContext);
   return (
      <section className="banner">
         <img className="banner--img" src={image} alt="Nature" />
         {page === 'home' && (
            <h1 className="banner--titre"> Chez vous, partout et ailleurs</h1>
         )}
         <div className="banner--background"></div>
      </section>
   );
}

export default Banner;
