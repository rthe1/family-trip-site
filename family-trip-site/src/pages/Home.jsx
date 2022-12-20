import React from 'react'

import {
  Box,
  Flex,
  Image,
  Link,
  NavLink,
  Text,
  useColorMode
} from '@chakra-ui/react';

const Home = () => {
  const { colorMode } = useColorMode();
  const color = { light: 'blue.500', dark: 'yellow.400' };
  const bg = { light: 'gray.50', dark: 'gray.800' };

  return (
    <Box bg={bg[colorMode]} color={color[colorMode]}>
      <Flex as='nav' align='center' justify='space-between'>
        <Flex align='center'>
          <Image
            size='50px'
            src='https://via.placeholder.com/50x50'
            alt='Logo'
          />
          <Text ml={2} fontSize='xl'>
            Jamaican App
          </Text>
        </Flex>
        <Box>
          <NavLink as={Link} to='/about' fontSize='lg'>
            About
          </NavLink>
          <NavLink as={Link} to='/information' fontSize='lg'>
            Information
          </NavLink>
          <NavLink as={Link} to='/news' fontSize='lg'>
            Important News
          </NavLink>
          <NavLink as={Link} to='/attendees' fontSize='lg'>
            Attendees
          </NavLink>
        </Box>
      </Flex>
      <Box mt={4}>
        <Text fontSize='2xl'>
          Dwyer-Samuels Family Reunion Vacation
        </Text>
      </Box>
    </Box>
  );
}

export default Home;
