import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Header from './Components/Header';
import Loader from './Components/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, '5000');

  return (
    <>
      {loading && <Loader />}
      <Header />
      <About />
    </>
  );
}

export default App;
