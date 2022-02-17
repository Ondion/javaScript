import React from "react";

// class Main extends React.Component {
//   render(props) {
//     return <h1>Hello, {props.name} {props.lastName}</h1>;
//   }
// }

const Main = (props) => {
  const { name, lastName } = props;
  return(
    <p>valor1: {name} e o valor2: {lastName}</p>
  )
}



export default Main;
