import { defineStyleConfig } from "@chakra-ui/react";

export const ButtonStyle = defineStyleConfig({
  baseStyle: {},
  sizes: {},
  variants: {
    splash: {
      borderRadius: "15px",
      color: "white",
      // note to self, figure out how to add custom prop to specify gradient
      // also add on hover effect that inverts color and bg color
      // also add click effect
    },
  },
  defaultProps: {},
});
