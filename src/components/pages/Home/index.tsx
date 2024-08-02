import { ReactComponent as MainImage} from 'assets/imagens/Desenho.svg';
import Navbar from "components/Navbar";
import './style.css';
import ButtonIcon from 'components/ButtonIcon';



const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-contenter">
            <div>
              <h1>Conheça melhor catálogo do produto</h1>
              <p>Ajudaremos você a encontrar os melhores produtos disponíveis no mercado.</p>
            </div>
            <ButtonIcon/>
          </div>
          <div className="home-image-contenter">
            <MainImage />

          </div>
        </div>
      </div>

    </>
  )
}

export default Home