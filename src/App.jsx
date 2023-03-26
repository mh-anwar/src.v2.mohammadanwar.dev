import { useState } from 'react';
import './App.css';
import MainPage from './Components/Main';
import Header from './Components/Header';
import Loader from './Components/Loader';
import { keyframes } from '@emotion/react';
import { useMediaQuery } from '@chakra-ui/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
function App() {
  const [isMobile] = useMediaQuery('(max-width: 800px)');
  const [isLoading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, '2000');

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header isMobile={isMobile} />
          <MainPage isMobile={isMobile} />
        </>
      )}
    </>
  );
}

export default App;
