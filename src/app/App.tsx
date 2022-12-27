import { Flex } from '../components/Flex';
import Header from '../features/header/Header';
import Pictures from '../features/pictures/Pictures';

function App() {
  return (
    <>
      <Header />
      <Flex justify='center' align='center'>
        <Pictures />
      </Flex>
    </>
  );
}

export default App;
