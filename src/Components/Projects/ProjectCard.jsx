import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  Flex,
  Image,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';

export default function ProjectCard({
  title,
  image,
  techUsed,
  description,
  num,
}) {
  const [isMobile] = useMediaQuery('(max-width: 900px)');

  return (
    <Card
      flexDirection={{ base: 'column', md: num === 1 ? 'row' : 'row-reverse' }}
      minW={isMobile ? '80px' : '800px'}
      maxW={isMobile ? '80vw' : '1000px'}
      mx="auto"
      my="4"
      borderRadius="md"
      boxShadow="sm"
      overflow="hidden"
      position="relative"
    >
      <Image
        src={image}
        alt={title}
        objectFit="cover"
        width={isMobile ? '100%' : '50%'}
        borderRadius="md"
        height={{ base: 'full', md: 'full' }}
      />

      <Box width={{ base: 'full' }} px="4" py="4">
        <Text fontSize="xl" fontWeight="semibold" mb="2">
          {title}
        </Text>
        <Box mb="2">
          {techUsed.map((tech) => (
            <Badge key={tech} colorScheme="blue" mr="1">
              {tech}
            </Badge>
          ))}
        </Box>
        <Text>{description}</Text>
        <Flex
          mt={4}
          flexFlow="row wrap"
          sx={{
            justify: { base: 'space-between', md: 'flex-start' },
            flexFlow: 'row wrap',
            gap: '1em',
          }}
        >
          <Button
            colorScheme="blue"
            mr={4}
            onClick={() => window.open(githubLink, '_blank')}
          >
            View Source Code
          </Button>
          <Button
            colorScheme="green"
            onClick={() => window.open(liveDemoLink, '_blank')}
          >
            View Live Demo
          </Button>
        </Flex>
      </Box>
    </Card>
  );
}
