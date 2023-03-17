import { Box, Input, Image, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import MyPicture from '../assets/mohammad.jpg';
import Frame from '../assets/frame.svg';
export default function Introduction(props) {
  const isMobile = props.isMobile;
  const [index, setIndex] = useState(0);
  let skills = [
    'I am a Web Extension Developer',
    'I am a Node + Express Developer',
    'I use React.js and Chakra UI',
    'I am a Fullstack Developer',
    'I am a Frontend Developer',
    'I am a Backend Developer',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <Box sx={props.sx}>
      <div>
        <Text fontSize="clamp(1rem, 2vw, 1.5rem)">Hey, I'm</Text>
        <Text fontSize="clamp(2rem, 5vw, 4rem)">
          <b>Mohammad Anwar</b>
        </Text>
        <Input
          fontSize="clamp(1.5rem, 2.5vw, 2.5rem)"
          sx={{
            border: 'none',
            borderRight: '1px',
            borderRadius: 0,
            padding: 0,
            animation:
              'typing 2s steps(22), blink .5s step-end infinite alternate',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            '@keyframes typing': {
              from: {
                width: 0,
              },
            },
            '@keyframes blink': {
              '50%': {
                borderRightColor: 'transparent',
              },
            },
          }}
          value={skills[index]}
        />
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
      ></Box>
    </Box>
  );
}
