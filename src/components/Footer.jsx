/** librairies */
import React from "react";
import { Flex, Text, Center } from "@chakra-ui/react";
/** files */
import logo from "../styles/assets/Logo.png";

const Footer = () => {
  return (
    <Flex minH="5vh" justifyContent="center">
      <Center mr={50}>
        <img src={logo} alt="logo" height="36px" />
        <Text
          color="var(--secondary-color)"
          letterSpacing={8}
          fontSize="14"
          lineHeight="6"
          fontWeight="700"
        >
          CBT
        </Text>
      </Center>
      <Center mx={16}>
        <Text
          color="var(--secondary-color)"
          fontSize="12"
          lineHeight="6"
          fontWeight="700"
        >
          <a href="*">Term of Use</a>
        </Text>
      </Center>
      <Center>
        <Text
          color="var(--secondary-color)"
          fontSize="12"
          lineHeight="6"
          fontWeight="700"
        >
          <a href="*">Privacy Notice</a>
        </Text>
      </Center>
    </Flex>
  );
};

export default Footer;
