import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import App from './App';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    body: 'CascadiaCode, sans-serif',
    heading: 'CascadiaCode, serif',
  },
  styles: {
    global: () => ({
      body: {
        bg: 'linear-gradient(to left bottom, hsl(230, 40%, 12%), hsl(230, 20%, 7%))',
        color: 'hsl(230, 100%, 95%)',
      },
    }),
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
