import { Box, Heading, IconButton, Link } from '@chakra-ui/react';
import { UilGithub, UilLinkedin, UilEnvelope } from '@iconscout/react-unicons';
export default function Header() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '10vh',
        color: 'cyan.500',
        boxShadow: '0px 5px 20px 10px #000000',
        borderRadius: 'md',
        paddingLeft: '5em',
        paddingRight: '5em',
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
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
      <Heading sx={{ userSelect: 'none' }} as="h1" size="lg">
        Anwar
      </Heading>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: 'min-content',
          gap: '1rem',
        }}
      >
        <Link href="https://github.com/mh-anwar" target="_blank">
          <IconButton icon={<UilGithub />} />
        </Link>
        <Link href="https://www.linkedin.com/in/mh-anwar" target="_blank">
          <IconButton icon={<UilLinkedin />} />
        </Link>
        <Link href="mailto: mohammad@anwar.app" target="_blank">
          <IconButton icon={<UilEnvelope />} />
        </Link>
      </Box>
    </Box>
  );
}
