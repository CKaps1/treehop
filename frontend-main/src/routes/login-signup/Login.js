import React from "react";
import { useState, useRef } from "react";
import { login, auth, resetPassword } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
import neo4j from "neo4j-driver";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import SplashButton from "../../components/SplashButton";

const Login = (props) => {
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  //handle login, loginnouser and reset password

  async function handleLoginNoUser() {
    setLoading(true);
    try {
      if (isSignInWithEmailLink(auth, window.location.href)) {
        createUserWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        );
        emailRef.current.value = window.localStorage.getItem("emailForSignIn");
      }
      if (!emailRef.current.value) {
        await sendSignInLinkToEmail(
          auth,
          emailRef.current.value,
          props.ACSettings
        );
      }
      signInWithEmailLink(auth, emailRef.current.value, window.location.href)
        .then((result) => {
          createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
          );
          window.localStorage.removeItem("emailForSignIn");
        })
        .catch((error) => {
          //some random error message
        });
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      alert("Need to sign up to create account");
      handleLoginNoUser();
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
        className="login-container"
        direction="column"
        w="60%"
        h="auto"
        bg="white"
        m="auto"
        p="5"
        borderRadius="5px"
      >
        <Text mx="auto" fontWeight="bold" fontSize="3xl">
          Welcome Back!
        </Text>
        <Input ref={emailRef} placeholder="Email" my="2" />
        <br></br>
        <Input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          my="2"
        />
        <Text as="a" href="reset-password" color="grey">
          {/* make this redirect to the reset password page and do all the backend calls there */}
          Forgot password
        </Text>
        <SplashButton
          disabled={loading}
          onClick={handleLogin}
          color1="#FCA3BD"
          color2="#B7D0F5"
          p="2"
          w="100%"
          my="4"
        >
          Log In
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
    </Flex>
  );
};

export default Login;
