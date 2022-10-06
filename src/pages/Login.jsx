/** librairies */
import React from "react";
import {
  Container,
  Box,
  Text,
  Flex,
  Input,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
/** files */
import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <Container px={0} mx={0} maxW="100vw">
      <Navbar />
      <Flex
        flexDirection="column"
        minH="90vh"
        justifyContent="space-around"
        alignItems="center"
        textAlign="center"
      >
        <Box>
          <Text as="b" textStyle="subtitle__dark" lineHeight={2}>
            Log in to your account
          </Text>
          <Text textStyle="h2__dark">
            Don't have an account? <a href="*">Sign in</a>
          </Text>
        </Box>
        <Flex
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
          w="20%"
          minH="lg"
          bg="color.dark"
          borderRadius="3xl"
          boxShadow="5px 5px 5px -5px"
        >
          <FormControl isRequired>
            <FormLabel
              textAlign="center"
              as="b"
              textStyle="h2__light"
              lineHeight={2}
            >
              Email
            </FormLabel>
            <Input
              textStyle="h3__light"
              w="2xs"
              borderRadius="3xl"
              type="email"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel
              textAlign="center"
              as="b"
              textStyle="h2__light"
              lineHeight={2}
            >
              Password
            </FormLabel>
            <Input
              textStyle="h3__light"
              w="2xs"
              borderRadius="3xl"
              type="password"
            />
          </FormControl>
          <Text textStyle="h3__light">
            <a href="*">Forgot password ?</a>
          </Text>
          <Button
            py={2.5}
            px={10}
            border="none"
            borderRadius="2xl"
            textStyle="h2__dark"
            bg="color.light"
            cursor="pointer"
          >
            Sign In
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Login;
