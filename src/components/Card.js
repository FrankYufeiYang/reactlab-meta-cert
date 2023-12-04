import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      style={{
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        display: 'block',
      }}
    >
      <Image src={imageSrc} alt='title' borderRadius='0.5rem' />
      <Heading color={'black'} size={'md'} margin={'1rem'}>
        {title}
      </Heading>
      <Text color={'grey'} margin={'1rem'} size={'1x'}>
        {description}
      </Text>
      <Text color={'black'} margin={'1rem'}>
        See more <FontAwesomeIcon icon={faArrowRight} size='1x' />
      </Text>
    </VStack>
  );
};

export default Card;
