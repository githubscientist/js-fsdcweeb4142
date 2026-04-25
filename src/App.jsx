import { useState } from "react";

const App = () => {
  const [reactions, setReactions] = useState({
    likes: 0,
    dislikes: 0
  });
  const [history, setHistory] = useState([]);

  const likeHandler = () => {
    setReactions({
      ...reactions,
      likes: reactions.likes + 1
    });
    setHistory([...history, 'L']);
  };

  const dislikeHandler = () => {
    setReactions({
      ...reactions,
      dislikes: reactions.dislikes + 1
    });
    setHistory([...history, 'D']);
  }

  console.log(history);

  return (
    <>
      <button onClick={likeHandler}>
        <span className="material-symbols-outlined">
          thumb_up
        </span>
        {reactions.likes}
      </button>&nbsp;
      <button onClick={dislikeHandler}>
        <span className="material-symbols-outlined">
          thumb_down
        </span>
        {reactions.dislikes}
      </button>
    </>
  )
}

export default App;