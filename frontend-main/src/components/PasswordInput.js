import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import React from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const PasswordInput = (props) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <InputGroup size="md" {...props}>
      <Input pr="4.5rem" type={show ? "text" : "password"} {...props} />
      <InputRightElement width="4.5rem" {...props}>
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? <ViewOffIcon /> : <ViewIcon />}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default PasswordInput;
