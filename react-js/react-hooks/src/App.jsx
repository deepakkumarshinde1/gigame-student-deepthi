import Counter from "./components/Counter";
import Text from "./components/Text";
import Users from "./components/Users";
import {
  CounterContextProvider,
  useCounterContext,
} from "./context/counter.context";
import { UserContextProvider } from "./context/user.context";

function App() {
  return (
    <>
      // comp call here
      <CounterContextProvider>
        <Text />
        <Counter />
      </CounterContextProvider>
      <UserContextProvider>
        <Users />
      </UserContextProvider>
    </>
  );
}

export default App;
