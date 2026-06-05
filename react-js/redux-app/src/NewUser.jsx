import { useDispatch } from "react-redux";
import { handelNewUserInput } from "./redux/slices/user.slice";

function NewUser() {
    const  dispatch = useDispatch();
    let handel = (event) =>{ 
        let _event = {
            value:event.target.value,
            name:event.target.name
        }
        dispatch(handelNewUserInput(_event));
    }
  return (
    <div className="container">
      <div className="form-box">
        <h2>User Registration</h2>

        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              name="name"
              onChange={handel}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handel}
            />
          </div>

          <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="text"
              placeholder="Enter mobile number"
              name="mobile"
              onChange={handel}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              onChange={handel}
            />
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default NewUser;
