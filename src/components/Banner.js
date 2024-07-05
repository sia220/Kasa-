import '../styles/banner.scss';
import { PageContext } from '../utils/context/index';
import { useContext } from 'react';

function Banner({ image }) {
   const { page } = useContext(PageContext);
   return (
      <section
         className={
            page === 'home' ? 'banner banner__home' : ' banner banner__apropos'
         }>
         <img className="banner--img" src={image} alt="Nature" />
         {page === 'home' && (
            <h1 className="banner--titre">
               {' '}
               Chez vous, <br className="banner--titre--br"></br> partout et
               ailleurs
            </h1>
         )}
         <div className="banner--background"></div>
      </section>
   );
}

export default Banner;
