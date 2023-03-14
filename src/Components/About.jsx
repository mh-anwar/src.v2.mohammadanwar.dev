import { Box, Image, Text } from '@chakra-ui/react';
import MyPicture from '../assets/mohammad.jpg';
const panelStyle = {
  height: '90vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  scrollSnapAlign: 'start',
  scrollSnapStop: 'always',
  alignItems: 'right',
};
const mainPanel = {
  height: '90vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'row wrap',
  justifyContent: 'center',
  alignContent: 'center',
  placeContent: 'center',

  alignSelf: 'center',
  scrollSnapAlign: 'start',
  scrollSnapStop: 'always',
  alignItems: 'center',
  gap: '5em',
};
export default function About() {
  return (
    <Box
      sx={{
        width: '100%',
        color: 'cyan.300',
        padding: '15rem',
        display: 'flex',
        flexFlow: 'row wrap',
        scrollSnapType: 'y mandatory',
        overflowY: 'scroll',
        maxHeight: '90vh',
        alignItems: 'right',
      }}
    >
      <Box sx={mainPanel}>
        <div flex="90">
          <Text fontSize="6xl">Hey, I'm</Text>
          <Text fontSize="7xl">
            <b>Mohammad Anwar</b>
          </Text>
          <Text fontSize="3xl">
            Full Stack Developer and Web Extension Enthusiast
          </Text>
        </div>
        <Image
          loading="eager"
          src={MyPicture}
          maxHeight="15em"
          maxWidth="15em"
          flex="10"
          borderRadius="lg"
        />
      </Box>
      <Box sx={panelStyle}>
        <Text fontSize="5xl">How I Started Programming</Text>
        <Text>
          I'm a high school student interested in computers and programming! I
          got into computers and programming back in grade 8, when I first
          started learning Python <i>the Hard Way</i>. Unfortunately, I thought
          programming would be full of hacking, black screens and a guy with a
          hoodie. About a year later, I got back into programming when I
          discovered HTML and since then, I've learned JavaScript, CSS, React,
          Angular and so much more!
        </Text>
      </Box>
      <Box sx={panelStyle}>
        <Text fontSize="5xl">How I Started Programming</Text>
        <Text>
          I'm a high school student interested in computers and programming! I
          got into computers and programming back in grade 8, when I first
          started learning Python <i>the Hard Way</i>. Unfortunately, I thought
          programming would be full of hacking, black screens and a guy with a
          hoodie. About a year later, I got back into programming when I
          discovered HTML and since then, I've learned JavaScript, CSS, React,
          Angular and so much more!
        </Text>
      </Box>
    </Box>
  );
}
