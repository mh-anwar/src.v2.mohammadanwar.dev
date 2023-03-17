import { Box } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';
import Quibble from '../../assets/quibble.png';
import GPTDetector from '../../assets/gptdetector.png';
export default function Project({ sx }) {
  const ProjectList = {
    'Quibble: A Real Marketplace': {
      image: Quibble,
      techUsed: ['React', 'Node.js', 'Heroku', 'Deta'],
      description:
        'Quibble is a platform that connects online buyers to online sellers. Buyers can range from people who enjoy the art of haggling, to money-conscious individuals.',
      num: 1,
    },
    'GPT Detector For StackOverflow': {
      image: GPTDetector,
      techUsed: ['HTML', 'CSS', 'JavaScript', 'Chat GPT', 'Web Extensions'],
      description:
        'GPT Detector uses Chat GPT to generate answers for StackOverflow questions, and determine similiarity of other answers.',
      num: 0,
    },
    Symbar: {
      image: GPTDetector,
      techUsed: ['HTML', 'CSS', 'JavScript', 'Web Extensions'],
      description: 'A toolbar to easily access symbols and accents.',
      num: 1,
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
