import { useReducer, useState } from "react";

const reducer = (state, action) => {
  // the current state is in -> state
  // has to return the new state
  if (action.type === 'LIKE') {
    // we know that the like button is clicked
    // so we want to increase the current state by 1 and return it
    return state + 1;
  }
}

const App = () => {
  const [likes, setLikes] = useReducer(reducer, 0);

  return (
    <div>
      <h1>Likes: {likes}</h1>
      <button onClick={() => setLikes({ 
        type: "LIKE"
       })}>Like</button>
    </div>
  )
}

export default App;