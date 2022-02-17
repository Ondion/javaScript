import React from "react";
// import Card from "./components/cards"
import "../src/App.css"
import Main from "./Main";
import LadoA from "./LadoA"
import LadoB from "./LadoB"


const obj = {
  name: "nome passado",
  lastName: "lastName passado",
};

function App() {
  return (
    <>
    <LadoA/>
    <Main name = {obj.name} lastName = {obj.lastName}>
    </Main>
    <LadoB/>
    </>
     );
}




export default App;
