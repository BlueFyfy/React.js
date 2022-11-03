import React, { useState } from "react";
//import ReactDOM from "react-dom";

function App() {
  const [headingText, setHeadingText] = useState("Hello");

  function handleClick() {
    setHeadingText("Submitted");
  }

  const [isMouseOver, setMouseOver] = useState("white");

  function mouseOver() {
    //document.getElementById("btn").style.backgroundColor = "black";
    setMouseOver("black");
  }

  function mouseOut() {
    //document.getElementById("btn").style.backgroundColor = "white";
    setMouseOver("white");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        //id="btn"
        style={{ backgroundColor: isMouseOver }}
        onClick={handleClick}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
