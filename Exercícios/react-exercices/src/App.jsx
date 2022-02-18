import React from "react";
// import Card from "./components/cards"
import "../src/App.css"
// import Main from "./Main";
// import LadoA from "./LadoA"
// import LadoB from "./LadoB"


const objeto = {
  valor1: 'objeto',
  valor2: 'exemplo',
  valor3: 'react',
}

const arrayObjeto = [objeto, objeto, objeto];

function App() {
  return (
      <p> {arrayObjeto.map((element) => {
      return <ListaRender {...element}/> 
  })} 
      </p>
  )
}



function ListaRender ({ valor1, valor2, valor3 }) {

  return (
    <div>
      <p>{valor1}</p>
      <p>{valor2}</p>
      <p>{valor3}</p>
    </div>
  )
}


export default App;


// const obj = {
//   name: "Fábio",
//   lastName: "Xavier",
// };

// const array = ['fabio', 'nogueira', 'xavier']

// const App = () => array.map((e) => <h1>{e}</h1>)
  
  
//   {/* // {Object.values(obj).map((e) => <h1>{e}</h1>)} */}
//   {/* // <h1>.  |  .</h1> */}
//   {/* // <h1>{array}</h1> */}
