import { useEffect, useLayoutEffect, useState } from "react";
import PrintText from "./PrintText";

function Counter() {
  let [counter, setCounter] = useState(0);
  let [inputText, setInputText] = useState("");

  let increment = () => {
    setCounter(counter + 1);
    // console.log("It works");
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

  // mounting
  useEffect(() => {
    // logic
    console.log("mounting");
  }, []); // [] => dependency array

  // updating
  useEffect(() => {
    // run on counter change
    console.log("updating");
  }, [counter]);

  // unmounting
  useEffect(() => {
    return () => {
      console.log("unmounting");
      // unmounting logic
    };
  }, []); // async

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, []); // sync

  return (
    <>
      {console.log("rendering")}
      {/* <h1>{counter}</h1> */}
      <button onClick={increment}>INC {counter}</button>
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

// initial => memory allocation ( react )
// render => virtual DOM => real DOM ( react )
// mounting => load the component ( only once and we can handel this logic)
// update => update the component ( every time we change the state and props )
// unmounting => remove the component ( only once and we can handel this logic)
