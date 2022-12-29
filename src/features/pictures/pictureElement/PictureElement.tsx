import { memo } from 'react';
import { Flex } from '../../../components/Flex';
import { StyledPictureElement } from './PictureElementStyles';

interface PictureElementProps {
  artist: string;
  title: string;
  src: string;
  alt: string;
}

function PictureElement({ src, alt, artist, title }: PictureElementProps) {
  return (
    <Flex direction='column' width={'20%'} gap='10px' justify='flex-start'>
      <a href={src}>
        <StyledPictureElement alt={alt} src={src} />
      </a>

      <Flex fw='700'>{artist}</Flex>
      <Flex>{title}</Flex>
    </Flex>
  );
}
export default memo(PictureElement);
