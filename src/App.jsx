// controlled input: an input element whose value is controlled by React state.

import { useState } from "react";
import './App.css';

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('Logging in...');
    console.log(email, password);

    // reset the form
    setEmail("");
    setPassword("");

    event.target.email.focus();
  }

  // const formStyles = {
  //   display: "flex",
  //   flexDirection: "column",
  //   gap: 10,
  //   border: "1px solid lightgray",
  //   padding: "32px"
  // };

  // inline styling
  return (
    <>
      <form
        onSubmit={handleLogin}
        className="formLogin"
      >
        <h1>Login</h1>
        <div>
          <input
            name="email"
            type="email"
            placeholder="Type your email..."
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            style={{
              height: "30px",
              paddingLeft: "16px"
            }}
          />
        </div>

        <div>
          <input
            name="password"
            type="password"
            placeholder="Type your password..."
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{
              height: "30px",
              paddingLeft: "16px"
            }}
          />
        </div>

        <button
          type="submit"
          className="btnLogin"
        >
          Login
        </button>
      </form>
    </>
  )
}

export default App;