import React from "react";
//import { render } from "react-dom";
import Login from "./Login";

var isLoggedIn = false;

//function renderConditionally() {}

//const currentTime = new Date(2022, 10, 20, 14).getHours();

function App() {
  return (
    //currentTime > 12 ? <h1>What are you doing?</h1> : null
    //currentTime > 12 && <h1>What are you doing?</h1>
    <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
  );
}

export default App;
