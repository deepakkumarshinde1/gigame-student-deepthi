import { createContext, useContext, useState } from "react";

let CounterContext = createContext({});

// custom hook
export function useCounterContext() {
  let context = useContext(CounterContext);
  return context;
}

// component => wrapper => props => children
export function CounterContextProvider({ children }) {
  let [counter, setCounter] = useState(101);

  let updateCounter = () => {
    setCounter(counter + 1);
  };

  const shared = {
    counter,
    updateCounter,
  };
  return (
    <CounterContext.Provider value={shared}>{children}</CounterContext.Provider>
  );
}
