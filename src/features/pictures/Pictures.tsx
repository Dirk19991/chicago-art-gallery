import { useAppSelector } from '../../app/store';
import PictureElement from './pictureElement/PictureElement';
import { StyledPictures } from './PicturesStyles';

function Pictures() {
  const pictures = useAppSelector((state) => state.pictures.pictureLinks);

  return (
    <>
      <StyledPictures>
        {pictures.map((pic, index) => (
          <PictureElement
            artist={pic.artist}
            title={pic.title}
            key={index}
            src={pic.link}
            alt='painting'
          />
        ))}
      </StyledPictures>
      <div style={{ height: '10vh', width: '100%' }}></div>
    </>
  );
}
export default Pictures;
