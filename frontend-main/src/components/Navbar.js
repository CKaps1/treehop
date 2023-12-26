import React from "react";
import {
  Flex,
  Text,
  Heading,
  IconButton,
  Spacer,
  Show,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Avatar,
} from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import { logout } from "../firebase.js";
import { Link } from "react-router-dom";
import TreeHopLogo from "./TreeHopLogo.js";
import SplashButton from "./SplashButton.js";

const Navbar = () => {
  return (
    <Flex className="navbar" w="100%" bgColor="#F6F6F6" h="13%">
      <TreeHopLogo alignSelf="center" ml="2%" boxSize={70} />
      <Heading alignSelf="center" pl="10px" fontSize="36" color="#2e2e2e">
        TreeHop
      </Heading>
      <Spacer minW="2rem" />
      <Flex ml="auto" my="auto">
        <Show breakpoint="(min-width: 540px)">
          <SplashButton
            color1="#FCA3BD"
            color2="#B7D0F5"
            my="auto"
            mr="4"
            pr="3%"
            pl="3%"
            as="a"
            href="/quiz"
          >
            <Text py="2" px="4">
              Quiz
            </Text>
          </SplashButton>
        </Show>

        <IconButton
          variant="ghost"
          as="a"
          my="auto"
          aria-label="notifications"
          icon={<BellIcon />}
          size="lg"
          isRound="true"
        />
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<Avatar size="sm" />}
            my="auto"
            variant="ghost"
            isRound="true"
            mr="2"
          />
          <MenuList>
            <Link to={"/login"}>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Navbar;
