import './style.css';
import { ReactComponent as Seta } from 'assets/imagens/Seta.svg';
const ButtonIcon = () => {
  return (
    <>
    <div className='btn-container'>
        <button className="btn btn-primary ">
        <h6>INICIE AGORA A SUA BUSCA</h6>
        </button>
        <div className='btn-icon-container'>
          <Seta />
        </div>
    </div>
    </>
  )
}

export default ButtonIcon