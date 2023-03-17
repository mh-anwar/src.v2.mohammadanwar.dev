import { Box, useMediaQuery } from '@chakra-ui/react';
import About from './About';
import Introduction from './Introduction';
import Project from './Projects';

export default function Main(props) {
  const isMobile = props.isMobile;
  const [isTablet] = useMediaQuery('(max-width: 1000px)');
  const panelStyle = {
    minHeight: '90vh',
    height: 'fit-content',
    width: '100%',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    textOverflow: 'ellipsis',
    marginTop: '1em',
    marginBottom: '1em',
  };

  const mainPanel = {
    minHeight: '90vh',
    width: '100%',
    display: 'flex',
    flexDirection: isTablet ? 'column' : 'row',
    justifyContent: 'center',
    alignContent: 'center',
    placeContent: 'center',
    alignSelf: 'center',
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
      <Introduction sx={mainPanel} isMobile={isMobile} />

      <About sx={panelStyle} />

      <Project sx={panelStyle} />
    </Box>
  );
}
