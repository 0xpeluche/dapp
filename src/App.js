/** librairies */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
/** files */
import Landing from "./pages/Landing";
import Stake from "./pages/Stake";
import Charts from "./pages/Charts";
import About from "./pages/About";
import Developper from "./pages/Developper";
import Step from "./pages/Step";
import Login from "./pages/Login";
import theme from "./styles/theme/theme";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/stake" element={<Stake />}></Route>
          <Route path="/charts" element={<Charts />}></Route>
          <Route path="/dashboard" element={<Developper />}></Route>
          <Route path="/guidestep" element={<Step />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
