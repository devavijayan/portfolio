import React from 'react'
import {Button} from "@chakra-ui/button";
import{useColorMode} from "@chakra-ui/color-mode";
import {Image} from "@chakra-ui/image";
import {Circle, Stack, Flex, Box, Text} from "@chakra-ui/layout";
import {useMediaQuery} from "@chakra-ui/media-query"
import profile from '../images/profile.jpg'


const Header = () => {

    const {colorMode} = useColorMode()

    const isDark = colorMode==="dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
    {isNotSmallerScreen && (
        <Circle 
    position="absolute"
    bg="blue.100"
    opacity="0.1"
    w="300px"
    h="300px"
    alignSelf="self-end"
    />
    )}
    <Flex 
    direction={isNotSmallerScreen ? "row":"column"}
    spacing="200px"
    p={isNotSmallerScreen?"32":0}
    alignSelf="flex-start"
    >
         <Box mt={isNotSmallerScreen?0:16} alignSelf="flex-start">
            <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
            <Text fontSize="6xl" fontWeight="bold" 
            bgGradient="linear(to-r, cyan.400,blue.500,purple.600)"
            bgClip="text"
            >Deva Vijayan</Text>
            <Text color={isDark ? "gray.200" : "gray.500"} fontWeight="semibold" fontSize="xl">Front End Web Developer | 
            Passionate about creating innovative solutions | 
            Fresh Graduate seeking opportunities"</Text>
            <Button mt={8} colorScheme='blue'>
            Hire Me</Button>
        </Box>
        <Image 
        mt={isNotSmallerScreen?"0":"12"}
        mb={isNotSmallerScreen?"0":"12"}
        alignSelf="center"
        borderRadius="full"
        backgroundColor="transparent"
        boxShadow="lg"
        boxSize="300px"
        zIndex="1"
        src={profile}
        />
    </Flex>
    </Stack>
  );
}

export default Header
