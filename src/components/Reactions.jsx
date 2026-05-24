import { useContext } from "react";
import { ReactionsContext } from "../App";

const Reactions = () => {
    // consume the context here
    const { likes, setLikes } = useContext(ReactionsContext);

  return (
    <div>
      <h1>Likes: {likes}</h1>
      <button onClick={() => setLikes({ 
        type: "LIKE"
       })}>Like</button>
    </div>
  )
}

export default Reactions;