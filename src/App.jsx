// controlled input: an input element whose value is controlled by React state.

import { useState } from "react";

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

  return (
    <div>
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 w-100 mx-auto mt-10 border border-gray-300 rounded p-8 shadow-lg"
      >
        <h1
          className="text-2xl font-bold text-center"
        >Login</h1>
        <div
          className="flex flex-col gap-2"
        >
          <input
            name="email"
            type="email"
            placeholder="Type your email..."
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            className="border border-gray-300 rounded px-3 py-2"
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
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-3 py-2 w-full"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default App;