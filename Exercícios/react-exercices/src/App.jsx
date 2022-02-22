import React from "react";
import "../src/App.css"
import UseStateExe from "./components/UseStateExe";
import UseStateArray from "./components/UseStateArray";
import UseStateObject from "./components/UseStateObject";
import SimpleEvent from "./components/SimpleEvent"
import ConstructorThis from "./components/ConstructorThis";
import ContadorApp from "./components/ContadorApp";




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
  )
}

export default App;
