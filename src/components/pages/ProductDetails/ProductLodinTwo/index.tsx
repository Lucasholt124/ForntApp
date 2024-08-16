import ContentLoader from 'react-content-loader'

import './style.css';
const ProductLodinTwo = () => (
  <div className='card-loader-container-Tow'>
    <ContentLoader
      width={280}
      height={320}
      viewBox="0 0 320 350"
      backgroundColor="#f5f5f5"
      foregroundColor="#dbdbdb"
      >
      <rect x="0" y="0" rx="3" ry="3" width="8" height="317" />
      <rect x="0" y="0" rx="3" ry="3" width="469" height="8" />
    </ContentLoader>
  </div>
)

ProductLodinTwo.metadata = {
  name: 'Sridhar Easwaran',
  github: 'sridhareaswaran',
  description: 'HelpLinks',
  filename: 'HelpLinksLoader',
}

export default ProductLodinTwo