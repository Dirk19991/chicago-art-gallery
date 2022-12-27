import styled from 'styled-components';

interface StyledButtonProps {
  onClick: () => void;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: block;
  justify-content: center;
  border: 2px solid black;
  padding: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
  &:hover:active {
    opacity: 1;
  }
`;
