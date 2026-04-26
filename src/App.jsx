// controlled input: an input element whose value is controlled by React state.

import { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('form submitted');
    console.log(email);
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <input
            name="email"
            type="email"
            placeholder="email..."
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div>
          <input
            name="password"
            type="password"
            placeholder="password..."
          />
        </div>

        <button type="submit">
          Login
        </button>
      </form>
    </>
  )
}

export default App;