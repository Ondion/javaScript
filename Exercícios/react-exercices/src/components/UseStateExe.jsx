import React from 'react';
// import { useState } from 'react';

const UseStateExe = () => {
  
  const [text, setText] = React.useState("UseState")
  const [deco, setDeco] = React.useState("text-primary")
  const [flag, setFlag] = React.useState(true)
  const [button, setButton] = React.useState("Start")
  const [onoff, setOnOff] = React.useState("btn btn-primary")

    const click = () => {
      if(flag) {
        setText("UseState ON");
        setDeco("text-success")
        setFlag(false);
        setButton('OFF')
        setOnOff("btn btn-danger")
      } else {
        setText ("UseState OFF");
        setDeco("text-danger")
        setFlag(true);
        setButton("ON")
        setOnOff("btn btn-success")
      }
    }

  return (
    <>
    <h2 className="card" className={deco}>
    {text}
    </h2>
    <button className={onoff} type="button" onClick={click}>{button}</button>
    </>
  );
}

export default UseStateExe;
