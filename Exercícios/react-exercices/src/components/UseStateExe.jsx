import React from 'react';
// import { useState } from 'react';

const UseStateExe = () => {
  
  const [text, setText] = React.useState("UseState")
  const [flag, setFlag] = React.useState(true)
  const [button, setButton] = React.useState("Start")
  const [onoff, setOnOff] = React.useState("btn btn-primary")

    const click = () => {
      if(flag) {
        setText("UseState ON");
        setFlag(false);
        setButton('OFF')
        setOnOff("btn btn-danger")
      } else {
        setText ("UseState OFF");
        setFlag(true);
        setButton("ON")
        setOnOff("btn btn-success")
      }
    }

  return (
    <>
    <h2 className="card">
    {text}
    </h2>
    <button className={onoff} type="button" onClick={click}>{button}</button>
    </>
  );
}

export default UseStateExe;
