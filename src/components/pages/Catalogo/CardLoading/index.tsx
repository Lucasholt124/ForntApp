import ContentLoader from 'react-content-loader'

const CardLoading = () => (
<div className='card-loader-container'>
    <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#ecebeb"
    foregroundColor="#d6d2d2"
    >
    <rect x="0" y="0" rx="2" ry="2" width="329" height="324" />
    <rect x="0" y="0" rx="2" ry="2" width="329" height="324" />
   </ContentLoader>
</div>
)

CardLoading.metadata = {
  name: 'Hassan Tijani.A',
  github: 'surepeps',
  description: 'Image Grid with Pagination',
  filename: 'ImageGrid',
}

export default CardLoading