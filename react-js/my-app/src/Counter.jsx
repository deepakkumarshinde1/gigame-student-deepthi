import { Component, useEffect, useLayoutEffect, useState } from "react";
import PrintText from "./PrintText";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      myCount: props.pCounter,
      inputText: "",
    };
  }

  static getDerivedStateFromProps(newProps, oldState) {
    return { ...oldState, myCount: newProps.pCounter };
  }
  shouldComponentUpdate() {
    return true;
  }
  componentDidCatch(error, info) {}

  // mounting
  componentDidMount() {
    // logic
    console.log("mounting");
  }

  // updating
  componentDidUpdate() {
    // run on counter change
    console.log("updating");
  }

  // unmounting
  componentWillUnmount() {
    console.log("unmounting");
    // unmounting logic
  }

  increment = () => {
    //this.setState({...this.state, counter: this.state.counter + 1});
    this.setState((state) => {
      return { ...state, counter: state.counter + 1 };
    });
    // console.log("It works");
  };

  inputChange = (event) => {
    this.setState({ ...this.state, inputText: event.target.value });
  };

  resetInput = () => {
    let isReset = confirm("Are you sure to reset ?");
    if (isReset) {
      this.setState({ ...this.state, inputText: "" });
    }
  };

  render() {
    return (
      <>
        {/* {console.log("rendering")} */}
        {/* <h1>{counter}</h1> */}
        <h1>{this.state.myCount}</h1>
        <button onClick={this.increment}>INC {this.state.counter}</button>
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.inputChange}
        />
        {/* <button onClick={resetInput}>Reset Input</button> */}
        <PrintText
          inputText={this.state.inputText}
          len={this.state.inputText.length}
          resetInput={this.resetInput}
        />
      </>
    );
  }
}

export default Counter;

// Hooks => 16.8 => use => state => useState

// initial => memory allocation ( react )
// render => virtual DOM => real DOM ( react )
// mounting => load the component ( only once and we can handel this logic)
// update => update the component ( every time we change the state and props )
// unmounting => remove the component ( only once and we can handel this logic)
