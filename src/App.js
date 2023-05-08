import React from 'react';
import './App.css';
import {VStack,Heading,Spacer,Flex} from "@chakra-ui/layout"
import { IconButton }from '@chakra-ui/button';
import {FaSun, FaMoon, FaLinkedin, FaGithub,} from "react-icons/fa";
import {useColorMode} from "@chakra-ui/color-mode"
import Header from './component/Header';
import Social from './component/Social';
import Profile from './component/Profile';
function App() {
const {colorMode, toggleColorMode} = useColorMode();

const isDark = colorMode==="dark";
  return (
    <VStack p="5">
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="bold" color="cyan.400">
          Deva Vijayan
        </Heading>
        <Spacer />
        <IconButton 
        ml={2}
          icon={<FaLinkedin/>}
          isRound="true"
          onClick={()=> window.open("https://www.linkedin.com/in/deva-vijayan-6125651a2/")}
       />
        <IconButton 
        ml={2}
          icon={<FaGithub/>}
          isRound="true"
          onClick={()=>window.open("https://github.com/devavijayan")}
        />
        < IconButton
        ml={8}
          icon={isDark?<FaSun/>:<FaMoon/>}
          isRound="true"
          onClick={toggleColorMode}
        />
      </Flex>
      <Header />
      <Social />
      <Profile />
    </VStack>
  );
}

export default App;
