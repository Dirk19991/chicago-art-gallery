import styled from 'styled-components';

interface FlexProps {
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'center';
  align?: 'flex-start' | 'flex-end' | 'center';
  direction?: 'row' | 'column';
  gap?: string;
  width?: string;
  fw?: string;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${(props) => (props.justify ? props.justify : 'center')};
  align-items: ${(props) => (props.align ? props.align : 'center')};
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  gap: ${(props) => (props.gap ? props.gap : '')};
  width: ${(props) => (props.width ? props.width : '')};
  font-weight: ${(props) => (props.fw ? props.fw : '')};
`;
