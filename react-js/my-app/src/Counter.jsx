import { useState } from "react";
import PrintText from "./PrintText";

function Counter() {
  let [counter, setCounter] = useState(0);
  let [inputText, setInputText] = useState("");

  let increment = () => {
    setCounter(counter + 1);
    console.log("It works");
  };

  let inputChange = (event) => {
    setInputText(event.target.value);
  };

  let resetInput = () => {
    let isReset = confirm("Are you sure to reset ?");
    if (isReset) {
      setInputText("");
    }
  };

  return (
    <>
      {/* <h1>{counter}</h1> */}
      {/* <button onClick={increment}>INC</button> */}
      <input type="text" value={inputText} onChange={inputChange} />
      {/* <button onClick={resetInput}>Reset Input</button> */}
      <PrintText
        inputText={inputText}
        len={inputText.length}
        resetInput={resetInput}
      />
    </>
  );
}

export default Counter;

// Hooks => 16.8 => use => state => useState
