import { useInView } from 'react-intersection-observer';
import LazyLoad from 'react-lazy-load';
import { useAppSelector } from '../../../app/store';
import { Flex } from '../../../components/Flex';
import Loader from './Loader';
import MyLoader from './Loader';
import { StyledPictureElement } from './PictureElementStyles';

interface PictureElementProps {
  artist: string;
  title: string;
  src: string;
  alt: string;
}

function PictureElement({ src, alt, artist, title }: PictureElementProps) {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const isLoading = useAppSelector(
    (state) => state.pictures.status === 'loading'
  );

  return (
    <Flex direction='column' width={'20%'} gap='10px'>
      {isLoading ? (
        <Loader />
      ) : (
        <LazyLoad offset={50}>
          <StyledPictureElement alt={alt} src={src} />
        </LazyLoad>
      )}

      <Flex fw='700'>{artist}</Flex>
      <Flex>{title}</Flex>
    </Flex>
  );
}
export default PictureElement;
