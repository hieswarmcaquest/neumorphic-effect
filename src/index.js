import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import App from './App';

// Define the orbit animation for the shiny effect
const orbit = keyframes`
  0% { transform: rotate(0deg) translateX(20px) rotate(0deg); }
  100% { transform: rotate(360deg) translateX(20px) rotate(-360deg); }
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
          _before: {
            content: '""',
            position: 'absolute',
            w: '8px',
            h: '8px',
            //bg: 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(192, 192, 192, 0.5) 50%, transparent 70%)', // Shiny, metallic effect
            //boxShadow: '0 0 8px rgba(255, 255, 255, 0.8), 0 0 12px rgba(192, 192, 192, 0.5)', // Glow effect
            bg: 'radial-gradient(circle, rgba(255, 215, 0, 0.9) 0%, rgba(255, 165, 0, 0.5) 50%, transparent 70%)', // Gold effect
            boxShadow: '0 0 8px rgba(255, 215, 0, 0.8), 0 0 12px rgba(255, 165, 0, 0.5)', // Gold glow
            borderRadius: '50%',
            opacity: 0, // Hidden by default
            transition: 'opacity 0.3s ease',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          },
          '&.shimmer': {
            _before: {
              opacity: 1,
              animation: `${orbit} 3s linear infinite`, // Orbit around the edge
            },
          },
          _hover: {
            _before: {
              opacity: 1,
              animation: `${orbit} 2s linear infinite`, // Faster orbit on hover
            },
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