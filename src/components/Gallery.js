import "../styles/gallery.scss"
import  kasaList from "../datas/kasaList.json"

function Gallery(){
   return(
      <section className="galerie"  >
      {kasaList.map((element, index) => (
         <article className="article" id={index}>
            <img className="article--img" src={element.cover} alt="Logement"  />
            <p className="article--titre" >{element.title}</p>
         </article>
         ))}
      </section>
   )
}

export default Gallery