/** librairies */
import React from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
/** files */
import chest from "../../styles/assets/chest.png";
import fortune from "../../styles/assets/fortune.png";
import gold from "../../styles/assets/gold.png";
import thinking from "../../styles/assets/thinking.png";

const Explanation = () => {
  return (
    <Flex
      id="explanation"
      minH="100vh"
      flexDirection="column"
      bg="color.dark"
      textAlign="center"
    >
      <Box py={20}>
        <Text as="b" textStyle="subtitle__light">
          How CBT works
        </Text>
        <Text textStyle="p__light">
          CBT builds state of the art liquid staking protocols to grow the
          staking economy
        </Text>
      </Box>
      <Box>
        <Flex justifyContent="space-around">
          <Box w="20%">
            <Box py={12} px={40}>
              <img src={chest} alt="logo_chest" />
            </Box>
            <Text as="b" textStyle="h1__light" lineHeight={3}>
              Stake
            </Text>
            <Text textStyle="p__light">
              CBT lets users stake their assets for daily staking rewards. User
              can stake any amount of tokens.
            </Text>
          </Box>
          <Box w="20%">
            <Box py={12} px={40}>
              <img src={gold} alt="logo_gold" />
            </Box>
            <Text as="b" textStyle="h1__light" lineHeight={3}>
              Rewards
            </Text>
            <Text textStyle="p__light">
              Staking CBT grants you daily rewards depending on total supply
            </Text>
          </Box>
          <Box w="20%">
            <Box py={12} px={40}>
              <img src={fortune} alt="logo_fortune" />
            </Box>
            <Text as="b" textStyle="h1__light" lineHeight={3}>
              Mint
            </Text>
            <Text textStyle="p__light">
              When staking CBT you mint staked tokens which are issued 1:1 to
              your initial stake. Your staked tokens can be used across the DeFi
              ecosystem to compound your yield
            </Text>
          </Box>
          <Box w="20%">
            <Box py={12} px={40}>
              <img src={thinking} alt="logo_thinking" />
            </Box>
            <Text as="b" textStyle="h1__light" lineHeight={3}>
              DeFi
            </Text>
            <Text textStyle="p__light">
              CBT lets you use your staked assets to gain yield on top of yield.
              Use your tokens (which earn daily staking rewards) as collateral,
              for lending, yield farming and more.
            </Text>
          </Box>
        </Flex>
      </Box>
      <Flex py={48} flexDirection="column">
        <Text as="b" textStyle="h1__light" lineHeight={3}>
          Ready to start with CBT ?
        </Text>
        <Link style={{ textDecoration: "none" }} to="/guidestep">
          <Button
            textStyle="h2__dark"
            mt={8}
            py={5}
            px={12}
            border="none"
            borderRadius="2xl"
            bg="color.light"
            _hover={{
              color: "color.light",
              bg: "color.dark",
              border: "1px solid color.light",
            }}
            cursor="pointer"
          >
            Quick Step
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Explanation;
