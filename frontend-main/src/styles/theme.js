import { extendTheme } from "@chakra-ui/react";
import { ButtonStyle as Button } from "./components/buttonStyle";
import { inputStyle as Input } from "./components/inputStyle";

export const TreeHopTheme = extendTheme({
  colors: {},
  fonts: {
    body: "DM Sans",
  },
  components: {
    Button,
    Heading: {
      baseStyle: {
        fontWeight: "regular",
      },
    },
    Input,
    IconButton: {
      bg: "none",
    },
  },
  styles: {
    global: {
      "*::selection": {
        background: "pink",
      },
    },
  },
});
