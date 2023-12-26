import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  Text,
  textDecoration,
} from "@chakra-ui/react";
import MatchCarousel from "../../components/MatchCarousel";

const Match = () => {
  return (
    <Flex
      h="100vh"
      bgGradient="linear(to-b, #E0F4FF, #E3BCD6)"
      direction="column"
    >
      <Text
        ml="auto"
        mr="4"
        mt="4"
        color="#4A4A4A"
        as="a"
        href="/quiz"
        _hover={{ textDecoration: "underline" }}
      >
        Changed your mind about something? Retake the quiz {">"}
      </Text>
      <Heading ml="5" mt="5rem" fontWeight="bold" color="#474747">
        Your Matches
      </Heading>
      <MatchCarousel
        avatars={[
          "https://bit.ly/dan-abramov",
          "https://bit.ly/kent-c-dodds",
          "https://bit.ly/ryan-florence",
        ]}
      />
    </Flex>
  );
};

export default Match;
