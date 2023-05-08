import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { DiReact, DiNodejsSmall, DiJavascript } from "react-icons/di";

const Profile = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      w="100%"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
      p={isNotSmallerScreen?"32":0}
      alignSelf="flex-start"
    >
      <Box alignSelf="center"  px='32' py='16'>
        <Heading fontWeight="bold" color="cyan.500" size="4xl">
          Fresher
        </Heading>
        <Text fontSize="2xl" color="gray.400">
         Passed out in 2020
        </Text>
      </Box>
      <Box alignSelf="center" px="32" py="16">
        <Text fontWeight="bold" fontSize="2xl">
        Through React, I craft seamless user experiences, blending creativity and functionality to bring web applications to life."
        </Text>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={4}>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="blue.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
          >
            <Icon color="white" p="4" w="24" h="24" as={DiReact} />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              React
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            ml={isNotSmallerScreen ? 4 : 0}
            _hover={{ bg: "teal.400" }}
          >
            <Icon color="black" p="4" w="24" h="24" as={DiNodejsSmall} />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              Nodejs
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            ml={isNotSmallerScreen ? 4 : 0}
            _hover={{ bg: "green.400" }}
          >
            <Icon color="black" p="4" w="24" h="24" as={DiJavascript} />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              Javascript
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  )
};

export default Profile;