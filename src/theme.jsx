// theme.jsx
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#FF4C61",  // Red color used in buttons and highlights
    secondary: "#0E2368", // Dark blue used for headings
    textGray: "#6B7280",  // Light gray for text
    white: "#FFFFFF",
    grayLinear1: "#1E2A5D0A",
    grayLinear2: "#303E820A",
    grayLinear3: "#3C509D0A",
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "secondary",
      },
      h1: {
        fontWeight: "bold",
      },
      h2: {
        fontWeight: "medium",
      },
    },
  },
});

export default theme;
