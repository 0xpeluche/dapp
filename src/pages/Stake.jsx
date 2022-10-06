/** librairies */
import React from "react";
import { Container } from "@chakra-ui/react";
/** files */
import Navbar from "../components/Navbar";
import StakeForm from "../components/stakeComponents/StakeForm";

const Stake = () => {
  return (
    <Container textAlign="center">
      <Navbar />
      <StakeForm />
    </Container>
  );
};

export default Stake;
