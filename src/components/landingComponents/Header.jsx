/** librairies */
import React from "react";
import { Box } from "@chakra-ui/react";
/** files */
import Navbar from "../Navbar";
import Main from "./Main";
import Subheader from "./Subheader";

const Header = () => {
  return (
    <Box>
      <Navbar />
      <Main />
      <Subheader />
    </Box>
  );
};

export default Header;
