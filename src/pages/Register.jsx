import { useDispatch, useSelector } from "react-redux";
import { selectEmail, selectName, selectPassword, setEmail, setName, setPassword } from "../redux/features/registerSlice";
import { useNavigate } from "react-router";

const Register = () => {
  // get the state from the selector
  const name = useSelector(selectName);
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    alert(`Registered user: ${name} with email: ${email}`);

    // Clear the form
    dispatch(setName(""));
    dispatch(setEmail(""));
    dispatch(setPassword(""));

    // Navigate to login page
    navigate("/login");
  }

  return (
      <div>
          <h1>Register</h1>
          <form onSubmit={handleRegister}>
              <input type="text" placeholder="Name" value={name} onChange={(e) => dispatch(setName(e.target.value))} /> &nbsp;
              <input type="email" placeholder="Email" value={email} onChange={(e) => dispatch(setEmail(e.target.value))}
              /> &nbsp;
              <input type="password" placeholder="Password" value={password} onChange={(e) => dispatch(setPassword(e.target.value))} /> &nbsp;
              <br /><br />
              <button type="submit">Register</button>
          </form>
    </div>
  )
}

export default Register;