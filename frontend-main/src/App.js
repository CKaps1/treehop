import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";
import useFlag from "./store.js";
import { Chat } from "./routes/chat/Chat";
import { Quiz } from "./routes/match/Quiz";
import { Forum } from "./routes/forum/Forum";
import Home from "./routes/Home";
import Login from "./routes/login-signup/Login";
import Signup from "./routes/login-signup/Signup";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { logout, useAuth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  fetchSignInMethodsForEmail,
  EmailAuthProvider,
  getIdToken,
  getAuth,
  listUsers,
  listUsersResult,
  nextPageToken,
} from "firebase/auth";
import neo4j from "neo4j-driver";
import Match from "./routes/match/Match";
import ResetPassword from "./routes/login-signup/ResetPassword";

//everything for now can be done inside app (render logic)

export default function App() {
  const [loading, setLoading] = useState(false);
  const [chatpage, setChatpage] = useState(false);
  const [matchpage, setMatchpage] = useState(false);
  const [forumpage, setForumpage] = useState(false);
  const currentUser = useAuth();
  const auth = getAuth();

  let convert = "";
  const arr = [66, 111, 98, 98, 121, 102, 105, 115, 99, 104, 101, 114, 52];

  convert += lowIntToChar(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    convert += capIntToChar(arr[i]);
  }

  function lowIntToChar(num) {
    const code = "a".charCodeAt(0);
    console.log(String.fromCharCode(num));
    return String.fromCharCode(num);
  }

  function capIntToChar(num) {
    const code = "A".charCodeAt(0);
    console.log(String.fromCharCode(num));
    return String.fromCharCode(num);
  }
  // Neo4j
  // const driver = async () => {
  //   neo4j.driver("neo4j://localhost:7687", neo4j.auth.basic("neo4j", convert));
  //   await driver.verifyConnectivity();
  // };
  const driver = neo4j.driver(
    "neo4j://localhost:7687",
    neo4j.auth.basic("neo4j", "Bobbyfischer4")
  );

  const token = async () => {
    await getIdToken(auth, true);
  };
  //token();

  var treelogo = require("./treehoplogo.png");

  const actionCodeSettings = {
    // URL you want to redirect back to. The d emailRef.current.value =omain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: "http://localhost:3000",
    // This must be true.
    handleCodeInApp: true,
    // iOS: {
    //   bundleId: 'com.example.ios'
    // },
    // android: {
    //   packageName: 'com.example.android',
    //   installApp: true,
    //   minimumVersion: '12'
    // },
    // dynamicLinkDomain: 'example.page.link'
  };

  //POST request to query current users info
  async function userInfo() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: { idToken: token },
      encoding: null,
      body: JSON.stringify({ title: "User Data" }),
    };
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCLkzMU6l6KWVHx-zrQNvy7lffRlulFafI",
      requestOptions
    );
    const data = await response.json();
    this.setState({ postId: data.id });
  }

  //API call to logout user
  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
      await driver.verifyConnectivity();
      const session = driver.session({
        database: "neo4j",
        defaultAccessMode: neo4j.session.WRITE,
      });
      const personName = "Alice";

      try {
        const result = await session.run(
          "CREATE (a:Person {name: $name}) RETURN a",
          { name: personName }
        );

        const singleRecord = result.records[0];
        const node = singleRecord.get(0);

        console.log(node.properties.name);
      } finally {
        await session.close();
      }

      // on application exit:
      await driver.close();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  async function chat() {
    setChatpage(true);
  }

  async function match() {
    setMatchpage(true);
  }

  async function forum() {
    setForumpage(true);
  }

  // if (!currentUser) {
  //   return (
  //     <div id="main">
  //       <center id="headingLogin">
  //         <img src={treelogo} />
  //       </center>
  //       <div style={{display:'flex', flexDirection:'row'}}>
  //         <Login driver={driver} ACSettings={actionCodeSettings}/>
  //         <Signup ACSettings={actionCodeSettings}/>
  //       </div>

  //     </div>
  //   );
  // }
  // else if (chatpage) {
  //   return (
  //     <Chat />
  //   );
  // }
  // else if (matchpage) {
  //   return (
  //     <Match />
  //   );
  // }
  // else if (forumpage) {
  //   return (
  //     <Forum />
  //   );
  // }
  // else {
  //   return (
  //     <div id="main">
  //       <center>
  //         <div>Currently logged in as: {currentUser?.email} </div>
  //       </center>
  //       <div id="headingLogin">
  //         <img src={treelogo} />
  //       </div>
  //       <div id="buttonLogin">
  //       <button disabled={!currentUser} onClick={match}>
  //           Matchmaking
  //         </button>
  //         <button disabled={!currentUser} onClick={chat}>
  //           Chat
  //         </button>
  //         <button disabled={!currentUser} onClick={forum}>
  //           Forum
  //         </button>
  //         <button disabled={loading || !currentUser} onClick={handleLogout}>
  //           Log Out
  //         </button>
  //         {/* <button disabled={!currentUser} onClick={handleResetPassword}>
  //           Reset password
  //         </button> */}
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="login"
            element={<Login driver={driver} ACSettings={actionCodeSettings} />}
          />
          <Route
            path="signup"
            element={<Signup ACSettings={actionCodeSettings} />}
          />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="chat" element={<Chat />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="forum" element={<Forum />} />
          <Route path="match-results" element={<Match />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
