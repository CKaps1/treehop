import { Avatar, Box, Button, Flex } from "@chakra-ui/react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import React from "react";
import { useState } from "react";

const MatchCarousel = (props) => {
  const [matches, setMatches] = useState(props.avatars);
  const handlePrevious = () => {
    const newMatchArrangment = matches.map((item, index) => {
      return matches[index + 1 > 2 ? 0 : index + 1];
    });
    setMatches(newMatchArrangment);
    console.log(matches);
  };
  const handleNext = () => {
    const newMatchArrangment = matches.map((item, index) => {
      return matches[index - 1 < 0 ? 2 : index - 1];
    });
    setMatches(newMatchArrangment);
    console.log(matches);
  };
  return (
    // need to pass icon sources to the avatars from props
    <Flex w="100vh">
      <FaArrowAltCircleLeft className="left-arrow" onClick={handlePrevious} />
      {matches.map((item) => {
        return <Avatar src={item} />;
      })}
      <FaArrowAltCircleRight className="right-arrow" onClick={handleNext} />
    </Flex>
  );
};

export default MatchCarousel;
