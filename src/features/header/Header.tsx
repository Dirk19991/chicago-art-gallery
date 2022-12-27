import { StyledHeader } from './HeaderStyles';
import { Button } from './button/Button';
import { Flex } from '../../components/Flex';

function Header() {
  return (
    <Flex direction='column' gap='10px'>
      <StyledHeader>Chicago Art Gallery</StyledHeader>
      <Button />
    </Flex>
  );
}
export default Header;
