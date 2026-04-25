import { useState } from "react";

const App = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const likeHandler = () => {
    setLikes(likes + 1);
  };

  const dislikeHandler = () => {
    setDislikes(dislikes + 1);
  }

  // when the like button is clicked, it will call likeHandler function
  return (
    <>
      <button onClick={likeHandler}>
        <span className="material-symbols-outlined">
          thumb_up
        </span>
        {likes}
      </button>&nbsp;
      <button onClick={dislikeHandler}>
        <span className="material-symbols-outlined">
          thumb_down
        </span>
        {dislikes}
      </button>
    </>
  )
}

export default App;