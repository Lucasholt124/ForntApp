import { ReactComponent as MainImage} from 'assets/imagens/Desenho.svg';
import './style.css';
import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';



const Home = () => {
  return (
      <div className="home-container">
        <div className="home-card base-card">
          <div className="home-content-contenter">
            <div>
              <h1>Conheça melhor catálogo do produto</h1>
              <p>Ajudaremos você a encontrar os melhores produtos disponíveis no mercado.</p>
            </div>
            <div>
              <Link to="/products">
                <ButtonIcon text="Inicie agora a sua busca"/>
              </Link>
            </div>
          </div>
          <div className="home-image-contenter">
            <MainImage />
          </div>
        </div>
      </div>
  )
}

export default Home