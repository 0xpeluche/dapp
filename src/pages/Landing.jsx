/** librairies */
import React from "react";
import { Container } from "@chakra-ui/react";
/** files */
import Header from "../components/landingComponents/Header";
import Network from "../components/landingComponents/Network";
import Explanation from "../components/landingComponents/Explanation";

const Landing = () => {
  return (
    <Container px={0} mx={0} maxW="100vw">
      <Header />
      <Network />
      <Explanation />
    </Container>
  );
};

export default Landing;
