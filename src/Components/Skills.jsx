import { Input, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

export default function Skills() {
  let skills = [
    'I am a Web Extension Developer',
    'I am a Node + Express Developer',
    'I use React.js and Chakra UI',
    'I am a Fullstack Developer',
    'I am a Frontend Developer',
    'I am a Backend Developer',
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <Input
      fontSize="clamp(1.5rem, 2.5vw, 2.5rem)"
      sx={{
        border: 'none',
        borderRight: '1px',
        borderRadius: 0,
        padding: 0,
        animation: 'typing 2s steps(22), blink .5s step-end infinite alternate',
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
    ></Input>
  );
}
