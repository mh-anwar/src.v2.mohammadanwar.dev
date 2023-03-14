import { Box, Heading } from '@chakra-ui/react';

export default function Header() {
  return (
    <Box
      sx={{
        width: '100%',
        color: 'cyan.500',
        boxShadow: '0px 5px 20px 10px #000000',
        borderRadius: 'md',
        padding: '5',
      }}
    >
      <Heading as="h1" size="lg">
        Anwar
      </Heading>
    </Box>
  );
}
