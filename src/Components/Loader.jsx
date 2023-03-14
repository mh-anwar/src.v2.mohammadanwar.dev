import { Text } from '@chakra-ui/react';

export default function Loader() {
  return (
    <>
      <Text
        fontSize="9xl"
        sx={{
          margin: 'auto',
          font: 'Raleway, sans-serif',
          fontWeight: 300,
          width: '100vw',
          display: 'flex',
          height: '100vh',
          alignSelf: 'center',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
          animation: 'fade 5s forwards',

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
    </>
  );
}
/*

    sx={{
                    "@keyframes lights": {
      "0%": {
        color: hsl(230, 40%, 80%),
        textShadow:"0 0 1em hsla(320, 100%, 50%, 0.2),0 0 0.125em hsla(320, 100%, 60%, 0.3),-1em -0.125em 0.5em hsla(40, 100%, 60%, 0),1em 0.125em 0.5em hsla(200, 100%, 60%, 0)",
      },

      "30%": {
        color: hsl(230, 80%, 90%),
        textShadow:
          "0 0 1em hsla(320, 100%, 50%, 0.5),0 0 0.125em hsla(320, 100%, 60%, 0.5),-0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4)",
      },

      "40%": {
        color: hsl(230, 100%, 95%),
        textShadow:"0 0 1em hsla(320, 100%, 50%, 0.5),0 0 0.125em hsla(320, 100%, 90%, 0.5),-0.25em -0.125em 0.125em hsla(40, 100%, 60%, 0.2),0.25em 0.125em 0.125em hsla(200, 100%, 60%, 0.4)",
      },

      "70%": {
        color: hsl(230, 80%, 90%),
        textShadow:"0 0 1em hsla(320, 100%, 50%, 0.5),0 0 0.125em hsla(320, 100%, 60%, 0.5),0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),-0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4)"
      },

     "100%": {
        color: hsl(230, 40%, 80%),
        textShadow:"0 0 1em hsla(320, 100%, 50%, 0.2),0 0 0.125em hsla(320, 100%, 60%, 0.3),1em -0.125em 0.5em hsla(40, 100%, 60%, 0),-1em 0.125em 0.5em hsla(200, 100%, 60%, 0)"
      }
    },
          margin: 'auto',
          fontSize: '3.5rem',
          fontWeight: 300,
          animation: 'lights 5s 750ms linear infinite',
        }}

*/
