import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case 'LIKE':
      return state + 1;
    case 'DISLIKE':
      return state - 1;
    case 'GOLDEN_LIKE':
      return state + action.payload;
    default:
      return state;
  }
}

const App = () => {

  const [likes, setLikes] = useReducer(reducer, 0);

  return (
    <>
      <h1>Likes: {likes}</h1>
      <button onClick={() => setLikes({ type: 'LIKE' })}>Like</button> &nbsp;
      <button onClick={() => setLikes({ type: 'DISLIKE' })}>Dislike</button> &nbsp;
      <button onClick={() => setLikes({ type: 'GOLDEN_LIKE', payload: 100 })}>Golden Like</button>
    </>
  )
}

export default App;