// state: a way to store and manage data in a component (component's memory)
// state is used to store data that can change over time and affect the rendering of the component
// in react, we can use useState hook to manage state in functional components
// the useState is a function that returns an array
// the array have a stateful value and a function to update it.

// Note: We should not update or mutate the state directly.
// Note: State change causes re-rendering.
import { useState } from "react";

const App = () => {
  const [likes, setLikes] = useState(0);

  const likeHandler = () => {
    setLikes(likes + 1);
  };

  const dislikeHandler = () => {
    if (likes > 0) {
      setLikes(likes - 1);
    }
  }

  console.log(`likes:${likes}`);

  // when the like button is clicked, it will call likeHandler function
  return (
    <>
      <h1>Likes: {likes}</h1>
      <button onClick={likeHandler}>
        <span className="material-symbols-outlined">
          thumb_up
        </span>
      </button> &nbsp;
      <button onClick={dislikeHandler}>
        <span className="material-symbols-outlined">
          thumb_down
        </span>
      </button>
    </>
  )
}

export default App;