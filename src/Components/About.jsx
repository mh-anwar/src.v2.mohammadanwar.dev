import { Box, Image, Text, useMediaQuery } from '@chakra-ui/react';
import Hacker from '../assets/hacker.jpg';
import RealHacker from '../assets/realHacker.jpg';

export default function About() {
  const [isMobile] = useMediaQuery('(max-width: 700px)');
  const [isTablet] = useMediaQuery('(max-width: 1000px)');
  return (
    <>
      <Text fontSize="5xl">The Beginning</Text>
      <Box>
        <Text fontSize="lg">
          Ever since I can remember, I've been using computers, whether it was
          to make slideshows or watch movies and shows. I got into programming
          in grade 8, which is when I first started learning Python{' '}
          <i>the Hard Way</i>.
        </Text>
        <Image />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          margin: '1em',
          gap: '2em',
        }}
      >
        <Box>
          <Text fontSize="5xl">The Journey</Text>
          <Text fontSize="lg">
            Unfortunately, I thought programming would be full of hacking, black
            screens and a guy with a hoodie and gave up. About a year later, I
            got back into programming when I discovered HTML and started
            learning JavaScript and CSS.
          </Text>
        </Box>

        <figure>
          <Image
            maxWidth={isMobile ? '50vw' : '30vw'}
            maxHeight={isMobile ? '50vw' : '30vw'}
            borderRadius="lg"
            sx={{ aspectRatio: 1, objectFit: 'cover' }}
            src={Hacker}
            flex="10"
          />
          <figcaption>What I Thought Programming Was</figcaption>
        </figure>
      </Box>
      <Text fontSize="5xl">The Present</Text>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          margin: '1em',
          gap: '2em',
        }}
      >
        <Text fontSize="lg">
          Two years later, I havent just explored HTML, CSS and JavaScript, I've
          learned React, Angular, Java, Swing UI, Python and so much more.
          Today, I use Linux and code at night!
        </Text>
        <figure>
          <Image
            maxWidth={isMobile ? '50vw' : '30vw'}
            maxHeight={isMobile ? '50vw' : '30vw'}
            borderRadius="lg"
            sx={{ aspectRatio: 1, objectFit: 'cover' }}
            src={RealHacker}
            flex="10"
          />
          <figcaption>What Programming Really Is (My Current Setup)</figcaption>
        </figure>
      </Box>
    </>
  );
}
