import { useState } from 'react';
import './App.css';
import MainPage from './Components/Main';
import Header from './Components/Header';
import Loader from './Components/Loader';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
function App() {
  const [isLoading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, '2000');

  return (
    <>
      {isLoading && <Loader />}
      <Header />
      <MainPage />
    </>
  );
}

export default App;
