import { Box, Image, Text, useMediaQuery } from '@chakra-ui/react';
import Hacker from '../assets/hacker.jpg';
import RealHacker from '../assets/realHacker.png';

export default function About({ sx }) {
  const [isMobile] = useMediaQuery('(max-width: 700px)');
  const [isTablet] = useMediaQuery('(max-width: 1000px)');
  return (
    <Box
      sx={{
        ...sx,
        width: 'full',
        textAlign: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Text width={isMobile ? '80vw' : '60vw'} fontSize="5xl">
        The Beginning
      </Text>
      <Text width={isMobile ? '80vw' : '60vw'} fontSize="lg">
        Ever since I can remember, I've been using computers, whether it was to
        make slideshows or watch movies and shows. I got into programming in
        grade 8, which is when I first started learning Python{' '}
        <i>the Hard Way</i>.
      </Text>

      <Text width={isMobile ? '80vw' : '60vw'} fontSize="5xl">
        The Journey
      </Text>
      <Text width={isMobile ? '80vw' : '60vw'} fontSize="lg">
        Unfortunately, I thought programming would be full of hacking, matrix
        black screens and a hacker with a hoodie. Eventually, I gave up because
        I didn't think it was interesting enough. About a year later, I stumbled
        upon HTML and was completely blown away by the possibilities it offered.
        Before long, I started learning JavaScript and CSS and was working on a
        Chat Application.
      </Text>

      <Text width={isMobile ? '80vw' : '60vw'} fontSize="5xl">
        The Present
      </Text>
      <Text width={isMobile ? '80vw' : '60vw'} fontSize="lg">
        Two years later, I havent just explored HTML, CSS and JavaScript, I've
        learned React, Angular, Java, Swing UI, Python and so much more. Today,
        I use Linux and code at night!
      </Text>
      <Box
        sx={{
          display: 'flex',
          flexFlow: isMobile ? 'column wrap' : 'row nowrap',
          gap: '3em',
          margin: '3em',
        }}
      >
        <div>
          <Image
            maxWidth={isMobile ? '50vw' : '30vw'}
            maxHeight={isMobile ? '50vw' : '30vw'}
            borderRadius="lg"
            sx={{ display: 'inline', aspectRatio: 1, objectFit: 'cover' }}
            src={Hacker}
            flex="10"
          />
          <Text>What I Thought Programming Was</Text>
        </div>
        <div>
          <Image
            maxWidth={isMobile ? '50vw' : '30vw'}
            maxHeight={isMobile ? '50vw' : '30vw'}
            borderRadius="lg"
            sx={{ aspectRatio: 1, objectFit: 'cover' }}
            src={RealHacker}
            flex="10"
          />
          <Text>What Programming Really Is</Text>
        </div>
      </Box>
    </Box>
  );
}
