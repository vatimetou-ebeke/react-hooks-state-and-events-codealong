import React,{useState} from "react";


function Toggle() {
  const[isOn,setIsOn] =useState(false);
  function handelClick(){
     setIsOn(!isOn);
  }
  const color = isOn ?"red":"white"
  return <button style={{background:color}} onClick={handelClick}>{isOn ?"ON":"OFF"}</button>;
}

export default Toggle;
