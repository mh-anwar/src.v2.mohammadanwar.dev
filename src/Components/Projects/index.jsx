import { Box } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';
import Quibble from '../../assets/quibble.png';
import GPTDetector from '../../assets/gptdetector.png';
import Symbar from '../../assets/symbar.png';

export default function Project({ sx }) {
  const ProjectList = {
    'Quibble: A Real Marketplace': {
      image: Quibble,
      techUsed: ['React', 'Node.js', 'Heroku', 'Deta'],
      description:
        'Quibble is a platform that connects online buyers to online sellers. Buyers can range from people who enjoy the art of haggling, to money-conscious individuals.',
      num: 1,
      githubLink: 'https://github.com/mh-anwar/quibble',
      liveDemoLink: 'https://quibble.anwar.app',
    },
    'GPT Detector For StackOverflow': {
      image: GPTDetector,
      techUsed: ['HTML', 'CSS', 'JavaScript', 'Chat GPT', 'Web Extensions'],
      description: `GPT Detector uses Chat GPT to generate answers for StackOverflow questions, and determine similiarity of other answers.
      While you are browsing questions on StackOverflow, ChatGPT sums up all the answers with it's own response, saving you time.`,
      num: 0,
      githubLink: null,
      liveDemoLink:
        'https://chrome.google.com/webstore/detail/gpt-detector-for-stackove/lblhlbnnagmgddncifjahdigccdjndmn',
    },
    Symbar: {
      image: Symbar,
      techUsed: ['HTML', 'CSS', 'JavScript', 'Web Extensions'],
      description: `A toolbar to easily access symbols and accents. 
      Initially developed for students who had to search up symbols each time they had to use them,
      this extensions lets you add your own and use pre-added symbols and accents.`,
      num: 1,
      githubLink: 'https://github.com/mh-anwar/symbar',
      liveDemoLink:
        'https://chrome.google.com/webstore/detail/symbar-accents-symbols-ma/hljljfcdpdhjnclioogdnekngnnfhnnk',
    },
  };

  return (
    <Box sx={{ ...sx, flexDirection: 'column', alignItems: 'center' }}>
      {Object.entries(ProjectList).map(([title, project]) => (
        // Spread syntax is so cool
        <ProjectCard key={title} title={title} {...project} />
      ))}
    </Box>
  );
}
