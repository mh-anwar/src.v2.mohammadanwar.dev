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
      <Box sx={{ userSelect: 'none' }}>
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
              backgroundImage: 'linear-gradient(to right, #F05F40, black)',
              backgroundSize: '200% auto',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'textclip 5s linear infinite',
              '@keyframes textclip': {
                from: {
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
      </Box>

      <Box
        borderRadius="lg"
        sx={{
          width: isMobile ? '50vw' : '30vw',
          height: isMobile ? '50vw' : '30vw',
          borderRadius: 'lg',
          backgroundImage: `url(${MyPicture}), url(${MyPicture})`,
          backgroundSize: 'cover',
          backgroundPosition: '0px 0px, 1px 1px',
          filter:
            'grayscale(15%) contrast(110%) brightness(90%) drop-shadow(0px 0px 20px #1D3557)',
          transition: 'filter 1s ease-in-out, transform .3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.2)',
            filter: 'brightness(80%) drop-shadow(0px 0px 50px #1D3557)',
          },
        }}
      />
    </Box>
  );
}
