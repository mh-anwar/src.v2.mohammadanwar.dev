import { Text } from '@chakra-ui/react';

export default function Loader() {
  return (
    <Text
      fontSize="9xl"
      sx={{
        margin: 'auto',
        fontFamily: 'Courier New, Courier, monospace',
        fontWeight: 300,
        display: 'flex',
        height: '100vh',
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        animation: 'fade 2s forwards',
        overflowX: 'none',
        overflowY: 'none',
        '@keyframes fade': {
          '0%': {
            opacity: 0,
          },
          '25%': {
            opacity: 0.7,
          },
          '50%': {
            opacity: 1,
          },
          '75%': {
            opacity: 0.7,
          },
          '100%': {
            opacity: 0,
          },
        },
      }}
    >
      M
    </Text>
  );
}
