import React from "react";
import {
  Flex,
  Box,
  Text,
  Button,
  List,
  ListItem,
  Show,
  Hide,
  Avatar,
} from "@chakra-ui/react";
import { useState } from "react";
import { Panels } from "../store.js";

const FriendsPane = () => {
  //test
  const min = Panels((state) => state.flipMinimized);

  // const handleMinimize = (e) => {
  //   setMinimized(!minimized);
  // };

  return (
    <Show breakpoint="(min-width: 785px)">
      <Flex className="friendsContainer" h="100%" w="auto">
        <Box
          className="minimizer"
          onClick={min}
          my="auto"
          bg="#EF78CE"
          h="8%"
          w="1rem"
          borderTopLeftRadius={5}
          borderBottomLeftRadius={5}
        ></Box>
        {min && (
          <Flex
            direction="column"
            w="10rem"
            bgColor="#F1F1F1"
            borderTopLeftRadius="15px"
            borderBottomLeftRadius="15px"
          >
            <Button
              h="7%"
              m="5%"
              fontSize="24"
              variant="splash"
              bgGradient="linear(to-b, #EFB178, #EF78CE)"
              as="a"
              href="/match-results"
            >
              Match
            </Button>
            <Text fontSize="24px" ml="4">
              Friends
            </Text>
            <List ml="4">
              <ListItem my="2">
                <Avatar size="xs" mr="2" />
                Jane Doe
              </ListItem>
              <ListItem my="2">
                <Avatar size="xs" mr="2" />
                Jane Doe
              </ListItem>
              <ListItem my="2">
                <Avatar size="xs" mr="2" />
                Jane Doe
              </ListItem>
              <ListItem my="2">
                <Avatar size="xs" mr="2" />
                Jane Doe
              </ListItem>
              <ListItem my="2">
                <Avatar size="xs" mr="2" />
                Jane Doe
              </ListItem>
            </List>
          </Flex>
        )}
      </Flex>
    </Show>
  );
};

export default FriendsPane;
