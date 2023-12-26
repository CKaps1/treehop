import React, { useState, useRef } from "react";
// import { GetRequestPut } from "./PutRequest.js";

var options = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree",
];
var lastValues = [0, 0, 0, 0, 0, 0];

const apiURL = "https://4r8i9z3ua8.execute-api.ca-central-1.amazonaws.com";

export class Answers extends React.Component {
  // https://stackoverflow.com/questions/64070451/modify-the-state-from-another-file-in-react

  state = {
    selected: "Disagree",
  };

  radiobutton = React.createRef();

  handleInput = (e) => {
    // request in here
    localStorage.setItem("resultClicked", e.target.getAttribute("index"));
    console.log(localStorage.getItem("resultClicked"));

    console.log(e.target.checked);
    // fetch(apiURL, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(localStorage.getItem("resultClicked")),
    // });
    //alert("hello");
  };

  clearAll = (e) => {
    this.radiobutton.current.checked = false;
    // stuff here
  };

  /*
    setClicked = e => {
        alert("change");
        this.setState({selected: e.target.getAttribute("item")}, function () {
            console.log("Correct: " + this.state.selected);
        });
        console.log("Checked: " + e.target.checked);
    }
    */
  //likert stuff here
  render() {
    let answers = options.map((item, index) => (
      <React.Fragment key={item}>
        <input
          type="radio"
          className="radioCustomButton"
          ref={this.radiobutton}
          name="answer-option"
          index={index}
          item={item}
          onChange={this.handleInput}
          autoComplete="off"
        />
        <label>{item}</label>
        <br />
      </React.Fragment>
    ));

    return <div id="answer-list">{answers}</div>;
  }
}

export default Answers;
