/** librairies */
import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
/** files */
import Card from "./Card";

const Network = () => {
  return (
    <Flex id="network" minH="100vh" justifyContent="center" textAlign="center">
      <Box py={20}>
        <Text as="b" textStyle="subtitle__dark">
          Supported Network
        </Text>
        <Text textStyle="p__dark">
          CBT lets you stake tokens from many networks. Choose a network below
          to get started.
        </Text>
        <Flex mt={20} justifyContent="center" gap={8}>
          <Card />
          <Card />
          <Card />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Network;
