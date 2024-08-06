import ProductPrice from 'components/productPrice';
import './style.css';
import ComputadorImg from 'assets/imagens/Computador.png';


const ProductCard = () => {
  return (
    <div className='base-card product-card'>
      <div className='card-top-container'>
        <img src={ComputadorImg} alt="Imagem de Computador" />
      </div>
      <div className='card-bottom-container'>
        <h6>Nome do produto</h6>
        <ProductPrice />
      </div>
    </div>
  )
}

export default ProductCard