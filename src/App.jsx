import { useEffect, useState } from "react";

const App = () => {

  const [count, setCount] = useState(0);

  // 1. without dependencies list
  useEffect(() => {
    // this will happen whenever the component is rendered or re-rendered
    fetch(`https://69f6d332a72f01a951b98c80.mockapi.io/todos`)
      .then(response => response.json())
      .then(todos => console.log(todos));
  });

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Fetch Todos</button>
    </>
  )
}

export default App;