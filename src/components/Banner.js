import '../styles/banner.scss'
import HomeImg from "../assets/home.png"

function Banner(){
    return (
        <section className="banner">
        <img className="banner--img" src={HomeImg} alt="Nature"  />
        <h1 className="banner--titre" > Chez vous, partout et ailleurs</h1>
      </section>
    )
}

export default Banner