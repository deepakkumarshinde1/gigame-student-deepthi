import { useCounterContext } from "../context/counter.context";

function Counter() {
  let { updateCounter } = useCounterContext();
  return (
    <div>
      <button onClick={updateCounter}>INC</button>
    </div>
  );
}

export default Counter;
