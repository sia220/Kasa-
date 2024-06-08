import "../styles/card.scss"

function Card({titre, image}){
   return(
    <article className="article">
        <img className="article--img" src={image} alt="Logement"  />
          <p className="article--titre" >{titre}</p>
    </article>
   ) 
}

export default Card