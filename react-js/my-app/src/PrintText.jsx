import { useEffect } from "react";

function PrintText(props) {
  useEffect(() => {
    // console.log("It works in PrintText");
  }, [props.inputText]);
  return (
    <h1>
      {props.inputText} <button onClick={props.resetInput}>Reset</button>
    </h1>
  );
}

export default PrintText;
