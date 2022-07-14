import ContentLoader from 'react-content-loader';
function RowContentLoader(props: any) {
  return (
    <ContentLoader
      speed={2}
      width={'100%'}
      height={'100%'}
      viewBox='0 0 400 160'
      {...props}
    >
      <rect x='50' y='6' rx='4' ry='4' width='343' height='38' />
      <rect x='8' y='6' rx='4' ry='4' width='35' height='38' />
      <rect x='50' y='55' rx='4' ry='4' width='343' height='38' />
      <rect x='8' y='55' rx='4' ry='4' width='35' height='38' />
      <rect x='50' y='104' rx='4' ry='4' width='343' height='38' />
      <rect x='8' y='104' rx='4' ry='4' width='35' height='38' />
    </ContentLoader>
  );
}
export default RowContentLoader;
