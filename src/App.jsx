import { useDispatch, useSelector } from "react-redux";
import { selectDislikes, selectLikes, selectReactions, setDislikes, setLikes, setReactions } from "./redux/features/reactionSlice";

const App = () => {

  const likes = useSelector(selectLikes);
  const dispatch = useDispatch();

  const dislikes = useSelector(selectDislikes);

  const reactions = useSelector(selectReactions);

  const handleLikes = () => {
    dispatch(setLikes());
    dispatch(setReactions('LIKE'));
  }

  const handleDislikes = () => {
    dispatch(setDislikes());
    dispatch(setReactions('DISLIKE'));
  }

  return (
    <div>
      <h1>Likes: { likes }</h1>
      <button onClick={handleLikes}>Like</button> 

      <h1>Dislikes: { dislikes }</h1>

      <button onClick={handleDislikes}>Dislike</button>

      <h1>Reactions: </h1> { reactions.join(', ') }
    </div>
  )
}

export default App;