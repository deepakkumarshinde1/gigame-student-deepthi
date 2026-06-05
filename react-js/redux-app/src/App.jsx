import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './redux/slices/counter.slice';
import NewUser from './NewUser';
import { getUsers } from './redux/services/user.service';

function App() {
  
  const dispatch = useDispatch();
  let {count} = useSelector((state) => state.counterReducer);
  let {users,loading,error} = useSelector((state) => state.userReducer);
  useEffect(()=>{
    dispatch(getUsers());
  },[]);
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
        <h1>{loading ? "Loading...": error ? error : users.length}</h1>
        <NewUser/>
      </section>
    </>
  );
}

export default App
