import { useState } from "react";
import Counter from "./Counter";
import Text from "./Text";

function App() {
  let [toggle, setToggle] = useState(true);
  let [pCounter, setPCounter] = useState(1000);
  let changeToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <button onClick={changeToggle}>Toggle</button>
      <button onClick={() => setPCounter(pCounter + 1)}>
        P_Count {pCounter}
      </button>
      {toggle === true ? <Counter pCounter={pCounter} /> : "Its false"}

      {/* <Counter /> */}
      {/* <Text /> */}
      {/* <Text />
      <Text /> */}
    </>
  );
}

export default App;
