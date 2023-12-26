import { Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import SplashButton from "../../components/SplashButton";
import { auth, resetPassword } from "../../firebase";
import { fetchSignInMethodsForEmail, EmailAuthProvider } from "firebase/auth";
import { useRef } from "react";

const ResetPassword = () => {
  const [emailValue, setEmailValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [isExistingEmail, setIsExistingEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  async function checkEmail() {
    setLoading(true);
    try {
      await fetchSignInMethodsForEmail(auth, emailValue).then(
        (signInMethods) => {
          if (
            signInMethods.indexOf(
              EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD
            ) === -1
          ) {
            console.log("wtf");
          } else {
            setIsExistingEmail(true);
          }
        }
      );
    } catch {
      alert("No account exists for this email.");
    }

    if (isExistingEmail) {
      resetPassword(auth, emailValue);
      setEmailSent(true);
    }
    setLoading(false);
  }

  return (
    <Flex
      className="reset-pass-background"
      bgGradient="linear(to-b, #E0F4FF, #E3BCD6)"
      w="100%"
      h="100vh"
    >
      {!emailSent && (
        <Flex
          className="reset-container"
          direction="column"
          w="60%"
          h="auto"
          bg="white"
          m="auto"
          p="5"
          borderRadius="5px"
        >
          <Text>
            Enter the email you signed up with and we'll send a link to reset
            your password
          </Text>
          <Input
            placeholder="email"
            my="2"
            onChange={(e) => {
              setEmailValue(e.target.value);
            }}
          ></Input>
          <SplashButton
            color1="#FCA3BD"
            color2="#B7D0F5"
            p="2"
            w="100%"
            my="4"
            onClick={checkEmail}
            isLoading={loading}
          >
            Continue
          </SplashButton>
          <Text my="2" mx="auto">
            Don't have an account?{" "}
            <Text
              as="a"
              href="/signup"
              bgClip="text"
              bgGradient="linear(to-t, #FCA3BD, #B7D0F5)"
              fontWeight="bold"
            >
              Signup
            </Text>
          </Text>
        </Flex>
      )}
      {emailSent && (
        <Flex
          className="reset-container"
          direction="column"
          w="60%"
          h="auto"
          bg="white"
          m="auto"
          p="5"
          borderRadius="5px"
        >
          <Text>Email Sent</Text>
        </Flex>
      )}
    </Flex>
  );
};

export default ResetPassword;
