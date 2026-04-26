// uncontrolled component or uncontrolled form
// We are not using React state to control the value of the input fields.
const App = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    console.log('form submitted...');
    console.log('Logging in with the following credentials...');
    console.log(event.target.email.value);
    console.log(event.target.password.value);
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