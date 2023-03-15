import { Box, Image, Text, useMediaQuery } from '@chakra-ui/react';
import About from './About';
import MyPicture from '../assets/mohammad.jpg';
import Skills from './Skills';

export default function Main() {
  const [isMobile] = useMediaQuery('(max-width: 700px)');
  const [isTablet] = useMediaQuery('(max-width: 1000px)');
  const panelStyle = {
    height: '90vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    scrollSnapAlign: 'start',
    scrollSnapStop: 'always',
    alignItems: 'right',
    textOverflow: 'ellipsis',
  };

  const mainPanel = {
    height: '90vh',
    width: '100%',
    display: 'flex',
    flexDirection: isTablet ? 'column' : 'row',
    justifyContent: 'center',
    alignContent: 'center',
    placeContent: 'center',
    alignSelf: 'center',
    scrollSnapAlign: 'start',
    scrollSnapStop: 'always',
    alignItems: 'center',
    gap: '5em',
  };

  return (
    <Box
      sx={{
        width: '100%',
        color: 'cyan.300',
        paddingLeft: isTablet ? '1em' : '15rem',
        paddingRight: isTablet ? '1em' : '15rem',
        display: 'flex',
        flexFlow: 'row wrap',
        scrollSnapType: 'y mandatory',
        overflowY: 'scroll',
        maxHeight: '90vh',
        alignItems: 'right',
        animation: 'fade-in 2s ease-in-out forwards',
        animationDelay: '2s',
        opacity: 0,

        '@keyframes fade-in': {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      }}
    >
      <Box sx={mainPanel}>
        <div flex="90">
          <Text fontSize="clamp(1rem, 2vw, 1.5rem)">Hey, I'm</Text>
          <Text fontSize="clamp(2rem, 5vw, 4rem)">
            <b>Mohammad Anwar</b>
          </Text>

          <Skills />
        </div>
        <Image
          loading="eager"
          src={MyPicture}
          maxWidth={isMobile ? '50vw' : '30vw'}
          maxHeight={isMobile ? '50vw' : '30vw'}
          borderRadius="lg"
          sx={{ aspectRatio: 1, objectFit: 'cover' }}
        />
      </Box>
      <Box sx={panelStyle}>
        <About />
      </Box>
      <Box sx={panelStyle}>
        <Text fontSize="5xl">How I Started</Text>
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
