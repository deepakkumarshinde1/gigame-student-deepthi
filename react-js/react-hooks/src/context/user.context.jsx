import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

let UserContext = createContext({});

export function useUserContext() {
  let context = useContext(UserContext);
  return context;
}

export function UserContextProvider({ children }) {
  let [users, setUsers] = useState([]);
  let getUserList = async () => {
    try {
      let url = `https://jsonplaceholder.typicode.com/users`;
      let { data } = await axios.get(url);
      setUsers(data);
    } catch (error) {
      alert(error.message);
    }
  };
  let removeUser = (id) => {
    const userList = users.filter((user) => {
      return user.id !== id;
    });
    setUsers(userList);
  };
  useEffect(() => {
    getUserList();
  }, []);

  let shared = {
    users,
    removeUser,
  };
  return <UserContext.Provider value={shared}>{children}</UserContext.Provider>;
}
