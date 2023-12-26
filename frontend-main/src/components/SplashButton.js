import { chakra, Button } from "@chakra-ui/react";
import React from "react";

const SplashButton = (props) => {
  return (
    <Button
      bgGradient={`linear(to-b, ${props.color1}, ${props.color2})`}
      borderRadius="15px"
      color="white"
      fontWeight="bold"
      _hover={{ bgGradient: `linear(to-b, ${props.color2}, ${props.color1})` }}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default SplashButton;
