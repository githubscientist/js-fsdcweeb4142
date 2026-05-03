// import { useState } from "react";

// const App = () => {

//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Inc</button>
//     </>
//   )
// }

// export default App;

import { useEffect, useRef, useState } from "react";

const App = () => {

  let count = useRef(0);
  let [state, setState] = useState(true);

  const handleCount = () => {
    count.current = count.current + 1;
    console.log(count.current);
  }

  useEffect(() => {
    console.log(`current state: ${state}`);
  }, [state]);

  return (
    <>
      <h1>Count: {count.current}</h1>
      <button onClick={handleCount}>Inc</button> &nbsp;
      <button onClick={() => setState(!state)}>Change State</button>
    </>
  )
}

export default App;