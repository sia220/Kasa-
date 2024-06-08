import "../styles/home.scss"
import Header from "../components/Header";
import Footer from "../components/Footer"
import Gallery from "../components/Gallery"
import Banner from "../components/Banner"

function Home() {
  return (
    <div className="App">
      <Header/>
      <main className="main">
        <Banner/>
        <Gallery/>
      </main>
      <Footer/>
    </div>
  );
}

export default Home;
