import { useCounterContext } from "../context/counter.context";

function Text() {
  let { counter } = useCounterContext();
  return <h1>Counter : {counter}</h1>;
}

export default Text;
