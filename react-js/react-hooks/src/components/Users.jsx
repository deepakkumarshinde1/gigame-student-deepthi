import React from "react";
import { useUserContext } from "../context/user.context";

function Users() {
  let { users, removeUser } = useUserContext();
  return (
    <>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.name}
              <button onClick={() => removeUser(user.id)}>Remove</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Users;
