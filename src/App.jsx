import { useRef } from "react";

const App = () => {

  const emailHandler = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(document.getElementById("email"));

    // console.log(event.target.email.value);

    console.log(emailHandler.current);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Type your email"
          type="email"
          ref={emailHandler}
          id="email"
        />
        &nbsp;
        <button type="submit">Subscribe</button>
      </form>
    </>
  )
}

export default App;