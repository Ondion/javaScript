import React from "react";
import "../src/App.css"


const aqui = (x) => console.log(x);

const fabio = "fabio"
function App() {
  return (
   <button onClick={() => aqui(fabio)}>React!</button>
  )
}

export default App;
