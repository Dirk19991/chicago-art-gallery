import { useAppDispatch, useAppSelector } from '../../app/store';
import PictureElement from './pictureElement/PictureElement';
import { StyledPictures } from './PicturesStyles';
import { loadMore } from './picturesSlice';
import InfiniteScroll from 'react-infinite-scroll-component';

function Pictures() {
  const pictures = useAppSelector((state) => state.pictures.pictureLinks);
  const currentPage = useAppSelector(
    (state) => state.pictures.currentPage
  ) as number;

  const dispatch = useAppDispatch();

  const loadMoreHandler = () => {
    dispatch(loadMore(currentPage + 1));
  };

  const data = pictures.map((pic, index) => (
    <PictureElement
      artist={pic.artist}
      title={pic.title}
      key={index}
      src={pic.link}
      alt='painting'
    />
  ));

  return (
    <>
      <InfiniteScroll
        dataLength={pictures.length}
        next={loadMoreHandler}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <StyledPictures>{...data}</StyledPictures>
      </InfiniteScroll>
    </>
  );
}
export default Pictures;
