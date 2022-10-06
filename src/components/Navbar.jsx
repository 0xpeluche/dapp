/** librairies */
import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Flex, Box, Text, Center } from "@chakra-ui/react";
/** files */
import logo from "../styles/assets/Logo.png";

const Navbar = () => {
  return (
    <Flex
      minHeight="10vh"
      alignItems="center"
      justifyContent="space-around"
      bg="color.dark"
    >
      <Center>
        <img src={logo} alt="logo" width="36px" />
        <Text as="b" textStyle="p__light" letterSpacing={8} lineHeight={6}>
          CBT
        </Text>
      </Center>
      <Box>
        <Breadcrumb as="b" textStyle="p__light" lineHeight="6" separator="-">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#network">Networks</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#explanation">User guide</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Charts</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Developper</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/about">About</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box>
        <Breadcrumb as="b" textStyle="p__light" lineHeight="6" separator="-">
          <BreadcrumbItem>
            <BreadcrumbLink href="/login">Login</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/login">Profile</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </Flex>
  );
};

export default Navbar;
