import React from "react";
import Form from "./Form";
import Login from "./Login";

var userIsRegistered = false;

//this way doesn't need props
// function renderConditionally() {
//   if (userIsRegistered === true) {
//     return <Login />;
//   } else {
//     return <Form />;
//   }
// }
// {/* {userIsRegistered ? <Login /> : <Form />} */}

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}
//Challenge: Without moving the userIsRegistered variable,
//1. Show Login as the button text if userIsRegistered is true.
//Show Register as the button text if userIsRegistered is false.
//2. Only show the Confirm Password input if userIsRegistered is false.
//Don't show it if userIsRegistered is true.
export default App;
