import React from "react";
import {
  Text,
  Flex,
  Heading,
  Box,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Spacer,
  Textarea,
  CloseButton,
} from "@chakra-ui/react";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Container } from "../store.js";

const PostContainer = () => {
  const newPostCollapsed = Container((state) => state.newPostCollapsed);
  const flipNewPostCollapsed = Container((state) => state.flipNewPostCollapsed);
  const newPostTitle = Container((state) => state.newPostTitle);
  const newPostBody = Container((state) => state.newPostBody);

  const handlePostBodyChange = (e) => {
    let inputValue = e.target.value;
    Container.setState({ newPostBody: inputValue });
    console.log(newPostBody);
  };

  const handlePostTitleChange = (e) => {
    let inputValue = e.target.value;
    Container.setState({ newPostTitle: inputValue });
    console.log(newPostTitle);
  };

  return (
    <Box
      className="post-container"
      bgColor="#F6F6F6"
      h="100%"
      pt="1%"
      pl="1%"
      pr="1%"
      minW="400px"
      w="100%"
      mr="2%"
      ml="2%"
      overflowX="hidden"
      overflowY="auto"
      borderTopRadius="15px"
      sx={{ "scrollbar-width": "none" }}
    >
      <InputGroup>
        <Input variant="searchbar" h="30px" borderRadius="25px" />
        <InputRightElement children={<SearchIcon />} />
      </InputGroup>
      <Box
        className="new-post-box"
        bgColor="#EDECEC"
        borderRadius="15px"
        w="100%"
        mt="2%"
      >
        {newPostCollapsed && (
          <Flex
            className="new-post-header"
            bgColor="#E6E6E6"
            borderRadius="15px"
            h="13%"
          >
            <Heading m="2%" fontSize="18" color="#5e5e5e" padding="0.25rem">
              Have something to share? Post about it
            </Heading>
            <Spacer />
            <IconButton
              variant="ghost"
              isRound="true"
              my="auto"
              mx="2%"
              icon={<AddIcon color="#474747" />}
              onClick={flipNewPostCollapsed}
            />
          </Flex>
        )}
        {!newPostCollapsed && (
          <Flex direction="column">
            <Flex bgColor="#E6E6E6" borderRadius="15px">
              <Input
                placeholder="Title"
                m="3"
                value={newPostTitle}
                onChange={handlePostTitleChange}
              />
              <CloseButton
                my="auto"
                mx="2%"
                isRound="true"
                onClick={flipNewPostCollapsed}
                variant="ghost"
              />
            </Flex>
            <Box className="new-post-body">
              <Textarea
                value={newPostBody}
                onChange={handlePostBodyChange}
                placeholder="Unleash your thoughts >:)"
                borderRadius="15px"
                colorScheme="whiteAlpha"
              />
            </Box>
          </Flex>
        )}
      </Box>
      <Box bgColor="#EDECEC" borderRadius="15px" p="2%" w="100%" mt="2%">
        <Heading fontSize="24" color="#1B1B1B">
          Post
        </Heading>
        <Text color="#5e5e5e">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Box>
      <Box bgColor="#EDECEC" borderRadius="15px" p="2%" w="100%" mt="2%">
        <Heading fontSize="24" color="#1B1B1B">
          Post
        </Heading>
        <Text color="#5e5e5e">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Box>
      <Box bgColor="#EDECEC" borderRadius="15px" p="2%" w="100%" mt="2%">
        <Heading fontSize="24" color="#1B1B1B">
          Post
        </Heading>
        <Text color="#5e5e5e">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Box>
      <Box bgColor="#EDECEC" borderRadius="15px" p="2%" w="100%" mt="2%">
        <Heading fontSize="24" color="#1B1B1B">
          Post
        </Heading>
        <Text color="#5e5e5e">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Box>
      <Box bgColor="#EDECEC" borderRadius="15px" p="2%" w="100%" mt="2%">
        <Heading fontSize="24" color="#1B1B1B">
          Post
        </Heading>
        <Text color="#5e5e5e">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Box>
    </Box>
  );
};

export default PostContainer;
