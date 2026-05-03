import { useEffect, useState } from "react";

const App = () => {

  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  // 3. with dependencies list
  useEffect(() => {
    // runs when the component is rendered for the first time alone.
    fetch(`https://69f6d332a72f01a951b98c80.mockapi.io/todos`)
      .then(response => response.json())
      .then(todos => console.log(todos));
  }, [count1, count]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Fetch Todos</button> &nbsp;
      <button onClick={() => setCount1(count1 + 1)}>Change State</button>
    </>
  )
}

export default App;