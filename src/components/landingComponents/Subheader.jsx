/** librairies */
import React from "react";
import { Flex, Text, Center } from "@chakra-ui/react";

const Subheader = () => {
  return (
    <Flex bg="color.dark" minH="15vh" justifyContent="space-around" px={40}>
      <Center flexDirection="column">
        <Text textStyle="h4__light">Total staking assets</Text>
        <Text as="b" textStyle="h1__light">
          $6,126,578,522
        </Text>
      </Center>
      <Center flexDirection="column">
        <Text textStyle="h4__light">Total rewards paid</Text>
        <Text as="b" textStyle="h1__light">
          $200,684,705
        </Text>
      </Center>
      <Center flexDirection="column">
        <Text textStyle="h4__light">Stakers</Text>
        <Text as="b" textStyle="h1__light">
          195,810
        </Text>
      </Center>
    </Flex>
  );
};

export default Subheader;
