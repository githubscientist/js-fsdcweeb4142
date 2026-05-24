import { useDispatch, useSelector } from "react-redux";
import { selectEmail, selectPassword, setEmail, setPassword } from "../redux/features/loginSlice";
import { useNavigate } from "react-router";

const Login = () => {
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    alert(`Loggin in with Email: ${email}, Password: ${password}`);
    
    navigate("/dashboard");
  }

  return (
      <div>
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
              <input type="email" placeholder="Email" value={email} onChange={e => dispatch(setEmail(e.target.value))} />  &nbsp;
              <input type="password" placeholder="Password" value={password} onChange={e => dispatch(setPassword(e.target.value))} />&nbsp;
                <button type="submit">Login</button>
          </form>
    </div>
  )
}

export default Login;