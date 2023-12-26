import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const searchbar = definePartsStyle({
  field: {
    _focus: {
      bgGradient: "linear(to-l, #E0F4FF, #E3BCD6)",
      color: "white",
    },
    background: "#EDECEC",
    color: "#5e5e5e",
  },
});

export const inputStyle = defineMultiStyleConfig({
  variants: { searchbar },
});
