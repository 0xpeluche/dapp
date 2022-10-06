// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    color: {
      light: "#e8efff",
      dark: "#393e45",
    },
  },
  textStyles: {
    title__light: {
      color: "#e8efff",
      fontSize: "48px",
      fontFamily: "Manrope",
    },

    subtitle__light: {
      color: "#e8efff",
      fontSize: "4xl",
      fontFamily: "Manrope",
    },

    h1__light: {
      color: "#e8efff",
      fontSize: "2xl",
      fontFamily: "Manrope",
    },

    h2__light: {
      color: "#e8efff",
      fontSize: "xl",
      fontFamily: "Manrope",
    },

    h3__light: {
      color: "#e8efff",
      fontSize: "lg",
      fontFamily: "Manrope",
    },

    h4__light: {
      color: "#e8efff",
      fontSize: "md",
      fontFamily: "Manrope",
    },

    p__light: {
      color: "#e8efff",
      fontSize: "sm",
      fontFamily: "Manrope",
    },

    title__dark: {
      color: "#393e45",
      fontSize: "48px",
      fontFamily: "Manrope",
    },

    subtitle__dark: {
      color: "#393e45",
      fontSize: "4xl",
      fontFamily: "Manrope",
    },

    h1__dark: {
      color: "#393e45",
      fontSize: "2xl",
      fontFamily: "Manrope",
    },

    h2__dark: {
      color: "#393e45",
      fontSize: "xl",
      fontFamily: "Manrope",
    },

    h3__dark: {
      color: "#393e45",
      fontSize: "lg",
      fontFamily: "Manrope",
    },

    h4__dark: {
      color: "#393e45",
      fontSize: "md",
      fontFamily: "Manrope",
    },

    p__dark: {
      color: "#393e45",
      fontSize: "sm",
      fontFamily: "Manrope",
    },
  },
});

export default theme;
