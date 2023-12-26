import React from "react";
import {
  Flex,
  Box,
  Text,
  Button,
  List,
  ListItem,
  Show,
} from "@chakra-ui/react";
import { useState } from "react";

const ThreadsPane = () => {
  const [minimized, setMinimized] = useState(false);

  const handleMinimize = (e) => {
    setMinimized(!minimized);
  };

  return (
    <Show breakpoint="(min-width: 785px)">
      <Flex className="threads-container" h="100%" w="auto">
        {minimized && (
          <Flex
            direction="column"
            w="10rem"
            bgColor="#F1F1F1"
            h="100%"
            borderTopRightRadius="15px"
            borderBottomRightRadius="15px"
          >
            Your Threads
          </Flex>
        )}
        <Box
          className="minimizer"
          onClick={handleMinimize}
          my="auto"
          bgColor="#8dbbe3"
          h="8%"
          w="1rem"
          borderTopRightRadius={5}
          borderBottomRightRadius={5}
        ></Box>
      </Flex>
    </Show>
  );
};

export default ThreadsPane;
