import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { signup, auth, resetPassword } from "../../firebase";
import {
  sendSignInLinkToEmail,
  fetchSignInMethodsForEmail,
  EmailAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailLink,
  isSignInWithEmailLink,
} from "firebase/auth";
import PasswordInput from "../../components/PasswordInput";
import { Flex, Input, Text } from "@chakra-ui/react";
import SplashButton from "../../components/SplashButton";

const Signup = (props) => {
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  useEffect(() => {
    setPasswordsMatch(passwordValue === confirmPasswordValue);
  }, [passwordValue, confirmPasswordValue]);
  const validEmailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  var flag = -1;

  //testing signup verification
  async function handleSignup() {
    setLoading(true);
    try {
      await fetchSignInMethodsForEmail(auth, emailValue).then(
        (signInMethods) => {
          if (
            signInMethods.indexOf(
              EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD
            ) !== -1
          ) {
            alert("Account already exists for this email.");
            flag = 1;
          }
        }
      );
      if (flag === -1) {
        // if (emailRef.current.value.includes("@uwaterloo.ca")){
        createUserWithEmailAndPassword(auth, emailValue, passwordValue);
        await sendSignInLinkToEmail(auth, passwordValue, props.ACSettings);
        window.localStorage.setItem("emailForSignIn", emailValue);
        alert("Email sent");
        if (emailValue.includes("@mail.utoronto.ca")) {
          //await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
          await sendSignInLinkToEmail(emailValue, props.ACSettings);
          window.localStorage.setItem("emailForSignIn", emailValue);
          alert("Email sent, waterloo > uoft, L + ratio bozo");
        }
        // }
      }
    } catch {
      alert("error");
    }
    setLoading(false);
  }

  return (
    <Flex
      className="login-background"
      bgGradient="linear(to-b, #E0F4FF, #E3BCD6)"
      w="100%"
      h="100vh"
    >
      <Flex
        className="signup-container"
        direction="column"
        w="60%"
        h="auto"
        bg="white"
        m="auto"
        p="5"
        borderRadius="5px"
      >
        <Text mx="auto" fontWeight="bold" fontSize="3xl">
          Hello Friend!
        </Text>
        <Input
          ref={emailRef}
          placeholder="Email"
          my="2"
          onChange={(e) => {
            setEmailValue(e.target.value);
            setValidEmail(validEmailRegex.test(emailValue));
          }}
        />
        {!validEmail && emailValue !== "" && (
          <Text color="red" ml="2">
            Please provide a valid email address
          </Text>
        )}
        <PasswordInput
          ref={passwordRef}
          placeholder="Password"
          my="2"
          onChange={(e) => setPasswordValue(e.target.value)}
        />
        <PasswordInput
          disabled={passwordValue === ""}
          placeholder="Confirm Password"
          my="2"
          onChange={(e) => setConfirmPasswordValue(e.target.value)}
        />
        {!passwordsMatch &&
          passwordValue !== "" &&
          confirmPasswordValue !== "" && (
            <Text color="red">Passwords do not match!</Text>
          )}
        <SplashButton
          disabled={loading || emailValue === "" || passwordValue === ""}
          onClick={handleSignup}
          color1="#FCA3BD"
          color2="#B7D0F5"
          p="2"
          w="100%"
          my="4"
        >
          Sign Up
        </SplashButton>
        <Text my="2" mx="auto">
          Already have an account?{" "}
          <Text
            as="a"
            href="/login"
            bgClip="text"
            bgGradient="linear(to-t, #FCA3BD, #B7D0F5)"
            fontWeight="bold"
          >
            Log in
          </Text>
        </Text>
      </Flex>
    </Flex>
  );
};

export default Signup;
