import React from "react";
import {
  useRadio,
  Box,
  HStack,
  Flex,
  Text,
  useRadioGroup,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";

const colors = ["#E89494", "#F2B796", "#EFDC99", "#DEF599", "#ADF59A"];
const API = "https://4r8i9z3ua8.execute-api.ca-central-1.amazonaws.com";

const LikertRadio = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  return (
    <VStack as="label" w="70px" justifyContent="center">
      <input {...getInputProps()} />
      <Box
        {...getCheckboxProps()}
        cursor="pointer"
        rounded="full"
        bg="grey"
        _focus={{
          bg: colors[props.value + 2],
        }}
        m="auto"
        h={10}
        w={10}
        border="5px solid"
        borderColor="#5B5B5B"
      ></Box>
      <Text>{props.children}</Text>
    </VStack>
  );
};

export const Likert = (props) => {
  const handleChange = (value) => {
    console.log(`value changed to ${value}`);
    localStorage.setItem("resultClicked", value);
    console.log(localStorage.getItem("resultClicked"));
    //call store function here
    axios.post(API, value);
  };

  const { getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: "0",
    onChange: handleChange,
  });

  return (
    <Flex className="likert" justifyContent="center" w="100%">
      <Flex direction="column" w="60%">
        <Text m="auto">{props.question}</Text>
        <HStack
          className="myhstack"
          {...getRootProps()}
          justifyContent="space-around"
        >
          {props.responses.map((element) => {
            return (
              <LikertRadio {...getRadioProps({ value: element.value })}>
                {element.text}
              </LikertRadio>
            );
          })}
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Likert;
