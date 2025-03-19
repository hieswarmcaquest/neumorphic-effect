import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import App from './App';

// Define the pulse animation for the glowing effect
const pulse = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.3), 0 0 15px rgba(255, 255, 255, 0.1);
  }
  50% {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.2);
  }
  100% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.3), 0 0 15px rgba(255, 255, 255, 0.1);
  }
`;

// Define a custom theme for neumorphic effect
const theme = extendTheme({
  shadows: {
    neumorphic: '8px 8px 16px #b3b9c5, -8px -8px 16px #ffffff',
    neumorphicInset: 'inset 2px 2px 4px #b3b9c5, inset -2px -2px 4px #ffffff',
  },
  colors: {
    neumorphic: {
      background: '#e0e5ec',
      text: '#6d8299',
      accent: '#ff6f61',
      mint: '#d4f4e2',
    },
  },
  components: {
    Box: {
      baseStyle: {
        borderRadius: '20px',
        background: '#e0e5ec',
      },
    },
    Button: {
      baseStyle: {
        borderRadius: '10px',
        boxShadow: '8px 8px 16px #b3b9c5, -8px -8px 16px #ffffff',
        background: '#e0e5ec',
        color: '#6d8299',
        _hover: {
          boxShadow: '4px 4px 8px #b3b9c5, -4px -4px 8px #ffffff',
        },
        _active: {
          boxShadow: 'inset 2px 2px 4px #b3b9c5, inset -2px -2px 4px #ffffff',
        },
      },
      variants: {
        navButton: {
          w: '40px',
          h: '40px',
          borderRadius: '50%',
          position: 'relative',
          overflow: 'visible',
          transition: 'box-shadow 0.3s ease',
          '&.shimmer': {
            animation: `${pulse} 2s ease-in-out infinite`, // Pulsating glow effect
          },
          _hover: {
            animation: `${pulse} 1s ease-in-out infinite`, // Faster pulse on hover
          },
          _active: {
            boxShadow: 'inset 2px 2px 4px #b3b9c5, inset -2px -2px 4px #ffffff',
          },
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);