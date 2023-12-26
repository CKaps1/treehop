import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../firebase";
import Navbar from "../components/Navbar";
import FriendsPane from "../components/FriendsPane";
import ThreadsPane from "../components/ThreadsPane";
import PostContainer from "../components/PostContainer";
import { Flex } from "@chakra-ui/react";

const Home = () => {
  const currentuser = useAuth();
  if (!currentuser && false) {
    return (
      <div>
        this is a home page
        <Link to={"/login"}>Login</Link>
        <Link to={"/signup"}>Signup</Link>
      </div>
    );
  } else {
    return (
      <Flex
        className="home"
        position="fixed"
        h="100%"
        w="100%"
        bgGradient="linear(to-b, #E0F4FF, #E3BCD6)"
        direction="column"
      >
        <Navbar />
        <Flex className="home-body" h="100%" w="100%" mt="2%" overflow="hidden">
          <ThreadsPane />
          <PostContainer />
          <FriendsPane />
        </Flex>
      </Flex>
    );
  }
};

export default Home;
