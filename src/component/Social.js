import React from 'react'
import {Icon} from "@chakra-ui/icon"
import {HStack} from "@chakra-ui/layout";
import { FaLinkedin,FaGithub,FaFacebook,FaInstagram } from 'react-icons/fa';

const Social = () => {
  return (
    <HStack spacing="24">
        <Icon as={FaLinkedin} boxSize={50}/>
        <Icon as={FaGithub} boxSize={50}/>
        <Icon as={FaFacebook} boxSize={50}/>
        <Icon as={FaInstagram} boxSize={50}/>
    </HStack>
  )
}

export default Social
