import ContentLoader from 'react-content-loader';

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox='0 0 400 460'
    backgroundColor='#ffffff'
    foregroundColor='#ecebeb'
  >
    <rect x='0' y='60' rx='2' ry='2' width='100%' height='300' />
  </ContentLoader>
);

export default MyLoader;
