import { StyledButton } from './ButtonStyles';
import { getHundredPaintings } from '../../pictures/picturesSlice';
import { useAppDispatch, useAppSelector } from '../../../app/store';
import { randomizer } from '../../../utils/randomizer';

export const Button = () => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(
    (state) => state.pictures.status === 'loading'
  );

  const getHundredPaintingsHandler = () => {
    !isLoading && dispatch(getHundredPaintings(randomizer()));
  };

  return (
    <StyledButton onClick={getHundredPaintingsHandler}>
      Click to load images
    </StyledButton>
  );
};
