import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './redux/slices/counter.slice';
import NewUser from './NewUser';

function App() {
  
  const dispatch = useDispatch();
  let {count} = useSelector((state) => state.counterReducer);
  return (
    <>
      <section id="center">
        <button
          type="button"
          className="counter"
          onClick={() => dispatch(increment())}
        >
          Count is {count}
        </button>
        <NewUser/>
      </section>
    </>
  );
}

export default App
