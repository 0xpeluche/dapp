/** librairies */
import React from "react";
import { Box, Flex, Text, Center, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
/** files */
import ethers from "../../styles/assets/ethers.png";
import twitter from "../../styles/assets/twitter.png";
import github from "../../styles/assets/github.png";
import instagram from "../../styles/assets/instagram.png";
import telegram from "../../styles/assets/telegram.png";

const Main = () => {
  return (
    <Box>
      <Flex minH="75vh" justifyContent="space-around" alignItems="center">
        <Center alignItems="start" flexDirection="column">
          <Text as="b" textStyle="title__dark" lineHeight={2}>
            Liquidity for staked assets
          </Text>
          <Text textStyle="h1__dark" lineHeight={2}>
            Simplified and secure staking for digital assets
          </Text>
          <Link style={{ textDecoration: "none" }} to="/stake">
            <Button
              textStyle="h2__light"
              mt={8}
              py={5}
              px={20}
              border="none"
              borderRadius="2xl"
              bg="color.dark"
              _hover={{
                color: "color.dark",
                bg: "color.light",
              }}
              cursor="pointer"
            >
              Stake Now
            </Button>
          </Link>
        </Center>
        <Flex>
          <Center flex="4">
            <img src={ethers} alt="logo_ethers" width="400px" />
          </Center>
          <Center flex="1">
            <ul style={{ listStyle: "none" }}>
              <li>
                <a href="*">
                  <img src={twitter} alt="logo_twitter" width="24px" />
                </a>
              </li>
              <li>
                <a href="*">
                  <img src={github} alt="logo_github" width="24px" />
                </a>
              </li>
              <li>
                <a href="*">
                  <img src={instagram} alt="logo_instagram" width="24px" />
                </a>
              </li>
              <li>
                <a href="*">
                  <img src={telegram} alt="logo_telegram" width="24px" />
                </a>
              </li>
            </ul>
          </Center>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Main;
