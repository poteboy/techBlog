import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../src/styles';

const withChakra = (StoryFn: Function) => {
  return (
    <ChakraProvider theme={theme}>
      <div id='story-wrapper'>
        <StoryFn />
      </div>
      <link
        href='https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;700&display=swap'
        rel='stylesheet'
      />
    </ChakraProvider>
  );
};

export const decorators = [withChakra];
