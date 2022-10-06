/** librairies */
import React from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
/** files */
import logo from "../../styles/assets/Logo.png";

const Card = () => {
  return (
    <Flex
      minH="md"
      w="xs"
      px={7}
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
      border="1px solid black"
      borderRadius="2xl"
      background="color.dark"
      boxShadow="5px 5px 5px -5px"
      transition="0.1s"
      _hover={{ transform: "scale(1.01)" }}
    >
      <Box>
        <Box py={4} px={28}>
          <img src={logo} alt="logo_ethers" width="36px" />
        </Box>
        <Text as="b" textStyle="h3__light" lineHeight={3}>
          Ethereum
        </Text>
        <Text textStyle="p__light">
          Stake any amount of ETH and earn daily staking rewards. Put your
          staked ETH to work across DeFi to compound your yield.
        </Text>
      </Box>
      <Flex gap={8}>
        <Box w="50%">
          <Text as="b" textStyle="h3__light" color="lightgreen">
            5.0%
          </Text>
          <Text textStyle="p__light">APR</Text>
          <a style={{ textDecoration: "none" }} href="https://ethereum.org/fr/">
            <Button
              mt={8}
              px={2.5}
              py={5}
              borderRadius="2xl"
              cursor="pointer"
              textStyle="h4__light"
              bg="color.dark"
              _hover={{
                color: "color.dark",
                bg: "color.light",
                border: "1px solid color.dark",
              }}
            >
              Learn More
            </Button>
          </a>
        </Box>
        <Box w="50%">
          <Text as="b" textStyle="h3__light" color="lightgreen">
            $5,927,058,693
          </Text>
          <Text textStyle="p__light">Staked</Text>
          <Link style={{ textDecoration: "none" }} to="/stake">
            <Button
              mt={8}
              px={2.5}
              py={5}
              borderRadius="2xl"
              cursor="pointer"
              textStyle="h4__dark"
              border="1px solid var(--secondary-color)"
              bg="color.light"
              _hover={{
                color: "color.light",
                bg: "color.dark",
                border: "1px solid color.light",
              }}
            >
              Stake Now
            </Button>
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Card;
