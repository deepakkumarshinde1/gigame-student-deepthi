function PrintText(props) {
  return (
    <h1>
      {props.inputText} <button onClick={props.resetInput}>Reset</button>
    </h1>
  );
}

export default PrintText;
