import React from "react";
import "./AppFreeCodeCamp.css";
import UseStateExe from "./UseStateExe";
import UseStateArray from "./UseStateArray";
import UseStateObject from "./UseStateObject";
import SimpleEvent from "./SimpleEvent";
import ConstructorThis from "./ConstructorThis";
import ContadorApp from "./ContadorApp";

function App() {
  return (
    <div className="container">
      <UseStateExe />
      <SimpleEvent />
      <ConstructorThis />
      <ContadorApp />
      <UseStateArray />
      <UseStateObject />
    </div>
  );
}

export default App;
