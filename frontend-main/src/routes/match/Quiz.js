import React, { useRef } from "react";
import "./quiz.scss";
import * as scroll from "react-scroll";
import Matchquestions from "./Matchquestions.js";
import { Question } from "./Question.js";
import { Answers } from "./Answers.js";
import create from "zustand";
import Likert from "../../components/Likert";
import { Box, Button, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import SplashButton from "../../components/SplashButton";

export class Quiz extends React.Component {
  //store stuff
  //panels
  //postcontainer
  //quiz stuff
  state = {
    isStart: true,
    isFinished: false,
    matchQuestion: 0,
    finalAnswer: 0,
  };

  childElement = React.createRef();

  // Animate scrolling
  scrollTo() {
    scroll.animateScroll.scrollTo(1000);
  }

  startQuiz = (e) => {
    this.setState({ isStart: false });
    localStorage.setItem("resultClicked", 3);
    //alert(Matchquestions[this.state.matchQuestion].question);
  };

  goNext = (e) => {
    //alert("hi");
    let resultClicked = parseInt(localStorage.getItem("resultClicked"));
    if (resultClicked <= 2 && resultClicked >= -2) {
      this.setState({ matchQuestion: this.state.matchQuestion + 1 });
      if (this.state.matchQuestion === Matchquestions.length - 1) {
        this.setState({ isFinished: true });
      }
      this.setState({
        finalAnswer:
          this.state.finalAnswer +
          Matchquestions[this.state.matchQuestion].weight * (resultClicked - 2),
      });
    }
    this.childElement.current.clearAll();
    localStorage.setItem("resultClicked", 3);
  };

  // Set method of answerClicked
  setAnswerClicked = (value) => {
    this.setState({ answerClicked: value });
  };

  render() {
    if (this.state.isStart) {
      return (
        // <div className="start">
        //   <div className="title">Treehop Matchmaking</div>
        //   <div className="titletext">
        //     <h1>
        //       Find your perfect <br />
        //       <span> match </span>
        //     </h1>
        //   </div>
        // <Box className="scroll" onClick={this.scrollTo} mx="auto">
        //   <svg
        //     className="scrollSVG"
        //     viewBox="0 0 250 250"
        //     xmlns="http://www.w3.org/2000/svg"
        //     width="50"
        //     height="50"
        //   >
        //     <path d="M38.399 76.8c1.637 0 3.274.625 4.524 1.875l85.075 85.076 85.075-85.076c2.5-2.5 6.55-2.5 9.05 0s2.5 6.55 0 9.05l-89.6 89.601c-2.5 2.5-6.551 2.5-9.051 0l-89.6-89.601c-2.5-2.5-2.5-6.55 0-9.05 1.252-1.25 2.89-1.875 4.527-1.875z" />
        //   </svg>
        // </Box>
        //   <div className="instructions">
        //     <div className="instructionpanel">
        //       <h3>1. Answer questions</h3>
        //       <h3>2. Get results</h3>
        //       <h3>3. Profit :p</h3>
        //     </div>
        //     <button className="startbutton" onClick={this.startQuiz}>
        //       {" "}
        //       Start Quiz{" "}
        //     </button>
        //   </div>
        // </div>
        <Flex
          direction="column"
          sx={{ "scrollbar-width": "none" }}
          userSelect="none"
        >
          <Flex direction="column" h="100vh">
            <Text
              fontWeight="700"
              fontSize="120px"
              pt="170px"
              lineHeight="140px"
              textAlign="center"
              bgGradient="linear(to-b, #E0F4FF, #E3BCD6)"
              bgClip="text"
            >
              Treehop Matchmaking
            </Text>
            <Text
              mx="auto"
              my="6"
              fontWeight="500"
              letterSpacing="2px"
              textAlign="center"
              fontSize="2em"
              color="#b7cded"
            >
              Find your perfect match
            </Text>
            <Box
              className="scroll"
              onClick={this.scrollTo}
              mx="auto"
              mt="auto"
              mb="10"
            >
              <svg
                className="scrollSVG"
                viewBox="0 0 250 250"
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
              >
                <path d="M38.399 76.8c1.637 0 3.274.625 4.524 1.875l85.075 85.076 85.075-85.076c2.5-2.5 6.55-2.5 9.05 0s2.5 6.55 0 9.05l-89.6 89.601c-2.5 2.5-6.551 2.5-9.051 0l-89.6-89.601c-2.5-2.5-2.5-6.55 0-9.05 1.252-1.25 2.89-1.875 4.527-1.875z" />
              </svg>
            </Box>
          </Flex>

          <Spacer m="auto" />
          <Flex direction="column" h="100vh">
            <Box m="auto">
              <Heading as="h3">1. Answer questions</Heading>
              <Heading as="h3">2. Get results</Heading>
              <Heading as="h3">3. Profit :p</Heading>
            </Box>
            <SplashButton
              color1="#fac5cf"
              color2="#b3b6ff"
              onClick={this.startQuiz}
              mx="15rem"
              mb="25rem"
              size="lg"
            >
              <Text p="3">Start Quiz</Text>
            </SplashButton>
          </Flex>
        </Flex>
      );
    } else {
      if (!this.state.isFinished) {
        // JSX elements can have only one parent property (react sucks)
        return (
          <Flex direction="column" className="question-display">
            <Likert
              mx="auto"
              question={Matchquestions[this.state.matchQuestion].question}
              responses={[
                { value: -2, text: "Strongly Disagree" },
                { value: -1, text: "Disagree" },
                { value: 0, text: "Neutral" },
                { value: 1, text: "Agree" },
                { value: 2, text: "Strongly" },
              ]}
            />
            <SplashButton
              color1="#7928CA"
              color2="#FF0080"
              onClick={this.goNext}
              m="auto"
            >
              <Text p="3">Next question</Text>
            </SplashButton>
          </Flex>
        );
      } else {
        return (
          <p>
            {" "}
            YOU HAVE BEEN MATCHED WITH CHRISTIAN FOR ALL ETERNITY TO WATCH HIM
            LEAVE YOU FOR CHESS TOURNAMENTS <br />
            Final score: {this.state.finalAnswer}{" "}
          </p>
        );
      }
    }
  }
}
