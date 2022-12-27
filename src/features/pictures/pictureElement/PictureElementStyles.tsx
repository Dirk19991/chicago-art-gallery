import styled from 'styled-components';

export const StyledPictureElement = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  &:hover {
    transform: scale(1.5);
    z-index: 2;
  }
  &:hover {
    transform: scale(1.5);
  }
  transition: transform ease-in 0.5s;
  cursor: pointer;
`;
