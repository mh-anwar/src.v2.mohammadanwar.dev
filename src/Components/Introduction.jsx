import { Box, Input, Image, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import MyPicture from '../assets/mohammad.jpg';
import Frame from '../assets/frame.svg';
export default function Introduction(props) {
  const isMobile = props.isMobile;
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  let skills = [
    'Web Extension Developer',
    'HTML5, CSS, JavaScript',
    'Fullstack Developer',
    'Frontend Developer',
    'React.js and Chakra UI',
    'Backend Developer',
    'Node.js with Express.js',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((currentTextIndex + 1) % skills.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentTextIndex, skills]);

  return (
    <Box sx={props.sx}>
      <div>
        <Text fontSize="clamp(1rem, 2vw, 1.5rem)">Hey, I'm</Text>
        <Text fontSize="clamp(2rem, 5vw, 4rem)">
          <b>Mohammad Anwar</b>
        </Text>
        <Box
          sx={{
            background: 'linear-gradient(to bottom, #F05F40, #bd7706)',
            borderRadius: '0.3em',
            padding: '0.5em',
            width: '90%',
            display: 'flex',
            '.text': {
              display: 'none',
            },

            '.text.active': {
              display: 'block',
              background: 'none',
              backgroundColor: 'none',
              backgroundImage: 'linear-gradient(to right, black, #750b04, red)',
              backgroundSize: '200% auto',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'textclip 5s linear infinite',
              '@keyframes textclip': {
                to: {
                  backgroundPosition: '200% center',
                },
              },
            },
          }}
        >
          {skills.map((text, index) => (
            <Text
              fontSize="clamp(1rem, 2vw, 1.5rem)"
              key={index}
              className={`text ${index === currentTextIndex ? 'active' : ''}`}
            >
              {text}
            </Text>
          ))}
        </Box>
      </div>

      <Box
        borderRadius="lg"
        sx={{
          width: isMobile ? '50vw' : '30vw',
          height: isMobile ? '50vw' : '30vw',
          borderRadius: 'lg',
          backgroundImage: `url(${MyPicture}), url(${MyPicture})`,
          backgroundSize: 'cover',
          backgroundPosition: '0px 0px, 1px 1px',
          transition: 'filter 0.4s ease-in-out, transform .3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.1)',
            filter:
              'drop-shadow(9px 9px 0 #1D3557) hue-rotate(20deg) drop-shadow(5px 5px 0 #1D3557)',
          },
        }}
      />
    </Box>
  );
}
